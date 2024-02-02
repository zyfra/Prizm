import { PrizmDay } from '../../@core/date-time/day';
import { PrizmMonth } from '../../@core/date-time/month';
import { PrizmDayOfWeek } from '../../@core/enums/day-of-week';
/**
 * Computes day of week offset of the beginning of the month
 */
export declare const getMonthStartDaysOffset: (month: PrizmMonth, firstDayOfWeek: PrizmDayOfWeek) => number;
/**
 * Calculated day on a calendar grid
 * @return resulting day on these coordinates (could exceed passed month)
 */
export declare const getDayFromMonthRowCol: ({ month, rowIndex, colIndex, firstDayOfWeek, }: {
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
}) => PrizmDay;
