import { InjectionToken, ValueProvider } from '@angular/core';
import { PZM_MAX_TIME_VALUES } from '../../../constants/max-time-values';
import { PzmTimeFormatParts } from '../../../types/time-format-parts';
import { PzmTimeMode } from '../../../types/time-mode';
import { PzmSizeL, PzmSizeM, PzmSizeS } from '../../../util/size-bigger';

export interface PzmInputTimeOptions {
    readonly mode: PzmTimeMode;
    readonly maxValues: Record<PzmTimeFormatParts, number>;
    readonly itemSize: PzmSizeS | PzmSizeL | PzmSizeM;
}

export const PZM_INPUT_TIME_DEFAULT_OPTIONS: PzmInputTimeOptions = {
    mode: `HH:MM`,
    maxValues: PZM_MAX_TIME_VALUES,
    itemSize: `m`,
};

export const PZM_INPUT_TIME_OPTIONS = new InjectionToken<PzmInputTimeOptions>(
    `Default parameters for input time component`,
    {
        factory: (): PzmInputTimeOptions => PZM_INPUT_TIME_DEFAULT_OPTIONS,
    },
);

export const pzmInputTimeOptionsProvider: (
    options: Partial<PzmInputTimeOptions>,
) => ValueProvider = (options: Partial<PzmInputTimeOptions>) => ({
    provide: PZM_INPUT_TIME_OPTIONS,
    useValue: {...PZM_INPUT_TIME_DEFAULT_OPTIONS, ...options},
});
