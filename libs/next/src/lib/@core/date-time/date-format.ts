import { InjectionToken } from '@angular/core';
import { PzmDateMode } from '../../types/date-mode';

export const PZM_DATE_FORMAT = new InjectionToken<PzmDateMode>(
    `Active date format for Zyfra UI`,
    {
        factory: (): PzmDateMode => `DMY`,
    },
);
