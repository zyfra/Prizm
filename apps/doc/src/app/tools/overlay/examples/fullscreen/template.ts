import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  ZuiOverlayControl, ZuiOverlayFullscreenPosition,
  ZuiOverlayGlobalPosition,
  ZuiOverlayInsidePlacement,
  ZuiOverlayService
} from "@digital-plant/zui-components";

@Component({
  selector: 'zui-overlay-fullscreen-example',
  templateUrl: './template.html',
  styles: [`
    .box {
      width: 100%;
      height: 100%;
      background: darkseagreen;
      padding: 8px;
      display: inline-block;
      color: white;
    }
  `]
})
export class ZuiOverlayExampleFullscreenComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef: TemplateRef<unknown>;

  private control: ZuiOverlayControl;
  constructor(private readonly overlay: ZuiOverlayService) {}

  public ngOnInit(): void {
    this.control = this.overlay
      .position(new ZuiOverlayFullscreenPosition())
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
