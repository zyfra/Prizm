import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PrizmDropdownHostWidth } from './models';

export interface PrizmDropdownHostOptions {
    readonly width: PrizmDropdownHostWidth;
    readonly closeOnBackdrop: boolean;
    readonly autoReposition: boolean;
    readonly placement: PrizmOverlayOutsidePlacement

}

/** Default values for dropdown-host options */
export const PZM_DROPDOWN_HOST_DEFAULT_OPTIONS: PrizmDropdownHostOptions = {
  closeOnBackdrop: true,
  width: null,
  autoReposition: true,
  placement: PrizmOverlayOutsidePlacement.BOTTOM_LEFT
};

export const PZM_DROPDOWN_HOST_OPTIONS = new InjectionToken<PrizmDropdownHostOptions>(
    'Default parameters for dropdown host',
    {
        factory: (): PrizmDropdownHostOptions => PZM_DROPDOWN_HOST_DEFAULT_OPTIONS,
    },
);

export const pzmDropdownHostOptionsProvider: (
    options: Partial<PrizmDropdownHostOptions>,
) => ValueProvider = (options: Partial<PrizmDropdownHostOptions>) => ({
    provide: PZM_DROPDOWN_HOST_OPTIONS,
    useValue: {...PZM_DROPDOWN_HOST_DEFAULT_OPTIONS, ...options},
});
