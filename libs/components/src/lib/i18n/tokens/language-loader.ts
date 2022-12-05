import { InjectionToken } from '@angular/core';
import { PrizmLanguageLoader } from '../interfaces';

// @note: cannot be transferred to a shared file
// ReferenceError: Cannot access 'PRIZM_LANGUAGE_LOADER' before initialization
export const PRIZM_LANGUAGE_LOADER = new InjectionToken<PrizmLanguageLoader>(
    `Webpack chunk loader for Prizm UI libraries i18n`,
);
