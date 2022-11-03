import { Directive, ElementRef } from '@angular/core';
import { PZM_SCROLL_REF } from '../../tokens';

@Directive({
    selector: '[pzmScrollRef]',
    providers: [
        {
            provide: PZM_SCROLL_REF,
            useExisting: ElementRef,
        },
    ],
})
export class PrizmScrollRefDirective {}
