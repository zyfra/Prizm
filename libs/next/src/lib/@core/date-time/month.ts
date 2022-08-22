import { ZuiMonthLike } from '../../types/month-like';
import { zuiPadStart } from '../../util/format/pad-start';
import { zuiInRange } from '../../util/math/in-range';
import { zuiNormalizeToIntNumber } from '../../util/math/normalize-to-int-number';
import { ZuiMonthNumber } from '../enums/month-number';

import { ZUI_DAYS_IN_WEEK, ZUI_MAX_MONTH, ZUI_MIN_MONTH, ZUI_MONTHS_IN_YEAR } from './date-time';
import { ZuiYear } from './year';

/**
 * Immutable object consisting of year and month
 */
export class ZuiMonth extends ZuiYear implements ZuiMonthLike {
    /**
     * @param year
     * @param month (starting with 0)
     */
    constructor(year: number, readonly month: number) {
        super(year);
        console.assert(ZuiMonth.isValidMonth(year, month));
    }

    /**
     * Tests month and year for validity
     */
    public static isValidMonth(year: number, month: number): boolean {
        return ZuiYear.isValidYear(year) && ZuiMonth.isValidMonthPart(month);
    }

    /**
     * Returns number of days in a month
     */
    public static getMonthDaysCount(month: number, isLeapYear: boolean): number {
        console.assert(ZuiMonth.isValidMonthPart(month));

        switch (month) {
            case ZuiMonthNumber.February:
                return isLeapYear ? 29 : 28;
            case ZuiMonthNumber.April:
            case ZuiMonthNumber.June:
            case ZuiMonthNumber.September:
            case ZuiMonthNumber.November:
                return 30;
            default:
                return 31;
        }
    }

    /**
     * Returns current month and year based on local time zone
     * @nosideeffects
     */
    public static currentLocal(): ZuiMonth {
        const nativeDate = new Date();

        return new ZuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
    }

    /**
     * Returns current month and year based on UTC
     */
    public static currentUtc(): ZuiMonth {
        const nativeDate = new Date();

        return new ZuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
    }

    public static override lengthBetween(from: ZuiMonth, to: ZuiMonth): number {
        const absoluteFrom = from.month + from.year * 12;
        const absoluteTo = to.month + to.year * 12;

        return absoluteTo - absoluteFrom;
    }

    /**
     * Normalizes number by clamping it between min and max month
     */
    protected static normalizeMonthPart(month: number): number {
        return zuiNormalizeToIntNumber(month, ZUI_MIN_MONTH, ZUI_MAX_MONTH);
    }

    /**
     * Tests month for validity
     */
    private static isValidMonthPart(month: number): boolean {
        return Number.isInteger(month) && zuiInRange(month, ZUI_MIN_MONTH, ZUI_MAX_MONTH + 1);
    }

    get formattedMonthPart(): string {
        return zuiPadStart(String(this.month + 1), 2, `0`);
    }

    /**
     * @deprecated
     * Formatter month and year
     */
    get formattedMonth(): string {
        return `${this.formattedMonthPart}.${this.formattedYear}`;
    }

    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Calculates number of weeks in a month (counting non-full weeks)
     */
    get weeksRowsCount(): number {
        return Math.ceil((this.monthStartDaysOffset + this.daysCount) / ZUI_DAYS_IN_WEEK);
    }

    /**
     * Returns days in a month
     */
    public get daysCount(): number {
        return ZuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
    }

    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Computes day of week offset of the beginning of the month
     */
    public get monthStartDaysOffset(): number {
        let result = this.yearStartDaysOffset;

        for (let currentMonth = 0; currentMonth <= this.month - 1; currentMonth++) {
            result += ZuiMonth.getMonthDaysCount(currentMonth, this.isLeapYear);
        }

        return result % ZUI_DAYS_IN_WEEK;
    }

    /**
     * Passed month and year are after current
     */
    public monthBefore(another: ZuiMonth): boolean {
        return (
            this.yearBefore(another) ||
            (this.yearSame(another) && this.month < another.month)
        );
    }

    /**
     * Passed month and year are after or the same as current
     */
    public monthSameOrBefore(another: ZuiMonth): boolean {
        return (
            this.yearBefore(another) ||
            (this.yearSame(another) && this.month <= another.month)
        );
    }

    /**
     * Passed month and year are the same as current
     */
    public monthSame(another: ZuiMonth): boolean {
        return this.yearSame(another) && this.month === another.month;
    }

    /**
     * Passed month and year are either before or equal to current
     */
    public monthSameOrAfter(another: ZuiMonth): boolean {
        return (
            this.yearAfter(another) ||
            (this.yearSame(another) && this.month >= another.month)
        );
    }

    /**
     * Passed month and year are before current
     */
    public monthAfter(another: ZuiMonth): boolean {
        return (
            this.yearAfter(another) ||
            (this.yearSame(another) && this.month > another.month)
        );
    }

    // TODO: 2.0 Consider removing `backwards` option
    /**
     * Immutably alters current month and year by passed offset
     *
     * @param offset
     * @param backwards shift date backwards
     * @return new month and year object as a result of offsetting current
     */
    public override append({year = 0, month = 0}: ZuiMonthLike, backwards: boolean = false): ZuiMonth {
        if (backwards) {
            year *= -1;
            month *= -1;
        }

        const totalMonths = (this.year + year) * ZUI_MONTHS_IN_YEAR + this.month + month;

        return new ZuiMonth(
            Math.floor(totalMonths / ZUI_MONTHS_IN_YEAR),
            totalMonths % ZUI_MONTHS_IN_YEAR,
        );
    }

    public override toString(): string {
        return this.formattedMonth;
    }

    public override valueOf(): number {
        return this.toLocalNativeDate().valueOf();
    }

    public override toJSON(): string {
        return `${super.toJSON()}-${this.formattedMonthPart}`;
    }

    /**
     * Returns native {@link Date} based on local time zone
     */
    public toLocalNativeDate(): Date {
        return new Date(this.year, this.month);
    }

    /**
     * Returns native {@link Date} based on UTC
     */
    public toUtcNativeDate(): Date {
        return new Date(Date.UTC(this.year, this.month));
    }
}
