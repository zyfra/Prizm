import {InjectionToken, TemplateRef, ValueProvider} from '@angular/core';
import {ZuiSize} from "../../util/size-bigger";
import {ZuiAppearance, ZuiAppearanceType} from "../../types/appearance.types";


export interface ZuiButtonOptions {
    readonly size: ZuiSize;
    readonly appearance: ZuiAppearance;
    readonly appearanceType: ZuiAppearanceType;
}

export const ZUI_BUTTON_DEFAULT_OPTIONS: ZuiButtonOptions = {
    size: 'l',
    appearance: 'primary',
    appearanceType: 'fill',
};

export const ZUI_BUTTON_OPTIONS = new InjectionToken<ZuiButtonOptions>(
    'Default parameters for button component',
    {
        factory: (): ZuiButtonOptions  => ZUI_BUTTON_DEFAULT_OPTIONS,
    },
);

export const zuiButtonOptionsProvider: (
    options: Partial<ZuiButtonOptions>,
) => ValueProvider = (options: Partial<ZuiButtonOptions>) => ({
    provide: ZUI_BUTTON_OPTIONS,
    useValue: {...ZUI_BUTTON_DEFAULT_OPTIONS, ...options},
});

export type ZuiContent<T = unknown> = TemplateRef<T> | string
