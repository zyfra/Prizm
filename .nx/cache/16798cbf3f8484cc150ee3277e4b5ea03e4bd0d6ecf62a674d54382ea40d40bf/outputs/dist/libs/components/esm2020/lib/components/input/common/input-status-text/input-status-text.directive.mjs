import { Directive, Injector, Input, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { DefaultInputInvalidTextClass } from '../base/input-invalid-text-base-class.directive';
import * as i0 from "@angular/core";
export class PrizmInputStatusTextDirective extends DefaultInputInvalidTextClass {
    constructor(injector) {
        super(injector);
        this.enable = true;
        this.changed = new Subject();
        this.templateRef = injector.get(TemplateRef);
    }
    setInvalidText(text) {
        super.setInvalidText(text);
        this.changed.next();
    }
    getStatusMessage() {
        return this.invalidText || this.templateRef;
    }
}
PrizmInputStatusTextDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputStatusTextDirective, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Directive });
PrizmInputStatusTextDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputStatusTextDirective, selector: "[prizmInputStatusText]", inputs: { enable: "enable", status: "status" }, providers: [PrizmDestroyService], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputStatusTextDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmInputStatusText]',
                    providers: [PrizmDestroyService],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; }, propDecorators: { enable: [{
                type: Input
            }], status: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc3RhdHVzLXRleHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jb21tb24vaW5wdXQtc3RhdHVzLXRleHQvaW5wdXQtc3RhdHVzLXRleHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFRL0YsTUFBTSxPQUFPLDZCQUE4QixTQUFRLDRCQUE0QjtJQU03RSxZQUFZLFFBQWtCO1FBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQU5ULFdBQU0sR0FBRyxJQUFJLENBQUM7UUFHUCxZQUFPLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7UUFLM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFa0IsY0FBYyxDQUFDLElBQVk7UUFDNUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDOUMsQ0FBQzs7MEhBcEJVLDZCQUE2Qjs4R0FBN0IsNkJBQTZCLGlHQUY3QixDQUFDLG1CQUFtQixDQUFDOzJGQUVyQiw2QkFBNkI7a0JBSnpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2pDOytGQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEluamVjdG9yLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBEZWZhdWx0SW5wdXRJbnZhbGlkVGV4dENsYXNzIH0gZnJvbSAnLi4vYmFzZS9pbnB1dC1pbnZhbGlkLXRleHQtYmFzZS1jbGFzcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9seW1vcnBoQ29udGVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RpcmVjdGl2ZXMvcG9seW1vcnBoJztcbmltcG9ydCB7IFByaXptSW5wdXRTdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvcHJpem0taW5wdXQubW9kZWxzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptSW5wdXRTdGF0dXNUZXh0XScsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0U3RhdHVzVGV4dERpcmVjdGl2ZSBleHRlbmRzIERlZmF1bHRJbnB1dEludmFsaWRUZXh0Q2xhc3Mge1xuICBASW5wdXQoKSBlbmFibGUgPSB0cnVlO1xuICBASW5wdXQoKSBzdGF0dXM/OiBQcml6bUlucHV0U3RhdHVzO1xuICBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XG4gIHB1YmxpYyByZWFkb25seSBjaGFuZ2VkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG5cbiAgICB0aGlzLnRlbXBsYXRlUmVmID0gaW5qZWN0b3IuZ2V0KFRlbXBsYXRlUmVmKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBzZXRJbnZhbGlkVGV4dCh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBzdXBlci5zZXRJbnZhbGlkVGV4dCh0ZXh0KTtcblxuICAgIHRoaXMuY2hhbmdlZC5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3RhdHVzTWVzc2FnZSgpOiBQb2x5bW9ycGhDb250ZW50IHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkVGV4dCB8fCB0aGlzLnRlbXBsYXRlUmVmO1xuICB9XG59XG4iXX0=