import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  PrizmOverlayControl, PrizmOverlayFullscreenPosition,
  PrizmOverlayGlobalPosition,
  PrizmOverlayInsidePlacement,
  PrizmOverlayService
} from "@digital-plant/zui-components";
import {PrizmOverlaySomeComponent} from "./some-component";

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
export class PrizmOverlayExampleWithViewComponent implements OnInit {
  @ViewChild('elementRef', { read: ElementRef, static: true }) elementRef: ElementRef;

  private control: PrizmOverlayControl;
  constructor(private readonly overlay: PrizmOverlayService) {}

  public ngOnInit(): void {
    const position = new PrizmOverlayGlobalPosition({
      // Pass position placement
      placement: PrizmOverlayInsidePlacement.TOP,
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
      .content(PrizmOverlaySomeComponent)
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
