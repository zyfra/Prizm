import { __decorate, __metadata } from "tslib";
import { Inject, Pipe } from '@angular/core';
import { PrizmTableDirective } from '../directives/table.directive';
import { prizmPure } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "../directives/table.directive";
export class PrizmTableSortPipe {
    constructor(table) {
        this.table = table;
    }
    transform(data) {
        return this.sort(data, this.table.sorter, this.table.direction);
    }
    sort(data, sorter, direction) {
        return [...data].sort((a, b) => direction * sorter(a, b));
    }
}
PrizmTableSortPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableSortPipe, deps: [{ token: PrizmTableDirective }], target: i0.ɵɵFactoryTarget.Pipe });
PrizmTableSortPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableSortPipe, name: "prizmTableSort", pure: false });
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Function, Number]),
    __metadata("design:returntype", Array)
], PrizmTableSortPipe.prototype, "sort", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableSortPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: `prizmTableSort`,
                    pure: false,
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmTableDirective, decorators: [{
                    type: Inject,
                    args: [PrizmTableDirective]
                }] }]; }, propDecorators: { sort: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9waXBlcy90YWJsZS1zb3J0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU0zQyxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQTBELEtBQTZCO1FBQTdCLFVBQUssR0FBTCxLQUFLLENBQXdCO0lBQUcsQ0FBQztJQUVwRixTQUFTLENBQUMsSUFBa0I7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFHTyxJQUFJLENBQUMsSUFBa0IsRUFBRSxNQUEwQixFQUFFLFNBQWlCO1FBQzVFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7K0dBVlUsa0JBQWtCLGtCQUNULG1CQUFtQjs2R0FENUIsa0JBQWtCO0FBTzdCO0lBQUMsU0FBUzs7Ozs4Q0FHVDsyRkFWVSxrQkFBa0I7a0JBSjlCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsSUFBSSxFQUFFLEtBQUs7aUJBQ1o7OzBCQUVjLE1BQU07MkJBQUMsbUJBQW1COzRDQU8vQixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByaXptVGFibGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bUNvbXBhcmF0b3IgfSBmcm9tICcuLi90YWJsZS50eXBlcyc7XG5pbXBvcnQgeyBwcml6bVB1cmUgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogYHByaXptVGFibGVTb3J0YCxcbiAgcHVyZTogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVGFibGVTb3J0UGlwZTxUIGV4dGVuZHMgUGFydGlhbDxSZWNvcmQ8a2V5b2YgVCwgYW55Pj4+IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUHJpem1UYWJsZURpcmVjdGl2ZSkgcHJpdmF0ZSByZWFkb25seSB0YWJsZTogUHJpem1UYWJsZURpcmVjdGl2ZTxUPikge31cblxuICBwdWJsaWMgdHJhbnNmb3JtKGRhdGE6IHJlYWRvbmx5IFRbXSk6IHJlYWRvbmx5IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMuc29ydChkYXRhLCB0aGlzLnRhYmxlLnNvcnRlciwgdGhpcy50YWJsZS5kaXJlY3Rpb24pO1xuICB9XG5cbiAgQHByaXptUHVyZVxuICBwcml2YXRlIHNvcnQoZGF0YTogcmVhZG9ubHkgVFtdLCBzb3J0ZXI6IFByaXptQ29tcGFyYXRvcjxUPiwgZGlyZWN0aW9uOiAtMSB8IDEpOiByZWFkb25seSBUW10ge1xuICAgIHJldHVybiBbLi4uZGF0YV0uc29ydCgoYSwgYikgPT4gZGlyZWN0aW9uICogc29ydGVyKGEsIGIpKTtcbiAgfVxufVxuIl19