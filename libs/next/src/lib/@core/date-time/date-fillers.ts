import { inject, InjectionToken } from '@angular/core';

import { ZUI_RANGE_SEPARATOR_CHAR } from './date-time';

export const ZUI_DATE_FILLER = new InjectionToken<string>(`date filler for Zyfra UI`, {
    factory: (): string => `dd.mm.yyyy`,
});

/**
 * @deprecated dont use it
 */
export const ZUI_DATE_RANGE_FILLER = new InjectionToken<string>(
    `date range filler for Zyfra UI`,
    {
        factory: (): string => {
            const dateFiller = inject(ZUI_DATE_FILLER);

            return `${dateFiller}${ZUI_RANGE_SEPARATOR_CHAR}${dateFiller}`;
        },
    },
);

/**
 * @internal 'dd.mm.yyyy'.length
 * Used in:
 * - {@link ZuiInputDateComponent}
 * - {@link ZuiInputDateRangeComponent}
 * - {@link ZuiInputDateTimeComponent}
 */
export const ZUI_DATE_FILLER_LENGTH = 10;
/**
 * @internal
 * Used in {@link ZuiInputDateRangeComponent}
 */
export const ZUI_DATE_RANGE_FILLER_LENGTH =
    2 * ZUI_DATE_FILLER_LENGTH + ZUI_RANGE_SEPARATOR_CHAR.length;
