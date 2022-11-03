import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmLanguage, PrizmLanguageLoader, PrizmLanguageName } from '../interfaces';

export function pzmAsyncLoadLanguage(
    language: PrizmLanguageName | null,
    loader: PrizmLanguageLoader | null,
    fallback: PrizmLanguage,
): Observable<PrizmLanguage> {
    return language && loader ? pzmLoadLanguage(language, loader) : of(fallback);
}

export function pzmLoadLanguage(
    language: PrizmLanguageName,
    loader: PrizmLanguageLoader,
): Observable<PrizmLanguage> {
    return from(normalizeCommonJSImport(loader(language))).pipe(
        map((module: any) => module?.[`PZM_${language.toUpperCase()}_LANGUAGE`]),
    );
}

// CommonJS `module.exports` is wrapped as `default` in ESModule.
async function normalizeCommonJSImport<T>(importPromise: Promise<T>): Promise<T> {
    return importPromise.then((m: any) => m.default || m);
}
