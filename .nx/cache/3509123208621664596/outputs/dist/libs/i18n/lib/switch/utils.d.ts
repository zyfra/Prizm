import { Observable } from 'rxjs';
import { PrizmLanguage, PrizmLanguageLoader, PrizmLanguageName } from '../interfaces';
export declare function prizmAsyncLoadLanguage(language: PrizmLanguageName | null, loader: PrizmLanguageLoader | null, fallback: PrizmLanguage): Observable<PrizmLanguage>;
export declare function prizmLoadLanguage(language: PrizmLanguageName, loader: PrizmLanguageLoader): Observable<PrizmLanguage>;
