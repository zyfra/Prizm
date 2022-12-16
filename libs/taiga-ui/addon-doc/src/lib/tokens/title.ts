import {InjectionToken} from '@angular/core';

export const PRIZM_DOC_TITLE = new InjectionToken<string>(`[PRIZM_DOC_TITLE]: Page title`, {
    factory: (): string => ``,
});
