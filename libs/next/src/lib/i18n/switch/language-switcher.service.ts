import { Inject, Injectable, Optional } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-web-apis/common';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ZuiLanguage, ZuiLanguageLoader, ZuiLanguageName, ZuiLanguageStorage } from '../interfaces';
import { ZUI_LANGUAGE_STORAGE_KEY } from '../tokens';
import { ZUI_LANGUAGE_LOADER } from '../tokens/language-loader';
import { ZUI_DEFAULT_LANGUAGE } from '../tools';

import { zuiAsyncLoadLanguage } from './utils';

@Injectable({providedIn: `root`})
export class ZuiLanguageSwitcher extends BehaviorSubject<Observable<ZuiLanguage>> {
    constructor(
        @Inject(ZUI_DEFAULT_LANGUAGE)
        private readonly fallback: ZuiLanguage,
        @Inject(ZUI_LANGUAGE_STORAGE_KEY)
        private readonly key: string,
        @Inject(LOCAL_STORAGE)
        private readonly storage: ZuiLanguageStorage,
        @Optional()
        @Inject(ZUI_LANGUAGE_LOADER)
        private readonly loader: ZuiLanguageLoader | null,
    ) {
        super(zuiAsyncLoadLanguage(storage.getItem(key), loader, fallback));
    }

    public get language(): ZuiLanguageName {
        return this.storage.getItem(this.key) || this.fallback.name;
    }

    public setLanguage(language: ZuiLanguageName): void {
        this.storage.setItem(this.key, language);

        this.next(zuiAsyncLoadLanguage(language, this.loader, this.fallback));
    }

    public clear(): void {
        this.storage.removeItem(this.key);

        this.next(of(this.fallback));
    }
}
