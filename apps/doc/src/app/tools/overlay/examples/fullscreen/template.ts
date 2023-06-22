import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  PrizmOverlayControl,
  PrizmOverlayFullscreenPosition,
  PrizmOverlayGlobalPosition,
  PrizmOverlayInsidePlacement,
  PrizmOverlayService,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-overlay-fullscreen-example',
  templateUrl: './template.html',
  styles: [
    `
      .box {
        width: 100%;
        height: 100%;
        background: darkseagreen;
        padding: 8px;
        display: inline-block;
        color: white;
      }
    `,
  ],
})
export class PrizmOverlayExampleFullscreenComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef: TemplateRef<unknown>;

  private control: PrizmOverlayControl;
  constructor(private readonly overlay: PrizmOverlayService) {}

  public ngOnInit(): void {
    this.control = this.overlay
      .position(new PrizmOverlayFullscreenPosition())
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
