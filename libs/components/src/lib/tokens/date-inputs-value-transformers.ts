import { InjectionToken } from '@angular/core';
import { PrizmControlValueTransformer } from '../types/control-value-transformer';
import { PrizmDateTimeRange, PrizmDay, PrizmDayRange, PrizmTime } from '../@core/date-time';

export const PRIZM_DATE_VALUE_TRANSFORMER = new InjectionToken<PrizmControlValueTransformer<PrizmDay | null>>(
  `Control value transformer of PrizmDay to custom value format for InputDate* components`
);

export const PRIZM_DATE_RANGE_VALUE_TRANSFORMER = new InjectionToken<
  PrizmControlValueTransformer<PrizmDayRange | null>
>(`Control value transformer for InputDateRange component`);

export const PRIZM_DATE_TIME_RANGE_VALUE_TRANSFORMER = new InjectionToken<
  PrizmControlValueTransformer<PrizmDateTimeRange | null>
>(`Control value transformer for InputDateTimeRange component`);

export const PRIZM_DATE_TIME_VALUE_TRANSFORMER = new InjectionToken<
  PrizmControlValueTransformer<[PrizmDay | null, PrizmTime | null]>
>(`Control value transformer for InputDateTime component`);

export const PRIZM_TIME_VALUE_TRANSFORMER = new InjectionToken<
  PrizmControlValueTransformer<[PrizmDay | null, PrizmTime | null]>
>(`Control value transformer for InputTime component`);
