import { ElementRef, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
export declare class PrizmElementReadyDirective implements OnInit {
    private readonly element;
    private destroy$;
    readonly ready$: ReplaySubject<boolean>;
    readonly interval: number;
    checker: (el: ElementRef) => boolean;
    constructor(element: ElementRef<HTMLInputElement>, destroy$: PrizmDestroyService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmElementReadyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmElementReadyDirective, "[prizmElementReady]", ["prizmElementReady"], { "interval": "interval"; "checker": "checker"; }, { "ready$": "ready$"; }, never, never, true, never>;
}
