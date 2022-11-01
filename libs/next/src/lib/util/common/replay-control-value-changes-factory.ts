/* eslint-disable @typescript-eslint/naming-convention */
import { NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PzmDay } from '../../@core/date-time/day';
import { PzmDayRange } from '../../@core/date-time/day-range';
import { PzmTime } from '../../@core/date-time/time';
import { pzmReplayedValueChangesFrom } from '../../observables/replay-control-value-changes';
import { PzmControlValueTransformer } from '../../types/control-value-transformer';

export function pzmReplayControlValueChangesFactory<
    T extends PzmDayRange | PzmDay | [PzmDay | null, PzmTime | null],
>(
    control: NgControl | null,
    valueTransformer?: PzmControlValueTransformer<T> | null,
): Observable<T | null> | null {
    return control
        ? pzmReplayedValueChangesFrom(control).pipe(
              map(value =>
                  valueTransformer
                      ? valueTransformer.fromControlValue(value)
                      : (value as T),
              ),
          )
        : of(null);
}
