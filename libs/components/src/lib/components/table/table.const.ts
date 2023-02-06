import { prizmSort } from '@prizm-ui/helpers';
import { PrizmTableSortOptions } from './service';

export function prizmTableDefaultColumnSort<T extends Record<string, unknown>>(
  x: T,
  y: T,
  options: PrizmTableSortOptions
): number {
  return prizmSort(x[options.id], y[options.id], options.order === 'asc');
}
