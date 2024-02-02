import { Provider } from '@angular/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmTime } from '../../../@core/date-time/time';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { PrizmDateTime } from '../../../@core/date-time';
type From = [PrizmDay | null, PrizmTime | null] | null;
type To = PrizmDateTime | null;
export declare class PrizmInputDateTimeBaseTransformer implements PrizmControlValueTransformer<From, To> {
    fromControlValue(controlValue: To): From;
    toControlValue(componentValue: From): To;
}
export declare function prizmGetInputDateTimeBaseTransformer(): Provider;
export {};
