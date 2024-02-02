import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_MUTATION_OBSERVER_OPTIONS } from './mutation-observer-options';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
export class PrizmMutationObserveDirective {
    constructor(el, destroy$, options) {
        this.el = el;
        this.destroy$ = destroy$;
        this.options = options;
        this.prizmMutationObserverConfig = this.options.config;
        this.prizmMutationObserverHost = null;
        this.prizmMutationObserver = new EventEmitter();
        this.observer = new MutationObserver((records) => {
            this.prizmMutationObserver.emit(records);
        });
    }
    ngOnInit() {
        this.startObserve();
    }
    startObserve() {
        this.observer.observe(this.prizmMutationObserverHost ?? this.el.nativeElement, this.prizmMutationObserverConfig);
        this.destroy$.addCallback(() => {
            this.observer.disconnect();
        });
    }
}
PrizmMutationObserveDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmMutationObserveDirective, deps: [{ token: ElementRef }, { token: PrizmDestroyService }, { token: PRIZM_MUTATION_OBSERVER_OPTIONS }], target: i0.ɵɵFactoryTarget.Directive });
PrizmMutationObserveDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmMutationObserveDirective, isStandalone: true, selector: "[prizmMutationObserver]", inputs: { prizmMutationObserverConfig: "prizmMutationObserverConfig", prizmMutationObserverHost: "prizmMutationObserverHost" }, outputs: { prizmMutationObserver: "prizmMutationObserver" }, providers: [PrizmDestroyService], exportAs: ["prizmMutationObserverEl"], ngImport: i0 });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMutationObserveDirective.prototype, "prizmMutationObserverConfig", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMutationObserveDirective.prototype, "prizmMutationObserverHost", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmMutationObserveDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmMutationObserver]',
                    providers: [PrizmDestroyService],
                    standalone: true,
                    exportAs: 'prizmMutationObserverEl',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i1.PrizmDestroyService, decorators: [{
                    type: Inject,
                    args: [PrizmDestroyService]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_MUTATION_OBSERVER_OPTIONS]
                }] }]; }, propDecorators: { prizmMutationObserverConfig: [{
                type: Input
            }], prizmMutationObserverHost: [{
                type: Input
            }], prizmMutationObserver: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb24tb2JzZXJ2ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9tdXRhdGlvbi1vYnNlcnZlci9tdXRhdGlvbi1vYnNlcnZlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsK0JBQStCLEVBQStCLE1BQU0sNkJBQTZCLENBQUM7OztBQVEzRyxNQUFNLE9BQU8sNkJBQTZCO0lBY3hDLFlBQ3VDLEVBQTJCLEVBQ2xCLFFBQTZCLEVBQ2YsT0FBb0M7UUFGM0QsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFDZixZQUFPLEdBQVAsT0FBTyxDQUE2QjtRQWQzRixnQ0FBMkIsR0FBMEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFJekYsOEJBQXlCLEdBQXVCLElBQUksQ0FBQztRQUduRCwwQkFBcUIsR0FBbUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVNsRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxPQUF5QixFQUFFLEVBQUU7WUFDakUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUNuQixJQUFJLENBQUMseUJBQXlCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3ZELElBQUksQ0FBQywyQkFBMkIsQ0FDakMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7MEhBcENVLDZCQUE2QixrQkFlOUIsVUFBVSxhQUNWLG1CQUFtQixhQUNuQiwrQkFBK0I7OEdBakI5Qiw2QkFBNkIsbVFBSjdCLENBQUMsbUJBQW1CLENBQUM7QUFLaEM7SUFDQyxnQkFBZ0IsRUFBRTs7a0ZBQzZFO0FBRWhHO0lBQ0MsZ0JBQWdCLEVBQUU7O2dGQUN5QzsyRkFQakQsNkJBQTZCO2tCQU56QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNoQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLHlCQUF5QjtpQkFDcEM7OzBCQWdCSSxNQUFNOzJCQUFDLFVBQVU7OzBCQUNqQixNQUFNOzJCQUFDLG1CQUFtQjs7MEJBQzFCLE1BQU07MkJBQUMsK0JBQStCOzRDQWRsQywyQkFBMkI7c0JBRmpDLEtBQUs7Z0JBTUMseUJBQXlCO3NCQUYvQixLQUFLO2dCQUtHLHFCQUFxQjtzQkFEN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbmltcG9ydCB7IFBSSVpNX01VVEFUSU9OX09CU0VSVkVSX09QVElPTlMsIFByaXptTXV0YXRpb25PYnNlcnZlT3B0aW9ucyB9IGZyb20gJy4vbXV0YXRpb24tb2JzZXJ2ZXItb3B0aW9ucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bU11dGF0aW9uT2JzZXJ2ZXJdJyxcbiAgcHJvdmlkZXJzOiBbUHJpem1EZXN0cm95U2VydmljZV0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGV4cG9ydEFzOiAncHJpem1NdXRhdGlvbk9ic2VydmVyRWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bU11dGF0aW9uT2JzZXJ2ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIHByaXptTXV0YXRpb25PYnNlcnZlckNvbmZpZzogUHJpem1NdXRhdGlvbk9ic2VydmVPcHRpb25zWydjb25maWcnXSA9IHRoaXMub3B0aW9ucy5jb25maWc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgcHJpem1NdXRhdGlvbk9ic2VydmVySG9zdDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcHJpem1NdXRhdGlvbk9ic2VydmVyOiBFdmVudEVtaXR0ZXI8TXV0YXRpb25SZWNvcmRbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcmVhZG9ubHkgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChFbGVtZW50UmVmKSBwcml2YXRlIHJlYWRvbmx5IGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KFByaXptRGVzdHJveVNlcnZpY2UpIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQ6IFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAgQEluamVjdChQUklaTV9NVVRBVElPTl9PQlNFUlZFUl9PUFRJT05TKSBwcm90ZWN0ZWQgcmVhZG9ubHkgb3B0aW9uczogUHJpem1NdXRhdGlvbk9ic2VydmVPcHRpb25zXG4gICkge1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgdGhpcy5wcml6bU11dGF0aW9uT2JzZXJ2ZXIuZW1pdChyZWNvcmRzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0T2JzZXJ2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydE9ic2VydmUoKTogdm9pZCB7XG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKFxuICAgICAgdGhpcy5wcml6bU11dGF0aW9uT2JzZXJ2ZXJIb3N0ID8/IHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucHJpem1NdXRhdGlvbk9ic2VydmVyQ29uZmlnXG4gICAgKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmFkZENhbGxiYWNrKCgpID0+IHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=