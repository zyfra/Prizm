import { Directive, Inject, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmTableTreeLoadingDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    ngOnDestroy() {
        this.viewContainer.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTableTreeLoadingDirective, deps: [{ token: TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTableTreeLoadingDirective, selector: "ng-template[prizmTableTreeLoading]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTableTreeLoadingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `ng-template[prizmTableTreeLoading]`,
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }, { type: i0.ViewContainerRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1sb2FkaW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvZGlyZWN0aXZlcy90cmVlLWxvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFhLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLNUYsTUFBTSxPQUFPLDhCQUE4QjtJQUN6QyxZQUNnQyxRQUEwQixFQUN4QyxhQUErQjtRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUN4QyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7SUFDOUMsQ0FBQztJQUVHLFdBQVc7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDOzhHQVJVLDhCQUE4QixrQkFFL0IsV0FBVztrR0FGViw4QkFBOEI7OzJGQUE5Qiw4QkFBOEI7a0JBSDFDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztpQkFDL0M7OzBCQUdJLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYG5nLXRlbXBsYXRlW3ByaXptVGFibGVUcmVlTG9hZGluZ11gLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRhYmxlVHJlZUxvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRlbXBsYXRlUmVmKSByZWFkb25seSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICB9XG59XG4iXX0=