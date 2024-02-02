import { Injector } from '@angular/core';
import { UntypedFormControl, NgControl } from '@angular/forms';
import { PrizmAccessorImplClass } from './prizm-accessor-impl.class';
import * as i0 from "@angular/core";
export declare abstract class PrizmWrappedFormComponent extends PrizmAccessorImplClass {
    readonly injector: Injector;
    readonly ngControl: NgControl;
    readonly formControl: UntypedFormControl;
    constructor(injector: Injector, ngControl: NgControl);
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmWrappedFormComponent, [null, { optional: true; self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmWrappedFormComponent, never, never, {}, {}, never, never, false, never>;
}
