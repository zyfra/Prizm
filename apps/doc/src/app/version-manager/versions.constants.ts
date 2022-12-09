export interface PrizmVersionMeta {
  label: string;
  link?: string;
  baseHref?: string;
}

export const PRIZM_VERSIONS_META: readonly PrizmVersionMeta[] = [
  {
    label: '1.0.0-beta.17',
    baseHref: '',
  },
  {
    label: 'LTS (v0.13.9)',
    link: 'https://ziiot-dev-07.kube01.yc.ziiot.ru/zui-sdk/storybook/',
  },
];
