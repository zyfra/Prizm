import {InjectionToken, ValueProvider} from '@angular/core';
import {PrizmOverlayOutsidePlacement} from "../../modules/overlay/models";

export type PrizmTooltipMode = 'error' | 'dark' | 'light' | null
export interface PrizmTooltipOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly mode: PrizmTooltipMode;
    readonly autoReposition: boolean;
    readonly direction: PrizmOverlayOutsidePlacement;
}

/** Default values for hint options */
export const PZM_TOOLTIP_DEFAULT_OPTIONS: PrizmTooltipOptions = {
    showDelay: 100,
    hideDelay: 100,
    autoReposition: true,
    mode: null,
    direction: PrizmOverlayOutsidePlacement.RIGHT,
};

export const PZM_TOOLTIP_OPTIONS = new InjectionToken<PrizmTooltipOptions>(
    'Default parameters for tooltip directive',
    {
        factory: (): PrizmTooltipOptions => PZM_TOOLTIP_DEFAULT_OPTIONS,
    },
);

export const pzmTooltipOptionsProvider: (
    options: Partial<PrizmTooltipOptions>,
) => ValueProvider = (options: Partial<PrizmTooltipOptions>) => ({
    provide: PZM_TOOLTIP_OPTIONS,
    useValue: {...PZM_TOOLTIP_DEFAULT_OPTIONS, ...options},
});
