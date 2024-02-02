import { Directive } from '@angular/core';
import { INTERSECTION_ROOT_MARGIN, IntersectionObserverService } from '@ng-web-apis/intersection-observer';
import * as i0 from "@angular/core";
export class PrizmTheadDirective {
}
PrizmTheadDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTheadDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmTheadDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTheadDirective, selector: "thead[prizmThead]", providers: [
        IntersectionObserverService,
        {
            provide: INTERSECTION_ROOT_MARGIN,
            useValue: `0px 10000px 10000px 10000px`,
        },
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTheadDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `thead[prizmThead]`,
                    providers: [
                        IntersectionObserverService,
                        {
                            provide: INTERSECTION_ROOT_MARGIN,
                            useValue: `0px 10000px 10000px 10000px`,
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3RoZWFkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQVkzRyxNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO29HQUFuQixtQkFBbUIsNENBUm5CO1FBQ1QsMkJBQTJCO1FBQzNCO1lBQ0UsT0FBTyxFQUFFLHdCQUF3QjtZQUNqQyxRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDO0tBQ0Y7MkZBRVUsbUJBQW1CO2tCQVYvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFNBQVMsRUFBRTt3QkFDVCwyQkFBMkI7d0JBQzNCOzRCQUNFLE9BQU8sRUFBRSx3QkFBd0I7NEJBQ2pDLFFBQVEsRUFBRSw2QkFBNkI7eUJBQ3hDO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTlRFUlNFQ1RJT05fUk9PVF9NQVJHSU4sIEludGVyc2VjdGlvbk9ic2VydmVyU2VydmljZSB9IGZyb20gJ0BuZy13ZWItYXBpcy9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGB0aGVhZFtwcml6bVRoZWFkXWAsXG4gIHByb3ZpZGVyczogW1xuICAgIEludGVyc2VjdGlvbk9ic2VydmVyU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBJTlRFUlNFQ1RJT05fUk9PVF9NQVJHSU4sXG4gICAgICB1c2VWYWx1ZTogYDBweCAxMDAwMHB4IDEwMDAwcHggMTAwMDBweGAsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1UaGVhZERpcmVjdGl2ZSB7fVxuIl19