import { PolymorphContent } from '../../../directives/polymorph';
import { PrizmToastRef } from '../toast-ref';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class ToastComponent extends PrizmAbstractTestId {
    readonly toastRef: PrizmToastRef;
    readonly testId_ = "ui_toast_single";
    get context(): Record<string, any>;
    get temp(): PolymorphContent;
    constructor(toastRef: PrizmToastRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "prizm-toast-single", never, {}, {}, never, never, false, never>;
}
