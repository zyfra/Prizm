import { Component, Input } from '@angular/core';
import { PrizmInputCarouselComponent } from './input-carousel.component';

@Component({
  selector: 'prizm-input-carousel-auxiliary-right',
  template: `
    <button
      *ngIf="!carousel.disabled"
      [interactive]="true"
      [disabled]="carousel.carouselContent?.controlsState.stepRightCtrlDisabled"
      (click)="carousel.stepRight()"
      prizmInputIconButton="chevrons-right"
    ></button>
    <button
      *ngIf="!carousel.disabled && !carousel.lightMode"
      [interactive]="true"
      [disabled]="carousel.carouselContent?.controlsState.rightCtrlDisabled"
      (click)="carousel.right()"
      prizmInputIconButton="chevrons-double-right"
    ></button>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class PrizmInputCarouselAuxiliaryRightComponent {
  @Input() carousel: PrizmInputCarouselComponent;
}
