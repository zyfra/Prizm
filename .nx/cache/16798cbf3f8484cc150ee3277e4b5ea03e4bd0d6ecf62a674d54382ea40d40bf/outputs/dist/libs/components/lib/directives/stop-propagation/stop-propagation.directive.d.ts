import { ElementRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
export declare class PrizmStopPropagationDirective {
    constructor({ nativeElement }: ElementRef<HTMLElement>, ngZone: NgZone, destroy$: Observable<void>, eventName: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmStopPropagationDirective, [null, null, null, { attribute: "prizmStopPropagation"; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmStopPropagationDirective, "[prizmStopPropagation]", never, {}, {}, never, never, false, never>;
}
