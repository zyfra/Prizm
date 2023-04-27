import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { PrizmSplitterOrientation } from '../types';

@Component({
  selector: 'prizm-splitter-gutter',
  template: `<prizm-splitter-gutter-default [orientation]="orientation"></prizm-splitter-gutter-default>`,
  styleUrls: ['./gutter.component.less'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class]': 'orientation',
  },
})
export class PrizmSplitterGutterComponent {
  @Input() areaBefore: number;
  @Input() areaAfter: number;

  @Input() orientation: PrizmSplitterOrientation;
  @Input() @HostBinding('style.order') order: number;

  position: number;

  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
