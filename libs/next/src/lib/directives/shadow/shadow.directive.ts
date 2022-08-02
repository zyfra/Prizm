import { Directive, HostBinding, Input } from '@angular/core';
import { ZuiShadowType, ZuiShadowTypeEnum, ZuiShadowValue } from './models';
import { zuiGetShadow } from './shadow.util';

@Directive({
  selector: '[zuiShadow]',
})
export class ZuiShadowDirective {
  @Input('zuiShadow')
  type: ZuiShadowType;

  @HostBinding('style.box-shadow')
  private get boxShadow(): ZuiShadowValue {
    return zuiGetShadow(this.type)
  }
}
