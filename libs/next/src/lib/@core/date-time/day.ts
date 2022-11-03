import { PrizmInvalidDayException } from '../../exceptions/invalid-day.exception';
import { PrizmInvalidMonthException } from '../../exceptions/invalid-month.exception';
import { PrizmInvalidYearException } from '../../exceptions/invalid-year.exception';
import { PrizmDateMode } from '../../types/date-mode';
import { PrizmDayLike } from '../../types/day-like';
import { pzmPadStart } from '../../util/format/pad-start';
import { pzmInRange, pzmNormalizeToIntNumber } from '../../util/math';
import { PrizmDayOfWeek } from '../enums/day-of-week';
import { PrizmMonthNumber } from '../enums/month-number';

import { PZM_DATE_FILLER_LENGTH } from './date-fillers';
import { PZM_DAYS_IN_WEEK, PZM_MIN_DAY, PZM_MONTHS_IN_YEAR } from './date-time';
import { PrizmMonth } from './month';
import { PrizmYear } from './year';


// TODO: Localized formatting
/**
 * Immutable date object, consisting of day, month and year
 */
export class PrizmDay extends PrizmMonth {
    constructor(
      year: number,
      month: number,
      readonly day: number,
    ) {
        super(year, month);
        console.assert(PrizmDay.isValidDay(year, month, day), {
          year,
          month,
          day
        });
    }

    /**
     * Creates {@link PrizmDay} from native {@link Date} based on local time zone
     */
    public static fromLocalNativeDate(date: Date): PrizmDay {
        return new PrizmDay(date.getFullYear(), date.getMonth(), date.getDate());
    }

    /**
     * Creates {@link PrizmDay} from native {@link Date} using UTC
     */
    public static fromUtcNativeDate(date: Date): PrizmDay {
        return new PrizmDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    }

    /**
     * Check validity of year, month and day
     *
     * @param year
     * @param month
     * @param day
     * @return boolean validity
     */
    public static isValidDay(year: number, month: number, day: number): boolean {
        return (
            PrizmMonth.isValidMonth(year, month) &&
            Number.isInteger(day) &&
            pzmInRange(
                day,
                PZM_MIN_DAY,
                PrizmMonth.getMonthDaysCount(month, PrizmYear.isLeapYear(year)) + 1,
            )
        );
    }

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
    public static getDayFromMonthRowCol(month: PrizmMonth, row: number, col: number): PrizmDay {
        console.assert(Number.isInteger(row));
        console.assert(pzmInRange(row, 0, 6));
        console.assert(Number.isInteger(col));
        console.assert(pzmInRange(col, 0, PZM_DAYS_IN_WEEK));

        let day = row * PZM_DAYS_IN_WEEK + col - month.monthStartDaysOffset + 1;

        if (day > month.daysCount) {
            day = day - month.daysCount;
            month = month.append({month: 1});
        }

        if (day <= 0) {
            month = month.append({month: -1});
            day = month.daysCount + day;
        }

        return new PrizmDay(month.year, month.month, day);
    }

    /**
     * Current day based on local time zone
     */
    public static override currentLocal(): PrizmDay {
        const nativeDate = new Date();
        const year = nativeDate.getFullYear();
        const month = nativeDate.getMonth();
        const day = nativeDate.getDate();

        return new PrizmDay(year, month, day);
    }

    /**
     * Returns current day based on UTC
     */
    public static override currentUtc(): PrizmDay {
        const nativeDate = new Date();
        const year = nativeDate.getUTCFullYear();
        const month = nativeDate.getUTCMonth();
        const day = nativeDate.getUTCDate();

        return new PrizmDay(year, month, day);
    }

    /**
     * Calculates {@link PrizmDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
     *
     * @param year any year value, including invalid
     * @param month any month value, including invalid (months start with 0)
     * @param day any day value, including invalid
     * @return normalized date
     */
    public static normalizeOf(year: number, month: number, day: number): PrizmDay {
        const normalizedYear = PrizmYear.normalizeYearPart(year);
        const normalizedMonth = PrizmMonth.normalizeMonthPart(month);
        const normalizedDay = PrizmDay.normalizeDayPart(
            day,
            normalizedMonth,
            normalizedYear,
        );

        return new PrizmDay(normalizedYear, normalizedMonth, normalizedDay);
    }

