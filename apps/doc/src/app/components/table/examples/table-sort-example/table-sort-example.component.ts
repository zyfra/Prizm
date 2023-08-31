import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmTableCellStatus, prizmTableDefaultColumnSort } from '@prizm-ui/components';

export interface ITableProduct {
  id?: number;
  status?: PrizmTableCellStatus;
  code: number;
  name: string;
  category: string;
  count: number;
  children?: ITableProduct[];
}
export const TABLE_EXAMPLE_SORT: ITableProduct[] = [
  {
    code: 8,
    name: 'Углексилый газ',
    category: 'Premium',
    count: 99,
  },
  {
    code: 1,
    name: 'Полиуретан',
    category: 'Premium',
    count: 3000,
  },
  {
    code: 2,
    name: 'Полиэстер',
    category: 'Active',
    count: 123,
    status: 'success',
  },
  {
    code: 3,
    name: 'Эпоксидная смола',
    category: 'Sport',
    count: 56000,
    status: 'success',
  },
  {
    code: 4,
    name: 'Пропант',
    category: 'Sport+',
    count: 539,
  },
  {
    code: 5,
    name: 'Полибетон',
    category: 'Premium',
    count: 23,
    status: 'danger',
  },
  {
    code: 6,
    name: 'Полиуретан',
    category: 'Premium',
    count: 99,
  },
  {
    code: 7,
    name: 'Пропант',
    category: 'Premium',
    count: 23,
    status: 'warning',
  },
  {
    code: 9,
    name: 'Водород',
    category: 'Premium',
    count: 23,
  },
  {
    code: 10,
    name: 'Компаунд',
    category: 'Premium',
    count: 99,
  },
];

@Component({
  selector: 'prizm-table-sort-example',
  templateUrl: './table-sort-example.component.html',
  styleUrls: ['./table-sort-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSortExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];
  public sorter = prizmTableDefaultColumnSort;
  public products: ITableProduct[] = TABLE_EXAMPLE_SORT;
  public searchString: string | null = null;
  public searchAllowedProducts: ITableProduct[] = this.products;

  public search<T extends keyof ITableProduct>(value: string, key: T): void {
    this.searchString = value.toLowerCase();
    this.searchAllowedProducts = this.products.filter(product =>
      (product[key] as string).toLowerCase().includes(this.searchString as string)
    );
  }
}
