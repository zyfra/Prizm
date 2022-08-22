import { ZuiShadowType, ZuiShadowTypeEnum, ZuiShadowValue } from './models';

export function zuiGetShadow(type: ZuiShadowType): ZuiShadowValue {
  switch (type) {
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
    case ZuiShadowTypeEnum.bigLeft:
      return ZuiShadowValue.bigLeft
    default:
      return ZuiShadowValue.none;
  }
}
