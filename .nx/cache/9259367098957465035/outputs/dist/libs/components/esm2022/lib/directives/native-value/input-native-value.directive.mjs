import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { prizmObservable } from '@prizm-ui/core';
import { ReplaySubject, switchMap, timer } from 'rxjs';
import { debounceTime, filter, takeUntil, tap } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
export class PrizmInputNativeValueDirective {
    constructor(elementRef, destroy) {
        this.elementRef = elementRef;
        this.destroy = destroy;
        this.value$$ = new ReplaySubject();
        this.prizmInputNativeValueChanged = new EventEmitter();
        this.needChange = (currentValue, nativeValue) => {
            return currentValue !== nativeValue;
        };
    }
    ngOnInit() {
        this.value$$
            .pipe(debounceTime(0), switchMap(value => {
            return timer(0, 50).pipe(filter(() => this.needChange(this.value, this.elementRef.nativeElement.value, this.elementRef.nativeElement)), tap(() => {
                this.elementRef.nativeElement.value = value?.toString() ?? '';
                this.prizmInputNativeValueChanged.next(this.elementRef.nativeElement.value);
            }));
        }), takeUntil(this.destroy))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputNativeValueDirective, deps: [{ token: i0.ElementRef }, { token: i1.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputNativeValueDirective, isStandalone: true, selector: "input[prizmInputNativeValue]", inputs: { value: ["prizmInputNativeValue", "value"], needChange: "needChange" }, outputs: { prizmInputNativeValueChanged: "prizmInputNativeValueChanged" }, providers: [PrizmDestroyService], exportAs: ["prizmInputNativeValue"], ngImport: i0 }); }
}
__decorate([
    prizmObservable(),
    __metadata("design:type", Object)
], PrizmInputNativeValueDirective.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputNativeValueDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `input[prizmInputNativeValue]`,
                    providers: [PrizmDestroyService],
                    standalone: true,
                    exportAs: 'prizmInputNativeValue',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.PrizmDestroyService }]; }, propDecorators: { value: [{
                type: Input,
                args: ['prizmInputNativeValue']
            }], prizmInputNativeValueChanged: [{
                type: Output
            }], needChange: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbmF0aXZlLXZhbHVlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvbmF0aXZlLXZhbHVlL2lucHV0LW5hdGl2ZS12YWx1ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFTeEQsTUFBTSxPQUFPLDhCQUE4QjtJQWV6QyxZQUNtQixVQUF3QyxFQUN4QyxPQUE0QjtRQUQ1QixlQUFVLEdBQVYsVUFBVSxDQUE4QjtRQUN4QyxZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQVgvQyxZQUFPLEdBQUcsSUFBSSxhQUFhLEVBQUssQ0FBQztRQUV2QixpQ0FBNEIsR0FBRyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBRy9ELGVBQVUsR0FBdUMsQ0FBQyxZQUFlLEVBQUUsV0FBbUIsRUFBRSxFQUFFO1lBQ3hGLE9BQU8sWUFBWSxLQUFLLFdBQVcsQ0FBQztRQUN0QyxDQUFDLENBQUM7SUFLQyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPO2FBQ1QsSUFBSSxDQUNILFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDZixTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDdEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FDaEcsRUFDRCxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNQLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUM5RCxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQVUsQ0FBQyxDQUFDO1lBQ25GLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsRUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUN4QjthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OEdBdENVLDhCQUE4QjtrR0FBOUIsOEJBQThCLHVPQUo5QixDQUFDLG1CQUFtQixDQUFDOztBQVFoQztJQURDLGVBQWUsRUFBRTs7NkRBQ1I7MkZBSkMsOEJBQThCO2tCQU4xQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNoQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7bUlBS0MsS0FBSztzQkFGSixLQUFLO3VCQUFDLHVCQUF1QjtnQkFNcEIsNEJBQTRCO3NCQUFyQyxNQUFNO2dCQUdQLFVBQVU7c0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByaXptT2JzZXJ2YWJsZSB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIHN3aXRjaE1hcCwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUlucHV0TmF0aXZlVmFsdWVOZWVkQ2hhbmdlIH0gZnJvbSAnLi9tb2RlbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlucHV0W3ByaXptSW5wdXROYXRpdmVWYWx1ZV1gLFxuICBwcm92aWRlcnM6IFtQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgZXhwb3J0QXM6ICdwcml6bUlucHV0TmF0aXZlVmFsdWUnLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TmF0aXZlVmFsdWVEaXJlY3RpdmU8VCA9IGFueT4gaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3ByaXptSW5wdXROYXRpdmVWYWx1ZScpXG4gIEBwcml6bU9ic2VydmFibGUoKVxuICB2YWx1ZSE6IFQ7XG5cbiAgdmFsdWUkJCA9IG5ldyBSZXBsYXlTdWJqZWN0PFQ+KCk7XG5cbiAgQE91dHB1dCgpIHByaXptSW5wdXROYXRpdmVWYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG5cbiAgQElucHV0KClcbiAgbmVlZENoYW5nZTogUHJpem1JbnB1dE5hdGl2ZVZhbHVlTmVlZENoYW5nZTxUPiA9IChjdXJyZW50VmFsdWU6IFQsIG5hdGl2ZVZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gY3VycmVudFZhbHVlICE9PSBuYXRpdmVWYWx1ZTtcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95OiBQcml6bURlc3Ryb3lTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbHVlJCRcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICAgIHN3aXRjaE1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRpbWVyKDAsIDUwKS5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKCgpID0+XG4gICAgICAgICAgICAgIHRoaXMubmVlZENoYW5nZSh0aGlzLnZhbHVlLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZT8udG9TdHJpbmcoKSA/PyAnJztcbiAgICAgICAgICAgICAgdGhpcy5wcml6bUlucHV0TmF0aXZlVmFsdWVDaGFuZ2VkLm5leHQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgYXMgVCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=