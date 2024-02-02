import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, forwardRef, HostBinding, Inject, Input, QueryList, ViewEncapsulation, } from '@angular/core';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { animationFrameScheduler, BehaviorSubject, merge, of } from 'rxjs';
import { prizmAutoEmit } from '@prizm-ui/core';
import { PrizmCellDirective } from '../directives/cell.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PRIZM_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmTbodyComponent } from '../tbody/tbody.component';
import { PrizmDestroyService, prizmEmptyQueryList } from '@prizm-ui/helpers';
import { PrizmTableTreeService } from '../service/tree.service';
import { PrizmCellService } from '../directives/cell.service';
import { PrizmTdService } from '../td/td.service';
import * as i0 from "@angular/core";
import * as i1 from "../directives/cell.service";
import * as i2 from "../td/td.service";
import * as i3 from "../service/tree.service";
import * as i4 from "@angular/common";
import * as i5 from "../directives/table.directive";
import * as i6 from "../tbody/tbody.component";
import * as i7 from "@prizm-ui/helpers";
export class PrizmTrComponent {
    get realColumns$() {
        return this.columns$$.pipe(switchMap(columns => {
            return (columns && Array.isArray(columns) ? of(columns) : this.table.columns$) ?? of([]);
        }));
    }
    get colCount() {
        return this.td.count;
    }
    get colCount$() {
        return this.td.count$;
    }
    constructor(table, body, cellService, td, tableTreeService, destroy$) {
        this.table = table;
        this.body = body;
        this.cellService = cellService;
        this.td = td;
        this.tableTreeService = tableTreeService;
        this.destroy$ = destroy$;
        this.status = 'default';
        this.columns$$ = new BehaviorSubject(null);
        this.cells = prizmEmptyQueryList();
        this.cells$ = merge(this.cells.changes, this.cellService.changes$$.pipe(debounceTime(0, animationFrameScheduler))).pipe(startWith(null), switchMap(() => this.realColumns$), map(realColumns => {
            const cells = this.cells.toArray();
            const columns = realColumns;
            if (!columns || columns.length === 0) {
                return cells;
            }
            // Display cells in order as specified by table's `column` property.
            return columns.map(column => cells.find(c => c.prizmCell === column));
        }));
        this.item$ = this.body.rows.changes.pipe(startWith(null), map(() => this.body.view[this.body.rows.toArray().indexOf(this)]));
        this.active = false;
    }
    showChildren(idx) {
        this.tableTreeService.showChildren(idx);
    }
    hideChildren(idx) {
        this.tableTreeService.hideChildren(idx);
    }
    toggleChildren(idx) {
        this.tableTreeService.toggleChildren(idx);
    }
    isChildrenOpened(idx) {
        return this.tableTreeService.isChildrenOpened(idx);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTrComponent, deps: [{ token: forwardRef(() => PrizmTableDirective) }, { token: forwardRef(() => PrizmTbodyComponent) }, { token: i1.PrizmCellService }, { token: i2.PrizmTdService }, { token: i3.PrizmTableTreeService }, { token: PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTrComponent, selector: "tr[prizmTr]", inputs: { status: "status", columns: "columns", active: "active" }, host: { properties: { "attr.status": "this.status", "attr.active": "this.active" } }, providers: [PRIZM_TABLE_PROVIDER, PrizmCellService, PrizmTdService], queries: [{ propertyName: "cells", predicate: i0.forwardRef(function () { return PrizmCellDirective; }) }], exportAs: ["prizmTr"], ngImport: i0, template: "<ng-content selector=\"td[prizmTd]\"></ng-content>\n<ng-container *ngIf=\"cells$ | async as cells\">\n  <ng-container *ngFor=\"let cell of cells\">\n    <ng-container *ngIf=\"cell?.template\" [ngTemplateOutlet]=\"$any(cell?.template)\"></ng-container>\n  </ng-container>\n</ng-container>\n", styles: ["[prizmTbody] tr[prizmTr]{cursor:var(--prizm-table-row-cursor, pointer);color:var(--prizm-v3-text-icon-secondary);background:var(--prizm-table-row-background, var(--prizm-v3-background-fill-primary))}[prizmTbody] tr[prizmTr]:nth-child(even){background:var(--prizm-table-row-odd-background, var(--prizm-v3-table-fill-row-zebra_default))}[prizmTbody] tr[prizmTr]:hover{background:var(--prizm-table-row-hover-background, var(--prizm-v3-table-fill-row-hover))}[prizmTbody] tr[prizmTr][status=success]{background:var(--prizm-v3-status-success-secondary-default)}[prizmTbody] tr[prizmTr][status=success]:hover{background:var(--prizm-v3-status-success-secondary-hover)}[prizmTbody] tr[prizmTr][status=warning]{background:var(--prizm-v3-status-warning-secondary-default)}[prizmTbody] tr[prizmTr][status=warning]:hover{background:var(--prizm-v3-status-warning-secondary-hover)}[prizmTbody] tr[prizmTr][status=danger]{background:var(--prizm-v3-status-alarm-secondary-default)}[prizmTbody] tr[prizmTr][status=danger]:hover{background:var(--prizm-v3-status-alarm-secondary-hover)}\n"], dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    prizmAutoEmit({
        name: 'columns$$',
    }),
    __metadata("design:type", Array)
], PrizmTrComponent.prototype, "columns", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTrComponent, decorators: [{
            type: Component,
            args: [{ selector: `tr[prizmTr]`, exportAs: 'prizmTr', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [PRIZM_TABLE_PROVIDER, PrizmCellService, PrizmTdService], template: "<ng-content selector=\"td[prizmTd]\"></ng-content>\n<ng-container *ngIf=\"cells$ | async as cells\">\n  <ng-container *ngFor=\"let cell of cells\">\n    <ng-container *ngIf=\"cell?.template\" [ngTemplateOutlet]=\"$any(cell?.template)\"></ng-container>\n  </ng-container>\n</ng-container>\n", styles: ["[prizmTbody] tr[prizmTr]{cursor:var(--prizm-table-row-cursor, pointer);color:var(--prizm-v3-text-icon-secondary);background:var(--prizm-table-row-background, var(--prizm-v3-background-fill-primary))}[prizmTbody] tr[prizmTr]:nth-child(even){background:var(--prizm-table-row-odd-background, var(--prizm-v3-table-fill-row-zebra_default))}[prizmTbody] tr[prizmTr]:hover{background:var(--prizm-table-row-hover-background, var(--prizm-v3-table-fill-row-hover))}[prizmTbody] tr[prizmTr][status=success]{background:var(--prizm-v3-status-success-secondary-default)}[prizmTbody] tr[prizmTr][status=success]:hover{background:var(--prizm-v3-status-success-secondary-hover)}[prizmTbody] tr[prizmTr][status=warning]{background:var(--prizm-v3-status-warning-secondary-default)}[prizmTbody] tr[prizmTr][status=warning]:hover{background:var(--prizm-v3-status-warning-secondary-hover)}[prizmTbody] tr[prizmTr][status=danger]{background:var(--prizm-v3-status-alarm-secondary-default)}[prizmTbody] tr[prizmTr][status=danger]:hover{background:var(--prizm-v3-status-alarm-secondary-hover)}\n"] }]
        }], ctorParameters: function () { return [{ type: i5.PrizmTableDirective, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => PrizmTableDirective)]
                }] }, { type: i6.PrizmTbodyComponent, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => PrizmTbodyComponent)]
                }] }, { type: i1.PrizmCellService }, { type: i2.PrizmTdService }, { type: i3.PrizmTableTreeService }, { type: i7.PrizmDestroyService, decorators: [{
                    type: Inject,
                    args: [PrizmDestroyService]
                }] }]; }, propDecorators: { status: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.status']
            }], columns: [{
                type: Input
            }], cells: [{
                type: ContentChildren,
                args: [forwardRef(() => PrizmCellDirective)]
            }], active: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.active']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90ci90ci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RyL3RyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFvQixNQUFNLGdCQUFnQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7O0FBWWxELE1BQU0sT0FBTyxnQkFBZ0I7SUFVM0IsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDeEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQXVCRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFTRCxZQUVrQixLQUE2QixFQUU1QixJQUE0QixFQUM1QixXQUE2QixFQUM3QixFQUFrQixFQUNsQixnQkFBdUMsRUFDbEIsUUFBNkI7UUFObkQsVUFBSyxHQUFMLEtBQUssQ0FBd0I7UUFFNUIsU0FBSSxHQUFKLElBQUksQ0FBd0I7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLE9BQUUsR0FBRixFQUFFLENBQWdCO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBdUI7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUE3RHpCLFdBQU0sR0FBeUIsU0FBUyxDQUFDO1FBQ3BFLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBeUMsSUFBSSxDQUFDLENBQUM7UUFpQnRGLFVBQUssR0FBa0MsbUJBQW1CLEVBQUUsQ0FBQztRQUU3RCxXQUFNLEdBQUcsS0FBSyxDQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUMxRSxDQUFDLElBQUksQ0FDSixTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDbEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkMsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3BDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxvRUFBb0U7WUFDcEUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBVU8sVUFBSyxHQUFrQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN6RCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ2xFLENBQUM7UUFFMEMsV0FBTSxHQUFHLEtBQUssQ0FBQztJQVd4RCxDQUFDO0lBRUcsWUFBWSxDQUFDLEdBQVc7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sWUFBWSxDQUFDLEdBQVc7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sY0FBYyxDQUFDLEdBQVc7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsR0FBVztRQUNqQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDOzhHQS9FVSxnQkFBZ0Isa0JBdURqQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUMsYUFFckMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLGdIQUtyQyxtQkFBbUI7a0dBOURsQixnQkFBZ0IsZ01BRmhCLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLG1GQW9CakMsa0JBQWtCLHdEQ3JEdEQsbVNBTUE7O0FEcUNFO0lBSEMsYUFBYSxDQUFDO1FBQ2IsSUFBSSxFQUFFLFdBQVc7S0FDbEIsQ0FBQzs7aURBQ3dDOzJGQVIvQixnQkFBZ0I7a0JBVjVCLFNBQVM7K0JBRUUsYUFBYSxZQUdiLFNBQVMsbUJBQ0YsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxhQUMxQixDQUFDLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQzs7MEJBeURoRSxNQUFNOzJCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7MEJBRTVDLE1BQU07MkJBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDOzswQkFLNUMsTUFBTTsyQkFBQyxtQkFBbUI7NENBN0RlLE1BQU07c0JBQWpELEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsYUFBYTtnQkFPbkMsT0FBTztzQkFKTixLQUFLO2dCQWVHLEtBQUs7c0JBRGIsZUFBZTt1QkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBa0NULE1BQU07c0JBQWpELEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIEJlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBwcml6bUF1dG9FbWl0LCBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuXG5pbXBvcnQgeyBQcml6bUNlbGxEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2NlbGwuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptVGFibGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3RhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQUklaTV9UQUJMRV9QUk9WSURFUiB9IGZyb20gJy4uL3Byb3ZpZGVycy90YWJsZS5wcm92aWRlcic7XG5pbXBvcnQgeyBQcml6bVRib2R5Q29tcG9uZW50IH0gZnJvbSAnLi4vdGJvZHkvdGJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptVGFibGVDZWxsU3RhdHVzIH0gZnJvbSAnLi4vdGFibGUudHlwZXMnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSwgcHJpem1FbXB0eVF1ZXJ5TGlzdCB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptVGFibGVUcmVlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvdHJlZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptQ2VsbFNlcnZpY2UgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2NlbGwuc2VydmljZSc7XG5pbXBvcnQgeyBQcml6bVRkU2VydmljZSB9IGZyb20gJy4uL3RkL3RkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IGB0cltwcml6bVRyXWAsXG4gIHRlbXBsYXRlVXJsOiBgLi90ci5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlVXJsczogW2AuL3RyLmNvbXBvbmVudC5sZXNzYF0sXG4gIGV4cG9ydEFzOiAncHJpem1UcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtQUklaTV9UQUJMRV9QUk9WSURFUiwgUHJpem1DZWxsU2VydmljZSwgUHJpem1UZFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRyQ29tcG9uZW50PFQgZXh0ZW5kcyBQYXJ0aWFsPFJlY29yZDxrZXlvZiBULCB1bmtub3duPj4+IHtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLnN0YXR1cycpIHB1YmxpYyBzdGF0dXM6IFByaXptVGFibGVDZWxsU3RhdHVzID0gJ2RlZmF1bHQnO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbHVtbnMkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmVhZG9ubHlBcnJheTxrZXlvZiBUIHwgc3RyaW5nPiB8IG51bGw+KG51bGwpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bUF1dG9FbWl0KHtcbiAgICBuYW1lOiAnY29sdW1ucyQkJyxcbiAgfSlcbiAgY29sdW1ucyE6IFJlYWRvbmx5QXJyYXk8a2V5b2YgVCB8IHN0cmluZz47XG5cbiAgZ2V0IHJlYWxDb2x1bW5zJCgpOiBPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8a2V5b2YgVCB8IHN0cmluZz4+IHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zJCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb2x1bW5zID0+IHtcbiAgICAgICAgcmV0dXJuIChjb2x1bW5zICYmIEFycmF5LmlzQXJyYXkoY29sdW1ucykgPyBvZihjb2x1bW5zKSA6IHRoaXMudGFibGUuY29sdW1ucyQpID8/IG9mKFtdKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBQcml6bUNlbGxEaXJlY3RpdmUpKVxuICByZWFkb25seSBjZWxsczogUXVlcnlMaXN0PFByaXptQ2VsbERpcmVjdGl2ZT4gPSBwcml6bUVtcHR5UXVlcnlMaXN0KCk7XG5cbiAgcmVhZG9ubHkgY2VsbHMkID0gbWVyZ2UoXG4gICAgdGhpcy5jZWxscy5jaGFuZ2VzLFxuICAgIHRoaXMuY2VsbFNlcnZpY2UuY2hhbmdlcyQkLnBpcGUoZGVib3VuY2VUaW1lKDAsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSlcbiAgKS5waXBlKFxuICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5yZWFsQ29sdW1ucyQpLFxuICAgIG1hcChyZWFsQ29sdW1ucyA9PiB7XG4gICAgICBjb25zdCBjZWxscyA9IHRoaXMuY2VsbHMudG9BcnJheSgpO1xuICAgICAgY29uc3QgY29sdW1ucyA9IHJlYWxDb2x1bW5zO1xuICAgICAgaWYgKCFjb2x1bW5zIHx8IGNvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICAgIH1cblxuICAgICAgLy8gRGlzcGxheSBjZWxscyBpbiBvcmRlciBhcyBzcGVjaWZpZWQgYnkgdGFibGUncyBgY29sdW1uYCBwcm9wZXJ0eS5cbiAgICAgIHJldHVybiBjb2x1bW5zLm1hcChjb2x1bW4gPT4gY2VsbHMuZmluZChjID0+IGMucHJpem1DZWxsID09PSBjb2x1bW4pKTtcbiAgICB9KVxuICApO1xuXG4gIGdldCBjb2xDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnRkLmNvdW50O1xuICB9XG5cbiAgZ2V0IGNvbENvdW50JCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLnRkLmNvdW50JDtcbiAgfVxuXG4gIHJlYWRvbmx5IGl0ZW0kOiBPYnNlcnZhYmxlPFQ+ID0gdGhpcy5ib2R5LnJvd3MuY2hhbmdlcy5waXBlKFxuICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICBtYXAoKCkgPT4gdGhpcy5ib2R5LnZpZXdbdGhpcy5ib2R5LnJvd3MudG9BcnJheSgpLmluZGV4T2YodGhpcyldKVxuICApO1xuXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci5hY3RpdmUnKSBwdWJsaWMgYWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFByaXptVGFibGVEaXJlY3RpdmUpKVxuICAgIHB1YmxpYyByZWFkb25seSB0YWJsZTogUHJpem1UYWJsZURpcmVjdGl2ZTxUPixcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gUHJpem1UYm9keUNvbXBvbmVudCkpXG4gICAgcHJpdmF0ZSByZWFkb25seSBib2R5OiBQcml6bVRib2R5Q29tcG9uZW50PFQ+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2VsbFNlcnZpY2U6IFByaXptQ2VsbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZDogUHJpem1UZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0YWJsZVRyZWVTZXJ2aWNlOiBQcml6bVRhYmxlVHJlZVNlcnZpY2UsXG4gICAgQEluamVjdChQcml6bURlc3Ryb3lTZXJ2aWNlKSByZWFkb25seSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIHNob3dDaGlsZHJlbihpZHg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudGFibGVUcmVlU2VydmljZS5zaG93Q2hpbGRyZW4oaWR4KTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlQ2hpbGRyZW4oaWR4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlVHJlZVNlcnZpY2UuaGlkZUNoaWxkcmVuKGlkeCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQ2hpbGRyZW4oaWR4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlVHJlZVNlcnZpY2UudG9nZ2xlQ2hpbGRyZW4oaWR4KTtcbiAgfVxuXG4gIHB1YmxpYyBpc0NoaWxkcmVuT3BlbmVkKGlkeDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVUcmVlU2VydmljZS5pc0NoaWxkcmVuT3BlbmVkKGlkeCk7XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50IHNlbGVjdG9yPVwidGRbcHJpem1UZF1cIj48L25nLWNvbnRlbnQ+XG48bmctY29udGFpbmVyICpuZ0lmPVwiY2VsbHMkIHwgYXN5bmMgYXMgY2VsbHNcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2VsbCBvZiBjZWxsc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjZWxsPy50ZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIiRhbnkoY2VsbD8udGVtcGxhdGUpXCI+PC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=