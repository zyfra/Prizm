import { Component, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { StatusDictionary } from './navigation.interfaces';
import { ActiveNavigationItemService } from './services/active-navigation-item.service';
import { skip } from 'rxjs/operators';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "./services/active-navigation-item.service";
import * as i2 from "@angular/common";
import * as i3 from "./components/prizm-navigation-item-simple/prizm-navigation-item-simple.component";
import * as i4 from "./components/prizm-navigation-item-expandable/prizm-navigation-item-expandable.component";
export class PrizmNavigationComponent extends PrizmAbstractTestId {
    set data(tree) {
        tree.forEach(treeItem => this.calculateStatuses(treeItem));
        this.menuItems = tree;
    }
    set activeElement(el) {
        this.activeItemService.activeItem = el;
    }
    constructor(activeItemService) {
        super();
        this.activeItemService = activeItemService;
        this.activeItemChange = this.activeItemService.activeItem$.pipe(skip(1));
        this.menuItems = [];
        this.testId_ = 'ui_navigation';
    }
    calculateStatuses(data) {
        if (data?.children?.length && data.children.length > 0) {
            data.children.forEach(child => this.calculateStatuses(child));
            let maxStatus = -1;
            data.children
                .filter(child => child?.indicatorStatus)
                .forEach(child => {
                maxStatus =
                    StatusDictionary[child.indicatorStatus] > maxStatus
                        ? StatusDictionary[child.indicatorStatus]
                        : maxStatus;
            });
            data.indicatorStatus = StatusDictionary[maxStatus];
        }
    }
}
PrizmNavigationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmNavigationComponent, deps: [{ token: i1.ActiveNavigationItemService }], target: i0.ɵɵFactoryTarget.Component });
PrizmNavigationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmNavigationComponent, selector: "prizm-navigation", inputs: { data: "data", activeElement: "activeElement" }, outputs: { activeItemChange: "activeItemChange" }, providers: [ActiveNavigationItemService], usesInheritance: true, ngImport: i0, template: "<ng-container *ngFor=\"let item of menuItems\">\n  <prizm-navigation-item-simple\n    *ngIf=\"!item?.children\"\n    [data]=\"$any(item)\"\n    [deep]=\"1\"\n  ></prizm-navigation-item-simple>\n\n  <prizm-navigation-item-expandable\n    *ngIf=\"$any(item?.children?.length) > 0\"\n    [data]=\"$any(item)\"\n    [deep]=\"1\"\n  ></prizm-navigation-item-expandable>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.PrizmNavigationItemSimpleComponent, selector: "prizm-navigation-item-simple", inputs: ["data", "deep"] }, { kind: "component", type: i4.PrizmNavigationItemExpandableComponent, selector: "prizm-navigation-item-expandable", inputs: ["data", "deep"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmNavigationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-navigation', changeDetection: ChangeDetectionStrategy.OnPush, providers: [ActiveNavigationItemService], template: "<ng-container *ngFor=\"let item of menuItems\">\n  <prizm-navigation-item-simple\n    *ngIf=\"!item?.children\"\n    [data]=\"$any(item)\"\n    [deep]=\"1\"\n  ></prizm-navigation-item-simple>\n\n  <prizm-navigation-item-expandable\n    *ngIf=\"$any(item?.children?.length) > 0\"\n    [data]=\"$any(item)\"\n    [deep]=\"1\"\n  ></prizm-navigation-item-expandable>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ActiveNavigationItemService }]; }, propDecorators: { data: [{
                type: Input
            }], activeElement: [{
                type: Input
            }], activeItemChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vcHJpem0tbmF2aWdhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vcHJpem0tbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFtQixnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBU3JELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxtQkFBbUI7SUFDL0QsSUFBb0IsSUFBSSxDQUFDLElBQXVCO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBYSxhQUFhLENBQUMsRUFBbUI7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQU1ELFlBQTZCLGlCQUE4QztRQUN6RSxLQUFLLEVBQUUsQ0FBQztRQURtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTZCO1FBTGpFLHFCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZFLGNBQVMsR0FBc0IsRUFBRSxDQUFDO1FBRXZCLFlBQU8sR0FBRyxlQUFlLENBQUM7SUFHNUMsQ0FBQztJQUVNLGlCQUFpQixDQUFDLElBQXFCO1FBQzVDLElBQUksSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFOUQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFbkIsSUFBSSxDQUFDLFFBQVE7aUJBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQztpQkFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNmLFNBQVM7b0JBQ1AsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGVBQWtDLENBQUMsR0FBRyxTQUFTO3dCQUNwRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGVBQWtDLENBQUM7d0JBQzVELENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7WUFFTCxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBb0IsQ0FBQztTQUN2RTtJQUNILENBQUM7O3FIQW5DVSx3QkFBd0I7eUdBQXhCLHdCQUF3Qix3SkFGeEIsQ0FBQywyQkFBMkIsQ0FBQyxpRENaMUMsaVlBYUE7MkZEQ2Esd0JBQXdCO2tCQVBwQyxTQUFTOytCQUNFLGtCQUFrQixtQkFHWCx1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDLENBQUMsMkJBQTJCLENBQUM7a0hBR3BCLElBQUk7c0JBQXZCLEtBQUs7Z0JBS08sYUFBYTtzQkFBekIsS0FBSztnQkFHSSxnQkFBZ0I7c0JBQXpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTmF2aWdhdGlvblRyZWUsIFN0YXR1c0RpY3Rpb25hcnkgfSBmcm9tICcuL25hdmlnYXRpb24uaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBJbmRpY2F0b3JTdGF0dXMgfSBmcm9tICcuLi9pbmRpY2F0b3InO1xuaW1wb3J0IHsgQWN0aXZlTmF2aWdhdGlvbkl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hY3RpdmUtbmF2aWdhdGlvbi1pdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJpem0tbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ByaXptLW5hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0FjdGl2ZU5hdmlnYXRpb25JdGVtU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQge1xuICBASW5wdXQoKSBwdWJsaWMgc2V0IGRhdGEodHJlZTogSU5hdmlnYXRpb25UcmVlW10pIHtcbiAgICB0cmVlLmZvckVhY2godHJlZUl0ZW0gPT4gdGhpcy5jYWxjdWxhdGVTdGF0dXNlcyh0cmVlSXRlbSkpO1xuXG4gICAgdGhpcy5tZW51SXRlbXMgPSB0cmVlO1xuICB9XG4gIEBJbnB1dCgpIHNldCBhY3RpdmVFbGVtZW50KGVsOiBJTmF2aWdhdGlvblRyZWUpIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW1TZXJ2aWNlLmFjdGl2ZUl0ZW0gPSBlbDtcbiAgfVxuICBAT3V0cHV0KCkgYWN0aXZlSXRlbUNoYW5nZSA9IHRoaXMuYWN0aXZlSXRlbVNlcnZpY2UuYWN0aXZlSXRlbSQucGlwZShza2lwKDEpKTtcblxuICBwdWJsaWMgbWVudUl0ZW1zOiBJTmF2aWdhdGlvblRyZWVbXSA9IFtdO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfbmF2aWdhdGlvbic7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlSXRlbVNlcnZpY2U6IEFjdGl2ZU5hdmlnYXRpb25JdGVtU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlU3RhdHVzZXMoZGF0YTogSU5hdmlnYXRpb25UcmVlKTogdm9pZCB7XG4gICAgaWYgKGRhdGE/LmNoaWxkcmVuPy5sZW5ndGggJiYgZGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBkYXRhLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gdGhpcy5jYWxjdWxhdGVTdGF0dXNlcyhjaGlsZCkpO1xuXG4gICAgICBsZXQgbWF4U3RhdHVzID0gLTE7XG5cbiAgICAgIGRhdGEuY2hpbGRyZW5cbiAgICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZD8uaW5kaWNhdG9yU3RhdHVzKVxuICAgICAgICAuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgbWF4U3RhdHVzID1cbiAgICAgICAgICAgIFN0YXR1c0RpY3Rpb25hcnlbY2hpbGQuaW5kaWNhdG9yU3RhdHVzIGFzIEluZGljYXRvclN0YXR1c10gPiBtYXhTdGF0dXNcbiAgICAgICAgICAgICAgPyBTdGF0dXNEaWN0aW9uYXJ5W2NoaWxkLmluZGljYXRvclN0YXR1cyBhcyBJbmRpY2F0b3JTdGF0dXNdXG4gICAgICAgICAgICAgIDogbWF4U3RhdHVzO1xuICAgICAgICB9KTtcblxuICAgICAgZGF0YS5pbmRpY2F0b3JTdGF0dXMgPSBTdGF0dXNEaWN0aW9uYXJ5W21heFN0YXR1c10gYXMgSW5kaWNhdG9yU3RhdHVzO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtZW51SXRlbXNcIj5cbiAgPHByaXptLW5hdmlnYXRpb24taXRlbS1zaW1wbGVcbiAgICAqbmdJZj1cIiFpdGVtPy5jaGlsZHJlblwiXG4gICAgW2RhdGFdPVwiJGFueShpdGVtKVwiXG4gICAgW2RlZXBdPVwiMVwiXG4gID48L3ByaXptLW5hdmlnYXRpb24taXRlbS1zaW1wbGU+XG5cbiAgPHByaXptLW5hdmlnYXRpb24taXRlbS1leHBhbmRhYmxlXG4gICAgKm5nSWY9XCIkYW55KGl0ZW0/LmNoaWxkcmVuPy5sZW5ndGgpID4gMFwiXG4gICAgW2RhdGFdPVwiJGFueShpdGVtKVwiXG4gICAgW2RlZXBdPVwiMVwiXG4gID48L3ByaXptLW5hdmlnYXRpb24taXRlbS1leHBhbmRhYmxlPlxuPC9uZy1jb250YWluZXI+XG4iXX0=