import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmTableCellStatus } from '@prizm-ui/components';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TABLE_EXAMPLE_TREE_DATA_1 } from '../../table-example.const';

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
  selector: 'prizm-table-tree-example',
  templateUrl: './table-tree-example.component.html',
  styleUrls: ['./table-tree-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableTreeExampleComponent {
  showFormatNumber = true;
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = TABLE_EXAMPLE_TREE_DATA_1;

  public readonly getTableChildrenWithLazy = (item: ITableProduct): Observable<ITableProduct[]> => {
    return of(item.children ?? []).pipe(delay(2000));
  };

  public readonly getTableChildren = (item: ITableProduct): Observable<ITableProduct[]> => {
    return of(item.children ?? []);
  };
}
