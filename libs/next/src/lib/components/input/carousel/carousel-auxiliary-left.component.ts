import { Component, Input } from '@angular/core';

import { PrizmCarouselComponent } from './carousel.component';

@Component({
  selector: 'prizm-carousel-auxiliary-left',
  template: `
    <button
      prizmInputIconButton="chevrons-double-left"
      (click)="carousel.left()"
      *ngIf="!carousel.lightMode && !carousel.disabled"
      [interactive]="true"
    ></button>
    <button
      prizmInputIconButton="chevrons-left"
      (click)="carousel.stepLeft()"
      *ngIf="!carousel.disabled"
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
export class PrizmCarouselAuxiliaryLeftComponent {
  @Input() carousel: PrizmCarouselComponent;
}

