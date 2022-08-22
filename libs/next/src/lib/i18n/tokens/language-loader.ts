import { InjectionToken } from '@angular/core';
import { ZuiLanguageLoader } from '../interfaces';

// @note: cannot be transferred to a shared file
// ReferenceError: Cannot access 'ZUI_LANGUAGE_LOADER' before initialization
export const ZUI_LANGUAGE_LOADER = new InjectionToken<ZuiLanguageLoader>(
    `Webpack chunk loader for Zyfra UI libraries i18n`,
);
