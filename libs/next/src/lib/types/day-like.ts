import { ZuiMonthLike } from './month-like';

/**
 * Optionally has year and/or month and/or day
 */
export interface ZuiDayLike extends ZuiMonthLike {
    readonly day?: number;
}
