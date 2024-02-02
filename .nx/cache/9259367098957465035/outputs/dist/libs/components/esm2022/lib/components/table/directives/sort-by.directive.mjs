import { __decorate, __metadata } from "tslib";
import { ContentChildren, Directive, Inject, Input, Output, QueryList } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { PrizmSortableDirective } from './sortable.directive';
import { PrizmTableDirective } from './table.directive';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmEmptyQueryList } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
import * as i1 from "./table.directive";
export class PrizmSortByDirective {
    constructor(table) {
        this.table = table;
        this.sortables = prizmEmptyQueryList();
        this.prizmSortBy = null;
        this.prizmSortByChange = this.table.sorterChange.pipe(filter(() => !!this.sortables.length), map(sorter => this.getKey(sorter)));
    }
    getKey(sorter) {
        return this.sortables.find(s => s.sorter === sorter)?.key || null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSortByDirective, deps: [{ token: PrizmTableDirective }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmSortByDirective, selector: "table[prizmTable][prizmSortBy]", inputs: { prizmSortBy: "prizmSortBy" }, outputs: { prizmSortByChange: "prizmSortByChange" }, queries: [{ propertyName: "sortables", predicate: PrizmSortableDirective, descendants: true }], ngImport: i0 }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSortByDirective.prototype, "prizmSortBy", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSortByDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `table[prizmTable][prizmSortBy]`,
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmTableDirective, decorators: [{
                    type: Inject,
                    args: [PrizmTableDirective]
                }] }]; }, propDecorators: { sortables: [{
                type: ContentChildren,
                args: [PrizmSortableDirective, { descendants: true }]
            }], prizmSortBy: [{
                type: Input
            }], prizmSortByChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1ieS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2RpcmVjdGl2ZXMvc29ydC1ieS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFLeEQsTUFBTSxPQUFPLG9CQUFvQjtJQWMvQixZQUEwRCxLQUE2QjtRQUE3QixVQUFLLEdBQUwsS0FBSyxDQUF3QjtRQVp0RSxjQUFTLEdBQXlDLG1CQUFtQixFQUFFLENBQUM7UUFJekYsZ0JBQVcsR0FBNEIsSUFBSSxDQUFDO1FBR25DLHNCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDdkQsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUNyQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ25DLENBQUM7SUFFd0YsQ0FBQztJQUVuRixNQUFNLENBQUMsTUFBaUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQztJQUNwRSxDQUFDOzhHQWxCVSxvQkFBb0Isa0JBY1gsbUJBQW1CO2tHQWQ1QixvQkFBb0IsNkxBQ2Qsc0JBQXNCOztBQUt2QztJQURDLGdCQUFnQixFQUFFOzt5REFDeUI7MkZBTmpDLG9CQUFvQjtrQkFIaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2lCQUMzQzs7MEJBZWMsTUFBTTsyQkFBQyxtQkFBbUI7NENBWnRCLFNBQVM7c0JBRHpCLGVBQWU7dUJBQUMsc0JBQXNCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO2dCQUs5RCxXQUFXO3NCQUZWLEtBQUs7Z0JBS0csaUJBQWlCO3NCQUR6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEluamVjdCwgSW5wdXQsIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUHJpem1Tb3J0YWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vc29ydGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptVGFibGVEaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bUNvbXBhcmF0b3IgfSBmcm9tICcuLi90YWJsZS50eXBlcyc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgcHJpem1FbXB0eVF1ZXJ5TGlzdCB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgdGFibGVbcHJpem1UYWJsZV1bcHJpem1Tb3J0QnldYCxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Tb3J0QnlEaXJlY3RpdmU8VCBleHRlbmRzIFBhcnRpYWw8UmVjb3JkPGtleW9mIFQsIGFueT4+PiB7XG4gIEBDb250ZW50Q2hpbGRyZW4oUHJpem1Tb3J0YWJsZURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBwcml2YXRlIHJlYWRvbmx5IHNvcnRhYmxlczogUXVlcnlMaXN0PFByaXptU29ydGFibGVEaXJlY3RpdmU8VD4+ID0gcHJpem1FbXB0eVF1ZXJ5TGlzdCgpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHJpem1Tb3J0Qnk6IGtleW9mIFQgfCBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcHJpem1Tb3J0QnlDaGFuZ2UgPSB0aGlzLnRhYmxlLnNvcnRlckNoYW5nZS5waXBlKFxuICAgIGZpbHRlcigoKSA9PiAhIXRoaXMuc29ydGFibGVzLmxlbmd0aCksXG4gICAgbWFwKHNvcnRlciA9PiB0aGlzLmdldEtleShzb3J0ZXIpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUHJpem1UYWJsZURpcmVjdGl2ZSkgcHJpdmF0ZSByZWFkb25seSB0YWJsZTogUHJpem1UYWJsZURpcmVjdGl2ZTxUPikge31cblxuICBwcml2YXRlIGdldEtleShzb3J0ZXI6IFByaXptQ29tcGFyYXRvcjxUPiB8IG51bGwpOiBrZXlvZiBUIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGFibGVzLmZpbmQocyA9PiBzLnNvcnRlciA9PT0gc29ydGVyKT8ua2V5IHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==