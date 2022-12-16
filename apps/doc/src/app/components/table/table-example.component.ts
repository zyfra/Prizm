import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import { ITableProduct } from './examples/table-basic-example/table-basic-example.component';
import { PrizmSizeL, PrizmSizeM, PrizmSizeS, PrizmSizeXS } from '@prizm-ui/components';

@Component({
  selector: 'prizm-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableExampleComponent {
  public value: ITableProduct[] = [
    {
      code: '123',
      name: 'Name 1',
      category: 'Premium',
      count: 3000,
    },
    {
      code: '456',
      name: 'Name 2',
      category: 'Active',
      count: 123,
    },
    {
      code: '789',
      name: 'Name 3',
      category: 'Sport',
      count: 56000,
    },
    {
      code: '012',
      name: 'Name 4',
      category: 'Sport+',
      count: 539,
    },
    {
      code: '1234',
      name: 'Name 5',
      category: 'Premium',
      count: 23,
    },
    {
      code: '12345',
      name: 'Name 6',
      category: 'Premium',
      count: 99,
    },
  ];

  public size: PrizmSizeL | PrizmSizeM | PrizmSizeXS | PrizmSizeS = 'l';
  public sizeVariants: (PrizmSizeL | PrizmSizeM | PrizmSizeXS | PrizmSizeS)[] = ['xs', 'l', 'm', 's'];
  public scrollable = false;
  public scrollHeight = null;
  public scrollHeightVariants: string[] = [null, '160px', '200px', '300px', '500px'];
  public responsiveLayout: 'stack' | 'scroll' = 'scroll';
  public layoutVariants: ('stack' | 'scroll')[] = ['scroll', 'stack'];

  public readonly exampleBasicTable: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/table-basic-example/table-basic-example.component'),
    HTML: import('!!raw-loader!./examples/table-basic-example/table-basic-example.component.html'),
    LESS: import('./examples/table-basic-example/table-basic-example.component.less?raw'),
  };

  public exampleBorderStyleTable: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/table-border-style-example/table-border-style-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/table-border-style-example/table-border-style-example.component.html'
    ),
    LESS: import('./examples/table-border-style-example/table-border-style-example.component.less?raw'),
  };

  public readonly exampleEditableColTable: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/table-editable-col-example/table-editable-col-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/table-editable-col-example/table-editable-col-example.component.html'
    ),
    LESS: import('./examples/table-editable-col-example/table-editable-col-example.component.less?raw'),
  };

  public readonly exampleEditableRowTable: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/table-editable-row-example/table-editable-row-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/table-editable-row-example/table-editable-row-example.component.html'
    ),
    LESS: import('./examples/table-editable-row-example/table-editable-row-example.component.less?raw'),
  };

  public exampleRowGroupTable: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/table-row-group-example/table-row-group-example.component'),
    HTML: import('!!raw-loader!./examples/table-row-group-example/table-row-group-example.component.html'),
    LESS: import('./examples/table-row-group-example/table-row-group-example.component.less?raw'),
  };

  public readonly exampleSelectableTable: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/table-selectable-example/table-selectable-example.component'),
    HTML: import('!!raw-loader!./examples/table-selectable-example/table-selectable-example.component.html'),
    LESS: import('./examples/table-selectable-example/table-selectable-example.component.less?raw'),
  };

  public readonly exampleStatusTable: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/table-status-example/table-status-example.component'),
    HTML: import('!!raw-loader!./examples/table-status-example/table-status-example.component.html'),
    LESS: import('./examples/table-status-example/table-status-example.component.less?raw'),
  };

  public exampleFilterTable: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/table-filter-example/table-filter-example.component'),
    HTML: import('!!raw-loader!./examples/table-filter-example/table-filter-example.component.html'),
    LESS: import('./examples/table-filter-example/table-filter-example.component.less?raw'),
  };

  public exampleSearchTable: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/table-search-example/table-search-example.component'),
    HTML: import('!!raw-loader!./examples/table-search-example/table-search-example.component.html'),
    LESS: import('./examples/table-search-example/table-search-example.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
