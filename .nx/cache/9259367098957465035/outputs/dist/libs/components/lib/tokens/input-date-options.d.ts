import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmDay } from '../@core/date-time/day';
import { PolymorphContent } from '../directives/polymorph/types/content';
export interface PrizmInputDateOptions {
    readonly icon: PolymorphContent<any>;
    readonly min: PrizmDay;
    readonly max: PrizmDay;
    readonly readonly: boolean;
}
export declare const PRIZM_INPUT_DATE_DEFAULT_OPTIONS: PrizmInputDateOptions;
export declare const PRIZM_INPUT_DATE_OPTIONS: InjectionToken<PrizmInputDateOptions>;
export declare const prizmInputDateOptionsProvider: (options: Partial<PrizmInputDateOptions>) => ValueProvider;
