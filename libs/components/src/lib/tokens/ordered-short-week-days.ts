import { inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PRIZM_FIRST_DAY_OF_WEEK } from './first-day-of-week';
import { PRIZM_SHORT_WEEK_DAYS } from './i18n';

export type PRIZM_WEEK_DAYS_NAMES = [string, string, string, string, string, string, string];

// TODO: 2.0 Remove export in ivy compilation
export const prizmConvertToSundayFirstWeekFormat = (
  weekDaysNames: PRIZM_WEEK_DAYS_NAMES
): PRIZM_WEEK_DAYS_NAMES => {
  const sundayIndex = weekDaysNames.length - 1;

  return [weekDaysNames[sundayIndex], ...weekDaysNames.slice(0, sundayIndex)] as PRIZM_WEEK_DAYS_NAMES;
};

export const PRIZM_ORDERED_SHORT_WEEK_DAYS = new InjectionToken<Observable<PRIZM_WEEK_DAYS_NAMES>>(
  `Ordered calendars i18n texts`,
  {
    factory: (): Observable<PRIZM_WEEK_DAYS_NAMES> => {
      const firstDayOfWeekIndex = inject(PRIZM_FIRST_DAY_OF_WEEK);

      return inject(PRIZM_SHORT_WEEK_DAYS).pipe(
        map(prizmConvertToSundayFirstWeekFormat),
        map(
          weekDays =>
            [
              ...weekDays.slice(firstDayOfWeekIndex),
              ...weekDays.slice(0, firstDayOfWeekIndex),
            ] as PRIZM_WEEK_DAYS_NAMES
        )
      );
    },
  }
);
