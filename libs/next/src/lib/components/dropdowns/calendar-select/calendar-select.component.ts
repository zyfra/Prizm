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
  PzmOverlayControl,
  PzmOverlayOutsidePlacement,
  PzmOverlayRelativePosition,
  PzmOverlayService,
} from '../../../modules/overlay';
import { PolymorphContent } from '../../../directives';
import { debounceTime, delay, filter, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { BehaviorSubject, combineLatest, fromEvent, Observable, Subject, timer, zip } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { pzmDefaultProp } from '../../../decorators';
import { PZM_DROPDOWN_HOST_OPTIONS, PzmDropdownHostOptions } from './calendar-select.options';
import { PzmDropdownHostWidth } from './models';
import { pzmGenerateId } from '../../../util';

const PZM_DROPDOWN_TIME_DIFFERENCE = 1000/60;

@Component({
  selector: 'pzm-dropdown-host',
  templateUrl: './calendar-select.component.html',
  styleUrls: ['./calendar-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PzmDestroyService
  ],
  exportAs: 'pzm-dropdown-host'
})
export class PzmDropdownHostComponent implements AfterViewInit {
  @Input() content: PolymorphContent;

  @Input()
  @pzmDefaultProp()
  pzmDropdownHostId: string = 'dropdownHostId_' + pzmGenerateId();

  @Input()
  @pzmDefaultProp()
  delay = 0;

  @Input()
  @pzmDefaultProp()
  canOpen = true;

  @Input()
  @pzmDefaultProp()
  closeByEsc = false;

  @Input()
  @pzmDefaultProp()
  pzmDropdownHostWidth?: PzmDropdownHostWidth = this.options.width;

  @Input()
  @pzmDefaultProp()
  pzmDropdownHostCloseOnBackdropClick = this.options.closeOnBackdrop;

  @HostBinding('attr.testId')
  readonly testId = 'pzm_dropdown_host';

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

  private _placement: PzmOverlayOutsidePlacement = this.options.placement;
  @Input() set placement(place: PzmOverlayOutsidePlacement) {
    this.position?.updateConfig({placement: place});
  }
  get placement(): PzmOverlayOutsidePlacement {
    return this._placement;
  }

  @Input() set isOpen(state: boolean) {
    this.isOpen$.next(state);
  }

  @ViewChild('temp') temp: TemplateRef<HTMLDivElement>;

  @Output() readonly isOpenChange = new EventEmitter<boolean>();

  private overlay: PzmOverlayControl;
  private isOpen$ = new BehaviorSubject(false);

  private readonly positionSource$ = new BehaviorSubject<string>('');
  readonly position$: Observable<string> = this.positionSource$.pipe(
    delay(0)
  );

  private position: PzmOverlayRelativePosition;
  readonly wrapper_class = 'pzm-overlay-dropdown-host no-overflow';

  @ViewChild('contentBlockRef') contentBlockRef: ElementRef;

  constructor(
    private readonly pzmOverlayService: PzmOverlayService,
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PZM_DROPDOWN_HOST_OPTIONS) private readonly options: PzmDropdownHostOptions,
    public readonly el: ElementRef<HTMLElement>,
    private readonly cdRef: ChangeDetectorRef,
    private readonly destroy$: PzmDestroyService,
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
      width: this.pzmDropdownHostWidth ??  this.el.nativeElement.offsetWidth
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
    this.position = new PzmOverlayRelativePosition({
      placement: this.placement,
      autoReposition: this.autoReposition,
      element: this.el.nativeElement,
    });
    this.overlay = this.pzmOverlayService
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

  private initPositionListener(position: PzmOverlayRelativePosition): void {
    position.pos$.pipe(
      tap((data) => {
        if(!data.extra) return;
        this.positionSource$.next(data.extra);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
