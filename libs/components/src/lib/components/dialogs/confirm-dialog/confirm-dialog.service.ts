import { AbstractPrizmDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import { PrizmOverlayControl, PrizmOverlayInsidePlacement } from '../../../modules/overlay';
import { Observable, Observer } from 'rxjs';
import { PrizmDialogConfirmComponent } from './confirm-dialog.component';
import {
  PrizmConfirmDialogButton,
  PrizmConfirmDialogOptions,
  PrizmConfirmDialogResult,
  PrizmConfirmDialogResultDefaultType,
} from './confirm-dialog.models';
import { PrizmBaseDialogContext } from '../dialog/dialog.models';
import { PrizmAppearance, PrizmAppearanceType } from '../../../types';

const DEFAULT_OPTIONS = {
  position: PrizmOverlayInsidePlacement.CENTER,
  dismissible: true,
  showByVertical: true,
  confirmButton: null,
  supportButton: null,
  cancelButton: null
} as PrizmConfirmDialogOptions<PrizmConfirmDialogResult>;

@Injectable({
  providedIn: 'root',
})
export class PrizmConfirmDialogService<
    T extends PrizmConfirmDialogOptions<PrizmConfirmDialogResult> = PrizmConfirmDialogOptions<PrizmConfirmDialogResult>
  >
  extends AbstractPrizmDialogService<T, PrizmConfirmDialogResult> {
  protected readonly component = PrizmDialogConfirmComponent;
  protected readonly defaultOptions = DEFAULT_OPTIONS as T;

  public override open(
    title: T['title'],
    options: Omit<Partial<T>, 'title'>,
    cb?: (data: {
      control: PrizmOverlayControl,
      dialog: PrizmBaseDialogContext<PrizmConfirmDialogResult, PrizmConfirmDialogOptions>,
      observer: Observer<PrizmConfirmDialogResult>,
      destroy$: Observable<void>,
    }) => void
  ): Observable<PrizmConfirmDialogResult> {
    options = {
      ...options,
      title,
      dismissible: options.dismissible ?? false,
      backdrop: options.backdrop ?? true,
    };
    this.safeUpdateButtonsWithDefaultStyles(options as Partial<T>);
    return super.open<PrizmConfirmDialogResult, unknown>(
      title,
      options as Partial<T>,
      cb,
    );
  }

  private safeUpdateButtonsWithDefaultStyles(
    options: Partial<T>
  ): void {
    const supportButton = options.supportButton && this.generateButton(
      options,
      options.supportButton,
      'Продолжить',
      PrizmConfirmDialogResultDefaultType.confirmed,
      'danger',
      'ghost'
    );

    const confirmButton = this.generateButton(
      options,
      options.confirmButton,
      'Подтвердить',
      PrizmConfirmDialogResultDefaultType.confirmed,
      'primary'
    );

    const cancelButton = this.generateButton(
      options,
      options.cancelButton,
      'Отмена',
      PrizmConfirmDialogResultDefaultType.cancel,
      'secondary',
      'ghost'
    );

    options.confirmButton = confirmButton;
    options.cancelButton = cancelButton;
    options.supportButton = supportButton;
  }

  private generateButton(
    options: Partial<T>,
    button: PrizmConfirmDialogButton | string,
    defaultText: string,
    defaultComplete: PrizmConfirmDialogResultDefaultType,
    defaultAppearance?: PrizmAppearance,
    defaultAppearanceType?: PrizmAppearanceType,
  ): PrizmConfirmDialogButton {
    const buttonText = (typeof button === 'string'
      ? button
      : button?.text
    ) ?? defaultText;
    const btn = ((typeof button === 'string' ? {} : button) ?? {}) as Partial<PrizmConfirmDialogButton>;

    return  {
      ...btn,
      text: buttonText,
      size: btn.size ?? options.size,
      action: btn.action ?? ((c): void => c.completeWith(defaultComplete)),
      appearance: btn.appearance ?? defaultAppearance,
      appearanceType: btn.appearanceType ?? defaultAppearanceType
    };
  }
}
