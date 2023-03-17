import { PrizmContextWithImplicit } from '../../types';

export type PrizmComparator<T> = (a: T, b: T) => number;

export type PrizmTableCellStatus = 'default' | 'success' | 'warning' | 'danger';

export type PrizmTableBorderStyle = 'grid' | 'horizontal' | 'vertical';

export interface PrizmTableRowContext<T> extends PrizmContextWithImplicit<T> {
  readonly index: number;
  readonly first: boolean;
  readonly last: boolean;
  readonly deepLevel?: number;
  readonly odd: boolean;
  readonly even: boolean;
  readonly count: number;
  readonly parentItem?: T;
  readonly parentIdx?: number;
}
