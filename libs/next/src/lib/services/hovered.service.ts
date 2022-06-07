import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, NgZone} from '@angular/core';
import {merge, Observable} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    mapTo,
    startWith,
    switchMap,
    take,
} from 'rxjs/operators';
import { zuiZoneOptimized } from '../observables/zone-free';
import { zuiTypedFromEvent } from '../observables/typed-from-event';
import {zuiGetActualTarget} from "../util/dom/get-actual-target";

@Injectable({
    providedIn: 'root',
})
export class ZuiHoveredService {
    private readonly documentEvents$: Observable<Event>;

    constructor(
        @Inject(DOCUMENT) documentRef: Document,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {
        this.documentEvents$ = merge(
            zuiTypedFromEvent(documentRef, 'mousemove'),
            zuiTypedFromEvent(documentRef, 'touchstart', {capture: true}),
        );
    }

    public createHovered$(
        target: Element,
        options: AddEventListenerOptions = {passive: true},
    ): Observable<boolean> {
        return merge(
            zuiTypedFromEvent(target, 'mouseenter', options),
            zuiTypedFromEvent(target, 'touchstart', options),
        ).pipe(
            switchMap(() =>
                merge(
                    zuiTypedFromEvent(target, 'mouseleave', options),
                    this.documentEvents$.pipe(
                        filter(event => !target.contains(zuiGetActualTarget(event))),
                        zuiZoneOptimized(this.ngZone),
                        take(1),
                    ),
                ).pipe(mapTo(false), startWith(true)),
            ),
            distinctUntilChanged(),
        );
    }
}
