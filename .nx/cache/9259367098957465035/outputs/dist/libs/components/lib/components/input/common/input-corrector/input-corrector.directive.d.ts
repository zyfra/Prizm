import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PrizmInputCorrectorDirective implements OnInit {
    private readonly el;
    private ngControl;
    private cdr;
    private destroy$;
    private readonly inputs$;
    corrector: ((value: string) => string) | null;
    needCorrect: (value: string) => boolean;
    onInputOrPaste(): void | false;
    constructor(el: ElementRef<HTMLInputElement>, ngControl: NgControl, cdr: ChangeDetectorRef, destroy$: PrizmDestroyService);
    private overrideSetValue;
    private correctValue;
    private updateNativeValue;
    private updateNgValue;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputCorrectorDirective, [null, { optional: true; self: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputCorrectorDirective, "[prizmInputCorrector]", never, { "corrector": { "alias": "prizmInputCorrector"; "required": false; }; "needCorrect": { "alias": "needCorrect"; "required": false; }; }, {}, never, never, false, never>;
}
