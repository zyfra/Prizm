export interface PrizmVersionMeta {
  label: string;
  link: URL;
  stackblitz: string | null;
  otherLinks: URL[];
  version?: string;
  baseHref?: string;
  cb?: (hostName: string, current: PrizmVersionMeta) => boolean;
}

export const PRIZM_VERSIONS_META: readonly PrizmVersionMeta[] = [
  {
    label: '3.0.1 (ng16)',
    version: '3.0.1',
    stackblitz: 'https://stackblitz.com/edit/prizm-v3-demo',
    link: new URL('http://prizm.site'),
    otherLinks: [new URL('https://prizm-v3.web.app')],
    cb: (hostName: string, current: PrizmVersionMeta) => {
      return hostName.startsWith('prizm-v3--');
    },
  },
  {
    label: '2.1.6 (ng15)',
    version: '2.1.6',
    stackblitz: 'https://stackblitz.com/edit/prizm-v2-demo',
    link: new URL('https://prizm-v2.web.app'),
    otherLinks: [],
    cb: (hostName: string, current: PrizmVersionMeta) => {
      return hostName.startsWith('prizm-v2--');
    },
  },
  {
    label: '1.4.4 (ng14)',
    version: '1.4.4',
    stackblitz: 'https://stackblitz.com/edit/prizm-v1-demo',
    link: new URL('https://prizm-v1.web.app'),
    otherLinks: [],
    cb: (hostName: string, current: PrizmVersionMeta) => {
      return hostName.startsWith('prizm-v1--');
    },
  },
  {
    label: '3.0.1-next (ng16)',
    version: '3.0.1-next',
    stackblitz: null,
    link: new URL('https://prizm-v3-next.web.app'),
    otherLinks: [],
  },
  {
    label: '2.1.6-next (ng15)',
    version: '2.1.6-next',
    stackblitz: null,
    link: new URL('https://prizm-v2-next.web.app'),
    otherLinks: [],
  },
  {
    label: '1.4.4-next (ng14)',
    version: '1.4.4-next',
    stackblitz: null,
    link: new URL('https://prizm-v1-next.web.app'),
    otherLinks: [],
  },
  {
    label: '3.0.1-beta (ng16)',
    version: '3.0.1-beta',
    stackblitz: null,
    link: new URL('https://prizm-v3-beta.web.app'),
    otherLinks: [],
  },
  {
    label: '2.1.6-beta (ng15)',
    version: '2.1.6-beta',
    stackblitz: null,
    link: new URL('https://prizm-v2-beta.web.app'),
    otherLinks: [],
  },
  {
    label: '1.4.4-beta (ng14)',
    version: '1.4.4-beta',
    stackblitz: null,
    link: new URL('https://prizm-v1-beta.web.app'),
    otherLinks: [],
  },
];
