import { InjectionToken } from '@angular/core';
import { PzmControlValueTransformer } from '../types/control-value-transformer';
import { PzmDay, PzmDayRange, PzmTime } from '../@core/date-time';

export const PZM_DATE_VALUE_TRANSFORMER = new InjectionToken<
    PzmControlValueTransformer<PzmDay | null>
>(`Control value transformer of PzmDay to custom value format for InputDate* components`);

export const PZM_DATE_RANGE_VALUE_TRANSFORMER = new InjectionToken<
    PzmControlValueTransformer<PzmDayRange | null>
>(`Control value transformer for InputDateRange component`);

export const PZM_DATE_TIME_VALUE_TRANSFORMER = new InjectionToken<
    PzmControlValueTransformer<[PzmDay | null, PzmTime | null]>
>(`Control value transformer for InputDateTime component`);

export const PZM_TIME_VALUE_TRANSFORMER = new InjectionToken<
    PzmControlValueTransformer<[PzmDay | null, PzmTime | null]>
>(`Control value transformer for InputTime component`);
