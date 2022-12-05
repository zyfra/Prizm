import { InjectionToken } from '@angular/core';
import { PrizmDayOfWeek } from '../@core/enums/day-of-week';

export const PRIZM_FIRST_DAY_OF_WEEK = new InjectionToken<PrizmDayOfWeek>(
    `The first day of the week index`,
    {
        factory: (): PrizmDayOfWeek => PrizmDayOfWeek.Monday,
    },
);
