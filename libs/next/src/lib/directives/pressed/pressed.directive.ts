import {Directive, ElementRef, Inject, Output} from '@angular/core';
import { zuiPressedObservable } from '../../observables/pressed-observable';
import { ZUI_TAKE_ONLY_TRUSTED_EVENTS } from '../../tokens/take-only-trusted-events';

@Directive({
    selector: '[zuiPressedChange]',
})
export class ZuiPressedDirective {
    @Output()
    readonly zuiPressedChange = zuiPressedObservable(this.elementRef.nativeElement, {
        onlyTrusted: this.takeOnlyTrustedEvents,
    });

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
        @Inject(ZUI_TAKE_ONLY_TRUSTED_EVENTS)
        private readonly takeOnlyTrustedEvents: boolean,
    ) {}
}
