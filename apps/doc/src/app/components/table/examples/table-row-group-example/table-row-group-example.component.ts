import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTableCellStatus } from '@prizm-ui/components';
import { TABLE_EXAMPLE_DATA_1, TABLE_EXAMPLE_DATA_2 } from '../../table-example.const';

export interface ITableProduct {
  id?: number | string;
  status?: PrizmTableCellStatus;
  code: string;
  name: string;
  category: string;
  count: number;
}

@Component({
  selector: 'prizm-table-row-group-example',
  templateUrl: './table-row-group-example.component.html',
  styleUrls: ['./table-row-group-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableRowGroupExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products1: ITableProduct[] = TABLE_EXAMPLE_DATA_1;

  public products2: ITableProduct[] = TABLE_EXAMPLE_DATA_2;

  public products3: ITableProduct[] = [];
}
