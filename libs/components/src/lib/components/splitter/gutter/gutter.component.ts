import { Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'prizm-splitter-gutter',
  template: `<prizm-splitter-gutter-default [orientation]="'horizontal'"></prizm-splitter-gutter-default>`,
  styleUrls: ['./gutter.component.less'],
})
export class PrizmSplitterGutterComponent {
  @Input() areaBefore: number;
  @Input() areaAfter: number;

  @Input() @HostBinding('style.order') order: number;

  position: number;

  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
