import { Directive, ElementRef, forwardRef } from '@angular/core';
import { ZUI_ELEMENT_REF } from '../../tokens/element-ref';

@Directive({
    selector: '[zuiScrollbarWrapper]',
    providers: [
        {
          provide: ZUI_ELEMENT_REF,
          useExisting: ElementRef,
        },
    ],
})
export class ZuiScrollbarWrapperDirective {}
