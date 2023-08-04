import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  selector: 'prizm-table-dynamic-row-group-example',
  templateUrl: './table-dynamic-row-group-example.component.html',
  styleUrls: ['./table-dynamic-row-group-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDynamicDynamicRowGroupExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;
}
