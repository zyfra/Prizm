import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { prizmGetShadow, PrizmShadowType } from '../../directives/shadow';
import { PrizmShadowValue } from '../../directives/shadow/models';
import { PrizmAbstractTestId } from '../../abstract/interactive';

@Component({
  selector: 'prizm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class PrizmCardComponent extends PrizmAbstractTestId {
  @Input() shadow: PrizmShadowType = 'mini-bottom';

  @HostBinding('style.box-shadow')
  private get boxShadow(): PrizmShadowValue {
    return prizmGetShadow(this.shadow);
  }

  override readonly testId_ = 'ui_card';
}
