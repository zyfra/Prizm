import { InjectionToken, Type, ValueProvider } from '@angular/core';
import { PzmToastAppearance, PzmToastOptions, PzmToastPosition } from './types';
import { ToastComponent } from './toast/toast.component';

export interface PzmToastDefaultOptions {
    readonly position: PzmToastPosition,
    readonly timer: number,
    readonly data: PzmToastOptions['data'],
    readonly title: PzmToastOptions['title'],
    readonly appearance: PzmToastAppearance,
    readonly templateSuccess: Type<unknown>,
    readonly templateDanger: Type<unknown>,
    readonly templateWarning: Type<unknown>,
    readonly templateInfo: Type<unknown>,
    readonly isPlatform: boolean,
}

/** Default values for the toast options. */
export const PZM_TOAST_DEFAULT_OPTIONS: PzmToastDefaultOptions = {
    position: PzmToastPosition.TOP_RIGHT,
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

export const PZM_TOAST_OPTIONS = new InjectionToken<PzmToastDefaultOptions>(
    'Default parameters for toast component',
    {
        factory: (): typeof PZM_TOAST_DEFAULT_OPTIONS => PZM_TOAST_DEFAULT_OPTIONS,
    },
);

export const zuiToastOptionsProvider: (
    options: Partial<PzmToastDefaultOptions>,
) => ValueProvider = (options: Partial<PzmToastDefaultOptions>) => ({
    provide: PZM_TOAST_OPTIONS,
    useValue: {...PZM_TOAST_DEFAULT_OPTIONS, ...options},
});
