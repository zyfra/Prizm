import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, forwardRef, Inject, Input, QueryList, Self, } from '@angular/core';
import { prizmAutoEmit } from '@prizm-ui/core';
import { BehaviorSubject, concat, defer, of } from 'rxjs';
import { map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { PrizmHeadDirective } from '../directives/head.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PRIZM_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmThComponent } from '../th/th.component';
import { moveInEventLoopIteration, prizmEmptyQueryList } from '@prizm-ui/helpers';
import { PrizmTableService } from '../table.service';
import { PrizmThGroupService } from './th-group.service';
import * as i0 from "@angular/core";
import * as i1 from "../table.service";
import * as i2 from "./th-group.service";
import * as i3 from "@angular/common";
import * as i4 from "../directives/table.directive";
export class PrizmThGroupComponent {
    get cols$() {
        return this.columns$$.pipe(switchMap(currentCols => {
            if (currentCols && Array.isArray(currentCols))
                return of(currentCols);
            return this.table.columns$;
        }));
    }
    constructor(table, tableService, thGroupService) {
        this.table = table;
        this.tableService = tableService;
        this.thGroupService = thGroupService;
        this.columns$$ = new BehaviorSubject(null);
        this.th = prizmEmptyQueryList();
        this.heads = prizmEmptyQueryList();
        this.heads$ = null;
        this.tableService.addThGroup(this);
    }
    ngOnInit() {
        this.groupStructure$ = concat(defer(() => of(this.th.toArray())), defer(() => this.th.changes.pipe(map(() => this.th.toArray())))).pipe(map((cols) => {
            const colspan = cols.reduce((acc, element) => acc + element.el.nativeElement.colSpan, 0);
            return {
                cols,
                colspan,
            };
        }), shareReplay(1));
    }
    ngAfterContentInit() {
        this.heads$ = this.heads.changes.pipe(startWith(null), switchMap(() => this.cols$), switchMap(cols => {
            const heads = this.heads.toArray();
            const columns = cols;
            if (!columns || columns.length === 0) {
                return of(heads);
            }
            // Display heads in order as specified by table's `column` property.
            return concat(of(new Array(columns.length).fill(null)), of(columns.map(c => heads.find(h => h.prizmHead === c))).pipe(moveInEventLoopIteration(2)));
        }));
    }
    ngOnDestroy() {
        this.tableService.removeThGroup(this);
    }
}
PrizmThGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThGroupComponent, deps: [{ token: forwardRef(() => PrizmTableDirective) }, { token: i1.PrizmTableService }, { token: i2.PrizmThGroupService, self: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmThGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmThGroupComponent, selector: "tr[prizmThGroup]", inputs: { columns: "columns" }, providers: [PRIZM_TABLE_PROVIDER, PrizmThGroupService], queries: [{ propertyName: "th", predicate: i0.forwardRef(function () { return PrizmThComponent; }), descendants: true }, { propertyName: "heads", predicate: i0.forwardRef(function () { return PrizmHeadDirective; }) }], ngImport: i0, template: "<ng-content selector=\"th[prizmTh]\"></ng-content>\n<ng-container *ngIf=\"heads$ | async as headings\">\n  <ng-container *ngFor=\"let head of headings\">\n    <ng-container *ngIf=\"head?.template\" [ngTemplateOutlet]=\"head.template\"></ng-container>\n  </ng-container>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmAutoEmit({
        name: 'columns$$',
    }),
    __metadata("design:type", Array)
], PrizmThGroupComponent.prototype, "columns", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: `tr[prizmThGroup]`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [PRIZM_TABLE_PROVIDER, PrizmThGroupService], template: "<ng-content selector=\"th[prizmTh]\"></ng-content>\n<ng-container *ngIf=\"heads$ | async as headings\">\n  <ng-container *ngFor=\"let head of headings\">\n    <ng-container *ngIf=\"head?.template\" [ngTemplateOutlet]=\"head.template\"></ng-container>\n  </ng-container>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i4.PrizmTableDirective, decorators: [{
                    type: Inject,
                    args: [forwardRef(() => PrizmTableDirective)]
                }] }, { type: i1.PrizmTableService }, { type: i2.PrizmThGroupService, decorators: [{
                    type: Self
                }] }]; }, propDecorators: { columns: [{
                type: Input
            }], th: [{
                type: ContentChildren,
                args: [forwardRef(() => PrizmThComponent), { descendants: true }]
            }], heads: [{
                type: ContentChildren,
                args: [forwardRef(() => PrizmHeadDirective)]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGgtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90aC1ncm91cC90aC1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RoLWdyb3VwL3RoLWdyb3VwLnRlbXBsYXRlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFHTCxTQUFTLEVBQ1QsSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFTLE1BQU0sTUFBTSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxHQUFHLEVBQVMsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVB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LENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNJLENBQUM7SUFDWCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2tIQWhGVSxxQkFBcUIsa0JBaUN0QixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7c0dBakNwQyxxQkFBcUIsMkVBRnJCLENBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUMsZ0ZBcUJwQixnQkFBZ0Isa0dBR2hCLGtCQUFrQixpQ0N0RHRELGtTQU1BO0FEOEJFO0lBQ0MsYUFBYSxDQUFDO1FBQ2IsSUFBSSxFQUFFLFdBQVc7S0FDbEIsQ0FBQzs7c0RBQ3dDOzJGQVIvQixxQkFBcUI7a0JBUGpDLFNBQVM7K0JBRUUsa0JBQWtCLG1CQUVYLHVCQUF1QixDQUFDLE1BQU0sYUFDcEMsQ0FBQyxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQzs7MEJBbUNuRCxNQUFNOzJCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7MEJBRzVDLElBQUk7NENBNUJQLE9BQU87c0JBSk4sS0FBSztnQkFnQkcsRUFBRTtzQkFEVixlQUFlO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtnQkFJakUsS0FBSztzQkFEYixlQUFlO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcml6bUF1dG9FbWl0IH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb25jYXQsIGRlZmVyLCBPYnNlcnZhYmxlLCBvZiwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgbWFwVG8sIHNoYXJlUmVwbGF5LCBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUHJpem1IZWFkRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9oZWFkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bVRhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy90YWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUFJJWk1fVEFCTEVfUFJPVklERVIgfSBmcm9tICcuLi9wcm92aWRlcnMvdGFibGUucHJvdmlkZXInO1xuaW1wb3J0IHsgUHJpem1UaENvbXBvbmVudCB9IGZyb20gJy4uL3RoL3RoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBtb3ZlSW5FdmVudExvb3BJdGVyYXRpb24sIHByaXptRW1wdHlRdWVyeUxpc3QgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bVRhYmxlU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpem1UaEdyb3VwU2VydmljZSB9IGZyb20gJy4vdGgtZ3JvdXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2NvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogYHRyW3ByaXptVGhHcm91cF1gLFxuICB0ZW1wbGF0ZVVybDogYC4vdGgtZ3JvdXAudGVtcGxhdGUuaHRtbGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtQUklaTV9UQUJMRV9QUk9WSURFUiwgUHJpem1UaEdyb3VwU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVGhHcm91cENvbXBvbmVudDxUIGV4dGVuZHMgUGFydGlhbDxSZWNvcmQ8a2V5b2YgVCwgYW55Pj4+XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3lcbntcbiAgcHJpdmF0ZSByZWFkb25seSBjb2x1bW5zJCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFJlYWRvbmx5QXJyYXk8a2V5b2YgVCB8IHN0cmluZz4gfCBudWxsPihudWxsKTtcbiAgQElucHV0KClcbiAgQHByaXptQXV0b0VtaXQoe1xuICAgIG5hbWU6ICdjb2x1bW5zJCQnLFxuICB9KVxuICBjb2x1bW5zITogUmVhZG9ubHlBcnJheTxrZXlvZiBUIHwgc3RyaW5nPjtcblxuICBnZXQgY29scyQoKTogT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PGtleW9mIFQgfCBzdHJpbmc+PiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucyQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY3VycmVudENvbHMgPT4ge1xuICAgICAgICBpZiAoY3VycmVudENvbHMgJiYgQXJyYXkuaXNBcnJheShjdXJyZW50Q29scykpIHJldHVybiBvZihjdXJyZW50Q29scyk7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlLmNvbHVtbnMkO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFByaXptVGhDb21wb25lbnQpLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIHJlYWRvbmx5IHRoOiBRdWVyeUxpc3Q8UHJpem1UaENvbXBvbmVudDxUPj4gPSBwcml6bUVtcHR5UXVlcnlMaXN0KCk7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFByaXptSGVhZERpcmVjdGl2ZSkpXG4gIHJlYWRvbmx5IGhlYWRzOiBRdWVyeUxpc3Q8UHJpem1IZWFkRGlyZWN0aXZlPFQ+PiA9IHByaXptRW1wdHlRdWVyeUxpc3QoKTtcblxuICBoZWFkcyQ6IE9ic2VydmFibGU8UHJpem1IZWFkRGlyZWN0aXZlPFQ+W10+IHwgbnVsbCA9IG51bGw7XG5cbiAgZ3JvdXBTdHJ1Y3R1cmUkITogT2JzZXJ2YWJsZTx7XG4gICAgY29sczogUHJpem1UaENvbXBvbmVudDxUPltdO1xuICAgIGNvbHNwYW46IG51bWJlcjtcbiAgfT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IFByaXptVGFibGVEaXJlY3RpdmUpKVxuICAgIHB1YmxpYyByZWFkb25seSB0YWJsZTogUHJpem1UYWJsZURpcmVjdGl2ZTxUPixcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFibGVTZXJ2aWNlOiBQcml6bVRhYmxlU2VydmljZSxcbiAgICBAU2VsZigpIHB1YmxpYyByZWFkb25seSB0aEdyb3VwU2VydmljZTogUHJpem1UaEdyb3VwU2VydmljZVxuICApIHtcbiAgICB0aGlzLnRhYmxlU2VydmljZS5hZGRUaEdyb3VwKHRoaXMpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ncm91cFN0cnVjdHVyZSQgPSBjb25jYXQoXG4gICAgICBkZWZlcigoKSA9PiBvZih0aGlzLnRoLnRvQXJyYXkoKSkpLFxuICAgICAgZGVmZXIoKCkgPT4gdGhpcy50aC5jaGFuZ2VzLnBpcGUobWFwKCgpID0+IHRoaXMudGgudG9BcnJheSgpKSkpXG4gICAgKS5waXBlKFxuICAgICAgbWFwKChjb2xzOiBQcml6bVRoQ29tcG9uZW50PFQ+W10pID0+IHtcbiAgICAgICAgY29uc3QgY29sc3BhbiA9IGNvbHMucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IGFjYyArIGVsZW1lbnQuZWwubmF0aXZlRWxlbWVudC5jb2xTcGFuLCAwKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb2xzLFxuICAgICAgICAgIGNvbHNwYW4sXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmhlYWRzJCA9IHRoaXMuaGVhZHMuY2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY29scyQpLFxuICAgICAgc3dpdGNoTWFwKGNvbHMgPT4ge1xuICAgICAgICBjb25zdCBoZWFkcyA9IHRoaXMuaGVhZHMudG9BcnJheSgpO1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gY29scztcblxuICAgICAgICBpZiAoIWNvbHVtbnMgfHwgY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gb2YoaGVhZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzcGxheSBoZWFkcyBpbiBvcmRlciBhcyBzcGVjaWZpZWQgYnkgdGFibGUncyBgY29sdW1uYCBwcm9wZXJ0eS5cbiAgICAgICAgcmV0dXJuIGNvbmNhdChcbiAgICAgICAgICBvZihuZXcgQXJyYXkoY29sdW1ucy5sZW5ndGgpLmZpbGwobnVsbCkpLFxuICAgICAgICAgIG9mKGNvbHVtbnMubWFwKGMgPT4gaGVhZHMuZmluZChoID0+IGgucHJpem1IZWFkID09PSBjKSkpLnBpcGUobW92ZUluRXZlbnRMb29wSXRlcmF0aW9uKDIpKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApIGFzIGFueTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGFibGVTZXJ2aWNlLnJlbW92ZVRoR3JvdXAodGhpcyk7XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50IHNlbGVjdG9yPVwidGhbcHJpem1UaF1cIj48L25nLWNvbnRlbnQ+XG48bmctY29udGFpbmVyICpuZ0lmPVwiaGVhZHMkIHwgYXN5bmMgYXMgaGVhZGluZ3NcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaGVhZCBvZiBoZWFkaW5nc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoZWFkPy50ZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhlYWQudGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==