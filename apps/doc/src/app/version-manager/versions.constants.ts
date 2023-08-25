export interface PrizmVersionMeta {
  label: string;
  link?: string;
  version?: string;
  baseHref?: string;
}

export const PRIZM_VERSIONS_META: readonly PrizmVersionMeta[] = [
  {
    label: '3.0.0 (ng16)',
    version: '3.0.0',
    link: 'http://prizm.site/',
  },
  {
    label: '2.1.5 (ng15)',
    version: '2.1.5',
    link: 'https://prizm-v2.web.app/',
  },
  {
    label: '1.4.3 (ng14)',
    version: '1.4.3',
    link: 'https://prizm-v1.web.app/',
  },
  {
    label: '3.0.0-next (ng16)',
    version: '3.0.0-next',
    link: 'http://prizm-v3-next.web.app/',
  },
  {
    label: '2.1.5-next (ng15)',
    version: '2.1.5-next',
    link: 'https://prizm-v2-next.web.app/',
  },
  {
    label: '1.4.3-next (ng14)',
    version: '1.4.3-next',
    link: 'https://prizm-v1-next.web.app/',
  },
];
