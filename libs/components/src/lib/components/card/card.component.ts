import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input } from '@angular/core';
import { prizmGetShadow, PrizmShadowType } from '../../directives/shadow';
import { PrizmShadowValue } from '../../directives/shadow/models';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PRIZM_CARD_OPTIONS, PrizmCardOptions } from './card-options';

@Component({
  selector: 'prizm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class PrizmCardComponent extends PrizmAbstractTestId {
  @Input() shadow: PrizmShadowType = this.options.shadow;

  @HostBinding('style.box-shadow')
  private get boxShadow(): PrizmShadowValue {
    return prizmGetShadow(this.shadow);
  }

  constructor(@Inject(PRIZM_CARD_OPTIONS) private readonly options: PrizmCardOptions) {
    super();
  }

  override readonly testId_ = 'ui_card';
}
