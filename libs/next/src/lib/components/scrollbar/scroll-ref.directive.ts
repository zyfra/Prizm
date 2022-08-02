import { Directive, ElementRef } from '@angular/core';
import { ZUI_SCROLL_REF } from '../../tokens';

@Directive({
    selector: '[zuiScrollRef]',
    providers: [
        {
            provide: ZUI_SCROLL_REF,
            useExisting: ElementRef,
        },
    ],
})
export class ZuiScrollRefDirective {}
