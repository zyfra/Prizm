import { InjectionToken } from '@angular/core';
import { ZuiControlValueTransformer } from '../types/control-value-transformer';
import { PzmDay, PzmDayRange, ZuiTime } from '../@core/date-time';

export const ZUI_DATE_VALUE_TRANSFORMER = new InjectionToken<
    ZuiControlValueTransformer<PzmDay | null>
>(`Control value transformer of ZuiDay to custom value format for InputDate* components`);

export const ZUI_DATE_RANGE_VALUE_TRANSFORMER = new InjectionToken<
    ZuiControlValueTransformer<PzmDayRange | null>
>(`Control value transformer for InputDateRange component`);

export const ZUI_DATE_TIME_VALUE_TRANSFORMER = new InjectionToken<
    ZuiControlValueTransformer<[PzmDay | null, ZuiTime | null]>
>(`Control value transformer for InputDateTime component`);

export const ZUI_TIME_VALUE_TRANSFORMER = new InjectionToken<
    ZuiControlValueTransformer<[PzmDay | null, ZuiTime | null]>
>(`Control value transformer for InputTime component`);
