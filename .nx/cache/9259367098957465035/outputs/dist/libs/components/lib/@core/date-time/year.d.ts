import { PrizmYearLike } from '../../types/year-like';
/**
 * Immutable year object
 * @nosideeffects
 */
export declare class PrizmYear implements PrizmYearLike {
    readonly year: number;
    constructor(year: number);
    /**
     * Checks year for validity
     */
    static isValidYear(year: number): boolean;
    /**
     * Check if passed year is a leap year
     */
    static isLeapYear(year: number): boolean;
    /**
     * Returns amount of leap years from year 0 to the passed one
     */
    static getAbsoluteLeapYears(year: number): number;
    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Returns day of week offset of the beginning of the passed year
     *
     * @param year
     * @param absoluteLeapYears amount of leap years prior to the passed one
     * @return offset in days
     */
    static getYearStartDaysOffset(year: number, absoluteLeapYears: number): number;
    static lengthBetween(from: PrizmYear, to: PrizmYear): number;
    /**
     * Normalizes year by clamping it between min and max years
     */
    protected static normalizeYearPart(year: number): number;
    get formattedYear(): string;
    get isLeapYear(): boolean;
    /**
     * Returns amount of leap years from year 0 to current
     */
    get absoluteLeapYears(): number;
    /**
     * @deprecated DONT USE IT (will be deleted soon)
     *
     * Returns day of week offset of the beginning of the current year
     */
    get yearStartDaysOffset(): number;
    /**
     * Passed year is after current
     */
    yearBefore({ year }: PrizmYear): boolean;
    /**
     * Passed year is the same or after current
     */
    yearSameOrBefore({ year }: PrizmYear): boolean;
    /**
     * Passed year is the same as current
     */
    yearSame({ year }: PrizmYear): boolean;
    /**
     * Passed year is either the same of before the current
     */
    yearSameOrAfter({ year }: PrizmYear): boolean;
    /**
     * Passed year is before current
     */
    yearAfter({ year }: PrizmYear): boolean;
    /**
     * Immutably offsets year
     */
    append({ year }: PrizmYearLike, backwards?: boolean): PrizmYear;
    toString(): string;
    valueOf(): number;
    /**
     * Returns the primitive value of the given Date object.
     * Depending on the argument, the method can return either a string or a number.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
     */
    [Symbol.toPrimitive](hint: string): string | number;
    toJSON(): string;
}
