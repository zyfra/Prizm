import { AfterViewInit } from '@angular/core';
import { PrizmAutofocusHandler } from './autofocus.options';
import * as i0 from "@angular/core";
export declare class PrizmAutoFocusDirective implements AfterViewInit {
    private readonly handler;
    autoFocus: boolean;
    constructor(handler: PrizmAutofocusHandler);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmAutoFocusDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmAutoFocusDirective, "[prizmAutoFocus]", never, { "autoFocus": { "alias": "autoFocus"; "required": false; }; }, {}, never, never, false, never>;
}
