import { PzmTimeLike } from '../../types/time-like';
import { PzmTimeMode } from '../../types/time-mode';
import { pzmPadStart } from '../../util/format/pad-start';
import { pzmInRange } from '../../util/math/in-range';

import {
  PZM_HOURS_IN_DAY,
  PZM_MILLISECONDS_IN_DAY,
  PZM_MILLISECONDS_IN_HOUR,
  PZM_MILLISECONDS_IN_MINUTE,
  PZM_MINUTES_IN_HOUR,
  PZM_SECONDS_IN_MINUTE,
} from './date-time';

/**
 * Immutable time object with hours, minutes, seconds and ms
 */
export class PzmTime implements PzmTimeLike {
    constructor(
        readonly hours: number,
        readonly minutes: number,
        readonly seconds: number = 0,
        readonly ms: number = 0,
    ) {
        console.assert(
            PzmTime.isValidTime(hours, minutes, seconds, ms),
            `Time must be real, but got:`,
            hours,
            minutes,
            seconds,
            ms,
        );
    }

    /**
     * Checks if time is valid
     */
    public static isValidTime(
        hours: number,
        minutes: number,
        seconds: number = 0,
        ms: number = 0,
    ): boolean {
        return (
            Number.isInteger(hours) &&
            pzmInRange(hours, 0, PZM_HOURS_IN_DAY) &&
            Number.isInteger(minutes) &&
            pzmInRange(minutes, 0, PZM_MINUTES_IN_HOUR) &&
            Number.isInteger(seconds) &&
            pzmInRange(seconds, 0, PZM_SECONDS_IN_MINUTE) &&
            Number.isInteger(ms) &&
            pzmInRange(ms, 0, 1000)
        );
    }

    /**
     * Current UTC time.
     */
    public static current(): PzmTime {
        return PzmTime.fromAbsoluteMilliseconds(Date.now() % PZM_MILLISECONDS_IN_DAY);
    }

    /**
     * Current time in local timezone
     */
    public static currentLocal(): PzmTime {
        const date = new Date();

        return PzmTime.fromAbsoluteMilliseconds(
            (Date.now() - date.getTimezoneOffset() * PZM_MILLISECONDS_IN_MINUTE) %
                PZM_MILLISECONDS_IN_DAY,
        );
    }

    /**
     * Calculates PzmTime from milliseconds
     */
    public static fromAbsoluteMilliseconds(milliseconds: number): PzmTime {
        console.assert(Number.isInteger(milliseconds));
        console.assert(
            pzmInRange(milliseconds, 0, PZM_MILLISECONDS_IN_DAY),
            `Milliseconds must be below ${PZM_MILLISECONDS_IN_DAY} (milliseconds in a day).`,
        );

        const hours = Math.floor(milliseconds / PZM_MILLISECONDS_IN_HOUR);
        const minutes = Math.floor(
            (milliseconds % PZM_MILLISECONDS_IN_HOUR) / PZM_MILLISECONDS_IN_MINUTE,
        );
        const seconds =
            Math.floor(
                ((milliseconds % PZM_MILLISECONDS_IN_HOUR) % PZM_MILLISECONDS_IN_MINUTE) / 1000,
            ) || 0;
        const ms =
            Math.floor(
                ((milliseconds % PZM_MILLISECONDS_IN_HOUR) % PZM_MILLISECONDS_IN_MINUTE) % 1000,
            ) || 0;

        return new PzmTime(hours, minutes, seconds, ms);
    }

    /**
     * Parses string into PzmTime object
     */
    public static fromString(time: string): PzmTime {
        const hours = Number(time.slice(0, 2));
        const minutes = Number(time.slice(3, 5));
        const seconds = Number(time.slice(6, 8)) || 0;
        const ms = Number(time.slice(9, 12)) || 0;

        return new PzmTime(hours, minutes, seconds, ms);
    }

    /**
     * Converts Date object into PzmTime
     * @param date
     */
    public static fromLocalNativeDate(date: Date): PzmTime {
        return new PzmTime(
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds(),
        );
    }

    /**
     * Shifts time by hours and minutes
     */
    public shift({hours = 0, minutes = 0, seconds = 0, ms = 0}: PzmTimeLike): PzmTime {
        const newMs = (1000 + this.ms + (ms % 1000)) % 1000;

        const secondsInMs = ms < 0 ? Math.ceil(ms / 1000) : Math.floor(ms / 1000);
        const secondsToAdd = secondsInMs + seconds;
        const newSeconds = (60 + this.seconds + (secondsToAdd % 60)) % 60;

        const minutesInSeconds =
            secondsToAdd < 0
                ? Math.ceil(secondsToAdd / 60)
                : Math.floor(secondsToAdd / 60);
        const minutesToAdd = minutesInSeconds + minutes;
        const newMinutes = (60 + this.minutes + (minutesToAdd % 60)) % 60;

        const hoursInMinutes =
            minutesToAdd < 0
                ? Math.ceil(minutesToAdd / 60)
                : Math.floor(minutesToAdd / 60);
        const hoursToAdd = hoursInMinutes + hours;
        const newHours = (24 + this.hours + (hoursToAdd % 24)) % 24;

        return new PzmTime(newHours, newMinutes, newSeconds, newMs);
    }

    /**
     * Converts PzmTime to string
     */
    public toString(mode?: PzmTimeMode): string {
        const needAddMs = mode === `HH:MM:SS.MSS` || (!mode && this.ms > 0);
        const needAddSeconds =
            needAddMs || mode === `HH:MM:SS` || (!mode && this.seconds > 0);

        return (
            `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}` +
            `${needAddSeconds ? `:${this.formatTime(this.seconds)}` : ``}` +
            `${needAddMs ? `.${this.formatTime(this.ms, 3)}` : ``}`
        );
    }

    public valueOf(): number {
        return this.toAbsoluteMilliseconds();
    }

    /**
     * Returns the primitive value of the given Date object.
     * Depending on the argument, the method can return either a string or a number.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
     */
    public [Symbol.toPrimitive](hint: string): string | number {
        return Date.prototype[Symbol.toPrimitive].call(this, hint);
    }

    /**
     * Converts PzmTime to milliseconds
     */
    public toAbsoluteMilliseconds(): number {
        return (
            this.hours * PZM_MILLISECONDS_IN_HOUR +
            this.minutes * PZM_MILLISECONDS_IN_MINUTE +
            this.seconds * 1000 +
            this.ms
        );
    }

    private formatTime(time: number, digits: number = 2): string {
        return pzmPadStart(String(time), digits, `0`);
    }

    public isSameTime(time: PzmTime): boolean {
      return this.ms === time.ms &&
        this.seconds === time.seconds &&
        this.hours === time.hours &&
        this.minutes === time.minutes
    }
}
