import { Directive, Injector, Optional, Self } from '@angular/core';
import { UntypedFormControl, NgControl } from '@angular/forms';
import { PrizmAccessorImplClass } from './prizm-accessor-impl.class';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class PrizmWrappedFormComponent extends PrizmAccessorImplClass {
    constructor(injector, ngControl) {
        super();
        this.injector = injector;
        this.ngControl = ngControl;
        this.formControl = new UntypedFormControl();
        if (ngControl != null) {
            ngControl.valueAccessor = this;
            this.formControl = ngControl.control;
        }
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.formControl.disable({ emitEvent: false });
        }
        else {
            this.formControl.enable({ emitEvent: false });
        }
        super.setDisabledState(this.accessorIsDisabled);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmWrappedFormComponent, deps: [{ token: i0.Injector }, { token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmWrappedFormComponent, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmWrappedFormComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0td3JhcHBlZC1mb3JtLWNvbXBvbmVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9AY29yZS92YWx1ZS1hY2Nlc3Nvci9wcml6bS13cmFwcGVkLWZvcm0tY29tcG9uZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBR3JFLE1BQU0sT0FBZ0IseUJBQTBCLFNBQVEsc0JBQXNCO0lBRzVFLFlBQTRCLFFBQWtCLEVBQXNDLFNBQW9CO1FBQ3RHLEtBQUssRUFBRSxDQUFDO1FBRGtCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBc0MsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUZ4RixnQkFBVyxHQUF1QixJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFLekUsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3JCLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLE9BQTZCLENBQUM7U0FDNUQ7SUFDSCxDQUFDO0lBRWUsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEQsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OEdBbkJtQix5QkFBeUI7a0dBQXpCLHlCQUF5Qjs7MkZBQXpCLHlCQUF5QjtrQkFEOUMsU0FBUzs7MEJBSXlDLFFBQVE7OzBCQUFJLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdG9yLCBPcHRpb25hbCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1Db250cm9sLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcml6bUFjY2Vzc29ySW1wbENsYXNzIH0gZnJvbSAnLi9wcml6bS1hY2Nlc3Nvci1pbXBsLmNsYXNzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJpem1XcmFwcGVkRm9ybUNvbXBvbmVudCBleHRlbmRzIFByaXptQWNjZXNzb3JJbXBsQ2xhc3Mge1xuICBwdWJsaWMgcmVhZG9ubHkgZm9ybUNvbnRyb2w6IFVudHlwZWRGb3JtQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLCBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByZWFkb25seSBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAobmdDb250cm9sICE9IG51bGwpIHtcbiAgICAgIG5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wgPSBuZ0NvbnRyb2wuY29udHJvbCBhcyBVbnR5cGVkRm9ybUNvbnRyb2w7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLmRpc2FibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1Db250cm9sLmVuYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgfVxuICAgIHN1cGVyLnNldERpc2FibGVkU3RhdGUodGhpcy5hY2Nlc3NvcklzRGlzYWJsZWQpO1xuICB9XG59XG4iXX0=