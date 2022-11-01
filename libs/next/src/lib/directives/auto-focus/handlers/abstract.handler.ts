import { Directive, ElementRef } from '@angular/core';
import { PzmFocusableElementAccessor, ZuiNativeFocusableElement } from '../../../types/focusable-element-accessor';
import { ZuiAutofocusHandler } from '../autofocus.options';

@Directive()
export abstract class AbstractZuiAutofocusHandler implements ZuiAutofocusHandler {
    protected constructor(
        protected readonly zuiFocusableComponent: PzmFocusableElementAccessor | null,
        protected readonly elementRef: ElementRef<HTMLElement>,
    ) {}

    protected get element(): ZuiNativeFocusableElement {
        return (
            this.zuiFocusableComponent?.nativeFocusableElement ||
            this.elementRef.nativeElement
        );
    }

    protected get isTextFieldElement(): boolean {
        return this.element.matches(`input, textarea`);
    }

    abstract setFocus(): void;
}
