import { ChangeDetectorRef, Directive, Inject, Input, Self, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * ng-template wrapper directive also stores {@link ChangeDetectorRef} to properly handle change detection.
 */
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class PolymorphTemplate {
    constructor(template, changeDetectorRef) {
        this.template = template;
        this.changeDetectorRef = changeDetectorRef;
        this.polymorph = '';
    }
    static ngTemplateContextGuard(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    _dir, _ctx) {
        return true;
    }
    check() {
        this.changeDetectorRef.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PolymorphTemplate, deps: [{ token: TemplateRef, self: true }, { token: ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PolymorphTemplate, isStandalone: true, selector: "ng-template[polymorph]", inputs: { polymorph: "polymorph" }, exportAs: ["polymorph"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PolymorphTemplate, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: 'ng-template[polymorph]',
                    // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                    inputs: ['polymorph'],
                    exportAs: 'polymorph',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef, decorators: [{
                    type: Inject,
                    args: [TemplateRef]
                }, {
                    type: Self
                }] }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }]; }, propDecorators: { polymorph: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL3BvbHltb3JwaC9kaXJlY3RpdmVzL3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUvRjs7R0FFRztBQVNILGtFQUFrRTtBQUNsRSxNQUFNLE9BQU8saUJBQWlCO0lBRzVCLFlBR1csUUFBd0IsRUFDVyxpQkFBb0M7UUFEdkUsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDVyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTnpFLGNBQVMsR0FBVyxFQUFFLENBQUM7SUFPN0IsQ0FBQztJQUVHLE1BQU0sQ0FBQyxzQkFBc0I7SUFDbEMsNkRBQTZEO0lBQzdELGFBQWE7SUFDYixJQUEwQixFQUMxQixJQUFTO1FBRVQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzhHQXJCVSxpQkFBaUIsa0JBSWxCLFdBQVcseUJBR1gsaUJBQWlCO2tHQVBoQixpQkFBaUI7OzJGQUFqQixpQkFBaUI7a0JBVDdCLFNBQVM7bUJBQUM7b0JBQ1QsOERBQThEO29CQUM5RCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyx1RUFBdUU7b0JBQ3ZFLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQztvQkFDckIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBTUksTUFBTTsyQkFBQyxXQUFXOzswQkFDbEIsSUFBSTs7MEJBRUosTUFBTTsyQkFBQyxpQkFBaUI7NENBTmxCLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBJbmplY3QsIElucHV0LCBTZWxmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIG5nLXRlbXBsYXRlIHdyYXBwZXIgZGlyZWN0aXZlIGFsc28gc3RvcmVzIHtAbGluayBDaGFuZ2VEZXRlY3RvclJlZn0gdG8gcHJvcGVybHkgaGFuZGxlIGNoYW5nZSBkZXRlY3Rpb24uXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3BvbHltb3JwaF0nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0cy1tZXRhZGF0YS1wcm9wZXJ0eVxuICBpbnB1dHM6IFsncG9seW1vcnBoJ10sXG4gIGV4cG9ydEFzOiAncG9seW1vcnBoJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBQb2x5bW9ycGhUZW1wbGF0ZTxDID0gYW55PiB7XG4gIEBJbnB1dCgpIHBvbHltb3JwaDogQyB8ICcnID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChUZW1wbGF0ZVJlZilcbiAgICBAU2VsZigpXG4gICAgcmVhZG9ubHkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPEM+LFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBwdWJsaWMgc3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8VD4oXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBfZGlyOiBQb2x5bW9ycGhUZW1wbGF0ZTxUPixcbiAgICBfY3R4OiBhbnlcbiAgKTogX2N0eCBpcyBUIGV4dGVuZHMgc3RyaW5nID8gYW55IDogVCB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgY2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19