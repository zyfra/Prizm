import { PrizmLanguageName } from '@prizm-ui/i18n';
import { getDocSite } from './util';

export interface PrizmVersionMeta {
  label: string;
  link: () => URL;
  stackblitz: string | null;
  otherLinks: URL[];
  version?: string;
  baseHref?: string;
  cb?: (hostName: string, current: PrizmVersionMeta) => boolean;
}

export interface PrizmLanguageMeta {
  code: PrizmLanguageName;
  label: 'Русский' | 'English';
}

export const PRIZM_LANGUAGES_META: readonly PrizmLanguageMeta[] = [
  {
    label: 'Русский',
    code: 'russian',
  },
  {
    label: 'English',
    code: 'english',
  },
];
export const PRIZM_VERSIONS_META: readonly PrizmVersionMeta[] = [
  {
    label: '4.3.5 (ng17)',
    version: '4.3.5',
    stackblitz: 'https://stackblitz.com/edit/prizm-v4-demo',
    link: getDocSite.bind(null, 'https://doc.prizm.zyfra.com', 'http://prizm.site'),

    otherLinks: [new URL('https://prizm-v4.web.app')],
    cb: (hostName: string, current: PrizmVersionMeta) => {
      return hostName.startsWith('prizm-v4--');
    },
  },
  {
    label: '3.14.1 (ng16)',
    version: '3.14.1',
    stackblitz: 'https://stackblitz.com/edit/prizm-v3-demo',
    link: getDocSite.bind(null, 'http://3.14.0.doc.prizm.site', 'https://prizm-v3.web.app'),
    otherLinks: [],
    cb: (hostName: string, current: PrizmVersionMeta) => {
      return hostName.startsWith('prizm-v3--');
    },
  },
  {
    label: '2.15.1 (ng15)',
    version: '2.15.1',
    stackblitz: 'https://stackblitz.com/edit/prizm-v2-demo',
    link: getDocSite.bind(null, 'http://2.15.0.doc.prizm.site', 'https://prizm-v2.web.app'),
    otherLinks: [],
    cb: (hostName: string, current: PrizmVersionMeta) => {
      return hostName.startsWith('prizm-v2--');
    },
  },
  {
    label: '1.18.1 (ng14)',
    version: '1.18.1',
    stackblitz: 'https://stackblitz.com/edit/prizm-v1-demo',
    link: getDocSite.bind(null, 'http://1.18.0.doc.prizm.site', 'https://prizm-v1.web.app'),
    otherLinks: [],
    cb: (hostName: string, current: PrizmVersionMeta) => {
      return hostName.startsWith('prizm-v1--');
    },
  },
];
