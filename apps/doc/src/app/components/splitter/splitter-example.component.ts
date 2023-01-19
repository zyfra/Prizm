import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSplitterOrientation } from '@prizm-ui/components';

import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  templateUrl: './splitter-example.component.html',
  styleUrls: ['./splitter-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSplitterExampleComponent {
  public orientationVariants: Array<PrizmSplitterOrientation> = ['horizontal', 'vertical'];
  public orientation: PrizmSplitterOrientation = 'horizontal';

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

  readonly sizeSetting: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/size-setting/size-setting.component'),
    HTML: import('!!raw-loader!./examples/size-setting/size-setting.component.html'),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
