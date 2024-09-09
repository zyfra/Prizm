import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  HostBinding,
  HostListener,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PRIZM_STORE_ITEM,
  PrizmAppearanceDirective,
  PrizmAppearanceTypeDirective,
  PrizmCurrentIndexDirective,
  PrizmDisabledDirective,
  PrizmHasValueDirective,
  PrizmSelectedIndexDirective,
  PrizmSizeDirective,
} from '@prizm-ui/helpers';
import { ObserversModule } from '@angular/cdk/observers';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmTreeSelectItemDirective } from './tree-select-item.directive';

@Component({
  selector: 'prizm-tree-select-item',
  templateUrl: './tree-select-item.component.html',
  styleUrls: ['./tree-select-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    {
      provide: PRIZM_STORE_ITEM,
      useExisting: forwardRef(() => PrizmTreeSelectItemComponent),
    },
  ],
  hostDirectives: [
    PrizmTreeSelectItemDirective,
    {
      directive: PrizmDisabledDirective,
      inputs: ['disabled'],
    },
  ],
  imports: [CommonModule, ObserversModule, PrizmHasValueDirective],
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
