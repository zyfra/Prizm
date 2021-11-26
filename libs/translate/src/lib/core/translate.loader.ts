import { Observable } from 'rxjs';

export abstract class TranslateLoader {
    abstract getTranslation(lang: string): Observable<any>;
}