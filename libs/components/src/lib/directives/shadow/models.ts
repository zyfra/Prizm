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
  miniBottom = 'var(--prizm-v3-shadow-mini-bottom)',
  bigTop = 'var(--prizm-v3-shadow-big-top)',
  miniTop = 'var(--prizm-v3-shadow-mini-top)',
  bigBottom = 'var(--prizm-v3-shadow-big-bottom)',
  miniRight = 'var(--prizm-v3-shadow-mini-right)',
  bigRight = 'var(--prizm-v3-shadow-big-right)',
  miniLeft = 'var(--prizm-v3-shadow-mini-left)',
  bigLeft = 'var(--prizm-v3-shadow-big-left)',
  none = '',
}
