import { Directive, ElementRef, Inject, NgZone, Output } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { distinctUntilChanged, map, skip, startWith } from 'rxjs/operators';
import { prizmZoneOptimized } from '../../observables/zone-free';
import { prizmTypedFromEvent } from '../../observables/typed-from-event';
import { prizmIsNativeFocused } from '../../util';

/**
 * Directive to monitor focus/blur status, works with focusIn/focus-out
 * instead of focus/blur to sync events order with Internet Explorer and
 * other focus related directives that require bubbling
 */
@Directive({
  selector: '[prizmFocusedChange]',
})
export class PrizmFocusedDirective {
  @Output()
  readonly prizmFocusedChange: Observable<boolean>;

  constructor(
    @Inject(ElementRef)
    { nativeElement }: ElementRef<HTMLElement>,
    @Inject(NgZone) ngZone: NgZone
  ) {
    this.prizmFocusedChange = merge(
      prizmTypedFromEvent(nativeElement, 'focusin'),
      prizmTypedFromEvent(nativeElement, 'focusout')
    ).pipe(
      map(() => prizmIsNativeFocused(nativeElement)),
      startWith(false),
      distinctUntilChanged(),
      skip(1),
      prizmZoneOptimized(ngZone)
    );
  }
}
