import { AbstractZuiDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import { ZuiOverlayControl, ZuiOverlayGlobalPosition, PzmOverlayInsidePlacement } from '../../../modules/overlay';
import { Observable, Observer } from 'rxjs';
import { ZuiSidebarComponent } from './sidebar.component';
import { ZuiSidebarButton, ZuiSidebarOptions, ZuiSidebarResult, ZuiSidebarResultDefaultType } from './sidebar.models';
import { ZuiBaseDialogContext } from '../dialog/dialog.models';
import { PzmAppearance, PzmAppearanceType } from '../../../types';
import { PzmSize } from '../../../util';

const DEFAULT_OPTIONS = {
  position: PzmOverlayInsidePlacement.CENTER,
  dismissible: true,
  showByVertical: true,
  confirmButton: null,
  supportButton: null,
  cancelButton: null
} as ZuiSidebarOptions<ZuiSidebarResult>;

@Injectable({
  providedIn: 'root',
})
export class ZuiSidebarService<
    T extends ZuiSidebarOptions<ZuiSidebarResult> = ZuiSidebarOptions<ZuiSidebarResult>
  >
  extends AbstractZuiDialogService<T, ZuiSidebarResult> {
  protected readonly component = ZuiSidebarComponent;
  protected readonly defaultOptions = DEFAULT_OPTIONS as T;

  public override open(
    title: T['title'],
    options: Omit<Partial<T>, 'title'> ,
    cb?: (data: {
      control: ZuiOverlayControl,
      dialog: ZuiBaseDialogContext<ZuiSidebarResult, ZuiSidebarOptions>,
      observer: Observer<ZuiSidebarResult>,
      destroy$: Observable<void>,
    }) => void
  ): Observable<ZuiSidebarResult> {
    options = {
      ...options,
      title,
      dismissible: options.dismissible ?? false,
      backdrop: options.backdrop,
      containerClass: options.backdrop ? '' : 'no-width no-height',
    };

    this.safeUpdateButtonsWithDefaultStyles(options as Partial<T>);
    return super.open<ZuiSidebarResult, unknown>(
      title,
      options as Partial<T>,
      cb,
    );
  }

  protected override getPosition(
    dialog: ZuiBaseDialogContext<any, any>,
  ): ZuiOverlayGlobalPosition {
    return new ZuiOverlayGlobalPosition(
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
      ZuiSidebarResultDefaultType.confirmed,
      'danger',
      'ghost'
    );

    const confirmButton = this.generateButton(
      options,
      options.confirmButton,
      'Подтвердить',
      ZuiSidebarResultDefaultType.confirmed,
      'primary'
    );

    const cancelButton = this.generateButton(
      options,
      options.cancelButton,
      'Отмена',
      ZuiSidebarResultDefaultType.cancel,
      'secondary',
      'ghost'
    );

    options.confirmButton = confirmButton;
    options.cancelButton = cancelButton;
    options.supportButton = supportButton;
  }

  private generateButton(
    options: Partial<T>,
    button: ZuiSidebarButton | string,
    defaultText: string,
    defaultComplete: ZuiSidebarResultDefaultType,
    defaultAppearance?: PzmAppearance,
    defaultAppearanceType?: PzmAppearanceType,
  ): ZuiSidebarButton {
    const buttonText = (typeof button === 'string'
      ? button
      : button?.text
    ) ?? defaultText;
    const btn = ((typeof button === 'string' ? {} : button) ?? {}) as Partial<ZuiSidebarButton>;

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
