import { Directive, Inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmHeadDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    ngOnDestroy() {
        this.viewContainer.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmHeadDirective, deps: [{ token: TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmHeadDirective, selector: "[prizmHead]", inputs: { prizmHead: "prizmHead" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmHeadDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmHead]`,
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }, { type: i0.ViewContainerRef }]; }, propDecorators: { prizmHead: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvaGVhZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLeEYsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QixZQUNnQyxRQUE4QyxFQUM1RCxhQUErQjtRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFzQztRQUM1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7SUFDOUMsQ0FBQztJQUVHLFdBQVc7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDOzhHQVhVLGtCQUFrQixrQkFLbkIsV0FBVztrR0FMVixrQkFBa0I7OzJGQUFsQixrQkFBa0I7a0JBSDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzswQkFNSSxNQUFNOzJCQUFDLFdBQVc7MkVBSHJCLFNBQVM7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgW3ByaXptSGVhZF1gLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUhlYWREaXJlY3RpdmU8VCBleHRlbmRzIFBhcnRpYWw8UmVjb3JkPGtleW9mIFQsIGFueT4+PiB7XG4gIEBJbnB1dCgpXG4gIHByaXptSGVhZCE6IGtleW9mIFQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChUZW1wbGF0ZVJlZikgcmVhZG9ubHkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPFJlY29yZDxzdHJpbmcsIHVua25vd24+PixcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICB9XG59XG4iXX0=