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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmThComponent, deps: [{ token: PrizmHeadDirective, optional: true }, { token: i0.ElementRef }, { token: i1.PrizmTableSorterService }, { token: forwardRef(() => PrizmTableDirective), optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmThComponent, selector: "th[prizmTh]", inputs: { sorter: "sorter", resizable: "resizable", sortable: "sortable" }, host: { properties: { "style.width.px": "this.width" } }, providers: [
            {
                provide: PRIZM_ELEMENT_REF,
                useExisting: ElementRef,
            },
        ], ngImport: i0, template: "<button class=\"sorter\" *ngIf=\"isSortable && table; else content\" type=\"button\">\n  <ng-container [ngTemplateOutlet]=\"content\"></ng-container>\n  {{ table.change$ | async }}\n  <span class=\"sort__block\" [class.sort__block_active]=\"isCurrent\" (click)=\"updateSorter($event)\">\n    <span class=\"sorter__number\" [style.visibility]=\"count > 1 && num ? 'visible' : 'hidden'\">{{\n      num ?? '0'\n    }}</span>\n    <prizm-icon class=\"sorter__icon\" [iconClass]=\"$any(icon$ | async)\"></prizm-icon>\n  </span>\n</button>\n<ng-template #content>\n  <div class=\"cell\"><ng-content></ng-content></div>\n</ng-template>\n<div class=\"resize-bar\" *ngIf=\"resizable\" (prizmResized)=\"onResized($event)\"></div>\n", styles: [":host{padding:0 8px;border:1px solid var(--prizm-v3-table-stroke-cell-default);background:var(--prizm-v3-table-fill-header-default);font-size:12px;line-height:16px;font-weight:600;color:var(--prizm-v3-text-icon-tertiary);text-align:left;position:sticky;top:0;z-index:20}:host.unsticky{top:auto}:host:not(:first-child){border-left:none}:host .resize-bar{height:100%;width:4px;position:absolute;right:0;top:0;cursor:col-resize}:host .cell{height:100%;width:100%;display:flex;align-items:center}:host .sorter{width:100%;padding:0;display:flex;align-items:center;font-size:12px;line-height:16px;font-weight:600;color:var(--prizm-v3-text-icon-tertiary);border:none;outline:none;background:transparent}:host .sorter .sort__block{margin-left:4px;display:flex;gap:2px;color:var(--prizm-v3-button-secondary-solid-default);cursor:pointer;align-items:center;justify-content:center}:host .sorter .sort__block_active{color:var(--prizm-v3-button-primary-solid-active)}:host-context([data-size=\"s\"]),:host-context([data-size=\"xs\"]){height:24px}:host-context([data-size=\"m\"]){height:32px}:host-context([data-size=\"l\"]){height:40px}:host-context(tr:not(:first-child)){border-top:none}:host-context(table[data-size=\"s\"] thead tr:nth-child(2)),:host-context(table[data-size=\"xs\"] thead tr:nth-child(2)){top:24px}:host-context(table[data-size=\"m\"] thead tr:nth-child(2)){top:32px}:host-context(table[data-size=\"l\"] thead tr:nth-child(2)){top:40px}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i3.PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "directive", type: i4.PrizmResizedDirective, selector: "[prizmResized]", outputs: ["prizmResized"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmThComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90aC90aC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RoL3RoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRSxPQUFPLEVBQXFELHVCQUF1QixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFnQnJDLE1BQU0sT0FBTyxnQkFBZ0I7SUFnQjNCLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDO0lBQzVELENBQUM7SUFFRCxZQUdtQixJQUFrQyxFQUNuQyxFQUFvQyxFQUNuQyxhQUF5QyxFQUdqRCxLQUFvQztRQUw1QixTQUFJLEdBQUosSUFBSSxDQUE4QjtRQUNuQyxP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OztnREFDa0M7QUFJckQ7SUFEQyxnQkFBZ0IsRUFBRTs7bURBQ0Q7QUFJbEI7SUFEQyxnQkFBZ0IsRUFBRTs7a0RBQ0Y7MkZBWE4sZ0JBQWdCO2tCQWI1QixTQUFTOytCQUVFLGFBQWEsbUJBR04sdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTt5QkFDeEI7cUJBQ0Y7OzBCQXVCRSxRQUFROzswQkFDUixNQUFNOzJCQUFDLGtCQUFrQjs7MEJBSXpCLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDOzRDQXhCL0MsTUFBTTtzQkFGTCxLQUFLO2dCQU1OLFNBQVM7c0JBRlIsS0FBSztnQkFNTixRQUFRO3NCQUZQLEtBQUs7Z0JBS04sS0FBSztzQkFESixXQUFXO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByaXptSGVhZERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvaGVhZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1UYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvdGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQUklaTV9FTEVNRU5UX1JFRiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucyc7XG5pbXBvcnQgeyBQcml6bVRhYmxlU29ydEtleUV4Y2VwdGlvbiB9IGZyb20gJy4uLy4uLy4uL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHsgUHJpem1UYWJsZUNlbGxTb3J0ZXIsIFByaXptVGFibGVDZWxsU29ydGVySGFuZGxlciwgUHJpem1UYWJsZVNvcnRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvY29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBgdGhbcHJpem1UaF1gLFxuICB0ZW1wbGF0ZVVybDogYC4vdGguY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFtgLi90aC5zdHlsZS5sZXNzYF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUklaTV9FTEVNRU5UX1JFRixcbiAgICAgIHVzZUV4aXN0aW5nOiBFbGVtZW50UmVmLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVGhDb21wb25lbnQ8VCBleHRlbmRzIFBhcnRpYWw8UmVjb3JkPGtleW9mIFQsIGFueT4+PiB7XG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc29ydGVyOiBQcml6bVRhYmxlQ2VsbFNvcnRlckhhbmRsZXI8VD4gfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHJlc2l6YWJsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc29ydGFibGUgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoYHN0eWxlLndpZHRoLnB4YClcbiAgd2lkdGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIGdldCBpc1NvcnRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNvcnRhYmxlIHx8IHR5cGVvZiB0aGlzLnNvcnRlciA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQcml6bUhlYWREaXJlY3RpdmUpXG4gICAgcHJpdmF0ZSByZWFkb25seSBoZWFkOiBQcml6bUhlYWREaXJlY3RpdmU8VD4gfCBudWxsLFxuICAgIHB1YmxpYyByZWFkb25seSBlbDogRWxlbWVudFJlZjxIVE1MVGFibGVDZWxsRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBzb3J0ZXJTZXJ2aWNlOiBQcml6bVRhYmxlU29ydGVyU2VydmljZTxUPixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBQcml6bVRhYmxlRGlyZWN0aXZlKSlcbiAgICByZWFkb25seSB0YWJsZTogUHJpem1UYWJsZURpcmVjdGl2ZTxUPiB8IG51bGxcbiAgKSB7fVxuXG4gIGdldCBrZXkoKToga2V5b2YgVCB7XG4gICAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICAgIHRocm93IG5ldyBQcml6bVRhYmxlU29ydEtleUV4Y2VwdGlvbigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmhlYWQucHJpem1IZWFkO1xuICB9XG5cbiAgZ2V0IGlzQ3VycmVudCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0ZXJTZXJ2aWNlLmlzQWN0aXZlKHRoaXMua2V5IGFzIHN0cmluZyk7XG4gIH1cblxuICBnZXQgaWR4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGVyU2VydmljZS5pZHgodGhpcy5rZXkgYXMgc3RyaW5nKTtcbiAgfVxuXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNvcnRlclNlcnZpY2UuY291bnQ7XG4gIH1cblxuICBnZXQgbnVtKCk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuaWR4O1xuICAgIGlmIChpZHggPT09IC0xKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gaWR4ICsgMTtcbiAgfVxuXG4gIGdldCBzb3J0SXRlbSgpOiBQcml6bVRhYmxlQ2VsbFNvcnRlcjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGVyU2VydmljZS5jZWxsKHRoaXMua2V5IGFzIHN0cmluZyk7XG4gIH1cblxuICBnZXQgaWNvbiQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zb3J0ZXJTZXJ2aWNlLmNoYW5nZXMkLnBpcGUoXG4gICAgICBtYXAoKCkgPT5cbiAgICAgICAgIXRoaXMuaXNDdXJyZW50XG4gICAgICAgICAgPyAnYXJyb3dzLXN3YXAtdmVydC0yJ1xuICAgICAgICAgIDogdGhpcy5zb3J0ZXJTZXJ2aWNlLmNlbGxPcmRlcih0aGlzLmtleSBhcyBzdHJpbmcpID09PSAnYXNjJ1xuICAgICAgICAgID8gYHNvcnQtYXNjLWFycmBcbiAgICAgICAgICA6IGBzb3J0LWRlc2MtYXJyYFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25SZXNpemVkKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlU29ydGVyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdPcmRlciA9IHRoaXMuc29ydGVyU2VydmljZS5uZXh0T3JkZXIodGhpcy5rZXkgYXMgc3RyaW5nKSBhcyBhbnk7XG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xuICAgICAgdGhpcy5zb3J0ZXJTZXJ2aWNlLnJlbW92ZSh0aGlzLmtleSBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZVxuICAgICAgdGhpcy5zb3J0ZXJTZXJ2aWNlLnNvcnRDZWxsKFxuICAgICAgICB7XG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgaWQ6IHRoaXMua2V5IGFzIHN0cmluZyxcbiAgICAgICAgICAgIG9yZGVyOiBuZXdPcmRlcixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNvcnRlcjogdGhpcy5zb3J0ZXIgYXMgYW55LFxuICAgICAgICB9LFxuICAgICAgICAhZXZlbnQuc2hpZnRLZXlcbiAgICAgICk7XG4gIH1cbn1cbiIsIjxidXR0b24gY2xhc3M9XCJzb3J0ZXJcIiAqbmdJZj1cImlzU29ydGFibGUgJiYgdGFibGU7IGVsc2UgY29udGVudFwiIHR5cGU9XCJidXR0b25cIj5cbiAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gIHt7IHRhYmxlLmNoYW5nZSQgfCBhc3luYyB9fVxuICA8c3BhbiBjbGFzcz1cInNvcnRfX2Jsb2NrXCIgW2NsYXNzLnNvcnRfX2Jsb2NrX2FjdGl2ZV09XCJpc0N1cnJlbnRcIiAoY2xpY2spPVwidXBkYXRlU29ydGVyKCRldmVudClcIj5cbiAgICA8c3BhbiBjbGFzcz1cInNvcnRlcl9fbnVtYmVyXCIgW3N0eWxlLnZpc2liaWxpdHldPVwiY291bnQgPiAxICYmIG51bSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCI+e3tcbiAgICAgIG51bSA/PyAnMCdcbiAgICB9fTwvc3Bhbj5cbiAgICA8cHJpem0taWNvbiBjbGFzcz1cInNvcnRlcl9faWNvblwiIFtpY29uQ2xhc3NdPVwiJGFueShpY29uJCB8IGFzeW5jKVwiPjwvcHJpem0taWNvbj5cbiAgPC9zcGFuPlxuPC9idXR0b24+XG48bmctdGVtcGxhdGUgI2NvbnRlbnQ+XG4gIDxkaXYgY2xhc3M9XCJjZWxsXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJyZXNpemUtYmFyXCIgKm5nSWY9XCJyZXNpemFibGVcIiAocHJpem1SZXNpemVkKT1cIm9uUmVzaXplZCgkZXZlbnQpXCI+PC9kaXY+XG4iXX0=