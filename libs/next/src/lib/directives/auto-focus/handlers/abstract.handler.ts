import { Directive, ElementRef } from '@angular/core';
import { PzmFocusableElementAccessor, PzmNativeFocusableElement } from '../../../types/focusable-element-accessor';
import { PzmAutofocusHandler } from '../autofocus.options';

@Directive()
export abstract class AbstractPzmAutofocusHandler implements PzmAutofocusHandler {
    protected constructor(
        protected readonly pzmFocusableComponent: PzmFocusableElementAccessor | null,
        protected readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    protected get element(): PzmNativeFocusableElement {
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
