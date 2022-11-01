import { PzmYearLike } from './year-like';

/**
 * Optionaly has year and/or month
 */
export interface PzmMonthLike extends PzmYearLike {
    readonly month?: number;
}
