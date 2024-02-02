import { Inject, Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SpaceNumberPipe {
    constructor(decimal) {
        this.decimal = decimal;
    }
    transform(value, ...args) {
        return this.decimal.transform(value, ...args)?.replace(',', ' ') ?? '';
    }
}
SpaceNumberPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SpaceNumberPipe, deps: [{ token: DecimalPipe }], target: i0.ɵɵFactoryTarget.Pipe });
SpaceNumberPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: SpaceNumberPipe, name: "spaceNumber" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: SpaceNumberPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'spaceNumber',
                }]
        }], ctorParameters: function () { return [{ type: i1.DecimalPipe, decorators: [{
                    type: Inject,
                    args: [DecimalPipe]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2UtbnVtYmVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3BpcGVzL3NwYWNlLW51bWJlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUs5QyxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUFrRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQUcsQ0FBQztJQUVuRSxTQUFTLENBQUMsS0FBc0IsRUFBRSxHQUFHLElBQWM7UUFDeEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6RSxDQUFDOzs0R0FMVSxlQUFlLGtCQUNOLFdBQVc7MEdBRHBCLGVBQWU7MkZBQWYsZUFBZTtrQkFIM0IsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsYUFBYTtpQkFDcEI7OzBCQUVjLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdzcGFjZU51bWJlcicsXG59KVxuZXhwb3J0IGNsYXNzIFNwYWNlTnVtYmVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERlY2ltYWxQaXBlKSBwcml2YXRlIHJlYWRvbmx5IGRlY2ltYWw6IERlY2ltYWxQaXBlKSB7fVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyB8IG51bWJlciwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRlY2ltYWwudHJhbnNmb3JtKHZhbHVlLCAuLi5hcmdzKT8ucmVwbGFjZSgnLCcsICcgJykgPz8gJyc7XG4gIH1cbn1cbiJdfQ==