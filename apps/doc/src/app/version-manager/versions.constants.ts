export interface PrizmVersionMeta {
  label: string;
  link?: string;
  baseHref?: string;
}

export const PRIZM_VERSIONS_META: readonly PrizmVersionMeta[] = [
  {
    label: '2.1.0',
    baseHref: 'http://prizm.site/',
  },
  {
    label: '1.2.4',
    baseHref: 'http://v1-2-4.prizm.site/',
  },
  {
    label: '1.0.1',
    baseHref: 'http://v1.prizm.site/',
  },
  {
    label: 'next',
    link: 'https://prizmui-next.web.app/',
  },
  {
    label: 'draft',
    link: 'https://prizmui-draft.web.app/',
  },
];
