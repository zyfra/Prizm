import { InjectionToken } from '@angular/core';
import { PrizmHandler, PrizmMonth } from '@prizm-ui/components';
import { Observable } from 'rxjs';

export const PRIZM_MONTH_FORMATTER = new InjectionToken<PrizmHandler<PrizmMonth | null, Observable<string>>>(
  `[PRIZM_MONTH_FORMATTER]: A function to get localized formatted month`
);
