import { InjectionToken } from '@angular/core';

export const PRIZM_DOC_DEFAULT_TABS = new InjectionToken<readonly string[]>(
  `[PRIZM_DOC_DEFAULT_TABS]: Array of default tab names`,
  {
    factory: (): readonly string[] => [],
  }
);
