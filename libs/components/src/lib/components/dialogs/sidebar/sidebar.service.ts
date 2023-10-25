import { AbstractPrizmDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import {
  PrizmOverlayControl,
  PrizmOverlayGlobalPosition,
  PrizmOverlayInsidePlacement,
} from '../../../modules/overlay';
import { Observable, Observer } from 'rxjs';
import { PrizmSidebarComponent } from './sidebar.component';
import {
  PrizmSidebarButton,
  PrizmSidebarOptions,
  PrizmSidebarResult,
  PrizmSidebarResultDefaultType,
} from './sidebar.models';
import { PrizmBaseDialogContext } from '../dialog/dialog.models';
import { PrizmAppearance, PrizmAppearanceType } from '../../../types';
import { PrizmSize } from '../../../util';
import { invokeIfCanCloseSidebar } from './util';
import { take, takeUntil } from 'rxjs/operators';
import { Compare } from '@prizm-ui/helpers';

const DEFAULT_OPTIONS = {
  position: PrizmOverlayInsidePlacement.CENTER,
  dismissible: true,
  showByVertical: true,
  confirmButton: null,
  supportButton: null,
  cancelButton: null,
} as unknown as PrizmSidebarOptions<PrizmSidebarResult>;

@Injectable({
  providedIn: 'root',
})
export class PrizmSidebarService<
  T extends PrizmSidebarOptions<PrizmSidebarResult> = PrizmSidebarOptions<PrizmSidebarResult>
> extends AbstractPrizmDialogService<T, PrizmSidebarResult> {
  protected readonly component = PrizmSidebarComponent;
  protected readonly defaultOptions = DEFAULT_OPTIONS as T;

  public override open(
    title: T['title'],
    options: Omit<Partial<T>, 'title' | 'closeWord'>,
    cb?: (data: {
      control: PrizmOverlayControl;
      dialog: PrizmBaseDialogContext<PrizmSidebarResult, PrizmSidebarOptions>;
      observer: Observer<PrizmSidebarResult>;
      destroy$: Observable<void>;
    }) => void
  ): Observable<PrizmSidebarResult> {
    options = {
      ...options,
      title,
      dismissible: options.dismissible ?? false,
      backdrop: options.backdrop,
      containerClass: options.backdrop || options.parentContainer ? '' : 'no-width no-height',
    };
    this.safeUpdateButtonsWithDefaultStyles(options as Partial<T>);
    return super.open<PrizmSidebarResult, unknown>(title, options as Partial<T>, cb);
  }

  protected override getPosition(
    dialog: PrizmBaseDialogContext<unknown, unknown>
  ): PrizmOverlayGlobalPosition {
    return new PrizmOverlayGlobalPosition({
      placement: dialog.position ?? PrizmOverlayInsidePlacement.LEFT,
      width: (['t', 'b'].includes(dialog.position) && '100%') || dialog.width,
      height: (['l', 'r'].includes(dialog.position) && '100%') || dialog.height,
    });
  }

  // TODO add i18n support for default cases
  private safeUpdateButtonsWithDefaultStyles(options: Partial<T>): void {
    const supportButton =
      Compare.isNotNullish(options.supportButton) &&
      this.generateButton(
        options,
        options.supportButton as unknown,
        'Продолжить',
        PrizmSidebarResultDefaultType.confirmed,
        'danger',
        'ghost'
      );

    const confirmButton = this.generateButton(
      options,
      options.confirmButton as unknown,
      'Подтвердить',
      PrizmSidebarResultDefaultType.confirmed,
      'primary'
    );

    const cancelButton =
      options.cancelButton !== null &&
      this.generateButton(
        options,
        options.cancelButton as unknown,
        'Отмена',
        PrizmSidebarResultDefaultType.cancel,
        'secondary',
        'ghost'
      );

    options.confirmButton = confirmButton;
    options.cancelButton = cancelButton as unknown;
    options.supportButton = supportButton as unknown;
  }

  private generateButton(
    options: Partial<T>,
    button: PrizmSidebarButton | string,
    defaultText: string,
    defaultComplete: PrizmSidebarResultDefaultType,
    defaultAppearance?: PrizmAppearance,
    defaultAppearanceType?: PrizmAppearanceType
  ): PrizmSidebarButton {
    const buttonText = (typeof button === 'string' ? button : button?.text) ?? defaultText;
    const btn = ((typeof button === 'string' ? {} : button) ?? {}) as Partial<PrizmSidebarButton>;

    return {
      ...btn,
      text: buttonText,
      size: btn.size ?? (options.size as PrizmSize),
      action:
        btn.action ??
        ((c): void => {
          invokeIfCanCloseSidebar(() => c.completeWith(defaultComplete), options.canClose)
            .pipe(take(1))
            .subscribe();
        }),
      appearance: btn.appearance ?? defaultAppearance,
      appearanceType: btn.appearanceType ?? defaultAppearanceType,
    };
  }
}
