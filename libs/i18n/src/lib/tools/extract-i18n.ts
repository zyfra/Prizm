import { inject } from '@angular/core';
import { isObservable, Observable, of, tap } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PrizmLanguage } from '../interfaces';

import { PRIZM_LANGUAGE } from './language';

/**
 * @deprecated
 * use only method "extract" from service PrizmI18nService
 * */
export function prizmExtractI18n<K extends keyof PrizmLanguage>(key: K): () => Observable<PrizmLanguage[K]> {
  return (): Observable<PrizmLanguage[K]> =>
    inject(PRIZM_LANGUAGE).pipe(
      switchMap((streamOrValue: Observable<PrizmLanguage> | PrizmLanguage) =>
        isObservable(streamOrValue) ? streamOrValue : of(streamOrValue)
      ),
      map((lang: PrizmLanguage) => lang[key])
    );
}
