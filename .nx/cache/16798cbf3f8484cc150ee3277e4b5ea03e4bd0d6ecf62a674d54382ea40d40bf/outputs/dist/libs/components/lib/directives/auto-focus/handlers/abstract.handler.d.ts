import { ElementRef } from '@angular/core';
import { PrizmFocusableElementAccessor, PrizmNativeFocusableElement } from '../../../types/focusable-element-accessor';
import { PrizmAutofocusHandler } from '../autofocus.options';
import * as i0 from "@angular/core";
export declare abstract class AbstractPrizmAutofocusHandler implements PrizmAutofocusHandler {
    protected readonly prizmFocusableComponent: PrizmFocusableElementAccessor | null;
    protected readonly elementRef: ElementRef<HTMLElement>;
    protected constructor(prizmFocusableComponent: PrizmFocusableElementAccessor | null, elementRef: ElementRef<HTMLElement>);
    protected get element(): PrizmNativeFocusableElement;
    protected get isTextFieldElement(): boolean;
    abstract setFocus(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractPrizmAutofocusHandler, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AbstractPrizmAutofocusHandler, never, never, {}, {}, never, never, false, never>;
}