    public static override lengthBetween(from: PrizmDay, to: PrizmDay): number {
        return Math.round(
            (to.toLocalNativeDate().getTime() - from.toLocalNativeDate().getTime()) /
                (1000 * 60 * 60 * 24),
        );
    }

    public static parseRawDateString(
        date: string,
        dateMode: PrizmDateMode = `DMY`,
    ): {day: number; month: number; year: number} {
        console.assert(
            date.length === PZM_DATE_FILLER_LENGTH,
            `[parseRawDateString]: wrong date string length`,
        );

        switch (dateMode) {
            case `YMD`:
                return {
                    day: parseInt(date.slice(8, 10), 10),
                    month: parseInt(date.slice(5, 7), 10) - 1,
                    year: parseInt(date.slice(0, 4), 10),
                };

            case `MDY`:
                return {
                    day: parseInt(date.slice(3, 5), 10),
                    month: parseInt(date.slice(0, 2), 10) - 1,
                    year: parseInt(date.slice(6, 10), 10),
                };

            default:
            case `DMY`:
                return {
                    day: parseInt(date.slice(0, 2), 10),
                    month: parseInt(date.slice(3, 5), 10) - 1,
                    year: parseInt(date.slice(6, 10), 10),
                };
        }
    }

    // TODO: Move month and year related code corresponding classes
    /**
     * Parsing a string with date with normalization
     *
     * @param rawDate date string
     * @param dateMode date format of the date string (DMY | MDY | YMD)
     * @return normalized date
     */
    public static normalizeParse(rawDate: string, dateMode: PrizmDateMode = `DMY`): PrizmDay {
        const {day, month, year} = this.parseRawDateString(rawDate, dateMode);

        return PrizmDay.normalizeOf(year, month, day);
    }

    /**
     * Parsing a date stringified in a toJSON format
     * @param yearMonthDayString date string in format of YYYY-MM-DD
     * @return date
     * @throws exceptions if any part of the date is invalid
     */
    public static jsonParse(yearMonthDayString: string): PrizmDay {
        const {day, month, year} = this.parseRawDateString(yearMonthDayString, `YMD`);

        if (!PrizmYear.isValidYear(year)) {
            throw new PrizmInvalidYearException(year);
        }

        if (!PrizmMonth.isValidMonth(year, month)) {
            throw new PrizmInvalidMonthException(month);
        }

        if (
            !Number.isInteger(day) ||
            !pzmInRange(
                day,
                PZM_MIN_DAY,
                PrizmMonth.getMonthDaysCount(month, PrizmYear.isLeapYear(year)) + 1,
            )
        ) {
            throw new PrizmInvalidDayException(day);
        }

        return new PrizmDay(year, month, day);
    }

    protected static normalizeDayPart(day: number, month: number, year: number): number {
        console.assert(PrizmMonth.isValidMonth(year, month));

        const monthDaysCount = PrizmMonth.getMonthDaysCount(
            month,
            PrizmYear.isLeapYear(year),
        );

        return pzmNormalizeToIntNumber(day, 1, monthDaysCount);
    }

    get formattedDayPart(): string {
        return pzmPadStart(String(this.day), 2, `0`);
    }

    /**
     * @deprecated use {@link getFormattedDay} instead
     * Formatted whole date
     */
    public get formattedDay(): string {
        return `${this.formattedDayPart}.${this.formattedMonth}`;
    }

    public get isWeekend(): boolean {
        const dayOfWeek = this.dayOfWeek(false);

        return dayOfWeek === PrizmDayOfWeek.Saturday || dayOfWeek === PrizmDayOfWeek.Sunday;
    }

    /**
     * Returns day of week
     *
     * @param startFromMonday whether week starts from Monday and not from Sunday
     * @return day of week (from 0 to 6)
     */
    public dayOfWeek(startFromMonday: boolean = true): number {
        const dayOfWeek = startFromMonday
            ? this.toLocalNativeDate().getDay() - 1
            : this.toLocalNativeDate().getDay();

        return dayOfWeek < 0 ? 6 : dayOfWeek;
    }

