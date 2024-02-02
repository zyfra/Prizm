import { PrizmTime } from './time';
import { PrizmDay } from './day';
export declare const PRIZM_DAYS_IN_WEEK = 7;
export declare const PRIZM_DAYS_IN_NORMAL_YEAR = 365;
export declare const PRIZM_DAYS_IN_LEAP_YEAR = 366;
export declare const PRIZM_MONTHS_IN_YEAR = 12;
export declare const PRIZM_MIN_DAY = 1;
export declare const PRIZM_MIN_MONTH = 0;
export declare const PRIZM_MAX_MONTH = 11;
export declare const PRIZM_MIN_YEAR = 0;
export declare const PRIZM_MAX_YEAR = 9999;
export declare const PRIZM_RANGE_SEPARATOR_CHAR = " - ";
export declare const PRIZM_MILLISECONDS_IN_SECOND = 1000;
export declare const PRIZM_SECONDS_IN_MINUTE = 60;
export declare const PRIZM_MINUTES_IN_HOUR = 60;
export declare const PRIZM_HOURS_IN_DAY = 24;
export declare const PRIZM_MILLISECONDS_IN_MINUTE: number;
export declare const PRIZM_MILLISECONDS_IN_HOUR: number;
export declare const PRIZM_MILLISECONDS_IN_DAY: number;
export declare class PrizmDateTime {
    day: PrizmDay;
    time: PrizmTime | null;
    static fromLocalNativeDate(date: Date): PrizmDateTime;
    constructor(day: PrizmDay, time?: PrizmTime | null);
    toLocalNativeDate(): Date;
}
