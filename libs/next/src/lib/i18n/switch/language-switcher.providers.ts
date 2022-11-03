import type { Provider } from '@angular/core';
import { PrizmLanguageLoader } from '../interfaces';
import { PZM_LANGUAGE_LOADER } from '../tokens';
import { PZM_LANGUAGE } from '../tools';
import { PrizmLanguageSwitcher } from './language-switcher.service';

export function pzmLanguageSwitcher(loader: PrizmLanguageLoader): Provider[] {
    return [
        {
            provide: PZM_LANGUAGE_LOADER,
            useFactory: (): PrizmLanguageLoader => loader,
        },
        {
            provide: PZM_LANGUAGE,
            useExisting: PrizmLanguageSwitcher,
        },
    ];
}
