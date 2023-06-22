import { Inject, Injectable, Optional } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PrizmLanguage, PrizmLanguageLoader, PrizmLanguageName, PrizmLanguageStorage } from '../interfaces';
import { PRIZM_LANGUAGE_STORAGE_KEY } from '../tokens';
import { PRIZM_LANGUAGE_LOADER } from '../tokens/language-loader';
import { PRIZM_DEFAULT_LANGUAGE } from '../tools';

import { prizmAsyncLoadLanguage } from './utils';

@Injectable({ providedIn: `root` })
export class PrizmLanguageSwitcher extends BehaviorSubject<Observable<PrizmLanguage>> {
  constructor(
    @Inject(PRIZM_DEFAULT_LANGUAGE)
    private readonly fallback: PrizmLanguage,
    @Inject(PRIZM_LANGUAGE_STORAGE_KEY)
    private readonly key: string,
    @Inject(LOCAL_STORAGE)
    private readonly storage: PrizmLanguageStorage,
    @Optional()
    @Inject(PRIZM_LANGUAGE_LOADER)
    private readonly loader: PrizmLanguageLoader | null
  ) {
    super(prizmAsyncLoadLanguage(storage.getItem(key), loader, fallback));
  }

  public get language(): PrizmLanguageName {
    return this.storage.getItem(this.key) || this.fallback.name;
  }

  public setLanguage(language: PrizmLanguageName): void {
    this.storage.setItem(this.key, language);

    this.next(prizmAsyncLoadLanguage(language, this.loader, this.fallback));
  }

  public clear(): void {
    this.storage.removeItem(this.key);

    this.next(of(this.fallback));
  }
}
