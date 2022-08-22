import { InjectionToken } from '@angular/core';
import { ZuiDayOfWeek } from '../@core/enums/day-of-week';

export const ZUI_FIRST_DAY_OF_WEEK = new InjectionToken<ZuiDayOfWeek>(
    `The first day of the week index`,
    {
        factory: (): ZuiDayOfWeek => ZuiDayOfWeek.Monday,
    },
);
