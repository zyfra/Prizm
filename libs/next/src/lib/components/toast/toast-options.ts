import { InjectionToken, Type, ValueProvider } from '@angular/core';
import { ZuiToastAppearance, ZuiToastOptions, ZuiToastPosition } from './types';
import { ToastComponent } from './toast/toast.component';

export interface ZuiToastDefaultOptions {
    readonly position: ZuiToastPosition,
    readonly timer: number,
    readonly data: ZuiToastOptions['data'],
    readonly title: ZuiToastOptions['title'],
    readonly appearance: ZuiToastAppearance,
    readonly templateSuccess: Type<unknown>,
    readonly templateDanger: Type<unknown>,
    readonly templateWarning: Type<unknown>,
    readonly templateInfo: Type<unknown>,
    readonly isPlatform: boolean,
}

/** Default values for the toast options. */
export const ZUI_TOAST_DEFAULT_OPTIONS: ZuiToastDefaultOptions = {
    position: ZuiToastPosition.TOP_RIGHT,
    timer: 5000,
    title: '',
    appearance: 'info',
    isPlatform: false,
    data: {},
    /* You can use also different components for each appearance*/
    templateSuccess: ToastComponent,
    templateDanger: ToastComponent,
    templateWarning: ToastComponent,
    templateInfo: ToastComponent,
};

export const ZUI_TOAST_OPTIONS = new InjectionToken<ZuiToastDefaultOptions>(
    'Default parameters for toast component',
    {
        factory: (): typeof ZUI_TOAST_DEFAULT_OPTIONS => ZUI_TOAST_DEFAULT_OPTIONS,
    },
);

export const zuiToastOptionsProvider: (
    options: Partial<ZuiToastDefaultOptions>,
) => ValueProvider = (options: Partial<ZuiToastDefaultOptions>) => ({
    provide: ZUI_TOAST_OPTIONS,
    useValue: {...ZUI_TOAST_DEFAULT_OPTIONS, ...options},
});
