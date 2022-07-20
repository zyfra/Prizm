import { Component, Input } from '@angular/core';

import { ZuiCarouselComponent } from './carousel.component';

@Component({
  selector: 'zui-carousel-auxiliary-right',
  template: `
    <button
      zuiInputIconButton="chevrons-right"
      (click)="carousel.stepRight()"
      *ngIf="!carousel.disabled"
    ></button>
    <button
      zuiInputIconButton="chevrons-double-right"
      (click)="carousel.right()"
      *ngIf="!carousel.disabled && !carousel.lightMode"
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
export class ZuiCarouselAuxiliaryRightComponent {
  @Input() carousel: ZuiCarouselComponent;
}

