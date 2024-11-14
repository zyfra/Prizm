import { inject, Injectable, InjectionToken, Provider } from '@angular/core';
import { isObservable, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PRIZM_LANGUAGE } from '../tools/language';
import { PrizmLanguage } from '../interfaces/language';

@Injectable()
export class PrizmI18nService {
  readonly language$ = inject(PRIZM_LANGUAGE);

  // check local
  public extract<K extends keyof PrizmLanguage>(key: K): Observable<PrizmLanguage[K]> {
    return this.language$.pipe(
      switchMap((streamOrValue: Observable<PrizmLanguage> | PrizmLanguage) =>
        isObservable(streamOrValue) ? streamOrValue : of(streamOrValue)
      ),
      map((lang: PrizmLanguage) => lang[key])
    );
  }
}

export function prizmI18nInitWithKey<T, K extends keyof PrizmLanguage>(
  token: InjectionToken<T>,
  key: K
): Provider[] {
  return [
    PrizmI18nService,
    {
      provide: token,
      useFactory: (service: PrizmI18nService) => {
        return service.extract(key);
      },
      deps: [PrizmI18nService],
    },
  ];
}
export function prizmI18nInitWithKeys<T, K extends keyof PrizmLanguage>(
  keys: Record<K, InjectionToken<T>>
): Provider[] {
  return [
    PrizmI18nService,
    ...Object.keys(keys).map(key => {
      return {
        provide: keys[key as K],
        useFactory: (service: PrizmI18nService) => {
          return service.extract(key as K);
        },
        deps: [PrizmI18nService],
      };
    }),
  ];
}
