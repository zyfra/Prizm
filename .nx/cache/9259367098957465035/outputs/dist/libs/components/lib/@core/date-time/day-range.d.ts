import { PrizmDateMode } from '../../types/date-mode';
import { PrizmDay } from './day';
import { PrizmMonthRange } from './month-range';
/**
 * Temporary type guard to satisfy ts-overloading of normalizeParse method
 * @deprecated
 */
export declare const prizmIsDateMode: (dateMode: string) => dateMode is PrizmDateMode;
/**
 * An immutable range of two {@link PrizmDay} objects
 */
export declare class PrizmDayRange extends PrizmMonthRange {
    readonly from: PrizmDay;
    readonly to: PrizmDay;
    constructor(from: PrizmDay, to: PrizmDay);
    /**
     * Creates range from two days after sorting them
     *
     * @param day1
     * @param day2
     * @return new range with sorted days
     */
    static sort(day1: PrizmDay, day2: PrizmDay): PrizmDayRange;
    static fromLocalNativeDate(date1: Date, date2: Date): PrizmDayRange;
    /**
     * @deprecated
     */
    static normalizeParse(rangeString: string, dateFiller: string, dateRangeFiller: string): PrizmDayRange;
    static normalizeParse(rangeString: string, dateMode?: PrizmDateMode): PrizmDayRange;
    get isSingleDay(): boolean;
    /**
     * Human readable format.
     * @deprecated use {@link getFormattedDayRange} instead
     */
    get formattedDayRange(): string;
    isDayInRange(day: PrizmDay): boolean;
    /**
     * Tests ranges for identity
     *
     * @param another second range to test against current
     * @return `true` if days are identical
     */
    daySame(another: PrizmDayRange): boolean;
    /**
     * Locks range between two days included, or limits from one side if the other is null
     *
     * @param min
     * @param max
     * @return range — clamped range
     */
    dayLimit(min: PrizmDay | null, max: PrizmDay | null): PrizmDayRange;
    /**
     * Human readable format.
     */
    getFormattedDayRange(dateFormat: PrizmDateMode, dateSeparator: string): string;
    toLocalNativeDate(): [Date | null, Date | null];
    toString(dateFormat?: PrizmDateMode, dateSeparator?: string): string;
}
