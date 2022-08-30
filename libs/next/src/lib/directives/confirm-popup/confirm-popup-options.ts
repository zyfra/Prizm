import { InjectionToken, ValueProvider } from '@angular/core';
import { ZuiOverlayOutsidePlacement } from '../../modules/overlay/models';
import { ZuiDialogButton } from '../../components/dialogs/dialog';
import { ZuiSizeL, ZuiSizeM } from '../../util';
import { ZuiConfirmDialogResultDefaultType } from '../../components/dialogs/confirm-dialog';
import { ZuiHintContext, ZuiHintOptions } from '../hint/hint-options';


export type ZuiConfirmPopupButton = Omit<ZuiDialogButton, 'action'> & Partial<Pick<ZuiDialogButton, 'action'>>

export type ZuiConfirmPopupMode = 'error' | 'dark' | 'light' | null

export interface ZuiConfirmPopupOptions extends ZuiHintOptions {
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly size: ZuiSizeM | ZuiSizeL;
    confirmButton?: ZuiConfirmPopupButton | string,
    supportButton?: ZuiConfirmPopupButton | string,
    cancelButton?: ZuiConfirmPopupButton | string,
    readonly mode: ZuiConfirmPopupMode;
    readonly autoReposition: boolean;
    readonly direction: ZuiOverlayOutsidePlacement;
}
export interface ZuiConfirmPopupContext extends ZuiHintContext {
    readonly size: ZuiSizeM | ZuiSizeL;
    readonly completeWith: (ctx: ZuiConfirmDialogResultDefaultType | unknown) => void;
    confirmButton?: ZuiConfirmPopupButton | string,
    supportButton?: ZuiConfirmPopupButton | string,
    cancelButton?: ZuiConfirmPopupButton | string,
}


/** Default values for hint options */
export const ZUI_CONFIRM_POPUP_DEFAULT_OPTIONS: ZuiConfirmPopupOptions = {
    showDelay: 100,
    size: 'm',
    hideDelay: 100,
    autoReposition: true,
    mode: null,
    direction: ZuiOverlayOutsidePlacement.RIGHT,
};

export const ZUI_CONFIRM_POPUP_OPTIONS = new InjectionToken<ZuiConfirmPopupOptions>(
    'Default parameters for tooltip directive',
    {
        factory: (): ZuiConfirmPopupOptions => ZUI_CONFIRM_POPUP_DEFAULT_OPTIONS,
    },
);

export const zuiConfirmPopupOptionsProvider: (
    options: Partial<ZuiConfirmPopupOptions>,
) => ValueProvider = (options: Partial<ZuiConfirmPopupOptions>) => ({
    provide: ZUI_CONFIRM_POPUP_OPTIONS,
    useValue: {...ZUI_CONFIRM_POPUP_DEFAULT_OPTIONS, ...options},
});
