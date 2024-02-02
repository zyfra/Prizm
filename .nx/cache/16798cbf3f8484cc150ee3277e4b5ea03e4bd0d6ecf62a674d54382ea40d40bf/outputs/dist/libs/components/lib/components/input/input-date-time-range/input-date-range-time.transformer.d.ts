import { Provider } from '@angular/core';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
type From = PrizmDayRange | null;
type To = [Date | null, Date | null] | null;
export declare class PrizmInputDateTimeRangeNativeTransformer implements PrizmControlValueTransformer<From, To> {
    fromControlValue(controlValue: To): From;
    toControlValue(componentValue: From): To | null;
}
export declare function prizmGetInputDateTimeRangeNativeTransformer(): Provider;
export {};
