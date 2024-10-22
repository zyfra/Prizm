import {
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import { PRIZM_CONFIRM_POPUP_OPTIONS, PrizmConfirmPopupButton } from './confirm-popup-options';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmConfirmDialogResultDefaultType } from '../../components/dialogs/confirm-dialog';
import { PRIZM_HINT_OPTIONS } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';
import { prizmGetConfirmPopupContext } from './util';
import { PRIZM_HINT_CONTAINER_COMPONENT, PRIZM_HINT_GET_CONTEXT, PRIZM_HINT_ON_HOVER_ACTIVE } from '../hint';

@Directive({
  selector: '[prizmConfirmPopup]:not(ng-container)',
  providers: [
    PrizmDestroyService,
    {
      provide: PRIZM_HINT_OPTIONS,
      useExisting: forwardRef(() => PRIZM_CONFIRM_POPUP_OPTIONS),
    },
    {
      provide: PRIZM_HINT_GET_CONTEXT,
      useValue: prizmGetConfirmPopupContext,
    },
    {
      provide: PRIZM_HINT_ON_HOVER_ACTIVE,
      useValue: false,
    },
    {
      provide: PRIZM_HINT_CONTAINER_COMPONENT,
      useValue: PrizmConfirmPopupContainerComponent,
    },
  ],
  hostDirectives: [
    {
      directive: PrizmHintDirective,
      inputs: [
        'prizmAutoReposition',
        'prizmHintTheme',
        'prizmHint: prizmConfirmPopup',
        'prizmHintDirection: prizmConfirmPopupDirection',
        'prizmHintId: prizmConfirmPopupId',
        'prizmHintId: prizmConfirmPopupId',
        'prizmHintShowDelay: prizmConfirmPopupShowDelay',
        'prizmHintShowDelay: prizmConfirmPopupShowDelay',
        'prizmHintHideDelay: prizmConfirmPopupHideDelay',
        'prizmHintHost: prizmConfirmPopupHost',
        'prizmHintCanShow: prizmConfirmPopupCanShow',
        'prizmHintContext: prizmConfirmPopupContext',
      ],
      outputs: ['prizmHintShowed: prizmConfirmPopupShowed'],
    },
  ],
  exportAs: 'prizmConfirmPopup',
})
export class PrizmConfirmPopupDirective<T extends Record<string, unknown>> {
  private readonly options = inject(PRIZM_CONFIRM_POPUP_OPTIONS);

  @Input()
  @prizmDefaultProp()
  public size = this.options.size;

  @Output()
  @prizmDefaultProp()
  public completeWith = new EventEmitter<PrizmConfirmDialogResultDefaultType | unknown>();

  @Input()
  @prizmDefaultProp()
  prizmConfirmPopupTitle = '';
  @Input() confirmButton?: PrizmConfirmPopupButton | string;
  @Input() supportButton?: PrizmConfirmPopupButton | string;
  @Input() cancelButton?: PrizmConfirmPopupButton | string;

  private readonly hintDirective = inject(PrizmHintDirective, {
    self: true,
  });

  private readonly elementRef = inject(ElementRef, {
    self: true,
  });

  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    if (this.elementRef.nativeElement.contains(target)) {
      this.hintDirective.open();
    } else {
      this.hintDirective.close();
    }
  }
}
