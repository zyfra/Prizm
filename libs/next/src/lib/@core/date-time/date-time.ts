import { ZUI_CHAR_EN_DASH, ZUI_CHAR_NO_BREAK_SPACE } from "../../constants/unicode-chars";
import { ZuiTime } from './time';
import { PzmDay } from './day';

export const ZUI_DAYS_IN_WEEK = 7;

export const ZUI_DAYS_IN_NORMAL_YEAR = 365;

export const ZUI_DAYS_IN_LEAP_YEAR = 366;

export const ZUI_MONTHS_IN_YEAR = 12;

export const ZUI_MIN_DAY = 1;

export const ZUI_MIN_MONTH = 0;

export const ZUI_MAX_MONTH = 11;

export const ZUI_MIN_YEAR = 0;

export const ZUI_MAX_YEAR = 9999;

export const ZUI_RANGE_SEPARATOR_CHAR = `${ZUI_CHAR_NO_BREAK_SPACE}${ZUI_CHAR_EN_DASH}${ZUI_CHAR_NO_BREAK_SPACE}`;

export const ZUI_MILLISECONDS_IN_SECOND = 1000;

export const ZUI_SECONDS_IN_MINUTE = 60;

export const ZUI_MINUTES_IN_HOUR = 60;

export const ZUI_HOURS_IN_DAY = 24;

export const ZUI_MILLISECONDS_IN_MINUTE = ZUI_MILLISECONDS_IN_SECOND * ZUI_SECONDS_IN_MINUTE;

export const ZUI_MILLISECONDS_IN_HOUR = ZUI_MILLISECONDS_IN_MINUTE * ZUI_MINUTES_IN_HOUR;

export const ZUI_MILLISECONDS_IN_DAY = ZUI_MILLISECONDS_IN_HOUR * ZUI_HOURS_IN_DAY;

export class ZuiDateTime {
  public static fromLocalNativeDate(date: Date): ZuiDateTime {
    return new ZuiDateTime(
      PzmDay.fromLocalNativeDate(date),
      ZuiTime.fromLocalNativeDate(date),
    );
  }

  constructor(
    public day: PzmDay,
    public time: ZuiTime
  ) {}

  public toLocalNativeDate(): Date {
    return new Date(
      this.day.year,
      this.day.month,
      this.day.day,
      this.time.hours,
      this.time.minutes,
      this.time.seconds,
      this.time.ms
    );
  }
}
