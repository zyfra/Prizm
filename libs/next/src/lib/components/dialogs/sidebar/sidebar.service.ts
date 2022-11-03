import { AbstractPzmDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import { PzmOverlayControl, PzmOverlayGlobalPosition, PzmOverlayInsidePlacement } from '../../../modules/overlay';
import { Observable, Observer } from 'rxjs';
import { PzmSidebarComponent } from './sidebar.component';
import { PzmSidebarButton, PzmSidebarOptions, PzmSidebarResult, PzmSidebarResultDefaultType } from './sidebar.models';
import { PzmBaseDialogContext } from '../dialog/dialog.models';
import { PzmAppearance, PzmAppearanceType } from '../../../types';
import { PzmSize } from '../../../util';

const DEFAULT_OPTIONS = {
  position: PzmOverlayInsidePlacement.CENTER,
  dismissible: true,
  showByVertical: true,
  confirmButton: null,
  supportButton: null,
  cancelButton: null
} as PzmSidebarOptions<PzmSidebarResult>;

@Injectable({
  providedIn: 'root',
})
export class PzmSidebarService<
    T extends PzmSidebarOptions<PzmSidebarResult> = PzmSidebarOptions<PzmSidebarResult>
  >
  extends AbstractPzmDialogService<T, PzmSidebarResult> {
  protected readonly component = PzmSidebarComponent;
  protected readonly defaultOptions = DEFAULT_OPTIONS as T;

  public override open(
    title: T['title'],
    options: Omit<Partial<T>, 'title'> ,
    cb?: (data: {
      control: PzmOverlayControl,
      dialog: PzmBaseDialogContext<PzmSidebarResult, PzmSidebarOptions>,
      observer: Observer<PzmSidebarResult>,
      destroy$: Observable<void>,
    }) => void
  ): Observable<PzmSidebarResult> {
    options = {
      ...options,
      title,
      dismissible: options.dismissible ?? false,
      backdrop: options.backdrop,
      containerClass: options.backdrop ? '' : 'no-width no-height',
    };

    this.safeUpdateButtonsWithDefaultStyles(options as Partial<T>);
    return super.open<PzmSidebarResult, unknown>(
      title,
      options as Partial<T>,
      cb,
    );
  }

  protected override getPosition(
    dialog: PzmBaseDialogContext<any, any>,
  ): PzmOverlayGlobalPosition {
    return new PzmOverlayGlobalPosition(
      {
        placement: dialog.position ?? PzmOverlayInsidePlacement.LEFT,
        width: (['t', 'b'].includes(dialog.position) && '100%') || dialog.width,
        height: (['l', 'r'].includes(dialog.position) && '100%') || dialog.height
      }
    );
  }

  private safeUpdateButtonsWithDefaultStyles(
    options: Partial<T>
  ): void {
    const supportButton = options.supportButton && this.generateButton(
      options,
      options.supportButton,
      'Продолжить',
      PzmSidebarResultDefaultType.confirmed,
      'danger',
      'ghost'
    );

    const confirmButton = this.generateButton(
      options,
      options.confirmButton,
      'Подтвердить',
      PzmSidebarResultDefaultType.confirmed,
      'primary'
    );

    const cancelButton = this.generateButton(
      options,
      options.cancelButton,
      'Отмена',
      PzmSidebarResultDefaultType.cancel,
      'secondary',
      'ghost'
    );

    options.confirmButton = confirmButton;
    options.cancelButton = cancelButton;
    options.supportButton = supportButton;
  }

  private generateButton(
    options: Partial<T>,
    button: PzmSidebarButton | string,
    defaultText: string,
    defaultComplete: PzmSidebarResultDefaultType,
    defaultAppearance?: PzmAppearance,
    defaultAppearanceType?: PzmAppearanceType,
  ): PzmSidebarButton {
    const buttonText = (typeof button === 'string'
      ? button
      : button?.text
    ) ?? defaultText;
    const btn = ((typeof button === 'string' ? {} : button) ?? {}) as Partial<PzmSidebarButton>;

    return  {
      ...btn,
      text: buttonText,
      size: btn.size ?? options.size as PzmSize,
      action: btn.action ?? ((c): void => c.completeWith(defaultComplete)),
      appearance: btn.appearance ?? defaultAppearance,
      appearanceType: btn.appearanceType ?? defaultAppearanceType
    };
  }
}
