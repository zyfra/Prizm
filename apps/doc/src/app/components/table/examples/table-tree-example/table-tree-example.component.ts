import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmTableCellStatus, prizmTableDefaultColumnSort } from '@prizm-ui/components';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TABLE_EXAMPLE_TREE_DATA_1 } from '../../table-example.const';
import { cloneDeep } from 'lodash';

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
  sorter = prizmTableDefaultColumnSort;
  showFormatNumber = true;
  public columns: string[] = ['name', 'category', 'amount'];

  public products: ITableProduct[] = cloneDeep(TABLE_EXAMPLE_TREE_DATA_1);

  public readonly getTableChildrenWithLazy = (item: ITableProduct): Observable<ITableProduct[]> => {
    return of(item.children ?? []).pipe(delay(2000));
  };

  public readonly getTableChildren = (item: ITableProduct): Observable<ITableProduct[]> => {
    return of(item.children ?? []);
  };

  public readonly getRowId = (item: ITableProduct): ITableProduct['code'] => {
    return item.code;
  };

  public updateProducts(): void {
    this.products = cloneDeep(TABLE_EXAMPLE_TREE_DATA_1);
  }

  public updateProduct(add: boolean): void {
    const products = cloneDeep(this.products);
    if (add) {
      products[0].children[0].children[1].name = '* ' + products[0].children[0].children[1].name;
    } else {
      products[0].children[0].children[1].name = products[0].children[0].children[1].name.replace('* ', '');
    }
    this.products = products;
  }
}
