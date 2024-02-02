import { InjectionToken, Type, ValueProvider } from '@angular/core';
import { PrizmToastAppearance, PrizmToastOptions, PrizmToastPosition } from './types';
export interface PrizmToastDefaultOptions {
    readonly position: PrizmToastPosition;
    readonly timer: number;
    readonly data: PrizmToastOptions['data'];
    readonly title: PrizmToastOptions['title'];
    readonly appearance: PrizmToastAppearance;
    readonly templateSuccess: Type<unknown>;
    readonly templateDanger: Type<unknown>;
    readonly templateWarning: Type<unknown>;
    readonly templateInfo: Type<unknown>;
    readonly isPlatform: boolean;
}
/** Default values for the toast options. */
export declare const PRIZM_TOAST_DEFAULT_OPTIONS: PrizmToastDefaultOptions;
export declare const PRIZM_TOAST_OPTIONS: InjectionToken<PrizmToastDefaultOptions>;
export declare const prizmToastOptionsProvider: (options: Partial<PrizmToastDefaultOptions>) => ValueProvider;
