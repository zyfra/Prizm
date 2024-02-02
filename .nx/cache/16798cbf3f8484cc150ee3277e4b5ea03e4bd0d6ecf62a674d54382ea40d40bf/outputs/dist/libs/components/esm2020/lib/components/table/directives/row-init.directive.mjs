import { Directive, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { PrizmTableRowService } from '../service/row.service';
import { PrizmTableTreeService } from '../service/tree.service';
import { Compare } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
import * as i1 from "../service/row.service";
import * as i2 from "../service/tree.service";
export class PrizmTableRowInitDirective {
    constructor(viewContainer, tableRowService, treeService) {
        this.viewContainer = viewContainer;
        this.tableRowService = tableRowService;
        this.treeService = treeService;
    }
    ngOnDestroy() {
        this.viewContainer.clear();
    }
    ngOnInit() {
        this.generateIdx();
        this.embeddedRef = this.viewContainer.createEmbeddedView(this.template, this.getContext());
        this.initChildrenVisibleStateOnce();
        this.updateContextIfCan();
    }
    initChildrenVisibleStateOnce() {
        if (Compare.isNullish(this.idxFromMap))
            this.treeService.init(this.idx);
    }
    generateIdx() {
        let rowId;
        if (typeof this.context.getRowId === 'function' || this.context.getRowId) {
            rowId =
                typeof this.context.getRowId === 'function'
                    ? this.context.getRowId(this.context.item)
                    : this.context.item[this.context.getRowId];
            this.idxFromMap = this.tableRowService.getIdxById(rowId);
        }
        if (Compare.isNullish(this.idxFromMap))
            this.tableRowService.incrementIdx();
        this.idx = this.idxFromMap ?? this.tableRowService.getLastIncrementedIdx();
        if (Compare.isNullish(this.idxFromMap) && !Compare.isNullish(rowId)) {
            this.tableRowService.saveId(rowId, this.idx);
        }
        if ('parentIdx' in this.context) {
            this.treeService.addChildToParent(this.idx, this.context.parentIdx);
        }
    }
    updateContextIfCan() {
        if (!this.embeddedRef)
            return;
        this.context = this.getContext();
        if (this.context !== this.embeddedRef.context)
            this.embeddedRef.context = this.context;
        this.embeddedRef.markForCheck();
    }
    getContext() {
        const odd = this.idx % 2 !== 0;
        return {
            ...this.context,
            index: this.idx,
            odd: odd,
            even: !odd,
        };
    }
    ngOnChanges(changes) {
        this.updateContextIfCan();
    }
}
PrizmTableRowInitDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableRowInitDirective, deps: [{ token: i0.ViewContainerRef }, { token: i1.PrizmTableRowService }, { token: i2.PrizmTableTreeService }], target: i0.ɵɵFactoryTarget.Directive });
PrizmTableRowInitDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTableRowInitDirective, selector: "ng-template[prizmTableRowInit]", inputs: { context: "context", template: "template" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableRowInitDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `ng-template[prizmTableRowInit]`,
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i1.PrizmTableRowService }, { type: i2.PrizmTableTreeService }]; }, propDecorators: { context: [{
                type: Input
            }], template: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWluaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9kaXJlY3RpdmVzL3Jvdy1pbml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFLTCxXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUs1QyxNQUFNLE9BQU8sMEJBQTBCO0lBTXJDLFlBQ2tCLGFBQStCLEVBQy9CLGVBQXFDLEVBQ3JDLFdBQWtDO1FBRmxDLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixvQkFBZSxHQUFmLGVBQWUsQ0FBc0I7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO0lBQ2pELENBQUM7SUFFRyxXQUFXO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLDRCQUE0QjtRQUNsQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLEtBQWMsQ0FBQztRQUVuQixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3hFLEtBQUs7Z0JBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVO29CQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFXLENBQUM7U0FDcEU7UUFFRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUUzRSxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFtQixDQUFDLENBQUM7U0FDL0U7SUFDSCxDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU8sVUFBVTtRQUNoQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsT0FBTztZQUNMLEdBQUcsSUFBSSxDQUFDLE9BQU87WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDZixHQUFHLEVBQUUsR0FBRztZQUNSLElBQUksRUFBRSxDQUFDLEdBQUc7U0FDWCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzt1SEFyRVUsMEJBQTBCOzJHQUExQiwwQkFBMEI7MkZBQTFCLDBCQUEwQjtrQkFIdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2lCQUMzQzs4S0FFVSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1UYWJsZVJvd1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jvdy5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptVGFibGVUcmVlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvdHJlZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptVGFibGVSb3dDb250ZXh0IH0gZnJvbSAnLi4vdGFibGUudHlwZXMnO1xuaW1wb3J0IHsgQ29tcGFyZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgbmctdGVtcGxhdGVbcHJpem1UYWJsZVJvd0luaXRdYCxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1UYWJsZVJvd0luaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgY29udGV4dCE6IFByaXptVGFibGVSb3dDb250ZXh0O1xuICBASW5wdXQoKSB0ZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG4gIHB1YmxpYyBlbWJlZGRlZFJlZiE6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xuICBwcml2YXRlIGlkeCE6IG51bWJlcjtcbiAgcHJpdmF0ZSBpZHhGcm9tTWFwITogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwdWJsaWMgcmVhZG9ubHkgdGFibGVSb3dTZXJ2aWNlOiBQcml6bVRhYmxlUm93U2VydmljZSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHJlZVNlcnZpY2U6IFByaXptVGFibGVUcmVlU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ2VuZXJhdGVJZHgoKTtcbiAgICB0aGlzLmVtYmVkZGVkUmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlLCB0aGlzLmdldENvbnRleHQoKSk7XG4gICAgdGhpcy5pbml0Q2hpbGRyZW5WaXNpYmxlU3RhdGVPbmNlKCk7XG4gICAgdGhpcy51cGRhdGVDb250ZXh0SWZDYW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENoaWxkcmVuVmlzaWJsZVN0YXRlT25jZSgpOiB2b2lkIHtcbiAgICBpZiAoQ29tcGFyZS5pc051bGxpc2godGhpcy5pZHhGcm9tTWFwKSkgdGhpcy50cmVlU2VydmljZS5pbml0KHRoaXMuaWR4KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVJZHgoKTogdm9pZCB7XG4gICAgbGV0IHJvd0lkOiB1bmtub3duO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRleHQuZ2V0Um93SWQgPT09ICdmdW5jdGlvbicgfHwgdGhpcy5jb250ZXh0LmdldFJvd0lkKSB7XG4gICAgICByb3dJZCA9XG4gICAgICAgIHR5cGVvZiB0aGlzLmNvbnRleHQuZ2V0Um93SWQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IHRoaXMuY29udGV4dC5nZXRSb3dJZCh0aGlzLmNvbnRleHQuaXRlbSlcbiAgICAgICAgICA6IHRoaXMuY29udGV4dC5pdGVtW3RoaXMuY29udGV4dC5nZXRSb3dJZF07XG4gICAgICB0aGlzLmlkeEZyb21NYXAgPSB0aGlzLnRhYmxlUm93U2VydmljZS5nZXRJZHhCeUlkKHJvd0lkKSBhcyBudW1iZXI7XG4gICAgfVxuXG4gICAgaWYgKENvbXBhcmUuaXNOdWxsaXNoKHRoaXMuaWR4RnJvbU1hcCkpIHRoaXMudGFibGVSb3dTZXJ2aWNlLmluY3JlbWVudElkeCgpO1xuICAgIHRoaXMuaWR4ID0gdGhpcy5pZHhGcm9tTWFwID8/IHRoaXMudGFibGVSb3dTZXJ2aWNlLmdldExhc3RJbmNyZW1lbnRlZElkeCgpO1xuXG4gICAgaWYgKENvbXBhcmUuaXNOdWxsaXNoKHRoaXMuaWR4RnJvbU1hcCkgJiYgIUNvbXBhcmUuaXNOdWxsaXNoKHJvd0lkKSkge1xuICAgICAgdGhpcy50YWJsZVJvd1NlcnZpY2Uuc2F2ZUlkKHJvd0lkLCB0aGlzLmlkeCk7XG4gICAgfVxuXG4gICAgaWYgKCdwYXJlbnRJZHgnIGluIHRoaXMuY29udGV4dCkge1xuICAgICAgdGhpcy50cmVlU2VydmljZS5hZGRDaGlsZFRvUGFyZW50KHRoaXMuaWR4LCB0aGlzLmNvbnRleHQucGFyZW50SWR4IGFzIG51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZUNvbnRleHRJZkNhbigpIHtcbiAgICBpZiAoIXRoaXMuZW1iZWRkZWRSZWYpIHJldHVybjtcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBpZiAodGhpcy5jb250ZXh0ICE9PSB0aGlzLmVtYmVkZGVkUmVmLmNvbnRleHQpIHRoaXMuZW1iZWRkZWRSZWYuY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICB0aGlzLmVtYmVkZGVkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb250ZXh0KCk6IFByaXptVGFibGVSb3dDb250ZXh0IHtcbiAgICBjb25zdCBvZGQgPSB0aGlzLmlkeCAlIDIgIT09IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29udGV4dCxcbiAgICAgIGluZGV4OiB0aGlzLmlkeCxcbiAgICAgIG9kZDogb2RkLFxuICAgICAgZXZlbjogIW9kZCxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ29udGV4dElmQ2FuKCk7XG4gIH1cbn1cbiJdfQ==