import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { pzmGetShadow, PrizmShadowType } from '../../directives/shadow';
import { PrizmShadowValue } from '../../directives/shadow/models';

@Component({
    selector: 'pzm-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class PrizmCardComponent {
  @Input() shadow: PrizmShadowType = 'mini-bottom';

  @HostBinding('style.box-shadow')
  private get boxShadow(): PrizmShadowValue {
    return pzmGetShadow(this.shadow)
  }

  @HostBinding('attr.testId')
  readonly testId = 'pzm_card';
}
