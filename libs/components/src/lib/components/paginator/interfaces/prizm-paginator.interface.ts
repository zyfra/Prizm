export interface PrizmPaginatorData {
  left: number;
  mid: number[];
  right: number;
}

export interface PrizmPaginatorOutput {
  page: number;
  first: number;
  rows: number;
  pagesCount: number;
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
