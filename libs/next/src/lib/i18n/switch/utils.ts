import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZuiLanguage, ZuiLanguageLoader, ZuiLanguageName } from '../interfaces';

export function zuiAsyncLoadLanguage(
    language: ZuiLanguageName | null,
    loader: ZuiLanguageLoader | null,
    fallback: ZuiLanguage,
): Observable<ZuiLanguage> {
    return language && loader ? zuiLoadLanguage(language, loader) : of(fallback);
}

export function zuiLoadLanguage(
    language: ZuiLanguageName,
    loader: ZuiLanguageLoader,
): Observable<ZuiLanguage> {
    return from(normalizeCommonJSImport(loader(language))).pipe(
        map((module: any) => module?.[`ZUI_${language.toUpperCase()}_LANGUAGE`]),
    );
}

// CommonJS `module.exports` is wrapped as `default` in ESModule.
async function normalizeCommonJSImport<T>(importPromise: Promise<T>): Promise<T> {
    return importPromise.then((m: any) => m.default || m);
}
