import { Directive, Inject, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmTableLoadingDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    ngOnDestroy() {
        this.viewContainer.clear();
    }
}
PrizmTableLoadingDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableLoadingDirective, deps: [{ token: TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PrizmTableLoadingDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTableLoadingDirective, selector: "ng-template[prizmTableLoading]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableLoadingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `ng-template[prizmTableLoading]`,
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }, { type: i0.ViewContainerRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvbG9hZGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQWEsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUs1RixNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBQ2dDLFFBQThCLEVBQzVDLGFBQStCO1FBRGpCLGFBQVEsR0FBUixRQUFRLENBQXNCO1FBQzVDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUM5QyxDQUFDO0lBRUcsV0FBVztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7O3VIQVJVLDBCQUEwQixrQkFFM0IsV0FBVzsyR0FGViwwQkFBMEI7MkZBQTFCLDBCQUEwQjtrQkFIdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2lCQUMzQzs7MEJBR0ksTUFBTTsyQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgbmctdGVtcGxhdGVbcHJpem1UYWJsZUxvYWRpbmddYCxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1UYWJsZUxvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRlbXBsYXRlUmVmKSByZWFkb25seSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dW5rbm93bj4sXG4gICAgcHVibGljIHJlYWRvbmx5IHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgfVxufVxuIl19