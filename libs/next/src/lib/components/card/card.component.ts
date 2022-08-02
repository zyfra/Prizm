import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { zuiGetShadow, ZuiShadowType } from '../../directives/shadow';
import { ZuiShadowValue } from '../../directives/shadow/models';

@Component({
    selector: 'zui-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class ZuiCardComponent {
  @Input() shadow: ZuiShadowType = 'mini-bottom';

  @HostBinding('style.box-shadow')
  private get boxShadow(): ZuiShadowValue {
    return zuiGetShadow(this.shadow)
  }
}
