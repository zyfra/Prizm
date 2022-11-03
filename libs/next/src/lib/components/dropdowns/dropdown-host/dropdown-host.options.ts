import { InjectionToken, ValueProvider } from '@angular/core';
import { PzmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PzmDropdownHostWidth } from './models';

export interface PzmDropdownHostOptions {
    readonly width: PzmDropdownHostWidth;
    readonly closeOnBackdrop: boolean;
    readonly autoReposition: boolean;
    readonly placement: PzmOverlayOutsidePlacement

}

/** Default values for dropdown-host options */
export const PZM_DROPDOWN_HOST_DEFAULT_OPTIONS: PzmDropdownHostOptions = {
  closeOnBackdrop: true,
  width: null,
  autoReposition: true,
  placement: PzmOverlayOutsidePlacement.BOTTOM_LEFT
};

export const PZM_DROPDOWN_HOST_OPTIONS = new InjectionToken<PzmDropdownHostOptions>(
    'Default parameters for dropdown host',
    {
        factory: (): PzmDropdownHostOptions => PZM_DROPDOWN_HOST_DEFAULT_OPTIONS,
    },
);

export const pzmDropdownHostOptionsProvider: (
    options: Partial<PzmDropdownHostOptions>,
) => ValueProvider = (options: Partial<PzmDropdownHostOptions>) => ({
    provide: PZM_DROPDOWN_HOST_OPTIONS,
    useValue: {...PZM_DROPDOWN_HOST_DEFAULT_OPTIONS, ...options},
});
