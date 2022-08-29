import { InjectionToken, ValueProvider } from '@angular/core';
import { ZUI_MAX_TIME_VALUES } from '../../../constants/max-time-values';
import { ZuiTimeFormatParts } from '../../../types/time-format-parts';
import { ZuiTimeMode } from '../../../types/time-mode';
import { ZuiSizeL, ZuiSizeM, ZuiSizeS } from '../../../util/size-bigger';

export interface ZuiInputTimeOptions {
    readonly mode: ZuiTimeMode;
    readonly maxValues: Record<ZuiTimeFormatParts, number>;
    readonly itemSize: ZuiSizeS | ZuiSizeL | ZuiSizeM;
}

export const ZUI_INPUT_TIME_DEFAULT_OPTIONS: ZuiInputTimeOptions = {
    mode: `HH:MM`,
    maxValues: ZUI_MAX_TIME_VALUES,
    itemSize: `m`,
};

export const ZUI_INPUT_TIME_OPTIONS = new InjectionToken<ZuiInputTimeOptions>(
    `Default parameters for input time component`,
    {
        factory: (): ZuiInputTimeOptions => ZUI_INPUT_TIME_DEFAULT_OPTIONS,
    },
);

export const zuiInputTimeOptionsProvider: (
    options: Partial<ZuiInputTimeOptions>,
) => ValueProvider = (options: Partial<ZuiInputTimeOptions>) => ({
    provide: ZUI_INPUT_TIME_OPTIONS,
    useValue: {...ZUI_INPUT_TIME_DEFAULT_OPTIONS, ...options},
});
