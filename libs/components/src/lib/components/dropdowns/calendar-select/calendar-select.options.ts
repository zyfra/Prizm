import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PrizmDropdownHostWidth } from './models';

export interface PrizmDropdownHostOptions {
  readonly width: PrizmDropdownHostWidth;
  readonly closeOnBackdrop: boolean;
  readonly autoReposition: boolean;
  readonly placement: PrizmOverlayOutsidePlacement;
}

/** Default values for dropdown-host options */
export const PRIZM_DROPDOWN_HOST_DEFAULT_OPTIONS: PrizmDropdownHostOptions = {
  closeOnBackdrop: true,
  width: null,
  autoReposition: true,
  placement: PrizmOverlayOutsidePlacement.BOTTOM_LEFT,
};

export const PRIZM_DROPDOWN_HOST_OPTIONS = new InjectionToken<PrizmDropdownHostOptions>(
  'Default parameters for dropdown host',
  {
    factory: (): PrizmDropdownHostOptions => PRIZM_DROPDOWN_HOST_DEFAULT_OPTIONS,
  }
);

export const prizmDropdownHostOptionsProvider: (
  options: Partial<PrizmDropdownHostOptions>
) => ValueProvider = (options: Partial<PrizmDropdownHostOptions>) => ({
  provide: PRIZM_DROPDOWN_HOST_OPTIONS,
  useValue: { ...PRIZM_DROPDOWN_HOST_DEFAULT_OPTIONS, ...options },
});
