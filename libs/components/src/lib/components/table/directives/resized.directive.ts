import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Output } from '@angular/core';

import { distinctUntilChanged, map, switchMap, takeUntil } from 'rxjs/operators';
import { prizmTypedFromEvent } from '../observables/typed-from-event';
import { prizmPreventDefault } from '../../../observables';
import { PRIZM_ELEMENT_REF } from '../../../tokens/element-ref';

@Directive({
  selector: `[prizmResized]`,
})
export class PrizmResizedDirective {
  @Output()
  readonly prizmResized = prizmTypedFromEvent(this.elementRef.nativeElement, `mousedown`).pipe(
    prizmPreventDefault(),
    switchMap(() => {
      const { width, right } = this.parentRef.nativeElement.getBoundingClientRect();

      return prizmTypedFromEvent(this.documentRef, `mousemove`).pipe(
        distinctUntilChanged(),
        map(({ clientX }) => width + clientX - right),
        takeUntil(prizmTypedFromEvent(this.documentRef, `mouseup`))
      );
    })
  );

  constructor(
    @Inject(DOCUMENT) private readonly documentRef: Document,
    @Inject(ElementRef)
    private readonly elementRef: ElementRef<HTMLElement>,
    @Inject(PRIZM_ELEMENT_REF)
    private readonly parentRef: ElementRef<HTMLTableHeaderCellElement>
  ) {}
}
