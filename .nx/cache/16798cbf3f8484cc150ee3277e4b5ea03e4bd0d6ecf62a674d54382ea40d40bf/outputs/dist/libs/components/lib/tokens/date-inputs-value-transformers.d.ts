import { InjectionToken } from '@angular/core';
import { PrizmControlValueTransformer } from '../types/control-value-transformer';
import { PrizmDateTimeRange, PrizmDay, PrizmDayRange, PrizmTime } from '../@core/date-time';
export declare const PRIZM_DATE_VALUE_TRANSFORMER: InjectionToken<PrizmControlValueTransformer<PrizmDay | null, unknown>>;
export declare const PRIZM_DATE_RANGE_VALUE_TRANSFORMER: InjectionToken<PrizmControlValueTransformer<PrizmDayRange | null, unknown>>;
export declare const PRIZM_DATE_TIME_RANGE_VALUE_TRANSFORMER: InjectionToken<PrizmControlValueTransformer<PrizmDateTimeRange | null, unknown>>;
export declare const PRIZM_DATE_TIME_VALUE_TRANSFORMER: InjectionToken<PrizmControlValueTransformer<[PrizmDay | null, PrizmTime | null], unknown>>;
export declare const PRIZM_TIME_VALUE_TRANSFORMER: InjectionToken<PrizmControlValueTransformer<[PrizmDay | null, PrizmTime | null], unknown>>;
