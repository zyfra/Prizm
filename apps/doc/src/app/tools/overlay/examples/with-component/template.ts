import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  ZuiOverlayControl, ZuiOverlayFullscreenPosition,
  ZuiOverlayGlobalPosition,
  PzmOverlayInsidePlacement,
  PzmOverlayService
} from "@digital-plant/zui-components";
import {ZuiOverlaySomeComponent} from "./some-component";

@Component({
  selector: 'zui-overlay-component-example',
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
export class ZuiOverlayExampleWithViewComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;

  private control: ZuiOverlayControl;
  constructor(private readonly overlay: PzmOverlayService) {}

  public ngOnInit(): void {
    const position = new ZuiOverlayGlobalPosition({
      // Pass position placement
      placement: PzmOverlayInsidePlacement.TOP,
      width: '100%',
      height: 'auto',
      // Pass source element
      element: this.elementRef.nativeElement
    });

    this.control = this.overlay
      .position(position)
      .config({
        closeOnDocClick: true
      })
      // PASS COMPONENT
      .content(ZuiOverlaySomeComponent)
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
