import { InjectionToken, ValueProvider } from '@angular/core';
import { PzmOverlayOutsidePlacement } from '../../../modules/overlay';
import { ZuiDropdownHostWidth } from './models';

export interface ZuiDropdownHostOptions {
    readonly width: ZuiDropdownHostWidth;
    readonly closeOnBackdrop: boolean;
    readonly autoReposition: boolean;
    readonly placement: PzmOverlayOutsidePlacement

}

/** Default values for dropdown-host options */
export const ZUI_DROPDOWN_HOST_DEFAULT_OPTIONS: ZuiDropdownHostOptions = {
  closeOnBackdrop: true,
  width: null,
  autoReposition: true,
  placement: PzmOverlayOutsidePlacement.BOTTOM_LEFT
};

export const ZUI_DROPDOWN_HOST_OPTIONS = new InjectionToken<ZuiDropdownHostOptions>(
    'Default parameters for dropdown host',
    {
        factory: (): ZuiDropdownHostOptions => ZUI_DROPDOWN_HOST_DEFAULT_OPTIONS,
    },
);

export const zuiDropdownHostOptionsProvider: (
    options: Partial<ZuiDropdownHostOptions>,
) => ValueProvider = (options: Partial<ZuiDropdownHostOptions>) => ({
    provide: ZUI_DROPDOWN_HOST_OPTIONS,
    useValue: {...ZUI_DROPDOWN_HOST_DEFAULT_OPTIONS, ...options},
});
