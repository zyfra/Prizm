import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Directive, EventEmitter, HostBinding, Inject, Input, Output, } from '@angular/core';
import { IntersectionObserverService } from '@ng-web-apis/intersection-observer';
import { PRIZM_TABLE_PROVIDERS } from '../providers/table.providers';
import { AbstractPrizmController } from '../abstract/controller';
import { BehaviorSubject, Observable } from 'rxjs';
import { prizmAutoEmit, prizmDefaultProp } from '@prizm-ui/core';
import { PrizmTableSorterService } from '../service';
import { PrizmTableTreeService } from '../service/tree.service';
import { PrizmTableRowService } from '../service/row.service';
import { prizmTableDefaultColumnSort } from '../table.const';
import { PrizmTableService } from '../table.service';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
import * as i1 from "../service/tree.service";
import * as i2 from "../service";
import * as i3 from "../table.service";
import * as i4 from "rxjs";
export class PrizmTableDirective extends AbstractPrizmController {
    set sort(sorters) {
        for (const item of sorters) {
            item.sorter = item.sorter ?? prizmTableDefaultColumnSort;
        }
        this.sorterService.set(sorters);
    }
    get sort() {
        return this.sorterService.value;
    }
    constructor(tree, sorterService, tableService, entries$, changeDetectorRef) {
        super();
        this.tree = tree;
        this.sorterService = sorterService;
        this.tableService = tableService;
        this.entries$ = entries$;
        this.changeDetectorRef = changeDetectorRef;
        this.columns$$ = new BehaviorSubject([]);
        this.columns = [];
        this.columns$ = this.columns$$.asObservable();
        this.size = `l`;
        this.tableBorderStyle = 'grid';
        this.direction = 1;
        this.directionChange = new EventEmitter();
        /**
         * @deprecated
         * */
        this.sorterChange = new EventEmitter();
        this.sortChange = this.sorterService.changes$;
        this.sorter = () => 0;
    }
    updateSorter(sorter) {
        if (this.sorter === sorter) {
            if (this.direction === -1) {
                this.sorter = () => 0;
            }
            else {
                this.direction = -1;
                this.directionChange.emit(this.direction);
            }
        }
        else {
            this.sorter = sorter || (() => 0);
            this.sorterChange.emit(this.sorter);
            this.direction = 1;
            this.directionChange.emit(1);
        }
        this.change$.next();
    }
    ngAfterViewInit() {
        this.changeDetectorRef.detectChanges();
    }
}
PrizmTableDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableDirective, deps: [{ token: i1.PrizmTableTreeService }, { token: i2.PrizmTableSorterService }, { token: i3.PrizmTableService }, { token: IntersectionObserverService }, { token: ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
PrizmTableDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTableDirective, selector: "table[prizmTable]", inputs: { columns: "columns", size: "size", tableBorderStyle: "tableBorderStyle", sort: "sort", direction: "direction", sorter: "sorter" }, outputs: { directionChange: "directionChange", sorterChange: "sorterChange", sortChange: "sortChange" }, host: { properties: { "attr.data-size": "this.size", "attr.border-style": "this.tableBorderStyle" }, styleAttribute: "border-collapse: separate; border-spacing: 0" }, providers: [
        ...PRIZM_TABLE_PROVIDERS,
        PrizmDestroyService,
        PrizmTableService,
        PrizmTableTreeService,
        PrizmTableRowService,
    ], exportAs: ["prizmTable"], usesInheritance: true, ngImport: i0 });
