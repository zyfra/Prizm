import { ChangeDetectionStrategy, Component, Inject, Input, Optional, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { PrizmTreeChildrenDirective } from '../../directives/tree-children.directive';
import { PRIZM_TREE_NODE } from '../../misc/tree.tokens';
import { PrizmTreeItemComponent } from '../tree-item/tree-item.component';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../directives/polymorph/directives/outlet";
import * as i3 from "@prizm-ui/helpers";
import * as i4 from "../tree-item/tree-item.component";
import * as i5 from "../../directives/tree-node.directive";
import * as i6 from "../../directives/tree-children.directive";
export class PrizmTreeComponent extends PrizmAbstractTestId {
    constructor(directive) {
        super();
        this.directive = directive;
        this.check$ = new Subject();
        this.children$ = this.check$.pipe(startWith(null), map(() => this.handler(this.value)), distinctUntilChanged());
        this.testId_ = 'ui_tree';
        this.content = ({ $implicit }) => String($implicit);
    }
    ngDoCheck() {
        this.check$.next();
        this.item?.ngDoCheck();
        this.child?.ngDoCheck();
    }
    get handler() {
        return this.directive?.childrenHandler ?? PrizmTreeChildrenDirective.defaultHandler;
    }
}
PrizmTreeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeComponent, deps: [{ token: PrizmTreeChildrenDirective, optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmTreeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTreeComponent, selector: "prizm-tree[value]", inputs: { value: "value", usePaddingIndent: "usePaddingIndent", content: "content" }, host: { attributes: { "role": "tree" } }, providers: [
        {
            provide: PRIZM_TREE_NODE,
            useExisting: PrizmTreeComponent,
        },
    ], viewQueries: [{ propertyName: "item", first: true, predicate: PrizmTreeItemComponent, descendants: true }, { propertyName: "child", first: true, predicate: PrizmTreeComponent, descendants: true }], exportAs: ["prizmTree"], usesInheritance: true, ngImport: i0, template: "<prizm-tree-item\n  #view\n  *prizmLet=\"children$ | async as children\"\n  [prizmTreeNode]=\"value\"\n  [usePaddingIndent]=\"usePaddingIndent\"\n>\n  <ng-container *ngIf=\"$any(value) !== children\">\n    <div *polymorphOutlet=\"content as val; context: { $implicit: value, node: view }\">{{ val }}</div>\n  </ng-container>\n\n  <prizm-tree *ngFor=\"let child of children\" [value]=\"child\" [content]=\"content\"></prizm-tree>\n</prizm-tree-item>\n", styles: [":host{position:relative;display:block}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "directive", type: i3.PrizmLetDirective, selector: "[prizmLet]", inputs: ["prizmLet"], exportAs: ["prizmLet"] }, { kind: "component", type: PrizmTreeComponent, selector: "prizm-tree[value]", inputs: ["value", "usePaddingIndent", "content"], exportAs: ["prizmTree"] }, { kind: "component", type: i4.PrizmTreeItemComponent, selector: "prizm-tree-item", inputs: ["usePaddingIndent", "active"], exportAs: ["prizmTreeItem"] }, { kind: "directive", type: i5.PrizmTreeNodeDirective, selector: "prizm-tree-item[prizmTreeNode]", inputs: ["prizmTreeNode"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-tree[value]', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: PRIZM_TREE_NODE,
                            useExisting: PrizmTreeComponent,
                        },
                    ], host: {
                        role: 'tree',
                    }, exportAs: 'prizmTree', template: "<prizm-tree-item\n  #view\n  *prizmLet=\"children$ | async as children\"\n  [prizmTreeNode]=\"value\"\n  [usePaddingIndent]=\"usePaddingIndent\"\n>\n  <ng-container *ngIf=\"$any(value) !== children\">\n    <div *polymorphOutlet=\"content as val; context: { $implicit: value, node: view }\">{{ val }}</div>\n  </ng-container>\n\n  <prizm-tree *ngFor=\"let child of children\" [value]=\"child\" [content]=\"content\"></prizm-tree>\n</prizm-tree-item>\n", styles: [":host{position:relative;display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i6.PrizmTreeChildrenDirective, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PrizmTreeChildrenDirective]
                }] }]; }, propDecorators: { value: [{
                type: Input
            }], item: [{
                type: ViewChild,
                args: [PrizmTreeItemComponent]
            }], child: [{
                type: ViewChild,
                args: [PrizmTreeComponent]
            }], usePaddingIndent: [{
                type: Input
            }], content: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUvY29tcG9uZW50cy90cmVlL3RyZWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90cmVlL2NvbXBvbmVudHMvdHJlZS90cmVlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUdULE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7OztBQW1CdkUsTUFBTSxPQUFPLGtCQUFzQixTQUFRLG1CQUFtQjtJQTBCNUQsWUFHVyxTQUErQztRQUV4RCxLQUFLLEVBQUUsQ0FBQztRQUZDLGNBQVMsR0FBVCxTQUFTLENBQXNDO1FBNUJ6QyxXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVdyQyxjQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ25DLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDbkMsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztRQUVnQixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBTXRDLFlBQU8sR0FBcUIsQ0FBQyxFQUFFLFNBQVMsRUFBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFRdEUsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBWSxPQUFPO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxlQUFlLElBQUksMEJBQTBCLENBQUMsY0FBYyxDQUFDO0lBQ3RGLENBQUM7OytHQTFDVSxrQkFBa0Isa0JBNEJuQiwwQkFBMEI7bUdBNUJ6QixrQkFBa0IsNEtBWmxCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsZUFBZTtZQUN4QixXQUFXLEVBQUUsa0JBQWtCO1NBQ2hDO0tBQ0YsZ0VBYVUsc0JBQXNCLHdFQUd0QixrQkFBa0IsZ0dDN0MvQixvY0FZQSx1bUJEd0JhLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQWpCOUIsU0FBUzsrQkFDRSxtQkFBbUIsbUJBR1osdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsV0FBVyxvQkFBb0I7eUJBQ2hDO3FCQUNGLFFBRUs7d0JBQ0osSUFBSSxFQUFFLE1BQU07cUJBQ2IsWUFDUyxXQUFXOzswQkE2QmxCLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsMEJBQTBCOzRDQXhCcEMsS0FBSztzQkFESixLQUFLO2dCQUlHLElBQUk7c0JBRFosU0FBUzt1QkFBQyxzQkFBc0I7Z0JBSXhCLEtBQUs7c0JBRGIsU0FBUzt1QkFBQyxrQkFBa0I7Z0JBWTdCLGdCQUFnQjtzQkFEZixLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIERvQ2hlY2ssXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN0YXJ0V2l0aCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1UcmVlQ2hpbGRyZW5EaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3RyZWUtY2hpbGRyZW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IFBSSVpNX1RSRUVfTk9ERSB9IGZyb20gJy4uLy4uL21pc2MvdHJlZS50b2tlbnMnO1xuaW1wb3J0IHsgUHJpem1UcmVlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL3RyZWUtaXRlbS90cmVlLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFBvbHltb3JwaENvbnRlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9hYnN0cmFjdC9pbnRlcmFjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLXRyZWVbdmFsdWVdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cmVlLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUklaTV9UUkVFX05PREUsXG4gICAgICB1c2VFeGlzdGluZzogUHJpem1UcmVlQ29tcG9uZW50LFxuICAgIH0sXG4gIF0sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgcm9sZTogJ3RyZWUnLFxuICB9LFxuICBleHBvcnRBczogJ3ByaXptVHJlZScsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVHJlZUNvbXBvbmVudDxUPiBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgcHJpdmF0ZSByZWFkb25seSBjaGVjayQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBJbnB1dCgpXG4gIHZhbHVlITogVDtcblxuICBAVmlld0NoaWxkKFByaXptVHJlZUl0ZW1Db21wb25lbnQpXG4gIHJlYWRvbmx5IGl0ZW0/OiBQcml6bVRyZWVJdGVtQ29tcG9uZW50O1xuXG4gIEBWaWV3Q2hpbGQoUHJpem1UcmVlQ29tcG9uZW50KVxuICByZWFkb25seSBjaGlsZD86IFByaXptVHJlZUNvbXBvbmVudDxUPjtcblxuICByZWFkb25seSBjaGlsZHJlbiQgPSB0aGlzLmNoZWNrJC5waXBlKFxuICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICBtYXAoKCkgPT4gdGhpcy5oYW5kbGVyKHRoaXMudmFsdWUpKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICk7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV90cmVlJztcblxuICBASW5wdXQoKVxuICB1c2VQYWRkaW5nSW5kZW50ITogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBjb250ZW50OiBQb2x5bW9ycGhDb250ZW50ID0gKHsgJGltcGxpY2l0IH06IGFueSkgPT4gU3RyaW5nKCRpbXBsaWNpdCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFByaXptVHJlZUNoaWxkcmVuRGlyZWN0aXZlKVxuICAgIHJlYWRvbmx5IGRpcmVjdGl2ZTogUHJpem1UcmVlQ2hpbGRyZW5EaXJlY3RpdmU8VD4gfCBudWxsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGVjayQubmV4dCgpO1xuICAgIHRoaXMuaXRlbT8ubmdEb0NoZWNrKCk7XG4gICAgdGhpcy5jaGlsZD8ubmdEb0NoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBoYW5kbGVyKCk6IFByaXptSGFuZGxlcjxULCByZWFkb25seSBUW10+IHtcbiAgICByZXR1cm4gdGhpcy5kaXJlY3RpdmU/LmNoaWxkcmVuSGFuZGxlciA/PyBQcml6bVRyZWVDaGlsZHJlbkRpcmVjdGl2ZS5kZWZhdWx0SGFuZGxlcjtcbiAgfVxufVxuIiwiPHByaXptLXRyZWUtaXRlbVxuICAjdmlld1xuICAqcHJpem1MZXQ9XCJjaGlsZHJlbiQgfCBhc3luYyBhcyBjaGlsZHJlblwiXG4gIFtwcml6bVRyZWVOb2RlXT1cInZhbHVlXCJcbiAgW3VzZVBhZGRpbmdJbmRlbnRdPVwidXNlUGFkZGluZ0luZGVudFwiXG4+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIkYW55KHZhbHVlKSAhPT0gY2hpbGRyZW5cIj5cbiAgICA8ZGl2ICpwb2x5bW9ycGhPdXRsZXQ9XCJjb250ZW50IGFzIHZhbDsgY29udGV4dDogeyAkaW1wbGljaXQ6IHZhbHVlLCBub2RlOiB2aWV3IH1cIj57eyB2YWwgfX08L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHByaXptLXRyZWUgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGNoaWxkcmVuXCIgW3ZhbHVlXT1cImNoaWxkXCIgW2NvbnRlbnRdPVwiY29udGVudFwiPjwvcHJpem0tdHJlZT5cbjwvcHJpem0tdHJlZS1pdGVtPlxuIl19