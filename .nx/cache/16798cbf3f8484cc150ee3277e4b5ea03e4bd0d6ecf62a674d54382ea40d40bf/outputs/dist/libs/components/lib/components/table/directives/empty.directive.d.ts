import { OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmTableEmptyDirective implements OnDestroy {
    readonly template: TemplateRef<unknown>;
    readonly viewContainer: ViewContainerRef;
    constructor(template: TemplateRef<unknown>, viewContainer: ViewContainerRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTableEmptyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTableEmptyDirective, "ng-template[prizmTableEmpty]", never, {}, {}, never, never, false, never>;
}
