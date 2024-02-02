import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmProgressColorSegmentsDirective {
    private readonly elementRef;
    private readonly resize$;
    private readonly userAgent;
    private readonly isOldBrowsers;
    prizmProgressColorSegments: string[];
    get calcSegments$(): Observable<string>;
    constructor(elementRef: ElementRef<HTMLProgressElement>, resize$: Observable<unknown>, userAgent: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmProgressColorSegmentsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmProgressColorSegmentsDirective, "progress[prizmProgressBar][prizmProgressColorSegments]", never, { "prizmProgressColorSegments": "prizmProgressColorSegments"; }, {}, never, never, true, never>;
}
