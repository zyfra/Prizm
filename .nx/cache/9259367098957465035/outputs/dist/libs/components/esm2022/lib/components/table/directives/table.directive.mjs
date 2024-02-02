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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTableDirective, deps: [{ token: i1.PrizmTableTreeService }, { token: i2.PrizmTableSorterService }, { token: i3.PrizmTableService }, { token: IntersectionObserverService }, { token: ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmTableDirective, selector: "table[prizmTable]", inputs: { columns: "columns", size: "size", tableBorderStyle: "tableBorderStyle", sort: "sort", direction: "direction", sorter: "sorter" }, outputs: { directionChange: "directionChange", sorterChange: "sorterChange", sortChange: "sortChange" }, host: { properties: { "attr.data-size": "this.size", "attr.border-style": "this.tableBorderStyle" }, styleAttribute: "border-collapse: separate; border-spacing: 0" }, providers: [
            ...PRIZM_TABLE_PROVIDERS,
            PrizmDestroyService,
            PrizmTableService,
            PrizmTableTreeService,
            PrizmTableRowService,
        ], exportAs: ["prizmTable"], usesInheritance: true, ngImport: i0 }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTableDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3RhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVqRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUdyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUF3Qix1QkFBdUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7O0FBaUJ4RCxNQUFNLE9BQU8sbUJBQ1gsU0FBUSx1QkFBdUI7SUF1Qi9CLElBQ0ksSUFBSSxDQUFDLE9BQWtDO1FBQ3pDLEtBQUssTUFBTSxJQUFJLElBQUksT0FB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QkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixTQUFTLEVBQUU7d0JBQ1QsR0FBRyxxQkFBcUI7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjtxQkFDckI7b0JBQ0QscUVBQXFFO29CQUNyRSxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLDhDQUE4QztxQkFDdEQ7b0JBQ0QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzswQkF3REksTUFBTTsyQkFBQywyQkFBMkI7OzBCQUVsQyxNQUFNOzJCQUFDLGlCQUFpQjs0Q0EvQzNCLE9BQU87c0JBSk4sS0FBSztnQkFXTixJQUFJO3NCQUhILEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQU83QixnQkFBZ0I7c0JBSGYsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBSzVCLElBQUk7c0JBRFAsS0FBSztnQkFhTixTQUFTO3NCQUZSLEtBQUs7Z0JBS0csZUFBZTtzQkFEdkIsTUFBTTtnQkFPRSxZQUFZO3NCQURwQixNQUFNO2dCQUlFLFVBQVU7c0JBRGxCLE1BQU07Z0JBZ0JQLE1BQU07c0JBRkwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PYnNlcnZlclNlcnZpY2UgfSBmcm9tICdAbmctd2ViLWFwaXMvaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcblxuaW1wb3J0IHsgUFJJWk1fVEFCTEVfUFJPVklERVJTIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3RhYmxlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBQcml6bVNpemVMLCBQcml6bVNpemVNLCBQcml6bVNpemVTLCBQcml6bVNpemVYUyB9IGZyb20gJy4uLy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgUHJpem1Db21wYXJhdG9yLCBQcml6bVRhYmxlQm9yZGVyU3R5bGUgfSBmcm9tICcuLi90YWJsZS50eXBlcyc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptQ29udHJvbGxlciB9IGZyb20gJy4uL2Fic3RyYWN0L2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBwcml6bUF1dG9FbWl0LCBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1UYWJsZUNlbGxTb3J0ZXIsIFByaXptVGFibGVTb3J0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZSc7XG5pbXBvcnQgeyBQcml6bVRhYmxlVHJlZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3RyZWUuc2VydmljZSc7XG5pbXBvcnQgeyBQcml6bVRhYmxlUm93U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2Uvcm93LnNlcnZpY2UnO1xuaW1wb3J0IHsgcHJpem1UYWJsZURlZmF1bHRDb2x1bW5Tb3J0IH0gZnJvbSAnLi4vdGFibGUuY29uc3QnO1xuaW1wb3J0IHsgUHJpem1UYWJsZVNlcnZpY2UgfSBmcm9tICcuLi90YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYHRhYmxlW3ByaXptVGFibGVdYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uUFJJWk1fVEFCTEVfUFJPVklERVJTLFxuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAgUHJpem1UYWJsZVNlcnZpY2UsXG4gICAgUHJpem1UYWJsZVRyZWVTZXJ2aWNlLFxuICAgIFByaXptVGFibGVSb3dTZXJ2aWNlLFxuICBdLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdDoge1xuICAgIHN0eWxlOiBgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTsgYm9yZGVyLXNwYWNpbmc6IDBgLFxuICB9LFxuICBleHBvcnRBczogJ3ByaXptVGFibGUnLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRhYmxlRGlyZWN0aXZlPFQgZXh0ZW5kcyBQYXJ0aWFsPFJlY29yZDxrZXlvZiBULCB1bmtub3duPj4+XG4gIGV4dGVuZHMgQWJzdHJhY3RQcml6bUNvbnRyb2xsZXJcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0XG57XG4gIHByaXZhdGUgcmVhZG9ubHkgY29sdW1ucyQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxSZWFkb25seUFycmF5PGtleW9mIFQgfCBzdHJpbmc+PihbXSk7XG5cbiAgQElucHV0KClcbiAgQHByaXptQXV0b0VtaXQoe1xuICAgIG5hbWU6ICdjb2x1bW5zJCQnLFxuICB9KVxuICBjb2x1bW5zOiBSZWFkb25seUFycmF5PGtleW9mIFQgfCBzdHJpbmc+ID0gW107XG5cbiAgcHVibGljIGNvbHVtbnMkID0gdGhpcy5jb2x1bW5zJCQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKGBhdHRyLmRhdGEtc2l6ZWApXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2l6ZTogUHJpem1TaXplWFMgfCBQcml6bVNpemVTIHwgUHJpem1TaXplTCB8IFByaXptU2l6ZU0gPSBgbGA7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKGBhdHRyLmJvcmRlci1zdHlsZWApXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgdGFibGVCb3JkZXJTdHlsZTogUHJpem1UYWJsZUJvcmRlclN0eWxlID0gJ2dyaWQnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzb3J0KHNvcnRlcnM6IFByaXptVGFibGVDZWxsU29ydGVyPFQ+W10pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc29ydGVycykge1xuICAgICAgaXRlbS5zb3J0ZXIgPSBpdGVtLnNvcnRlciA/PyBwcml6bVRhYmxlRGVmYXVsdENvbHVtblNvcnQ7XG4gICAgfVxuICAgIHRoaXMuc29ydGVyU2VydmljZS5zZXQoc29ydGVycyk7XG4gIH1cbiAgZ2V0IHNvcnQoKTogUHJpem1UYWJsZUNlbGxTb3J0ZXI8VD5bXSB7XG4gICAgcmV0dXJuIHRoaXMuc29ydGVyU2VydmljZS52YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGlyZWN0aW9uOiAtMSB8IDEgPSAxO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBkaXJlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPC0xIHwgMT4oKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHNvcnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UHJpem1Db21wYXJhdG9yPFQ+IHwgbnVsbD4oKTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgc29ydENoYW5nZTogT2JzZXJ2YWJsZTxQcml6bVRhYmxlQ2VsbFNvcnRlcjxUPltdPiA9IHRoaXMuc29ydGVyU2VydmljZS5jaGFuZ2VzJDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHJlZTogUHJpem1UYWJsZVRyZWVTZXJ2aWNlLFxuICAgIHB1YmxpYyByZWFkb25seSBzb3J0ZXJTZXJ2aWNlOiBQcml6bVRhYmxlU29ydGVyU2VydmljZTxUPixcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFibGVTZXJ2aWNlOiBQcml6bVRhYmxlU2VydmljZSxcbiAgICBASW5qZWN0KEludGVyc2VjdGlvbk9ic2VydmVyU2VydmljZSlcbiAgICByZWFkb25seSBlbnRyaWVzJDogT2JzZXJ2YWJsZTxJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10+LFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNvcnRlcjogUHJpem1Db21wYXJhdG9yPFQ+ID0gKCkgPT4gMDtcblxuICBwdWJsaWMgdXBkYXRlU29ydGVyKHNvcnRlcjogUHJpem1Db21wYXJhdG9yPFQ+IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNvcnRlciA9PT0gc29ydGVyKSB7XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IC0xKSB7XG4gICAgICAgIHRoaXMuc29ydGVyID0gKCk6IG51bWJlciA9PiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzLmRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydGVyID0gc29ydGVyIHx8ICgoKTogbnVtYmVyID0+IDApO1xuICAgICAgdGhpcy5zb3J0ZXJDaGFuZ2UuZW1pdCh0aGlzLnNvcnRlcik7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XG4gICAgICB0aGlzLmRpcmVjdGlvbkNoYW5nZS5lbWl0KDEpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlJC5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=