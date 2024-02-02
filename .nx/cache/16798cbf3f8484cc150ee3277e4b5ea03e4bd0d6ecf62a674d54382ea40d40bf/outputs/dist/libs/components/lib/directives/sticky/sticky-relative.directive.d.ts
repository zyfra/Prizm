import { ElementRef, OnInit } from '@angular/core';
import { PrizmStickyRelativeService } from './sticky-relative.service';
import * as i0 from "@angular/core";
export declare class PrizmStickyRelativeDirective implements OnInit {
    private readonly stickyRelativeService;
    private readonly elRef;
    constructor(stickyRelativeService: PrizmStickyRelativeService, elRef: ElementRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmStickyRelativeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmStickyRelativeDirective, "[prizmStickyRelative]", never, {}, {}, never, never, false, never>;
}
