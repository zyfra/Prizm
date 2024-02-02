import { Attribute, Directive, ElementRef, Inject, NgZone } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { prizmStopPropagation } from '../../observables/stop-propagation';
import { prizmZoneFree } from '../../observables/zone-free';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
/**
 * Simple prevent default on event directive when you do not need anything
 * else on event and do not want to trigger change detection
 */
export class PrizmStopPropagationDirective {
    constructor({ nativeElement }, ngZone, destroy$, eventName) {
        fromEvent(nativeElement, eventName, { passive: false })
            .pipe(prizmZoneFree(ngZone), prizmStopPropagation(), takeUntil(destroy$))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStopPropagationDirective, deps: [{ token: ElementRef }, { token: NgZone }, { token: PrizmDestroyService }, { token: `prizmStopPropagation`, attribute: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmStopPropagationDirective, selector: "[prizmStopPropagation]", providers: [PrizmDestroyService], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStopPropagationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmStopPropagation]`,
                    providers: [PrizmDestroyService],
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
                    args: [`prizmStopPropagation`]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL3N0b3AtcHJvcGFnYXRpb24vc3RvcC1wcm9wYWdhdGlvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBTyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBRTVEOzs7R0FHRztBQUtILE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFDc0IsRUFBRSxhQUFhLEVBQTJCLEVBQzlDLE1BQWMsRUFDRCxRQUEwQixFQUNwQixTQUFpQjtRQUVwRCxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLG9CQUFvQixFQUFFLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hFLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OEdBVlUsNkJBQTZCLGtCQUU5QixVQUFVLGFBQ1YsTUFBTSxhQUNOLG1CQUFtQixhQUNoQixzQkFBc0I7a0dBTHhCLDZCQUE2QixpREFGN0IsQ0FBQyxtQkFBbUIsQ0FBQzs7MkZBRXJCLDZCQUE2QjtrQkFKekMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7OzBCQUdJLE1BQU07MkJBQUMsVUFBVTs7MEJBQ2pCLE1BQU07MkJBQUMsTUFBTTs7MEJBQ2IsTUFBTTsyQkFBQyxtQkFBbUI7OzBCQUMxQixTQUFTOzJCQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBwcml6bVN0b3BQcm9wYWdhdGlvbiB9IGZyb20gJy4uLy4uL29ic2VydmFibGVzL3N0b3AtcHJvcGFnYXRpb24nO1xuaW1wb3J0IHsgcHJpem1ab25lRnJlZSB9IGZyb20gJy4uLy4uL29ic2VydmFibGVzL3pvbmUtZnJlZSc7XG5cbi8qKlxuICogU2ltcGxlIHByZXZlbnQgZGVmYXVsdCBvbiBldmVudCBkaXJlY3RpdmUgd2hlbiB5b3UgZG8gbm90IG5lZWQgYW55dGhpbmdcbiAqIGVsc2Ugb24gZXZlbnQgYW5kIGRvIG5vdCB3YW50IHRvIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvblxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBbcHJpem1TdG9wUHJvcGFnYXRpb25dYCxcbiAgcHJvdmlkZXJzOiBbUHJpem1EZXN0cm95U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChFbGVtZW50UmVmKSB7IG5hdGl2ZUVsZW1lbnQgfTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChOZ1pvbmUpIG5nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoUHJpem1EZXN0cm95U2VydmljZSkgZGVzdHJveSQ6IE9ic2VydmFibGU8dm9pZD4sXG4gICAgQEF0dHJpYnV0ZShgcHJpem1TdG9wUHJvcGFnYXRpb25gKSBldmVudE5hbWU6IHN0cmluZ1xuICApIHtcbiAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgZXZlbnROYW1lLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gICAgICAucGlwZShwcml6bVpvbmVGcmVlKG5nWm9uZSksIHByaXptU3RvcFByb3BhZ2F0aW9uKCksIHRha2VVbnRpbChkZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==