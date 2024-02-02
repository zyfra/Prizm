import { InjectionToken } from '@angular/core';
export declare const PRIZM_DATE_FILLER: InjectionToken<string>;
/**
 * @deprecated dont use it
 */
export declare const PRIZM_DATE_RANGE_FILLER: InjectionToken<string>;
/**
 * @internal 'dd.mm.yyyy'.length
 * Used in:
 * - {@link PrizmInputDateComponent}
 * - {@link PrizmInputDateRangeComponent}
 * - {@link PrizmInputDateTimeComponent}
 */
export declare const PRIZM_DATE_FILLER_LENGTH = 10;
/**
 * @internal
 * Used in {@link PrizmInputDateRangeComponent}
 */
export declare const PRIZM_DATE_RANGE_FILLER_LENGTH: number;
