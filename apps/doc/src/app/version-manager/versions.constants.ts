export interface PrizmVersionMeta {
  label: string;
  link: URL;
  otherLinks: URL[];
  version?: string;
  baseHref?: string;
}

export const PRIZM_VERSIONS_META: readonly PrizmVersionMeta[] = [
  {
    label: '3.0.1 (ng16)',
    version: '3.0.1',
    link: new URL('http://prizm.site'),
    otherLinks: [new URL('https://prizm-v3.web.app')],
  },
  {
    label: '2.1.6 (ng15)',
    version: '2.1.6',
    link: new URL('https://prizm-v2.web.app'),
    otherLinks: [],
  },
  {
    label: '1.4.4 (ng14)',
    version: '1.4.4',
    link: new URL('https://prizm-v1.web.app'),
    otherLinks: [],
  },
  {
    label: '3.0.1-next (ng16)',
    version: '3.0.1-next',
    link: new URL('https://prizm-v3-next.web.app'),
    otherLinks: [],
  },
  {
    label: '2.1.6-next (ng15)',
    version: '2.1.6-next',
    link: new URL('https://prizm-v2-next.web.app'),
    otherLinks: [],
  },
  {
    label: '1.4.4-next (ng14)',
    version: '1.4.4-next',
    link: new URL('https://prizm-v1-next.web.app'),
    otherLinks: [],
  },
  {
    label: '3.0.1-draft (ng16)',
    version: '3.0.1-draft',
    link: new URL('https://prizm-v3-draft.web.app'),
    otherLinks: [],
  },
  {
    label: '2.1.6-draft (ng15)',
    version: '2.1.6-draft',
    link: new URL('https://prizm-v2-draft.web.app'),
    otherLinks: [],
  },
  {
    label: '1.4.4-draft (ng14)',
    version: '1.4.4-draft',
    link: new URL('https://prizm-v1-draft.web.app'),
    otherLinks: [],
  },
];
