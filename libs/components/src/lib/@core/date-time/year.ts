import { PrizmYearLike } from '../../types/year-like';
import { prizmPadStart } from '../../util/format/pad-start';
import { prizmInRange } from '../../util/math/in-range';
import { prizmNormalizeToIntNumber } from '../../util/math/normalize-to-int-number';

import { PRIZM_DAYS_IN_LEAP_YEAR, PRIZM_DAYS_IN_NORMAL_YEAR, PRIZM_DAYS_IN_WEEK, PRIZM_MAX_YEAR, PRIZM_MIN_YEAR } from './date-time';

/**
 * Immutable year object
 * @nosideeffects
 */
export class PrizmYear implements PrizmYearLike {
    constructor(readonly year: number) {
        console.assert(PrizmYear.isValidYear(year));
    }

    /**
     * Checks year for validity
     */
    public static isValidYear(year: number): boolean {
        return Number.isInteger(year) && prizmInRange(year, PRIZM_MIN_YEAR, PRIZM_MAX_YEAR + 1);
    }

    /**
     * Check if passed year is a leap year
     */
    public static isLeapYear(year: number): boolean {
        console.assert(PrizmYear.isValidYear(year));

        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    }

    /**
     * Returns amount of leap years from year 0 to the passed one
     */
    public static getAbsoluteLeapYears(year: number): number {
        console.assert(PrizmYear.isValidYear(year));

        return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
    }

    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Returns day of week offset of the beginning of the passed year
     *
     * @param year
     * @param absoluteLeapYears amount of leap years prior to the passed one
     * @return offset in days
     */
    public static getYearStartDaysOffset(year: number, absoluteLeapYears: number): number {
        console.assert(PrizmYear.isValidYear(year));
        console.assert(Number.isInteger(absoluteLeapYears));
        console.assert(year >= absoluteLeapYears);
        console.assert(absoluteLeapYears >= 0);

        return (
            (absoluteLeapYears * PRIZM_DAYS_IN_LEAP_YEAR +
                (year - absoluteLeapYears) * PRIZM_DAYS_IN_NORMAL_YEAR +
                5) %
            PRIZM_DAYS_IN_WEEK
        );
    }

    public static lengthBetween(from: PrizmYear, to: PrizmYear): number {
        return to.year - from.year;
    }

    /**
     * Normalizes year by clamping it between min and max years
     */
    protected static normalizeYearPart(year: number): number {
        return prizmNormalizeToIntNumber(year, PRIZM_MIN_YEAR, PRIZM_MAX_YEAR);
    }

    public get formattedYear(): string {
        return prizmPadStart(String(this.year), 4, `0`);
    }

    public get isLeapYear(): boolean {
        return PrizmYear.isLeapYear(this.year);
    }

    /**
     * Returns amount of leap years from year 0 to current
     */
    public get absoluteLeapYears(): number {
        return PrizmYear.getAbsoluteLeapYears(this.year);
    }

    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Returns day of week offset of the beginning of the current year
     */
    public get yearStartDaysOffset(): number {
        return PrizmYear.getYearStartDaysOffset(this.year, this.absoluteLeapYears);
    }

    /**
     * Passed year is after current
     */
    public yearBefore({year}: PrizmYear): boolean {
        return this.year < year;
    }

    /**
     * Passed year is the same or after current
     */
    public yearSameOrBefore({year}: PrizmYear): boolean {
        return this.year <= year;
    }

    /**
     * Passed year is the same as current
     */
    public yearSame({year}: PrizmYear): boolean {
        return this.year === year;
    }

    /**
     * Passed year is either the same of before the current
     */
    public yearSameOrAfter({year}: PrizmYear): boolean {
        return this.year >= year;
    }

    /**
     * Passed year is before current
     */
    public yearAfter({year}: PrizmYear): boolean {
        return this.year > year;
    }

    // TODO: 2.0 Consider removing `backwards` option
    /**
     * Immutably offsets year
     */
    public append({year = 0}: PrizmYearLike, backwards: boolean = false): PrizmYear {
        console.assert(Number.isInteger(year));

        if (backwards) {
            year *= -1;
        }

        const resultYear = this.year + year;

        console.assert(PrizmYear.isValidYear(resultYear));

        return new PrizmYear(resultYear);
    }

    public toString(): string {
        return this.formattedYear;
    }

    public valueOf(): number {
        return this.year;
    }

    /**
     * Returns the primitive value of the given Date object.
     * Depending on the argument, the method can return either a string or a number.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
     */
    public [Symbol.toPrimitive](hint: string): string | number {
        return Date.prototype[Symbol.toPrimitive].call(this, hint);
    }

    public toJSON(): string {
        return this.formattedYear;
    }
}
