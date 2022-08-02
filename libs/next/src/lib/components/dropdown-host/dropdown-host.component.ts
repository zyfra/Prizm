import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  ZuiOverlayControl,
  ZuiOverlayOutsidePlacement,
  ZuiOverlayRelativePosition,
  ZuiOverlayService
} from "../../modules/overlay";
import {PolymorphContent} from "../../directives";
import {delay, filter, switchMap, take, takeUntil, tap} from "rxjs/operators";
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import {BehaviorSubject, fromEvent, Observable} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {zuiDefaultProp} from "../../decorators";
import {generateId} from "../../util";

@Component({
  selector: 'zui-dropdown-host',
  templateUrl: './dropdown-host.template.html',
  styleUrls: ['./dropdown-host.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ZuiDestroyService
  ],
  exportAs: 'zui-dropdown-host'
})
export class ZuiDropdownHostComponent implements AfterViewInit, OnDestroy {
  @Input() content: PolymorphContent;

  @Input()
  @zuiDefaultProp()
  zuiDropdownHostId: string = 'dropdownHostId_' + generateId();

  @Input()
  @zuiDefaultProp()
  closeOnBackdropClick = true;

  private _autoReposition: boolean;
  @Input() set autoReposition(state: boolean) {
    this.position?.updateConfig({autoReposition: this._autoReposition = state});
  }
  get autoReposition (): boolean {
    return this._autoReposition;
  }

  private _placement: ZuiOverlayOutsidePlacement = ZuiOverlayOutsidePlacement.BOTTOM_LEFT;
  @Input() set placement(place: ZuiOverlayOutsidePlacement) {
    this.position?.updateConfig({placement: place});
  }
  get placement(): ZuiOverlayOutsidePlacement {
    return this._placement;
  }

  @Input() set isOpen(state: boolean) {
    if (state) {
      this.open();
    } else {
      this.close();
    }
  }

  @ViewChild('temp') temp: TemplateRef<HTMLDivElement>;

  @Output() readonly isOpenChange = new EventEmitter<boolean>();

  private overlay: ZuiOverlayControl;

  private readonly positionSource$ = new BehaviorSubject<string>('');
  readonly position$: Observable<string> = this.positionSource$.pipe(
    delay(0)
  );

  private position: ZuiOverlayRelativePosition;
  readonly wrapper_class = 'zui-overlay-dropdown-host';

  constructor(
    private readonly zuiOverlayService: ZuiOverlayService,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly el: ElementRef,
    private readonly cdRef: ChangeDetectorRef,
    private readonly destroy$: ZuiDestroyService,
  ) {}


  ngAfterViewInit(): void {
    this.initOverlay();
    this.initClickListener();
  }

  ngOnDestroy(): void {
    this.close();
  }

  private initClickListener(): void {
    this.overlay.listen('z_open').pipe(
      delay(0),
      switchMap(() => fromEvent<MouseEvent>(this.document, 'click').pipe(
        filter(() => this.overlay?.isOpen && this.closeOnBackdropClick),
        filter(({target}) => !this.document.getElementById(this.zuiDropdownHostId)?.contains(target as HTMLElement)),
        tap(() => this.close()),
        takeUntil( this.overlay.listen('z_close')),
      )),
      takeUntil(this.destroy$)
    ).subscribe();
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
    this.position = new ZuiOverlayRelativePosition({
      placement: this.placement,
      autoReposition: this.autoReposition,
      element: this.el.nativeElement
    });

    this.overlay = this.zuiOverlayService
      .position(this.position)
      .config({wrapperClass: this.wrapper_class})
      .content(this.temp)
      .create();

    this.initPositionListener(this.position);
  }

  private initPositionListener(position: ZuiOverlayRelativePosition): void {
    position.pos$.pipe(
      tap((data) => {
        if(!data.extra) return;
        this.positionSource$.next(data.extra);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
