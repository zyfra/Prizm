import { ElementRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
export declare class PrizmPreventDefaultDirective {
    constructor({ nativeElement }: ElementRef<HTMLElement>, ngZone: NgZone, destroy$: Observable<void>, eventName: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmPreventDefaultDirective, [null, null, null, { attribute: "prizmPreventDefault"; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmPreventDefaultDirective, "[prizmPreventDefault]", never, {}, {}, never, never, true, never>;
}
