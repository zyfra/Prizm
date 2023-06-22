import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmMonth } from '../@core/date-time/month';
import { PrizmHandler } from '../types/handler';

export const PRIZM_MONTH_FORMATTER = new InjectionToken<PrizmHandler<PrizmMonth | null, Observable<string>>>(
  `[PRIZM_MONTH_FORMATTER]: A function to get localized formatted month`
);
