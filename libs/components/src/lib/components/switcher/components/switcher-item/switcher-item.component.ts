import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  PrizmDestroyService,
  PrizmDisabledDirective,
  PrizmHasValueDirective,
  PrizmMutationObserverService,
  PrizmSelectedIndexDirective,
  PrizmSizeDirective,
  PrizmSyncChildDirective,
} from '@prizm-ui/helpers';
import { PrizmSwitcherTypeDirective } from '../../directives/switcher-type.directive';
import { PrizmSwitcherFullWidthDirective } from '../../directives/switcher-full-width.directive';
import { ObserversModule } from '@angular/cdk/observers';
import { PrizmSwitcherControlDirective } from '../../directives';

@Component({
  selector: 'prizm-switcher-item',
  templateUrl: './switcher-item.component.html',
  styleUrls: ['./switcher-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    PrizmDestroyService,
    // for store PrizmSwitcherItemComponent by index to control from parent switcher component
    {
      provide: PRIZM_STORE_ITEM,
      useExisting: forwardRef(() => PrizmSwitcherItemComponent),
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
    PrizmSwitcherControlDirective,
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
export class PrizmSwitcherItemComponent<T = unknown> extends PrizmAbstractTestId {
  @HostBinding('attr.switcher-type')
  get type(): PrizmSwitcherType {
    return this.switcherTypeDirective.type ?? 'inner';
  }

  @HostBinding('attr.data-size')
  get size() {
    return this.sizeDirective.size;
  }

  @Input()
  public icon: PolymorphContent | null = null;

  @Input()
  public value?: T;

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

  @HostListener('click') public selectHandler() {
    if (this.isDisabled) return false;
    const value = this.select();
    this.updateControlState();
    return value;
  }

  public select() {
    this.selectedIndexDirective.setIndex(this.currentIndexDirective.index);
    return true;
  }

  protected updateControlState() {
    const value = this.selectedIndexDirective.select(this.currentIndexDirective.index);
    this.switcherControlDirective.onChange(value);
  }

  override readonly testId_ = 'ui_switcher_item';

  private readonly parentDisableDirective = inject(PrizmDisabledDirective, {
    skipSelf: true,
  });
  protected readonly switcherControlDirective = inject(PrizmSwitcherControlDirective, {
    skipSelf: true,
  });
  private readonly currentDisableDirective = inject(PrizmDisabledDirective, {
    self: true,
  });
  private readonly syncChildDirective = inject(PrizmSyncChildDirective, {
    self: true,
  });
  private readonly destroy$ = inject(PrizmDestroyService);
  private readonly cdRef = inject(ChangeDetectorRef);

  public readonly appearanceTypeDirective = inject(PrizmAppearanceTypeDirective);
  public readonly parentFullWidthDirective = inject(PrizmSwitcherFullWidthDirective);
  public readonly appearanceDirective = inject(PrizmAppearanceDirective);
  private readonly switcherTypeDirective = inject(PrizmSwitcherTypeDirective);
  get isDisabled(): boolean {
    return Boolean(this.parentDisableDirective.disabled || this.currentDisableDirective.disabled);
  }

  private readonly currentIndexDirective = inject(PrizmCurrentIndexDirective);
  private readonly selectedIndexDirective = inject(PrizmSelectedIndexDirective);
  private readonly sizeDirective = inject(PrizmSizeDirective);

  constructor() {
    super();
    this.syncChildDirective.addCdRef(this.cdRef);
  }
}
