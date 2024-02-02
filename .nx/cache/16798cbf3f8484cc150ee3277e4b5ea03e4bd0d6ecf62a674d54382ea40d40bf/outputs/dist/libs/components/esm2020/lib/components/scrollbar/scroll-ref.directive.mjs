import { Directive, ElementRef } from '@angular/core';
import { PRIZM_SCROLL_REF } from '../../tokens';
import * as i0 from "@angular/core";
export class PrizmScrollRefDirective {
}
PrizmScrollRefDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmScrollRefDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmScrollRefDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmScrollRefDirective, isStandalone: true, selector: "[prizmScrollRef]", providers: [
        {
            provide: PRIZM_SCROLL_REF,
            useExisting: ElementRef,
        },
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmScrollRefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmScrollRef]',
                    providers: [
                        {
                            provide: PRIZM_SCROLL_REF,
                            useExisting: ElementRef,
                        },
                    ],
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3Njcm9sbGJhci9zY3JvbGwtcmVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBWWhELE1BQU0sT0FBTyx1QkFBdUI7O29IQUF2Qix1QkFBdUI7d0dBQXZCLHVCQUF1QiwrREFSdkI7UUFDVDtZQUNFLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsV0FBVyxFQUFFLFVBQVU7U0FDeEI7S0FDRjsyRkFHVSx1QkFBdUI7a0JBVm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7NEJBQ3pCLFdBQVcsRUFBRSxVQUFVO3lCQUN4QjtxQkFDRjtvQkFDRCxVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBSSVpNX1NDUk9MTF9SRUYgfSBmcm9tICcuLi8uLi90b2tlbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1TY3JvbGxSZWZdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fU0NST0xMX1JFRixcbiAgICAgIHVzZUV4aXN0aW5nOiBFbGVtZW50UmVmLFxuICAgIH0sXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU2Nyb2xsUmVmRGlyZWN0aXZlIHt9XG4iXX0=