import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  PrizmOverlayControl,
  PrizmOverlayOutsidePlacement,
  PrizmOverlayService,
  PrizmOverlaySlidePlacement,
  PrizmOverlaySlidePosition,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-overlay-slide-example',
  templateUrl: './template.html',
  styles: [
    `
      .box {
        background: darkseagreen;
        padding: 8px;
        display: inline-block;
        color: white;
        height: 100%;
        width: 300px;
      }
    `,
  ],
})
export class PrizmOverlayExampleSlideComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef: TemplateRef<unknown>;

  private control: PrizmOverlayControl;
  constructor(private readonly overlay: PrizmOverlayService) {}

  public ngOnInit(): void {
    const position = new PrizmOverlaySlidePosition({
      // Pass position placement
      placement: PrizmOverlaySlidePlacement.LEFT,
    });

    this.control = this.overlay
      .position(position)
      .config({
        closeOnDocClick: true,
      })
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
