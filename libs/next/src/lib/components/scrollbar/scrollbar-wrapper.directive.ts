import { Directive, ElementRef } from '@angular/core';
import { PZM_ELEMENT_REF } from '../../tokens/element-ref';

@Directive({
    selector: '[pzmScrollbarWrapper]',
    providers: [
        {
          provide: PZM_ELEMENT_REF,
          useExisting: ElementRef,
        },
    ],
})
export class PzmScrollbarWrapperDirective {}
