import { PrizmDocPage, PrizmDocPageGroup } from '@prizm-ui/doc';
import { SectionNameEnglishEnum, SectionNameEnum } from '../model';

type OrderedPage = { order?: number };

export type PrizmOrderedDocPage = ReadonlyArray<
  (PrizmDocPage & OrderedPage) | (PrizmDocPageGroup & OrderedPage)
>;

export const addonsRussianPages: PrizmOrderedDocPage = [
  {
    section: SectionNameEnum.addons,
    title: 'Query Builder',
    status: 'preview',
    keywords: 'query, expression, QueryBuilder, запрос, выражение',
    route: '/addons/query-builder',
  },
];

export const addonsEnglishPages: PrizmOrderedDocPage = [
  {
    section: SectionNameEnglishEnum.addons,
    title: 'Query Builder',
    status: 'preview',
    keywords: 'query, expression, QueryBuilder',
    route: '/addons/query-builder',
  },
];
