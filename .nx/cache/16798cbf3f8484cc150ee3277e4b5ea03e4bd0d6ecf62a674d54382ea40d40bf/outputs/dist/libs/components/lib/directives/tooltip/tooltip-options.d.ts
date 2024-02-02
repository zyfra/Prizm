import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../modules/overlay/models';
import { PrizmTheme } from '@prizm-ui/theme';
export type PrizmTooltipMode = 'error' | 'dark' | 'light' | null;
export interface PrizmTooltipOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly mode: PrizmTooltipMode;
    readonly autoReposition: boolean;
    readonly direction: PrizmOverlayOutsidePlacement;
    readonly theme: PrizmTheme | null;
}
/** Default values for hint options */
export declare const PRIZM_TOOLTIP_DEFAULT_OPTIONS: PrizmTooltipOptions;
export declare const PRIZM_TOOLTIP_OPTIONS: InjectionToken<PrizmTooltipOptions>;
export declare const prizmTooltipOptionsProvider: (options: Partial<PrizmTooltipOptions>) => ValueProvider;
