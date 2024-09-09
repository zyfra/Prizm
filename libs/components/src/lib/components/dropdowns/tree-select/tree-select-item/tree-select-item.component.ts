import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  HostBinding,
  HostListener,
  inject,
} from '@angular/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { PrizmHintDirective } from '../../../../directives';
import { CommonModule } from '@angular/common';
import { PrizmButtonComponent } from '../../../button';
import {
  PRIZM_APPEARANCE_DEFAULT_VALUE,
  PRIZM_APPEARANCE_TYPE_DEFAULT_VALUE,
  PRIZM_STORE_ITEM,
  PrizmAddToStoreDirective,
  PrizmAppearanceDirective,
  PrizmAppearanceTypeDirective,
  PrizmCurrentIndexDirective,
  PrizmDisabledDirective,
  PrizmHasValueDirective,
  PrizmMutationObserverService,
  PrizmSelectedIndexDirective,
  PrizmSizeDirective,
  PrizmSyncChildDirective,
} from '@prizm-ui/helpers';
import { ObserversModule } from '@angular/cdk/observers';

@Component({
  selector: 'prizm-switcher-item',
  templateUrl: './tree-select-item.component.html',
  styleUrls: ['./tree-select-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    // for store PrizmSwitcherItemComponent by index to control from parent switcher component
    {
      provide: PRIZM_STORE_ITEM,
      useExisting: forwardRef(() => PrizmTreeSelectItemComponent),
    },
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
      directive: PrizmAppearanceDirective,
      inputs: ['appearance'],
    },
    {
      directive: PrizmDisabledDirective,
      inputs: ['disabled'],
    },
    {
      directive: PrizmAppearanceTypeDirective,
      inputs: ['appearanceType'],
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
  imports: [CommonModule, PrizmButtonComponent, ObserversModule, PrizmHasValueDirective],
})
export class PrizmTreeSelectItemComponent extends PrizmAbstractTestId {
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

  override readonly testId_ = 'ui_switcher_item';

  private readonly parentDisableDirective = inject(PrizmDisabledDirective, {
    skipSelf: true,
  });
  private readonly currentDisableDirective = inject(PrizmDisabledDirective, {
    self: true,
  });
  public readonly appearanceTypeDirective = inject(PrizmAppearanceTypeDirective);
  public readonly appearanceDirective = inject(PrizmAppearanceDirective);
  get isDisabled(): boolean {
    return Boolean(this.parentDisableDirective.disabled || this.currentDisableDirective.disabled);
  }

  private readonly currentIndexDirective = inject(PrizmCurrentIndexDirective);
  private readonly selectedIndexDirective = inject(PrizmSelectedIndexDirective);
  private readonly sizeDirective = inject(PrizmSizeDirective);

  get size() {
    return this.sizeDirective.size;
  }
}
