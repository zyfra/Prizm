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
    TypeScript: import('./examples/basic/basic.component?raw'),
    HTML: import('./examples/basic/basic.component.html?raw'),
  };

  readonly vertical: TuiDocExample = {
    TypeScript: import('./examples/vertical/vertical.component?raw'),
    HTML: import('./examples/vertical/vertical.component.html?raw'),
  };

  readonly nested: TuiDocExample = {
    TypeScript: import('./examples/nested/nested.component?raw'),
    HTML: import('./examples/nested/nested.component.html?raw'),
  };

  readonly limitSize: TuiDocExample = {
    TypeScript: import('./examples/limit-size/limit-size.component?raw'),
    HTML: import('./examples/limit-size/limit-size.component.html?raw'),
  };

  readonly sizeSetting: TuiDocExample = {
    TypeScript: import('./examples/size-setting/size-setting.component?raw'),
    HTML: import('./examples/size-setting/size-setting.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
