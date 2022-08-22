import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ZUI_SCROLL_INTO_VIEW } from '../../constants/events';
import { zuiRequiredSetter } from '../../decorators/required-setter';
import { zuiCustomEvent } from '../../util/dom/custom-event';

/**
 * Directive scrolls element into view inside zui-scrollbar
 */
@Directive({
    selector: `[zuiScrollIntoView]`,
    providers: [ZuiDestroyService],
})
export class ZuiScrollIntoViewDirective {
    @Input()
    @zuiRequiredSetter()
    set zuiScrollIntoView(scroll: boolean) {
        if (!scroll) {
            return;
        }

        // Timeout is necessary in order to give element render cycle to get into its final spot
        // (for example if it is inside dropdown box which has to be positioned first)
        timer(0)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.elementRef.nativeElement.dispatchEvent(
                    zuiCustomEvent<Element>(
                        ZUI_SCROLL_INTO_VIEW,
                        {
                            bubbles: true,
                            detail: this.elementRef.nativeElement,
                        },
                        this.documentRef,
                    ),
                );
            });
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ZuiDestroyService) private readonly destroy$: Observable<void>,
    ) {}
}
