import { InjectionToken } from '@angular/core';

import { PrizmDocPages } from '../types/pages';

export const PRIZM_DOC_PAGES: InjectionToken<PrizmDocPages> = new InjectionToken<PrizmDocPages>(
  `[PRIZM_DOC_PAGES]: Documentation pages`,
  {
    factory: (): PrizmDocPages => [],
  }
);
