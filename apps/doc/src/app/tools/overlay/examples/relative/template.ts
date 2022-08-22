import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  ZuiOverlayControl,
  ZuiOverlayOutsidePlacement,
  ZuiOverlayRelativePosition,
  ZuiOverlayService
} from "@digital-plant/zui-components";

@Component({
  selector: 'zui-overlay-relative',
  templateUrl: './template.html',
  styles: [`
    .box {
      background: darkseagreen;
      padding: 8px;
      display: inline-block;
      color: white;
      margin-top: 3px;
    }
  `]
})
export class ZuiOverlayExampleRelativeComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef: TemplateRef<unknown>;

  private control: ZuiOverlayControl;
  constructor(private readonly overlay: ZuiOverlayService) {}

  public ngOnInit(): void {
    const position = new ZuiOverlayRelativePosition({
      // Pass position placement
      placement: ZuiOverlayOutsidePlacement.BOTTOM_LEFT,
      // Pass source element
      element: this.elementRef.nativeElement,
      // On scroll re calculate position
      autoReposition: true
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
