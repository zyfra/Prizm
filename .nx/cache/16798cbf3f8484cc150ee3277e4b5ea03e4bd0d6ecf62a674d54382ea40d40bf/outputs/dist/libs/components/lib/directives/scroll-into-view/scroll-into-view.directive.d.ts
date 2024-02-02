import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Directive scrolls element into view inside prizm-scrollbar
 */
export declare class PrizmScrollIntoViewDirective {
    private readonly elementRef;
    private readonly documentRef;
    private readonly destroy$;
    set prizmScrollIntoView(scroll: boolean);
    constructor(elementRef: ElementRef<Element>, documentRef: Document, destroy$: Observable<void>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmScrollIntoViewDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmScrollIntoViewDirective, "[prizmScrollIntoView]", never, { "prizmScrollIntoView": "prizmScrollIntoView"; }, {}, never, never, true, never>;
}
