import { Directive } from '@angular/core';
import { INTERSECTION_ROOT_MARGIN, IntersectionObserverService } from '@ng-web-apis/intersection-observer';
import * as i0 from "@angular/core";
export class PrizmTheadDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTheadDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTheadDirective, selector: "thead[prizmThead]", providers: [
            IntersectionObserverService,
            {
                provide: INTERSECTION_ROOT_MARGIN,
                useValue: `0px 10000px 10000px 10000px`,
            },
        ], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTheadDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3RoZWFkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQVkzRyxNQUFNLE9BQU8sbUJBQW1COzhHQUFuQixtQkFBbUI7a0dBQW5CLG1CQUFtQiw0Q0FSbkI7WUFDVCwyQkFBMkI7WUFDM0I7Z0JBQ0UsT0FBTyxFQUFFLHdCQUF3QjtnQkFDakMsUUFBUSxFQUFFLDZCQUE2QjthQUN4QztTQUNGOzsyRkFFVSxtQkFBbUI7a0JBVi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsU0FBUyxFQUFFO3dCQUNULDJCQUEyQjt3QkFDM0I7NEJBQ0UsT0FBTyxFQUFFLHdCQUF3Qjs0QkFDakMsUUFBUSxFQUFFLDZCQUE2Qjt5QkFDeEM7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElOVEVSU0VDVElPTl9ST09UX01BUkdJTiwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJTZXJ2aWNlIH0gZnJvbSAnQG5nLXdlYi1hcGlzL2ludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYHRoZWFkW3ByaXptVGhlYWRdYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IElOVEVSU0VDVElPTl9ST09UX01BUkdJTixcbiAgICAgIHVzZVZhbHVlOiBgMHB4IDEwMDAwcHggMTAwMDBweCAxMDAwMHB4YCxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRoZWFkRGlyZWN0aXZlIHt9XG4iXX0=