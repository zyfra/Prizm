import { InjectionToken } from '@angular/core';

import { PrizmDocPages } from '../types/pages';
import { Observable, of } from 'rxjs';

export const PRIZM_DOC_PAGES: InjectionToken<Observable<PrizmDocPages>> = new InjectionToken<
  Observable<PrizmDocPages>
>(`[PRIZM_DOC_PAGES]: Documentation pages`, {
  factory: (): Observable<PrizmDocPages> => of([]),
});
