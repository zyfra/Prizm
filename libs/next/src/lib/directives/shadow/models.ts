export enum ZuiShadowTypeEnum {
  miniBottom = 'mini-bottom',
  miniTop = 'mini-top',
  bigTop = 'big-top',
  bigBottom = 'big-bottom',
  miniRight = 'mini-right',
  miniLeft = 'mini-left',
  bigRight = 'big-right',
  bigLeft = 'big-left',
}

export type ZuiShadowType = `${ZuiShadowTypeEnum.miniBottom}`
  | `${ZuiShadowTypeEnum.miniTop}`
  | `${ZuiShadowTypeEnum.miniRight}`
  | `${ZuiShadowTypeEnum.miniLeft}`
  | `${ZuiShadowTypeEnum.bigTop}`
  | `${ZuiShadowTypeEnum.bigBottom}`
  | `${ZuiShadowTypeEnum.bigLeft}`
  | `${ZuiShadowTypeEnum.bigRight}`;

export enum ZuiShadowValue {
  miniBottom = '0px 2px 4px rgba(191, 198, 215, .5)',
  bigTop = '0px -8px 32px rgba(191, 198, 215, .5)',
  miniTop = '0px -2px 4px rgba(191, 198, 215, .5)',
  bigBottom = '0px 8px 32px rgba(191, 198, 215, .5)',
  miniRight = '2px 0px 4px rgba(191, 198, 215, .5)',
  bigRight = '8px 0px 32px rgba(191, 198, 215, .5)',
  miniLeft = '-2px 0px 4px rgba(191, 198, 215, .5)',
  bigLeft = '-8px 0px 32px rgba(191, 198, 215, .5)'
}


