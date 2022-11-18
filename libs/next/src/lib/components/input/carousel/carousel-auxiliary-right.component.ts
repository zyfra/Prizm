import { Component, Input } from '@angular/core';

import { PrizmCarouselComponent } from './carousel.component';

@Component({
  selector: 'prizm-carousel-auxiliary-right',
  template: `
    <button
      prizmInputIconButton="chevrons-right"
      (click)="carousel.stepRight()"
      *ngIf="!carousel.disabled"
      [interactive]="true"
    ></button>
    <button
      prizmInputIconButton="chevrons-double-right"
      (click)="carousel.right()"
      *ngIf="!carousel.disabled && !carousel.lightMode"
      [interactive]="true"
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

