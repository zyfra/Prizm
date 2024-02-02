import { Directive, forwardRef, Inject } from '@angular/core';
import { PrizmThComponent } from '../th/th.component';
import { PrizmSortByDirective } from './sort-by.directive';
import { PrizmTableDirective } from './table.directive';
import * as i0 from "@angular/core";
import * as i1 from "./sort-by.directive";
import * as i2 from "./table.directive";
import * as i3 from "../th/th.component";
export class PrizmSortableDirective {
    constructor(sortBy, table, th) {
        this.sortBy = sortBy;
        this.table = table;
        this.th = th;
        this.sorter = () => 0;
    }
    get key() {
        return this.th.key;
    }
    ngOnInit() {
        this.sorter = this.match ? this.table.sorter : this.sorter;
        this.th.sorter = this.sorter;
    }
    ngDoCheck() {
        if (this.match && this.table.sorter !== this.sorter) {
            this.table.updateSorter(this.sorter);
        }
    }
    get match() {
        return this.sortBy.prizmSortBy === this.key;
    }
}
PrizmSortableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSortableDirective, deps: [{ token: forwardRef(() => PrizmSortByDirective) }, { token: PrizmTableDirective }, { token: PrizmThComponent }], target: i0.ɵɵFactoryTarget.Directive });
PrizmSortableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmSortableDirective, selector: "th[prizmTh][prizmSortable]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSortableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `th[prizmTh][prizmSortable]`,
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmSortByDirective, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => PrizmSortByDirective)]
                }] }, { type: i2.PrizmTableDirective, decorators: [{
                    type: Inject,
                    args: [PrizmTableDirective]
                }] }, { type: i3.PrizmThComponent, decorators: [{
                    type: Inject,
                    args: [PrizmThComponent]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3NvcnRhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLFVBQVUsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBTXhELE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFFbUIsTUFBK0IsRUFDRixLQUE2QixFQUNoQyxFQUF1QjtRQUZqRCxXQUFNLEdBQU4sTUFBTSxDQUF5QjtRQUNGLFVBQUssR0FBTCxLQUFLLENBQXdCO1FBQ2hDLE9BQUUsR0FBRixFQUFFLENBQXFCO1FBR3BFLFdBQU0sR0FBdUIsR0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRjFDLENBQUM7SUFJSixJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzRCxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELElBQVksS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUM5QyxDQUFDOzttSEEzQlUsc0JBQXNCLGtCQUV2QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUMsYUFFdEMsbUJBQW1CLGFBQ25CLGdCQUFnQjt1R0FMZixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2lCQUN2Qzs7MEJBR0ksTUFBTTsyQkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7OzBCQUU3QyxNQUFNOzJCQUFDLG1CQUFtQjs7MEJBQzFCLE1BQU07MkJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBEb0NoZWNrLCBmb3J3YXJkUmVmLCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1UaENvbXBvbmVudCB9IGZyb20gJy4uL3RoL3RoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVNvcnRCeURpcmVjdGl2ZSB9IGZyb20gJy4vc29ydC1ieS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1UYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptQ29tcGFyYXRvciB9IGZyb20gJy4uL3RhYmxlLnR5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgdGhbcHJpem1UaF1bcHJpem1Tb3J0YWJsZV1gLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVNvcnRhYmxlRGlyZWN0aXZlPFQgZXh0ZW5kcyBQYXJ0aWFsPFJlY29yZDxrZXlvZiBULCBhbnk+Pj4gaW1wbGVtZW50cyBEb0NoZWNrLCBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gUHJpem1Tb3J0QnlEaXJlY3RpdmUpKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgc29ydEJ5OiBQcml6bVNvcnRCeURpcmVjdGl2ZTxUPixcbiAgICBASW5qZWN0KFByaXptVGFibGVEaXJlY3RpdmUpIHByaXZhdGUgcmVhZG9ubHkgdGFibGU6IFByaXptVGFibGVEaXJlY3RpdmU8VD4sXG4gICAgQEluamVjdChQcml6bVRoQ29tcG9uZW50KSBwcml2YXRlIHJlYWRvbmx5IHRoOiBQcml6bVRoQ29tcG9uZW50PFQ+XG4gICkge31cblxuICBzb3J0ZXI6IFByaXptQ29tcGFyYXRvcjxUPiA9ICgpOiBudW1iZXIgPT4gMDtcblxuICBnZXQga2V5KCk6IGtleW9mIFQge1xuICAgIHJldHVybiB0aGlzLnRoLmtleTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc29ydGVyID0gdGhpcy5tYXRjaCA/IHRoaXMudGFibGUuc29ydGVyIDogdGhpcy5zb3J0ZXI7XG4gICAgdGhpcy50aC5zb3J0ZXIgPSB0aGlzLnNvcnRlcjtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tYXRjaCAmJiB0aGlzLnRhYmxlLnNvcnRlciAhPT0gdGhpcy5zb3J0ZXIpIHtcbiAgICAgIHRoaXMudGFibGUudXBkYXRlU29ydGVyKHRoaXMuc29ydGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBtYXRjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0QnkucHJpem1Tb3J0QnkgPT09IHRoaXMua2V5O1xuICB9XG59XG4iXX0=