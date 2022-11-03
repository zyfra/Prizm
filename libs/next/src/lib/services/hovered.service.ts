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
import { pzmZoneOptimized } from '../observables/zone-free';
import { pzmTypedFromEvent } from '../observables/typed-from-event';
import {pzmGetActualTarget} from "../util/dom/get-actual-target";

@Injectable({
    providedIn: 'root',
})
export class PrizmHoveredService {
    private readonly documentEvents$: Observable<Event>;

    constructor(
        @Inject(DOCUMENT) documentRef: Document,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {
        this.documentEvents$ = merge(
            pzmTypedFromEvent(documentRef, 'mousemove'),
            pzmTypedFromEvent(documentRef, 'touchstart', {capture: true}),
        );
    }

    public createHovered$(
        target: Element,
        options: AddEventListenerOptions = {passive: true},
    ): Observable<boolean> {
        return merge(
            pzmTypedFromEvent(target, 'mouseenter', options),
            pzmTypedFromEvent(target, 'touchstart', options),
        ).pipe(
            switchMap(() =>
                merge(
                    pzmTypedFromEvent(target, 'mouseleave', options),
                    this.documentEvents$.pipe(
                        filter(event => !target.contains(pzmGetActualTarget(event))),
                        pzmZoneOptimized(this.ngZone),
                        take(1),
                    ),
                ).pipe(mapTo(false), startWith(true)),
            ),
            distinctUntilChanged(),
        );
    }
}
