import { Attribute, Directive, ElementRef, Inject, NgZone } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { prizmPreventDefault } from '../../observables/prevent-default';
import { prizmZoneFree } from '../../observables/zone-free';

/**
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
@Directive({
  selector: `[prizmPreventDefault]`,
  providers: [PrizmDestroyService],
})
export class PrizmPreventDefaultDirective {
  constructor(
    @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>,
    @Inject(NgZone) ngZone: NgZone,
    @Inject(PrizmDestroyService) destroy$: Observable<void>,
    @Attribute(`prizmPreventDefault`) eventName: string
  ) {
    fromEvent(nativeElement, eventName, { passive: false })
      .pipe(prizmZoneFree(ngZone), prizmPreventDefault(), takeUntil(destroy$))
      .subscribe();
  }
}
