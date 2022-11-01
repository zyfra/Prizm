import { PzmShadowType, PzmShadowTypeEnum, PzmShadowValue } from './models';

export function zuiGetShadow(type: PzmShadowType): PzmShadowValue {
  switch (type) {
    case PzmShadowTypeEnum.miniBottom:
      return PzmShadowValue.miniBottom
    case PzmShadowTypeEnum.bigTop:
      return PzmShadowValue.bigTop;
    case PzmShadowTypeEnum.miniTop:
      return PzmShadowValue.miniTop
    case PzmShadowTypeEnum.bigBottom:
      return PzmShadowValue.bigBottom
    case PzmShadowTypeEnum.miniRight:
      return PzmShadowValue.miniRight
    case PzmShadowTypeEnum.bigRight:
      return PzmShadowValue.bigRight
    case PzmShadowTypeEnum.miniLeft:
      return PzmShadowValue.miniLeft
    case PzmShadowTypeEnum.bigLeft:
      return PzmShadowValue.bigLeft
    default:
      return PzmShadowValue.none;
  }
}
