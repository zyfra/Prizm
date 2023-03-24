import { inject, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PrizmLanguage } from '../interfaces';
import { PRIZM_RUSSIAN_LANGUAGE } from '../languages';

export const PRIZM_DEFAULT_LANGUAGE = new InjectionToken<PrizmLanguage>(
  `Default Language for Prizm UI libraries i18n`,
  {
    factory: (): PrizmLanguage => PRIZM_RUSSIAN_LANGUAGE,
  }
);

export const PRIZM_LANGUAGE = new InjectionToken<Observable<PrizmLanguage>>(
  `Language for Prizm UI libraries i18n`,
  {
    factory: (): Observable<PrizmLanguage> => of(inject(PRIZM_DEFAULT_LANGUAGE)),
  }
);
