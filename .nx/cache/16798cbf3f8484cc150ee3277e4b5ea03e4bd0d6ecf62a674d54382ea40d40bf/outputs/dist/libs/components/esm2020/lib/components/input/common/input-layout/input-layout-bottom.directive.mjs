import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmInputLayoutBottomDirective {
    constructor(templateRef, view) {
        this.templateRef = templateRef;
        this.view = view;
    }
    ngOnDestroy() {
        this.view.clear();
    }
}
PrizmInputLayoutBottomDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutBottomDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
PrizmInputLayoutBottomDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputLayoutBottomDirective, selector: "ng-template[prizmInputLayoutBottom]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutBottomDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[prizmInputLayoutBottom]',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LWJvdHRvbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2NvbW1vbi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LWJvdHRvbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS3pFLE1BQU0sT0FBTywrQkFBK0I7SUFDMUMsWUFBNEIsV0FBaUMsRUFBa0IsSUFBc0I7UUFBekUsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQWtCLFNBQUksR0FBSixJQUFJLENBQWtCO0lBQUcsQ0FBQztJQUV6RyxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs0SEFMVSwrQkFBK0I7Z0hBQS9CLCtCQUErQjsyRkFBL0IsK0JBQStCO2tCQUgzQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQ0FBcUM7aUJBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtwcml6bUlucHV0TGF5b3V0Qm90dG9tXScsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRMYXlvdXRCb3R0b21EaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHVua25vd24+LCBwdWJsaWMgcmVhZG9ubHkgdmlldzogVmlld0NvbnRhaW5lclJlZikge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnZpZXcuY2xlYXIoKTtcbiAgfVxufVxuIl19