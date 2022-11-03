import { Directive, ElementRef } from '@angular/core';
import { PrizmFocusableElementAccessor, PrizmNativeFocusableElement } from '../../../types/focusable-element-accessor';
import { PrizmAutofocusHandler } from '../autofocus.options';

@Directive()
export abstract class AbstractPrizmAutofocusHandler implements PrizmAutofocusHandler {
    protected constructor(
        protected readonly pzmFocusableComponent: PrizmFocusableElementAccessor | null,
        protected readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    protected get element(): PrizmNativeFocusableElement {
        return (
            this.pzmFocusableComponent?.nativeFocusableElement ||
            this.elementRef.nativeElement
        );
    }

    protected get isTextFieldElement(): boolean {
        return this.element.matches(`input, textarea`);
    }

    abstract setFocus(): void;
}
