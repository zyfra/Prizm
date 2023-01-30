export enum PrizmShadowTypeEnum {
  miniBottom = 'mini-bottom',
  miniTop = 'mini-top',
  bigTop = 'big-top',
  bigBottom = 'big-bottom',
  miniRight = 'mini-right',
  miniLeft = 'mini-left',
  bigRight = 'big-right',
  bigLeft = 'big-left',
  none = 'none',
}

export type PrizmShadowType =
  | `${PrizmShadowTypeEnum.miniBottom}`
  | `${PrizmShadowTypeEnum.miniTop}`
  | `${PrizmShadowTypeEnum.miniRight}`
  | `${PrizmShadowTypeEnum.miniLeft}`
  | `${PrizmShadowTypeEnum.bigTop}`
  | `${PrizmShadowTypeEnum.bigBottom}`
  | `${PrizmShadowTypeEnum.bigLeft}`
  | `${PrizmShadowTypeEnum.none}`
  | `${PrizmShadowTypeEnum.bigRight}`;

export enum PrizmShadowValue {
  miniBottom = '0px 2px 4px var(--prizm-shadow)',
  bigTop = '0px -8px 32px var(--prizm-shadow)',
  miniTop = '0px -2px 4px var(--prizm-shadow)',
  bigBottom = '0px 8px 32px var(--prizm-shadow)',
  miniRight = '2px 0px 4px var(--prizm-shadow)',
  bigRight = '8px 0px 32px var(--prizm-shadow)',
  miniLeft = '-2px 0px 4px var(--prizm-shadow)',
  bigLeft = '-8px 0px 32px var(--prizm-shadow)',
  none = '',
}
