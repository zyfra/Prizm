import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  HostBinding,
  HostListener,
  inject,
  Input,
} from '@angular/core';
import { PrizmSwitcherType } from './../../switcher.interface';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { PolymorphContent, PrizmHintDirective } from '../../../../directives';
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
  PrizmSyncParentDirective,
} from '@prizm-ui/helpers';
import { PrizmSwitcherTypeDirective } from '../../directives/switcher-type.directive';
import { PrizmSwitcherFullWidthDirective } from '../../directives/switcher-full-width.directive';
import { ObserversModule } from '@angular/cdk/observers';

@Component({
  selector: 'prizm-switcher-item',
  templateUrl: './switcher-item.component.html',
  styleUrls: ['./switcher-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    // for store PrizmSwitcherItemComponent by index to control from parent switcher component
    {
      provide: PRIZM_STORE_ITEM,
      useExisting: forwardRef(() => PrizmSwitcherItemComponent),
    },
    PrizmAddToStoreDirective,

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
export class PrizmSwitcherItemComponent extends PrizmAbstractTestId {
  @HostBinding('attr.switcher-type')
  get type(): PrizmSwitcherType {
    return this.switcherTypeDirective.type ?? 'inner';
  }

  @Input()
  public icon: PolymorphContent | null = null;

  get isActive() {
    return this.selectedIndexDirective.selectedIndex === this.currentIndexDirective.index;
  }

  @HostBinding('class.full-width')
  get isFullWidth() {
    return this.parentFullWidthDirective.fullWidth;
  }

  @HostBinding('attr.first-child') get isFirstChild() {
    return this.currentIndexDirective.isFirst;
  }
  @HostBinding('attr.last-child') get isLastChild() {
    return this.currentIndexDirective.isLast;
  }

  @HostListener('click') public select() {
    if (this.isDisabled) return false;
    this.selectedIndexDirective.selectedIndex = this.currentIndexDirective.index;
    this.syncerWithParent.sync();
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
  public readonly parentFullWidthDirective = inject(PrizmSwitcherFullWidthDirective);
  public readonly appearanceDirective = inject(PrizmAppearanceDirective);
  private readonly switcherTypeDirective = inject(PrizmSwitcherTypeDirective);
  get isDisabled(): boolean {
    return Boolean(this.parentDisableDirective.disabled || this.currentDisableDirective.disabled);
  }

  private readonly currentIndexDirective = inject(PrizmCurrentIndexDirective);
  private readonly selectedIndexDirective = inject(PrizmSelectedIndexDirective);
  private readonly syncerWithParent = inject(PrizmSyncParentDirective);
  private readonly sizeDirective = inject(PrizmSizeDirective);

  get size() {
    return this.sizeDirective.size;
  }
}

/**
 * TODO v5: remove
 * @deprecated
 * */
export const SwitcherItemComponent = PrizmSwitcherItemComponent;
