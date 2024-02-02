import { Provider } from '@angular/core';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
type From = PrizmDayRange | null;
type To = [Date, Date] | null;
export declare class PrizmInputDateRangeNativeTransformer implements PrizmControlValueTransformer<From, To> {
    fromControlValue(controlValue: To): From;
    toControlValue(componentValue: From): To;
}
export declare function prizmGetInputDateRangeNativeTransformer(): Provider;
export {};
