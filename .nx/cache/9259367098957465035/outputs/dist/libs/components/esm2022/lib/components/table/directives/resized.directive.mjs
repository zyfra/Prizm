import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Output } from '@angular/core';
import { distinctUntilChanged, map, switchMap, takeUntil } from 'rxjs/operators';
import { prizmTypedFromEvent } from '../observables/typed-from-event';
import { prizmPreventDefault } from '../../../observables';
import { PRIZM_ELEMENT_REF } from '../../../tokens/element-ref';
import * as i0 from "@angular/core";
export class PrizmResizedDirective {
    constructor(documentRef, elementRef, parentRef) {
        this.documentRef = documentRef;
        this.elementRef = elementRef;
        this.parentRef = parentRef;
        this.prizmResized = prizmTypedFromEvent(this.elementRef.nativeElement, `mousedown`).pipe(prizmPreventDefault(), switchMap(() => {
            const { width, right } = this.parentRef.nativeElement.getBoundingClientRect();
            return prizmTypedFromEvent(this.documentRef, `mousemove`).pipe(distinctUntilChanged(), map(({ clientX }) => width + clientX - right), takeUntil(prizmTypedFromEvent(this.documentRef, `mouseup`)));
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmResizedDirective, deps: [{ token: DOCUMENT }, { token: ElementRef }, { token: PRIZM_ELEMENT_REF }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmResizedDirective, selector: "[prizmResized]", outputs: { prizmResized: "prizmResized" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmResizedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmResized]`,
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [PRIZM_ELEMENT_REF]
                }] }]; }, propDecorators: { prizmResized: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvcmVzaXplZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBS2hFLE1BQU0sT0FBTyxxQkFBcUI7SUFlaEMsWUFDcUMsV0FBcUIsRUFFdkMsVUFBbUMsRUFFbkMsU0FBaUQ7UUFKL0IsZ0JBQVcsR0FBWCxXQUFXLENBQVU7UUFFdkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFFbkMsY0FBUyxHQUFULFNBQVMsQ0FBd0M7UUFsQjNELGlCQUFZLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMxRixtQkFBbUIsRUFBRSxFQUNyQixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBRTlFLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQzVELG9CQUFvQixFQUFFLEVBQ3RCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQzdDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQzVELENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBUUMsQ0FBQzs4R0FyQk8scUJBQXFCLGtCQWdCdEIsUUFBUSxhQUNSLFVBQVUsYUFFVixpQkFBaUI7a0dBbkJoQixxQkFBcUI7OzJGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7OzBCQWlCSSxNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsVUFBVTs7MEJBRWpCLE1BQU07MkJBQUMsaUJBQWlCOzRDQWpCbEIsWUFBWTtzQkFEcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBwcml6bVR5cGVkRnJvbUV2ZW50IH0gZnJvbSAnLi4vb2JzZXJ2YWJsZXMvdHlwZWQtZnJvbS1ldmVudCc7XG5pbXBvcnQgeyBwcml6bVByZXZlbnREZWZhdWx0IH0gZnJvbSAnLi4vLi4vLi4vb2JzZXJ2YWJsZXMnO1xuaW1wb3J0IHsgUFJJWk1fRUxFTUVOVF9SRUYgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvZWxlbWVudC1yZWYnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbcHJpem1SZXNpemVkXWAsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptUmVzaXplZERpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBwcml6bVJlc2l6ZWQgPSBwcml6bVR5cGVkRnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgbW91c2Vkb3duYCkucGlwZShcbiAgICBwcml6bVByZXZlbnREZWZhdWx0KCksXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIHJpZ2h0IH0gPSB0aGlzLnBhcmVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICByZXR1cm4gcHJpem1UeXBlZEZyb21FdmVudCh0aGlzLmRvY3VtZW50UmVmLCBgbW91c2Vtb3ZlYCkucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgbWFwKCh7IGNsaWVudFggfSkgPT4gd2lkdGggKyBjbGllbnRYIC0gcmlnaHQpLFxuICAgICAgICB0YWtlVW50aWwocHJpem1UeXBlZEZyb21FdmVudCh0aGlzLmRvY3VtZW50UmVmLCBgbW91c2V1cGApKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgZG9jdW1lbnRSZWY6IERvY3VtZW50LFxuICAgIEBJbmplY3QoRWxlbWVudFJlZilcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoUFJJWk1fRUxFTUVOVF9SRUYpXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYXJlbnRSZWY6IEVsZW1lbnRSZWY8SFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnQ+XG4gICkge31cbn1cbiJdfQ==