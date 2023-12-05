import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  Injector,
  Input,
  Optional,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  PrizmOverlayControl,
  PrizmOverlayModule,
  PrizmOverlayRelativePosition,
  PrizmOverlayService,
} from '../../../modules/overlay';
import {
  PolymorphContent,
  PolymorphModule,
  PrizmDropdownZoneModule,
  PrizmLifecycleModule,
  PrizmMutationObserveModule,
  PrizmZoneEventModule,
} from '../../../directives';
import { debounceTime, delay, distinctUntilChanged, skip, takeUntil, tap } from 'rxjs/operators';
import { PrizmDestroyService, prizmGenerateId } from '@prizm-ui/helpers';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { CommonModule, DOCUMENT } from '@angular/common';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_DROPDOWN_HOST_OPTIONS, PrizmDropdownHostOptions } from './dropdown-host.options';
import {
  PrizmDropdownHostClasses,
  PrizmDropdownHostContext,
  PrizmDropdownHostCustomContext,
  PrizmDropdownHostStyles,
  PrizmDropdownHostWidth,
} from './models';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay/models';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { PrizmDropdownHostControlDirective } from './dropdown-host-control.directive';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmZoneEventService } from '../../../directives/zone-event/zone-event.service';

@Component({
  selector: 'prizm-dropdown-host',
  templateUrl: './dropdown-host.component.html',
  styleUrls: ['./dropdown-host.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService, PrizmZoneEventService],
  exportAs: 'prizm-dropdown-host',
  standalone: true,
  imports: [
    PrizmDropdownHostControlDirective,
    CommonModule,
    PrizmOverlayModule,
    PrizmThemeModule,
    PrizmLifecycleModule,
    PrizmZoneEventModule,
    PolymorphModule,
    PrizmDropdownZoneModule,
    PrizmMutationObserveModule,
  ],
})
export class PrizmDropdownHostComponent extends PrizmAbstractTestId implements AfterViewInit {
  @Input() content!: PolymorphContent<PrizmDropdownHostContext>;

  @Input()
  @prizmDefaultProp()
  prizmDropdownHostId: string = 'dropdownHostId_' + prizmGenerateId();

  @Input()
  @prizmDefaultProp()
  prizmDropdownCustomContext: PrizmDropdownHostCustomContext = {};

  @Input()
  @prizmDefaultProp()
  delay = 0;

  @Input()
  @prizmDefaultProp()
  canOpen = true;

  @Input()
  @prizmDefaultProp()
  closeByEsc = false;

  @Input()
  @prizmDefaultProp()
  closeOnOutsideClick = true;

  @Input()
  prizmDropdownHost!: HTMLElement;

  @Input()
  @prizmDefaultProp()
  set prizmDropdownHostWidth(width: PrizmDropdownHostWidth) {
    this._prizmDropdownHostWidth = width;
    this.updateWidth();
  }
  get prizmDropdownHostWidth() {
    return this._prizmDropdownHostWidth;
  }

  private _prizmDropdownHostWidth: PrizmDropdownHostWidth = this.options.width;

  override readonly testId_ = 'ui_dropdown_host';

  readonly itemForListener = new Set<HTMLElement>();

  private destroyReCalc$ = new Subject<void>();
  private _autoReposition = this.options.autoReposition;
  @Input() set autoReposition(state: boolean) {
    this.position?.updateConfig({ autoReposition: (this._autoReposition = state) });
  }
  get autoReposition(): boolean {
    return this._autoReposition;
  }

  private _placement: PrizmOverlayOutsidePlacement = this.options.placement;
  @Input() set placement(place: PrizmOverlayOutsidePlacement) {
    this.position?.updateConfig({ placement: place });
  }
  get placement(): PrizmOverlayOutsidePlacement {
    return this._placement;
  }

  @Input() set isOpen(state: boolean) {
    this.isOpen$.next(state);
  }
  get isOpen(): boolean {
    return this.isOpen$.value;
  }

  private lastEmittedState!: boolean;

  @Input() dropdownStyles: PrizmDropdownHostStyles;
  @Input() dropdownClasses: PrizmDropdownHostClasses;
  @ViewChild('temp') temp!: TemplateRef<HTMLDivElement>;

  @Output() readonly isOpenChange = new EventEmitter<boolean>();
  private overlay!: PrizmOverlayControl;
  protected isOpen$ = new BehaviorSubject(false);

  private readonly positionSource$ = new BehaviorSubject<string>('');
  readonly position$: Observable<string> = this.positionSource$.pipe(delay(0));

  private position!: PrizmOverlayRelativePosition;
  readonly wrapper_class = 'prizm-overlay-dropdown-host no-overflow';

  @ViewChild('contentBlockRef') contentBlockRef!: ElementRef;

  constructor(
    public readonly prizmOverlayService: PrizmOverlayService,
    public readonly zoneEventService: PrizmZoneEventService,
    @Inject(PrizmDropdownHostControlDirective)
    @Host()
    @Optional()
    public readonly dropdownHostControlDirective: PrizmDropdownHostControlDirective | null,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PRIZM_DROPDOWN_HOST_OPTIONS) private readonly options: PrizmDropdownHostOptions,
    public readonly el: ElementRef<HTMLElement>,
    private readonly cdRef: ChangeDetectorRef,
    public readonly injector: Injector,
    private readonly destroy$: PrizmDestroyService
  ) {
    super();
    this.destroy$.addCallback(() => this.closeOverlay());
  }

  @HostListener('window:keyup.esc')
  public closeIfNeed(): void {
    if (this.closeByEsc) this.closeOverlay();
  }

  public ngAfterViewInit(): void {
    this.initOverlay();
    this.initClickListener();
  }

  public updateWidth(): void {
    this.position?.updateConfig({
      width: this.prizmDropdownHostWidth ?? this.el.nativeElement.offsetWidth,
    });
  }

  private initClickListener(): void {
    this.isOpen$
      .pipe(
        skip(1),
        debounceTime(this.delay),
        distinctUntilChanged(),
        tap(state => {
          if (state) {
            if (this.dropdownHostControlDirective?.enabled ?? true) this.openOverlay();
          } else {
            this.closeOverlay();
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private closeOverlay(): void {
    this.overlay?.close();
    if (this.lastEmittedState) this.isOpenChange.emit((this.lastEmittedState = false));
  }

  private openOverlay(): void {
    this.overlay?.open();
    if (!this.lastEmittedState) this.isOpenChange.emit((this.lastEmittedState = true));
  }

  public open(): void {
    this.isOpen$.next(true);
  }

  public close(): void {
    this.isOpen$.next(false);
  }

  public toggle(): void {
    this.isOpen$.next(!this.isOpen$.value);
  }

  private initOverlay(): void {
    this.position = new PrizmOverlayRelativePosition({
      placement: this.placement,
      autoReposition: this.autoReposition,
      element: this.prizmDropdownHost ?? this.el.nativeElement,
    });
    this.updateWidth();
    this.overlay = this.prizmOverlayService
      .position(this.position)
      .config({
        wrapperClass: this.wrapper_class,
      })
      .content(this.temp)
      .create({
        parentInjector: this.injector,
      });

    this.initPositionListener(this.position);
  }
  public reCalculatePositions(timeout = 0): void {
    this.destroyReCalc$.next();
    timer(timeout)
      .pipe(
        tap(() => this.overlay?.reCalculatePositions()),
        takeUntil(this.destroy$),
        takeUntil(this.destroyReCalc$)
      )
      .subscribe();
  }

  private initPositionListener(position: PrizmOverlayRelativePosition): void {
    position.pos$
      .pipe(
        tap(data => {
          if (!data.extra) return;
          this.positionSource$.next(data.extra);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public addListenerItems(el: HTMLElement): void {
    this.itemForListener.add(el);
  }

  public removeListenerItems(el: HTMLElement): void {
    this.itemForListener.delete(el);
  }

  public outsideClick(): void {
    if (!this.closeOnOutsideClick || !this.isOpen$.value) return;
    this.isOpen$.next(false);
  }
}
