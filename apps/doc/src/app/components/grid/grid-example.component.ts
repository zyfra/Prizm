import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-grid-example',
  templateUrl: './grid-example.component.html',
  styleUrls: ['./grid-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridExampleComponent {
  public readonly gridBasicExample: TuiDocExample = {
    TypeScript: import('./examples/grid-example-basic/grid-example-basic.component?raw'),
    HTML: import('./examples/grid-example-basic/grid-example-basic.component.html?raw'),
    LESS: import('./examples/grid-example-basic/grid-example-basic.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
