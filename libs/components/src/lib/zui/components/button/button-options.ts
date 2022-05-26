import {InjectionToken, TemplateRef, ValueProvider} from '@angular/core';

// TODO move to shared
export enum ZuiSize {
  L = 'l',
  SL = 'sl',
  M = 'm',
  SM = 'sm',
  S = 's',
}

// TODO move to shared
export enum ZuiAppearance {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  disabled = 'disabled',
}

// TODO think about it shared enum or only for button
export enum ZuiButtonShape {
  fill = 'fill',
  outline = 'outline',
  ghost = 'ghost',
}

export interface ZuiButtonOptions {
    readonly size: ZuiSize;
    readonly appearance: ZuiAppearance;
    readonly shape: ZuiButtonShape;
}

export const ZUI_BUTTON_DEFAULT_OPTIONS: ZuiButtonOptions = {
    size: ZuiSize.L,
    appearance: ZuiAppearance.primary,
    shape: ZuiButtonShape.fill,
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

export type ZuiContent<T> = TemplateRef<T> | string
