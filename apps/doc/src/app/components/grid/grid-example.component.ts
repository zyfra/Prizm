import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'prizm-grid-example',
  templateUrl: './grid-example.component.html',
  styleUrls: ['./grid-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridExampleComponent {
  public readonly gridBasicExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/grid-example-basic/grid-example-basic.component'),
    HTML: import('!!raw-loader!./examples/grid-example-basic/grid-example-basic.component.html'),
    LESS: import('./examples/grid-example-basic/grid-example-basic.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
