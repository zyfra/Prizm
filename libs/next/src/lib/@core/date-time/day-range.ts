import { PzmDateMode } from '../../types/date-mode';
import { PZM_DATE_FILLER_LENGTH, PZM_DATE_RANGE_FILLER_LENGTH } from './date-fillers';
import { PZM_RANGE_SEPARATOR_CHAR } from './date-time';
import { PzmDay } from './day';
import { PzmMonthRange } from './month-range';

/**
 * Temporary type guard to satisfy ts-overloading of normalizeParse method
 * @deprecated
 */
export const pzmIsDateMode = (dateMode: string): dateMode is PzmDateMode =>
    [`DMY`, `YMD`, `MDY`].includes(dateMode);

/**
 * An immutable range of two {@link PzmDay} objects
 */
export class PzmDayRange extends PzmMonthRange {
    constructor(override readonly from: PzmDay, override readonly to: PzmDay) {
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
    public static override sort(day1: PzmDay, day2: PzmDay): PzmDayRange {
        return day1.daySameOrBefore(day2)
            ? new PzmDayRange(day1, day2)
            : new PzmDayRange(day2, day1);
    }

    public static fromLocalNativeDate(date1: Date, date2: Date): PzmDayRange {
      return new PzmDayRange(
        PzmDay.fromLocalNativeDate(date1),
        PzmDay.fromLocalNativeDate(date2),
      );
    }

    /**
     * @deprecated
     */
    public static normalizeParse(
        rangeString: string,
        dateFiller: string,
        dateRangeFiller: string,
    ): PzmDayRange;
    public static normalizeParse(rangeString: string, dateMode?: PzmDateMode): PzmDayRange;

    /**
     * Parse and correct a day range in string format
     *
     * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
     * @param dateMode {@link PzmDateMode}
     * @return normalized day range object
     */
    public static normalizeParse(
        rangeString: string,
        dateMode: string | PzmDateMode = `DMY`,
    ): PzmDayRange {
        const dateFormat = pzmIsDateMode(dateMode) ? dateMode : `DMY`;

        const leftDay = PzmDay.normalizeParse(
            rangeString.slice(0, PZM_DATE_FILLER_LENGTH),
            dateFormat,
        );

        if (rangeString.length < PZM_DATE_RANGE_FILLER_LENGTH) {
            return new PzmDayRange(leftDay, leftDay);
        }

        return PzmDayRange.sort(
            leftDay,
            PzmDay.normalizeParse(
                rangeString.slice(PZM_DATE_FILLER_LENGTH + PZM_RANGE_SEPARATOR_CHAR.length),
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

        return `${from}${PZM_RANGE_SEPARATOR_CHAR}${to}`;
    }

    public isDayInRange(
      day: PzmDay
    ) {
      return day.daySameOrAfter(this.from) && day.daySameOrBefore(this.to)
    }

    /**
     * Tests ranges for identity
     *
     * @param another second range to test against current
     * @return `true` if days are identical
     */
    public daySame(another: PzmDayRange): boolean {
        return this.from.daySame(another.from) && this.to.daySame(another.to);
    }

    /**
     * Locks range between two days included, or limits from one side if the other is null
     *
     * @param min
     * @param max
     * @return range — clamped range
     */
    public dayLimit(min: PzmDay | null, max: PzmDay | null): PzmDayRange {
        return new PzmDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
    }

    /**
     * Human readable format.
     */
    public getFormattedDayRange(dateFormat: PzmDateMode, dateSeparator: string): string {
        const from = this.from.getFormattedDay(dateFormat, dateSeparator);
        const to = this.to.getFormattedDay(dateFormat, dateSeparator);

        return `${from}${PZM_RANGE_SEPARATOR_CHAR}${to}`;
    }

    public toLocalNativeDate(): [Date, Date] {
      return [
        this.from.toLocalNativeDate(),
        this.to.toLocalNativeDate(),
      ];
    }

    public override toString(dateFormat: PzmDateMode = `DMY`, dateSeparator: string = `.`): string {
        const from = this.from.getFormattedDay(dateFormat, dateSeparator);
        const to = this.to.getFormattedDay(dateFormat, dateSeparator);

        return `${from}${PZM_RANGE_SEPARATOR_CHAR}${to}`;
    }
}
