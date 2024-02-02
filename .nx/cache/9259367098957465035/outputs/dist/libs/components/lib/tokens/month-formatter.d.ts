import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmMonth } from '../@core/date-time/month';
import { PrizmHandler } from '../types/handler';
export declare const PRIZM_MONTH_FORMATTER: InjectionToken<PrizmHandler<PrizmMonth | null, Observable<string>>>;
