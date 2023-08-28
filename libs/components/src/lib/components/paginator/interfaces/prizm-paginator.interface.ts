export interface PrizmPaginatorData {
  left: number | null;
  mid: number[];
  right: number | null;
}

export interface PrizmPaginatorOutput {
  page: number;
  first: number;
  rows: number;
  pagesCount: number | null;
}

export interface PrizmPaginatorOptions {
  noRowsSelector?: boolean;
  noRowsSelectorLabel?: boolean;
  noInfo?: boolean;
  noPages?: boolean;
  noToFirstPageBtn?: boolean;
  noToLastPageBtn?: boolean;
}

export type PrizmPaginatorType = 'finite' | 'infinite';
