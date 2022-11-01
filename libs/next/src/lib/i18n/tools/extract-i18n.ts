import { inject } from '@angular/core';
import { isObservable, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PzmLanguage } from '../interfaces';

import { PZM_LANGUAGE } from './language';

export function pzmExtractI18n<K extends keyof PzmLanguage>(
    key: K,
): () => Observable<PzmLanguage[K]> {
    return (): any =>
        inject(PZM_LANGUAGE).pipe(
            switchMap((streamOrValue: Observable<PzmLanguage> | PzmLanguage) =>
                isObservable(streamOrValue) ? streamOrValue : of(streamOrValue),
            ),
            map((lang: PzmLanguage) => lang[key]),
        );
}
