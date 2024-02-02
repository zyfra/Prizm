import { PrizmDateMode } from '../../types/date-mode';
import { PrizmDayLike } from '../../types/day-like';
import { PrizmMonth } from './month';
/**
 * Immutable date object, consisting of day, month and year
 */
export declare class PrizmDay extends PrizmMonth {
    readonly day: number;
    constructor(year: number, month: number, day: number);
    /**
     * Creates {@link PrizmDay} from native {@link Date} based on local time zone
     */
    static fromLocalNativeDate(date: Date): PrizmDay;
    /**
     * Creates {@link PrizmDay} from native {@link Date} using UTC
     */
    static fromUtcNativeDate(date: Date): PrizmDay;
    /**
     * Check validity of year, month and day
     *
     * @param year
     * @param month
     * @param day
     * @return boolean validity
     */
    static isValidDay(year: number, month: number, day: number): boolean;
    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Calculated day on a calendar grid
     *
     * @param month
     * @param row row in a calendar
     * @param col column in a calendar
     * @return resulting day on these coordinates (could exceed passed month)
     */
    static getDayFromMonthRowCol(month: PrizmMonth, row: number, col: number): PrizmDay;
    /**
     * Current day based on local time zone
     */
    static currentLocal(): PrizmDay;
    /**
     * Returns current day based on UTC
     */
    static currentUtc(): PrizmDay;
    /**
     * Calculates {@link PrizmDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
     *
     * @param year any year value, including invalid
     * @param month any month value, including invalid (months start with 0)
     * @param day any day value, including invalid
     * @return normalized date
     */
    static normalizeOf(year: number, month: number, day: number): PrizmDay;
    static lengthBetween(from: PrizmDay, to: PrizmDay): number;
    static parseRawDateString(date: string, dateMode?: PrizmDateMode): {
        day: number;
        month: number;
        year: number;
    };
    /**
     * Parsing a string with date with normalization
     *
     * @param rawDate date string
     * @param dateMode date format of the date string (DMY | MDY | YMD)
     * @return normalized date
     */
    static normalizeParse(rawDate: string, dateMode?: PrizmDateMode): PrizmDay;
    /**
     * Parsing a date stringified in a toJSON format
     * @param yearMonthDayString date string in format of YYYY-MM-DD
     * @return date
     * @throws exceptions if any part of the date is invalid
     */
    static jsonParse(yearMonthDayString: string): PrizmDay;
    protected static normalizeDayPart(day: number, month: number, year: number): number;
    get formattedDayPart(): string;
    /**
     * @deprecated use {@link getFormattedDay} instead
     * Formatted whole date
     */
    get formattedDay(): string;
    get isWeekend(): boolean;
    /**
     * Returns day of week
     *
     * @param startFromMonday whether week starts from Monday and not from Sunday
     * @return day of week (from 0 to 6)
     */
    dayOfWeek(startFromMonday?: boolean): number;
    /**
     * Passed date is after current
     */
    dayBefore(another: PrizmDay): boolean;
    /**
     * Passed date is after or equals to current
     */
    daySameOrBefore(another: PrizmDay): boolean;
    /**
     * Passed date is the same as current
     */
    daySame(another: PrizmDay): boolean;
    /**
     * Passed date is either before or the same as current
     */
    daySameOrAfter(another: PrizmDay): boolean;
    /**
     * Passed date is before current
     */
    dayAfter(another: PrizmDay): boolean;
    /**
     * Clamping date between two limits
     *
     * @param min
     * @param max
     * @return clamped date
     */
    dayLimit(min: PrizmDay | null, max: PrizmDay | null): PrizmDay;
    /**
     * Immutably alters current day by passed offset
     *
     * If resulting month has more days than original one, date is rounded to the maximum day
     * in the resulting month. Offset of days will be calculated based on the resulted year and month
     * to not interfere with parent classes methods
     *
     * @param offset
     * @param backwards shift date backwards
     * @return new date object as a result of offsetting current
     */
    append({ year, month, day }: PrizmDayLike, backwards?: boolean): PrizmDay;
    /**
     * Returns formatted whole date
     */
    getFormattedDay(dateFormat: PrizmDateMode, separator: string): string;
    toString(dateFormat?: PrizmDateMode, separator?: string): string;
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
