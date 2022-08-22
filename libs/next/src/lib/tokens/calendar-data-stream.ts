import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ZuiDay } from '../@core/date-time/day';
import { ZuiDayRange } from '../@core/date-time/day-range';

export const ZUI_CALENDAR_DATA_STREAM = new InjectionToken<
    Observable<ZuiDay | ZuiDayRange | null>
>(`Stream that emits calendar data change`);
