import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../modules/overlay/models';

export type PrizmHintMode = 'error' | 'dark' | 'light' | null
export interface PrizmHintOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly mode: PrizmHintMode;
    readonly autoReposition: boolean;
    readonly direction: PrizmOverlayOutsidePlacement;
}

export interface PrizmHintContext {
  mode: PrizmHintOptions['mode'],
  reposition: boolean,
  direction: PrizmHintOptions['direction'],
  id: string,
  showDelay: number,
  hideDelay: number,
  host: HTMLElement,
}

/** Default values for hint options */
export const PZM_HINT_DEFAULT_OPTIONS: PrizmHintOptions = {
    showDelay: 500,
    hideDelay: 200,
    autoReposition: true,
    mode: null,
    direction: PrizmOverlayOutsidePlacement.RIGHT,
};

export const PZM_HINT_OPTIONS = new InjectionToken<PrizmHintOptions>(
    'Default parameters for hint directive',
    {
        factory: (): PrizmHintOptions => PZM_HINT_DEFAULT_OPTIONS,
    },
);

export const pzmHintOptionsProvider: (
    options: Partial<PrizmHintOptions>,
) => ValueProvider = (options: Partial<PrizmHintOptions>) => ({
    provide: PZM_HINT_OPTIONS,
    useValue: {...PZM_HINT_DEFAULT_OPTIONS, ...options},
});
