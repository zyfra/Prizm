import { InjectionToken, Type, ValueProvider } from '@angular/core';
import { PrizmToastAppearance, PrizmToastOptions, PrizmToastPosition } from './types';
import { ToastComponent } from './toast/toast.component';

export interface PrizmToastDefaultOptions {
    readonly position: PrizmToastPosition,
    readonly timer: number,
    readonly data: PrizmToastOptions['data'],
    readonly title: PrizmToastOptions['title'],
    readonly appearance: PrizmToastAppearance,
    readonly templateSuccess: Type<unknown>,
    readonly templateDanger: Type<unknown>,
    readonly templateWarning: Type<unknown>,
    readonly templateInfo: Type<unknown>,
    readonly isPlatform: boolean,
}

/** Default values for the toast options. */
export const PZM_TOAST_DEFAULT_OPTIONS: PrizmToastDefaultOptions = {
    position: PrizmToastPosition.TOP_RIGHT,
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

export const PZM_TOAST_OPTIONS = new InjectionToken<PrizmToastDefaultOptions>(
    'Default parameters for toast component',
    {
        factory: (): typeof PZM_TOAST_DEFAULT_OPTIONS => PZM_TOAST_DEFAULT_OPTIONS,
    },
);

export const pzmToastOptionsProvider: (
    options: Partial<PrizmToastDefaultOptions>,
) => ValueProvider = (options: Partial<PrizmToastDefaultOptions>) => ({
    provide: PZM_TOAST_OPTIONS,
    useValue: {...PZM_TOAST_DEFAULT_OPTIONS, ...options},
});
