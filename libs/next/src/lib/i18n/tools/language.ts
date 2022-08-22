import { inject, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ZuiLanguage } from '../interfaces';
import { ZUI_RUSSIAN_LANGUAGE } from '../languages';

export const ZUI_DEFAULT_LANGUAGE = new InjectionToken<ZuiLanguage>(
    `Default Language for Zyfra UI libraries i18n`,
    {
        factory: (): ZuiLanguage => ZUI_RUSSIAN_LANGUAGE,
    },
);

export const ZUI_LANGUAGE = new InjectionToken<Observable<ZuiLanguage>>(
    `Language for Zyfra UI libraries i18n`,
    {
        factory: (): Observable<ZuiLanguage> => of(inject(ZUI_DEFAULT_LANGUAGE)),
    },
);
