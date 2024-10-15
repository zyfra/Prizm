import {
  PrizmConfirmDialogButton,
  PrizmConfirmDialogResultDefaultType,
} from '../../components/dialogs/confirm-dialog/confirm-dialog.models';
import { PrizmHintDirective } from '../hint/hint.directive';
import { PrizmHintGetContextFn } from '../hint/token';
import { PrizmConfirmPopupButton, PrizmConfirmPopupContext } from './confirm-popup-options';
import { PrizmConfirmPopupDirective } from './confirm-popup.directive';
import { PrizmAppearance, PrizmAppearanceType } from '@prizm-ui/helpers';

export const prizmGetConfirmPopupContext: PrizmHintGetContextFn = function getContext(
  injector
): PrizmConfirmPopupContext {
  const hintDirective = injector.get(PrizmHintDirective);
  const confirmDirective = injector.get(PrizmConfirmPopupDirective);
  const context = {
    size: confirmDirective.size,
    reposition: hintDirective.prizmAutoReposition,
    direction: hintDirective.prizmHintDirection,
    completeWith: (value: PrizmConfirmPopupButton) => {
      confirmDirective.completeWith.next(value);
    },
    id: hintDirective.prizmHintId,
    showDelay: hintDirective.prizmHintShowDelay,
    hideDelay: hintDirective.prizmHintHideDelay,
    title: confirmDirective.prizmConfirmPopupTitle,
    host: hintDirective.host,
    confirmButton: confirmDirective.confirmButton,
    supportButton: confirmDirective.supportButton,
    cancelButton: confirmDirective.cancelButton,
  } as PrizmConfirmPopupContext;
  safeUpdateButtonsWithDefaultStyles(context);
  return context;
};

function generateButton(
  options: PrizmConfirmPopupContext,
  button: PrizmConfirmDialogButton | string,
  defaultText: string,
  defaultComplete: PrizmConfirmDialogResultDefaultType,
  defaultAppearance?: PrizmAppearance,
  defaultAppearanceType?: PrizmAppearanceType
): PrizmConfirmDialogButton {
  const buttonText = (typeof button === 'string' ? button : button?.text) ?? defaultText;
  const btn = ((typeof button === 'string' ? {} : button) ?? {}) as Partial<PrizmConfirmDialogButton>;

  const result = {
    ...btn,
    text: buttonText,
    size: btn.size ?? options.size,
    // TODO remove any type
    action: (ctx: any): void => {
      if (typeof btn.action === 'function') btn.action(ctx as any);
      options.completeWith(defaultComplete);
    },
    appearance: btn.appearance ?? defaultAppearance,
    appearanceType: btn.appearanceType ?? defaultAppearanceType,
  };

  return result;
}

function safeUpdateButtonsWithDefaultStyles(options: PrizmConfirmPopupContext): void {
  const supportButton = generateButton(
    options,
    options.supportButton as string,
    'Выйти без сохранения',
    PrizmConfirmDialogResultDefaultType.support,
    'danger',
    'outline'
  );

  const confirmButton = generateButton(
    options,
    options.confirmButton as string,
    'Подтвердить',
    PrizmConfirmDialogResultDefaultType.confirm,
    'primary'
  );

  const cancelButton = generateButton(
    options,
    options.cancelButton as string,
    'Отмена',
    PrizmConfirmDialogResultDefaultType.cancel,
    'secondary',
    'ghost'
  );

  options.confirmButton = confirmButton;
  options.cancelButton = cancelButton;
  options.supportButton = supportButton;
}
