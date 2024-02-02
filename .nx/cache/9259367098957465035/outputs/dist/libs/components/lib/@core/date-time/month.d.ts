import { PrizmMonthLike } from '../../types/month-like';
import { PrizmYear } from './year';
/**
 * Immutable object consisting of year and month
 */
export declare class PrizmMonth extends PrizmYear implements PrizmMonthLike {
    readonly month: number;
    /**
     * @param year
     * @param month (starting with 0)
     */
    constructor(year: number, month: number);
    /**
     * Tests month and year for validity
     */
    static isValidMonth(year: number, month: number): boolean;
    /**
     * Returns number of days in a month
     */
    static getMonthDaysCount(month: number, isLeapYear: boolean): number;
    /**
     * Returns current month and year based on local time zone
     * @nosideeffects
     */
    static currentLocal(): PrizmMonth;
    /**
     * Returns current month and year based on UTC
     */
    static currentUtc(): PrizmMonth;
    static lengthBetween(from: PrizmMonth, to: PrizmMonth): number;
    /**
     * Normalizes number by clamping it between min and max month
     */
    protected static normalizeMonthPart(month: number): number;
    /**
     * Tests month for validity
     */
    private static isValidMonthPart;
    get formattedMonthPart(): string;
    /**
     * @deprecated
     * Formatter month and year
     */
    get formattedMonth(): string;
    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Calculates number of weeks in a month (counting non-full weeks)
     */
    get weeksRowsCount(): number;
    /**
     * Returns days in a month
     */
    get daysCount(): number;
    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Computes day of week offset of the beginning of the month
     */
    get monthStartDaysOffset(): number;
    /**
     * Passed month and year are after current
     */
    monthBefore(another: PrizmMonth): boolean;
    /**
     * Passed month and year are after or the same as current
     */
    monthSameOrBefore(another: PrizmMonth): boolean;
    /**
     * Passed month and year are the same as current
     */
    monthSame(another: PrizmMonth): boolean;
    /**
     * Passed month and year are either before or equal to current
     */
    monthSameOrAfter(another: PrizmMonth): boolean;
    /**
     * Passed month and year are before current
     */
    monthAfter(another: PrizmMonth): boolean;
    /**
     * Immutably alters current month and year by passed offset
     *
     * @param offset
     * @param backwards shift date backwards
     * @return new month and year object as a result of offsetting current
     */
    append({ year, month }: PrizmMonthLike, backwards?: boolean): PrizmMonth;
    toString(): string;
    valueOf(): number;
    toJSON(): string;
    /**
     * Returns native {@link Date} based on local time zone
     */
    toLocalNativeDate(): Date;
    /**
     * Returns native {@link Date} based on UTC
     */
    toUtcNativeDate(): Date;
}
