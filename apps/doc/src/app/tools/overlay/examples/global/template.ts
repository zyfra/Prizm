import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  PzmOverlayControl,
  PzmOverlayGlobalPosition,
  PzmOverlayInsidePlacement,
  PzmOverlayService
} from "@digital-plant/zui-components";

@Component({
  selector: 'pzm-overlay-global-example',
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
export class PzmOverlayExampleGlobalComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef: TemplateRef<unknown>;

  private control: PzmOverlayControl;
  constructor(private readonly overlay: PzmOverlayService) {}

  public ngOnInit(): void {
    const position = new PzmOverlayGlobalPosition({
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
