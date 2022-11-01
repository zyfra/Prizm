import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  ZuiOverlayControl,
  ZuiOverlayGlobalPosition,
  PzmOverlayInsidePlacement,
  PzmOverlayService
} from "@digital-plant/zui-components";

@Component({
  selector: 'zui-overlay-global-example',
  templateUrl: './template.html',
  styles: [`
    .box {
      background: darkseagreen;
      padding: 8px;
      display: inline-block;
      color: white;
      margin-left: 8px;
    }
  `]
})
export class ZuiOverlayExampleGlobalComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef: TemplateRef<unknown>;

  private control: ZuiOverlayControl;
  constructor(private readonly overlay: PzmOverlayService) {}

  public ngOnInit(): void {
    const position = new ZuiOverlayGlobalPosition({
      // Pass position placement
      placement: PzmOverlayInsidePlacement.BOTTOM_LEFT,
      // Pass source element
      element: this.elementRef.nativeElement
    });

    this.control = this.overlay
      .position(position)
      // PASS TEMPLATE
      .content(this.templateRef)
      .create();

  }

  public open(): void {
    this.control.open();
  }

  public close(): void {
    this.control.close();
  }

  public toggle(): void {
    this.control.toggle();
  }
}
