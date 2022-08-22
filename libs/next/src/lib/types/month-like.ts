import { ZuiYearLike } from './year-like';

/**
 * Optionaly has year and/or month
 */
export interface ZuiMonthLike extends ZuiYearLike {
    readonly month?: number;
}
