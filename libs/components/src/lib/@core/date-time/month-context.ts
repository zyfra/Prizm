import { PrizmMonth } from './month';
import { PrizmMonthRange } from './month-range';

export interface PrizmMonthContext {
  value: PrizmMonth | PrizmMonthRange | null;
}
