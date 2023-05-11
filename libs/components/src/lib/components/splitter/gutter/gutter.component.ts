import { Component, ElementRef, HostBinding, Input, TemplateRef } from '@angular/core';
import { PrizmSplitterOrientation } from '../types';

@Component({
  selector: 'prizm-splitter-gutter',
  templateUrl: `./gutter.component.html`,
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
  @Input() template: TemplateRef<any>;

  position: number;

  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
