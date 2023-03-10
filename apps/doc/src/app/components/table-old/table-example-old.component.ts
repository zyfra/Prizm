import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { ITableProduct } from './examples/table-basic-example/table-basic-example.component';
import { PrizmSizeL, PrizmSizeM, PrizmSizeS, PrizmSizeXS } from '@prizm-ui/components';

@Component({
  selector: 'prizm-table-example',
  templateUrl: './table-example-old.component.html',
  styleUrls: ['./table-example-old.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableExampleOldComponent {
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
    TypeScript: import('./examples/table-basic-example/table-basic-example.component?raw'),
    HTML: import('./examples/table-basic-example/table-basic-example.component.html?raw'),
    LESS: import('./examples/table-basic-example/table-basic-example.component.less?raw'),
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
  public readonly exampleGroupTable: TuiDocExample = {
    TypeScript: import('./examples/table-group-example/table-group-example.component?raw'),
    HTML: import('./examples/table-group-example/table-group-example.component.html?raw'),
    LESS: import('./examples/table-group-example/table-group-example.component.less?raw'),
  };
  public readonly exampleSelectableTable: TuiDocExample = {
    TypeScript: import('./examples/table-selectable-example/table-selectable-example.component?raw'),
    HTML: import('./examples/table-selectable-example/table-selectable-example.component.html?raw'),
    LESS: import('./examples/table-selectable-example/table-selectable-example.component.less?raw'),
  };

  public readonly exampleStatusTable: TuiDocExample = {
    TypeScript: import('./examples/table-status-example/table-status-example.component?raw'),
    HTML: import('./examples/table-status-example/table-status-example.component.html?raw'),
    LESS: import('./examples/table-status-example/table-status-example.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
