import {Directive, ElementRef, Inject, NgZone, Output} from '@angular/core';
import {merge, Observable} from 'rxjs';
import {distinctUntilChanged, map, skip, startWith} from 'rxjs/operators';
import {zuiZoneOptimized} from '../../observables/zone-free';
import {zuiTypedFromEvent} from '../../observables/typed-from-event';
import {zuiIsNativeFocused} from "../../util";

/**
 * Directive to monitor focus/blur status, works with focusIn/focus-out
 * instead of focus/blur to sync events order with Internet Explorer and
 * other focus related directives that require bubbling
 */
@Directive({
    selector: '[zuiFocusedChange]',
})
export class ZuiFocusedDirective {
    @Output()
    readonly zuiFocusedChange: Observable<boolean>;

    constructor(
        @Inject(ElementRef)
        {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
    ) {
        this.zuiFocusedChange = merge(
            zuiTypedFromEvent(nativeElement, 'focusin'),
            zuiTypedFromEvent(nativeElement, 'focusout'),
        ).pipe(
            map(() => zuiIsNativeFocused(nativeElement)),
            startWith(false),
            distinctUntilChanged(),
            skip(1),
            zuiZoneOptimized(ngZone),
        );
    }
}
