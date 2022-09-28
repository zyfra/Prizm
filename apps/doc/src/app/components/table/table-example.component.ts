import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { ITableProduct } from './examples/table-basic-example/table-basic-example.component';
import { ZuiSizeL, ZuiSizeM, ZuiSizeS, ZuiSizeXS } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-table-example',
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

  public size: ZuiSizeL | ZuiSizeM | ZuiSizeXS | ZuiSizeS = 'l';
  public sizeVariants: (ZuiSizeL | ZuiSizeM | ZuiSizeXS | ZuiSizeS)[] = ['xs', 'l', 'm', 's'];
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
  public readonly exampleEditableColTable: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/table-editable-col-example/table-editable-col-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/table-editable-col-example/table-editable-col-example.component.html'
    ),
    LESS: import(
      './examples/table-editable-col-example/table-editable-col-example.component.less?raw'
    ),
  };
  public readonly exampleEditableRowTable: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/table-editable-row-example/table-editable-row-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/table-editable-row-example/table-editable-row-example.component.html'
    ),
    LESS: import(
      './examples/table-editable-row-example/table-editable-row-example.component.less?raw'
    ),
  };
  public readonly exampleGroupTable: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/table-group-example/table-group-example.component'),
    HTML: import('!!raw-loader!./examples/table-group-example/table-group-example.component.html'),
    LESS: import('./examples/table-group-example/table-group-example.component.less?raw'),
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

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
