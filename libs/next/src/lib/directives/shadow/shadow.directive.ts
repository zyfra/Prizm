import { Directive, HostBinding, Input } from '@angular/core';
import { ZuiShadowType, ZuiShadowTypeEnum, ZuiShadowValue } from './models';

@Directive({
  selector: '[zuiShadow]',
})
export class ZuiShadowDirective {
  @Input('zuiShadow')
  type: ZuiShadowType;

  @HostBinding('style.box-shadow')
  private get boxShadow(): ZuiShadowValue {
    switch (this.type) {
      case ZuiShadowTypeEnum.miniBottom:
        return ZuiShadowValue.miniBottom
      case ZuiShadowTypeEnum.bigTop:
        return ZuiShadowValue.bigTop;
      case ZuiShadowTypeEnum.miniTop:
        return ZuiShadowValue.miniTop
      case ZuiShadowTypeEnum.bigBottom:
        return ZuiShadowValue.bigBottom
      case ZuiShadowTypeEnum.miniRight:
        return ZuiShadowValue.miniRight
      case ZuiShadowTypeEnum.bigRight:
        return ZuiShadowValue.bigRight
      case ZuiShadowTypeEnum.miniLeft:
        return ZuiShadowValue.miniLeft
      default:
        return ZuiShadowValue.bigLeft;
    }
  }
}
