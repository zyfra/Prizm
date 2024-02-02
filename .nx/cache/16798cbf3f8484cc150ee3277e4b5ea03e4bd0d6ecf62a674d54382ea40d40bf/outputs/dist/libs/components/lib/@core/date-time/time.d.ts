import { PrizmTimeLike } from '../../types/time-like';
import { PrizmTimeMode } from '../../types/time-mode';
/**
 * Immutable time object with hours, minutes, seconds and ms
 */
export declare class PrizmTime implements PrizmTimeLike {
    readonly hours: number;
    readonly minutes: number;
    readonly seconds: number;
    readonly ms: number;
    static correctTime(parsedTime: PrizmTime): PrizmTime;
    constructor(hours: number, minutes: number, seconds?: number, ms?: number);
    /**
     * Checks if time is valid
     */
    static isValidTime(hours: number, minutes: number, seconds?: number, ms?: number): boolean;
    /**
     * Current UTC time.
     */
    static current(): PrizmTime;
    /**
     * Current time in local timezone
     */
    static currentLocal(): PrizmTime;
    /**
     * Calculates PrizmTime from milliseconds
     */
    static fromAbsoluteMilliseconds(milliseconds: number): PrizmTime;
    /**
     * Parses string into PrizmTime object
     */
    static fromString(time: string): PrizmTime;
    /**
     * Converts Date object into PrizmTime
     * @param date
     */
    static fromLocalNativeDate(date: Date): PrizmTime;
    /**
     * Shifts time by hours and minutes
     */
    shift({ hours, minutes, seconds, ms }: PrizmTimeLike): PrizmTime;
    timeLimit(minTime: PrizmTime | null, maxTime: PrizmTime | null): PrizmTime;
    /**
     * Converts PrizmTime to string
     */
    toString(mode?: PrizmTimeMode): string;
    valueOf(): number;
    /**
     * Returns the primitive value of the given Date object.
     * Depending on the argument, the method can return either a string or a number.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
     */
    [Symbol.toPrimitive](hint: string): string | number;
    /**
     * Converts PrizmTime to milliseconds
     */
    toAbsoluteMilliseconds(): number;
    private formatTime;
    isSameTime(time: PrizmTime): boolean;
}
