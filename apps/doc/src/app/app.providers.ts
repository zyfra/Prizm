import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WINDOW } from '@ng-web-apis/common';
import {
  PRIZM_DOC_DEFAULT_TABS,
  PRIZM_DOC_LOGO,
  PRIZM_DOC_PAGES,
  PRIZM_DOC_SOURCE_CODE,
  PRIZM_DOC_TITLE,
  PrizmDocPage,
  PrizmDocPageGroup,
  PrizmDocPages,
  PrizmDocSourceCodePathOptions,
} from '@prizm-ui/doc';
import {
  TUI_DIALOG_CLOSES_ON_BACK,
  TUI_IS_CYPRESS,
  TUI_TAKE_ONLY_TRUSTED_EVENTS,
  tuiIsInsideIframe,
} from '@taiga-ui/cdk';
import { TUI_ANIMATIONS_DURATION, TUI_SANITIZER } from '@taiga-ui/core';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { Observable, of } from 'rxjs';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { pages, pagesEnglish, PrizmOrderedDocPage } from './pages';
import { LOGO_CONTENT } from './logo/logo.component';
import { SectionNameEnglishEnum, SectionNameEnum } from './model';
import { PrizmLanguageName, PrizmLanguageSwitcher } from '@prizm-ui/i18n';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';

export const DEFAULT_TABS = [`Examples`, `Live demo`, `Setup`, `How to use`];
const TITLE_PREFIX = 'Prizm UI: ';

export const HIGHLIGHT_OPTIONS_VALUE = {
  coreLibraryLoader: async (): Promise<unknown> => import('highlight.js/lib/core'),
  lineNumbersLoader: async (): Promise<unknown> => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
  languages: {
    typescript: async (): Promise<unknown> => import('highlight.js/lib/languages/typescript'),
    less: async (): Promise<unknown> => import('highlight.js/lib/languages/less'),
    xml: async (): Promise<unknown> => import('highlight.js/lib/languages/xml'),
  },
};

export const APP_PROVIDERS = [
  Title,
  {
    provide: HIGHLIGHT_OPTIONS,
    useValue: HIGHLIGHT_OPTIONS_VALUE,
  },
  {
    provide: TUI_SANITIZER,
    useClass: NgDompurifySanitizer,
  },
  {
    provide: PRIZM_DOC_SOURCE_CODE,
    useValue: (context: PrizmDocSourceCodePathOptions): null | string => {
      const link = 'https://github.com/zyfra/Prizm';
      // TODO add right path to every component
      return link;
      // if (!context.package) {
      //   return null;
      // }
      //
      // if (context.type) {
      //   return `${link}/${context.package.toLowerCase()}/${context.type.toLowerCase()}/${(
      //     context.header[0].toLowerCase() + context.header.slice(1)
      //   ).replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}`;
      // }
      //
      // return `${link}/${context.path}`;
    },
  },
  {
    provide: LocationStrategy,
    useClass: PathLocationStrategy,
  },
  {
    provide: PRIZM_DOC_TITLE,
    useValue: TITLE_PREFIX,
  },
  {
    provide: PRIZM_DOC_PAGES,
    /**
     * Returns an Observable of PrizmDocPages based on the provided PrizmLanguageSwitcher.
     * @param switcher - The PrizmLanguageSwitcher.
     * @returns An Observable of PrizmDocPages.
     */
    useFactory: (switcher: PrizmLanguageSwitcher): Observable<PrizmDocPages> => {
      return switcher.pipe(
        switchMap(i => i),
        distinctUntilChanged((a, b) => {
          return a.shortName === b.shortName;
        }),
        map(i => {
          let result = pages;
          if (i.name === 'english') result = pagesEnglish;

          return sortDocPages([...result], i.name);
        })
      );
    },
    deps: [PrizmLanguageSwitcher],
  },
  {
    provide: PRIZM_DOC_DEFAULT_TABS,
    useValue: DEFAULT_TABS,
  },
  {
    provide: PRIZM_DOC_LOGO,
    useValue: LOGO_CONTENT,
  },
  {
    provide: TUI_ANIMATIONS_DURATION,
    useFactory: (): number => (inject(TUI_IS_CYPRESS) ? 0 : 300),
  },
  {
    provide: TUI_TAKE_ONLY_TRUSTED_EVENTS,
    useFactory: (): boolean => !inject(TUI_IS_CYPRESS),
  },
  {
    provide: TUI_DIALOG_CLOSES_ON_BACK,
    useFactory: (): Observable<unknown> => of(!tuiIsInsideIframe(inject(WINDOW))), // for cypress tests
  },
];

/**
 * Sorts the document pages based on a predefined ordering
 * and returns the sorted pages with subpages recursively sorted.
 * @param pages - The array of document pages to be sorted.
 * @returns The sorted array of document pages.
 */
function sortDocPages(
  pages: PrizmOrderedDocPage,
  lang: PrizmLanguageName
): (PrizmDocPage | PrizmDocPageGroup)[] {
  // Define the ordering of sections
  const orderingRu = {
    [SectionNameEnum.allAboutPrizm]: 0,
    [SectionNameEnum.howToWork]: 1,
    [SectionNameEnum.guidelines]: 2,
    [SectionNameEnum.components]: 3,
    [SectionNameEnum.charts]: 4,
    [SectionNameEnum.tools]: 5,
  }; // Define the ordering of sections
  const orderingEn = {
    [SectionNameEnglishEnum.allAboutPrizm]: 0,
    [SectionNameEnglishEnum.howToWork]: 1,
    [SectionNameEnglishEnum.guidelines]: 2,
    [SectionNameEnglishEnum.components]: 3,
    [SectionNameEnglishEnum.charts]: 4,
    [SectionNameEnglishEnum.tools]: 5,
  };

  const ordering = lang === 'russian' ? orderingRu : orderingEn;

  // Get the length of the ordering object
  const orderingLength = Object.keys(ordering).length;

  // Group the pages based on section and sort them
  const grouped = [...pages]
    .sort((a, b) => {
      const sectionWeightA = orderingLength - ordering[a?.section ?? 0];
      const sectionWeightB = orderingLength - ordering[b?.section ?? 0];
      const localOrderA = a.order || 0;
      const localOrderB = b.order || 0;

      if (sectionWeightA !== sectionWeightB) {
        return sectionWeightB - sectionWeightA;
      }

      if (localOrderA !== localOrderB) {
        return localOrderA - localOrderB;
      }

      return 0;
    })
    .reduce((base, item) => {
      const arr = base.get(item.section!) ?? [];
      arr.push(item);
      base.set(item.section!, arr);
      return base;
    }, new Map<string, (PrizmDocPage | PrizmDocPageGroup)[]>());

  // Flatten the grouped object into an array and sort the subpages recursively
  return [...grouped.entries()]
    .reduce((base, [, values]) => {
      base.push(...values.sort((a, b) => a.title.localeCompare(b.title)));
      return base;
    }, [] as (PrizmDocPage | PrizmDocPageGroup)[])
    .map((page: PrizmDocPage | PrizmDocPageGroup) => {
      // Sort the subpages recursively if the page has subpages
      return {
        ...page,
        ...('subPages' in page ? { subPages: sortDocPages(page.subPages, lang) } : {}),
      } as PrizmDocPage | PrizmDocPageGroup;
    });
}
