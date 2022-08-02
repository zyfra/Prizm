import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostBinding, HostListener, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { zuiBlurNativeFocused, zuiGetNativeFocused, zuiSetNativeFocused } from '../../util';
import { zuiContainsOrAfter } from '../../util/dom';
import { zuiGetClosestFocusable } from '../../util/get-closest-keyboard-focusable';

@Directive({
    selector: '[zuiFocusTrap]',
})
export class ZuiFocusTrapDirective implements OnDestroy {
    private readonly activeElement = zuiGetNativeFocused(this.documentRef);

    @HostBinding('tabIndex') public tabIndex = 0;

    constructor(
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
    ) {
        /**
         * This would cause currently focused element to lose focus,
         * but it might cause ExpressionChanged error due to potential HostBinding.
         * Microtask keeps it in the same frame but allows change detection to run
         */
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(() => {
            zuiSetNativeFocused(this.elementRef.nativeElement);
        });
    }

    @HostListener('blur')
    public onBlur(): void {
        this.renderer.removeAttribute(this.elementRef.nativeElement, 'tabIndex');
    }

    @HostListener('window:focusin.silent', ['$event.target'])
    public onFocusIn(node: Node): void {
        if (zuiContainsOrAfter(this.elementRef.nativeElement, node)) {
            return;
        }

        const focusable = zuiGetClosestFocusable(
            this.elementRef.nativeElement,
            false,
            this.elementRef.nativeElement,
        );

        if (focusable) {
            zuiSetNativeFocused(focusable);
        }
    }

    ngOnDestroy(): void {
        zuiBlurNativeFocused(this.documentRef);

        /**
         * HostListeners are triggered even after ngOnDestroy
         * {@link https://github.com/angular/angular/issues/38100}
         * so we need to delay it but stay in the same sync cycle,
         * therefore using Promise instead of setTimeout
         */
        // eslint-disable-next-line
        Promise.resolve().then(() => {
            if (this.activeElement instanceof HTMLElement) {
                zuiSetNativeFocused(this.activeElement);
            }
        });
    }
}
