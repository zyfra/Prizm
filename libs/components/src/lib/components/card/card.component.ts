import { ChangeDetectionStrategy, Component, HostBinding, inject, Input } from '@angular/core';
import { prizmGetShadow, PrizmShadowType } from '../../directives/shadow';
import { PrizmShadowValue } from '../../directives/shadow/models';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PRIZM_CARD_OPTIONS, prizmCardDefaultOptions, PrizmCardOptions } from './card-options';

@Component({
  selector: 'prizm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class PrizmCardComponent extends PrizmAbstractTestId {
  private options: PrizmCardOptions = {
    ...prizmCardDefaultOptions,
    ...inject(PRIZM_CARD_OPTIONS, {
      optional: true,
    }),
  };

  @Input() shadow: PrizmShadowType = this.options.shadow;

  override readonly testId_ = 'ui_card';

  @HostBinding('style.box-shadow')
  private get boxShadow(): PrizmShadowValue {
    return prizmGetShadow(this.shadow);
  }
}
