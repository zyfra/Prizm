import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  PrizmOverlayControl,
  PrizmOverlayGlobalPosition,
  PrizmOverlayInsidePlacement,
  PrizmOverlayService,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-overlay-global-example',
  templateUrl: './template.html',
  styles: [
    `
      .box {
        background: darkseagreen;
        padding: 8px;
        display: inline-block;
        color: white;
        margin-left: 8px;
      }
    `,
  ],
})
export class PrizmOverlayExampleGlobalComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef!: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef!: TemplateRef<unknown>;

  private control!: PrizmOverlayControl;
  constructor(private readonly overlay: PrizmOverlayService) {}

  public ngOnInit(): void {
    const position = new PrizmOverlayGlobalPosition({
      // Pass position placement
      placement: PrizmOverlayInsidePlacement.BOTTOM_LEFT,
      // Pass source element
      element: this.elementRef.nativeElement,
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
