import { InjectionToken } from '@angular/core';

export const PRIZM_LANGUAGE_STORAGE_KEY = new InjectionToken<string>(
  `Default key for search value in storage`,
  {
    factory: (): string => `prizmLanguage`,
  }
);
