import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmDay } from '../@core/date-time/day';
import { PrizmDayRange } from '../@core/date-time/day-range';

export const PZM_CALENDAR_DATA_STREAM = new InjectionToken<
    Observable<PrizmDay | PrizmDayRange | null>
>(`Stream that emits calendar data change`);
