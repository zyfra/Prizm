import { AbstractControl, AbstractControlDirective } from '@angular/forms';
import { Observable } from 'rxjs';
/**
 * Turns AbstractControl/Abstract-control-directive valueChanges into ReplaySubject(1)
 */
export declare function prizmReplayedValueChangesFrom<T>(control: AbstractControl | AbstractControlDirective): Observable<T>;
