import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PrizmDay,
  PrizmSizeL,
  PrizmSizeM,
  PrizmSizeS,
  PrizmSizeXS,
  PrizmSizeXl,
  PrizmTableBorderStyle,
  PrizmTableCellStatus,
} from '@prizm-ui/components';
import { TABLE_EXAMPLE_DATA_1 } from './table-advanced-example.const';

export interface ITableProduct {
  id?: number | string;
  status?: PrizmTableCellStatus;
  code: string;
  name: string;
  category: string;
  count: number;
  children?: ITableProduct[];
  date: PrizmDay;
}

@Component({
  selector: 'prizm-table-advanced-example',
  templateUrl: './table-advanced-example.component.html',
  styleUrls: ['./table-advanced-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableAdvancedExampleComponent {
  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;
  public prizmTableRowOddBackground: string | null = null;
  public prizmTableRowBackground: string | null = null;
  public prizmTableRowCursor = 'default';
  public prizmTableRowHoverBackground: string | null = null;
  public prizmTableActiveRowMarkerColor: string | null = null;
  public columns: string[] = ['code', 'name', 'category', 'count'];
  public columnsVarians: string[][] = [
    ['code', 'name'],
    ['name', 'category'],
    ['code', 'name', 'category', 'count'],
  ];
  public open = true;

  borderStyle: PrizmTableBorderStyle = 'grid';
  borderStyleVariants: Array<PrizmTableBorderStyle> = ['grid', 'horizontal', 'vertical'];

  public size: PrizmSizeL | PrizmSizeM | PrizmSizeXS | PrizmSizeS | PrizmSizeXl = 'l';
  public sizeVariants: (PrizmSizeL | PrizmSizeM | PrizmSizeXS | PrizmSizeS | PrizmSizeXl)[] = [
    'xs',
    's',
    'm',
    'l',
    'xl',
  ];
  public scrollable = false;
  public scrollHeight = null;
  public scrollHeightVariants: string[] = [null as any, '160px', '200px', '300px', '500px'];
  public responsiveLayout: 'stack' | 'scroll' = 'scroll';
  public layoutVariants: ('stack' | 'scroll')[] = ['scroll', 'stack'];

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

  public readonly exampleEditableLayoutsTable: TuiDocExample = {
    TypeScript: import(
      './examples/table-editable-layouts-example/table-editable-layouts-example.component?raw'
    ),
    HTML: import(
      './examples/table-editable-layouts-example/table-editable-layouts-example.component.html?raw'
    ),
    LESS: import(
      './examples/table-editable-layouts-example/table-editable-layouts-example.component.less?raw'
    ),
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

  public exampleServerSortTable: TuiDocExample = {
    TypeScript: import('./examples/table-server-sort-example/table-server-sort-example.component?raw'),
    HTML: import('./examples/table-server-sort-example/table-server-sort-example.component.html?raw'),
    LESS: import('./examples/table-server-sort-example/table-server-sort-example.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
