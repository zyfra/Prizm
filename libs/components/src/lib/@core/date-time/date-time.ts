import { PRIZM_CHAR_EN_DASH, PRIZM_CHAR_NO_BREAK_SPACE } from '../../constants/unicode-chars';
import { PrizmTime } from './time';
import { PrizmDay } from './day';

export const PRIZM_DAYS_IN_WEEK = 7;

export const PRIZM_DAYS_IN_NORMAL_YEAR = 365;

export const PRIZM_DAYS_IN_LEAP_YEAR = 366;

export const PRIZM_MONTHS_IN_YEAR = 12;

export const PRIZM_MIN_DAY = 1;

export const PRIZM_MIN_MONTH = 0;

export const PRIZM_MAX_MONTH = 11;

export const PRIZM_MIN_YEAR = 0;

export const PRIZM_MAX_YEAR = 9999;

// export const PRIZM_RANGE_SEPARATOR_CHAR = `${PRIZM_CHAR_NO_BREAK_SPACE}${PRIZM_CHAR_EN_DASH}${PRIZM_CHAR_NO_BREAK_SPACE}`;
export const PRIZM_RANGE_SEPARATOR_CHAR = ` - `;

export const PRIZM_MILLISECONDS_IN_SECOND = 1000;

export const PRIZM_SECONDS_IN_MINUTE = 60;

export const PRIZM_MINUTES_IN_HOUR = 60;

export const PRIZM_HOURS_IN_DAY = 24;

export const PRIZM_MILLISECONDS_IN_MINUTE = PRIZM_MILLISECONDS_IN_SECOND * PRIZM_SECONDS_IN_MINUTE;

export const PRIZM_MILLISECONDS_IN_HOUR = PRIZM_MILLISECONDS_IN_MINUTE * PRIZM_MINUTES_IN_HOUR;

export const PRIZM_MILLISECONDS_IN_DAY = PRIZM_MILLISECONDS_IN_HOUR * PRIZM_HOURS_IN_DAY;

export class PrizmDateTime {
  public static fromLocalNativeDate(date: Date): PrizmDateTime {
    return new PrizmDateTime(PrizmDay.fromLocalNativeDate(date), PrizmTime.fromLocalNativeDate(date));
  }

  constructor(public day: PrizmDay, public time: PrizmTime = new PrizmTime(0, 0)) {}

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
