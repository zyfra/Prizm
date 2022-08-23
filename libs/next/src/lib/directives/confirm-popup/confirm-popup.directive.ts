/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiConfirmPopupContainerComponent } from './confirm-popup-container.component';
import { ZUI_HINT_OPTIONS, ZuiHintDirective, ZuiHintOptions } from '../hint';
import {
  ZUI_CONFIRM_POPUP_OPTIONS,
  ZuiConfirmPopupButton,
  ZuiConfirmPopupContext,
  ZuiConfirmPopupOptions,
} from './confirm-popup-options';
import { zuiDefaultProp, zuiRequiredSetter } from '../../decorators';
import { PolymorphContent } from '../polymorph';
import { zuiGenerateId, ZuiSizeL, ZuiSizeM } from '../../util';
import { ZuiConfirmDialogButton, ZuiConfirmDialogResultDefaultType } from '../../components/dialogs/confirm-dialog';
import { ZuiAppearance, ZuiAppearanceType } from '../../types';
import { ZuiBaseDialogContext } from '../../components/dialogs/dialog';

@Directive({
    selector: '[zuiConfirmPopup]:not(ng-container)',
    providers: [
      ZuiDestroyService,
      {
        provide: ZUI_HINT_OPTIONS,
        useExisting: forwardRef(() => ZUI_CONFIRM_POPUP_OPTIONS)
      }
    ],
    exportAs: 'zuiConfirmPopup'
})
export class ZuiConfirmPopupDirective<T extends Record<string, unknown>> extends ZuiHintDirective<ZuiConfirmPopupOptions> {
  @Input('zuiConfirmPopupMode')
  @zuiDefaultProp()
  override zuiHintMode: ZuiHintOptions['mode'] = this.options.mode;

  @Input('zuiAutoReposition')
  @zuiDefaultProp()
  override zuiAutoReposition: ZuiHintOptions['autoReposition'] = this.options.autoReposition;

  @Input('zuiConfirmPopupDirection')
  @zuiDefaultProp()
  override zuiHintDirection: ZuiHintOptions['direction'] = this.options.direction;

  @Input('zuiConfirmPopupId')
  @zuiDefaultProp()
  override zuiHintId: string = 'hintId_' + zuiGenerateId();

  @Input('zuiConfirmPopupShowDelay')
  @zuiDefaultProp()
  override zuiHintShowDelay: ZuiHintOptions['showDelay'] = this.options.showDelay;

  @Input('zuiConfirmPopupHideDelay')
  @zuiDefaultProp()
  override zuiHintHideDelay: ZuiHintOptions['hideDelay'] = this.options.hideDelay;

  @Input()
  @zuiDefaultProp()
  public size = this.options.size;

  @Input('zuiConfirmPopupHost')
  @zuiDefaultProp()
  override zuiHintHost: HTMLElement | null = null;

  @Output()
  @zuiDefaultProp()
  public completeWith = new EventEmitter<ZuiConfirmDialogResultDefaultType | unknown>();

  @Input('zuiConfirmPopup')
  @zuiRequiredSetter()
  override set zuiHint(value: PolymorphContent | null) {
    if (!value) {
      this.content = '';
      return;
    }

    this.content = value;
  }

  @Input()
  @zuiDefaultProp()
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
      mode: this.zuiHintMode,
      reposition: this.zuiAutoReposition,
      direction: this.zuiHintDirection,
      completeWith: (value: ZuiConfirmPopupButton) => {
        this.completeWith.next(value);
      },
      id: this.zuiHintId,
      showDelay: this.zuiHintShowDelay,
      hideDelay: this.zuiHintHideDelay,
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
    defaultAppearance?: ZuiAppearance,
    defaultAppearanceType?: ZuiAppearanceType,
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
