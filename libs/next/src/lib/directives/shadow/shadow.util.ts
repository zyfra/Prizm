import { PrizmShadowType, PrizmShadowTypeEnum, PrizmShadowValue } from './models';

export function prizmGetShadow(type: PrizmShadowType): PrizmShadowValue {
  switch (type) {
    case PrizmShadowTypeEnum.miniBottom:
      return PrizmShadowValue.miniBottom
    case PrizmShadowTypeEnum.bigTop:
      return PrizmShadowValue.bigTop;
    case PrizmShadowTypeEnum.miniTop:
      return PrizmShadowValue.miniTop
    case PrizmShadowTypeEnum.bigBottom:
      return PrizmShadowValue.bigBottom
    case PrizmShadowTypeEnum.miniRight:
      return PrizmShadowValue.miniRight
    case PrizmShadowTypeEnum.bigRight:
      return PrizmShadowValue.bigRight
    case PrizmShadowTypeEnum.miniLeft:
      return PrizmShadowValue.miniLeft
    case PrizmShadowTypeEnum.bigLeft:
      return PrizmShadowValue.bigLeft
    default:
      return PrizmShadowValue.none;
  }
}
