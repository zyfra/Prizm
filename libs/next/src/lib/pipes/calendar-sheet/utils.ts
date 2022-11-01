
// TODO: 2.0 Remove export in ivy compilation

import { ZUI_DAYS_IN_WEEK } from '../../@core/date-time/date-time';
import { PzmDay } from '../../@core/date-time/day';
import { PzmMonth } from '../../@core/date-time/month';
import { ZuiDayOfWeek } from '../../@core/enums/day-of-week';
import { pzmInRange } from '../../util/math/in-range';

/**
 * Computes day of week offset of the beginning of the month
 */
export const getMonthStartDaysOffset = (
    month: PzmMonth,
    firstDayOfWeek: ZuiDayOfWeek,
): number => {
    const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();

    return startMonthOffsetFromSunday >= firstDayOfWeek
        ? startMonthOffsetFromSunday - firstDayOfWeek
        : ZUI_DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
};

/*
TODO: 2.0 delete:
 * ZuiDay.getDayFromMonthRowCol
 * ZuiMonth.monthStartDaysOffset
 * ZuiMonth.weeksRowsCount
 * ZuiYear.yearStartDaysOffset
 * ZuiYear.getYearStartDaysOffset
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
    month: PzmMonth;
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
    firstDayOfWeek: ZuiDayOfWeek;
}): PzmDay => {
    console.assert(Number.isInteger(rowIndex));
    console.assert(pzmInRange(rowIndex, 0, 6));
    console.assert(Number.isInteger(colIndex));
    console.assert(pzmInRange(colIndex, 0, ZUI_DAYS_IN_WEEK));

    let day =
        rowIndex * ZUI_DAYS_IN_WEEK +
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

    return new PzmDay(month.year, month.month, day);
};
