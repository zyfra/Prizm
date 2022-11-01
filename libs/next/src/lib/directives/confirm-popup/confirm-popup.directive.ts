/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiConfirmPopupContainerComponent } from './confirm-popup-container.component';
import {
  ZUI_CONFIRM_POPUP_OPTIONS,
  ZuiConfirmPopupButton,
  ZuiConfirmPopupContext,
  ZuiConfirmPopupOptions,
} from './confirm-popup-options';
import { pzmDefaultProp, pzmRequiredSetter } from '../../decorators';
import { PolymorphContent } from '../polymorph';
import { pzmGenerateId } from '../../util';
import { ZuiConfirmDialogButton, ZuiConfirmDialogResultDefaultType } from '../../components/dialogs/confirm-dialog';
import { PzmAppearance, PzmAppearanceType } from '../../types';
import { PZM_HINT_OPTIONS, PzmHintOptions } from '../hint/hint-options';
import { PzmHintDirective } from '../hint/hint.directive';

@Directive({
    selector: '[zuiConfirmPopup]:not(ng-container)',
    providers: [
      PzmDestroyService,
      {
        provide: PZM_HINT_OPTIONS,
        useExisting: forwardRef(() => ZUI_CONFIRM_POPUP_OPTIONS)
      }
    ],
    exportAs: 'zuiConfirmPopup'
})
export class ZuiConfirmPopupDirective<T extends Record<string, unknown>> extends PzmHintDirective<ZuiConfirmPopupOptions> {
  @Input('zuiConfirmPopupMode')
  @pzmDefaultProp()
  override pzmHintMode: PzmHintOptions['mode'] = this.options.mode;

  @Input('pzmAutoReposition')
  @pzmDefaultProp()
  override pzmAutoReposition: PzmHintOptions['autoReposition'] = this.options.autoReposition;

  @Input('zuiConfirmPopupDirection')
  @pzmDefaultProp()
  override pzmHintDirection: PzmHintOptions['direction'] = this.options.direction;

  @Input('zuiConfirmPopupId')
  @pzmDefaultProp()
  override pzmHintId: string = 'hintId_' + pzmGenerateId();

  @Input('zuiConfirmPopupShowDelay')
  @pzmDefaultProp()
  override pzmHintShowDelay: PzmHintOptions['showDelay'] = this.options.showDelay;

  @Input('zuiConfirmPopupHideDelay')
  @pzmDefaultProp()
  override pzmHintHideDelay: PzmHintOptions['hideDelay'] = this.options.hideDelay;

  @Input()
  @pzmDefaultProp()
  public size = this.options.size;

  @Input('zuiConfirmPopupHost')
  @pzmDefaultProp()
  override pzmHintHost: HTMLElement | null = null;

  @Output()
  @pzmDefaultProp()
  public completeWith = new EventEmitter<ZuiConfirmDialogResultDefaultType | unknown>();

  @Input('zuiConfirmPopup')
  @pzmRequiredSetter()
  override set pzmHint(value: PolymorphContent | null) {
    if (!value) {
      this.content = '';
      return;
    }

    this.content = value;
  }

  @Input()
  @pzmDefaultProp()
  zuiConfirmPopupTitle = '';

  @Input() confirmButton?: ZuiConfirmPopupButton | string;
  @Input() supportButton?: ZuiConfirmPopupButton | string;
  @Input() cancelButton?: ZuiConfirmPopupButton | string;


  protected override readonly containerComponent = ZuiConfirmPopupContainerComponent;
  protected override readonly onHoverActive = false;

  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    this.show$.next(this.elementRef.nativeElement.contains(target));
  }

  protected override getContext(): ZuiConfirmPopupContext {
    const context = {
      size: this.size,
      mode: this.pzmHintMode,
      reposition: this.pzmAutoReposition,
      direction: this.pzmHintDirection,
      completeWith: (value: ZuiConfirmPopupButton) => {
        this.completeWith.next(value);
      },
      id: this.pzmHintId,
      showDelay: this.pzmHintShowDelay,
      hideDelay: this.pzmHintHideDelay,
      title: this.zuiConfirmPopupTitle,
      host: this.host,
      confirmButton: this.confirmButton,
      supportButton: this.supportButton,
      cancelButton: this.cancelButton,
    } as ZuiConfirmPopupContext;
    this.safeUpdateButtonsWithDefaultStyles(context);
    return context;
  }


  private generateButton(
    options: ZuiConfirmPopupContext,
    button: ZuiConfirmDialogButton | string,
    defaultText: string,
    defaultComplete: ZuiConfirmDialogResultDefaultType,
    defaultAppearance?: PzmAppearance,
    defaultAppearanceType?: PzmAppearanceType,
  ): ZuiConfirmDialogButton {
    const buttonText = (typeof button === 'string'
        ? button
        : button?.text
    ) ?? defaultText;
    const btn = ((typeof button === 'string' ? {} : button) ?? {}) as Partial<ZuiConfirmDialogButton>;

    const result =  {
      ...btn,
      text: buttonText,
      size: btn.size ?? options.size,
      // TODO remove any type
      action: (ctx: any): void => {
        if (typeof btn.action === 'function') btn.action(ctx as any);
        options.completeWith(defaultComplete);
      },
      appearance: btn.appearance ?? defaultAppearance,
      appearanceType: btn.appearanceType ?? defaultAppearanceType
    };

    return result;
  }

  private safeUpdateButtonsWithDefaultStyles(
    options: ZuiConfirmPopupContext
  ): void {
    const supportButton = this.generateButton(
      options,
      options.supportButton,
      'Выйти без сохранения',
      ZuiConfirmDialogResultDefaultType.support,
      'danger',
      'outline'
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
}
