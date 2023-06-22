// TODO: 2.0 Remove export in ivy compilation

import { PRIZM_DAYS_IN_WEEK } from '../../@core/date-time/date-time';
import { PrizmDay } from '../../@core/date-time/day';
import { PrizmMonth } from '../../@core/date-time/month';
import { PrizmDayOfWeek } from '../../@core/enums/day-of-week';
import { prizmInRange } from '../../util/math/in-range';
import { prizmAssert } from '@prizm-ui/core';

/**
 * Computes day of week offset of the beginning of the month
 */
export const getMonthStartDaysOffset = (month: PrizmMonth, firstDayOfWeek: PrizmDayOfWeek): number => {
  const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();

  return startMonthOffsetFromSunday >= firstDayOfWeek
    ? startMonthOffsetFromSunday - firstDayOfWeek
    : PRIZM_DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
};

/*
TODO: 2.0 delete:
 * PrizmDay.getDayFromMonthRowCol
 * PrizmMonth.monthStartDaysOffset
 * PrizmMonth.weeksRowsCount
 * PrizmYear.yearStartDaysOffset
 * PrizmYear.getYearStartDaysOffset
 */
/**
 * Calculated day on a calendar grid
 * @return resulting day on these coordinates (could exceed passed month)
 */
export const getDayFromMonthRowCol = ({
  month,
  rowIndex,
  colIndex,
  firstDayOfWeek,
}: {
  month: PrizmMonth;
  /**
   * row in a calendar
   */
  rowIndex: number;
  /**
   * column in a calendar
   */
  colIndex: number;
  /**
   * first day of the week index (Sunday - 0, Saturday - 6)
   */
  firstDayOfWeek: PrizmDayOfWeek;
}): PrizmDay => {
  prizmAssert.assert(Number.isInteger(rowIndex));
  prizmAssert.assert(prizmInRange(rowIndex, 0, 6));
  prizmAssert.assert(Number.isInteger(colIndex));
  prizmAssert.assert(prizmInRange(colIndex, 0, PRIZM_DAYS_IN_WEEK));

  let day = rowIndex * PRIZM_DAYS_IN_WEEK + colIndex - getMonthStartDaysOffset(month, firstDayOfWeek) + 1;

  if (day > month.daysCount) {
    day = day - month.daysCount;
    month = month.append({ month: 1 });
  }

  if (day <= 0) {
    month = month.append({ month: -1 });
    day = month.daysCount + day;
  }

  return new PrizmDay(month.year, month.month, day);
};
