import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Abstraction over `tabindex`
 */
export class PrizmFocusableDirective {
    constructor() {
        /**
         * Element can be focused with keyboard
         */
        this.focusable = true;
    }
    get tabIndex() {
        return this.focusable ? 0 : -1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFocusableDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmFocusableDirective, selector: "[prizmFocusable]", inputs: { focusable: ["prizmFocusable", "focusable"] }, host: { properties: { "tabIndex": "this.tabIndex" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmFocusableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmFocusable]',
                }]
        }], propDecorators: { focusable: [{
                type: Input,
                args: ['prizmFocusable']
            }], tabIndex: [{
                type: HostBinding,
                args: ['tabIndex']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXNhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvZm9jdXNhYmxlL2ZvY3VzYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU5RDs7R0FFRztBQUlILE1BQU0sT0FBTyx1QkFBdUI7SUFIcEM7UUFJRTs7V0FFRztRQUVILGNBQVMsR0FBRyxJQUFJLENBQUM7S0FNbEI7SUFKQyxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQzs4R0FWVSx1QkFBdUI7a0dBQXZCLHVCQUF1Qjs7MkZBQXZCLHVCQUF1QjtrQkFIbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs4QkFNQyxTQUFTO3NCQURSLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUluQixRQUFRO3NCQURYLFdBQVc7dUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQWJzdHJhY3Rpb24gb3ZlciBgdGFiaW5kZXhgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bUZvY3VzYWJsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUZvY3VzYWJsZURpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBFbGVtZW50IGNhbiBiZSBmb2N1c2VkIHdpdGgga2V5Ym9hcmRcbiAgICovXG4gIEBJbnB1dCgncHJpem1Gb2N1c2FibGUnKVxuICBmb2N1c2FibGUgPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygndGFiSW5kZXgnKVxuICBnZXQgdGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGUgPyAwIDogLTE7XG4gIH1cbn1cbiJdfQ==