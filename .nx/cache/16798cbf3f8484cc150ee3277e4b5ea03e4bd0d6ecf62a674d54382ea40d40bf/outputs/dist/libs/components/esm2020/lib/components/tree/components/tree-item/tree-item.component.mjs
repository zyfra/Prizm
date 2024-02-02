import { Input, ChangeDetectionStrategy, Component, ContentChildren, ElementRef, forwardRef, HostBinding, Inject, QueryList, } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { PRIZM_TREE_CONTENT, PRIZM_TREE_CONTROLLER, PRIZM_TREE_LEVEL, PRIZM_TREE_NODE, } from '../../misc/tree.tokens';
import { PRIZM_TREE_ITEM_PROVIDERS } from './tree-item.providers';
import { PRIZM_EMPTY_QUERY } from '@prizm-ui/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../directives/polymorph/directives/outlet";
import * as i3 from "../../../expand/expand.component";
export class PrizmTreeItemComponent extends PrizmAbstractTestId {
    get isExpandable() {
        return !!this.nested.length;
    }
    get isExpanded() {
        return this.controller.isExpanded(this);
    }
    get levelVar() {
        return this.level;
    }
    constructor(elementRef, controller, level, content) {
        super();
        this.elementRef = elementRef;
        this.controller = controller;
        this.level = level;
        this.content = content;
        this.nested = PRIZM_EMPTY_QUERY;
        this.change$ = new Subject();
        this.expanded$ = this.change$.pipe(startWith(null), map(() => this.isExpanded), distinctUntilChanged());
        this.attached$ = this.change$.pipe(map(() => this.elementRef.nativeElement.isConnected), distinctUntilChanged());
        this.testId_ = 'ui_tree--item';
        this.active = false;
    }
    ngDoCheck() {
        this.change$.next();
    }
}
PrizmTreeItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeItemComponent, deps: [{ token: ElementRef }, { token: forwardRef(() => PRIZM_TREE_CONTROLLER) }, { token: forwardRef(() => PRIZM_TREE_LEVEL) }, { token: forwardRef(() => PRIZM_TREE_CONTENT) }], target: i0.ɵɵFactoryTarget.Component });
PrizmTreeItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTreeItemComponent, selector: "prizm-tree-item", inputs: { usePaddingIndent: "usePaddingIndent", active: "active" }, host: { attributes: { "role": "treeitem" }, properties: { "class._expandable": "this.isExpandable", "class.use-padding-indent": "this.usePaddingIndent", "class.active": "this.active", "style.--prizm-tree-level": "this.levelVar" } }, providers: PRIZM_TREE_ITEM_PROVIDERS, queries: [{ propertyName: "nested", predicate: PRIZM_TREE_NODE }], exportAs: ["prizmTreeItem"], usesInheritance: true, ngImport: i0, template: "<ng-template #template>\n  <ng-content></ng-content>\n</ng-template>\n<div\n  class=\"prizm-tree-item__dynamic-content prizm-tree-item__main prizm-font-main-body-12\"\n  [style.--prizm-tree-item-indent-level]=\"level\"\n>\n  <ng-container *polymorphOutlet=\"content; context: { $implicit: this, template: template }\"> </ng-container>\n</div>\n<prizm-expand\n  class=\"prizm-tree-item__children prizm-font-main-body-12\"\n  *ngIf=\"isExpandable\"\n  [expanded]=\"expanded$ | async\"\n  role=\"group\"\n>\n  <div>\n    <ng-content select=\"prizm-tree-item\"></ng-content>\n    <ng-content select=\"prizm-tree\"></ng-content>\n  </div>\n</prizm-expand>\n<ng-container *ngIf=\"attached$ | async\"></ng-container>\n", styles: [":host{display:block;color:var(--prizm-v3-text-icon-secondary)}:host.use-padding-indent .prizm-tree-item__children{margin-left:0}:host.use-padding-indent .prizm-tree-item__dynamic-content{padding-left:calc((var(--prizm-tree-item-indent, 24) * var(--prizm-tree-item-indent-level)) * 1px)}.prizm-tree-item__children{position:relative;margin-left:var(--prizm-tree-item-indent, 24px)}.prizm-tree-item__dynamic-content{margin:4px 0}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "component", type: i3.PrizmExpandComponent, selector: "prizm-expand", inputs: ["isLoading", "expanded"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTreeItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-tree-item', changeDetection: ChangeDetectionStrategy.OnPush, providers: PRIZM_TREE_ITEM_PROVIDERS, host: {
                        role: 'treeitem',
                    }, exportAs: 'prizmTreeItem', template: "<ng-template #template>\n  <ng-content></ng-content>\n</ng-template>\n<div\n  class=\"prizm-tree-item__dynamic-content prizm-tree-item__main prizm-font-main-body-12\"\n  [style.--prizm-tree-item-indent-level]=\"level\"\n>\n  <ng-container *polymorphOutlet=\"content; context: { $implicit: this, template: template }\"> </ng-container>\n</div>\n<prizm-expand\n  class=\"prizm-tree-item__children prizm-font-main-body-12\"\n  *ngIf=\"isExpandable\"\n  [expanded]=\"expanded$ | async\"\n  role=\"group\"\n>\n  <div>\n    <ng-content select=\"prizm-tree-item\"></ng-content>\n    <ng-content select=\"prizm-tree\"></ng-content>\n  </div>\n</prizm-expand>\n<ng-container *ngIf=\"attached$ | async\"></ng-container>\n", styles: [":host{display:block;color:var(--prizm-v3-text-icon-secondary)}:host.use-padding-indent .prizm-tree-item__children{margin-left:0}:host.use-padding-indent .prizm-tree-item__dynamic-content{padding-left:calc((var(--prizm-tree-item-indent, 24) * var(--prizm-tree-item-indent-level)) * 1px)}.prizm-tree-item__children{position:relative;margin-left:var(--prizm-tree-item-indent, 24px)}.prizm-tree-item__dynamic-content{margin:4px 0}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => PRIZM_TREE_CONTROLLER)]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => PRIZM_TREE_LEVEL)]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => PRIZM_TREE_CONTENT)]
                }] }]; }, propDecorators: { nested: [{
                type: ContentChildren,
                args: [PRIZM_TREE_NODE]
            }], isExpandable: [{
                type: HostBinding,
                args: ['class._expandable']
            }], usePaddingIndent: [{
                type: HostBinding,
                args: ['class.use-padding-indent']
            }, {
                type: Input
            }], active: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.active']
            }], levelVar: [{
                type: HostBinding,
                args: ['style.--prizm-tree-level']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdHJlZS9jb21wb25lbnRzL3RyZWUtaXRlbS90cmVlLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90cmVlL2NvbXBvbmVudHMvdHJlZS1pdGVtL3RyZWUtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUVmLFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIscUJBQXFCLEVBQ3JCLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBY3ZFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxtQkFBbUI7SUFtQjdELElBQ0ksWUFBWTtRQUNkLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFVRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBRW1CLFVBQW1DLEVBRW5DLFVBQStCLEVBRXZDLEtBQWEsRUFFYixPQUF5QjtRQUVsQyxLQUFLLEVBQUUsQ0FBQztRQVJTLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBRW5DLGVBQVUsR0FBVixVQUFVLENBQXFCO1FBRXZDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFFYixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQS9DbkIsV0FBTSxHQUF1QixpQkFBaUIsQ0FBQztRQUUvQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV0QyxjQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3BDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUMxQixvQkFBb0IsRUFBRSxDQUN2QixDQUFDO1FBRU8sY0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNwQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQ3BELG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7UUFFZ0IsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQWlCNUMsV0FBTSxHQUFHLEtBQUssQ0FBQztJQWtCZixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7bUhBeERVLHNCQUFzQixrQkEwQ3ZCLFVBQVUsYUFFVixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsYUFFdkMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGFBRWxDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt1R0FoRG5DLHNCQUFzQix1VkFQdEIseUJBQXlCLGlEQVFuQixlQUFzQixpRkN2Q3pDLHlzQkFxQkE7MkZEaUJhLHNCQUFzQjtrQkFabEMsU0FBUzsrQkFDRSxpQkFBaUIsbUJBR1YsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyx5QkFBeUIsUUFFOUI7d0JBQ0osSUFBSSxFQUFFLFVBQVU7cUJBQ2pCLFlBQ1MsZUFBZTs7MEJBNEN0QixNQUFNOzJCQUFDLFVBQVU7OzBCQUVqQixNQUFNOzJCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzs7MEJBRTlDLE1BQU07MkJBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDOzswQkFFekMsTUFBTTsyQkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7NENBOUM3QixNQUFNO3NCQUR0QixlQUFlO3VCQUFDLGVBQXNCO2dCQW1CbkMsWUFBWTtzQkFEZixXQUFXO3VCQUFDLG1CQUFtQjtnQkFXaEMsZ0JBQWdCO3NCQUZmLFdBQVc7dUJBQUMsMEJBQTBCOztzQkFDdEMsS0FBSztnQkFLTixNQUFNO3NCQUZMLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsY0FBYztnQkFJdkIsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERvQ2hlY2ssXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIFF1ZXJ5TGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb2x5bW9ycGhDb250ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bVRyZWVDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vbWlzYy90cmVlLmludGVyZmFjZXMnO1xuaW1wb3J0IHtcbiAgUFJJWk1fVFJFRV9DT05URU5ULFxuICBQUklaTV9UUkVFX0NPTlRST0xMRVIsXG4gIFBSSVpNX1RSRUVfTEVWRUwsXG4gIFBSSVpNX1RSRUVfTk9ERSxcbn0gZnJvbSAnLi4vLi4vbWlzYy90cmVlLnRva2Vucyc7XG5pbXBvcnQgeyBQUklaTV9UUkVFX0lURU1fUFJPVklERVJTIH0gZnJvbSAnLi90cmVlLWl0ZW0ucHJvdmlkZXJzJztcbmltcG9ydCB7IFBSSVpNX0VNUFRZX1FVRVJZIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2Fic3RyYWN0L2ludGVyYWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tdHJlZS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWUtaXRlbS5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBQUklaTV9UUkVFX0lURU1fUFJPVklERVJTLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdDoge1xuICAgIHJvbGU6ICd0cmVlaXRlbScsXG4gIH0sXG4gIGV4cG9ydEFzOiAncHJpem1UcmVlSXRlbScsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVHJlZUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIGltcGxlbWVudHMgRG9DaGVjayB7XG4gIEBDb250ZW50Q2hpbGRyZW4oUFJJWk1fVFJFRV9OT0RFIGFzIGFueSlcbiAgcHJpdmF0ZSByZWFkb25seSBuZXN0ZWQ6IFF1ZXJ5TGlzdDx1bmtub3duPiA9IFBSSVpNX0VNUFRZX1FVRVJZO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcmVhZG9ubHkgZXhwYW5kZWQkID0gdGhpcy5jaGFuZ2UkLnBpcGUoXG4gICAgc3RhcnRXaXRoKG51bGwpLFxuICAgIG1hcCgoKSA9PiB0aGlzLmlzRXhwYW5kZWQpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgKTtcblxuICByZWFkb25seSBhdHRhY2hlZCQgPSB0aGlzLmNoYW5nZSQucGlwZShcbiAgICBtYXAoKCkgPT4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaXNDb25uZWN0ZWQpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgKTtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX3RyZWUtLWl0ZW0nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuX2V4cGFuZGFibGUnKVxuICBnZXQgaXNFeHBhbmRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMubmVzdGVkLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBpc0V4cGFuZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIuaXNFeHBhbmRlZCh0aGlzKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudXNlLXBhZGRpbmctaW5kZW50JylcbiAgQElucHV0KClcbiAgdXNlUGFkZGluZ0luZGVudCE6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBhY3RpdmUgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi0tcHJpem0tdHJlZS1sZXZlbCcpXG4gIGdldCBsZXZlbFZhcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXZlbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZilcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBQUklaTV9UUkVFX0NPTlRST0xMRVIpKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udHJvbGxlcjogUHJpem1UcmVlQ29udHJvbGxlcixcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gUFJJWk1fVFJFRV9MRVZFTCkpXG4gICAgcmVhZG9ubHkgbGV2ZWw6IG51bWJlcixcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gUFJJWk1fVFJFRV9DT05URU5UKSlcbiAgICByZWFkb25seSBjb250ZW50OiBQb2x5bW9ycGhDb250ZW50XG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoKTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbjxkaXZcbiAgY2xhc3M9XCJwcml6bS10cmVlLWl0ZW1fX2R5bmFtaWMtY29udGVudCBwcml6bS10cmVlLWl0ZW1fX21haW4gcHJpem0tZm9udC1tYWluLWJvZHktMTJcIlxuICBbc3R5bGUuLS1wcml6bS10cmVlLWl0ZW0taW5kZW50LWxldmVsXT1cImxldmVsXCJcbj5cbiAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwiY29udGVudDsgY29udGV4dDogeyAkaW1wbGljaXQ6IHRoaXMsIHRlbXBsYXRlOiB0ZW1wbGF0ZSB9XCI+IDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG48cHJpem0tZXhwYW5kXG4gIGNsYXNzPVwicHJpem0tdHJlZS1pdGVtX19jaGlsZHJlbiBwcml6bS1mb250LW1haW4tYm9keS0xMlwiXG4gICpuZ0lmPVwiaXNFeHBhbmRhYmxlXCJcbiAgW2V4cGFuZGVkXT1cImV4cGFuZGVkJCB8IGFzeW5jXCJcbiAgcm9sZT1cImdyb3VwXCJcbj5cbiAgPGRpdj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwcml6bS10cmVlLWl0ZW1cIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicHJpem0tdHJlZVwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L3ByaXptLWV4cGFuZD5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJhdHRhY2hlZCQgfCBhc3luY1wiPjwvbmctY29udGFpbmVyPlxuIl19