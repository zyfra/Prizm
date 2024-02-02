import { Provider } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
export declare const DATE_STREAM_FACTORY: <T extends PrizmDay>(control: NgControl | null, valueTransformer: PrizmControlValueTransformer<T, unknown>) => Observable<T | null> | null;
export declare const PRIZM_INPUT_DATE_PROVIDERS: Provider[];
