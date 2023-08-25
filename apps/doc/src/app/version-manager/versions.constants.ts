export interface PrizmVersionMeta {
  label: string;
  link: URL;
  otherLinks: URL[];
  version?: string;
  baseHref?: string;
}

export const PRIZM_VERSIONS_META: readonly PrizmVersionMeta[] = [
  {
    label: '3.0.0 (ng16)',
    version: '3.0.0',
    link: new URL('http://prizm.site'),
    otherLinks: [new URL('https://prizm-v3.web.app')],
  },
  {
    label: '2.1.5 (ng15)',
    version: '2.1.5',
    link: new URL('https://prizm-v2.web.app'),
    otherLinks: [],
  },
  {
    label: '1.4.3 (ng14)',
    version: '1.4.3',
    link: new URL('https://prizm-v1.web.app'),
    otherLinks: [],
  },
  {
    label: '3.0.0-next (ng16)',
    version: '3.0.0-next',
    link: new URL('https://prizm-v3-next.web.app'),
    otherLinks: [],
  },
  {
    label: '2.1.5-next (ng15)',
    version: '2.1.5-next',
    link: new URL('https://prizm-v2-next.web.app'),
    otherLinks: [],
  },
  {
    label: '1.4.3-next (ng14)',
    version: '1.4.3-next',
    link: new URL('https://prizm-v1-next.web.app'),
    otherLinks: [],
  },
];
