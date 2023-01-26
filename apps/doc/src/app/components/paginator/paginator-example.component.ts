import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmPaginatorOptions, PrizmPaginatorOutput, PrizmPaginatorType } from '@prizm-ui/components';
import { PAGINATOR_OPTIONS_VARIANTS } from './paginator-example.constants';

@Component({
  selector: 'prizm-paginator-example',
  templateUrl: './paginator-example.component.html',
  styleUrls: ['./paginator-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorExampleComponent {
  public totalRecords = 1100;
  public pageLinkSize = 5;
  public rows = 16;
  public initialValue = 10;
  public showMoreDisabled = false;
  public content: PrizmPaginatorOutput | null = null;
  public leftButtonLabel = 'Назад';
  public rightButtonLabel = 'Вперед';
  public paginatorType: PrizmPaginatorType = 'finite';
  public paginatorTypesVariants: PrizmPaginatorType[] = ['finite', 'infinite'];
  public paginatorOptionsVariants: PrizmPaginatorOptions[] = PAGINATOR_OPTIONS_VARIANTS;
  public paginatorOptions: PrizmPaginatorOptions = this.paginatorOptionsVariants[0];
  public rowsCountOptionsBase: number[] = [10, 15, 20, 25, 30, 35, 40];
  public rowsCountOptions = [this.rows, ...this.rowsCountOptionsBase];

  public readonly exampleBasicPaginator: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/paginator-basic-example/paginator-basic-example.component'),
    HTML: import('!!raw-loader!./examples/paginator-basic-example/paginator-basic-example.component.html'),
  };

  public readonly exampleLabelsPaginator: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/paginator-with-labels-example/paginator-with-labels-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/paginator-with-labels-example/paginator-with-labels-example.component.html'
    ),
  };

  public readonly exampleInfinitePaginator: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/paginator-infinite-example/paginator-infinite-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/paginator-infinite-example/paginator-infinite-example.component.html'
    ),
  };


  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  public changeRowValue(): void {
    this.rowsCountOptions = Array.from(new Set([this.rows, ...this.rowsCountOptionsBase]));
  }
}
