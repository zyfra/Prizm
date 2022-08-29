import { InjectionToken } from '@angular/core';
import { ZuiControlValueTransformer } from '../types/control-value-transformer';
import { ZuiDay, ZuiDayRange, ZuiTime } from '../@core/date-time';

export const ZUI_DATE_VALUE_TRANSFORMER = new InjectionToken<
    ZuiControlValueTransformer<ZuiDay | null>
>(`Control value transformer of ZuiDay to custom value format for InputDate* components`);

export const ZUI_DATE_RANGE_VALUE_TRANSFORMER = new InjectionToken<
    ZuiControlValueTransformer<ZuiDayRange | null>
>(`Control value transformer for InputDateRange component`);

export const ZUI_DATE_TIME_VALUE_TRANSFORMER = new InjectionToken<
    ZuiControlValueTransformer<[ZuiDay | null, ZuiTime | null]>
>(`Control value transformer for InputDateTime component`);

export const ZUI_TIME_VALUE_TRANSFORMER = new InjectionToken<
    ZuiControlValueTransformer<[ZuiDay | null, ZuiTime | null]>
>(`Control value transformer for InputTime component`);
