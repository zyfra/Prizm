import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrizmDay } from '../../@core/date-time/day';
import { PrizmDayRange } from '../../@core/date-time/day-range';
import { PrizmTime } from '../../@core/date-time/time';
import { PrizmControlValueTransformer } from '../../types/control-value-transformer';
export declare function prizmReplayControlValueChangesFactory<T extends PrizmDayRange | PrizmDay | [PrizmDay | null, PrizmTime | null]>(control: NgControl | null, valueTransformer?: PrizmControlValueTransformer<T> | null): Observable<T | null> | null;
