import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrizmDayRange } from '../../../@core/date-time';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
export declare const RANGE_STREAM_FACTORY: <T extends PrizmDayRange>(control: NgControl | null, valueTransformer: PrizmControlValueTransformer<T, unknown>) => Observable<T | null> | null;
export declare const PRIZM_INPUT_DATE_RANGE_PROVIDERS: import("@angular/core").Provider[];
