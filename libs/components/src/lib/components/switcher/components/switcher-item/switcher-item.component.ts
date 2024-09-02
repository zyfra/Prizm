import { ChangeDetectionStrategy, Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { prizmSwitcherHint, PrizmSwitcherItem, PrizmSwitcherType } from './../../switcher.interface';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { PrizmHintDirective } from '../../../../directives';
import { CommonModule } from '@angular/common';
import { PrizmButtonComponent } from '../../../button';
import { PrizmCurrentIndexDirective, PrizmDisabledDirective, PrizmSizeDirective } from '@prizm-ui/helpers';
import { PrizmSwitcherComponent } from '@prizm-ui/components';

@Component({
  selector: 'prizm-switcher-item',
  templateUrl: './switcher-item.component.html',
  styleUrls: ['./switcher-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  hostDirectives: [PrizmCurrentIndexDirective],
  imports: [CommonModule, PrizmButtonComponent],
})
export class PrizmSwitcherItemComponent extends PrizmAbstractTestId implements OnInit {
  @Input() hint?: prizmSwitcherHint;

  @Input()
  @prizmDefaultProp()
  @HostBinding('attr.switcher-type')
  public type: PrizmSwitcherType = 'inner';

  @Input()
  public data: PrizmSwitcherItem | null = null;

  @Input()
  @prizmDefaultProp()
  public isActive = false;

  @Input()
  @HostBinding('class.full-width')
  @prizmDefaultProp()
  public fullWidth = false;

  @HostBinding('attr.first-child') get isFirstChild() {
    return this.currentIndexDirective.isFirst;
  }
  @HostBinding('attr.last-child') get isLastChild() {
    return this.currentIndexDirective.isLast;
  }
  override readonly testId_ = 'ui_switcher_item';

  private readonly disabledDirective_ = inject(PrizmDisabledDirective);
  get isDisabled(): boolean {
    return false;
    return Boolean(this.disabledDirective_.disabled || this.data?.disabled);
  }

  readonly prizmHint_ = new PrizmHintDirective();
  readonly currentIndexDirective = inject(PrizmCurrentIndexDirective);
  readonly sizeDirective = inject(PrizmSizeDirective);
  @HostBinding('attr.prizmHint') get prizmHint(): any {
    return this.hint?.value || '';
  }

  get size() {
    return 'l' as any;
  }

  private parent = inject(PrizmSwitcherComponent);
  private disabledDirective = inject(PrizmDisabledDirective);

  ngOnInit(): void {
    this.prizmHint_.ngOnInit();
  }
}

/**
 * TODO v5: remove
 * @deprecated
 * */
export const SwitcherItemComponent = PrizmSwitcherItemComponent;
