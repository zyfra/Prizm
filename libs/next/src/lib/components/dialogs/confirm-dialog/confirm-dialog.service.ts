import { AbstractPzmDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import { PzmOverlayControl, PzmOverlayInsidePlacement } from '../../../modules/overlay';
import { Observable, Observer } from 'rxjs';
import { PzmDialogConfirmComponent } from './confirm-dialog.component';
import {
  PzmConfirmDialogButton,
  PzmConfirmDialogOptions,
  PzmConfirmDialogResult,
  PzmConfirmDialogResultDefaultType,
} from './confirm-dialog.models';
import { PzmBaseDialogContext } from '../dialog/dialog.models';
import { PzmAppearance, PzmAppearanceType } from '../../../types';

const DEFAULT_OPTIONS = {
  position: PzmOverlayInsidePlacement.CENTER,
  dismissible: true,
  showByVertical: true,
  confirmButton: null,
  supportButton: null,
  cancelButton: null
} as PzmConfirmDialogOptions<PzmConfirmDialogResult>;

@Injectable({
  providedIn: 'root',
})
export class PzmConfirmDialogService<
    T extends PzmConfirmDialogOptions<PzmConfirmDialogResult> = PzmConfirmDialogOptions<PzmConfirmDialogResult>
  >
  extends AbstractPzmDialogService<T, PzmConfirmDialogResult> {
  protected readonly component = PzmDialogConfirmComponent;
  protected readonly defaultOptions = DEFAULT_OPTIONS as T;

  public override open(
    title: T['title'],
    options: Omit<Partial<T>, 'title'>,
    cb?: (data: {
      control: PzmOverlayControl,
      dialog: PzmBaseDialogContext<PzmConfirmDialogResult, PzmConfirmDialogOptions>,
      observer: Observer<PzmConfirmDialogResult>,
      destroy$: Observable<void>,
    }) => void
  ): Observable<PzmConfirmDialogResult> {
    options = {
      ...options,
      title,
      dismissible: options.dismissible ?? false,
      backdrop: options.backdrop ?? true,
    };
    this.safeUpdateButtonsWithDefaultStyles(options as Partial<T>);
    return super.open<PzmConfirmDialogResult, unknown>(
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
      PzmConfirmDialogResultDefaultType.confirmed,
      'danger',
      'ghost'
    );

    const confirmButton = this.generateButton(
      options,
      options.confirmButton,
      'Подтвердить',
      PzmConfirmDialogResultDefaultType.confirmed,
      'primary'
    );

    const cancelButton = this.generateButton(
      options,
      options.cancelButton,
      'Отмена',
      PzmConfirmDialogResultDefaultType.cancel,
      'secondary',
      'ghost'
    );

    options.confirmButton = confirmButton;
    options.cancelButton = cancelButton;
    options.supportButton = supportButton;
  }

  private generateButton(
    options: Partial<T>,
    button: PzmConfirmDialogButton | string,
    defaultText: string,
    defaultComplete: PzmConfirmDialogResultDefaultType,
    defaultAppearance?: PzmAppearance,
    defaultAppearanceType?: PzmAppearanceType,
  ): PzmConfirmDialogButton {
    const buttonText = (typeof button === 'string'
      ? button
      : button?.text
    ) ?? defaultText;
    const btn = ((typeof button === 'string' ? {} : button) ?? {}) as Partial<PzmConfirmDialogButton>;

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
