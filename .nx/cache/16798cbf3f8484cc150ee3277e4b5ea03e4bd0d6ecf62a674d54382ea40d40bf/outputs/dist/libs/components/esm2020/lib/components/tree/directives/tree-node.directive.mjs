import { Directive, Inject, Input, Optional } from '@angular/core';
import { PrizmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PRIZM_TREE_ACCESSOR } from '../misc/tree.tokens';
import * as i0 from "@angular/core";
import * as i1 from "../components/tree-item/tree-item.component";
export class PrizmTreeNodeDirective {
    set prizmTreeNode(value) {
        this.directive?.register(this.component, value);
    }
    constructor(directive, component) {
        this.directive = directive;
        this.component = component;
    }
    ngOnDestroy() {
        this.directive?.unregister(this.component);
    }
}
PrizmTreeNodeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeNodeDirective, deps: [{ token: PRIZM_TREE_ACCESSOR, optional: true }, { token: PrizmTreeItemComponent }], target: i0.ɵɵFactoryTarget.Directive });
PrizmTreeNodeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTreeNodeDirective, selector: "prizm-tree-item[prizmTreeNode]", inputs: { prizmTreeNode: "prizmTreeNode" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeNodeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'prizm-tree-item[prizmTreeNode]',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_TREE_ACCESSOR]
                }] }, { type: i1.PrizmTreeItemComponent, decorators: [{
                    type: Inject,
                    args: [PrizmTreeItemComponent]
                }] }]; }, propDecorators: { prizmTreeNode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ub2RlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdHJlZS9kaXJlY3RpdmVzL3RyZWUtbm9kZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBSzFELE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsSUFDVyxhQUFhLENBQUMsS0FBUTtRQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxZQUdtQixTQUErQixFQUUvQixTQUFpQztRQUZqQyxjQUFTLEdBQVQsU0FBUyxDQUFzQjtRQUUvQixjQUFTLEdBQVQsU0FBUyxDQUF3QjtJQUNqRCxDQUFDO0lBRUcsV0FBVztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7bUhBaEJVLHNCQUFzQixrQkFRdkIsbUJBQW1CLDZCQUVuQixzQkFBc0I7dUdBVnJCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUhsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7aUJBQzNDOzswQkFRSSxRQUFROzswQkFDUixNQUFNOzJCQUFDLG1CQUFtQjs7MEJBRTFCLE1BQU07MkJBQUMsc0JBQXNCOzRDQVJyQixhQUFhO3NCQUR2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByaXptVHJlZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3RyZWUtaXRlbS90cmVlLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptVHJlZUFjY2Vzc29yIH0gZnJvbSAnLi4vbWlzYy90cmVlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgUFJJWk1fVFJFRV9BQ0NFU1NPUiB9IGZyb20gJy4uL21pc2MvdHJlZS50b2tlbnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdwcml6bS10cmVlLWl0ZW1bcHJpem1UcmVlTm9kZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRyZWVOb2RlRGlyZWN0aXZlPFQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwcml6bVRyZWVOb2RlKHZhbHVlOiBUKSB7XG4gICAgdGhpcy5kaXJlY3RpdmU/LnJlZ2lzdGVyKHRoaXMuY29tcG9uZW50LCB2YWx1ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUFJJWk1fVFJFRV9BQ0NFU1NPUilcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRpcmVjdGl2ZTogUHJpem1UcmVlQWNjZXNzb3I8VD4sXG4gICAgQEluamVjdChQcml6bVRyZWVJdGVtQ29tcG9uZW50KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50OiBQcml6bVRyZWVJdGVtQ29tcG9uZW50XG4gICkge31cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3RpdmU/LnVucmVnaXN0ZXIodGhpcy5jb21wb25lbnQpO1xuICB9XG59XG4iXX0=