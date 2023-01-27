import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../directives/polymorph';
import { PrizmContextWithImplicit } from '../../types/context-with-implicit';
import { PrizmSizeL, PrizmSizeM } from '../../util';

export interface PrizmToggleOptions {
  readonly icons: Readonly<{
    toggleOff: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>>;
    toggleOn: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>>;
  }>;
  readonly singleColor: boolean;
  readonly showIcons: boolean;
  readonly size: PrizmSizeL | PrizmSizeM;
}

/** Default values for the toggle options. */
export const PRIZM_TOGGLE_DEFAULT_OPTIONS: PrizmToggleOptions = {
  icons: {
    toggleOff: '',
    toggleOn: '',
  },
  singleColor: false,
  showIcons: false,
  size: 'm',
};

export const PRIZM_TOGGLE_OPTIONS = new InjectionToken<PrizmToggleOptions>(
  'Default parameters for toggle component',
  {
    factory: (): typeof PRIZM_TOGGLE_DEFAULT_OPTIONS => PRIZM_TOGGLE_DEFAULT_OPTIONS,
  }
);

export const prizmToggleOptionsProvider: (options: Partial<PrizmToggleOptions>) => ValueProvider = (
  options: Partial<PrizmToggleOptions>
) => ({
  provide: PRIZM_TOGGLE_OPTIONS,
  useValue: { ...PRIZM_TOGGLE_DEFAULT_OPTIONS, ...options },
});
