import { Directive, Inject, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmTableEmptyDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    ngOnDestroy() {
        this.viewContainer.clear();
    }
}
PrizmTableEmptyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableEmptyDirective, deps: [{ token: TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PrizmTableEmptyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTableEmptyDirective, selector: "ng-template[prizmTableEmpty]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableEmptyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `ng-template[prizmTableEmpty]`,
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }, { type: i0.ViewContainerRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL2VtcHR5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBYSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzVGLE1BQU0sT0FBTyx3QkFBd0I7SUFDbkMsWUFDZ0MsUUFBOEIsRUFDNUMsYUFBK0I7UUFEakIsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7UUFDNUMsa0JBQWEsR0FBYixhQUFhLENBQWtCO0lBQzlDLENBQUM7SUFFRyxXQUFXO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7cUhBUlUsd0JBQXdCLGtCQUV6QixXQUFXO3lHQUZWLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQUhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7aUJBQ3pDOzswQkFHSSxNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBuZy10ZW1wbGF0ZVtwcml6bVRhYmxlRW1wdHldYCxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1UYWJsZUVtcHR5RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChUZW1wbGF0ZVJlZikgcmVhZG9ubHkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHVua25vd24+LFxuICAgIHB1YmxpYyByZWFkb25seSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge31cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gIH1cbn1cbiJdfQ==