    /**
     * Passed date is after current
     */
    public dayBefore(another: PrizmDay): boolean {
        return (
            this.monthBefore(another) ||
            (this.monthSame(another) && this.day < another.day)
        );
    }

    /**
     * Passed date is after or equals to current
     */
    public daySameOrBefore(another: PrizmDay): boolean {
        return (
            this.monthBefore(another) ||
            (this.monthSame(another) && this.day <= another.day)
        );
    }

    /**
     * Passed date is the same as current
     */
    public daySame(another: PrizmDay): boolean {
        return this.monthSame(another) && this.day === another.day;
    }

    /**
     * Passed date is either before or the same as current
     */
    public daySameOrAfter(another: PrizmDay): boolean {
        return (
            this.monthAfter(another) ||
            (this.monthSame(another) && this.day >= another.day)
        );
    }

    /**
     * Passed date is before current
     */
    public dayAfter(another: PrizmDay): boolean {
        return (
            this.monthAfter(another) ||
            (this.monthSame(another) && this.day > another.day)
        );
    }

    /**
     * Clamping date between two limits
     *
     * @param min
     * @param max
     * @return clamped date
     */
    public dayLimit(min: PrizmDay | null, max: PrizmDay | null): PrizmDay {
        if (min !== null && this.dayBefore(min)) {
            return min;
        }

        if (max !== null && this.dayAfter(max)) {
            return max;
        }

        return this;
    }

    // TODO: 2.0 Consider removing `backwards` option
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
    public override append(
        {year = 0, month = 0, day = 0}: PrizmDayLike,
        backwards: boolean = false,
    ): PrizmDay {
        if (backwards) {
            year *= -1;
            month *= -1;
            day *= -1;
        }

        const totalMonths = (this.year + year) * PZM_MONTHS_IN_YEAR + this.month + month;
        let years = Math.floor(totalMonths / PZM_MONTHS_IN_YEAR);
        let months = totalMonths % PZM_MONTHS_IN_YEAR;

        let days =
            Math.min(
                this.day,
                PrizmMonth.getMonthDaysCount(months, PrizmYear.isLeapYear(years)),
            ) + day;

        while (days > PrizmMonth.getMonthDaysCount(months, PrizmYear.isLeapYear(years))) {
            days -= PrizmMonth.getMonthDaysCount(months, PrizmYear.isLeapYear(years));

            if (months === PrizmMonthNumber.December) {
                years++;
                months = PrizmMonthNumber.January;
            } else {
                months++;
            }
        }

        while (days < PZM_MIN_DAY) {
            if (months === PrizmMonthNumber.January) {
                years--;
                months = PrizmMonthNumber.December;
            } else {
                months--;
            }

            days += PrizmMonth.getMonthDaysCount(months, PrizmYear.isLeapYear(years));
        }

        return new PrizmDay(years, months, days);
    }

    /**
     * Returns formatted whole date
     */
    public getFormattedDay(dateFormat: PrizmDateMode, separator: string): string {
        console.assert(
            separator.length === 1,
            `Separator should consist of only 1 symbol`,
        );

        const dd = this.formattedDayPart;
        const mm = this.formattedMonthPart;
        const yyyy = this.formattedYear;

        switch (dateFormat) {
            case `YMD`:
                return `${yyyy}${separator}${mm}${separator}${dd}`;
            case `MDY`:
                return `${mm}${separator}${dd}${separator}${yyyy}`;
            case `DMY`:
            default:
                return `${dd}${separator}${mm}${separator}${yyyy}`;
        }
    }

    public override toString(dateFormat: PrizmDateMode = `DMY`, separator: string = `.`): string {
        return this.getFormattedDay(dateFormat, separator);
    }

    public override toJSON(): string {
        return `${super.toJSON()}-${this.formattedDayPart}`;
    }

    /**
     * Returns native {@link Date} based on local time zone
     */
    public override toLocalNativeDate(): Date {
        return new Date(this.year, this.month, this.day);
    }

    /**
     * Returns native {@link Date} based on UTC
     */
    public override toUtcNativeDate(): Date {
        return new Date(Date.UTC(this.year, this.month, this.day));
    }
}
