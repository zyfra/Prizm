import { __decorate, __metadata } from "tslib";
import { Directive, Inject, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import * as i0 from "@angular/core";
export class PrizmRowDirective {
    static ngTemplateContextGuard(_dir, _ctx) {
        return true;
    }
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
        this.prizmRowOf = [];
        this.prizmRowTrackBy = (i) => {
            return i;
        };
    }
    ngOnDestroy() {
        this.viewContainer.clear();
    }
}
PrizmRowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmRowDirective, deps: [{ token: TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PrizmRowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmRowDirective, selector: "ng-template[prizmRow]", inputs: { prizmRowOf: "prizmRowOf", prizmRowGetRowId: "prizmRowGetRowId", prizmRowGetChildren: "prizmRowGetChildren", prizmRowTrackBy: "prizmRowTrackBy" }, exportAs: ["prizmRow"], ngImport: i0 });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmRowDirective.prototype, "prizmRowOf", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmRowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `ng-template[prizmRow]`,
                    exportAs: 'prizmRow',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }, { type: i0.ViewContainerRef }]; }, propDecorators: { prizmRowOf: [{
                type: Input
            }], prizmRowGetRowId: [{
                type: Input
            }], prizmRowGetChildren: [{
                type: Input
            }], prizmRowTrackBy: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvZGlyZWN0aXZlcy9yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBRUwsV0FBVyxFQUVYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFRbEQsTUFBTSxPQUFPLGlCQUFpQjtJQVdyQixNQUFNLENBQUMsc0JBQXNCLENBQ2xDLElBQTBCLEVBQzFCLElBQWE7UUFFYixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFPRCxZQUNnQyxRQUE4QyxFQUM1RCxhQUErQjtRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFzQztRQUM1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUF0QmpELGVBQVUsR0FBaUIsRUFBRSxDQUFDO1FBZ0I5QixvQkFBZSxHQUF1QixDQUFDLENBQVMsRUFBRSxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDO0lBS0MsQ0FBQztJQUVHLFdBQVc7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs4R0E5QlUsaUJBQWlCLGtCQXdCbEIsV0FBVztrR0F4QlYsaUJBQWlCO0FBQzVCO0lBQ0MsZ0JBQWdCLEVBQUU7O3FEQUNXOzJGQUhuQixpQkFBaUI7a0JBSjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzswQkF5QkksTUFBTTsyQkFBQyxXQUFXOzJFQXJCckIsVUFBVTtzQkFGVCxLQUFLO2dCQUtOLGdCQUFnQjtzQkFEZixLQUFLO2dCQUlOLG1CQUFtQjtzQkFEbEIsS0FBSztnQkFXTixlQUFlO3NCQURkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIFRyYWNrQnlGdW5jdGlvbixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1UYWJsZVJvd0NvbnRleHQgfSBmcm9tICcuLi90YWJsZS50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYG5nLXRlbXBsYXRlW3ByaXptUm93XWAsXG4gIGV4cG9ydEFzOiAncHJpem1Sb3cnLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVJvd0RpcmVjdGl2ZTxUIGV4dGVuZHMgUGFydGlhbDxSZWNvcmQ8a2V5b2YgVCwgYW55Pj4+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwcml6bVJvd09mOiByZWFkb25seSBUW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBwcml6bVJvd0dldFJvd0lkITogc3RyaW5nIHwgKChpOiBUKSA9PiB1bmtub3duKTtcblxuICBASW5wdXQoKVxuICBwcml6bVJvd0dldENoaWxkcmVuITogKGVsZW1lbnQ6IFQpID0+IE9ic2VydmFibGU8VFtdPjtcblxuICBwdWJsaWMgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oXG4gICAgX2RpcjogUHJpem1Sb3dEaXJlY3RpdmU8VD4sXG4gICAgX2N0eDogdW5rbm93blxuICApOiBfY3R4IGlzIFByaXptVGFibGVSb3dDb250ZXh0PFQ+IHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHByaXptUm93VHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPFQ+ID0gKGk6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBpO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoVGVtcGxhdGVSZWYpIHJlYWRvbmx5IHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxQcml6bVRhYmxlUm93Q29udGV4dDxUPj4sXG4gICAgcHVibGljIHJlYWRvbmx5IHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgfVxufVxuIl19