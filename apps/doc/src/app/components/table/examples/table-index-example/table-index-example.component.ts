import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTableCellStatus } from '@prizm-ui/components';
import { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';

export interface ITableProduct {
  id?: number | string;
  status?: PrizmTableCellStatus;
  code: string;
  name: string;
  category: string;
  count: number;
  children?: ITableProduct[];
}

@Component({
  selector: 'prizm-table-index-example',
  templateUrl: './table-index-example.component.html',
  styleUrls: ['./table-index-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableIndexExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = [...TABLE_EXAMPLE_DATA_1];
  public remove(item: ITableProduct): void {
    this.products = this.products.filter(i => i !== item);
  }
  public add(): void {
    const num = this.products.length;
    this.products = [
      ...this.products,
      {
        code: num.toString(),
        name: `Name ${num}`,
        category: num % 2 === 0 ? 'Active' : 'Sport',
        count: Math.random(),
        status: 'success',
      },
    ];
  }
}
