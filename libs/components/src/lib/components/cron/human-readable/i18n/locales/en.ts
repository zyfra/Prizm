// English

import { PrizmCronHRLocale } from '../locale';
export class en implements PrizmCronHRLocale {
  public atX0SecondsPastTheMinuteGt20(): string | null {
    return null;
  }
  public atX0MinutesPastTheHourGt20(): string | null {
    return null;
  }
  public commaMonthX0ThroughMonthX1(): string | null {
    return null;
  }
  public commaYearX0ThroughYearX1(): string | null {
    return null;
  }

  public use24HourTimeFormatByDefault() {
    return false;
  }

  public anErrorOccuredWhenGeneratingTheExpressionD() {
    return 'An error occured when generating the expression description.  Check the cron expression syntax.';
  }
  public everyMinute() {
    return 'every minute';
  }
  public everyHour() {
    return 'every hour';
  }
  public atSpace() {
    return 'At ';
  }
  public everyMinuteBetweenX0AndX1() {
    return 'Every minute between %s and %s';
  }
  public at() {
    return 'At';
  }
  public spaceAnd() {
    return ' and';
  }
  public everySecond() {
    return 'every second';
  }
  public everyX0Seconds() {
    return 'every %s seconds';
  }
  public secondsX0ThroughX1PastTheMinute() {
    return 'seconds %s through %s past the minute';
  }
  public atX0SecondsPastTheMinute() {
    return 'at %s seconds past the minute';
  }
  public everyX0Minutes() {
    return 'every %s minutes';
  }
  public minutesX0ThroughX1PastTheHour() {
    return 'minutes %s through %s past the hour';
  }
  public atX0MinutesPastTheHour() {
    return 'at %s minutes past the hour';
  }
  public everyX0Hours() {
    return 'every %s hours';
  }
  public betweenX0AndX1() {
    return 'between %s and %s';
  }
  public atX0() {
    return 'at %s';
  }
  public commaEveryDay() {
    return ', every day';
  }
  public commaEveryX0DaysOfTheWeek() {
    return ', every %s days of the week';
  }
  public commaX0ThroughX1() {
    return ', %s through %s';
  }
  public commaAndX0ThroughX1() {
    return ', %s through %s';
  }
  public first() {
    return 'first';
  }
  public second() {
    return 'second';
  }
  public third() {
    return 'third';
  }
  public fourth() {
    return 'fourth';
  }
  public fifth() {
    return 'fifth';
  }
  public commaOnThe() {
    return ', on the ';
  }
  public spaceX0OfTheMonth() {
    return ' %s of the month';
  }
  public lastDay() {
    return 'the last day';
  }
  public commaOnTheLastX0OfTheMonth() {
    return ', on the last %s of the month';
  }
  public commaOnlyOnX0() {
    return ', only on %s';
  }
  public commaAndOnX0() {
    return ', and on %s';
  }
  public commaEveryX0Months() {
    return ', every %s months';
  }
  public commaOnlyInX0() {
    return ', only in %s';
  }
  public commaOnTheLastDayOfTheMonth() {
    return ', on the last day of the month';
  }
  public commaOnTheLastWeekdayOfTheMonth() {
    return ', on the last weekday of the month';
  }
  public commaDaysBeforeTheLastDayOfTheMonth() {
    return ', %s days before the last day of the month';
  }
  public firstWeekday() {
    return 'first weekday';
  }
  public weekdayNearestDayX0() {
    return 'weekday nearest day %s';
  }
  public commaOnTheX0OfTheMonth() {
    return ', on the %s of the month';
  }
  public commaEveryX0Days() {
    return ', every %s days';
  }
  public commaBetweenDayX0AndX1OfTheMonth() {
    return ', between day %s and %s of the month';
  }
  public commaOnDayX0OfTheMonth() {
    return ', on day %s of the month';
  }
  public commaEveryHour() {
    return ', every hour';
  }
  public commaEveryX0Years(s?: string) {
    if (s === '1') return '';
    return ', every %s years';
  }
  public commaStartingX0() {
    return ', starting %s';
  }
  public daysOfTheWeek() {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }
  public monthsOfTheYear() {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }
}
