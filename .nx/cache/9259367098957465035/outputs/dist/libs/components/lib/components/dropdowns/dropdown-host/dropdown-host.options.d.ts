import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmDropdownHostWidth } from './models';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay/models';
export interface PrizmDropdownHostOptions {
    readonly width: PrizmDropdownHostWidth;
    readonly closeOnBackdrop: boolean;
    readonly autoReposition: boolean;
    readonly placement: PrizmOverlayOutsidePlacement;
}
/** Default values for dropdown-host options */
export declare const PRIZM_DROPDOWN_HOST_DEFAULT_OPTIONS: PrizmDropdownHostOptions;
export declare const PRIZM_DROPDOWN_HOST_OPTIONS: InjectionToken<PrizmDropdownHostOptions>;
export declare const prizmDropdownHostOptionsProvider: (options: Partial<PrizmDropdownHostOptions>) => ValueProvider;
