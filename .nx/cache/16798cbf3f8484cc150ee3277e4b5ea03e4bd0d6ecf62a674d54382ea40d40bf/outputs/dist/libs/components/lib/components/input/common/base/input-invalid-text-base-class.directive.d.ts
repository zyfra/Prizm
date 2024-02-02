import { Injector, OnInit } from '@angular/core';
import { PrizmInputControl } from './input-control.class';
import * as i0 from "@angular/core";
export declare abstract class InputInvalidTextBaseClass {
    /**
     * Gets invalid text
     */
    abstract getText(firstInvalidKey: string, control?: PrizmInputControl<unknown>): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputInvalidTextBaseClass, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputInvalidTextBaseClass, never, never, {}, {}, never, never, false, never>;
}
export declare class DefaultInputInvalidTextClass extends InputInvalidTextBaseClass implements OnInit {
    protected readonly injector: Injector;
    control?: PrizmInputControl<unknown>;
    invalidText: string;
    private readonly cdr;
    private readonly destroy$;
    private readonly validationTexts;
    constructor(injector: Injector);
    ngOnInit(): void;
    getText(firstInvalidKey: string): string;
    private actualizeText;
    protected setInvalidText(text: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultInputInvalidTextClass, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DefaultInputInvalidTextClass, never, never, { "control": "control"; }, {}, never, never, false, never>;
}
