import { Directive, ElementRef } from '@angular/core';
import { PrizmStickyRelativeService } from './sticky-relative.service';
import * as i0 from "@angular/core";
import * as i1 from "./sticky-relative.service";
export class PrizmStickyRelativeDirective {
    constructor(stickyRelativeService, elRef) {
        this.stickyRelativeService = stickyRelativeService;
        this.elRef = elRef;
    }
    ngOnInit() {
        this.stickyRelativeService.element = this.elRef.nativeElement;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStickyRelativeDirective, deps: [{ token: i1.PrizmStickyRelativeService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmStickyRelativeDirective, selector: "[prizmStickyRelative]", providers: [PrizmStickyRelativeService], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStickyRelativeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmStickyRelative]',
                    providers: [PrizmStickyRelativeService],
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmStickyRelativeService }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LXJlbGF0aXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvc3RpY2t5L3N0aWNreS1yZWxhdGl2ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQU12RSxNQUFNLE9BQU8sNEJBQTRCO0lBQ3ZDLFlBQ21CLHFCQUFpRCxFQUNqRCxLQUFpQjtRQURqQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQTRCO1FBQ2pELFVBQUssR0FBTCxLQUFLLENBQVk7SUFDakMsQ0FBQztJQUVHLFFBQVE7UUFDYixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQ2hFLENBQUM7OEdBUlUsNEJBQTRCO2tHQUE1Qiw0QkFBNEIsZ0RBRjVCLENBQUMsMEJBQTBCLENBQUM7OzJGQUU1Qiw0QkFBNEI7a0JBSnhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7aUJBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptU3RpY2t5UmVsYXRpdmVTZXJ2aWNlIH0gZnJvbSAnLi9zdGlja3ktcmVsYXRpdmUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVN0aWNreVJlbGF0aXZlXScsXG4gIHByb3ZpZGVyczogW1ByaXptU3RpY2t5UmVsYXRpdmVTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1TdGlja3lSZWxhdGl2ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RpY2t5UmVsYXRpdmVTZXJ2aWNlOiBQcml6bVN0aWNreVJlbGF0aXZlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsUmVmOiBFbGVtZW50UmVmXG4gICkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGlja3lSZWxhdGl2ZVNlcnZpY2UuZWxlbWVudCA9IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19