import { SortEvent } from 'primeng/api/sortevent';
import { FilterMetadata } from 'primeng/api';

export type TableSortEvent = SortEvent;
export type Filters = Record<string, FilterMetadata | FilterMetadata[]>;
export type RowSelectionEvent = {
  originalEvent: Event;
  data: unknown;
  type: 'row' | 'radiobutton' | 'checkbox';
  index: number;
};

export type TRowStatus = 'default' | 'success' | 'warning' | 'danger';
