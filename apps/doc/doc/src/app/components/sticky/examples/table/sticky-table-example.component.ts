import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTableCellStatus } from '@prizm-ui/components';
import { TABLE_EXAMPLE_DATA_1 } from '../../../table/table-example.const';

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
  selector: 'prizm-sticky-table-example',
  templateUrl: './sticky-table-example.component.html',
  styleUrls: ['./sticky-table-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StickyTableExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;
  get sum(): number {
    return this.products.reduce((b, a) => b + a.count, 0);
  }
}
