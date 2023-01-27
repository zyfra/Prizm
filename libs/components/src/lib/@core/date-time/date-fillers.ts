import { inject, InjectionToken } from '@angular/core';

import { PRIZM_RANGE_SEPARATOR_CHAR } from './date-time';

export const PRIZM_DATE_FILLER = new InjectionToken<string>(`date filler for Prizm UI`, {
  factory: (): string => `dd.mm.yyyy`,
});

/**
 * @deprecated dont use it
 */
export const PRIZM_DATE_RANGE_FILLER = new InjectionToken<string>(`date range filler for Prizm UI`, {
  factory: (): string => {
    const dateFiller = inject(PRIZM_DATE_FILLER);

    return `${dateFiller}${PRIZM_RANGE_SEPARATOR_CHAR}${dateFiller}`;
  },
});

/**
 * @internal 'dd.mm.yyyy'.length
 * Used in:
 * - {@link PrizmInputDateComponent}
 * - {@link PrizmInputDateRangeComponent}
 * - {@link PrizmInputDateTimeComponent}
 */
export const PRIZM_DATE_FILLER_LENGTH = 10;
/**
 * @internal
 * Used in {@link PrizmInputDateRangeComponent}
 */
export const PRIZM_DATE_RANGE_FILLER_LENGTH =
  2 * PRIZM_DATE_FILLER_LENGTH + PRIZM_RANGE_SEPARATOR_CHAR.length;
