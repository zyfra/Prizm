import { Attribute, Directive, ElementRef, Inject, NgZone } from '@angular/core';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
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
    providers: [PrizmDestroyService],
})
export class PrizmPreventDefaultDirective {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(PrizmDestroyService) destroy$: Observable<void>,
        @Attribute(`pzmPreventDefault`) eventName: string,
    ) {
        fromEvent(nativeElement, eventName, {passive: false})
            .pipe(pzmZoneFree(ngZone), pzmPreventDefault(), takeUntil(destroy$))
            .subscribe();
    }
}
