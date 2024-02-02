import { ElementRef, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmOverscrollMode } from './overscroll.model';
import { PrizmOverscrollService } from './overscroll.service';
import * as i0 from "@angular/core";
/**
 * Directive to isolate scrolling, i.e. prevent body scroll behind modal dialog
 */
export declare class PrizmOverscrollDirective implements OnInit {
    private readonly elRef;
    private readonly overscrollService;
    private readonly destroy$;
    mode: PrizmOverscrollMode | '';
    get enabled(): boolean;
    get overscrollBehavior(): 'contain' | null;
    constructor(elRef: ElementRef<HTMLElement>, overscrollService: PrizmOverscrollService, destroy$: PrizmDestroyService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmOverscrollDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmOverscrollDirective, "[prizmOverscroll]", never, { "mode": "prizmOverscroll"; }, {}, never, never, true, never>;
}
