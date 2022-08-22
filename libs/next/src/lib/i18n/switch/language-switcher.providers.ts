import type { Provider } from '@angular/core';
import { ZuiLanguageLoader } from '../interfaces';
import { ZUI_LANGUAGE_LOADER } from '../tokens';
import { ZUI_LANGUAGE } from '../tools';
import { ZuiLanguageSwitcher } from './language-switcher.service';

export function zuiLanguageSwitcher(loader: ZuiLanguageLoader): Provider[] {
    return [
        {
            provide: ZUI_LANGUAGE_LOADER,
            useFactory: (): ZuiLanguageLoader => loader,
        },
        {
            provide: ZUI_LANGUAGE,
            useExisting: ZuiLanguageSwitcher,
        },
    ];
}
