import { PZM_CHAR_EN_DASH, PZM_CHAR_NO_BREAK_SPACE } from "../../constants/unicode-chars";
import { PzmTime } from './time';
import { PzmDay } from './day';

export const PZM_DAYS_IN_WEEK = 7;

export const PZM_DAYS_IN_NORMAL_YEAR = 365;

export const PZM_DAYS_IN_LEAP_YEAR = 366;

export const PZM_MONTHS_IN_YEAR = 12;

export const PZM_MIN_DAY = 1;

export const PZM_MIN_MONTH = 0;

export const PZM_MAX_MONTH = 11;

export const PZM_MIN_YEAR = 0;

export const PZM_MAX_YEAR = 9999;

export const PZM_RANGE_SEPARATOR_CHAR = `${PZM_CHAR_NO_BREAK_SPACE}${PZM_CHAR_EN_DASH}${PZM_CHAR_NO_BREAK_SPACE}`;

export const PZM_MILLISECONDS_IN_SECOND = 1000;

export const PZM_SECONDS_IN_MINUTE = 60;

export const PZM_MINUTES_IN_HOUR = 60;

export const PZM_HOURS_IN_DAY = 24;

export const PZM_MILLISECONDS_IN_MINUTE = PZM_MILLISECONDS_IN_SECOND * PZM_SECONDS_IN_MINUTE;

export const PZM_MILLISECONDS_IN_HOUR = PZM_MILLISECONDS_IN_MINUTE * PZM_MINUTES_IN_HOUR;

export const PZM_MILLISECONDS_IN_DAY = PZM_MILLISECONDS_IN_HOUR * PZM_HOURS_IN_DAY;

export class PzmDateTime {
  public static fromLocalNativeDate(date: Date): PzmDateTime {
    return new PzmDateTime(
      PzmDay.fromLocalNativeDate(date),
      PzmTime.fromLocalNativeDate(date),
    );
  }

  constructor(
    public day: PzmDay,
    public time: PzmTime
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
