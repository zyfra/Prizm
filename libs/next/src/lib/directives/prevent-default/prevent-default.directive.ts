import { Attribute, Directive, ElementRef, Inject, NgZone } from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { pzmPreventDefault } from '../../observables/prevent-default';
import { pzmZoneFree } from '../../observables/zone-free';

/**
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
@Directive({
    selector: `[pzmPreventDefault]`,
    providers: [PzmDestroyService],
})
export class PzmPreventDefaultDirective {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(PzmDestroyService) destroy$: Observable<void>,
        @Attribute(`pzmPreventDefault`) eventName: string,
    ) {
        fromEvent(nativeElement, eventName, {passive: false})
            .pipe(pzmZoneFree(ngZone), pzmPreventDefault(), takeUntil(destroy$))
            .subscribe();
    }
}
