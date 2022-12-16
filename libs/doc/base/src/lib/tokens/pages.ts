import { InjectionToken } from '@angular/core';

import { TuiDocPages } from '../types/pages';

export const PRIZM_DOC_PAGES: InjectionToken<TuiDocPages> = new InjectionToken<TuiDocPages>(
  `[PRIZM_DOC_PAGES]: Documentation pages`,
  {
    factory: (): TuiDocPages => [],
  }
);
