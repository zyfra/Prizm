import { Component, HostBinding, Input } from '@angular/core';
import { PrizmSplitterComponent } from '../splitter.component';
import { PrizmSplitterOrientation } from '../types';

@Component({
  selector: 'prizm-splitter-gutter-default',
  template: `<div class="slider" #slider></div>`,
  styleUrls: [`./gutter-default.component.less`],
  host: {
    '[class]': 'orientation',
  },
})
export class PrizmSplitterGutterDefaultComponent {
  @Input() orientation: PrizmSplitterOrientation;

  constructor(private splitter: PrizmSplitterComponent) {}
}
