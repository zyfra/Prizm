import { Provider } from '@angular/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
type From = PrizmDay | null;
type To = Date | null;
export declare class PrizmInputDateNativeTransformer implements PrizmControlValueTransformer<From, To> {
    fromControlValue(controlValue: To): From;
    toControlValue(componentValue: From): To;
}
export declare function prizmGetInputDateNativeTransformer(): Provider;
export {};
