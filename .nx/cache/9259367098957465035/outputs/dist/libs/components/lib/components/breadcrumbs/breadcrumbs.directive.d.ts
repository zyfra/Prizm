import { OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmBreadcrumbDirective implements OnDestroy {
    readonly template: TemplateRef<any>;
    private readonly viewContainer;
    constructor(template: TemplateRef<any>, viewContainer: ViewContainerRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmBreadcrumbDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmBreadcrumbDirective, "ng-template[prizmBreadcrumb]", never, {}, {}, never, never, true, never>;
}
