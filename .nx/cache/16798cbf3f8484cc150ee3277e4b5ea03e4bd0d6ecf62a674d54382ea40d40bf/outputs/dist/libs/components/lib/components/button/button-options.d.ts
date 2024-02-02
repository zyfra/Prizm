import { InjectionToken, TemplateRef, ValueProvider } from '@angular/core';
import { PrizmSize } from '../../util/size-bigger';
import { PrizmAppearance, PrizmAppearanceType } from '../../types/appearance.types';
export interface PrizmButtonOptions {
    readonly size: PrizmSize;
    readonly appearance: PrizmAppearance;
    readonly appearanceType: PrizmAppearanceType;
}
export declare const PRIZM_BUTTON_DEFAULT_OPTIONS: PrizmButtonOptions;
export declare const PRIZM_BUTTON_OPTIONS: InjectionToken<PrizmButtonOptions>;
export declare const prizmButtonOptionsProvider: (options: Partial<PrizmButtonOptions>) => ValueProvider;
export type PrizmContent<T = unknown> = TemplateRef<T> | string;
