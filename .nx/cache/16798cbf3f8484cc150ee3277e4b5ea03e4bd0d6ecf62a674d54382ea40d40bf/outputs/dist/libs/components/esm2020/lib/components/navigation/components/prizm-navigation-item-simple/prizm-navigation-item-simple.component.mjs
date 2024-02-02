import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { ActiveNavigationItemService } from '../../services/active-navigation-item.service';
import { map } from 'rxjs/operators';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/active-navigation-item.service";
import * as i2 from "@angular/common";
import * as i3 from "../../../../directives/hint/hint.directive";
export class PrizmNavigationItemSimpleComponent extends PrizmAbstractTestId {
    set data(tree) {
        this.data$.next(tree);
    }
    get menuItem() {
        return this.data$.getValue();
    }
    constructor(activeItemService) {
        super();
        this.activeItemService = activeItemService;
        this.testId_ = 'ui_navigation--item-simple';
        this.data$ = new BehaviorSubject(null);
        this.isActive$ = combineLatest([
            this.activeItemService.activeItem$,
            this.data$,
        ]).pipe(map(([activeItem, data]) => activeItem === data));
    }
    navClick() {
        const data = this.data$.getValue();
        const current = this.activeItemService.activeItem$.getValue();
        this.activeItemService.activeItem = current === data ? null : data;
    }
}
PrizmNavigationItemSimpleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmNavigationItemSimpleComponent, deps: [{ token: i1.ActiveNavigationItemService }], target: i0.ɵɵFactoryTarget.Component });
PrizmNavigationItemSimpleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmNavigationItemSimpleComponent, selector: "prizm-navigation-item-simple", inputs: { data: "data", deep: "deep" }, usesInheritance: true, ngImport: i0, template: "<div class=\"nav\" [class.nav_active]=\"isActive$ | async\" (click)=\"navClick()\">\n  <span class=\"nav__title\" [style.marginLeft.px]=\"deep > 0 ? (deep - 1) * 24 : 0\">{{ menuItem?.title }}</span>\n  <div class=\"nav__status\">\n    <div\n      class=\"indicator indicator_{{ menuItem?.indicatorStatus }}\"\n      *ngIf=\"menuItem?.indicatorValue && menuItem?.indicatorStatus\"\n      [prizmHint]=\"$any(menuItem?.indicatorValue)\"\n    >\n      {{ menuItem?.indicatorValue }}\n    </div>\n  </div>\n</div>\n", styles: [":host{cursor:pointer}:host .nav{height:40px;padding:0 8px 0 32px;display:flex;align-items:center;background:var(--prizm-v3-background-fill-secondary);border-bottom:1px solid var(--prizm-v3-background-stroke)}:host .nav__title{margin-right:8px;font-size:14px;line-height:16px;color:var(--prizm-v3-text-icon-primary);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .nav__status{height:100%;width:32px;margin-left:auto;display:inline-flex;align-items:center;justify-content:center;color:var(--prizm-v3-text-icon-tertiary)}:host .nav__status .indicator{min-height:1rem;min-width:1rem;max-width:3rem;padding:0 4px;border-radius:1.25rem;font-size:12px;line-height:16px;font-weight:600;color:var(--prizm-v3-text-icon-exception);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .nav__status .indicator_info{background:var(--prizm-v3-status-info-primary-default)}:host .nav__status .indicator_secondary{background:var(--prizm-v3-status-none-primary-default)}:host .nav__status .indicator_success{background:var(--prizm-v3-status-success-primary-default)}:host .nav__status .indicator_warning{background:var(--prizm-v3-status-warning-primary-default)}:host .nav__status .indicator_danger{background:var(--prizm-v3-status-alarm-primary-default)}:host .nav_active{background:var(--prizm-v3-table-fill-row-active)}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.PrizmHintDirective, selector: "[prizmHint]:not(ng-container)", inputs: ["prizmAutoReposition", "prizmHintDirection", "prizmHintId", "prizmHintTheme", "prizmHintShowDelay", "prizmHintHideDelay", "prizmHintHost", "prizmHintContext", "prizmHintCanShow", "prizmHint"], outputs: ["prizmHintShowed"], exportAs: ["prizmHint"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmNavigationItemSimpleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-navigation-item-simple', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"nav\" [class.nav_active]=\"isActive$ | async\" (click)=\"navClick()\">\n  <span class=\"nav__title\" [style.marginLeft.px]=\"deep > 0 ? (deep - 1) * 24 : 0\">{{ menuItem?.title }}</span>\n  <div class=\"nav__status\">\n    <div\n      class=\"indicator indicator_{{ menuItem?.indicatorStatus }}\"\n      *ngIf=\"menuItem?.indicatorValue && menuItem?.indicatorStatus\"\n      [prizmHint]=\"$any(menuItem?.indicatorValue)\"\n    >\n      {{ menuItem?.indicatorValue }}\n    </div>\n  </div>\n</div>\n", styles: [":host{cursor:pointer}:host .nav{height:40px;padding:0 8px 0 32px;display:flex;align-items:center;background:var(--prizm-v3-background-fill-secondary);border-bottom:1px solid var(--prizm-v3-background-stroke)}:host .nav__title{margin-right:8px;font-size:14px;line-height:16px;color:var(--prizm-v3-text-icon-primary);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .nav__status{height:100%;width:32px;margin-left:auto;display:inline-flex;align-items:center;justify-content:center;color:var(--prizm-v3-text-icon-tertiary)}:host .nav__status .indicator{min-height:1rem;min-width:1rem;max-width:3rem;padding:0 4px;border-radius:1.25rem;font-size:12px;line-height:16px;font-weight:600;color:var(--prizm-v3-text-icon-exception);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .nav__status .indicator_info{background:var(--prizm-v3-status-info-primary-default)}:host .nav__status .indicator_secondary{background:var(--prizm-v3-status-none-primary-default)}:host .nav__status .indicator_success{background:var(--prizm-v3-status-success-primary-default)}:host .nav__status .indicator_warning{background:var(--prizm-v3-status-warning-primary-default)}:host .nav__status .indicator_danger{background:var(--prizm-v3-status-alarm-primary-default)}:host .nav_active{background:var(--prizm-v3-table-fill-row-active)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ActiveNavigationItemService }]; }, propDecorators: { data: [{
                type: Input
            }], deep: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tbmF2aWdhdGlvbi1pdGVtLXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vY29tcG9uZW50cy9wcml6bS1uYXZpZ2F0aW9uLWl0ZW0tc2ltcGxlL3ByaXptLW5hdmlnYXRpb24taXRlbS1zaW1wbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvcHJpem0tbmF2aWdhdGlvbi1pdGVtLXNpbXBsZS9wcml6bS1uYXZpZ2F0aW9uLWl0ZW0tc2ltcGxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFRckQsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLG1CQUFtQjtJQUN6RSxJQUFvQixJQUFJLENBQUMsSUFBcUI7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQVVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFlBQW1CLGlCQUE4QztRQUMvRCxLQUFLLEVBQUUsQ0FBQztRQURTLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNkI7UUFaL0MsWUFBTyxHQUFHLDRCQUE0QixDQUFDO1FBRWxELFVBQUssR0FBNEMsSUFBSSxlQUFlLENBQXlCLElBQUksQ0FBQyxDQUFDO1FBQ25HLGNBQVMsR0FBd0IsYUFBYSxDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXO1lBQ2xDLElBQUksQ0FBQyxLQUFLO1NBQ1gsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFRMUQsQ0FBQztJQUVNLFFBQVE7UUFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyRSxDQUFDOzsrSEF6QlUsa0NBQWtDO21IQUFsQyxrQ0FBa0MsbUlDYi9DLGlnQkFZQTsyRkRDYSxrQ0FBa0M7a0JBTjlDLFNBQVM7K0JBQ0UsOEJBQThCLG1CQUd2Qix1QkFBdUIsQ0FBQyxNQUFNO2tIQUczQixJQUFJO3NCQUF2QixLQUFLO2dCQUdVLElBQUk7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU5hdmlnYXRpb25UcmVlIH0gZnJvbSAnLi4vLi4vbmF2aWdhdGlvbi5pbnRlcmZhY2VzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aXZlTmF2aWdhdGlvbkl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWN0aXZlLW5hdmlnYXRpb24taXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLW5hdmlnYXRpb24taXRlbS1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJpem0tbmF2aWdhdGlvbi1pdGVtLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ByaXptLW5hdmlnYXRpb24taXRlbS1zaW1wbGUuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptTmF2aWdhdGlvbkl0ZW1TaW1wbGVDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIHtcbiAgQElucHV0KCkgcHVibGljIHNldCBkYXRhKHRyZWU6IElOYXZpZ2F0aW9uVHJlZSkge1xuICAgIHRoaXMuZGF0YSQubmV4dCh0cmVlKTtcbiAgfVxuICBASW5wdXQoKSBwdWJsaWMgZGVlcCE6IG51bWJlcjtcbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9uYXZpZ2F0aW9uLS1pdGVtLXNpbXBsZSc7XG5cbiAgcHVibGljIGRhdGEkOiBCZWhhdmlvclN1YmplY3Q8SU5hdmlnYXRpb25UcmVlIHwgbnVsbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElOYXZpZ2F0aW9uVHJlZSB8IG51bGw+KG51bGwpO1xuICBwdWJsaWMgaXNBY3RpdmUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5hY3RpdmVJdGVtU2VydmljZS5hY3RpdmVJdGVtJCxcbiAgICB0aGlzLmRhdGEkLFxuICBdKS5waXBlKG1hcCgoW2FjdGl2ZUl0ZW0sIGRhdGFdKSA9PiBhY3RpdmVJdGVtID09PSBkYXRhKSk7XG5cbiAgcHVibGljIGdldCBtZW51SXRlbSgpOiBJTmF2aWdhdGlvblRyZWUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhJC5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZUl0ZW1TZXJ2aWNlOiBBY3RpdmVOYXZpZ2F0aW9uSXRlbVNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG5hdkNsaWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEkLmdldFZhbHVlKCk7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuYWN0aXZlSXRlbVNlcnZpY2UuYWN0aXZlSXRlbSQuZ2V0VmFsdWUoKTtcbiAgICB0aGlzLmFjdGl2ZUl0ZW1TZXJ2aWNlLmFjdGl2ZUl0ZW0gPSBjdXJyZW50ID09PSBkYXRhID8gbnVsbCA6IGRhdGE7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJuYXZcIiBbY2xhc3MubmF2X2FjdGl2ZV09XCJpc0FjdGl2ZSQgfCBhc3luY1wiIChjbGljayk9XCJuYXZDbGljaygpXCI+XG4gIDxzcGFuIGNsYXNzPVwibmF2X190aXRsZVwiIFtzdHlsZS5tYXJnaW5MZWZ0LnB4XT1cImRlZXAgPiAwID8gKGRlZXAgLSAxKSAqIDI0IDogMFwiPnt7IG1lbnVJdGVtPy50aXRsZSB9fTwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cIm5hdl9fc3RhdHVzXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJpbmRpY2F0b3IgaW5kaWNhdG9yX3t7IG1lbnVJdGVtPy5pbmRpY2F0b3JTdGF0dXMgfX1cIlxuICAgICAgKm5nSWY9XCJtZW51SXRlbT8uaW5kaWNhdG9yVmFsdWUgJiYgbWVudUl0ZW0/LmluZGljYXRvclN0YXR1c1wiXG4gICAgICBbcHJpem1IaW50XT1cIiRhbnkobWVudUl0ZW0/LmluZGljYXRvclZhbHVlKVwiXG4gICAgPlxuICAgICAge3sgbWVudUl0ZW0/LmluZGljYXRvclZhbHVlIH19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=