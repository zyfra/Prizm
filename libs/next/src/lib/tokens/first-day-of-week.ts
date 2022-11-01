import { InjectionToken } from '@angular/core';
import { PzmDayOfWeek } from '../@core/enums/day-of-week';

export const PZM_FIRST_DAY_OF_WEEK = new InjectionToken<PzmDayOfWeek>(
    `The first day of the week index`,
    {
        factory: (): PzmDayOfWeek => PzmDayOfWeek.Monday,
    },
);
