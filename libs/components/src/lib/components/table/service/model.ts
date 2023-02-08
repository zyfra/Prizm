export type PrizmTableSortOptions = {
  order: PrizmTableCellSortOrder;
  id: string;
};
export type PrizmTableCellSorterHandler<T> = (a: T, b: T, options: PrizmTableSortOptions) => number;

export type PrizmTableCellSorter<T> = {
  options: PrizmTableSortOptions;
  sorter?: PrizmTableCellSorterHandler<T>;
};

export type PrizmTableCellSortOrder = 'asc' | 'desc';
