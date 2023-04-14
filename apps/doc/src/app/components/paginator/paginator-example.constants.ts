import { PrizmPaginatorOptions } from '@prizm-ui/components';

export const PAGINATOR_OPTIONS_VARIANTS: PrizmPaginatorOptions[] = [
  {},
  {
    noRowsSelectorLabel: true,
  },
  {
    noRowsSelector: true,
    noRowsSelectorLabel: true,
    noInfo: true,
  },
  {
    noRowsSelector: true,
    noRowsSelectorLabel: true,
    noInfo: true,
    noPages: true,
  },
];
