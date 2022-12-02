import type { Provider } from '@angular/core';
import { PrizmLanguageLoader } from '../interfaces';
import { PRIZM_LANGUAGE_LOADER } from '../tokens';
import { PRIZM_LANGUAGE } from '../tools';
import { PrizmLanguageSwitcher } from './language-switcher.service';

export function prizmLanguageSwitcher(loader: PrizmLanguageLoader): Provider[] {
    return [
        {
            provide: PRIZM_LANGUAGE_LOADER,
            useFactory: (): PrizmLanguageLoader => loader,
        },
        {
            provide: PRIZM_LANGUAGE,
            useExisting: PrizmLanguageSwitcher,
        },
    ];
}
