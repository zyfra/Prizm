import { SortMeta } from 'primeng/api';

export type SortOrder = -1 | 1;

export interface LazyLoadEvent {
  first: number;
  rows: number;
  sortField: string;
  sortOrder: SortOrder;
  multiSortMeta: SortMeta[];
  filters: Record<string, unknown>;
  globalFilter: unknown;
}
