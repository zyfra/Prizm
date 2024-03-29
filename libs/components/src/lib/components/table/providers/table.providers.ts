import { INTERSECTION_ROOT_MARGIN, IntersectionObserverService } from '@ng-web-apis/intersection-observer';
import { PrizmTableSorterService } from '../service';

export const PRIZM_TABLE_PROVIDERS = [
  {
    provide: INTERSECTION_ROOT_MARGIN,
    useValue: `10000px 10000px 10000px 0px`,
  },
  IntersectionObserverService,
  PrizmTableSorterService,
];
