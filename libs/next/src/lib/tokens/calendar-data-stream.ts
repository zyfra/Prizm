import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PzmDay } from '../@core/date-time/day';
import { PzmDayRange } from '../@core/date-time/day-range';

export const ZUI_CALENDAR_DATA_STREAM = new InjectionToken<
    Observable<PzmDay | PzmDayRange | null>
>(`Stream that emits calendar data change`);
