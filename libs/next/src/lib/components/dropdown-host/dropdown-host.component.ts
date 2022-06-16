import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  ZuiOverlayControl,
  ZuiOverlayOutsidePlacement,
  ZuiOverlayRelativePosition,
  ZuiOverlayService
} from "../../modules/overlay";
import {PolymorpheusContent} from "../../directives";
import {takeUntil, tap} from "rxjs/operators";
import {filterNotNullish, ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import {Observable, ReplaySubject} from "rxjs";

@Component({
    selector: 'zui-dropdown-host',
    templateUrl: './dropdown-host.template.html',
    styleUrls: ['./dropdown-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
      ZuiDestroyService
    ],
})
export class ZuiDropdownHostComponent implements AfterViewInit, OnDestroy {
  @Input() content: PolymorpheusContent;
  @Input() autoReposition = true;
  @Input() placement: ZuiOverlayOutsidePlacement = ZuiOverlayOutsidePlacement.BOTTOM_LEFT;
  @Input() set open(state: boolean) {
    if (state) {
      this.overlay?.open();
    } else {
      this.overlay?.close();
    }
  }

  @Output() readonly openChange = new EventEmitter<boolean>();

  @ViewChild('temp', {read: TemplateRef}) templateRef: TemplateRef<unknown>;
  private overlay: ZuiOverlayControl;

  private readonly positionSource$ = new ReplaySubject<string>();
  readonly position$: Observable<string> = this.positionSource$.pipe(
    filterNotNullish()
  );

  constructor(
    private readonly zuiOverlayService: ZuiOverlayService,
    private readonly el: ElementRef,
    private readonly destroy$: ZuiDestroyService,
    private readonly renderer2: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    const position = new ZuiOverlayRelativePosition({
      placement: this.placement,
      autoReposition: this.autoReposition,
      element: this.el.nativeElement
    });

    this.overlay = this.zuiOverlayService
      .position(position)
      .content(this.content as TemplateRef<unknown>)
      .create();

    this.initPositionListener(position);
  }

  private initPositionListener(position: ZuiOverlayRelativePosition): void {
    position.pos$.pipe(
      tap((data) => {
        if(!data.extra) return;
        this.positionSource$.next(data.extra);
      }),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.overlay.close();
  }
}
