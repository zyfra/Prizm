import { Directive, Inject, Input } from '@angular/core';
import { PRIZM_AUTOFOCUS_HANDLER, PRIZM_AUTOFOCUS_PROVIDERS, } from './autofocus.options';
import * as i0 from "@angular/core";
export class PrizmAutoFocusDirective {
    constructor(handler) {
        this.handler = handler;
        this.autoFocus = true;
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.handler.setFocus();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmAutoFocusDirective, deps: [{ token: PRIZM_AUTOFOCUS_HANDLER }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmAutoFocusDirective, selector: "[prizmAutoFocus]", inputs: { autoFocus: "autoFocus" }, providers: PRIZM_AUTOFOCUS_PROVIDERS, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmAutoFocusDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmAutoFocus]`,
                    providers: PRIZM_AUTOFOCUS_PROVIDERS,
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_AUTOFOCUS_HANDLER]
                }] }]; }, propDecorators: { autoFocus: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvYXV0by1mb2N1cy9hdXRvZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix5QkFBeUIsR0FFMUIsTUFBTSxxQkFBcUIsQ0FBQzs7QUFNN0IsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUE4RCxPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUZyRixjQUFTLEdBQUcsSUFBSSxDQUFDO0lBRXVFLENBQUM7SUFFekYsZUFBZTtRQUNwQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7OEdBVlUsdUJBQXVCLGtCQUlkLHVCQUF1QjtrR0FKaEMsdUJBQXVCLCtFQUZ2Qix5QkFBeUI7OzJGQUV6Qix1QkFBdUI7a0JBSm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsU0FBUyxFQUFFLHlCQUF5QjtpQkFDckM7OzBCQUtjLE1BQU07MkJBQUMsdUJBQXVCOzRDQUZwQyxTQUFTO3NCQURmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgUFJJWk1fQVVUT0ZPQ1VTX0hBTkRMRVIsXG4gIFBSSVpNX0FVVE9GT0NVU19QUk9WSURFUlMsXG4gIFByaXptQXV0b2ZvY3VzSGFuZGxlcixcbn0gZnJvbSAnLi9hdXRvZm9jdXMub3B0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtwcml6bUF1dG9Gb2N1c11gLFxuICBwcm92aWRlcnM6IFBSSVpNX0FVVE9GT0NVU19QUk9WSURFUlMsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQXV0b0ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhdXRvRm9jdXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUFJJWk1fQVVUT0ZPQ1VTX0hBTkRMRVIpIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlcjogUHJpem1BdXRvZm9jdXNIYW5kbGVyKSB7fVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLmhhbmRsZXIuc2V0Rm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==