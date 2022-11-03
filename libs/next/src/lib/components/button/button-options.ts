import { InjectionToken, TemplateRef, ValueProvider } from '@angular/core';
import { PrizmSize } from '../../util/size-bigger';
import { PrizmAppearance, PrizmAppearanceType } from '../../types/appearance.types';


export interface PrizmButtonOptions {
    readonly size: PrizmSize;
    readonly appearance: PrizmAppearance;
    readonly appearanceType: PrizmAppearanceType;
}

export const PZM_BUTTON_DEFAULT_OPTIONS: PrizmButtonOptions = {
    size: 'l',
    appearance: 'primary',
    appearanceType: 'fill',
};

export const PZM_BUTTON_OPTIONS = new InjectionToken<PrizmButtonOptions>(
    'Default parameters for button component',
    {
        factory: (): PrizmButtonOptions  => PZM_BUTTON_DEFAULT_OPTIONS,
    },
);

export const pzmButtonOptionsProvider: (
    options: Partial<PrizmButtonOptions>,
) => ValueProvider = (options: Partial<PrizmButtonOptions>) => ({
    provide: PZM_BUTTON_OPTIONS,
    useValue: {...PZM_BUTTON_DEFAULT_OPTIONS, ...options},
});

export type PrizmContent<T = unknown> = TemplateRef<T> | string
