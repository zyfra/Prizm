import {InjectionToken, ValueProvider} from '@angular/core';
import {ZuiOverlayOutsidePlacement} from "../../modules/overlay/models";

export type ZuiTooltipMode = 'error' | 'dark' | 'light' | null
export interface ZuiTooltipOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly mode: ZuiTooltipMode;
    readonly autoReposition: boolean;
    readonly direction: ZuiOverlayOutsidePlacement;
}

/** Default values for hint options */
export const ZUI_TOOLTIP_DEFAULT_OPTIONS: ZuiTooltipOptions = {
    showDelay: 100,
    hideDelay: 100,
    autoReposition: true,
    mode: null,
    direction: ZuiOverlayOutsidePlacement.RIGHT,
};

export const ZUI_TOOLTIP_OPTIONS = new InjectionToken<ZuiTooltipOptions>(
    'Default parameters for tooltip directive',
    {
        factory: (): ZuiTooltipOptions => ZUI_TOOLTIP_DEFAULT_OPTIONS,
    },
);

export const zuiTooltipOptionsProvider: (
    options: Partial<ZuiTooltipOptions>,
) => ValueProvider = (options: Partial<ZuiTooltipOptions>) => ({
    provide: ZUI_TOOLTIP_OPTIONS,
    useValue: {...ZUI_TOOLTIP_DEFAULT_OPTIONS, ...options},
});
