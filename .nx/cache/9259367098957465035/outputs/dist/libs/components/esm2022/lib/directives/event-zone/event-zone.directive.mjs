import { Directive, ElementRef, EventEmitter, Injector, Input, Optional, Output, Self, SkipSelf, } from '@angular/core';
import { PrizmEventZoneService } from './event-zone.service';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./event-zone.service";
import * as i2 from "@prizm-ui/helpers";
/**
 * TODO change after migrate to Angular 13
 * injector support for ng-template
 * */
export class PrizmDropdownZoneDirective {
    get host() {
        return this.prizmEventZoneHost ?? this.elementRef.nativeElement;
    }
    constructor(dz, parentDropdownZoneService, destroy$, elementRef, injector) {
        this.dz = dz;
        this.parentDropdownZoneService = parentDropdownZoneService;
        this.destroy$ = destroy$;
        this.elementRef = elementRef;
        this.injector = injector;
        this.prizmEventZoneEvent = new EventEmitter();
    }
    ngOnInit() {
        this.dz.init(this.host, 'click', this.prizmEventZoneParent?.dz ?? this.parentDropdownZoneService);
        this.dz.event$
            .pipe(tap(time => this.prizmEventZoneEvent.next(time)), takeUntil(this.destroy$))
            .subscribe();
    }
    ngOnChanges(changes) {
        if (changes.prizmEventZoneElement)
            this.dz.init(this.host, 'click', this.prizmEventZoneParent?.dz);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDropdownZoneDirective, deps: [{ token: i1.PrizmEventZoneService, self: true }, { token: i1.PrizmEventZoneService, optional: true, skipSelf: true }, { token: i2.PrizmDestroyService }, { token: i0.ElementRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmDropdownZoneDirective, isStandalone: true, selector: "[prizmEventZone]:not(ng-container), [prizmEventZoneChange]:not(ng-container), [prizmEventZoneParent]:not(ng-container)", inputs: { prizmEventZoneParent: "prizmEventZoneParent", prizmEventZoneHost: "prizmEventZoneHost" }, outputs: { prizmEventZoneEvent: "prizmEventZoneEvent" }, providers: [PrizmEventZoneService, PrizmDestroyService], exportAs: ["prizmEventZone"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDropdownZoneDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmEventZone]:not(ng-container), [prizmEventZoneChange]:not(ng-container), [prizmEventZoneParent]:not(ng-container)`,
                    exportAs: `prizmEventZone`,
                    providers: [PrizmEventZoneService, PrizmDestroyService],
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmEventZoneService, decorators: [{
                    type: Self
                }] }, { type: i1.PrizmEventZoneService, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }, { type: i2.PrizmDestroyService }, { type: i0.ElementRef }, { type: i0.Injector }]; }, propDecorators: { prizmEventZoneEvent: [{
                type: Output
            }], prizmEventZoneParent: [{
                type: Input
            }], prizmEventZoneHost: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtem9uZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2V2ZW50LXpvbmUvZXZlbnQtem9uZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFFBQVEsRUFDUixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBRUosUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFaEQ7OztLQUdLO0FBT0wsTUFBTSxPQUFPLDBCQUEwQjtJQUtyQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUNsRSxDQUFDO0lBRUQsWUFDMkIsRUFBeUIsRUFDVix5QkFBZ0QsRUFDdkUsUUFBNkIsRUFDN0IsVUFBc0IsRUFDdkIsUUFBa0I7UUFKVCxPQUFFLEdBQUYsRUFBRSxDQUF1QjtRQUNWLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBdUI7UUFDdkUsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBYjFCLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFjeEQsQ0FBQztJQUVHLFFBQVE7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTthQUNYLElBQUksQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2hELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxxQkFBcUI7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckcsQ0FBQzs4R0E3QlUsMEJBQTBCO2tHQUExQiwwQkFBMEIsa1VBSDFCLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUM7OzJGQUc1QywwQkFBMEI7a0JBTnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdIQUF3SDtvQkFDbEksUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsU0FBUyxFQUFFLENBQUMscUJBQXFCLEVBQUUsbUJBQW1CLENBQUM7b0JBQ3ZELFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7MEJBV0ksSUFBSTs7MEJBQ0osUUFBUTs7MEJBQUksUUFBUTs4SEFWYixtQkFBbUI7c0JBQTVCLE1BQU07Z0JBQ0Usb0JBQW9CO3NCQUE1QixLQUFLO2dCQUNHLGtCQUFrQjtzQkFBMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTZWxmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUV2ZW50Wm9uZVNlcnZpY2UgfSBmcm9tICcuL2V2ZW50LXpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogVE9ETyBjaGFuZ2UgYWZ0ZXIgbWlncmF0ZSB0byBBbmd1bGFyIDEzXG4gKiBpbmplY3RvciBzdXBwb3J0IGZvciBuZy10ZW1wbGF0ZVxuICogKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtwcml6bUV2ZW50Wm9uZV06bm90KG5nLWNvbnRhaW5lciksIFtwcml6bUV2ZW50Wm9uZUNoYW5nZV06bm90KG5nLWNvbnRhaW5lciksIFtwcml6bUV2ZW50Wm9uZVBhcmVudF06bm90KG5nLWNvbnRhaW5lcilgLFxuICBleHBvcnRBczogYHByaXptRXZlbnRab25lYCxcbiAgcHJvdmlkZXJzOiBbUHJpem1FdmVudFpvbmVTZXJ2aWNlLCBQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Ecm9wZG93blpvbmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBPdXRwdXQoKSBwcml6bUV2ZW50Wm9uZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBJbnB1dCgpIHByaXptRXZlbnRab25lUGFyZW50PzogUHJpem1Ecm9wZG93blpvbmVEaXJlY3RpdmU7XG4gIEBJbnB1dCgpIHByaXptRXZlbnRab25lSG9zdD86IEhUTUxFbGVtZW50O1xuXG4gIGdldCBob3N0KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5wcml6bUV2ZW50Wm9uZUhvc3QgPz8gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2VsZigpIHByaXZhdGUgcmVhZG9ubHkgZHo6IFByaXptRXZlbnRab25lU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgcmVhZG9ubHkgcGFyZW50RHJvcGRvd25ab25lU2VydmljZTogUHJpem1FdmVudFpvbmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQ6IFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmR6LmluaXQodGhpcy5ob3N0LCAnY2xpY2snLCB0aGlzLnByaXptRXZlbnRab25lUGFyZW50Py5keiA/PyB0aGlzLnBhcmVudERyb3Bkb3duWm9uZVNlcnZpY2UpO1xuICAgIHRoaXMuZHouZXZlbnQkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKHRpbWUgPT4gdGhpcy5wcml6bUV2ZW50Wm9uZUV2ZW50Lm5leHQodGltZSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5wcml6bUV2ZW50Wm9uZUVsZW1lbnQpIHRoaXMuZHouaW5pdCh0aGlzLmhvc3QsICdjbGljaycsIHRoaXMucHJpem1FdmVudFpvbmVQYXJlbnQ/LmR6KTtcbiAgfVxufVxuIl19