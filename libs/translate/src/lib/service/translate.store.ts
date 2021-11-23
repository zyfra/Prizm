import { Injectable } from '@angular/core';
import { ITranslateStore } from '../interface/i-translate-store';

@Injectable()
export class TranslateStore {
    public translations: ITranslateStore = {};
}