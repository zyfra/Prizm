import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PzmLanguage, PzmLanguageLoader, PzmLanguageName } from '../interfaces';

export function pzmAsyncLoadLanguage(
    language: PzmLanguageName | null,
    loader: PzmLanguageLoader | null,
    fallback: PzmLanguage,
): Observable<PzmLanguage> {
    return language && loader ? pzmLoadLanguage(language, loader) : of(fallback);
}

export function pzmLoadLanguage(
    language: PzmLanguageName,
    loader: PzmLanguageLoader,
): Observable<PzmLanguage> {
    return from(normalizeCommonJSImport(loader(language))).pipe(
        map((module: any) => module?.[`PZM_${language.toUpperCase()}_LANGUAGE`]),
    );
}

// CommonJS `module.exports` is wrapped as `default` in ESModule.
async function normalizeCommonJSImport<T>(importPromise: Promise<T>): Promise<T> {
    return importPromise.then((m: any) => m.default || m);
}
