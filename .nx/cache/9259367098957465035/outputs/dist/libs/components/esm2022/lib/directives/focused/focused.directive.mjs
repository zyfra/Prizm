import { Directive, ElementRef, Inject, NgZone, Output } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { distinctUntilChanged, map, skip, startWith } from 'rxjs/operators';
import { prizmZoneOptimized } from '../../observables/zone-free';
import { prizmTypedFromEvent } from '../../observables/typed-from-event';
import { prizmIsNativeFocused } from '../../util';
import * as i0 from "@angular/core";
/**
 * Directive to monitor focus/blur status, works with focusIn/focus-out
 * instead of focus/blur to sync events order with Internet Explorer and
 * other focus related directives that require bubbling
 */
export class PrizmFocusedDirective {
    constructor({ nativeElement }, ngZone) {
        this.prizmFocusedChange = merge(prizmTypedFromEvent(nativeElement, 'focusin'), prizmTypedFromEvent(nativeElement, 'focusout')).pipe(map(() => prizmIsNativeFocused(nativeElement)), startWith(false), distinctUntilChanged(), skip(1), prizmZoneOptimized(ngZone));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFocusedDirective, deps: [{ token: ElementRef }, { token: NgZone }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmFocusedDirective, selector: "[prizmFocusedChange]", outputs: { prizmFocusedChange: "prizmFocusedChange" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFocusedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmFocusedChange]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.NgZone, decorators: [{
                    type: Inject,
                    args: [NgZone]
                }] }]; }, propDecorators: { prizmFocusedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXNlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2ZvY3VzZWQvZm9jdXNlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sWUFBWSxDQUFDOztBQUVsRDs7OztHQUlHO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQUloQyxZQUVFLEVBQUUsYUFBYSxFQUEyQixFQUMxQixNQUFjO1FBRTlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQzdCLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFDN0MsbUJBQW1CLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUMvQyxDQUFDLElBQUksQ0FDSixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUMsRUFDOUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUNoQixvQkFBb0IsRUFBRSxFQUN0QixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1Asa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQzNCLENBQUM7SUFDSixDQUFDOzhHQW5CVSxxQkFBcUIsa0JBS3RCLFVBQVUsYUFFVixNQUFNO2tHQVBMLHFCQUFxQjs7MkZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2lCQUNqQzs7MEJBTUksTUFBTTsyQkFBQyxVQUFVOzswQkFFakIsTUFBTTsyQkFBQyxNQUFNOzRDQUxQLGtCQUFrQjtzQkFEMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBOZ1pvbmUsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNraXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHByaXptWm9uZU9wdGltaXplZCB9IGZyb20gJy4uLy4uL29ic2VydmFibGVzL3pvbmUtZnJlZSc7XG5pbXBvcnQgeyBwcml6bVR5cGVkRnJvbUV2ZW50IH0gZnJvbSAnLi4vLi4vb2JzZXJ2YWJsZXMvdHlwZWQtZnJvbS1ldmVudCc7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZCB9IGZyb20gJy4uLy4uL3V0aWwnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBtb25pdG9yIGZvY3VzL2JsdXIgc3RhdHVzLCB3b3JrcyB3aXRoIGZvY3VzSW4vZm9jdXMtb3V0XG4gKiBpbnN0ZWFkIG9mIGZvY3VzL2JsdXIgdG8gc3luYyBldmVudHMgb3JkZXIgd2l0aCBJbnRlcm5ldCBFeHBsb3JlciBhbmRcbiAqIG90aGVyIGZvY3VzIHJlbGF0ZWQgZGlyZWN0aXZlcyB0aGF0IHJlcXVpcmUgYnViYmxpbmdcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptRm9jdXNlZENoYW5nZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUZvY3VzZWREaXJlY3RpdmUge1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcHJpem1Gb2N1c2VkQ2hhbmdlOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZilcbiAgICB7IG5hdGl2ZUVsZW1lbnQgfTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChOZ1pvbmUpIG5nWm9uZTogTmdab25lXG4gICkge1xuICAgIHRoaXMucHJpem1Gb2N1c2VkQ2hhbmdlID0gbWVyZ2UoXG4gICAgICBwcml6bVR5cGVkRnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdmb2N1c2luJyksXG4gICAgICBwcml6bVR5cGVkRnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdmb2N1c291dCcpXG4gICAgKS5waXBlKFxuICAgICAgbWFwKCgpID0+IHByaXptSXNOYXRpdmVGb2N1c2VkKG5hdGl2ZUVsZW1lbnQpKSxcbiAgICAgIHN0YXJ0V2l0aChmYWxzZSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgc2tpcCgxKSxcbiAgICAgIHByaXptWm9uZU9wdGltaXplZChuZ1pvbmUpXG4gICAgKTtcbiAgfVxufVxuIl19