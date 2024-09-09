import { Directive, HostBinding, HostListener, inject } from '@angular/core';
import {
  PRIZM_APPEARANCE_DEFAULT_VALUE,
  PRIZM_APPEARANCE_TYPE_DEFAULT_VALUE,
  PrizmAddToStoreDirective,
  PrizmCurrentIndexDirective,
  PrizmDisabledDirective,
  PrizmMutationObserverService,
  PrizmSelectedIndexDirective,
  PrizmSyncChildDirective,
} from '@prizm-ui/helpers';
import { PrizmHintDirective } from '@prizm-ui/components';

@Directive({
  selector: '[prizmTreeSelectItem]',
  standalone: true,
  providers: [
    PrizmMutationObserverService,
    {
      provide: PRIZM_APPEARANCE_TYPE_DEFAULT_VALUE,
      useValue: 'ghost',
    },
    {
      provide: PRIZM_APPEARANCE_DEFAULT_VALUE,
      useValue: 'secondary',
    },
  ],
  hostDirectives: [
    PrizmSyncChildDirective,
    PrizmCurrentIndexDirective,
    PrizmAddToStoreDirective,
    {
      directive: PrizmDisabledDirective,
      inputs: ['disabled'],
    },
    {
      directive: PrizmHintDirective,
      inputs: [
        'prizmHint: hint',
        'prizmHintCanShow: hintCanShow',
        'prizmHintDirection: hintDirection',
        'prizmAutoReposition: hintAutoReposition',
        'prizmHintHideDelay: hintHideDelay',
        'prizmHintShowDelay: hintShowDelay',
        'prizmHintTheme: hintTheme',
      ],
    },
  ],
})
export class PrizmTreeSelectItemDirective {
  get isActive() {
    return this.selectedIndexDirective.selectedIndex === this.currentIndexDirective.index;
  }

  @HostBinding('attr.first-child') get isFirstChild() {
    return this.currentIndexDirective.isFirst;
  }
  @HostBinding('attr.last-child') get isLastChild() {
    return this.currentIndexDirective.isLast;
  }

  @HostListener('click') public select() {
    if (this.isDisabled) return false;
    this.selectedIndexDirective.setIndex(this.currentIndexDirective.index);
    return true;
  }

  private readonly parentDisableDirective = inject(PrizmDisabledDirective, {
    skipSelf: true,
  });
  private readonly currentDisableDirective = inject(PrizmDisabledDirective, {
    self: true,
  });
  get isDisabled(): boolean {
    return Boolean(this.parentDisableDirective.disabled || this.currentDisableDirective.disabled);
  }

  private readonly currentIndexDirective = inject(PrizmCurrentIndexDirective);
  private readonly selectedIndexDirective = inject(PrizmSelectedIndexDirective);
}
