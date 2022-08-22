import { inject } from '@angular/core';
import { isObservable, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ZuiLanguage } from '../interfaces';

import { ZUI_LANGUAGE } from './language';

export function zuiExtractI18n<K extends keyof ZuiLanguage>(
    key: K,
): () => Observable<ZuiLanguage[K]> {
    return (): any =>
        inject(ZUI_LANGUAGE).pipe(
            switchMap((streamOrValue: Observable<ZuiLanguage> | ZuiLanguage) =>
                isObservable(streamOrValue) ? streamOrValue : of(streamOrValue),
            ),
            map((lang: ZuiLanguage) => lang[key]),
        );
}
