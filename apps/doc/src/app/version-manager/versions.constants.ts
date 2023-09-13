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
    label: '3.0.2 (ng16)',
    version: '3.0.2',
    stackblitz: 'https://stackblitz.com/edit/prizm-v3-demo',
    link: new URL('http://prizm.site'),
    otherLinks: [new URL('https://prizm-v3.web.app')],
    cb: (hostName: string, current: PrizmVersionMeta) => {
      return hostName.startsWith('prizm-v3--');
    },
  },
  {
    label: '2.1.7 (ng15)',
    version: '2.1.7',
    stackblitz: 'https://stackblitz.com/edit/prizm-v2-demo',
    link: new URL('https://prizm-v2.web.app'),
    otherLinks: [],
    cb: (hostName: string, current: PrizmVersionMeta) => {
      return hostName.startsWith('prizm-v2--');
    },
  },
  {
    label: '1.4.5 (ng14)',
    version: '1.4.5',
    stackblitz: 'https://stackblitz.com/edit/prizm-v1-demo',
    link: new URL('https://prizm-v1.web.app'),
    otherLinks: [],
    cb: (hostName: string, current: PrizmVersionMeta) => {
      return hostName.startsWith('prizm-v1--');
    },
  },
  {
    label: '3.0.2-next (ng16)',
    version: '3.0.2-next',
    stackblitz: 'https://stackblitz.com/edit/prizm-v3-next-demo',
    link: new URL('https://prizm-v3-next.web.app'),
    otherLinks: [],
  },
  {
    label: '2.1.7-next (ng15)',
    stackblitz: 'https://stackblitz.com/edit/prizm-v2-next-demo',
    version: '2.1.7-next',
    link: new URL('https://prizm-v2-next.web.app'),
    otherLinks: [],
  },
  {
    label: '1.4.5-next (ng14)',
    version: '1.4.5-next',
    stackblitz: 'https://stackblitz.com/edit/prizm-v1-next-demo',
    link: new URL('https://prizm-v1-next.web.app'),
    otherLinks: [],
  },
  {
    label: '3.0.2-beta (ng16)',
    version: '3.0.2-beta',
    stackblitz: 'https://stackblitz.com/edit/prizm-v3-beta-demo',
    link: new URL('https://prizm-v3-beta.web.app'),
    otherLinks: [],
  },
  {
    label: '2.1.7-beta (ng15)',
    version: '2.1.7-beta',
    stackblitz: 'https://stackblitz.com/edit/prizm-v2-beta-demo',
    link: new URL('https://prizm-v2-beta.web.app'),
    otherLinks: [],
  },
  {
    label: '1.4.5-beta (ng14)',
    version: '1.4.5-beta',
    stackblitz: 'https://stackblitz.com/edit/prizm-v1-beta-demo',
    link: new URL('https://prizm-v1-beta.web.app'),
    otherLinks: [],
  },
];
