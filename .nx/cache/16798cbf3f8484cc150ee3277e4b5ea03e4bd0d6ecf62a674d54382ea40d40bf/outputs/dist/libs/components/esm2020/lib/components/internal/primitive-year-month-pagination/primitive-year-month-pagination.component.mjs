import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';
import { prizmI18nInitWithKey } from '../../../services/i18n.service';
import { PRIZM_MONTHS } from '../../../tokens/i18n';
import { CommonModule } from '@angular/common';
import { PrizmFocusableModule } from '../../../directives';
import { PrizmPrimitiveSpinButtonModule } from '../primitive-spin-button';
import { PrizmLinkComponent } from '../../link';
import { PrizmIconComponent } from '../../icon';
import { PrizmMonthPipeModule } from '../../../pipes';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../directives/focusable/focusable.directive";
import * as i3 from "../primitive-spin-button/primitive-spin-button.component";
import * as i4 from "../../../pipes/month/month.pipe";
export class PrizmPrimitiveYearMonthPaginationComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.value = PrizmMonth.currentLocal();
        this.hideButtons = false;
        this.min = PRIZM_FIRST_DAY;
        this.max = PRIZM_LAST_DAY;
        this.monthActive = false;
        this.yearActive = false;
        this.valueChange = new EventEmitter();
        this.yearClick = new EventEmitter();
        this.monthClick = new EventEmitter();
        this.testId_ = 'ui_primitive_year_month_pagination';
    }
    get prevMonthDisabled() {
        return this.value.monthSameOrBefore?.(this.min);
    }
    get nextMonthDisabled() {
        return this.value.monthSameOrAfter?.(this.max);
    }
    get oneYear() {
        return this.min.year === this.max.year;
    }
    get oneMonth() {
        return this.min.month === this.max.month && this.oneYear;
    }
    onYearClick($event) {
        // TODO delete after update dropdown-host (need activeZone optionan, for dynamic change elements)
        $event.stopImmediatePropagation();
        this.yearClick.next(this.value);
    }
    onMonthClick($event) {
        // TODO delete after update dropdown-host (need activeZone optionan, for dynamic change elements)
        $event.stopImmediatePropagation();
        this.monthClick.next(this.value);
    }
    onPrevMonthClick() {
        this.appendValueWithLimit({ month: -1 });
    }
    onNextMonthClick() {
        this.appendValueWithLimit({ month: 1 });
    }
    appendValueWithLimit(date) {
        const newMonth = this.value.append(date);
        if (this.min.monthSameOrAfter(newMonth)) {
            this.updateValue(this.min);
            return;
        }
        if (this.max.monthSameOrBefore(newMonth)) {
            this.updateValue(this.max);
            return;
        }
        this.updateValue(newMonth);
    }
    updateValue(value) {
        if (this.value.monthSame(value)) {
            return;
        }
        this.value = value;
        this.valueChange.emit(value);
    }
}
PrizmPrimitiveYearMonthPaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveYearMonthPaginationComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PrizmPrimitiveYearMonthPaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmPrimitiveYearMonthPaginationComponent, isStandalone: true, selector: "prizm-primitive-year-month-pagination", inputs: { value: "value", hideButtons: "hideButtons", min: "min", max: "max", monthActive: "monthActive", yearActive: "yearActive" }, outputs: { valueChange: "valueChange", yearClick: "yearClick", monthClick: "monthClick" }, providers: [...prizmI18nInitWithKey(PRIZM_MONTHS, 'months')], usesInheritance: true, ngImport: i0, template: "<div class=\"box\">\n  <div class=\"year-month prizm-font-input-text-14px\">\n    <div *ngIf=\"oneMonth; else buttonMonth\">\n      {{ value | prizmMonth | async }}\n    </div>\n\n    <div *ngIf=\"oneYear; else button\">\n      {{ value.formattedYear }}\n    </div>\n  </div>\n  <div>\n    <prizm-primitive-spin-button\n      [class.hidden]=\"hideButtons\"\n      [focusable]=\"false\"\n      [leftDisabled]=\"prevMonthDisabled\"\n      [rightDisabled]=\"nextMonthDisabled\"\n      (leftClick)=\"onPrevMonthClick()\"\n      (rightClick)=\"onNextMonthClick()\"\n    >\n    </prizm-primitive-spin-button>\n  </div>\n</div>\n\n<ng-template #button>\n  <div class=\"year-box\" (click)=\"onYearClick($event)\">\n    <button\n      class=\"pagination-btn\"\n      [attr.data-testid]=\"'prizm-primitive-year-month-pagination__year-button'\"\n      [prizmFocusable]=\"true\"\n      [class.active]=\"yearActive\"\n      type=\"button\"\n    >\n      {{ value.formattedYear }}\n      <span>\n        <prizm-icon iconClass=\"chevrons-dropdown-small\"></prizm-icon>\n      </span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #buttonMonth>\n  <div class=\"month-box\" (click)=\"onMonthClick($event)\">\n    <button\n      class=\"pagination-btn\"\n      [attr.testId]=\"'prizm-primitive-year-month-pagination__year-button'\"\n      [class.active]=\"monthActive\"\n      [prizmFocusable]=\"true\"\n      type=\"button\"\n    >\n      {{ value | prizmMonth | async }}\n      <span>\n        <prizm-icon iconClass=\"chevrons-dropdown-small\"></prizm-icon>\n      </span>\n    </button>\n  </div>\n</ng-template>\n", styles: [":host{display:block}:host .box{display:flex;align-items:center;justify-content:space-between}:host .year-month{display:flex;align-items:center;color:var(--prizm-v3-text-icon-secondary)}:host .pagination-btn{border:none;background:none;outline:none;display:flex;gap:4px;padding:8px;text-align:left;cursor:pointer;font-family:Inter;font-size:14px;font-weight:400;color:var(--prizm-v3-text-icon-secondary)}:host .pagination-btn:hover:not(.active):not(:active){background-color:var(--prizm-v3-button-ghost-hover);border-radius:2px}:host .pagination-btn:active,:host .pagination-btn.active{color:var(--prizm-v3-button-primary-solid-active)}:host .hidden{visibility:hidden}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmFocusableModule }, { kind: "directive", type: i2.PrizmFocusableDirective, selector: "[prizmFocusable]", inputs: ["prizmFocusable"] }, { kind: "ngmodule", type: PrizmPrimitiveSpinButtonModule }, { kind: "component", type: i3.PrizmPrimitiveSpinButtonComponent, selector: "prizm-primitive-spin-button", inputs: ["disabled", "mode", "leftDisabled", "rightDisabled"], outputs: ["leftClick", "rightClick"] }, { kind: "component", type: PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "ngmodule", type: PrizmMonthPipeModule }, { kind: "pipe", type: i4.PrizmMonthPipe, name: "prizmMonth" }] });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveYearMonthPaginationComponent.prototype, "value", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveYearMonthPaginationComponent.prototype, "hideButtons", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmPrimitiveYearMonthPaginationComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmPrimitiveYearMonthPaginationComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveYearMonthPaginationComponent.prototype, "monthActive", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveYearMonthPaginationComponent.prototype, "yearActive", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveYearMonthPaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-primitive-year-month-pagination`, providers: [...prizmI18nInitWithKey(PRIZM_MONTHS, 'months')], standalone: true, imports: [
                        CommonModule,
                        PrizmFocusableModule,
                        PrizmPrimitiveSpinButtonModule,
                        PrizmLinkComponent,
                        PrizmIconComponent,
                        PrizmMonthPipeModule,
                    ], template: "<div class=\"box\">\n  <div class=\"year-month prizm-font-input-text-14px\">\n    <div *ngIf=\"oneMonth; else buttonMonth\">\n      {{ value | prizmMonth | async }}\n    </div>\n\n    <div *ngIf=\"oneYear; else button\">\n      {{ value.formattedYear }}\n    </div>\n  </div>\n  <div>\n    <prizm-primitive-spin-button\n      [class.hidden]=\"hideButtons\"\n      [focusable]=\"false\"\n      [leftDisabled]=\"prevMonthDisabled\"\n      [rightDisabled]=\"nextMonthDisabled\"\n      (leftClick)=\"onPrevMonthClick()\"\n      (rightClick)=\"onNextMonthClick()\"\n    >\n    </prizm-primitive-spin-button>\n  </div>\n</div>\n\n<ng-template #button>\n  <div class=\"year-box\" (click)=\"onYearClick($event)\">\n    <button\n      class=\"pagination-btn\"\n      [attr.data-testid]=\"'prizm-primitive-year-month-pagination__year-button'\"\n      [prizmFocusable]=\"true\"\n      [class.active]=\"yearActive\"\n      type=\"button\"\n    >\n      {{ value.formattedYear }}\n      <span>\n        <prizm-icon iconClass=\"chevrons-dropdown-small\"></prizm-icon>\n      </span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #buttonMonth>\n  <div class=\"month-box\" (click)=\"onMonthClick($event)\">\n    <button\n      class=\"pagination-btn\"\n      [attr.testId]=\"'prizm-primitive-year-month-pagination__year-button'\"\n      [class.active]=\"monthActive\"\n      [prizmFocusable]=\"true\"\n      type=\"button\"\n    >\n      {{ value | prizmMonth | async }}\n      <span>\n        <prizm-icon iconClass=\"chevrons-dropdown-small\"></prizm-icon>\n      </span>\n    </button>\n  </div>\n</ng-template>\n", styles: [":host{display:block}:host .box{display:flex;align-items:center;justify-content:space-between}:host .year-month{display:flex;align-items:center;color:var(--prizm-v3-text-icon-secondary)}:host .pagination-btn{border:none;background:none;outline:none;display:flex;gap:4px;padding:8px;text-align:left;cursor:pointer;font-family:Inter;font-size:14px;font-weight:400;color:var(--prizm-v3-text-icon-secondary)}:host .pagination-btn:hover:not(.active):not(:active){background-color:var(--prizm-v3-button-ghost-hover);border-radius:2px}:host .pagination-btn:active,:host .pagination-btn.active{color:var(--prizm-v3-button-primary-solid-active)}:host .hidden{visibility:hidden}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], hideButtons: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], monthActive: [{
                type: Input
            }], yearActive: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], yearClick: [{
                type: Output
            }], monthClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLXllYXItbW9udGgtcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2ludGVybmFsL3ByaW1pdGl2ZS15ZWFyLW1vbnRoLXBhZ2luYXRpb24vcHJpbWl0aXZlLXllYXItbW9udGgtcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2ludGVybmFsL3ByaW1pdGl2ZS15ZWFyLW1vbnRoLXBhZ2luYXRpb24vcHJpbWl0aXZlLXllYXItbW9udGgtcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzNELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFlBQVksQ0FB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b21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUFJJWk1fRklSU1RfREFZLCBQUklaTV9MQVNUX0RBWSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXlzLmNvbnN0JztcbmltcG9ydCB7IFByaXptTW9udGggfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvbW9udGgnO1xuaW1wb3J0IHsgUHJpem1ZZWFyIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL3llYXInO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCwgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFByaXptTW9udGhMaWtlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvbW9udGgtbGlrZSc7XG5pbXBvcnQgeyBQcml6bVdpdGhPcHRpb25hbE1pbk1heCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3dpdGgtb3B0aW9uYWwtbWluLW1heCc7XG5pbXBvcnQgeyBwcml6bUkxOG5Jbml0V2l0aEtleSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2kxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBQUklaTV9NT05USFMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvaTE4bic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1Gb2N1c2FibGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFByaXptUHJpbWl0aXZlU3BpbkJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL3ByaW1pdGl2ZS1zcGluLWJ1dHRvbic7XG5pbXBvcnQgeyBQcml6bUxpbmtDb21wb25lbnQgfSBmcm9tICcuLi8uLi9saW5rJztcbmltcG9ydCB7IFByaXptSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ljb24nO1xuaW1wb3J0IHsgUHJpem1Nb250aFBpcGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLXByaW1pdGl2ZS15ZWFyLW1vbnRoLXBhZ2luYXRpb25gLFxuICB0ZW1wbGF0ZVVybDogYC4vcHJpbWl0aXZlLXllYXItbW9udGgtcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlVXJsczogW2AuL3ByaW1pdGl2ZS15ZWFyLW1vbnRoLXBhZ2luYXRpb24uY29tcG9uZW50Lmxlc3NgXSxcbiAgcHJvdmlkZXJzOiBbLi4ucHJpem1JMThuSW5pdFdpdGhLZXkoUFJJWk1fTU9OVEhTLCAnbW9udGhzJyldLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFByaXptRm9jdXNhYmxlTW9kdWxlLFxuICAgIFByaXptUHJpbWl0aXZlU3BpbkJ1dHRvbk1vZHVsZSxcbiAgICBQcml6bUxpbmtDb21wb25lbnQsXG4gICAgUHJpem1JY29uQ29tcG9uZW50LFxuICAgIFByaXptTW9udGhQaXBlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVByaW1pdGl2ZVllYXJNb250aFBhZ2luYXRpb25Db21wb25lbnRcbiAgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkXG4gIGltcGxlbWVudHMgUHJpem1XaXRoT3B0aW9uYWxNaW5NYXg8UHJpem1Nb250aD5cbntcbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICB2YWx1ZSA9IFByaXptTW9udGguY3VycmVudExvY2FsKCk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBoaWRlQnV0dG9ucyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluOiBQcml6bU1vbnRoID0gUFJJWk1fRklSU1RfREFZO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4OiBQcml6bU1vbnRoID0gUFJJWk1fTEFTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtb250aEFjdGl2ZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgeWVhckFjdGl2ZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UHJpem1Nb250aD4oKTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgeWVhckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxQcml6bVllYXI+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG1vbnRoQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFByaXptTW9udGg+KCk7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9wcmltaXRpdmVfeWVhcl9tb250aF9wYWdpbmF0aW9uJztcblxuICBwdWJsaWMgZ2V0IHByZXZNb250aERpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLm1vbnRoU2FtZU9yQmVmb3JlPy4odGhpcy5taW4pO1xuICB9XG5cbiAgcHVibGljIGdldCBuZXh0TW9udGhEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5tb250aFNhbWVPckFmdGVyPy4odGhpcy5tYXgpO1xuICB9XG5cbiAgcHVibGljIGdldCBvbmVZZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1pbi55ZWFyID09PSB0aGlzLm1heC55ZWFyO1xuICB9XG5cbiAgcHVibGljIGdldCBvbmVNb250aCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5taW4ubW9udGggPT09IHRoaXMubWF4Lm1vbnRoICYmIHRoaXMub25lWWVhcjtcbiAgfVxuXG4gIHB1YmxpYyBvblllYXJDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBUT0RPIGRlbGV0ZSBhZnRlciB1cGRhdGUgZHJvcGRvd24taG9zdCAobmVlZCBhY3RpdmVab25lIG9wdGlvbmFuLCBmb3IgZHluYW1pYyBjaGFuZ2UgZWxlbWVudHMpXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy55ZWFyQ2xpY2submV4dCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vbnRoQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gVE9ETyBkZWxldGUgYWZ0ZXIgdXBkYXRlIGRyb3Bkb3duLWhvc3QgKG5lZWQgYWN0aXZlWm9uZSBvcHRpb25hbiwgZm9yIGR5bmFtaWMgY2hhbmdlIGVsZW1lbnRzKVxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMubW9udGhDbGljay5uZXh0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9uUHJldk1vbnRoQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5hcHBlbmRWYWx1ZVdpdGhMaW1pdCh7IG1vbnRoOiAtMSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbk5leHRNb250aENsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuYXBwZW5kVmFsdWVXaXRoTGltaXQoeyBtb250aDogMSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kVmFsdWVXaXRoTGltaXQoZGF0ZTogUHJpem1Nb250aExpa2UpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdNb250aDogUHJpem1Nb250aCA9IHRoaXMudmFsdWUuYXBwZW5kKGRhdGUpO1xuXG4gICAgaWYgKHRoaXMubWluLm1vbnRoU2FtZU9yQWZ0ZXIobmV3TW9udGgpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMubWluKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heC5tb250aFNhbWVPckJlZm9yZShuZXdNb250aCkpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5tYXgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZShuZXdNb250aCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKHZhbHVlOiBQcml6bU1vbnRoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUubW9udGhTYW1lKHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYm94XCI+XG4gIDxkaXYgY2xhc3M9XCJ5ZWFyLW1vbnRoIHByaXptLWZvbnQtaW5wdXQtdGV4dC0xNHB4XCI+XG4gICAgPGRpdiAqbmdJZj1cIm9uZU1vbnRoOyBlbHNlIGJ1dHRvbk1vbnRoXCI+XG4gICAgICB7eyB2YWx1ZSB8IHByaXptTW9udGggfCBhc3luYyB9fVxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cIm9uZVllYXI7IGVsc2UgYnV0dG9uXCI+XG4gICAgICB7eyB2YWx1ZS5mb3JtYXR0ZWRZZWFyIH19XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxwcml6bS1wcmltaXRpdmUtc3Bpbi1idXR0b25cbiAgICAgIFtjbGFzcy5oaWRkZW5dPVwiaGlkZUJ1dHRvbnNcIlxuICAgICAgW2ZvY3VzYWJsZV09XCJmYWxzZVwiXG4gICAgICBbbGVmdERpc2FibGVkXT1cInByZXZNb250aERpc2FibGVkXCJcbiAgICAgIFtyaWdodERpc2FibGVkXT1cIm5leHRNb250aERpc2FibGVkXCJcbiAgICAgIChsZWZ0Q2xpY2spPVwib25QcmV2TW9udGhDbGljaygpXCJcbiAgICAgIChyaWdodENsaWNrKT1cIm9uTmV4dE1vbnRoQ2xpY2soKVwiXG4gICAgPlxuICAgIDwvcHJpem0tcHJpbWl0aXZlLXNwaW4tYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2J1dHRvbj5cbiAgPGRpdiBjbGFzcz1cInllYXItYm94XCIgKGNsaWNrKT1cIm9uWWVhckNsaWNrKCRldmVudClcIj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cInBhZ2luYXRpb24tYnRuXCJcbiAgICAgIFthdHRyLmRhdGEtdGVzdGlkXT1cIidwcml6bS1wcmltaXRpdmUteWVhci1tb250aC1wYWdpbmF0aW9uX195ZWFyLWJ1dHRvbidcIlxuICAgICAgW3ByaXptRm9jdXNhYmxlXT1cInRydWVcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ5ZWFyQWN0aXZlXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIHt7IHZhbHVlLmZvcm1hdHRlZFllYXIgfX1cbiAgICAgIDxzcGFuPlxuICAgICAgICA8cHJpem0taWNvbiBpY29uQ2xhc3M9XCJjaGV2cm9ucy1kcm9wZG93bi1zbWFsbFwiPjwvcHJpem0taWNvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2J1dHRvbk1vbnRoPlxuICA8ZGl2IGNsYXNzPVwibW9udGgtYm94XCIgKGNsaWNrKT1cIm9uTW9udGhDbGljaygkZXZlbnQpXCI+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJwYWdpbmF0aW9uLWJ0blwiXG4gICAgICBbYXR0ci50ZXN0SWRdPVwiJ3ByaXptLXByaW1pdGl2ZS15ZWFyLW1vbnRoLXBhZ2luYXRpb25fX3llYXItYnV0dG9uJ1wiXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cIm1vbnRoQWN0aXZlXCJcbiAgICAgIFtwcml6bUZvY3VzYWJsZV09XCJ0cnVlXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIHt7IHZhbHVlIHwgcHJpem1Nb250aCB8IGFzeW5jIH19XG4gICAgICA8c3Bhbj5cbiAgICAgICAgPHByaXptLWljb24gaWNvbkNsYXNzPVwiY2hldnJvbnMtZHJvcGRvd24tc21hbGxcIj48L3ByaXptLWljb24+XG4gICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==