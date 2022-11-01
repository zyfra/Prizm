import {ChangeDetectorRef} from '@angular/core';
import {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

export function pzmWatch<T>(
    changeDetectorRef: ChangeDetectorRef,
): MonoTypeOperatorFunction<T> {
    return tap(() => {
        changeDetectorRef.markForCheck();
    });
}
