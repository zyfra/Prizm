import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { ITableProduct } from './examples/table-basic-example/table-basic-example.component';
import { PrizmSizeL, PrizmSizeM, PrizmSizeS, PrizmSizeXS, PrizmTableBorderStyle } from '@prizm-ui/components';
import { TABLE_EXAMPLE_DATA_1 } from './table-example.const';

@Component({
  selector: 'prizm-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableExampleComponent {
  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;
  public prizmTableRowOddBackground: string | null = null;
  public prizmTableRowBackground: string | null = null;
  public prizmTableRowCursor = 'pointer';
  public prizmTableRowHoverBackground: string | null = null;
  public columns: string[] = ['code', 'name', 'category', 'count'];
  public columnsVarians: string[][] = [
    ['code', 'name'],
    ['name', 'category'],
    ['code', 'name', 'category', 'count'],
  ];

  borderStyle: PrizmTableBorderStyle = 'grid';
  borderStyleVariants: Array<PrizmTableBorderStyle> = ['grid', 'horizontal', 'vertical'];

  public open = true;
  public size: PrizmSizeL | PrizmSizeM | PrizmSizeXS | PrizmSizeS = 'l';
  public sizeVariants: (PrizmSizeL | PrizmSizeM | PrizmSizeXS | PrizmSizeS)[] = ['xs', 'l', 'm', 's'];
  public scrollable = false;
  public scrollHeight = null;
  public scrollHeightVariants: string[] = [null as any, '160px', '200px', '300px', '500px'];
  public responsiveLayout: 'stack' | 'scroll' = 'scroll';
  public layoutVariants: ('stack' | 'scroll')[] = ['scroll', 'stack'];

  public readonly exampleBasicTable: TuiDocExample = {
    TypeScript: import('./examples/table-basic-example/table-basic-example.component?raw'),
    HTML: import('./examples/table-basic-example/table-basic-example.component.html?raw'),
    LESS: import('./examples/table-basic-example/table-basic-example.component.less?raw'),
  };
  public readonly exampleTrackBy: TuiDocExample = {
    TypeScript: import('./examples/table-track-by-example/table-track-by-example.component?raw'),
    HTML: import('./examples/table-track-by-example/table-track-by-example.component.html?raw'),
    LESS: import('./examples/table-track-by-example/table-track-by-example.component.less?raw'),
  };
  public readonly exampleIndexTable: TuiDocExample = {
    TypeScript: import('./examples/table-index-example/table-index-example.component?raw'),
    HTML: import('./examples/table-index-example/table-index-example.component.html?raw'),
    LESS: import('./examples/table-index-example/table-index-example.component.less?raw'),
  };
  public readonly exampleInheritColsTable: TuiDocExample = {
    TypeScript: import('./examples/table-inherit-cols/table-inherit-cols-example.component?raw'),
    HTML: import('./examples/table-inherit-cols/table-inherit-cols-example.component.html?raw'),
    LESS: import('./examples/table-inherit-cols/table-inherit-cols-example.component.less?raw'),
  };
  public readonly exampleStickyTable: TuiDocExample = {
    TypeScript: import('./examples/table-sticky-example/table-sticky-example.component?raw'),
    HTML: import('./examples/table-sticky-example/table-sticky-example.component.html?raw'),
    LESS: import('./examples/table-sticky-example/table-sticky-example.component.less?raw'),
  };

  public readonly exampleTreeTable: TuiDocExample = {
    TypeScript: import('./examples/table-tree-example/table-tree-example.component?raw'),
    HTML: import('./examples/table-tree-example/table-tree-example.component.html?raw'),
    LESS: import('./examples/table-tree-example/table-tree-example.component.less?raw'),
  };

  public readonly exampleTreePaginationTable: TuiDocExample = {
    TypeScript: import(
      './examples/table-tree-pagination-example/table-tree-pagination-example.component?raw'
    ),
    HTML: import('./examples/table-tree-pagination-example/table-tree-pagination-example.component.html?raw'),
    LESS: import('./examples/table-tree-pagination-example/table-tree-pagination-example.component.less?raw'),
  };

  public readonly exampleEmptyTable: TuiDocExample = {
    TypeScript: import('./examples/table-empty-example/table-empty-example.component?raw'),
    HTML: import('./examples/table-empty-example/table-empty-example.component.html?raw'),
    LESS: import('./examples/table-empty-example/table-empty-example.component.less?raw'),
  };

  public readonly exampleLoadingTable: TuiDocExample = {
    TypeScript: import('./examples/table-loading-example/table-loading-example.component?raw'),
    HTML: import('./examples/table-loading-example/table-loading-example.component.html?raw'),
    LESS: import('./examples/table-loading-example/table-loading-example.component.less?raw'),
  };

  public exampleBorderStyleTable: TuiDocExample = {
    TypeScript: import('./examples/table-border-style-example/table-border-style-example.component?raw'),
    HTML: import('./examples/table-border-style-example/table-border-style-example.component.html?raw'),
    LESS: import('./examples/table-border-style-example/table-border-style-example.component.less?raw'),
  };

  public readonly exampleEditableColTable: TuiDocExample = {
    TypeScript: import('./examples/table-editable-col-example/table-editable-col-example.component?raw'),
    HTML: import('./examples/table-editable-col-example/table-editable-col-example.component.html?raw'),
    LESS: import('./examples/table-editable-col-example/table-editable-col-example.component.less?raw'),
  };

  public readonly exampleEditableRowTable: TuiDocExample = {
    TypeScript: import('./examples/table-editable-row-example/table-editable-row-example.component?raw'),
    HTML: import('./examples/table-editable-row-example/table-editable-row-example.component.html?raw'),
    LESS: import('./examples/table-editable-row-example/table-editable-row-example.component.less?raw'),
  };

  public exampleRowGroupTable: TuiDocExample = {
    TypeScript: import('./examples/table-row-group-example/table-row-group-example.component?raw'),
    HTML: import('./examples/table-row-group-example/table-row-group-example.component.html?raw'),
    LESS: import('./examples/table-row-group-example/table-row-group-example.component.less?raw'),
  };

  public exampleDynamicRowGroupTable: TuiDocExample = {
    TypeScript: import(
      './examples/table-dynamic-row-group-example/table-dynamic-row-group-example.component?raw'
    ),
    HTML: import(
      './examples/table-dynamic-row-group-example/table-dynamic-row-group-example.component.html?raw'
    ),
    LESS: import(
      './examples/table-dynamic-row-group-example/table-dynamic-row-group-example.component.less?raw'
    ),
  };

  public readonly exampleSelectableTable: TuiDocExample = {
    TypeScript: import('./examples/table-selectable-example/table-selectable-example.component?raw'),
    HTML: import('./examples/table-selectable-example/table-selectable-example.component.html?raw'),
    LESS: import('./examples/table-selectable-example/table-selectable-example.component.less?raw'),
  };

  public readonly exampleSelectableMetaTable: TuiDocExample = {
    TypeScript: import('./examples/table-selectable-meta/table-selectable-meta-example.component?raw'),
    HTML: import('./examples/table-selectable-meta/table-selectable-meta-example.component.html?raw'),
    LESS: import('./examples/table-selectable-meta/table-selectable-meta-example.component.less?raw'),
  };

  public readonly exampleStatusTable: TuiDocExample = {
    TypeScript: import('./examples/table-status-example/table-status-example.component?raw'),
    HTML: import('./examples/table-status-example/table-status-example.component.html?raw'),
    LESS: import('./examples/table-status-example/table-status-example.component.less?raw'),
  };

  public exampleFilterTable: TuiDocExample = {
    TypeScript: import('./examples/table-filter-example/table-filter-example.component?raw'),
    HTML: import('./examples/table-filter-example/table-filter-example.component.html?raw'),
    LESS: import('./examples/table-filter-example/table-filter-example.component.less?raw'),
  };

  public exampleSearchTable: TuiDocExample = {
    TypeScript: import('./examples/table-search-example/table-search-example.component?raw'),
    HTML: import('./examples/table-search-example/table-search-example.component.html?raw'),
    LESS: import('./examples/table-search-example/table-search-example.component.less?raw'),
  };

  public exampleSortTable: TuiDocExample = {
    TypeScript: import('./examples/table-sort-example/table-sort-example.component?raw'),
    HTML: import('./examples/table-sort-example/table-sort-example.component.html?raw'),
    LESS: import('./examples/table-sort-example/table-sort-example.component.less?raw'),
  };

  public exampleServerSortTable: TuiDocExample = {
    TypeScript: import('./examples/table-server-sort-example/table-server-sort-example.component?raw'),
    HTML: import('./examples/table-server-sort-example/table-server-sort-example.component.html?raw'),
    LESS: import('./examples/table-server-sort-example/table-server-sort-example.component.less?raw'),
  };

  public exampleDataSourceTable: TuiDocExample = {
    TypeScript: import('./examples/table-data-source-example/table-data-source-example.component?raw'),
    HTML: import('./examples/table-data-source-example/table-data-source-example.component.html?raw'),
    LESS: import('./examples/table-data-source-example/table-data-source-example.component.less?raw'),
  };

  public exampleColumnSettingsTable: TuiDocExample = {
    TypeScript: import(
      './examples/table-column-settings-example/table-column-settings-example.component?raw'
    ),
    HTML: import('./examples/table-column-settings-example/table-column-settings-example.component.html?raw'),
    LESS: import('./examples/table-column-settings-example/table-column-settings-example.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
