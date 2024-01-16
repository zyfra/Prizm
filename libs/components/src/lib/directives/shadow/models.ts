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
  miniBottom = 'var(--prizm-shadow-mini-bottom)',
  bigTop = 'var(--prizm-shadow-big-top)',
  miniTop = 'var(--prizm-shadow-mini-top)',
  bigBottom = 'var(--prizm-shadow-big-bottom)',
  miniRight = 'var(--prizm-shadow-mini-left)',
  bigRight = 'var(--prizm-shadow-big-right)',
  miniLeft = 'var(--prizm-shadow-mini-left)',
  bigLeft = 'var(--prizm-shadow-big-left)',
  none = '',
}
