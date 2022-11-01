import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PzmLanguage, PzmLanguageLoader, PzmLanguageName } from '../interfaces';

export function zuiAsyncLoadLanguage(
    language: PzmLanguageName | null,
    loader: PzmLanguageLoader | null,
    fallback: PzmLanguage,
): Observable<PzmLanguage> {
    return language && loader ? zuiLoadLanguage(language, loader) : of(fallback);
}

export function zuiLoadLanguage(
    language: PzmLanguageName,
    loader: PzmLanguageLoader,
): Observable<PzmLanguage> {
    return from(normalizeCommonJSImport(loader(language))).pipe(
        map((module: any) => module?.[`ZUI_${language.toUpperCase()}_LANGUAGE`]),
    );
}

// CommonJS `module.exports` is wrapped as `default` in ESModule.
async function normalizeCommonJSImport<T>(importPromise: Promise<T>): Promise<T> {
    return importPromise.then((m: any) => m.default || m);
}
