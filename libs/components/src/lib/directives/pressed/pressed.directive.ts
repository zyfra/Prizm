import { Directive, ElementRef, Inject, Output } from '@angular/core';
import { prizmPressedObservable } from '../../observables/pressed-observable';
import { PRIZM_TAKE_ONLY_TRUSTED_EVENTS } from '../../tokens/take-only-trusted-events';

@Directive({
    selector: '[prizmPressedChange]',
})
export class PrizmPressedDirective {
    @Output()
    readonly prizmPressedChange = prizmPressedObservable(this.elementRef.nativeElement, {
        onlyTrusted: this.takeOnlyTrustedEvents,
    });

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
        @Inject(PRIZM_TAKE_ONLY_TRUSTED_EVENTS)
        private readonly takeOnlyTrustedEvents: boolean,
    ) {}
}
