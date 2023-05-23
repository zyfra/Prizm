import { Component, Input } from '@angular/core';

import { PrizmCarouselComponent } from './carousel.component';

@Component({
  selector: 'prizm-carousel-auxiliary-right',
  template: `
    <button
      *ngIf="!carousel.disabled"
      [interactive]="true"
      (click)="carousel.stepRight()"
      prizmInputIconButton="chevrons-right"
    ></button>
    <button
      *ngIf="!carousel.disabled && !carousel.lightMode"
      [interactive]="true"
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
export class PrizmCarouselAuxiliaryRightComponent {
  @Input() carousel: PrizmCarouselComponent;
}
