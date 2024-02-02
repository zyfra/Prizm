import { OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmTableLoadingDirective implements OnDestroy {
    readonly template: TemplateRef<unknown>;
    readonly viewContainer: ViewContainerRef;
    constructor(template: TemplateRef<unknown>, viewContainer: ViewContainerRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTableLoadingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTableLoadingDirective, "ng-template[prizmTableLoading]", never, {}, {}, never, never, false, never>;
}
