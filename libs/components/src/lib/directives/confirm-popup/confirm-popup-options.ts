import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../modules/overlay/models';
import { PrizmDialogButton } from '../../components/dialogs/dialog';
import { PrizmSizeL, PrizmSizeM } from '../../util';
import { PrizmConfirmDialogResultDefaultType } from '../../components/dialogs/confirm-dialog';
import { PrizmHintContext, PrizmHintOptions } from '../hint/hint-options';

export type PrizmConfirmPopupButton = Omit<PrizmDialogButton, 'action'> &
  Partial<Pick<PrizmDialogButton, 'action'>>;

export type PrizmConfirmPopupMode = 'error' | 'dark' | 'light' | null;

export interface PrizmConfirmPopupOptions extends PrizmHintOptions {
  readonly showDelay: number;
  readonly hideDelay: number;
  readonly size: PrizmSizeM | PrizmSizeL;
  confirmButton?: PrizmConfirmPopupButton | string;
  supportButton?: PrizmConfirmPopupButton | string;
  cancelButton?: PrizmConfirmPopupButton | string;
  readonly mode: PrizmConfirmPopupMode;
  readonly autoReposition: boolean;
  readonly direction: PrizmOverlayOutsidePlacement;
}
export interface PrizmConfirmPopupContext extends PrizmHintContext {
  readonly size: PrizmSizeM | PrizmSizeL;
  readonly completeWith: (ctx: PrizmConfirmDialogResultDefaultType | unknown) => void;
  confirmButton?: PrizmConfirmPopupButton | string;
  supportButton?: PrizmConfirmPopupButton | string;
  cancelButton?: PrizmConfirmPopupButton | string;
}

/** Default values for hint options */
export const PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS: PrizmConfirmPopupOptions = {
  showDelay: 100,
  size: 'm',
  hideDelay: 100,
  autoReposition: true,
  mode: null,
  direction: PrizmOverlayOutsidePlacement.RIGHT,
};

export const PRIZM_CONFIRM_POPUP_OPTIONS = new InjectionToken<PrizmConfirmPopupOptions>(
  'Default parameters for tooltip directive',
  {
    factory: (): PrizmConfirmPopupOptions => PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS,
  }
);

export const prizmConfirmPopupOptionsProvider: (
  options: Partial<PrizmConfirmPopupOptions>
) => ValueProvider = (options: Partial<PrizmConfirmPopupOptions>) => ({
  provide: PRIZM_CONFIRM_POPUP_OPTIONS,
  useValue: { ...PRIZM_CONFIRM_POPUP_DEFAULT_OPTIONS, ...options },
});
