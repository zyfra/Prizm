import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmTableCellStatus } from '@prizm-ui/components';
import { Observable, of, ReplaySubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TABLE_EXAMPLE_DATA_1, TABLE_EXAMPLE_TREE_DATA_1 } from '../../table-example.const';

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
  selector: 'prizm-table-loading-example',
  templateUrl: './table-loading-example.component.html',
  styleUrls: ['./table-loading-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableLoadingExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];
  products$ = of(TABLE_EXAMPLE_DATA_1).pipe(delay(5000));
}
