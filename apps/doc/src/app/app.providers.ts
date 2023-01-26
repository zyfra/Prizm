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
  tuiIsInsideIframe,
  TUI_DIALOG_CLOSES_ON_BACK,
  TUI_IS_CYPRESS,
  TUI_TAKE_ONLY_TRUSTED_EVENTS,
} from '@taiga-ui/cdk';
import { TUI_ANIMATIONS_DURATION, TUI_SANITIZER } from '@taiga-ui/core';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { Observable, of } from 'rxjs';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { pages, PrizmOrderedDocPage } from './pages';
import { LOGO_CONTENT } from './logo/logo.component';
import { SectionNameEnum } from './model';

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
    useFactory: (): PrizmDocPages => {
      return sortDocPages(pages);
    },
  },

  {
    provide: PRIZM_DOC_TITLE,
    useValue: TITLE_PREFIX,
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

function sortDocPages(pages: PrizmOrderedDocPage): (PrizmDocPage | PrizmDocPageGroup)[] {
  const ordering = {
    [SectionNameEnum.allAboutPrizm]: 0,
    [SectionNameEnum.guidelines]: 1,
    [SectionNameEnum.howToStart]: 2,
    [SectionNameEnum.components]: 3,
    [SectionNameEnum.charts]: 4,
    [SectionNameEnum.tools]: 5
  };

  const orderingLength = Object.keys(ordering).length;

  return [...pages]
    .sort((a, b) => {
      const sectionWeightA = (orderingLength - ordering[a.section]);
      const sectionWeightB = (orderingLength - ordering[b.section]);
      const localOrderA = a.order || 0;
      const localOrderB = b.order || 0;

      if (sectionWeightA !== sectionWeightB) {
        return sectionWeightB - sectionWeightA;
      }

      if (localOrderA !== localOrderB) {
        return localOrderA - localOrderB;
      }

      return a.title.localeCompare(b.title);
    })
    .map((page: PrizmDocPage | PrizmDocPageGroup) => {
      return {
        ...page,
        ...('subPages' in page ? { subPages: sortDocPages(page.subPages) } : {}),
      } as PrizmDocPage | PrizmDocPageGroup;
    });
}
