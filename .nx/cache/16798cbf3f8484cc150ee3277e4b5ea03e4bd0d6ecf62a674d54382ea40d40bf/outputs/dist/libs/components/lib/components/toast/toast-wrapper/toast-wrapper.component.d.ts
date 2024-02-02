import { Injector, OnInit, Type } from '@angular/core';
import { PrizmToastRef } from '../toast-ref';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class ToastWrapperComponent extends PrizmAbstractTestId implements OnInit {
    private readonly injector;
    ref: PrizmToastRef;
    readonly testId_ = "ui_toast_wrapper";
    get getRefId(): string;
    get component(): Type<unknown>;
    tempInjector: Injector;
    constructor(injector: Injector);
    ngOnInit(): void;
    private createInjectorForChild;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastWrapperComponent, "prizm-toast-wrapper", never, { "ref": "ref"; }, {}, never, never, false, never>;
}
