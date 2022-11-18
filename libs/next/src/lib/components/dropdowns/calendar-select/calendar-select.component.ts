import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter, HostBinding,
  HostListener,
  Inject,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  PrizmOverlayControl,
  PrizmOverlayOutsidePlacement,
  PrizmOverlayRelativePosition,
  PrizmOverlayService,
} from '../../../modules/overlay';
import { PolymorphContent } from '../../../directives';
import { debounceTime, delay, filter, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { BehaviorSubject, combineLatest, fromEvent, Observable, Subject, timer, zip } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_DROPDOWN_HOST_OPTIONS, PrizmDropdownHostOptions } from './calendar-select.options';
import { PrizmDropdownHostWidth } from './models';
import { prizmGenerateId } from '../../../util';

const PRIZM_DROPDOWN_TIME_DIFFERENCE = 1000/60;

@Component({
  selector: 'prizm-dropdown-host',
  templateUrl: './calendar-select.component.html',
  styleUrls: ['./calendar-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService
  ],
  exportAs: 'prizm-dropdown-host'
})
export class PrizmDropdownHostComponent implements AfterViewInit {
  @Input() content: PolymorphContent;

  @Input()
  @prizmDefaultProp()
  prizmDropdownHostId: string = 'dropdownHostId_' + prizmGenerateId();

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
  prizmDropdownHostWidth?: PrizmDropdownHostWidth = this.options.width;

  @Input()
  @prizmDefaultProp()
  prizmDropdownHostCloseOnBackdropClick = this.options.closeOnBackdrop;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_dropdown_host';

  private readonly documentClick$ = new Subject<number>();
  private readonly containerClick$ = new Subject<number>();

  private destroyReCalc$ = new Subject<void>();
  private _autoReposition = this.options.autoReposition;
  @Input() set autoReposition(state: boolean) {
    this.position?.updateConfig({autoReposition: this._autoReposition = state});
  }
  get autoReposition (): boolean {
    return this._autoReposition;
  }

  private _placement: PrizmOverlayOutsidePlacement = this.options.placement;
  @Input() set placement(place: PrizmOverlayOutsidePlacement) {
    this.position?.updateConfig({placement: place});
  }
  get placement(): PrizmOverlayOutsidePlacement {
    return this._placement;
  }

  @Input() set isOpen(state: boolean) {
    this.isOpen$.next(state);
  }

  @ViewChild('temp') temp: TemplateRef<HTMLDivElement>;

  @Output() readonly isOpenChange = new EventEmitter<boolean>();

  private overlay: PrizmOverlayControl;
  private isOpen$ = new BehaviorSubject(false);

  private readonly positionSource$ = new BehaviorSubject<string>('');
  readonly position$: Observable<string> = this.positionSource$.pipe(
    delay(0)
  );

  private position: PrizmOverlayRelativePosition;
  readonly wrapper_class = 'prizm-overlay-dropdown-host no-overflow';

  @ViewChild('contentBlockRef') contentBlockRef: ElementRef;

  constructor(
    private readonly prizmOverlayService: PrizmOverlayService,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PRIZM_DROPDOWN_HOST_OPTIONS) private readonly options: PrizmDropdownHostOptions,
    public readonly el: ElementRef<HTMLElement>,
    private readonly cdRef: ChangeDetectorRef,
    private readonly destroy$: PrizmDestroyService,
  ) {
    this.destroy$.addCallback(() => this.close());
  }

  @HostListener('window:keyup.esc')
  public closeIfNeed(): void {
    if (this.closeByEsc) this.close()
  }

  public ngAfterViewInit(): void {
    this.initOverlay();
  }

  public updateWidth(): void {
    this.position.updateConfig({
      width: this.prizmDropdownHostWidth ??  this.el.nativeElement.offsetWidth
    })
  }

  @HostListener('window:click', ['$event']) public onDocumentClick(event: MouseEvent): void {
    this.documentClick$.next(Date.now());
  }

  public close(): void {
    this.overlay?.close();
    this.isOpenChange.emit(false);
  }

  public open(): void {
    this.overlay?.open();
    this.isOpenChange.emit(true);
  }

  private initOverlay(): void {
    this.position = new PrizmOverlayRelativePosition({
      placement: this.placement,
      autoReposition: this.autoReposition,
      element: this.el.nativeElement,
    });
    this.overlay = this.prizmOverlayService
      .position(this.position)
      .config({wrapperClass: this.wrapper_class})
      .content(this.temp)
      .create();

    this.initPositionListener(this.position);
  }
  public reCalculatePositions(timeout = 0): void {
    this.destroyReCalc$.next()
    timer(timeout).pipe(
      tap(() => this.overlay?.reCalculatePositions()),
      takeUntil(this.destroy$),
      takeUntil(this.destroyReCalc$),
    ).subscribe();
  }

  public clickOnContainer(event: MouseEvent): void {
    this.containerClick$.next(Date.now());
  }

  private initPositionListener(position: PrizmOverlayRelativePosition): void {
    position.pos$.pipe(
      tap((data) => {
        if(!data.extra) return;
        this.positionSource$.next(data.extra);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
