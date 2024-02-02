import { Directive, ElementRef, Inject, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmHoveredService } from '../../services/hovered.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/hovered.service";
export class PrizmHoveredDirective {
    constructor({ nativeElement }, hoveredService) {
        this.prizmHoveredChange = hoveredService.createHovered$(nativeElement);
    }
}
PrizmHoveredDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmHoveredDirective, deps: [{ token: ElementRef }, { token: PrizmHoveredService }], target: i0.ɵɵFactoryTarget.Directive });
PrizmHoveredDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmHoveredDirective, isStandalone: true, selector: "[prizmHoveredChange]", outputs: { prizmHoveredChange: "prizmHoveredChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmHoveredDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmHoveredChange]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i1.PrizmHoveredService, decorators: [{
                    type: Inject,
                    args: [PrizmHoveredService]
                }] }]; }, propDecorators: { prizmHoveredChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXJlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2hvdmVyZWQvaG92ZXJlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFNckUsTUFBTSxPQUFPLHFCQUFxQjtJQUloQyxZQUNzQixFQUFFLGFBQWEsRUFBdUIsRUFDN0IsY0FBbUM7UUFFaEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7a0hBVFUscUJBQXFCLGtCQUt0QixVQUFVLGFBQ1YsbUJBQW1CO3NHQU5sQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFKakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OzBCQU1JLE1BQU07MkJBQUMsVUFBVTs7MEJBQ2pCLE1BQU07MkJBQUMsbUJBQW1COzRDQUpwQixrQkFBa0I7c0JBRDFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bUhvdmVyZWRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaG92ZXJlZC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptSG92ZXJlZENoYW5nZV0nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUhvdmVyZWREaXJlY3RpdmUge1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcHJpem1Ib3ZlcmVkQ2hhbmdlOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZikgeyBuYXRpdmVFbGVtZW50IH06IEVsZW1lbnRSZWY8RWxlbWVudD4sXG4gICAgQEluamVjdChQcml6bUhvdmVyZWRTZXJ2aWNlKSBob3ZlcmVkU2VydmljZTogUHJpem1Ib3ZlcmVkU2VydmljZVxuICApIHtcbiAgICB0aGlzLnByaXptSG92ZXJlZENoYW5nZSA9IGhvdmVyZWRTZXJ2aWNlLmNyZWF0ZUhvdmVyZWQkKG5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iXX0=