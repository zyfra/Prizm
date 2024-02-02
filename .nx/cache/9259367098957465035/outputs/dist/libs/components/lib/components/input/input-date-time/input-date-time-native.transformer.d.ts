import { Provider } from '@angular/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmTime } from '../../../@core/date-time/time';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
type From = [PrizmDay | null, PrizmTime | null] | null;
type To = Date | null;
export declare class PrizmInputDateTimeNativeTransformer implements PrizmControlValueTransformer<From, To> {
    fromControlValue(controlValue: To): From;
    toControlValue(componentValue: From): To;
}
export declare function prizmGetInputDateTimeNativeTransformer(): Provider;
export {};
