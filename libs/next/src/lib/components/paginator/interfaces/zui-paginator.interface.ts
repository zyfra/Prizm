export interface IPaginatorData {
  left: number;
  mid: number[];
  right: number;
}

export interface IPaginatorOutput {
  page: number;
  first: number;
  rows: number;
  tabCount: number;
}
