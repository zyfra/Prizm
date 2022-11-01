import { InjectionToken, ValueProvider } from '@angular/core';
import { PzmOverlayOutsidePlacement } from '../../modules/overlay/models';

export type PzmHintMode = 'error' | 'dark' | 'light' | null
export interface PzmHintOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly mode: PzmHintMode;
    readonly autoReposition: boolean;
    readonly direction: PzmOverlayOutsidePlacement;
}

export interface PzmHintContext {
  mode: PzmHintOptions['mode'],
  reposition: boolean,
  direction: PzmHintOptions['direction'],
  id: string,
  showDelay: number,
  hideDelay: number,
  host: HTMLElement,
}

/** Default values for hint options */
export const PZM_HINT_DEFAULT_OPTIONS: PzmHintOptions = {
    showDelay: 500,
    hideDelay: 200,
    autoReposition: true,
    mode: null,
    direction: PzmOverlayOutsidePlacement.RIGHT,
};

export const PZM_HINT_OPTIONS = new InjectionToken<PzmHintOptions>(
    'Default parameters for hint directive',
    {
        factory: (): PzmHintOptions => PZM_HINT_DEFAULT_OPTIONS,
    },
);

export const pzmHintOptionsProvider: (
    options: Partial<PzmHintOptions>,
) => ValueProvider = (options: Partial<PzmHintOptions>) => ({
    provide: PZM_HINT_OPTIONS,
    useValue: {...PZM_HINT_DEFAULT_OPTIONS, ...options},
});
