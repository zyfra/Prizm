/* eslint-disable @typescript-eslint/naming-convention */
import { NgControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmDay } from '../../@core/date-time/day';
import { PrizmDayRange } from '../../@core/date-time/day-range';
import { PrizmTime } from '../../@core/date-time/time';
import { pzmReplayedValueChangesFrom } from '../../observables/replay-control-value-changes';
import { PrizmControlValueTransformer } from '../../types/control-value-transformer';

export function pzmReplayControlValueChangesFactory<
    T extends PrizmDayRange | PrizmDay | [PrizmDay | null, PrizmTime | null],
>(
    control: NgControl | null,
    valueTransformer?: PrizmControlValueTransformer<T> | null,
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
