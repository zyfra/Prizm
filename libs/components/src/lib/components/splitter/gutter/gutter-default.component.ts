import { Component, Input } from '@angular/core';

import { PrizmSplitterOrientation } from '../types';

@Component({
  selector: 'prizm-splitter-gutter-default',
  template: `<div class="slider" #slider></div>`,
  styleUrls: [`./gutter-default.component.less`],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class]': 'orientation',
  },
})
export class PrizmSplitterGutterDefaultComponent {
  @Input() orientation!: PrizmSplitterOrientation;
}
