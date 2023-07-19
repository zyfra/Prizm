import { Inject, Injectable } from '@angular/core';
import { PRIZM_LANGUAGE, PrizmLanguage } from '@prizm-ui/i18n';
import { isObservable, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class PrizmI18nService {
  constructor(
    @Inject(PRIZM_LANGUAGE)
    readonly language$: Observable<PrizmLanguage>
  ) {}
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
