import { Directive, ElementRef } from '@angular/core';
import { PRIZM_ELEMENT_REF } from '../../tokens/element-ref';
import * as i0 from "@angular/core";
export class PrizmScrollbarWrapperDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollbarWrapperDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmScrollbarWrapperDirective, isStandalone: true, selector: "[prizmScrollbarWrapper]", providers: [
            {
                provide: PRIZM_ELEMENT_REF,
                useExisting: ElementRef,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollbarWrapperDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmScrollbarWrapper]',
                    providers: [
                        {
                            provide: PRIZM_ELEMENT_REF,
                            useExisting: ElementRef,
                        },
                    ],
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLXdyYXBwZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9zY3JvbGxiYXIvc2Nyb2xsYmFyLXdyYXBwZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQVk3RCxNQUFNLE9BQU8sOEJBQThCOzhHQUE5Qiw4QkFBOEI7a0dBQTlCLDhCQUE4QixzRUFSOUI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVTthQUN4QjtTQUNGOzsyRkFHVSw4QkFBOEI7a0JBVjFDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVO3lCQUN4QjtxQkFDRjtvQkFDRCxVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0VMRU1FTlRfUkVGIH0gZnJvbSAnLi4vLi4vdG9rZW5zL2VsZW1lbnQtcmVmJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptU2Nyb2xsYmFyV3JhcHBlcl0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUklaTV9FTEVNRU5UX1JFRixcbiAgICAgIHVzZUV4aXN0aW5nOiBFbGVtZW50UmVmLFxuICAgIH0sXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU2Nyb2xsYmFyV3JhcHBlckRpcmVjdGl2ZSB7fVxuIl19