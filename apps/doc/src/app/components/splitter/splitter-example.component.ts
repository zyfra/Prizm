import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSplitterOrientation } from '@prizm-ui/components';

import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  templateUrl: './splitter-example.component.html',
  styleUrls: ['./splitter-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterExampleComponent {
  public sizesVariants: Array<Array<number>> = [
    [20, 40, 40],
    [30, 40, 30],
    [20, 60, 20],
  ];

  public areasSize: Array<number> = [30, 40, 30];

  public orientationVariants: Array<PrizmSplitterOrientation> = ['horizontal', 'vertical'];
  public orientation: PrizmSplitterOrientation = 'horizontal';

  public minAreasSizeVariants: Array<Array<number>> = [
    [0, 0, 0],
    [10, 40, 20],
    [20, 40, 20],
  ];

  public minAreasSize: Array<number> = [0, 0, 0];

  readonly basic: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/basic/basic.component'),
    HTML: import('!!raw-loader!./examples/basic/basic.component.html'),
  };

  readonly vertical: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/vertical/vertical.component'),
    HTML: import('!!raw-loader!./examples/vertical/vertical.component.html'),
  };

  readonly nested: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/nested/nested.component'),
    HTML: import('!!raw-loader!./examples/nested/nested.component.html'),
  };

  readonly limitSize: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/limit-size/limit-size.component'),
    HTML: import('!!raw-loader!./examples/limit-size/limit-size.component.html'),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
