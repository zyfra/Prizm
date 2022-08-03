import { Component, Input } from '@angular/core';

import { ZuiCarouselComponent } from './carousel.component';

@Component({
  selector: 'zui-carousel-auxiliary-left',
  template: `
    <button
      zuiInputIconButton="chevrons-double-left"
      (click)="carousel.left()"
      *ngIf="!carousel.lightMode && !carousel.disabled"
    ></button>
    <button
      zuiInputIconButton="chevrons-left"
      (click)="carousel.stepLeft()"
      *ngIf="!carousel.disabled"
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
export class ZuiCarouselAuxiliaryLeftComponent {
  @Input() carousel: ZuiCarouselComponent;
}

