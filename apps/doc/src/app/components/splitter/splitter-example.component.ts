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

  readonly areasControl: TuiDocExample = {
    TypeScript: import('./examples/areas-control-size/areas-control-size.component?raw'),
    HTML: import('./examples/areas-control-size/areas-control-size.component.html?raw'),
  };

  readonly areasControlDisplayNone: TuiDocExample = {
    TypeScript: import('./examples/areas-control-display-none/areas-control-display-none.component?raw'),
    HTML: import('./examples/areas-control-display-none/areas-control-display-none.component.html?raw'),
  };

  readonly areasControlNgIf: TuiDocExample = {
    TypeScript: import('./examples/areas-control-ngif/areas-control-ngif.component?raw'),
    HTML: import('./examples/areas-control-ngif/areas-control-ngif.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
