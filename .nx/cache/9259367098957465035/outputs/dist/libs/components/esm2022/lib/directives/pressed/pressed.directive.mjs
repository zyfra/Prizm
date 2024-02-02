import { Directive, ElementRef, Inject, Output } from '@angular/core';
import { prizmPressedObservable } from '../../observables/pressed-observable';
import { PRIZM_TAKE_ONLY_TRUSTED_EVENTS } from '../../tokens/take-only-trusted-events';
import * as i0 from "@angular/core";
/**
 *
 * */
export class PrizmPressedDirective {
    constructor(elementRef, takeOnlyTrustedEvents) {
        this.elementRef = elementRef;
        this.takeOnlyTrustedEvents = takeOnlyTrustedEvents;
        this.prizmPressedChange = prizmPressedObservable(this.elementRef.nativeElement, {
            onlyTrusted: this.takeOnlyTrustedEvents,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmPressedDirective, deps: [{ token: ElementRef }, { token: PRIZM_TAKE_ONLY_TRUSTED_EVENTS }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmPressedDirective, isStandalone: true, selector: "[prizmPressedChange]", outputs: { prizmPressedChange: "prizmPressedChange" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmPressedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmPressedChange]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_TAKE_ONLY_TRUSTED_EVENTS]
                }] }]; }, propDecorators: { prizmPressedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc3NlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL3ByZXNzZWQvcHJlc3NlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFFdkY7O0tBRUs7QUFLTCxNQUFNLE9BQU8scUJBQXFCO0lBTWhDLFlBQ3VDLFVBQStCLEVBRW5ELHFCQUE4QjtRQUZWLGVBQVUsR0FBVixVQUFVLENBQXFCO1FBRW5ELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBUztRQVB4Qyx1QkFBa0IsR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUNsRixXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtTQUN4QyxDQUFDLENBQUM7SUFNQSxDQUFDOzhHQVZPLHFCQUFxQixrQkFPdEIsVUFBVSxhQUNWLDhCQUE4QjtrR0FSN0IscUJBQXFCOzsyRkFBckIscUJBQXFCO2tCQUpqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBUUksTUFBTTsyQkFBQyxVQUFVOzswQkFDakIsTUFBTTsyQkFBQyw4QkFBOEI7NENBTi9CLGtCQUFrQjtzQkFEMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByaXptUHJlc3NlZE9ic2VydmFibGUgfSBmcm9tICcuLi8uLi9vYnNlcnZhYmxlcy9wcmVzc2VkLW9ic2VydmFibGUnO1xuaW1wb3J0IHsgUFJJWk1fVEFLRV9PTkxZX1RSVVNURURfRVZFTlRTIH0gZnJvbSAnLi4vLi4vdG9rZW5zL3Rha2Utb25seS10cnVzdGVkLWV2ZW50cyc7XG5cbi8qKlxuICpcbiAqICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1QcmVzc2VkQ2hhbmdlXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptUHJlc3NlZERpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBwcml6bVByZXNzZWRDaGFuZ2UgPSBwcml6bVByZXNzZWRPYnNlcnZhYmxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB7XG4gICAgb25seVRydXN0ZWQ6IHRoaXMudGFrZU9ubHlUcnVzdGVkRXZlbnRzLFxuICB9KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEVsZW1lbnRSZWYpIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZjxFbGVtZW50PixcbiAgICBASW5qZWN0KFBSSVpNX1RBS0VfT05MWV9UUlVTVEVEX0VWRU5UUylcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRha2VPbmx5VHJ1c3RlZEV2ZW50czogYm9vbGVhblxuICApIHt9XG59XG4iXX0=