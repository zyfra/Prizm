import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { IChunk } from './i-chunk';
import { Language } from './language';

export abstract class TranslateService {

    abstract onLang: EventEmitter<string | Language>;

    /**
     * Gets the translated value of a key
     * @param key key by traslate
     * @param interpolateParams params
     */
    abstract get(key: string, interpolateParams?: any): Observable<string>;

    /**
     * Registration localization bundle
     * @param chunk bundle
     */
    abstract addChunk(chunk: IChunk): void;

    /**
     * Current language
     */
    abstract get lang(): string | Language;

    /**
     * Change language
     * @param lang language
     */
    abstract use(lang: string | Language): Observable<void>;
}
