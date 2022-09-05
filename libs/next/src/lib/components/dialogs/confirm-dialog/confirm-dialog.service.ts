import { AbstractZuiDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import { ZuiOverlayControl, ZuiOverlayInsidePlacement } from '../../../modules/overlay';
import { Observable, Observer } from 'rxjs';
import { ZuiDialogConfirmComponent } from './confirm-dialog.component';
import {
  ZuiConfirmDialogButton,
  ZuiConfirmDialogOptions,
  ZuiConfirmDialogResult,
  ZuiConfirmDialogResultDefaultType,
} from './confirm-dialog.models';
import { ZuiBaseDialogContext } from '../dialog/dialog.models';
import { ZuiAppearance, ZuiAppearanceType } from '../../../types';

const DEFAULT_OPTIONS = {
  position: ZuiOverlayInsidePlacement.CENTER,
  dismissible: true,
  showByVertical: true,
  confirmButton: null,
  supportButton: null,
  cancelButton: null
} as ZuiConfirmDialogOptions<ZuiConfirmDialogResult>;

@Injectable({
  providedIn: 'root',
})
export class ZuiConfirmDialogService<
    T extends ZuiConfirmDialogOptions<ZuiConfirmDialogResult> = ZuiConfirmDialogOptions<ZuiConfirmDialogResult>
  >
  extends AbstractZuiDialogService<T, ZuiConfirmDialogResult> {
  protected readonly component = ZuiDialogConfirmComponent;
  protected readonly defaultOptions = DEFAULT_OPTIONS as T;

  public override open(
    title: T['title'],
    options: Omit<Partial<T>, 'title'>,
    cb?: (data: {
      control: ZuiOverlayControl,
      dialog: ZuiBaseDialogContext<ZuiConfirmDialogResult, ZuiConfirmDialogOptions>,
      observer: Observer<ZuiConfirmDialogResult>,
      destroy$: Observable<void>,
    }) => void
  ): Observable<ZuiConfirmDialogResult> {
    options = {
      ...options,
      title,
      dismissible: options.dismissible ?? false,
      backdrop: options.backdrop ?? true,
    };
    this.safeUpdateButtonsWithDefaultStyles(options as Partial<T>);
    return super.open<ZuiConfirmDialogResult, unknown>(
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
      ZuiConfirmDialogResultDefaultType.confirmed,
      'danger',
      'ghost'
    );

    const confirmButton = this.generateButton(
      options,
      options.confirmButton,
      'Подтвердить',
      ZuiConfirmDialogResultDefaultType.confirmed,
      'primary'
    );

    const cancelButton = this.generateButton(
      options,
      options.cancelButton,
      'Отмена',
      ZuiConfirmDialogResultDefaultType.cancel,
      'secondary',
      'ghost'
    );

    options.confirmButton = confirmButton;
    options.cancelButton = cancelButton;
    options.supportButton = supportButton;
  }

  private generateButton(
    options: Partial<T>,
    button: ZuiConfirmDialogButton | string,
    defaultText: string,
    defaultComplete: ZuiConfirmDialogResultDefaultType,
    defaultAppearance?: ZuiAppearance,
    defaultAppearanceType?: ZuiAppearanceType,
  ): ZuiConfirmDialogButton {
    const buttonText = (typeof button === 'string'
      ? button
      : button?.text
    ) ?? defaultText;
    const btn = ((typeof button === 'string' ? {} : button) ?? {}) as Partial<ZuiConfirmDialogButton>;

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
