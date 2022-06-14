import {InjectionToken, ValueProvider} from '@angular/core';
import {ZuiOverlayOutsidePlacement} from "../../modules/overlay/models";

export type ZuiHintMode = 'error' | 'dark' | 'light' | null
export interface ZuiHintOptions {
    readonly zuiHintShowDelay: number;
    readonly zuiHintHideDelay: number;
    readonly mode: ZuiHintMode;
    readonly autoReposition: boolean;
    readonly direction: ZuiOverlayOutsidePlacement;
}

/** Default values for hint options */
export const ZUI_HINT_DEFAULT_OPTIONS: ZuiHintOptions = {
    zuiHintShowDelay: 500,
    zuiHintHideDelay: 200,
    autoReposition: true,
    mode: null,
    direction: ZuiOverlayOutsidePlacement.RIGHT,
};

export const ZUI_HINT_OPTIONS = new InjectionToken<ZuiHintOptions>(
    'Default parameters for hint directive',
    {
        factory: (): ZuiHintOptions => ZUI_HINT_DEFAULT_OPTIONS,
    },
);

export const zuiHintOptionsProvider: (
    options: Partial<ZuiHintOptions>,
) => ValueProvider = (options: Partial<ZuiHintOptions>) => ({
    provide: ZUI_HINT_OPTIONS,
    useValue: {...ZUI_HINT_DEFAULT_OPTIONS, ...options},
});

export const ZuiSubHoveredToken = new InjectionToken('child hovered');
