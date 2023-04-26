import { PrizmYearLike } from './year-like';

/**
 * Optionaly has year and/or month
 */
export interface PrizmMonthLike extends PrizmYearLike {
  readonly month?: number;
}
