import {NgZone} from '@angular/core';
import {MonoTypeOperatorFunction, Observable, pipe} from 'rxjs';

export function zuiZoneFull<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return (source): Observable<T> =>
        new Observable(subscriber =>
            source.subscribe({
                next: value => ngZone.run(() => subscriber.next(value)),
                error: (error: unknown) => ngZone.run(() => subscriber.error(error)),
                complete: () => ngZone.run(() => subscriber.complete()),
            }),
        );
}

export function pzmZoneFree<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return (source): Observable<T> =>
        new Observable(subscriber =>
            ngZone.runOutsideAngular(() => source.subscribe(subscriber)),
        );
}

export function pzmZoneOptimized<T>(ngZone: NgZone): MonoTypeOperatorFunction<T> {
    return pipe(pzmZoneFree(ngZone), zuiZoneFull(ngZone));
}
