import { Inject, Pipe, PipeTransform } from '@angular/core';
import { PRIZM_DAYS_IN_WEEK } from '../../@core/date-time/date-time';
import { PrizmDay } from '../../@core/date-time/day';
import { PrizmMonth } from '../../@core/date-time/month';
import { PrizmDayOfWeek } from '../../@core/enums/day-of-week';
import { PRIZM_FIRST_DAY_OF_WEEK } from '../../tokens/first-day-of-week';

import { getDayFromMonthRowCol } from './utils';

const CALENDAR_ROWS_COUNT = 6;

@Pipe({
  name: `prizmCalendarSheet`,
})
export class PrizmCalendarSheetPipe implements PipeTransform {
  private currentMonth: PrizmMonth | null = null;
  private currentSheet: ReadonlyArray<readonly PrizmDay[]> = [];

  constructor(
    @Inject(PRIZM_FIRST_DAY_OF_WEEK)
    private readonly firstDayOfWeek: PrizmDayOfWeek
  ) {}

  public transform(month: PrizmMonth, showAdjacentDays: boolean = false): ReadonlyArray<readonly PrizmDay[]> {
    if (this.currentMonth?.monthSame(month)) {
      return this.currentSheet;
    }

    const sheet: Array<readonly PrizmDay[]> = [];

    for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
      const row: PrizmDay[] = [];

      for (let colIndex = 0; colIndex < PRIZM_DAYS_IN_WEEK; colIndex++) {
        const day = getDayFromMonthRowCol({
          month,
          rowIndex,
          colIndex,
          firstDayOfWeek: this.firstDayOfWeek,
        });

        const isPrevMonthDay = (day: PrizmDay, relativeToMonth = month): boolean =>
          day.year < relativeToMonth.year || day.month < relativeToMonth.month;

        const isNextMonthDay = (day: PrizmDay, relativeToMonth = month): boolean =>
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
