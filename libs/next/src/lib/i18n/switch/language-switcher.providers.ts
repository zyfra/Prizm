import type { Provider } from '@angular/core';
import { PzmLanguageLoader } from '../interfaces';
import { PZM_LANGUAGE_LOADER } from '../tokens';
import { PZM_LANGUAGE } from '../tools';
import { PzmLanguageSwitcher } from './language-switcher.service';

export function pzmLanguageSwitcher(loader: PzmLanguageLoader): Provider[] {
    return [
        {
            provide: PZM_LANGUAGE_LOADER,
            useFactory: (): PzmLanguageLoader => loader,
        },
        {
            provide: PZM_LANGUAGE,
            useExisting: PzmLanguageSwitcher,
        },
    ];
}
