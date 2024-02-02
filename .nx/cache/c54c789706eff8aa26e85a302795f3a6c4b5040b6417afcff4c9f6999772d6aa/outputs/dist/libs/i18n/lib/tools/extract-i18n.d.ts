import { Observable } from 'rxjs';
import { PrizmLanguage } from '../interfaces';
/**
 * @deprecated
 * use only method "extract" from service PrizmI18nService
 * */
export declare function prizmExtractI18n<K extends keyof PrizmLanguage>(key: K): () => Observable<PrizmLanguage[K]>;
