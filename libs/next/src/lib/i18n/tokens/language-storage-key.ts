import { InjectionToken } from '@angular/core';

export const ZUI_LANGUAGE_STORAGE_KEY = new InjectionToken<string>(
    `Default key for search value in storage`,
    {
        factory: (): string => `zuiLanguage`,
    },
);
