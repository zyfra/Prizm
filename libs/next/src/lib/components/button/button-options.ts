import { InjectionToken, TemplateRef, ValueProvider } from '@angular/core';
import { PzmSize } from '../../util/size-bigger';
import { PzmAppearance, PzmAppearanceType } from '../../types/appearance.types';


export interface PzmButtonOptions {
    readonly size: PzmSize;
    readonly appearance: PzmAppearance;
    readonly appearanceType: PzmAppearanceType;
}

export const PZM_BUTTON_DEFAULT_OPTIONS: PzmButtonOptions = {
    size: 'l',
    appearance: 'primary',
    appearanceType: 'fill',
};

export const PZM_BUTTON_OPTIONS = new InjectionToken<PzmButtonOptions>(
    'Default parameters for button component',
    {
        factory: (): PzmButtonOptions  => PZM_BUTTON_DEFAULT_OPTIONS,
    },
);

export const pzmButtonOptionsProvider: (
    options: Partial<PzmButtonOptions>,
) => ValueProvider = (options: Partial<PzmButtonOptions>) => ({
    provide: PZM_BUTTON_OPTIONS,
    useValue: {...PZM_BUTTON_DEFAULT_OPTIONS, ...options},
});

export type PzmContent<T = unknown> = TemplateRef<T> | string
