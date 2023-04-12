import { Component, ElementRef } from '@angular/core';
import { PrizmSplitterElement } from '../splitter-element.class';

@Component({
  selector: 'prizm-splitter-gutter',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./gutter.component.less'],
  providers: [
    {
      provide: PrizmSplitterElement,
      useExisting: PrizmSplitterGutterComponent,
    },
  ],
})
export class PrizmSplitterGutterComponent {
  position: number;

  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
