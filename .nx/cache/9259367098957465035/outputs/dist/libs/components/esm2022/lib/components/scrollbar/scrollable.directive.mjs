import { Directive, ElementRef, inject } from '@angular/core';
import { PRIZM_SCROLLABLE } from '../../constants/events';
import * as i0 from "@angular/core";
export class PrizmScrollableDirective {
    constructor() {
        this.elementRef = inject((ElementRef));
    }
    ngOnInit() {
        this.elementRef.nativeElement.dispatchEvent(new CustomEvent(PRIZM_SCROLLABLE, {
            bubbles: true,
            detail: this.elementRef.nativeElement,
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollableDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmScrollableDirective, isStandalone: true, selector: "[prizmScrollable]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmScrollable]',
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3Njcm9sbGJhci9zY3JvbGxhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQTZCLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQU0xRCxNQUFNLE9BQU8sd0JBQXdCO0lBSnJDO1FBS1csZUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFBLFVBQXVCLENBQUEsQ0FBQyxDQUFDO0tBVXZEO0lBUkMsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FDekMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7WUFDaEMsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO1NBQ3RDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs4R0FWVSx3QkFBd0I7a0dBQXhCLHdCQUF3Qjs7MkZBQXhCLHdCQUF3QjtrQkFKcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIGluamVjdCwgSW5qZWN0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUFJJWk1fU0NST0xMQUJMRSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9ldmVudHMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1TY3JvbGxhYmxlXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU2Nyb2xsYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJlYWRvbmx5IGVsZW1lbnRSZWYgPSBpbmplY3QoRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoUFJJWk1fU0NST0xMQUJMRSwge1xuICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICBkZXRhaWw6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=