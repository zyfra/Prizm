import { Attribute, Directive, ElementRef, Inject, NgZone } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { prizmPreventDefault } from '../../observables/prevent-default';
import { prizmZoneFree } from '../../observables/zone-free';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
/**
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
export class PrizmPreventDefaultDirective {
    constructor({ nativeElement }, ngZone, destroy$, eventName) {
        fromEvent(nativeElement, eventName, { passive: false })
            .pipe(prizmZoneFree(ngZone), prizmPreventDefault(), takeUntil(destroy$))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmPreventDefaultDirective, deps: [{ token: ElementRef }, { token: NgZone }, { token: PrizmDestroyService }, { token: `prizmPreventDefault`, attribute: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmPreventDefaultDirective, isStandalone: true, selector: "[prizmPreventDefault]", providers: [PrizmDestroyService], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmPreventDefaultDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmPreventDefault]`,
                    providers: [PrizmDestroyService],
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.NgZone, decorators: [{
                    type: Inject,
                    args: [NgZone]
                }] }, { type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [PrizmDestroyService]
                }] }, { type: undefined, decorators: [{
                    type: Attribute,
                    args: [`prizmPreventDefault`]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmVudC1kZWZhdWx0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvcHJldmVudC1kZWZhdWx0L3ByZXZlbnQtZGVmYXVsdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBRTVEOzs7R0FHRztBQU1ILE1BQU0sT0FBTyw0QkFBNEI7SUFDdkMsWUFDc0IsRUFBRSxhQUFhLEVBQTJCLEVBQzlDLE1BQWMsRUFDRCxRQUEwQixFQUNyQixTQUFpQjtRQUVuRCxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLG1CQUFtQixFQUFFLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZFLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OEdBVlUsNEJBQTRCLGtCQUU3QixVQUFVLGFBQ1YsTUFBTSxhQUNOLG1CQUFtQixhQUNoQixxQkFBcUI7a0dBTHZCLDRCQUE0QixvRUFINUIsQ0FBQyxtQkFBbUIsQ0FBQzs7MkZBR3JCLDRCQUE0QjtrQkFMeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDaEMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkFHSSxNQUFNOzJCQUFDLFVBQVU7OzBCQUNqQixNQUFNOzJCQUFDLE1BQU07OzBCQUNiLE1BQU07MkJBQUMsbUJBQW1COzswQkFDMUIsU0FBUzsyQkFBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGUsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHByaXptUHJldmVudERlZmF1bHQgfSBmcm9tICcuLi8uLi9vYnNlcnZhYmxlcy9wcmV2ZW50LWRlZmF1bHQnO1xuaW1wb3J0IHsgcHJpem1ab25lRnJlZSB9IGZyb20gJy4uLy4uL29ic2VydmFibGVzL3pvbmUtZnJlZSc7XG5cbi8qKlxuICogU2ltcGxlIHByZXZlbnQgZGVmYXVsdCBvbiBldmVudCBkaXJlY3RpdmUgd2hlbiB5b3UgZG8gbm90IG5lZWQgYW55dGhpbmdcbiAqIGVsc2Ugb24gZXZlbnQgYW5kIGRvIG5vdCB3YW50IHRvIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvblxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbcHJpem1QcmV2ZW50RGVmYXVsdF1gLFxuICBwcm92aWRlcnM6IFtQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1QcmV2ZW50RGVmYXVsdERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZikgeyBuYXRpdmVFbGVtZW50IH06IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoTmdab25lKSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBASW5qZWN0KFByaXptRGVzdHJveVNlcnZpY2UpIGRlc3Ryb3kkOiBPYnNlcnZhYmxlPHZvaWQ+LFxuICAgIEBBdHRyaWJ1dGUoYHByaXptUHJldmVudERlZmF1bHRgKSBldmVudE5hbWU6IHN0cmluZ1xuICApIHtcbiAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgZXZlbnROYW1lLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgICAucGlwZShwcml6bVpvbmVGcmVlKG5nWm9uZSksIHByaXptUHJldmVudERlZmF1bHQoKSwgdGFrZVVudGlsKGRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19