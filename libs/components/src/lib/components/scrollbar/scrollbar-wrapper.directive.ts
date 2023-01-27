import { Directive, ElementRef } from '@angular/core';
import { PRIZM_ELEMENT_REF } from '../../tokens/element-ref';

@Directive({
  selector: '[prizmScrollbarWrapper]',
  providers: [
    {
      provide: PRIZM_ELEMENT_REF,
      useExisting: ElementRef,
    },
  ],
})
export class PrizmScrollbarWrapperDirective {}
