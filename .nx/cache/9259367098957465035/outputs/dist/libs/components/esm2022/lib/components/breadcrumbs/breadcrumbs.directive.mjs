import { Directive, Inject, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
export class PrizmBreadcrumbDirective {
    constructor(template, viewContainer) {
        this.template = template;
        this.viewContainer = viewContainer;
    }
    ngOnDestroy() {
        this.viewContainer.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmBreadcrumbDirective, deps: [{ token: TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmBreadcrumbDirective, isStandalone: true, selector: "ng-template[prizmBreadcrumb]", providers: [PrizmDestroyService], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmBreadcrumbDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[prizmBreadcrumb]',
                    providers: [PrizmDestroyService],
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }] }, { type: i0.ViewContainerRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQWEsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQU94RCxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQ2dDLFFBQTBCLEVBQ3ZDLGFBQStCO1FBRGxCLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtJQUMvQyxDQUFDO0lBRUcsV0FBVztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7OEdBUlUsd0JBQXdCLGtCQUV6QixXQUFXO2tHQUZWLHdCQUF3QiwyRUFIeEIsQ0FBQyxtQkFBbUIsQ0FBQzs7MkZBR3JCLHdCQUF3QjtrQkFMcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDaEMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkFHSSxNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdCwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbcHJpem1CcmVhZGNydW1iXScsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUJyZWFkY3J1bWJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFRlbXBsYXRlUmVmKSByZWFkb25seSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgfVxufVxuIl19