import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 *
 * */
export declare class PrizmPressedDirective {
    private readonly elementRef;
    private readonly takeOnlyTrustedEvents;
    readonly prizmPressedChange: import("rxjs").Observable<boolean>;
    constructor(elementRef: ElementRef<Element>, takeOnlyTrustedEvents: boolean);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmPressedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmPressedDirective, "[prizmPressedChange]", never, {}, { "prizmPressedChange": "prizmPressedChange"; }, never, never, true, never>;
}
