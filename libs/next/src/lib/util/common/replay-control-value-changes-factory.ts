/* eslint-disable @typescript-eslint/naming-convention */
import { NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZuiDay } from '../../@core/date-time/day';
import { ZuiDayRange } from '../../@core/date-time/day-range';
import { ZuiTime } from '../../@core/date-time/time';
import { zuiReplayedValueChangesFrom } from '../../observables/replay-control-value-changes';
import { ZuiControlValueTransformer } from '../../types/control-value-transformer';

export function zuiReplayControlValueChangesFactory<
    T extends ZuiDayRange | ZuiDay | [ZuiDay | null, ZuiTime | null],
>(
    control: NgControl | null,
    valueTransformer?: ZuiControlValueTransformer<T> | null,
): Observable<T | null> | null {
    return control
        ? zuiReplayedValueChangesFrom(control).pipe(
              map(value =>
                  valueTransformer
                      ? valueTransformer.fromControlValue(value)
                      : (value as T),
              ),
          )
        : of(null);
}
