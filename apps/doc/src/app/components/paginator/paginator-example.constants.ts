import { IPaginatorOptions } from '@prizm-ui/components';

export const PAGINATOR_OPTIONS_VARIANTS: IPaginatorOptions[] = [
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
