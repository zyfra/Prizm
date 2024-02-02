import { Directive, ElementRef } from '@angular/core';
import { PRIZM_SCROLL_REF } from '../../tokens';
import * as i0 from "@angular/core";
export class PrizmScrollRefDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollRefDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmScrollRefDirective, isStandalone: true, selector: "[prizmScrollRef]", providers: [
            {
                provide: PRIZM_SCROLL_REF,
                useExisting: ElementRef,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollRefDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3Njcm9sbGJhci9zY3JvbGwtcmVmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBWWhELE1BQU0sT0FBTyx1QkFBdUI7OEdBQXZCLHVCQUF1QjtrR0FBdkIsdUJBQXVCLCtEQVJ2QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLFdBQVcsRUFBRSxVQUFVO2FBQ3hCO1NBQ0Y7OzJGQUdVLHVCQUF1QjtrQkFWbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLFVBQVU7eUJBQ3hCO3FCQUNGO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUFJJWk1fU0NST0xMX1JFRiB9IGZyb20gJy4uLy4uL3Rva2Vucyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVNjcm9sbFJlZl0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUklaTV9TQ1JPTExfUkVGLFxuICAgICAgdXNlRXhpc3Rpbmc6IEVsZW1lbnRSZWYsXG4gICAgfSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1TY3JvbGxSZWZEaXJlY3RpdmUge31cbiJdfQ==