import { inject, InjectionToken } from '@angular/core';

import { PZM_RANGE_SEPARATOR_CHAR } from './date-time';

export const PZM_DATE_FILLER = new InjectionToken<string>(`date filler for Zyfra UI`, {
    factory: (): string => `dd.mm.yyyy`,
});

/**
 * @deprecated dont use it
 */
export const PZM_DATE_RANGE_FILLER = new InjectionToken<string>(
    `date range filler for Zyfra UI`,
    {
        factory: (): string => {
            const dateFiller = inject(PZM_DATE_FILLER);

            return `${dateFiller}${PZM_RANGE_SEPARATOR_CHAR}${dateFiller}`;
        },
    },
);

/**
 * @internal 'dd.mm.yyyy'.length
 * Used in:
 * - {@link PzmInputDateComponent}
 * - {@link PzmInputDateRangeComponent}
 * - {@link PzmInputDateTimeComponent}
 */
export const PZM_DATE_FILLER_LENGTH = 10;
/**
 * @internal
 * Used in {@link PzmInputDateRangeComponent}
 */
export const PZM_DATE_RANGE_FILLER_LENGTH =
    2 * PZM_DATE_FILLER_LENGTH + PZM_RANGE_SEPARATOR_CHAR.length;
