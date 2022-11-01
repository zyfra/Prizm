import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { zuiGetShadow, PzmShadowType } from '../../directives/shadow';
import { PzmShadowValue } from '../../directives/shadow/models';

@Component({
    selector: 'zui-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class ZuiCardComponent {
  @Input() shadow: PzmShadowType = 'mini-bottom';

  @HostBinding('style.box-shadow')
  private get boxShadow(): PzmShadowValue {
    return zuiGetShadow(this.shadow)
  }

  @HostBinding('attr.testId')
  readonly testId = 'pzm_card';
}
