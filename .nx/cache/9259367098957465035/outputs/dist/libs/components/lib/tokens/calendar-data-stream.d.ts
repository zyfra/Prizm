import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmDay } from '../@core/date-time/day';
import { PrizmDayRange } from '../@core/date-time/day-range';
export declare const PRIZM_CALENDAR_DATA_STREAM: InjectionToken<Observable<PrizmDay | PrizmDayRange | null>>;
