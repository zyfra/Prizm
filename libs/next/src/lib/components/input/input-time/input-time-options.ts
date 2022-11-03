import { InjectionToken, ValueProvider } from '@angular/core';
import { PZM_MAX_TIME_VALUES } from '../../../constants/max-time-values';
import { PrizmTimeFormatParts } from '../../../types/time-format-parts';
import { PrizmTimeMode } from '../../../types/time-mode';
import { PrizmSizeL, PrizmSizeM, PrizmSizeS } from '../../../util/size-bigger';

export interface PrizmInputTimeOptions {
    readonly mode: PrizmTimeMode;
    readonly maxValues: Record<PrizmTimeFormatParts, number>;
    readonly itemSize: PrizmSizeS | PrizmSizeL | PrizmSizeM;
}

export const PZM_INPUT_TIME_DEFAULT_OPTIONS: PrizmInputTimeOptions = {
    mode: `HH:MM`,
    maxValues: PZM_MAX_TIME_VALUES,
    itemSize: `m`,
};

export const PZM_INPUT_TIME_OPTIONS = new InjectionToken<PrizmInputTimeOptions>(
    `Default parameters for input time component`,
    {
        factory: (): PrizmInputTimeOptions => PZM_INPUT_TIME_DEFAULT_OPTIONS,
    },
);

export const pzmInputTimeOptionsProvider: (
    options: Partial<PrizmInputTimeOptions>,
) => ValueProvider = (options: Partial<PrizmInputTimeOptions>) => ({
    provide: PZM_INPUT_TIME_OPTIONS,
    useValue: {...PZM_INPUT_TIME_DEFAULT_OPTIONS, ...options},
});
