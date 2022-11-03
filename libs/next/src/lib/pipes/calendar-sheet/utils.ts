
// TODO: 2.0 Remove export in ivy compilation

import { PZM_DAYS_IN_WEEK } from '../../@core/date-time/date-time';
import { PrizmDay } from '../../@core/date-time/day';
import { PrizmMonth } from '../../@core/date-time/month';
import { PrizmDayOfWeek } from '../../@core/enums/day-of-week';
import { pzmInRange } from '../../util/math/in-range';

/**
 * Computes day of week offset of the beginning of the month
 */
export const getMonthStartDaysOffset = (
    month: PrizmMonth,
    firstDayOfWeek: PrizmDayOfWeek,
): number => {
    const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();

    return startMonthOffsetFromSunday >= firstDayOfWeek
        ? startMonthOffsetFromSunday - firstDayOfWeek
        : PZM_DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
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
    console.assert(Number.isInteger(rowIndex));
    console.assert(pzmInRange(rowIndex, 0, 6));
    console.assert(Number.isInteger(colIndex));
    console.assert(pzmInRange(colIndex, 0, PZM_DAYS_IN_WEEK));

    let day =
        rowIndex * PZM_DAYS_IN_WEEK +
        colIndex -
        getMonthStartDaysOffset(month, firstDayOfWeek) +
        1;

    if (day > month.daysCount) {
        day = day - month.daysCount;
        month = month.append({month: 1});
    }

    if (day <= 0) {
        month = month.append({month: -1});
        day = month.daysCount + day;
    }

    return new PrizmDay(month.year, month.month, day);
};
