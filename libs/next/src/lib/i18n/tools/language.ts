import { inject, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PrizmLanguage } from '../interfaces';
import { PZM_RUSSIAN_LANGUAGE } from '../languages';

export const PZM_DEFAULT_LANGUAGE = new InjectionToken<PrizmLanguage>(
    `Default Language for Zyfra UI libraries i18n`,
    {
        factory: (): PrizmLanguage => PZM_RUSSIAN_LANGUAGE,
    },
);

export const PZM_LANGUAGE = new InjectionToken<Observable<PrizmLanguage>>(
    `Language for Zyfra UI libraries i18n`,
    {
        factory: (): Observable<PrizmLanguage> => of(inject(PZM_DEFAULT_LANGUAGE)),
    },
);
