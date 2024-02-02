import { ElementRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Directive to monitor focus/blur status, works with focusIn/focus-out
 * instead of focus/blur to sync events order with Internet Explorer and
 * other focus related directives that require bubbling
 */
export declare class PrizmFocusedDirective {
    readonly prizmFocusedChange: Observable<boolean>;
    constructor({ nativeElement }: ElementRef<HTMLElement>, ngZone: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmFocusedDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmFocusedDirective, "[prizmFocusedChange]", never, {}, { "prizmFocusedChange": "prizmFocusedChange"; }, never, never, false, never>;
}
