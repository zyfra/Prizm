import { Directive, ElementRef } from '@angular/core';
import { PRIZM_SCROLL_REF } from '../../tokens';

@Directive({
    selector: '[prizmScrollRef]',
    providers: [
        {
            provide: PRIZM_SCROLL_REF,
            useExisting: ElementRef,
        },
    ],
})
export class PrizmScrollRefDirective {}
