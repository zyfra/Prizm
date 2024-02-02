import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmTimeFormatParts } from '../../../types/time-format-parts';
import { PrizmTimeMode } from '../../../types/time-mode';
import { PrizmSizeL, PrizmSizeM, PrizmSizeS } from '../../../util/size-bigger';
export interface PrizmInputTimeOptions {
    readonly mode: PrizmTimeMode;
    readonly maxValues: Record<PrizmTimeFormatParts, number>;
    readonly itemSize: PrizmSizeS | PrizmSizeL | PrizmSizeM;
}
export declare const PRIZM_INPUT_TIME_DEFAULT_OPTIONS: PrizmInputTimeOptions;
export declare const PRIZM_INPUT_TIME_OPTIONS: InjectionToken<PrizmInputTimeOptions>;
export declare const prizmInputTimeOptionsProvider: (options: Partial<PrizmInputTimeOptions>) => ValueProvider;
