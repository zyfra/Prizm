import {InjectionToken, ValueProvider} from '@angular/core';
import {PzmOverlayOutsidePlacement} from "../../modules/overlay/models";

export type PzmTooltipMode = 'error' | 'dark' | 'light' | null
export interface PzmTooltipOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly mode: PzmTooltipMode;
    readonly autoReposition: boolean;
    readonly direction: PzmOverlayOutsidePlacement;
}

/** Default values for hint options */
export const PZM_TOOLTIP_DEFAULT_OPTIONS: PzmTooltipOptions = {
    showDelay: 100,
    hideDelay: 100,
    autoReposition: true,
    mode: null,
    direction: PzmOverlayOutsidePlacement.RIGHT,
};

export const PZM_TOOLTIP_OPTIONS = new InjectionToken<PzmTooltipOptions>(
    'Default parameters for tooltip directive',
    {
        factory: (): PzmTooltipOptions => PZM_TOOLTIP_DEFAULT_OPTIONS,
    },
);

export const pzmTooltipOptionsProvider: (
    options: Partial<PzmTooltipOptions>,
) => ValueProvider = (options: Partial<PzmTooltipOptions>) => ({
    provide: PZM_TOOLTIP_OPTIONS,
    useValue: {...PZM_TOOLTIP_DEFAULT_OPTIONS, ...options},
});
