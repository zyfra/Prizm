import { AbstractControl, AbstractControlDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { ZuiValueChangesException } from '../exceptions/value-changes.exception';

/**
 * Turns AbstractControl/Abstract-control-directive valueChanges into ReplaySubject(1)
 */
export function zuiReplayedValueChangesFrom<T>(
    control: AbstractControl | AbstractControlDirective,
): Observable<T> {
    return new Observable(subscriber => {
        if (!control.valueChanges) {
            throw new ZuiValueChangesException();
        }

        control.valueChanges.pipe(startWith(control.value)).subscribe(subscriber);
    });
}
