import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { pzmGetShadow, PzmShadowType } from '../../directives/shadow';
import { PzmShadowValue } from '../../directives/shadow/models';

@Component({
    selector: 'pzm-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class PzmCardComponent {
  @Input() shadow: PzmShadowType = 'mini-bottom';

  @HostBinding('style.box-shadow')
  private get boxShadow(): PzmShadowValue {
    return pzmGetShadow(this.shadow)
  }

  @HostBinding('attr.testId')
  readonly testId = 'pzm_card';
}
