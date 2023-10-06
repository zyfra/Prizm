import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../modules/overlay/models';
import { PrizmTheme } from '@prizm-ui/theme';

export type PrizmHintMode = 'error' | 'dark' | 'light' | null;
export interface PrizmHintOptions {
  readonly showDelay: number;
  readonly hideDelay: number;
  // readonly mode: PrizmHintMode;
  readonly autoReposition: boolean;
  readonly direction: PrizmOverlayOutsidePlacement;
  readonly theme: PrizmTheme | null;
}

export interface PrizmHintContext {
  // mode: PrizmHintOptions['mode'];
  reposition: boolean;
  direction: PrizmHintOptions['direction'];
  id: string;
  showDelay: number;
  hideDelay: number;
  host: HTMLElement;
  context?: Record<string, unknown>;
}

/** Default values for hint options */
export const PRIZM_HINT_DEFAULT_OPTIONS: PrizmHintOptions = {
  showDelay: 500,
  hideDelay: 200,
  theme: null,
  autoReposition: true,
  // mode: null,
  direction: PrizmOverlayOutsidePlacement.RIGHT,
};

export const PRIZM_HINT_OPTIONS = new InjectionToken<PrizmHintOptions>(
  'Default parameters for hint directive',
  {
    factory: (): PrizmHintOptions => PRIZM_HINT_DEFAULT_OPTIONS,
  }
);

export const prizmHintOptionsProvider: (options: Partial<PrizmHintOptions>) => ValueProvider = (
  options: Partial<PrizmHintOptions>
) => ({
  provide: PRIZM_HINT_OPTIONS,
  useValue: { ...PRIZM_HINT_DEFAULT_OPTIONS, ...options },
});
