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
  selector: 'prizm-table-sticky-example',
  templateUrl: './table-sticky-example.component.html',
  styleUrls: ['./table-sticky-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableStickyExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;
  get sum(): number {
    return this.products.reduce((b, a) => b + a.count, 0);
  }
}
