import { inject } from '@angular/core';
import { isObservable, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PrizmLanguage } from '../interfaces';

import { PZM_LANGUAGE } from './language';

export function pzmExtractI18n<K extends keyof PrizmLanguage>(
    key: K,
): () => Observable<PrizmLanguage[K]> {
    return (): any =>
        inject(PZM_LANGUAGE).pipe(
            switchMap((streamOrValue: Observable<PrizmLanguage> | PrizmLanguage) =>
                isObservable(streamOrValue) ? streamOrValue : of(streamOrValue),
            ),
            map((lang: PrizmLanguage) => lang[key]),
        );
}
