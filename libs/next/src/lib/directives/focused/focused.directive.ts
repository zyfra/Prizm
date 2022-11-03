import { Directive, ElementRef, Inject, NgZone, Output } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { distinctUntilChanged, map, skip, startWith } from 'rxjs/operators';
import { pzmZoneOptimized } from '../../observables/zone-free';
import { pzmTypedFromEvent } from '../../observables/typed-from-event';
import { pzmIsNativeFocused } from '../../util';

/**
 * Directive to monitor focus/blur status, works with focusIn/focus-out
 * instead of focus/blur to sync events order with Internet Explorer and
 * other focus related directives that require bubbling
 */
@Directive({
    selector: '[pzmFocusedChange]',
})
export class PzmFocusedDirective {
    @Output()
    readonly pzmFocusedChange: Observable<boolean>;

    constructor(
        @Inject(ElementRef)
        {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
    ) {
        this.pzmFocusedChange = merge(
            pzmTypedFromEvent(nativeElement, 'focusin'),
            pzmTypedFromEvent(nativeElement, 'focusout'),
        ).pipe(
            map(() => pzmIsNativeFocused(nativeElement)),
            startWith(false),
            distinctUntilChanged(),
            skip(1),
            pzmZoneOptimized(ngZone),
        );
    }
}
