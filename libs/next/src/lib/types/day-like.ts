import { ZuiMonthLike } from './month-like';

/**
 * Optionally has year and/or month and/or day
 */
export interface PzmDayLike extends ZuiMonthLike {
    readonly day?: number;
}
