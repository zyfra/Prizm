import { Attribute, Directive, ElementRef, Inject, NgZone } from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { zuiPreventDefault } from '../../observables/prevent-default';
import { zuiZoneFree } from '../../observables/zone-free';

/**
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
@Directive({
    selector: `[zuiPreventDefault]`,
    providers: [ZuiDestroyService],
})
export class ZuiPreventDefaultDirective {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(ZuiDestroyService) destroy$: Observable<void>,
        @Attribute(`zuiPreventDefault`) eventName: string,
    ) {
        fromEvent(nativeElement, eventName, {passive: false})
            .pipe(zuiZoneFree(ngZone), zuiPreventDefault(), takeUntil(destroy$))
            .subscribe();
    }
}
