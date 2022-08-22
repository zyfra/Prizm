import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'zui-paginator-example',
  templateUrl: './paginator-example.component.html',
  styleUrls: ['./paginator-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorExampleComponent {
  public totalRecords = 1100;
  public pageLinkSize = 10;
  public rows = 16;
  public initialValue = 10;
  public leftButtonLabel = 'Назад';
  public rightButtonLabel = 'Вперед';

  readonly exampleBasicPaginator: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/paginator-basic-example/paginator-basic-example.component'),
    HTML: import('!!raw-loader!./examples/paginator-basic-example/paginator-basic-example.component.html'),
    LESS: import('!!raw-loader!./examples/paginator-basic-example/paginator-basic-example.component.less'),
  };

  readonly exampleLabelsPaginator: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/paginator-with-labels-example/paginator-with-labels-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/paginator-with-labels-example/paginator-with-labels-example.component.html'
    ),
    LESS: import(
      '!!raw-loader!./examples/paginator-with-labels-example/paginator-with-labels-example.component.less'
    ),
  };

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
