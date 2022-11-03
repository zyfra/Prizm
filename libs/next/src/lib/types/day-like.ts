import { PzmMonthLike } from './month-like';

/**
 * Optionally has year and/or month and/or day
 */
export interface PzmDayLike extends PzmMonthLike {
    readonly day?: number;
}
