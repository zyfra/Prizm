import { OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PrizmTableTreeLoadingDirective implements OnDestroy {
    readonly template: TemplateRef<any>;
    readonly viewContainer: ViewContainerRef;
    constructor(template: TemplateRef<any>, viewContainer: ViewContainerRef);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTableTreeLoadingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTableTreeLoadingDirective, "ng-template[prizmTableTreeLoading]", never, {}, {}, never, never, false, never>;
}
