/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { PzmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import {
  PZM_CONFIRM_POPUP_OPTIONS,
  PzmConfirmPopupButton,
  PzmConfirmPopupContext,
  PzmConfirmPopupOptions,
} from './confirm-popup-options';
import { pzmDefaultProp, pzmRequiredSetter } from '../../decorators';
import { PolymorphContent } from '../polymorph';
import { pzmGenerateId } from '../../util';
import { PzmConfirmDialogButton, PzmConfirmDialogResultDefaultType } from '../../components/dialogs/confirm-dialog';
import { PzmAppearance, PzmAppearanceType } from '../../types';
import { PZM_HINT_OPTIONS, PzmHintOptions } from '../hint/hint-options';
import { PzmHintDirective } from '../hint/hint.directive';

@Directive({
    selector: '[pzmConfirmPopup]:not(ng-container)',
    providers: [
      PzmDestroyService,
      {
        provide: PZM_HINT_OPTIONS,
        useExisting: forwardRef(() => PZM_CONFIRM_POPUP_OPTIONS)
      }
    ],
    exportAs: 'pzmConfirmPopup'
})
export class PzmConfirmPopupDirective<T extends Record<string, unknown>> extends PzmHintDirective<PzmConfirmPopupOptions> {
  @Input('pzmConfirmPopupMode')
  @pzmDefaultProp()
  override pzmHintMode: PzmHintOptions['mode'] = this.options.mode;

  @Input('pzmAutoReposition')
  @pzmDefaultProp()
  override pzmAutoReposition: PzmHintOptions['autoReposition'] = this.options.autoReposition;

  @Input('pzmConfirmPopupDirection')
  @pzmDefaultProp()
  override pzmHintDirection: PzmHintOptions['direction'] = this.options.direction;

  @Input('pzmConfirmPopupId')
  @pzmDefaultProp()
  override pzmHintId: string = 'hintId_' + pzmGenerateId();

  @Input('pzmConfirmPopupShowDelay')
  @pzmDefaultProp()
  override pzmHintShowDelay: PzmHintOptions['showDelay'] = this.options.showDelay;

  @Input('pzmConfirmPopupHideDelay')
  @pzmDefaultProp()
  override pzmHintHideDelay: PzmHintOptions['hideDelay'] = this.options.hideDelay;

  @Input()
  @pzmDefaultProp()
  public size = this.options.size;

  @Input('pzmConfirmPopupHost')
  @pzmDefaultProp()
  override pzmHintHost: HTMLElement | null = null;

  @Output()
  @pzmDefaultProp()
  public completeWith = new EventEmitter<PzmConfirmDialogResultDefaultType | unknown>();

  @Input('pzmConfirmPopup')
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
  pzmConfirmPopupTitle = '';

  @Input() confirmButton?: PzmConfirmPopupButton | string;
  @Input() supportButton?: PzmConfirmPopupButton | string;
  @Input() cancelButton?: PzmConfirmPopupButton | string;


  protected override readonly containerComponent = PzmConfirmPopupContainerComponent;
  protected override readonly onHoverActive = false;

  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    this.show$.next(this.elementRef.nativeElement.contains(target));
  }

  protected override getContext(): PzmConfirmPopupContext {
    const context = {
      size: this.size,
      mode: this.pzmHintMode,
      reposition: this.pzmAutoReposition,
      direction: this.pzmHintDirection,
      completeWith: (value: PzmConfirmPopupButton) => {
        this.completeWith.next(value);
      },
      id: this.pzmHintId,
      showDelay: this.pzmHintShowDelay,
      hideDelay: this.pzmHintHideDelay,
      title: this.pzmConfirmPopupTitle,
      host: this.host,
      confirmButton: this.confirmButton,
      supportButton: this.supportButton,
      cancelButton: this.cancelButton,
    } as PzmConfirmPopupContext;
    this.safeUpdateButtonsWithDefaultStyles(context);
    return context;
  }


  private generateButton(
    options: PzmConfirmPopupContext,
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
    options: PzmConfirmPopupContext
  ): void {
    const supportButton = this.generateButton(
      options,
      options.supportButton,
      'Выйти без сохранения',
      PzmConfirmDialogResultDefaultType.support,
      'danger',
      'outline'
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
}
