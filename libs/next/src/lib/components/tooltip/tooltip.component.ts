import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
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
import {PolymorpheusContent} from "../../directives";

@Component({
    selector: 'zui-dropdown-host',
    templateUrl: './tooltip.template.html',
    styleUrls: ['./tooltip.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
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

  @ViewChild('temp', {read: TemplateRef}) templateRef: TemplateRef<any>;
  private overlay: ZuiOverlayControl;

  constructor(
    private readonly zuiOverlayService: ZuiOverlayService,
    private readonly el: ElementRef
  ) {}

  ngOnDestroy(): void {
    this.overlay.close();
  }

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

    this.overlay

    // this.overlay.position
    // this.overlay.config?

    console.log('#mz ngAfterViewInit host', {
      position,
      config: this.overlay.config,
      overlay: this.overlay,
      element: this.el.nativeElement
    });
  }
}
