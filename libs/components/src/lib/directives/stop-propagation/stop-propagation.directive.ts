import { Attribute, Directive, ElementRef, Inject, NgZone } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { prizmStopPropagation } from '../../observables/stop-propagation';
import { prizmZoneFree } from '../../observables/zone-free';

/**
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
@Directive({
  selector: `[prizmStopPropagation]`,
  providers: [PrizmDestroyService],
})
export class PrizmStopPropagationDirective {
  constructor(
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>,
    @Inject(NgZone) ngZone: NgZone,
    @Inject(PrizmDestroyService) destroy$: Observable<void>,
    @Attribute(`prizmStopPropagation`) eventName: string
  ) {
    fromEvent(nativeElement, eventName, { passive: false })
      .pipe(
        prizmZoneFree(ngZone),
        prizmStopPropagation(),
        tap(() => {
          console.log('prizmStopPropagation');
        }),
        takeUntil(destroy$)
      )
      .subscribe();
  }
}
