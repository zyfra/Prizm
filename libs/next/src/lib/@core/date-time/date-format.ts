import { InjectionToken } from '@angular/core';
import { ZuiDateMode } from '../../types/date-mode';

export const ZUI_DATE_FORMAT = new InjectionToken<ZuiDateMode>(
    `Active date format for Zyfra UI`,
    {
        factory: (): ZuiDateMode => `DMY`,
    },
);
