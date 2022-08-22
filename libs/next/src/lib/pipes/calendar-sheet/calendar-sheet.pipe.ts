import { Inject, Pipe, PipeTransform } from '@angular/core';
import { ZUI_DAYS_IN_WEEK } from '../../@core/date-time/date-time';
import { ZuiDay } from '../../@core/date-time/day';
import { ZuiMonth } from '../../@core/date-time/month';
import { ZuiDayOfWeek } from '../../@core/enums/day-of-week';
import { ZUI_FIRST_DAY_OF_WEEK } from '../../tokens/first-day-of-week';

import { getDayFromMonthRowCol } from './utils';

const CALENDAR_ROWS_COUNT = 6;

@Pipe({
    name: `zuiCalendarSheet`,
})
export class ZuiCalendarSheetPipe implements PipeTransform {
    private currentMonth: ZuiMonth | null = null;
    private currentSheet: ReadonlyArray<readonly ZuiDay[]> = [];

    constructor(
        @Inject(ZUI_FIRST_DAY_OF_WEEK)
        private readonly firstDayOfWeek: ZuiDayOfWeek,
    ) {}

    public transform(
        month: ZuiMonth,
        showAdjacentDays: boolean = false,
    ): ReadonlyArray<readonly ZuiDay[]> {
        if (this.currentMonth?.monthSame(month)) {
            return this.currentSheet;
        }

        const sheet: Array<readonly ZuiDay[]> = [];

        for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
            const row: ZuiDay[] = [];

            for (let colIndex = 0; colIndex < ZUI_DAYS_IN_WEEK; colIndex++) {
                const day = getDayFromMonthRowCol({
                    month,
                    rowIndex,
                    colIndex,
                    firstDayOfWeek: this.firstDayOfWeek,
                });

                const isPrevMonthDay = (day: ZuiDay, relativeToMonth = month): boolean =>
                    day.year < relativeToMonth.year || day.month < relativeToMonth.month;

                const isNextMonthDay = (day: ZuiDay, relativeToMonth = month): boolean =>
                    day.year > relativeToMonth.year || day.month > relativeToMonth.month;

                if (isPrevMonthDay(day) && !showAdjacentDays) {
                    continue;
                }

                if (isNextMonthDay(day) && !showAdjacentDays) {
                    break;
                }

                row.push(day);
            }

            sheet.push(row);
        }

        this.currentSheet = sheet.filter(row => row.length);
        this.currentMonth = month;

        return this.currentSheet;
    }
}
