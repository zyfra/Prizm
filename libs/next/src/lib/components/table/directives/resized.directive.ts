import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Output } from '@angular/core';

import { TUI_ELEMENT_REF } from '@taiga-ui/core';
import { distinctUntilChanged, map, switchMap, takeUntil } from 'rxjs/operators';
import { tuiPreventDefault, tuiTypedFromEvent } from '../observables/typed-from-event';

@Directive({
  selector: `[prizmResized]`,
})
export class PrizmResizedDirective {
  @Output()
  readonly prizmResized = tuiTypedFromEvent(this.elementRef.nativeElement, `mousedown`).pipe(
    tuiPreventDefault(),
    switchMap(() => {
      const { width, right } = this.parentRef.nativeElement.getBoundingClientRect();

      return tuiTypedFromEvent(this.documentRef, `mousemove`).pipe(
        distinctUntilChanged(),
        map(({ clientX }) => width + clientX - right),
        takeUntil(tuiTypedFromEvent(this.documentRef, `mouseup`))
      );
    })
  );

  constructor(
    @Inject(DOCUMENT) private readonly documentRef: Document,
    @Inject(ElementRef)
    private readonly elementRef: ElementRef<HTMLElement>,
    @Inject(TUI_ELEMENT_REF)
    private readonly parentRef: ElementRef<HTMLTableHeaderCellElement>
  ) {}
}
