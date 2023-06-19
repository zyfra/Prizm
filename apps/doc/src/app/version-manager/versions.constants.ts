export interface PrizmVersionMeta {
  label: string;
  link?: string;
  baseHref?: string;
}

export const PRIZM_VERSIONS_META: readonly PrizmVersionMeta[] = [
  {
    label: '2.0.0-rc.2',
    baseHref: '',
  },
  {
    label: 'next',
    link: 'https://prizmui-next.web.app/',
  },
  {
    label: 'draft',
    link: 'https://prizmui-draft.web.app/',
  },
  {
    label: 'LTS (v0.13.9)',
    link: 'https://ziiot-dev-07.kube01.yc.ziiot.ru/zui-sdk/storybook/',
  },
];
