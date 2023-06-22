import { PrizmMonthLike } from './month-like';

/**
 * Optionally has year and/or month and/or day
 */
export interface PrizmDayLike extends PrizmMonthLike {
  readonly day?: number;
}
