import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmResizedDirective {
    private readonly documentRef;
    private readonly elementRef;
    private readonly parentRef;
    readonly prizmResized: import("rxjs").Observable<number>;
    constructor(documentRef: Document, elementRef: ElementRef<HTMLElement>, parentRef: ElementRef<HTMLTableHeaderCellElement>);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmResizedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmResizedDirective, "[prizmResized]", never, {}, { "prizmResized": "prizmResized"; }, never, never, false, never>;
}
