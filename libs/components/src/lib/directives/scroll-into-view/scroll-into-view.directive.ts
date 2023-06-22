import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PRIZM_SCROLL_INTO_VIEW } from '../../constants/events';
import { prizmRequiredSetter } from '@prizm-ui/core';
import { prizmCustomEvent } from '../../util/dom/custom-event';

/**
 * Directive scrolls element into view inside prizm-scrollbar
 */
@Directive({
  selector: `[prizmScrollIntoView]`,
  providers: [PrizmDestroyService],
})
export class PrizmScrollIntoViewDirective {
  @Input()
  @prizmRequiredSetter()
  set prizmScrollIntoView(scroll: boolean) {
    if (!scroll) {
      return;
    }

    // Timeout is necessary in order to give element render cycle to get into its final spot
    // (for example if it is inside dropdown box which has to be positioned first)
    timer(0)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.elementRef.nativeElement.dispatchEvent(
          prizmCustomEvent<Element>(
            PRIZM_SCROLL_INTO_VIEW,
            {
              bubbles: true,
              detail: this.elementRef.nativeElement,
            },
            this.documentRef
          )
        );
      });
  }

  constructor(
    @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
    @Inject(DOCUMENT) private readonly documentRef: Document,
    @Inject(PrizmDestroyService) private readonly destroy$: Observable<void>
  ) {}
}
