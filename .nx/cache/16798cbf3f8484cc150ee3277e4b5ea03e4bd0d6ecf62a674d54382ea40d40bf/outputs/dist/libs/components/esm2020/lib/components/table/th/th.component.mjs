import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, Inject, Input, Optional, } from '@angular/core';
import { PrizmHeadDirective } from '../directives/head.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_ELEMENT_REF } from '../../../tokens';
import { PrizmTableSortKeyException } from '../../../exceptions';
import { PrizmTableSorterService } from '../service';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../service";
import * as i2 from "@angular/common";
import * as i3 from "../../icon/icon.component";
import * as i4 from "../directives/resized.directive";
import * as i5 from "../directives/head.directive";
import * as i6 from "../directives/table.directive";
export class PrizmThComponent {
    get isSortable() {
        return this.sortable || typeof this.sorter === 'function';
    }
    constructor(head, el, sorterService, table) {
        this.head = head;
        this.el = el;
        this.sorterService = sorterService;
        this.table = table;
        this.sorter = null;
        this.resizable = false;
        this.sortable = false;
        this.width = null;
    }
    get key() {
        if (!this.head) {
            throw new PrizmTableSortKeyException();
        }
        return this.head.prizmHead;
    }
    get isCurrent() {
        return this.sorterService.isActive(this.key);
    }
    get idx() {
        return this.sorterService.idx(this.key);
    }
    get count() {
        return this.sorterService.count;
    }
    get num() {
        const idx = this.idx;
        if (idx === -1)
            return null;
        return idx + 1;
    }
    get sortItem() {
        return this.sorterService.cell(this.key);
    }
    get icon$() {
        return this.sorterService.changes$.pipe(map(() => !this.isCurrent
            ? 'arrows-swap-vert-2'
            : this.sorterService.cellOrder(this.key) === 'asc'
                ? `sort-asc-arr`
                : `sort-desc-arr`));
    }
    onResized(width) {
        this.width = width;
    }
    updateSorter(event) {
        event.preventDefault();
        const newOrder = this.sorterService.nextOrder(this.key);
        if (event.ctrlKey || event.metaKey) {
            this.sorterService.remove(this.key);
        }
        else
            this.sorterService.sortCell({
                options: {
                    id: this.key,
                    order: newOrder,
                },
                sorter: this.sorter,
            }, !event.shiftKey);
    }
}
PrizmThComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThComponent, deps: [{ token: PrizmHeadDirective, optional: true }, { token: i0.ElementRef }, { token: i1.PrizmTableSorterService }, { token: forwardRef(() => PrizmTableDirective), optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmThComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmThComponent, selector: "th[prizmTh]", inputs: { sorter: "sorter", resizable: "resizable", sortable: "sortable" }, host: { properties: { "style.width.px": "this.width" } }, providers: [
        {
            provide: PRIZM_ELEMENT_REF,
            useExisting: ElementRef,
        },
    ], ngImport: i0, template: "<button class=\"sorter\" *ngIf=\"isSortable && table; else content\" type=\"button\">\n  <ng-container [ngTemplateOutlet]=\"content\"></ng-container>\n  {{ table.change$ | async }}\n  <span class=\"sort__block\" [class.sort__block_active]=\"isCurrent\" (click)=\"updateSorter($event)\">\n    <span class=\"sorter__number\" [style.visibility]=\"count > 1 && num ? 'visible' : 'hidden'\">{{\n      num ?? '0'\n    }}</span>\n    <prizm-icon class=\"sorter__icon\" [iconClass]=\"$any(icon$ | async)\"></prizm-icon>\n  </span>\n</button>\n<ng-template #content>\n  <div class=\"cell\"><ng-content></ng-content></div>\n</ng-template>\n<div class=\"resize-bar\" *ngIf=\"resizable\" (prizmResized)=\"onResized($event)\"></div>\n", styles: [":host{padding:0 8px;border:1px solid var(--prizm-v3-table-stroke-cell-default);background:var(--prizm-v3-table-fill-header-default);font-size:12px;line-height:16px;font-weight:600;color:var(--prizm-v3-text-icon-tertiary);text-align:left;position:sticky;top:0;z-index:20}:host.unsticky{top:auto}:host:not(:first-child){border-left:none}:host .resize-bar{height:100%;width:4px;position:absolute;right:0;top:0;cursor:col-resize}:host .cell{height:100%;width:100%;display:flex;align-items:center}:host .sorter{width:100%;padding:0;display:flex;align-items:center;font-size:12px;line-height:16px;font-weight:600;color:var(--prizm-v3-text-icon-tertiary);border:none;outline:none;background:transparent}:host .sorter .sort__block{margin-left:4px;display:flex;gap:2px;color:var(--prizm-v3-button-secondary-solid-default);cursor:pointer;align-items:center;justify-content:center}:host .sorter .sort__block_active{color:var(--prizm-v3-button-primary-solid-active)}:host-context([data-size=\"s\"]),:host-context([data-size=\"xs\"]){height:24px}:host-context([data-size=\"m\"]){height:32px}:host-context([data-size=\"l\"]){height:40px}:host-context(tr:not(:first-child)){border-top:none}:host-context(table[data-size=\"s\"] thead tr:nth-child(2)),:host-context(table[data-size=\"xs\"] thead tr:nth-child(2)){top:24px}:host-context(table[data-size=\"m\"] thead tr:nth-child(2)){top:32px}:host-context(table[data-size=\"l\"] thead tr:nth-child(2)){top:40px}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i3.PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "directive", type: i4.PrizmResizedDirective, selector: "[prizmResized]", outputs: ["prizmResized"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmThComponent.prototype, "sorter", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmThComponent.prototype, "resizable", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmThComponent.prototype, "sortable", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThComponent, decorators: [{
            type: Component,
            args: [{ selector: `th[prizmTh]`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: PRIZM_ELEMENT_REF,
                            useExisting: ElementRef,
                        },
                    ], template: "<button class=\"sorter\" *ngIf=\"isSortable && table; else content\" type=\"button\">\n  <ng-container [ngTemplateOutlet]=\"content\"></ng-container>\n  {{ table.change$ | async }}\n  <span class=\"sort__block\" [class.sort__block_active]=\"isCurrent\" (click)=\"updateSorter($event)\">\n    <span class=\"sorter__number\" [style.visibility]=\"count > 1 && num ? 'visible' : 'hidden'\">{{\n      num ?? '0'\n    }}</span>\n    <prizm-icon class=\"sorter__icon\" [iconClass]=\"$any(icon$ | async)\"></prizm-icon>\n  </span>\n</button>\n<ng-template #content>\n  <div class=\"cell\"><ng-content></ng-content></div>\n</ng-template>\n<div class=\"resize-bar\" *ngIf=\"resizable\" (prizmResized)=\"onResized($event)\"></div>\n", styles: [":host{padding:0 8px;border:1px solid var(--prizm-v3-table-stroke-cell-default);background:var(--prizm-v3-table-fill-header-default);font-size:12px;line-height:16px;font-weight:600;color:var(--prizm-v3-text-icon-tertiary);text-align:left;position:sticky;top:0;z-index:20}:host.unsticky{top:auto}:host:not(:first-child){border-left:none}:host .resize-bar{height:100%;width:4px;position:absolute;right:0;top:0;cursor:col-resize}:host .cell{height:100%;width:100%;display:flex;align-items:center}:host .sorter{width:100%;padding:0;display:flex;align-items:center;font-size:12px;line-height:16px;font-weight:600;color:var(--prizm-v3-text-icon-tertiary);border:none;outline:none;background:transparent}:host .sorter .sort__block{margin-left:4px;display:flex;gap:2px;color:var(--prizm-v3-button-secondary-solid-default);cursor:pointer;align-items:center;justify-content:center}:host .sorter .sort__block_active{color:var(--prizm-v3-button-primary-solid-active)}:host-context([data-size=\"s\"]),:host-context([data-size=\"xs\"]){height:24px}:host-context([data-size=\"m\"]){height:32px}:host-context([data-size=\"l\"]){height:40px}:host-context(tr:not(:first-child)){border-top:none}:host-context(table[data-size=\"s\"] thead tr:nth-child(2)),:host-context(table[data-size=\"xs\"] thead tr:nth-child(2)){top:24px}:host-context(table[data-size=\"m\"] thead tr:nth-child(2)){top:32px}:host-context(table[data-size=\"l\"] thead tr:nth-child(2)){top:40px}\n"] }]
        }], ctorParameters: function () { return [{ type: i5.PrizmHeadDirective, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PrizmHeadDirective]
                }] }, { type: i0.ElementRef }, { type: i1.PrizmTableSorterService }, { type: i6.PrizmTableDirective, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [forwardRef(() => PrizmTableDirective)]
                }] }]; }, propDecorators: { sorter: [{
                type: Input
            }], resizable: [{
                type: Input
            }], sortable: [{
                type: Input
            }], width: [{
                type: HostBinding,
                args: [`style.width.px`]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90aC90aC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RoL3RoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRSxPQUFPLEVBQXFELHVCQUF1QixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFnQnJDLE1BQU0sT0FBTyxnQkFBZ0I7SUFnQjNCLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDO0lBQzVELENBQUM7SUFFRCxZQUdtQixJQUFrQyxFQUNuQyxFQUFvQyxFQUNuQyxhQUF5QyxFQUdqRCxLQUFvQztRQUw1QixTQUFJLEdBQUosSUFBSSxDQUE4QjtRQUNuQyxP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Z0RBQ2tDO0FBRXJEO0lBQ0MsZ0JBQWdCLEVBQUU7O21EQUNEO0FBRWxCO0lBQ0MsZ0JBQWdCLEVBQUU7O2tEQUNGOzJGQVhOLGdCQUFnQjtrQkFiNUIsU0FBUzsrQkFFRSxhQUFhLG1CQUdOLHVCQUF1QixDQUFDLE1BQU0sYUFDcEM7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7eUJBQ3hCO3FCQUNGOzswQkF1QkUsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxrQkFBa0I7OzBCQUl6QixRQUFROzswQkFDUixNQUFNOzJCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs0Q0F4Qi9DLE1BQU07c0JBRkwsS0FBSztnQkFNTixTQUFTO3NCQUZSLEtBQUs7Z0JBTU4sUUFBUTtzQkFGUCxLQUFLO2dCQUtOLEtBQUs7c0JBREosV0FBVzt1QkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQcml6bUhlYWREaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2hlYWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptVGFibGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUFJJWk1fRUxFTUVOVF9SRUYgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMnO1xuaW1wb3J0IHsgUHJpem1UYWJsZVNvcnRLZXlFeGNlcHRpb24gfSBmcm9tICcuLi8uLi8uLi9leGNlcHRpb25zJztcbmltcG9ydCB7IFByaXptVGFibGVDZWxsU29ydGVyLCBQcml6bVRhYmxlQ2VsbFNvcnRlckhhbmRsZXIsIFByaXptVGFibGVTb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogYHRoW3ByaXptVGhdYCxcbiAgdGVtcGxhdGVVcmw6IGAuL3RoLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vdGguc3R5bGUubGVzc2BdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fRUxFTUVOVF9SRUYsXG4gICAgICB1c2VFeGlzdGluZzogRWxlbWVudFJlZixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRoQ29tcG9uZW50PFQgZXh0ZW5kcyBQYXJ0aWFsPFJlY29yZDxrZXlvZiBULCBhbnk+Pj4ge1xuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNvcnRlcjogUHJpem1UYWJsZUNlbGxTb3J0ZXJIYW5kbGVyPFQ+IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICByZXNpemFibGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNvcnRhYmxlID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKGBzdHlsZS53aWR0aC5weGApXG4gIHdpZHRoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBnZXQgaXNTb3J0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0YWJsZSB8fCB0eXBlb2YgdGhpcy5zb3J0ZXIgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUHJpem1IZWFkRGlyZWN0aXZlKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGVhZDogUHJpem1IZWFkRGlyZWN0aXZlPFQ+IHwgbnVsbCxcbiAgICBwdWJsaWMgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWY8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc29ydGVyU2VydmljZTogUHJpem1UYWJsZVNvcnRlclNlcnZpY2U8VD4sXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gUHJpem1UYWJsZURpcmVjdGl2ZSkpXG4gICAgcmVhZG9ubHkgdGFibGU6IFByaXptVGFibGVEaXJlY3RpdmU8VD4gfCBudWxsXG4gICkge31cblxuICBnZXQga2V5KCk6IGtleW9mIFQge1xuICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICB0aHJvdyBuZXcgUHJpem1UYWJsZVNvcnRLZXlFeGNlcHRpb24oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5oZWFkLnByaXptSGVhZDtcbiAgfVxuXG4gIGdldCBpc0N1cnJlbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGVyU2VydmljZS5pc0FjdGl2ZSh0aGlzLmtleSBhcyBzdHJpbmcpO1xuICB9XG5cbiAgZ2V0IGlkeCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNvcnRlclNlcnZpY2UuaWR4KHRoaXMua2V5IGFzIHN0cmluZyk7XG4gIH1cblxuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0ZXJTZXJ2aWNlLmNvdW50O1xuICB9XG5cbiAgZ2V0IG51bSgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLmlkeDtcbiAgICBpZiAoaWR4ID09PSAtMSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGlkeCArIDE7XG4gIH1cblxuICBnZXQgc29ydEl0ZW0oKTogUHJpem1UYWJsZUNlbGxTb3J0ZXI8VD4ge1xuICAgIHJldHVybiB0aGlzLnNvcnRlclNlcnZpY2UuY2VsbCh0aGlzLmtleSBhcyBzdHJpbmcpO1xuICB9XG5cbiAgZ2V0IGljb24kKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGVyU2VydmljZS5jaGFuZ2VzJC5waXBlKFxuICAgICAgbWFwKCgpID0+XG4gICAgICAgICF0aGlzLmlzQ3VycmVudFxuICAgICAgICAgID8gJ2Fycm93cy1zd2FwLXZlcnQtMidcbiAgICAgICAgICA6IHRoaXMuc29ydGVyU2VydmljZS5jZWxsT3JkZXIodGhpcy5rZXkgYXMgc3RyaW5nKSA9PT0gJ2FzYydcbiAgICAgICAgICA/IGBzb3J0LWFzYy1hcnJgXG4gICAgICAgICAgOiBgc29ydC1kZXNjLWFycmBcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9uUmVzaXplZCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVNvcnRlcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3T3JkZXIgPSB0aGlzLnNvcnRlclNlcnZpY2UubmV4dE9yZGVyKHRoaXMua2V5IGFzIHN0cmluZykgYXMgYW55O1xuICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgIHRoaXMuc29ydGVyU2VydmljZS5yZW1vdmUodGhpcy5rZXkgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2VcbiAgICAgIHRoaXMuc29ydGVyU2VydmljZS5zb3J0Q2VsbChcbiAgICAgICAge1xuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmtleSBhcyBzdHJpbmcsXG4gICAgICAgICAgICBvcmRlcjogbmV3T3JkZXIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb3J0ZXI6IHRoaXMuc29ydGVyIGFzIGFueSxcbiAgICAgICAgfSxcbiAgICAgICAgIWV2ZW50LnNoaWZ0S2V5XG4gICAgICApO1xuICB9XG59XG4iLCI8YnV0dG9uIGNsYXNzPVwic29ydGVyXCIgKm5nSWY9XCJpc1NvcnRhYmxlICYmIHRhYmxlOyBlbHNlIGNvbnRlbnRcIiB0eXBlPVwiYnV0dG9uXCI+XG4gIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxuICB7eyB0YWJsZS5jaGFuZ2UkIHwgYXN5bmMgfX1cbiAgPHNwYW4gY2xhc3M9XCJzb3J0X19ibG9ja1wiIFtjbGFzcy5zb3J0X19ibG9ja19hY3RpdmVdPVwiaXNDdXJyZW50XCIgKGNsaWNrKT1cInVwZGF0ZVNvcnRlcigkZXZlbnQpXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJzb3J0ZXJfX251bWJlclwiIFtzdHlsZS52aXNpYmlsaXR5XT1cImNvdW50ID4gMSAmJiBudW0gPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiPnt7XG4gICAgICBudW0gPz8gJzAnXG4gICAgfX08L3NwYW4+XG4gICAgPHByaXptLWljb24gY2xhc3M9XCJzb3J0ZXJfX2ljb25cIiBbaWNvbkNsYXNzXT1cIiRhbnkoaWNvbiQgfCBhc3luYylcIj48L3ByaXptLWljb24+XG4gIDwvc3Bhbj5cbjwvYnV0dG9uPlxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxuICA8ZGl2IGNsYXNzPVwiY2VsbFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwicmVzaXplLWJhclwiICpuZ0lmPVwicmVzaXphYmxlXCIgKHByaXptUmVzaXplZCk9XCJvblJlc2l6ZWQoJGV2ZW50KVwiPjwvZGl2PlxuIl19