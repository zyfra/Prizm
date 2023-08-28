/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { PrizmDestroyService, prizmGenerateId } from '@prizm-ui/helpers';
import { PrizmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import {
  PRIZM_CONFIRM_POPUP_OPTIONS,
  PrizmConfirmPopupButton,
  PrizmConfirmPopupContext,
  PrizmConfirmPopupOptions,
} from './confirm-popup-options';
import { prizmDefaultProp, prizmRequiredSetter } from '@prizm-ui/core';
import { PolymorphContent } from '../polymorph';
import {
  PrizmConfirmDialogButton,
  PrizmConfirmDialogResultDefaultType,
} from '../../components/dialogs/confirm-dialog';
import { PrizmAppearance, PrizmAppearanceType } from '../../types';
import { PRIZM_HINT_OPTIONS, PrizmHintOptions } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';

@Directive({
  selector: '[prizmConfirmPopup]:not(ng-container)',
  providers: [
    PrizmDestroyService,
    {
      provide: PRIZM_HINT_OPTIONS,
      useExisting: forwardRef(() => PRIZM_CONFIRM_POPUP_OPTIONS),
    },
  ],
  exportAs: 'prizmConfirmPopup',
})
export class PrizmConfirmPopupDirective<
  T extends Record<string, unknown>
> extends PrizmHintDirective<PrizmConfirmPopupOptions> {
  // @Input('prizmConfirmPopupMode')
  // @prizmDefaultProp()
  // override prizmHintMode: PrizmHintOptions['mode'] = this.options.mode;

  @Input('prizmAutoReposition')
  @prizmDefaultProp()
  override prizmAutoReposition: PrizmHintOptions['autoReposition'] = this.options.autoReposition;

  @Input('prizmConfirmPopupDirection')
  @prizmDefaultProp()
  override prizmHintDirection: PrizmHintOptions['direction'] = this.options.direction;

  @Input('prizmConfirmPopupId')
  @prizmDefaultProp()
  override prizmHintId: string = 'hintId_' + prizmGenerateId();

  @Input('prizmConfirmPopupShowDelay')
  @prizmDefaultProp()
  override prizmHintShowDelay: PrizmHintOptions['showDelay'] = this.options.showDelay;

  @Input('prizmConfirmPopupHideDelay')
  @prizmDefaultProp()
  override prizmHintHideDelay: PrizmHintOptions['hideDelay'] = this.options.hideDelay;

  @Input()
  @prizmDefaultProp()
  public size = this.options.size;

  @Input('prizmConfirmPopupHost')
  @prizmDefaultProp()
  override prizmHintHost: HTMLElement | null = null;

  @Output()
  @prizmDefaultProp()
  public completeWith = new EventEmitter<PrizmConfirmDialogResultDefaultType | unknown>();

  @Input('prizmConfirmPopup')
  @prizmRequiredSetter()
  override set prizmHint(value: PolymorphContent | null) {
    if (!value) {
      this.content = '';
      return;
    }

    this.content = value;
  }

  @Input()
  @prizmDefaultProp()
  prizmConfirmPopupTitle = '';

  @Input('prizmConfirmPopupContext')
  @prizmDefaultProp()
  override prizmHintContext: Record<string, unknown> = {};

  @Input('prizmConfirmPopupCanShow')
  @prizmDefaultProp()
  override prizmHintCanShow = true;

  @Input() confirmButton?: PrizmConfirmPopupButton | string;
  @Input() supportButton?: PrizmConfirmPopupButton | string;
  @Input() cancelButton?: PrizmConfirmPopupButton | string;

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('prizmConfirmPopupShowed')
  override prizmHintShowed = new EventEmitter<boolean>();

  protected override readonly containerComponent = PrizmConfirmPopupContainerComponent;
  protected override readonly onHoverActive = false;

  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    this.show$.next(this.elementRef.nativeElement.contains(target));
  }

  protected override getContext(): PrizmConfirmPopupContext {
    const context = {
      size: this.size,
      // mode: this.prizmHintMode,
      reposition: this.prizmAutoReposition,
      direction: this.prizmHintDirection,
      completeWith: (value: PrizmConfirmPopupButton) => {
        this.completeWith.next(value);
      },
      id: this.prizmHintId,
      showDelay: this.prizmHintShowDelay,
      hideDelay: this.prizmHintHideDelay,
      title: this.prizmConfirmPopupTitle,
      host: this.host,
      confirmButton: this.confirmButton,
      supportButton: this.supportButton,
      cancelButton: this.cancelButton,
    } as PrizmConfirmPopupContext;
    this.safeUpdateButtonsWithDefaultStyles(context);
    return context;
  }

  private generateButton(
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

  private safeUpdateButtonsWithDefaultStyles(options: PrizmConfirmPopupContext): void {
    const supportButton = this.generateButton(
      options,
      options.supportButton as string,
      'Выйти без сохранения',
      PrizmConfirmDialogResultDefaultType.support,
      'danger',
      'outline'
    );

    const confirmButton = this.generateButton(
      options,
      options.confirmButton as string,
      'Подтвердить',
      PrizmConfirmDialogResultDefaultType.confirmed,
      'primary'
    );

    const cancelButton = this.generateButton(
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
}
