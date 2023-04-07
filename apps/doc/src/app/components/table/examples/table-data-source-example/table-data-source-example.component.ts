import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import {
  PrizmPaginatorComponent,
  PrizmTableCellStatus,
  PrizmTableDataSource,
  PrizmTableDirective,
  prizmTableDefaultColumnSort,
} from '@prizm-ui/components';

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
  selector: 'prizm-table-data-source-example',
  templateUrl: './table-data-source-example.component.html',
  styleUrls: ['./table-data-source-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDataSourceExampleComponent implements OnInit {
  @ViewChild(PrizmTableDirective, { static: true }) table: PrizmTableDirective<ITableProduct>;
  @ViewChild(PrizmPaginatorComponent, { static: true }) paginator: PrizmPaginatorComponent;

  public columns: string[] = ['code', 'name', 'category', 'count'];
  public sorter = prizmTableDefaultColumnSort;

  dataSource: PrizmTableDataSource<ITableProduct>;

  constructor() {
    this.dataSource = new PrizmTableDataSource(TABLE_EXAMPLE_SORT);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sorter = this.table.sorterService;
  }

  public search<T extends keyof ITableProduct>(value: string, key: T): void {
    const searchString = value.toLowerCase();
    this.dataSource.filter = (product): boolean =>
      (product[key] as string).toLowerCase().includes(searchString);
  }
}
