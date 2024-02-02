import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { PrizmSplitterService } from '../splitter.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "../splitter.service";
export class PrizmSplitterAreaComponent extends PrizmAbstractTestId {
    set size(value) {
        if (value === null) {
            this.hide();
            this.setSize(value ?? 0);
            this.setCurrentSize(0);
        }
        if (value !== null) {
            this.show();
            this.setCurrentSize(value);
            this.setSize(value);
        }
        this.splitterService.areaInputSizeChange$$.next(this);
    }
    get size() {
        return this._size;
    }
    hide() {
        this.elementRef.nativeElement.hidden = true;
    }
    show() {
        this.elementRef.nativeElement.hidden = false;
    }
    get hidden() {
        return this.elementRef.nativeElement.hidden;
    }
    setCurrentSize(size) {
        this.currentSize = size + '%';
    }
    setCurrentSizeWithCalc(gap) {
        this.currentSize = `calc(${this._size}% - ${gap}px)`;
    }
    setSize(size) {
        this._size = size;
    }
    constructor(elementRef, cdr, splitterService) {
        super();
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.splitterService = splitterService;
        this.testId_ = 'ui_splitter--area';
        this.id = ++PrizmSplitterAreaComponent.id;
        this.minSize = 0;
        this.areaMinSize = new EventEmitter();
        this.markForUpdate = false;
    }
}
PrizmSplitterAreaComponent.id = 0;
PrizmSplitterAreaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSplitterAreaComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.PrizmSplitterService }], target: i0.ɵɵFactoryTarget.Component });
PrizmSplitterAreaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmSplitterAreaComponent, isStandalone: true, selector: "prizm-splitter-area", inputs: { size: "size", minSize: "minSize" }, outputs: { areaMinSize: "areaMinSize" }, host: { properties: { "style.order": "this.order", "style.flex-basis": "this.currentSize" } }, usesInheritance: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{overflow:hidden;flex:0 0 0}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSplitterAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-splitter-area', template: `<ng-content></ng-content>`, standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{overflow:hidden;flex:0 0 0}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.PrizmSplitterService }]; }, propDecorators: { size: [{
                type: Input
            }], minSize: [{
                type: Input
            }], areaMinSize: [{
                type: Output
            }], order: [{
                type: HostBinding,
                args: ['style.order']
            }], currentSize: [{
                type: HostBinding,
                args: ['style.flex-basis']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3NwbGl0dGVyL2FyZWEvYXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVNyRCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsbUJBQW1CO0lBTWpFLElBQWEsSUFBSSxDQUFDLEtBQW9CO1FBQ3BDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQVVNLElBQUk7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDOUMsQ0FBQztJQUVNLGNBQWMsQ0FBQyxJQUFZO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBRU0sc0JBQXNCLENBQUMsR0FBVztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsSUFBSSxDQUFDLEtBQUssT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2RCxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVk7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQ1MsVUFBbUMsRUFDbEMsR0FBc0IsRUFDdEIsZUFBcUM7UUFFN0MsS0FBSyxFQUFFLENBQUM7UUFKRCxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNsQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBc0I7UUExRDdCLFlBQU8sR0FBRyxtQkFBbUIsQ0FBQztRQUNoRCxPQUFFLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQyxFQUFFLENBQUM7UUFzQjVCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLM0Msa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFnQ3RCLENBQUM7O0FBOURNLDZCQUFFLEdBQUcsQ0FBQyxDQUFDO3VIQURILDBCQUEwQjsyR0FBMUIsMEJBQTBCLDRSQUwzQiwyQkFBMkI7MkZBSzFCLDBCQUEwQjtrQkFQdEMsU0FBUzsrQkFDRSxxQkFBcUIsWUFDckIsMkJBQTJCLGNBRXpCLElBQUksbUJBQ0MsdUJBQXVCLENBQUMsTUFBTTtvS0FRbEMsSUFBSTtzQkFBaEIsS0FBSztnQkFtQkcsT0FBTztzQkFBZixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU07Z0JBRXFCLEtBQUs7c0JBQWhDLFdBQVc7dUJBQUMsYUFBYTtnQkFDTyxXQUFXO3NCQUEzQyxXQUFXO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJpem1TcGxpdHRlclNlcnZpY2UgfSBmcm9tICcuLi9zcGxpdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLXNwbGl0dGVyLWFyZWEnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZVVybHM6IFsnLi9hcmVhLmNvbXBvbmVudC5sZXNzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVNwbGl0dGVyQXJlYUNvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQge1xuICBzdGF0aWMgaWQgPSAwO1xuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX3NwbGl0dGVyLS1hcmVhJztcbiAgaWQgPSArK1ByaXptU3BsaXR0ZXJBcmVhQ29tcG9uZW50LmlkO1xuXG4gIHByaXZhdGUgX3NpemUhOiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBzZXQgc2l6ZSh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB0aGlzLnNldFNpemUodmFsdWUgPz8gMCk7XG4gICAgICB0aGlzLnNldEN1cnJlbnRTaXplKDApO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB0aGlzLnNldEN1cnJlbnRTaXplKHZhbHVlKTtcbiAgICAgIHRoaXMuc2V0U2l6ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zcGxpdHRlclNlcnZpY2UuYXJlYUlucHV0U2l6ZUNoYW5nZSQkLm5leHQodGhpcyk7XG4gIH1cbiAgZ2V0IHNpemUoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKSBtaW5TaXplID0gMDtcbiAgQE91dHB1dCgpIGFyZWFNaW5TaXplID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUub3JkZXInKSBvcmRlciE6IG51bWJlcjtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4LWJhc2lzJykgY3VycmVudFNpemUhOiBzdHJpbmc7XG5cbiAgbWFya0ZvclVwZGF0ZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmhpZGRlbiA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5oaWRkZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBoaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmhpZGRlbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDdXJyZW50U2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRTaXplID0gc2l6ZSArICclJztcbiAgfVxuXG4gIHB1YmxpYyBzZXRDdXJyZW50U2l6ZVdpdGhDYWxjKGdhcDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50U2l6ZSA9IGBjYWxjKCR7dGhpcy5fc2l6ZX0lIC0gJHtnYXB9cHgpYDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3NpemUgPSBzaXplO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHNwbGl0dGVyU2VydmljZTogUHJpem1TcGxpdHRlclNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIl19