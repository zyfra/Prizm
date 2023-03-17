import { Component, Input } from '@angular/core';
import { PrizmSplitterComponent } from '../splitter.component';
import { PrizmSplitterOrientation } from '../types';

@Component({
  selector: 'prizm-splitter-gutter-default',
  template: `<div
    class="slider"
    #slider
    [ngStyle]="{
      width: splitterOrientation === 'horizontal' ? size + 'px' : 'auto',
      height: splitterOrientation === 'vertical' ? size + 'px' : 'auto'
    }"
  ></div>`,
  styleUrls: [`./gutter-default.component.less`],
})
export class PrizmSplitterGutterDefaultComponent {
  @Input() size = 8;

  constructor(private splitter: PrizmSplitterComponent) {}

  get splitterOrientation(): PrizmSplitterOrientation {
    return this.splitter.orientation;
  }
}
