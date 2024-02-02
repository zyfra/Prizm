import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmDataListDirective {
}
PrizmDataListDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDataListDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmDataListDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmDataListDirective, isStandalone: true, selector: "ng-template[prizmDataList]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmDataListDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[prizmDataList]',
                    standalone: true,
                }]
        }] });
export function prizmAsDataList(useExisting) {
    return {
        provide: PrizmDataListDirective,
        useExisting,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1saXN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZGF0YS1saXN0L2RhdGEtbGlzdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBa0IsTUFBTSxlQUFlLENBQUM7O0FBTTFELE1BQU0sT0FBTyxzQkFBc0I7O21IQUF0QixzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs7QUFHRCxNQUFNLFVBQVUsZUFBZSxDQUFDLFdBQXlDO0lBQ3ZFLE9BQU87UUFDTCxPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFdBQVc7S0FDWixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbcHJpem1EYXRhTGlzdF0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bURhdGFMaXN0RGlyZWN0aXZlIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBwcml6bUFzRGF0YUxpc3QodXNlRXhpc3Rpbmc6IFR5cGU8UHJpem1EYXRhTGlzdERpcmVjdGl2ZT4pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogUHJpem1EYXRhTGlzdERpcmVjdGl2ZSxcbiAgICB1c2VFeGlzdGluZyxcbiAgfTtcbn1cbiJdfQ==