import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmTableCellStatus } from '@prizm-ui/components';
import { of } from 'rxjs';
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
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = TABLE_EXAMPLE_TREE_DATA_1;

  public readonly getTableChildrenWithLazy = (item: ITableProduct) => {
    return of(item.children ?? []).pipe(delay(1000));
  };

  public readonly getTableChildren = (item: ITableProduct) => {
    return of(item.children ?? []);
  };
}
