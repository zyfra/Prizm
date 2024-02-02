import { Directive, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export class AbstractPrizmAutofocusHandler {
    constructor(prizmFocusableComponent, elementRef) {
        this.prizmFocusableComponent = prizmFocusableComponent;
        this.elementRef = elementRef;
    }
    get element() {
        return this.prizmFocusableComponent?.nativeFocusableElement || this.elementRef.nativeElement;
    }
    get isTextFieldElement() {
        return this.element.matches(`input, textarea`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: AbstractPrizmAutofocusHandler, deps: "invalid", target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: AbstractPrizmAutofocusHandler, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: AbstractPrizmAutofocusHandler, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: undefined }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvYXV0by1mb2N1cy9oYW5kbGVycy9hYnN0cmFjdC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVF0RCxNQUFNLE9BQWdCLDZCQUE2QjtJQUNqRCxZQUNxQix1QkFBNkQsRUFDN0QsVUFBbUM7UUFEbkMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFzQztRQUM3RCxlQUFVLEdBQVYsVUFBVSxDQUF5QjtJQUNyRCxDQUFDO0lBRUosSUFBYyxPQUFPO1FBQ25CLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixFQUFFLHNCQUFzQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQy9GLENBQUM7SUFFRCxJQUFjLGtCQUFrQjtRQUM5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakQsQ0FBQzs4R0FabUIsNkJBQTZCO2tHQUE3Qiw2QkFBNkI7OzJGQUE3Qiw2QkFBNkI7a0JBRGxELFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yLFxuICBQcml6bU5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQsXG59IGZyb20gJy4uLy4uLy4uL3R5cGVzL2ZvY3VzYWJsZS1lbGVtZW50LWFjY2Vzc29yJztcbmltcG9ydCB7IFByaXptQXV0b2ZvY3VzSGFuZGxlciB9IGZyb20gJy4uL2F1dG9mb2N1cy5vcHRpb25zJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQcml6bUF1dG9mb2N1c0hhbmRsZXIgaW1wbGVtZW50cyBQcml6bUF1dG9mb2N1c0hhbmRsZXIge1xuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHByaXptRm9jdXNhYmxlQ29tcG9uZW50OiBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3NvciB8IG51bGwsXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XG4gICkge31cblxuICBwcm90ZWN0ZWQgZ2V0IGVsZW1lbnQoKTogUHJpem1OYXRpdmVGb2N1c2FibGVFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5wcml6bUZvY3VzYWJsZUNvbXBvbmVudD8ubmF0aXZlRm9jdXNhYmxlRWxlbWVudCB8fCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaXNUZXh0RmllbGRFbGVtZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubWF0Y2hlcyhgaW5wdXQsIHRleHRhcmVhYCk7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3Qgc2V0Rm9jdXMoKTogdm9pZDtcbn1cbiJdfQ==