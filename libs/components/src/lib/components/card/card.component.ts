import { ChangeDetectionStrategy, Component, HostBinding, Inject, Input, Optional } from '@angular/core';
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
  @Input() shadow: PrizmShadowType | undefined;

  override readonly testId_ = 'ui_card';

  private options: PrizmCardOptions = { ...prizmCardDefaultOptions };

  constructor(@Optional() @Inject(PRIZM_CARD_OPTIONS) customOptions: Partial<PrizmCardOptions>) {
    super();

    this.options = { ...this.options, ...customOptions };
  }

  @HostBinding('style.box-shadow')
  private get boxShadow(): PrizmShadowValue {
    return prizmGetShadow(this.shadow ?? this.options.shadow);
  }
}
