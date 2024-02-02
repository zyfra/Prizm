import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../modules/overlay/models';
import { PrizmTheme } from '@prizm-ui/theme';
export type PrizmHintMode = 'error' | 'dark' | 'light' | null;
export interface PrizmHintOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly autoReposition: boolean;
    readonly direction: PrizmOverlayOutsidePlacement;
    readonly theme: PrizmTheme | null;
}
export interface PrizmHintContext {
    reposition: boolean;
    direction: PrizmHintOptions['direction'];
    id: string;
    showDelay: number;
    hideDelay: number;
    host: HTMLElement;
    context?: Record<string, unknown>;
}
/** Default values for hint options */
export declare const PRIZM_HINT_DEFAULT_OPTIONS: PrizmHintOptions;
export declare const PRIZM_HINT_OPTIONS: InjectionToken<PrizmHintOptions>;
export declare const prizmHintOptionsProvider: (options: Partial<PrizmHintOptions>) => ValueProvider;
