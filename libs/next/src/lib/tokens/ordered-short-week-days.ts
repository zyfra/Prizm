import { inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZUI_FIRST_DAY_OF_WEEK } from './first-day-of-week';
import { ZUI_SHORT_WEEK_DAYS } from './i18n';

export type ZUI_WEEK_DAYS_NAMES = [string, string, string, string, string, string, string];

// TODO: 2.0 Remove export in ivy compilation
export const zuiConvertToSundayFirstWeekFormat = (
    weekDaysNames: ZUI_WEEK_DAYS_NAMES,
): ZUI_WEEK_DAYS_NAMES => {
    const sundayIndex = weekDaysNames.length - 1;

    return [
        weekDaysNames[sundayIndex],
        ...weekDaysNames.slice(0, sundayIndex),
    ] as ZUI_WEEK_DAYS_NAMES;
};

export const ZUI_ORDERED_SHORT_WEEK_DAYS = new InjectionToken<
    Observable<ZUI_WEEK_DAYS_NAMES>
>(`Ordered calendars i18n texts`, {
    factory: (): Observable<ZUI_WEEK_DAYS_NAMES> => {
        const firstDayOfWeekIndex = inject(ZUI_FIRST_DAY_OF_WEEK);

        return inject(ZUI_SHORT_WEEK_DAYS).pipe(
            map(zuiConvertToSundayFirstWeekFormat),
            map(
                weekDays =>
                    [
                        ...weekDays.slice(firstDayOfWeekIndex),
                        ...weekDays.slice(0, firstDayOfWeekIndex),
                    ] as ZUI_WEEK_DAYS_NAMES,
            ),
        );
    },
});
