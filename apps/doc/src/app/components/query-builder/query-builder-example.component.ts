import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-query-builder-example',
  templateUrl: './query-builder-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryBuilderExampleComponent {
  public readonly basicExample: TuiDocExample = {
    TypeScript: import('./examples/query-builder-basic-example/query-builder-basic-example.component?raw'),
    HTML: import('./examples/query-builder-basic-example/query-builder-basic-example.component.html?raw'),
    LESS: import('./examples/query-builder-basic-example/query-builder-basic-example.component.less?raw'),
  };

  public readonly scrollableExample: TuiDocExample = {
    TypeScript: import(
      './examples/query-builder-scrollable-example/query-builder-scrollable-example.component?raw'
    ),
    HTML: import(
      './examples/query-builder-scrollable-example/query-builder-scrollable-example.component.html?raw'
    ),
    LESS: import(
      './examples/query-builder-scrollable-example/query-builder-scrollable-example.component.less?raw'
    ),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
