import { AbstractControl, AbstractControlDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { PrizmValueChangesException } from '../exceptions/value-changes.exception';

/**
 * Turns AbstractControl/Abstract-control-directive valueChanges into ReplaySubject(1)
 */
export function prizmReplayedValueChangesFrom<T>(
    control: AbstractControl | AbstractControlDirective,
): Observable<T> {
    return new Observable(subscriber => {
        if (!control.valueChanges) {
            throw new PrizmValueChangesException();
        }

        control.valueChanges.pipe(startWith(control.value)).subscribe(subscriber);
    });
}
