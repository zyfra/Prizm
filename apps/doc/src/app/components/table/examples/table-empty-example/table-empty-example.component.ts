import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmTableCellStatus } from '@prizm-ui/components';

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
  selector: 'prizm-table-empty-example',
  templateUrl: './table-empty-example.component.html',
  styleUrls: ['./table-empty-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableEmptyExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];
  public products: ITableProduct[] = [];
}
