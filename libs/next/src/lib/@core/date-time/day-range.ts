import { ZuiDateMode } from '../../types/date-mode';
import { ZUI_DATE_FILLER_LENGTH, ZUI_DATE_RANGE_FILLER_LENGTH } from './date-fillers';
import { ZUI_RANGE_SEPARATOR_CHAR } from './date-time';
import { ZuiDay } from './day';
import { ZuiMonthRange } from './month-range';

/**
 * Temporary type guard to satisfy ts-overloading of normalizeParse method
 * @deprecated
 */
export const zuiIsDateMode = (dateMode: string): dateMode is ZuiDateMode =>
    [`DMY`, `YMD`, `MDY`].includes(dateMode);

/**
 * An immutable range of two {@link ZuiDay} objects
 */
export class ZuiDayRange extends ZuiMonthRange {
    constructor(override readonly from: ZuiDay, override readonly to: ZuiDay) {
        super(from, to);

        console.assert(from.daySameOrBefore(to));
    }

    /**
     * Creates range from two days after sorting them
     *
     * @param day1
     * @param day2
     * @return new range with sorted days
     */
    public static override sort(day1: ZuiDay, day2: ZuiDay): ZuiDayRange {
        return day1.daySameOrBefore(day2)
            ? new ZuiDayRange(day1, day2)
            : new ZuiDayRange(day2, day1);
    }

    public static fromLocalNativeDate(date1: Date, date2: Date): ZuiDayRange {
      return new ZuiDayRange(
        ZuiDay.fromLocalNativeDate(date1),
        ZuiDay.fromLocalNativeDate(date2),
      );
    }

    /**
     * @deprecated
     */
    public static normalizeParse(
        rangeString: string,
        dateFiller: string,
        dateRangeFiller: string,
    ): ZuiDayRange;
    public static normalizeParse(rangeString: string, dateMode?: ZuiDateMode): ZuiDayRange;

    /**
     * Parse and correct a day range in string format
     *
     * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
     * @param dateMode {@link ZuiDateMode}
     * @return normalized day range object
     */
    public static normalizeParse(
        rangeString: string,
        dateMode: string | ZuiDateMode = `DMY`,
    ): ZuiDayRange {
        const dateFormat = zuiIsDateMode(dateMode) ? dateMode : `DMY`;

        const leftDay = ZuiDay.normalizeParse(
            rangeString.slice(0, ZUI_DATE_FILLER_LENGTH),
            dateFormat,
        );

        if (rangeString.length < ZUI_DATE_RANGE_FILLER_LENGTH) {
            return new ZuiDayRange(leftDay, leftDay);
        }

        return ZuiDayRange.sort(
            leftDay,
            ZuiDay.normalizeParse(
                rangeString.slice(ZUI_DATE_FILLER_LENGTH + ZUI_RANGE_SEPARATOR_CHAR.length),
                dateFormat,
            ),
        );
    }

    get isSingleDay(): boolean {
        return this.from.daySame(this.to);
    }

    /**
     * Human readable format.
     * @deprecated use {@link getFormattedDayRange} instead
     */
    public get formattedDayRange(): string {
        const from = this.from.getFormattedDay(`DMY`, `.`);
        const to = this.to.getFormattedDay(`DMY`, `.`);

        return `${from}${ZUI_RANGE_SEPARATOR_CHAR}${to}`;
    }

    public isDayInRange(
      day: ZuiDay
    ) {
      return day.daySameOrAfter(this.from) && day.daySameOrBefore(this.to)
    }

    /**
     * Tests ranges for identity
     *
     * @param another second range to test against current
     * @return `true` if days are identical
     */
    public daySame(another: ZuiDayRange): boolean {
        return this.from.daySame(another.from) && this.to.daySame(another.to);
    }

    /**
     * Locks range between two days included, or limits from one side if the other is null
     *
     * @param min
     * @param max
     * @return range — clamped range
     */
    public dayLimit(min: ZuiDay | null, max: ZuiDay | null): ZuiDayRange {
        return new ZuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
    }

    /**
     * Human readable format.
     */
    public getFormattedDayRange(dateFormat: ZuiDateMode, dateSeparator: string): string {
        const from = this.from.getFormattedDay(dateFormat, dateSeparator);
        const to = this.to.getFormattedDay(dateFormat, dateSeparator);

        return `${from}${ZUI_RANGE_SEPARATOR_CHAR}${to}`;
    }

    public toLocalNativeDate(): [Date, Date] {
      return [
        this.from.toLocalNativeDate(),
        this.to.toLocalNativeDate(),
      ];
    }

    public override toString(dateFormat: ZuiDateMode = `DMY`, dateSeparator: string = `.`): string {
        const from = this.from.getFormattedDay(dateFormat, dateSeparator);
        const to = this.to.getFormattedDay(dateFormat, dateSeparator);

        return `${from}${ZUI_RANGE_SEPARATOR_CHAR}${to}`;
    }
}