__decorate([
    prizmAutoEmit({
        name: 'columns$$',
    }),
    __metadata("design:type", Array)
], PrizmTableDirective.prototype, "columns", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmTableDirective.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmTableDirective.prototype, "tableBorderStyle", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Number)
], PrizmTableDirective.prototype, "direction", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmTableDirective.prototype, "sorter", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `table[prizmTable]`,
                    providers: [
                        ...PRIZM_TABLE_PROVIDERS,
                        PrizmDestroyService,
                        PrizmTableService,
                        PrizmTableTreeService,
                        PrizmTableRowService,
                    ],
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        style: `border-collapse: separate; border-spacing: 0`,
                    },
                    exportAs: 'prizmTable',
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmTableTreeService }, { type: i2.PrizmTableSorterService }, { type: i3.PrizmTableService }, { type: i4.Observable, decorators: [{
                    type: Inject,
                    args: [IntersectionObserverService]
                }] }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }]; }, propDecorators: { columns: [{
                type: Input
            }], size: [{
                type: Input
            }, {
                type: HostBinding,
                args: [`attr.data-size`]
            }], tableBorderStyle: [{
                type: Input
            }, {
                type: HostBinding,
                args: [`attr.border-style`]
            }], sort: [{
                type: Input
            }], direction: [{
                type: Input
            }], directionChange: [{
                type: Output
            }], sorterChange: [{
                type: Output
            }], sortChange: [{
                type: Output
            }], sorter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3RhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUdyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7O0FBaUJ4RCxNQUFNLE9BQU8sbUJBQ1gsU0FBUSx1QkFBdUI7SUF1Qi9CLElBQ0ksSUFBSSxDQUFDLE9BQWtDO1FBQ3pDLEtBQUssTUFBTSxJQUFJLElBQUksT0FB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QUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFNBQVMsRUFBRTt3QkFDVCxHQUFHLHFCQUFxQjt3QkFDeEIsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3FCQUNyQjtvQkFDRCxxRUFBcUU7b0JBQ3JFLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsOENBQThDO3FCQUN0RDtvQkFDRCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7OzBCQXdESSxNQUFNOzJCQUFDLDJCQUEyQjs7MEJBRWxDLE1BQU07MkJBQUMsaUJBQWlCOzRDQS9DM0IsT0FBTztzQkFKTixLQUFLO2dCQVdOLElBQUk7c0JBSEgsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBTzdCLGdCQUFnQjtzQkFIZixLQUFLOztzQkFDTCxXQUFXO3VCQUFDLG1CQUFtQjtnQkFLNUIsSUFBSTtzQkFEUCxLQUFLO2dCQWFOLFNBQVM7c0JBRlIsS0FBSztnQkFLRyxlQUFlO3NCQUR2QixNQUFNO2dCQU9FLFlBQVk7c0JBRHBCLE1BQU07Z0JBSUUsVUFBVTtzQkFEbEIsTUFBTTtnQkFnQlAsTUFBTTtzQkFGTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9ic2VydmVyU2VydmljZSB9IGZyb20gJ0BuZy13ZWItYXBpcy9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuXG5pbXBvcnQgeyBQUklaTV9UQUJMRV9QUk9WSURFUlMgfSBmcm9tICcuLi9wcm92aWRlcnMvdGFibGUucHJvdmlkZXJzJztcbmltcG9ydCB7IFByaXptU2l6ZUwsIFByaXptU2l6ZU0sIFByaXptU2l6ZVMsIFByaXptU2l6ZVhTIH0gZnJvbSAnLi4vLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyBQcml6bUNvbXBhcmF0b3IsIFByaXptVGFibGVCb3JkZXJTdHlsZSB9IGZyb20gJy4uL3RhYmxlLnR5cGVzJztcbmltcG9ydCB7IEFic3RyYWN0UHJpem1Db250cm9sbGVyIH0gZnJvbSAnLi4vYWJzdHJhY3QvY29udHJvbGxlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHByaXptQXV0b0VtaXQsIHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bVRhYmxlQ2VsbFNvcnRlciwgUHJpem1UYWJsZVNvcnRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptVGFibGVUcmVlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvdHJlZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptVGFibGVSb3dTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yb3cuc2VydmljZSc7XG5pbXBvcnQgeyBwcml6bVRhYmxlRGVmYXVsdENvbHVtblNvcnQgfSBmcm9tICcuLi90YWJsZS5jb25zdCc7XG5pbXBvcnQgeyBQcml6bVRhYmxlU2VydmljZSB9IGZyb20gJy4uL3RhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgdGFibGVbcHJpem1UYWJsZV1gLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5QUklaTV9UQUJMRV9QUk9WSURFUlMsXG4gICAgUHJpem1EZXN0cm95U2VydmljZSxcbiAgICBQcml6bVRhYmxlU2VydmljZSxcbiAgICBQcml6bVRhYmxlVHJlZVNlcnZpY2UsXG4gICAgUHJpem1UYWJsZVJvd1NlcnZpY2UsXG4gIF0sXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgc3R5bGU6IGBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlOyBib3JkZXItc3BhY2luZzogMGAsXG4gIH0sXG4gIGV4cG9ydEFzOiAncHJpem1UYWJsZScsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVGFibGVEaXJlY3RpdmU8VCBleHRlbmRzIFBhcnRpYWw8UmVjb3JkPGtleW9mIFQsIHVua25vd24+Pj5cbiAgZXh0ZW5kcyBBYnN0cmFjdFByaXptQ29udHJvbGxlclxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXRcbntcbiAgcHJpdmF0ZSByZWFkb25seSBjb2x1bW5zJCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFJlYWRvbmx5QXJyYXk8a2V5b2YgVCB8IHN0cmluZz4+KFtdKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1BdXRvRW1pdCh7XG4gICAgbmFtZTogJ2NvbHVtbnMkJCcsXG4gIH0pXG4gIGNvbHVtbnM6IFJlYWRvbmx5QXJyYXk8a2V5b2YgVCB8IHN0cmluZz4gPSBbXTtcblxuICBwdWJsaWMgY29sdW1ucyQgPSB0aGlzLmNvbHVtbnMkJC5hc09ic2VydmFibGUoKTtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoYGF0dHIuZGF0YS1zaXplYClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzaXplOiBQcml6bVNpemVYUyB8IFByaXptU2l6ZVMgfCBQcml6bVNpemVMIHwgUHJpem1TaXplTSA9IGBsYDtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoYGF0dHIuYm9yZGVyLXN0eWxlYClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICB0YWJsZUJvcmRlclN0eWxlOiBQcml6bVRhYmxlQm9yZGVyU3R5bGUgPSAnZ3JpZCc7XG5cbiAgQElucHV0KClcbiAgc2V0IHNvcnQoc29ydGVyczogUHJpem1UYWJsZUNlbGxTb3J0ZXI8VD5bXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBzb3J0ZXJzKSB7XG4gICAgICBpdGVtLnNvcnRlciA9IGl0ZW0uc29ydGVyID8/IHByaXptVGFibGVEZWZhdWx0Q29sdW1uU29ydDtcbiAgICB9XG4gICAgdGhpcy5zb3J0ZXJTZXJ2aWNlLnNldChzb3J0ZXJzKTtcbiAgfVxuICBnZXQgc29ydCgpOiBQcml6bVRhYmxlQ2VsbFNvcnRlcjxUPltdIHtcbiAgICByZXR1cm4gdGhpcy5zb3J0ZXJTZXJ2aWNlLnZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkaXJlY3Rpb246IC0xIHwgMSA9IDE7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGRpcmVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8LTEgfCAxPigpO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgc29ydGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQcml6bUNvbXBhcmF0b3I8VD4gfCBudWxsPigpO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBzb3J0Q2hhbmdlOiBPYnNlcnZhYmxlPFByaXptVGFibGVDZWxsU29ydGVyPFQ+W10+ID0gdGhpcy5zb3J0ZXJTZXJ2aWNlLmNoYW5nZXMkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSB0cmVlOiBQcml6bVRhYmxlVHJlZVNlcnZpY2UsXG4gICAgcHVibGljIHJlYWRvbmx5IHNvcnRlclNlcnZpY2U6IFByaXptVGFibGVTb3J0ZXJTZXJ2aWNlPFQ+LFxuICAgIHB1YmxpYyByZWFkb25seSB0YWJsZVNlcnZpY2U6IFByaXptVGFibGVTZXJ2aWNlLFxuICAgIEBJbmplY3QoSW50ZXJzZWN0aW9uT2JzZXJ2ZXJTZXJ2aWNlKVxuICAgIHJlYWRvbmx5IGVudHJpZXMkOiBPYnNlcnZhYmxlPEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXT4sXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc29ydGVyOiBQcml6bUNvbXBhcmF0b3I8VD4gPSAoKSA9PiAwO1xuXG4gIHB1YmxpYyB1cGRhdGVTb3J0ZXIoc29ydGVyOiBQcml6bUNvbXBhcmF0b3I8VD4gfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc29ydGVyID09PSBzb3J0ZXIpIHtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5zb3J0ZXIgPSAoKTogbnVtYmVyID0+IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC0xO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0ZXIgPSBzb3J0ZXIgfHwgKCgpOiBudW1iZXIgPT4gMCk7XG4gICAgICB0aGlzLnNvcnRlckNoYW5nZS5lbWl0KHRoaXMuc29ydGVyKTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uQ2hhbmdlLmVtaXQoMSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==