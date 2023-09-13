import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmLanguage, PrizmLanguageLoader, PrizmLanguageName } from '../interfaces';

export function prizmAsyncLoadLanguage(
  language: PrizmLanguageName | null,
  loader: PrizmLanguageLoader | null,
  fallback: PrizmLanguage
): Observable<PrizmLanguage> {
  return language && loader ? prizmLoadLanguage(language, loader) : of(fallback);
}

export function prizmLoadLanguage(
  language: PrizmLanguageName,
  loader: PrizmLanguageLoader
): Observable<PrizmLanguage> {
  return from(loader(language)) as Observable<PrizmLanguage>;
}
