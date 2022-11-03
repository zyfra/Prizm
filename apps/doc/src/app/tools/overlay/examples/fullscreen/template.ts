import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  PzmOverlayControl, PzmOverlayFullscreenPosition,
  PzmOverlayGlobalPosition,
  PzmOverlayInsidePlacement,
  PzmOverlayService
} from "@digital-plant/zui-components";

@Component({
  selector: 'pzm-overlay-fullscreen-example',
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
export class PzmOverlayExampleFullscreenComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef: TemplateRef<unknown>;

  private control: PzmOverlayControl;
  constructor(private readonly overlay: PzmOverlayService) {}

  public ngOnInit(): void {
    this.control = this.overlay
      .position(new PzmOverlayFullscreenPosition())
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
