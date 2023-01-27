import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { prizmGetShadow, PrizmShadowType } from '../../directives/shadow';
import { PrizmShadowValue } from '../../directives/shadow/models';

@Component({
  selector: 'prizm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class PrizmCardComponent {
  @Input() shadow: PrizmShadowType = 'mini-bottom';

  @HostBinding('style.box-shadow')
  private get boxShadow(): PrizmShadowValue {
    return prizmGetShadow(this.shadow);
  }

  @HostBinding('attr.testId')
  readonly testId = 'prizm_card';
}
