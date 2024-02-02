import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { PrizmSplitterService } from '../splitter.service';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "../splitter.service";
export class PrizmSplitterAreaComponent extends PrizmAbstractTestId {
    static { this.id = 0; }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSplitterAreaComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.PrizmSplitterService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmSplitterAreaComponent, isStandalone: true, selector: "prizm-splitter-area", inputs: { size: "size", minSize: "minSize" }, outputs: { areaMinSize: "areaMinSize" }, host: { properties: { "style.order": "this.order", "style.flex-basis": "this.currentSize" } }, usesInheritance: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{overflow:hidden;flex:0 0 0}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSplitterAreaComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3NwbGl0dGVyL2FyZWEvYXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQVNyRCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsbUJBQW1CO2FBQzFELE9BQUUsR0FBRyxDQUFDLEFBQUosQ0FBSztJQUtkLElBQWEsSUFBSSxDQUFDLEtBQW9CO1FBQ3BDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQVVNLElBQUk7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDOUMsQ0FBQztJQUVNLGNBQWMsQ0FBQyxJQUFZO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBRU0sc0JBQXNCLENBQUMsR0FBVztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsSUFBSSxDQUFDLEtBQUssT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2RCxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVk7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQ1MsVUFBbUMsRUFDbEMsR0FBc0IsRUFDdEIsZUFBcUM7UUFFN0MsS0FBSyxFQUFFLENBQUM7UUFKRCxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNsQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBc0I7UUExRDdCLFlBQU8sR0FBRyxtQkFBbUIsQ0FBQztRQUNoRCxPQUFFLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQyxFQUFFLENBQUM7UUFzQjVCLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFLM0Msa0JBQWEsR0FBRyxLQUFLLENBQUM7SUFnQ3RCLENBQUM7OEdBL0RVLDBCQUEwQjtrR0FBMUIsMEJBQTBCLDRSQUwzQiwyQkFBMkI7OzJGQUsxQiwwQkFBMEI7a0JBUHRDLFNBQVM7K0JBQ0UscUJBQXFCLFlBQ3JCLDJCQUEyQixjQUV6QixJQUFJLG1CQUNDLHVCQUF1QixDQUFDLE1BQU07b0tBUWxDLElBQUk7c0JBQWhCLEtBQUs7Z0JBbUJHLE9BQU87c0JBQWYsS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNO2dCQUVxQixLQUFLO3NCQUFoQyxXQUFXO3VCQUFDLGFBQWE7Z0JBQ08sV0FBVztzQkFBM0MsV0FBVzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByaXptU3BsaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc3BsaXR0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1zcGxpdHRlci1hcmVhJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVVcmxzOiBbJy4vYXJlYS5jb21wb25lbnQubGVzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1TcGxpdHRlckFyZWFDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIHtcbiAgc3RhdGljIGlkID0gMDtcbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9zcGxpdHRlci0tYXJlYSc7XG4gIGlkID0gKytQcml6bVNwbGl0dGVyQXJlYUNvbXBvbmVudC5pZDtcblxuICBwcml2YXRlIF9zaXplITogbnVtYmVyIHwgbnVsbDtcbiAgQElucHV0KCkgc2V0IHNpemUodmFsdWU6IG51bWJlciB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgdGhpcy5zZXRTaXplKHZhbHVlID8/IDApO1xuICAgICAgdGhpcy5zZXRDdXJyZW50U2l6ZSgwKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgdGhpcy5zZXRDdXJyZW50U2l6ZSh2YWx1ZSk7XG4gICAgICB0aGlzLnNldFNpemUodmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMuc3BsaXR0ZXJTZXJ2aWNlLmFyZWFJbnB1dFNpemVDaGFuZ2UkJC5uZXh0KHRoaXMpO1xuICB9XG4gIGdldCBzaXplKCk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KCkgbWluU2l6ZSA9IDA7XG4gIEBPdXRwdXQoKSBhcmVhTWluU2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm9yZGVyJykgb3JkZXIhOiBudW1iZXI7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuZmxleC1iYXNpcycpIGN1cnJlbnRTaXplITogc3RyaW5nO1xuXG4gIG1hcmtGb3JVcGRhdGUgPSBmYWxzZTtcblxuICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5oaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaGlkZGVuID0gZmFsc2U7XG4gIH1cblxuICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5oaWRkZW47XG4gIH1cblxuICBwdWJsaWMgc2V0Q3VycmVudFNpemUoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50U2l6ZSA9IHNpemUgKyAnJSc7XG4gIH1cblxuICBwdWJsaWMgc2V0Q3VycmVudFNpemVXaXRoQ2FsYyhnYXA6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFNpemUgPSBgY2FsYygke3RoaXMuX3NpemV9JSAtICR7Z2FwfXB4KWA7XG4gIH1cblxuICBwdWJsaWMgc2V0U2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLl9zaXplID0gc2l6ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBzcGxpdHRlclNlcnZpY2U6IFByaXptU3BsaXR0ZXJTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiJdfQ==