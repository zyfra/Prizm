import { InjectionToken, ValueProvider } from '@angular/core';
import { PzmOverlayOutsidePlacement } from '../../modules/overlay/models';
import { PzmDialogButton } from '../../components/dialogs/dialog';
import { PzmSizeL, PzmSizeM } from '../../util';
import { PzmConfirmDialogResultDefaultType } from '../../components/dialogs/confirm-dialog';
import { PzmHintContext, PzmHintOptions } from '../hint/hint-options';


export type PzmConfirmPopupButton = Omit<PzmDialogButton, 'action'> & Partial<Pick<PzmDialogButton, 'action'>>

export type PzmConfirmPopupMode = 'error' | 'dark' | 'light' | null

export interface PzmConfirmPopupOptions extends PzmHintOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly size: PzmSizeM | PzmSizeL;
    confirmButton?: PzmConfirmPopupButton | string,
    supportButton?: PzmConfirmPopupButton | string,
    cancelButton?: PzmConfirmPopupButton | string,
    readonly mode: PzmConfirmPopupMode;
    readonly autoReposition: boolean;
    readonly direction: PzmOverlayOutsidePlacement;
}
export interface PzmConfirmPopupContext extends PzmHintContext {
    readonly size: PzmSizeM | PzmSizeL;
    readonly completeWith: (ctx: PzmConfirmDialogResultDefaultType | unknown) => void;
    confirmButton?: PzmConfirmPopupButton | string,
    supportButton?: PzmConfirmPopupButton | string,
    cancelButton?: PzmConfirmPopupButton | string,
}


/** Default values for hint options */
export const PZM_CONFIRM_POPUP_DEFAULT_OPTIONS: PzmConfirmPopupOptions = {
    showDelay: 100,
    size: 'm',
    hideDelay: 100,
    autoReposition: true,
    mode: null,
    direction: PzmOverlayOutsidePlacement.RIGHT,
};

export const PZM_CONFIRM_POPUP_OPTIONS = new InjectionToken<PzmConfirmPopupOptions>(
    'Default parameters for tooltip directive',
    {
        factory: (): PzmConfirmPopupOptions => PZM_CONFIRM_POPUP_DEFAULT_OPTIONS,
    },
);

export const pzmConfirmPopupOptionsProvider: (
    options: Partial<PzmConfirmPopupOptions>,
) => ValueProvider = (options: Partial<PzmConfirmPopupOptions>) => ({
    provide: PZM_CONFIRM_POPUP_OPTIONS,
    useValue: {...PZM_CONFIRM_POPUP_DEFAULT_OPTIONS, ...options},
});
