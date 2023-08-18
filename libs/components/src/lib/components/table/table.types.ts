import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PrizmContextWithImplicit } from '../../types';

/** Possible types that can be set as the data source for a `PrizmTable`. */
export type PrizmTableDataSourceInput<T> = readonly T[] | DataSource<T> | Observable<readonly T[]>;

export type PrizmComparator<T> = (a: T, b: T) => number;

export type PrizmTableCellStatus = 'default' | 'success' | 'warning' | 'danger';

export type PrizmTableBorderStyle = 'grid' | 'horizontal' | 'vertical';

export interface PrizmTableRowContext<T = Record<string, unknown>> extends PrizmContextWithImplicit<T> {
  /**
   * it is initial getted index
   * it is unique (even in tree case), but number is not sequential
   * */
  readonly index: number;
  /**
   * it is index of row
   * can duplicate in tree
   * */
  readonly rowIdx?: number;
  readonly first: boolean;
  readonly getRowId?: (item: T) => unknown;
  readonly last: boolean;
  readonly deepLevel?: number;
  readonly odd: boolean;
  readonly even: boolean;
  readonly count: number;
  readonly parentItem?: T;
  readonly item: T;
  readonly parentIdx?: number;
}
