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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeComponent, deps: [{ token: PrizmTreeChildrenDirective, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTreeComponent, selector: "prizm-tree[value]", inputs: { value: "value", usePaddingIndent: "usePaddingIndent", content: "content" }, host: { attributes: { "role": "tree" } }, providers: [
            {
                provide: PRIZM_TREE_NODE,
                useExisting: PrizmTreeComponent,
            },
        ], viewQueries: [{ propertyName: "item", first: true, predicate: PrizmTreeItemComponent, descendants: true }, { propertyName: "child", first: true, predicate: PrizmTreeComponent, descendants: true }], exportAs: ["prizmTree"], usesInheritance: true, ngImport: i0, template: "<prizm-tree-item\n  #view\n  *prizmLet=\"children$ | async as children\"\n  [prizmTreeNode]=\"value\"\n  [usePaddingIndent]=\"usePaddingIndent\"\n>\n  <ng-container *ngIf=\"$any(value) !== children\">\n    <div *polymorphOutlet=\"content as val; context: { $implicit: value, node: view }\">{{ val }}</div>\n  </ng-container>\n\n  <prizm-tree *ngFor=\"let child of children\" [value]=\"child\" [content]=\"content\"></prizm-tree>\n</prizm-tree-item>\n", styles: [":host{position:relative;display:block}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "directive", type: i3.PrizmLetDirective, selector: "[prizmLet]", inputs: ["prizmLet"], exportAs: ["prizmLet"] }, { kind: "component", type: PrizmTreeComponent, selector: "prizm-tree[value]", inputs: ["value", "usePaddingIndent", "content"], exportAs: ["prizmTree"] }, { kind: "component", type: i4.PrizmTreeItemComponent, selector: "prizm-tree-item", inputs: ["usePaddingIndent", "active"], exportAs: ["prizmTreeItem"] }, { kind: "directive", type: i5.PrizmTreeNodeDirective, selector: "prizm-tree-item[prizmTreeNode]", inputs: ["prizmTreeNode"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTreeComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUvY29tcG9uZW50cy90cmVlL3RyZWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90cmVlL2NvbXBvbmVudHMvdHJlZS90cmVlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUdULE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7OztBQW1CdkUsTUFBTSxPQUFPLGtCQUFzQixTQUFRLG1CQUFtQjtJQTBCNUQsWUFHVyxTQUErQztRQUV4RCxLQUFLLEVBQUUsQ0FBQztRQUZDLGNBQVMsR0FBVCxTQUFTLENBQXNDO1FBNUJ6QyxXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQVdyQyxjQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ25DLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDbkMsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztRQUVnQixZQUFPLEdBQUcsU0FBUyxDQUFDO1FBTXRDLFlBQU8sR0FBcUIsQ0FBQyxFQUFFLFNBQVMsRUFBTyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFRdEUsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBWSxPQUFPO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxlQUFlLElBQUksMEJBQTBCLENBQUMsY0FBYyxDQUFDO0lBQ3RGLENBQUM7OEdBMUNVLGtCQUFrQixrQkE0Qm5CLDBCQUEwQjtrR0E1QnpCLGtCQUFrQiw0S0FabEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsV0FBVyxFQUFFLGtCQUFrQjthQUNoQztTQUNGLGdFQWFVLHNCQUFzQix3RUFHdEIsa0JBQWtCLGdHQzdDL0Isb2NBWUEsdW1CRHdCYSxrQkFBa0I7OzJGQUFsQixrQkFBa0I7a0JBakI5QixTQUFTOytCQUNFLG1CQUFtQixtQkFHWix1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixXQUFXLG9CQUFvQjt5QkFDaEM7cUJBQ0YsUUFFSzt3QkFDSixJQUFJLEVBQUUsTUFBTTtxQkFDYixZQUNTLFdBQVc7OzBCQTZCbEIsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQywwQkFBMEI7NENBeEJwQyxLQUFLO3NCQURKLEtBQUs7Z0JBSUcsSUFBSTtzQkFEWixTQUFTO3VCQUFDLHNCQUFzQjtnQkFJeEIsS0FBSztzQkFEYixTQUFTO3VCQUFDLGtCQUFrQjtnQkFZN0IsZ0JBQWdCO3NCQURmLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRG9DaGVjayxcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3RhcnRXaXRoLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bVRyZWVDaGlsZHJlbkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdHJlZS1jaGlsZHJlbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUFJJWk1fVFJFRV9OT0RFIH0gZnJvbSAnLi4vLi4vbWlzYy90cmVlLnRva2Vucyc7XG5pbXBvcnQgeyBQcml6bVRyZWVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vdHJlZS1pdGVtL3RyZWUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1IYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUG9seW1vcnBoQ29udGVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2Fic3RyYWN0L2ludGVyYWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tdHJlZVt2YWx1ZV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWUuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBSSVpNX1RSRUVfTk9ERSxcbiAgICAgIHVzZUV4aXN0aW5nOiBQcml6bVRyZWVDb21wb25lbnQsXG4gICAgfSxcbiAgXSxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XG4gIGhvc3Q6IHtcbiAgICByb2xlOiAndHJlZScsXG4gIH0sXG4gIGV4cG9ydEFzOiAncHJpem1UcmVlJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1UcmVlQ29tcG9uZW50PFQ+IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBwcml2YXRlIHJlYWRvbmx5IGNoZWNrJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQElucHV0KClcbiAgdmFsdWUhOiBUO1xuXG4gIEBWaWV3Q2hpbGQoUHJpem1UcmVlSXRlbUNvbXBvbmVudClcbiAgcmVhZG9ubHkgaXRlbT86IFByaXptVHJlZUl0ZW1Db21wb25lbnQ7XG5cbiAgQFZpZXdDaGlsZChQcml6bVRyZWVDb21wb25lbnQpXG4gIHJlYWRvbmx5IGNoaWxkPzogUHJpem1UcmVlQ29tcG9uZW50PFQ+O1xuXG4gIHJlYWRvbmx5IGNoaWxkcmVuJCA9IHRoaXMuY2hlY2skLnBpcGUoXG4gICAgc3RhcnRXaXRoKG51bGwpLFxuICAgIG1hcCgoKSA9PiB0aGlzLmhhbmRsZXIodGhpcy52YWx1ZSkpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgKTtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX3RyZWUnO1xuXG4gIEBJbnB1dCgpXG4gIHVzZVBhZGRpbmdJbmRlbnQhOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IFBvbHltb3JwaENvbnRlbnQgPSAoeyAkaW1wbGljaXQgfTogYW55KSA9PiBTdHJpbmcoJGltcGxpY2l0KTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUHJpem1UcmVlQ2hpbGRyZW5EaXJlY3RpdmUpXG4gICAgcmVhZG9ubHkgZGlyZWN0aXZlOiBQcml6bVRyZWVDaGlsZHJlbkRpcmVjdGl2ZTxUPiB8IG51bGxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrJC5uZXh0KCk7XG4gICAgdGhpcy5pdGVtPy5uZ0RvQ2hlY2soKTtcbiAgICB0aGlzLmNoaWxkPy5uZ0RvQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGhhbmRsZXIoKTogUHJpem1IYW5kbGVyPFQsIHJlYWRvbmx5IFRbXT4ge1xuICAgIHJldHVybiB0aGlzLmRpcmVjdGl2ZT8uY2hpbGRyZW5IYW5kbGVyID8/IFByaXptVHJlZUNoaWxkcmVuRGlyZWN0aXZlLmRlZmF1bHRIYW5kbGVyO1xuICB9XG59XG4iLCI8cHJpem0tdHJlZS1pdGVtXG4gICN2aWV3XG4gICpwcml6bUxldD1cImNoaWxkcmVuJCB8IGFzeW5jIGFzIGNoaWxkcmVuXCJcbiAgW3ByaXptVHJlZU5vZGVdPVwidmFsdWVcIlxuICBbdXNlUGFkZGluZ0luZGVudF09XCJ1c2VQYWRkaW5nSW5kZW50XCJcbj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiRhbnkodmFsdWUpICE9PSBjaGlsZHJlblwiPlxuICAgIDxkaXYgKnBvbHltb3JwaE91dGxldD1cImNvbnRlbnQgYXMgdmFsOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogdmFsdWUsIG5vZGU6IHZpZXcgfVwiPnt7IHZhbCB9fTwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8cHJpem0tdHJlZSAqbmdGb3I9XCJsZXQgY2hpbGQgb2YgY2hpbGRyZW5cIiBbdmFsdWVdPVwiY2hpbGRcIiBbY29udGVudF09XCJjb250ZW50XCI+PC9wcml6bS10cmVlPlxuPC9wcml6bS10cmVlLWl0ZW0+XG4iXX0=