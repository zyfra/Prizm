import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'query-builder-query-builder-example',
  templateUrl: './query-builder-example.component.html',
  styleUrls: ['./query-builder-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryBuilderExampleComponent {
  public readonly exampleBasicQueryBuilder: TuiDocExample = {
    TypeScript: import('./examples/query-builder-basic-example/query-builder-basic-example.component?raw'),
    HTML: import('./examples/query-builder-basic-example/query-builder-basic-example.component.html?raw'),
  };

  public readonly exampleI18nQueryBuilder: TuiDocExample = {
    TypeScript: import('./examples/i18n/query-builder-i18n-example.component?raw'),
    HTML: import('./examples/i18n/query-builder-i18n-example.component.html?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
