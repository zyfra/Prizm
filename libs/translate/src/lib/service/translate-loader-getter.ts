import {
    TranslateLoaderFactory,
    TranslateLoader
} from '../core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TranslateHttpLoader } from './http-loader';

@Injectable()
export class TranslateLoaderGetter extends TranslateLoaderFactory {

    constructor(private http: HttpClient) {
        super();
    }

    public loader(chunkId: string): TranslateLoader {
        return new TranslateHttpLoader(this.http, `/assets/i18n/${chunkId}/`, ".json")
    }
}
