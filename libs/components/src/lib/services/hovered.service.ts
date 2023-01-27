import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { distinctUntilChanged, filter, mapTo, startWith, switchMap, take } from 'rxjs/operators';
import { prizmZoneOptimized } from '../observables/zone-free';
import { prizmTypedFromEvent } from '../observables/typed-from-event';
import { prizmGetActualTarget } from '../util/dom/get-actual-target';

@Injectable({
  providedIn: 'root',
})
export class PrizmHoveredService {
  private readonly documentEvents$: Observable<Event>;

  constructor(@Inject(DOCUMENT) documentRef: Document, @Inject(NgZone) private readonly ngZone: NgZone) {
    this.documentEvents$ = merge(
      prizmTypedFromEvent(documentRef, 'mousemove'),
      prizmTypedFromEvent(documentRef, 'touchstart', { capture: true })
    );
  }

  public createHovered$(
    target: Element,
    options: AddEventListenerOptions = { passive: true }
  ): Observable<boolean> {
    return merge(
      prizmTypedFromEvent(target, 'mouseenter', options),
      prizmTypedFromEvent(target, 'touchstart', options)
    ).pipe(
      switchMap(() =>
        merge(
          prizmTypedFromEvent(target, 'mouseleave', options),
          this.documentEvents$.pipe(
            filter(event => !target.contains(prizmGetActualTarget(event))),
            prizmZoneOptimized(this.ngZone),
            take(1)
          )
        ).pipe(mapTo(false), startWith(true))
      ),
      distinctUntilChanged()
    );
  }
}
