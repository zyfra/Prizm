import { Component, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { PrizmSplitterAreaComponent } from '../area/area.component';
import { PrizmSplitterElement } from '../splitter-element.class';

@Component({
  selector: 'prizm-splitter-gutter',
  template: `<div class="container"><ng-content></ng-content></div>`,
  styleUrls: ['./gutter.component.less'],
  providers: [
    {
      provide: PrizmSplitterElement,
      useExisting: PrizmSplitterGutterComponent,
    },
  ],
})
export class PrizmSplitterGutterComponent {
  @Input() @HostBinding('class.areaBefore') areaBefore: PrizmSplitterAreaComponent | null;
  @Input() @HostBinding('class.areaAfter') areaAfter: PrizmSplitterAreaComponent | null;

  @Input() @HostBinding('style.zIndex') zIndex = 0;

  position: number;
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
