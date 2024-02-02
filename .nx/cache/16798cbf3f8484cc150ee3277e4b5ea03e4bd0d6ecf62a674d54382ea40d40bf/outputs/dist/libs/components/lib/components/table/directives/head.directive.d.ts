import { TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmHeadDirective<T extends Partial<Record<keyof T, any>>> {
    readonly template: TemplateRef<Record<string, unknown>>;
    readonly viewContainer: ViewContainerRef;
    prizmHead: keyof T;
    constructor(template: TemplateRef<Record<string, unknown>>, viewContainer: ViewContainerRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmHeadDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmHeadDirective<any>, "[prizmHead]", never, { "prizmHead": "prizmHead"; }, {}, never, never, false, never>;
}
