import { Directive, ElementRef, Inject, Output } from '@angular/core';
import { pzmPressedObservable } from '../../observables/pressed-observable';
import { PZM_TAKE_ONLY_TRUSTED_EVENTS } from '../../tokens/take-only-trusted-events';

@Directive({
    selector: '[pzmPressedChange]',
})
export class PzmPressedDirective {
    @Output()
    readonly pzmPressedChange = pzmPressedObservable(this.elementRef.nativeElement, {
        onlyTrusted: this.takeOnlyTrustedEvents,
    });

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
        @Inject(PZM_TAKE_ONLY_TRUSTED_EVENTS)
        private readonly takeOnlyTrustedEvents: boolean,
    ) {}
}
