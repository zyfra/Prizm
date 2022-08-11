export enum ZuiShadowTypeEnum {
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

export type ZuiShadowType = `${ZuiShadowTypeEnum.miniBottom}`
  | `${ZuiShadowTypeEnum.miniTop}`
  | `${ZuiShadowTypeEnum.miniRight}`
  | `${ZuiShadowTypeEnum.miniLeft}`
  | `${ZuiShadowTypeEnum.bigTop}`
  | `${ZuiShadowTypeEnum.bigBottom}`
  | `${ZuiShadowTypeEnum.bigLeft}`
  | `${ZuiShadowTypeEnum.none}`
  | `${ZuiShadowTypeEnum.bigRight}`;

export enum ZuiShadowValue {
  miniBottom = '0px 2px 4px var(--shadow)',
  bigTop = '0px -8px 32px var(--shadow)',
  miniTop = '0px -2px 4px var(--shadow)',
  bigBottom = '0px 8px 32px var(--shadow)',
  miniRight = '2px 0px 4px var(--shadow)',
  bigRight = '8px 0px 32px var(--shadow)',
  miniLeft = '-2px 0px 4px var(--shadow)',
  bigLeft = '-8px 0px 32px var(--shadow)',
  none = ''
}


