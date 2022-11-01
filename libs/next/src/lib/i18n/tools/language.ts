import { inject, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PzmLanguage } from '../interfaces';
import { PZM_RUSSIAN_LANGUAGE } from '../languages';

export const PZM_DEFAULT_LANGUAGE = new InjectionToken<PzmLanguage>(
    `Default Language for Zyfra UI libraries i18n`,
    {
        factory: (): PzmLanguage => PZM_RUSSIAN_LANGUAGE,
    },
);

export const PZM_LANGUAGE = new InjectionToken<Observable<PzmLanguage>>(
    `Language for Zyfra UI libraries i18n`,
    {
        factory: (): Observable<PzmLanguage> => of(inject(PZM_DEFAULT_LANGUAGE)),
    },
);
