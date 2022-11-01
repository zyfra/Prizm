export interface PzmVersionMeta {
  label: string;
  link?: string;
  baseHref?: string;
}

export const PZM_VERSIONS_META: readonly PzmVersionMeta[] = [
  {
    label: 'NEXT (1.0.0-beta.10)',
    baseHref: '',
  },
  {
    label: 'LTS (v0.13.9)',
    link: 'https://ziiot-dev-07.kube01.yc.ziiot.ru/pzm-sdk/storybook/',
  },
];
