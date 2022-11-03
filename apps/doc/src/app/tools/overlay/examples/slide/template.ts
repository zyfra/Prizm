import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  PzmOverlayControl,
  PzmOverlayOutsidePlacement,
  PzmOverlayService, PzmOverlaySlidePlacement,
  PzmOverlaySlidePosition
} from "@digital-plant/zui-components";

@Component({
  selector: 'pzm-overlay-slide-example',
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
export class PzmOverlayExampleSlideComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;
  @ViewChild('someTemplate', { read: TemplateRef, static: true }) templateRef: TemplateRef<unknown>;

  private control: PzmOverlayControl;
  constructor(private readonly overlay: PzmOverlayService) {}

  public ngOnInit(): void {
    const position = new PzmOverlaySlidePosition({
      // Pass position placement
      placement: PzmOverlaySlidePlacement.LEFT,
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
