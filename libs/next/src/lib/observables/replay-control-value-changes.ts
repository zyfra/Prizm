import { AbstractControl, AbstractControlDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { PzmValueChangesException } from '../exceptions/value-changes.exception';

/**
 * Turns AbstractControl/Abstract-control-directive valueChanges into ReplaySubject(1)
 */
export function pzmReplayedValueChangesFrom<T>(
    control: AbstractControl | AbstractControlDirective,
): Observable<T> {
    return new Observable(subscriber => {
        if (!control.valueChanges) {
            throw new PzmValueChangesException();
        }

        control.valueChanges.pipe(startWith(control.value)).subscribe(subscriber);
    });
}
