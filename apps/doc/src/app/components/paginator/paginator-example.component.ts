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
  public disabled = false;
  public totalRecords = 1100;
  public pageLinkSize = 5;
  public rows = 10;
  public initialValue = 10;
  public showMoreDisabled = false;
  public content: PrizmPaginatorOutput | null = null;
  public leftButtonLabel = 'Назад';
  public rightButtonLabel = 'Вперед';
  public moreButtonLabel = 'Показать еще';
  public paginatorType: PrizmPaginatorType = 'finite';
  public paginatorTypesVariants: PrizmPaginatorType[] = ['finite', 'infinite'];
  public paginatorOptionsVariants: PrizmPaginatorOptions[] = PAGINATOR_OPTIONS_VARIANTS;
  public paginatorOptions: PrizmPaginatorOptions = this.paginatorOptionsVariants[0];
  public rowsCountOptionsBase: number[] = [10, 15, 20, 25, 30, 35, 40];
  public rowsCountOptions = [...this.rowsCountOptionsBase];

  public readonly exampleBasicPaginator: TuiDocExample = {
    TypeScript: import('./examples/paginator-basic-example/paginator-basic-example.component?raw'),
    HTML: import('./examples/paginator-basic-example/paginator-basic-example.component.html?raw'),
  };

  public readonly exampleLabelsPaginator: TuiDocExample = {
    TypeScript: import(
      './examples/paginator-with-labels-example/paginator-with-labels-example.component?raw'
    ),
    HTML: import('./examples/paginator-with-labels-example/paginator-with-labels-example.component.html?raw'),
  };

  public readonly exampleInfinitePaginator: TuiDocExample = {
    TypeScript: import('./examples/paginator-infinite-example/paginator-infinite-example.component?raw'),
    HTML: import('./examples/paginator-infinite-example/paginator-infinite-example.component.html?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public changeRowValue(): void {
    this.rowsCountOptions = Array.from(new Set([this.rows, ...this.rowsCountOptionsBase]));
  }
}
