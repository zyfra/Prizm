import { InjectionToken, ValueProvider } from '@angular/core';
import { ZUI_MAX_TIME_VALUES } from '../../../constants/max-time-values';
import { PolymorphContent } from '../../../directives/polymorph/types/content';
import { ZuiContextWithImplicit } from '../../../types/context-with-implicit';
import { ZuiTimeFormatParts } from '../../../types/time-format-parts';
import { ZuiTimeMode } from '../../../types/time-mode';
import { ZuiSizeL, ZuiSizeM, ZuiSizeS } from '../../../util/size-bigger';

export interface ZuiInputTimeOptions {
    readonly icon: PolymorphContent<ZuiContextWithImplicit<ZuiSizeS | ZuiSizeL>>;
    readonly mode: ZuiTimeMode;
    readonly postfix: string;
    readonly maxValues: Record<ZuiTimeFormatParts, number>;
    readonly itemSize: ZuiSizeS | ZuiSizeL | ZuiSizeM;
}

// TODO: 3.0 remove in ivy compilation
export const INPUT_TIME_ICON = ({
    $implicit,
}: ZuiContextWithImplicit<ZuiSizeS | ZuiSizeL>): string =>
    $implicit === `s` ? `zuiIconTime` : `zuiIconTimeLarge`;

export const ZUI_INPUT_TIME_DEFAULT_OPTIONS: ZuiInputTimeOptions = {
    icon: INPUT_TIME_ICON,
    mode: `HH:MM`,
    postfix: ``,
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
