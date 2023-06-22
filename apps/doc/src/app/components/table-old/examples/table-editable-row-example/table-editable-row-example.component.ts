import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITableProduct } from '../table-basic-example/table-basic-example.component';

@Component({
  selector: 'prizm-table-editable-row-example',
  templateUrl: './table-editable-row-example.component.html',
  styleUrls: ['./table-editable-row-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableEditableRowExampleComponent {
  public products: ITableProduct[] = [
    {
      id: 1,
      code: '123',
      name: 'Name 1',
      category: 'Premium',
      count: 3000,
    },
    {
      id: 2,
      code: '456',
      name: 'Name 2',
      category: 'Active',
      count: 123,
    },
    {
      id: 3,
      code: '789',
      name: 'Name 3',
      category: 'Sport',
      count: 56000,
    },
    {
      id: 4,
      code: '012',
      name: 'Name 4',
      category: 'Sport+',
      count: 539,
    },
    {
      id: 5,
      code: '1234',
      name: 'Name 5',
      category: 'Premium',
      count: 23,
    },
    {
      id: 6,
      code: '12345',
      name: 'Name 6',
      category: 'Premium',
      count: 99,
    },
  ];
  public productsCopy: ITableProduct[];

  public onRowEditInit(product: unknown): void {
    this.productsCopy = this.products.map(item => ({ ...item }));
  }

  public onRowEditSave(product: unknown): void {
    // save row
  }

  public onRowEditCancel(product: unknown, rowIdx: unknown): void {
    this.products = this.productsCopy;
  }

  public onRowDelete(product: unknown, rowIdx: unknown): void {
    rowIdx = rowIdx as number;

    this.products = this.products.filter((item, i) => i !== rowIdx);
  }
}
