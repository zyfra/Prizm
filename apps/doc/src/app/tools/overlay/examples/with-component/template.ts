import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  PzmOverlayControl, PzmOverlayFullscreenPosition,
  PzmOverlayGlobalPosition,
  PzmOverlayInsidePlacement,
  PzmOverlayService
} from "@digital-plant/zui-components";
import {PzmOverlaySomeComponent} from "./some-component";

@Component({
  selector: 'pzm-overlay-component-example',
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
export class PzmOverlayExampleWithViewComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;

  private control: PzmOverlayControl;
  constructor(private readonly overlay: PzmOverlayService) {}

  public ngOnInit(): void {
    const position = new PzmOverlayGlobalPosition({
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
      .content(PzmOverlaySomeComponent)
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
