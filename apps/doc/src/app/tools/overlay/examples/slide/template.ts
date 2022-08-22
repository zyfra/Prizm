import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  ZuiOverlayControl,
  ZuiOverlayOutsidePlacement,
  ZuiOverlayService, ZuiOverlaySlidePlacement,
  ZuiOverlaySlidePosition
} from "@digital-plant/zui-components";

@Component({
  selector: 'zui-overlay-slide-example',
  templateUrl: './template.html',
  styles: [`
    .box {
      background: darkseagreen;
      padding: 8px;
      display: inline-block;
      color: white;
      height: 100%;
      width: 300px;
    }
  `]
})
export class ZuiOverlayExampleSlideComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef: TemplateRef<unknown>;

  private control: ZuiOverlayControl;
  constructor(private readonly overlay: ZuiOverlayService) {}

  public ngOnInit(): void {
    const position = new ZuiOverlaySlidePosition({
      // Pass position placement
      placement: ZuiOverlaySlidePlacement.LEFT,
    });

    this.control = this.overlay
      .position(position)
      .config({
        closeOnDocClick: true
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
