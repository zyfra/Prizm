import { Component, Input } from '@angular/core';

import { ZuiCarouselComponent } from './carousel.component';

@Component({
  selector: 'zui-carousel-auxiliary-right',
  template: `
    <button
      pzmInputIconButton="chevrons-right"
      (click)="carousel.stepRight()"
      *ngIf="!carousel.disabled"
      [interactive]="true"
    ></button>
    <button
      pzmInputIconButton="chevrons-double-right"
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
export class ZuiCarouselAuxiliaryRightComponent {
  @Input() carousel: ZuiCarouselComponent;
}

