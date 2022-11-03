import { Inject, Injectable, Optional } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PzmLanguage, PzmLanguageLoader, PzmLanguageName, PzmLanguageStorage } from '../interfaces';
import { PZM_LANGUAGE_STORAGE_KEY } from '../tokens';
import { PZM_LANGUAGE_LOADER } from '../tokens/language-loader';
import { PZM_DEFAULT_LANGUAGE } from '../tools';

import { pzmAsyncLoadLanguage } from './utils';

@Injectable({providedIn: `root`})
export class PzmLanguageSwitcher extends BehaviorSubject<Observable<PzmLanguage>> {
    constructor(
        @Inject(PZM_DEFAULT_LANGUAGE)
        private readonly fallback: PzmLanguage,
        @Inject(PZM_LANGUAGE_STORAGE_KEY)
        private readonly key: string,
        @Inject(LOCAL_STORAGE)
        private readonly storage: PzmLanguageStorage,
        @Optional()
        @Inject(PZM_LANGUAGE_LOADER)
        private readonly loader: PzmLanguageLoader | null,
    ) {
        super(pzmAsyncLoadLanguage(storage.getItem(key), loader, fallback));
    }

    public get language(): PzmLanguageName {
        return this.storage.getItem(this.key) || this.fallback.name;
    }

    public setLanguage(language: PzmLanguageName): void {
        this.storage.setItem(this.key, language);

        this.next(pzmAsyncLoadLanguage(language, this.loader, this.fallback));
    }

    public clear(): void {
        this.storage.removeItem(this.key);

        this.next(of(this.fallback));
    }
}
