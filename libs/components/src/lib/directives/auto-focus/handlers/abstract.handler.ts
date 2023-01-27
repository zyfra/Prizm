import { Directive, ElementRef } from '@angular/core';
import {
  PrizmFocusableElementAccessor,
  PrizmNativeFocusableElement,
} from '../../../types/focusable-element-accessor';
import { PrizmAutofocusHandler } from '../autofocus.options';

@Directive()
export abstract class AbstractPrizmAutofocusHandler implements PrizmAutofocusHandler {
  protected constructor(
    protected readonly prizmFocusableComponent: PrizmFocusableElementAccessor | null,
    protected readonly elementRef: ElementRef<HTMLElement>
  ) {}

  protected get element(): PrizmNativeFocusableElement {
    return this.prizmFocusableComponent?.nativeFocusableElement || this.elementRef.nativeElement;
  }

  protected get isTextFieldElement(): boolean {
    return this.element.matches(`input, textarea`);
  }

  abstract setFocus(): void;
}
