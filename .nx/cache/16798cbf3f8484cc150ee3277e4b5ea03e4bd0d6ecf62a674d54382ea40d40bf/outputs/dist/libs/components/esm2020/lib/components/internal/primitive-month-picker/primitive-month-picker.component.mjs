import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY, PrizmDayRange, PrizmMonth } from '../../../@core/date-time';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmInRange } from '../../../util/math/in-range';
import { PrizmHoveredDirective, PrizmInteractiveState, PrizmPressedDirective, PrizmRepeatTimesDirective, PrizmScrollIntoViewDirective, } from '../../../directives';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { prizmI18nInitWithKey } from '../../../services/i18n.service';
import { PRIZM_MONTHS } from '../../../tokens/i18n';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { PrizmLetDirective } from '@prizm-ui/helpers';
import { CommonModule } from '@angular/common';
import { PrizmMonthPipeModule } from '../../../pipes';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../pipes/month/month.pipe";
const ITEMS_IN_ROW = 3;
const ROWS = 4;
export class PrizmPrimitiveMonthPickerComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.hoveredItem = null;
        this.pressedItem = null;
        this.currentMonth = PrizmMonth.currentLocal().month;
        this.ITEMS_IN_ROW = ITEMS_IN_ROW;
        this.value = null;
        this.currentYear = PrizmMonth.currentLocal().year;
        this.initialItem = PrizmMonth.currentLocal();
        this.min = PRIZM_FIRST_DAY;
        this.max = PRIZM_LAST_DAY;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.monthClick = new EventEmitter();
        this.testId_ = 'ui_primitive_month_picker';
    }
    get isSingle() {
        const { value } = this;
        return !!value && this.isRange(value) && value.from.monthSame(value.to);
    }
    get rows() {
        return ROWS;
    }
    isRange(item) {
        return item instanceof PrizmMonthRange;
    }
    scrollItemIntoView(item) {
        return this.initialItem.month === item;
    }
    getItem(rowIndex, colIndex) {
        const month = colIndex + rowIndex * ITEMS_IN_ROW;
        return new PrizmMonth(this.currentYear, month);
    }
    getItemState(item) {
        const { disabledItemHandler, max, pressedItem, hoveredItem } = this;
        if ((max.month < item && max.year <= this.currentYear) ||
            (disabledItemHandler !== PRIZM_ALWAYS_FALSE_HANDLER && disabledItemHandler(item))) {
            return PrizmInteractiveState.Disabled;
        }
        if (pressedItem === item) {
            return PrizmInteractiveState.Pressed;
        }
        if (hoveredItem === item) {
            return PrizmInteractiveState.Hovered;
        }
        return null;
    }
    getItemRange(item) {
        const { value, hoveredItem } = this;
        if (value === null) {
            return null;
        }
        if (value instanceof PrizmMonth) {
            return value.month === item && value.year === this.currentYear ? "single" /* PrizmRangeState.Single */ : null;
        }
        if (this.value instanceof PrizmDayRange &&
            this.value.isMonthInRange(new PrizmMonth(this.currentYear, item))) {
            return "single" /* PrizmRangeState.Single */;
        }
        if ((value.from.month === item && !value.from.monthSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem > value.from.month &&
                value.from.month === item &&
                value.from.monthSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem === item &&
                hoveredItem === value.from.month &&
                value.from.monthSame(value.to))) {
            return "single" /* PrizmRangeState.Single */;
            // TODO finish it after add support intervals
            // return PrizmRangeState.Start;
        }
        // TODO finish it after add support intervals
        // if (
        //     (value.to.month === item && !value.from.monthSame(value.to)) ||
        //     (hoveredItem !== null &&
        //         hoveredItem < value.from.month &&
        //         value.from.month === item &&
        //         value.from.monthSame(value.to)) ||
        //     (hoveredItem !== null &&
        //         hoveredItem === item &&
        //         hoveredItem > value.from.month &&
        //         value.from.monthSame(value.to))
        // ) {
        //   return PrizmRangeState.Single;
        //
        //
        //   // return PrizmRangeState.End;
        // }
        return value.from.monthSame(value.to) && value.from.month === item && value.from.year === this.currentYear
            ? "single" /* PrizmRangeState.Single */
            : null;
    }
    itemIsToday(item) {
        return this.currentMonth === item;
    }
    /**
     * not support interval
     * */
    itemIsInterval(item) {
        return false;
    }
    /**
     * TODO add after decided, with support intervals
     * Example
     * */
    itemIsIntervalNew(item) {
        const { value, hoveredItem } = this;
        if (value === null || !this.isRange(value)) {
            return false;
        }
        if (!value.from.monthSame(value.to)) {
            return value.from.month <= item && value.to.month > item;
        }
        if (hoveredItem === null || value.from.month === hoveredItem) {
            return false;
        }
        return prizmInRange(item, Math.min(value.from.month, hoveredItem), Math.max(value.from.month, hoveredItem));
    }
    onItemHovered(hovered, item) {
        this.updateHoveredItem(hovered, item);
    }
    onItemPressed(pressed, item) {
        this.updatePressedItem(pressed, item);
    }
    onItemClick($event, item) {
        // TODO delete after update dropdown-host (need activeZone optionan, for dynamic change elements)
        $event.stopImmediatePropagation();
        this.monthClick.emit(new PrizmMonth(this.currentYear, item));
    }
    updateHoveredItem(hovered, item) {
        this.hoveredItem = hovered ? item : null;
    }
    updatePressedItem(pressed, item) {
        this.pressedItem = pressed ? item : null;
    }
}
PrizmPrimitiveMonthPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveMonthPickerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PrizmPrimitiveMonthPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmPrimitiveMonthPickerComponent, isStandalone: true, selector: "prizm-primitive-month-picker", inputs: { value: "value", currentYear: "currentYear", initialItem: "initialItem", min: "min", max: "max", disabledItemHandler: "disabledItemHandler" }, outputs: { monthClick: "monthClick" }, host: { properties: { "class._single": "this.isSingle" } }, providers: [prizmI18nInitWithKey(PRIZM_MONTHS, 'months')], usesInheritance: true, ngImport: i0, template: "<div class=\"z-row\" *prizmRepeatTimes=\"let rowIndex of rows\" automation-id=\"prizm-primitive-year-picker__row\">\n  <ng-container *prizmRepeatTimes=\"let colIndex of ITEMS_IN_ROW\">\n    <div\n      class=\"z-cell\"\n      *prizmLet=\"getItem(rowIndex, colIndex) as item\"\n      [class.z-cell_today]=\"itemIsToday(item.month)\"\n      [class.z-cell_interval]=\"itemIsInterval(item.month)\"\n      [attr.data-range]=\"getItemRange(item.month)\"\n      [attr.data-state]=\"getItemState(item.month)\"\n      [prizmScrollIntoView]=\"scrollItemIntoView(item.month)\"\n      (prizmHoveredChange)=\"onItemHovered($event, item.month)\"\n      (prizmPressedChange)=\"onItemPressed($event, item.month)\"\n      (click)=\"onItemClick($event, item.month)\"\n      automation-id=\"prizm-primitive-year-picker__cell\"\n    >\n      <div class=\"z-item\">{{ item | prizmMonth | async }}</div>\n    </div>\n  </ng-container>\n</div>\n", styles: [":host{display:block;font:var(--prizm-font-text-m)}.z-row{position:relative;z-index:0;display:flex;justify-content:space-between;height:2.25rem}.z-item{position:relative;flex:1;line-height:2rem;border-radius:2px;color:var(--prizm-v3-text-icon-secondary);font-weight:600}.z-item:before,.z-item:after{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:2px}.z-cell{position:relative;display:flex;align-items:center;justify-content:center;width:3.9375rem;text-align:center;outline:none;cursor:pointer;background-clip:content-box;box-sizing:border-box;border:2px solid transparent}.z-cell_today{border-radius:2px}.z-cell_today[data-state=hovered]>.z-item{border-color:var(--prizm-v3-button-primary-solid-hover);color:var(--prizm-v3-button-primary-solid-hover);background-color:var(--prizm-v3-button-ghost-hover)}.z-cell_today .z-item{border:1px solid var(--prizm-v3-button-primary-solid-default);color:var(--prizm-v3-button-primary-solid-default)}.z-cell_today .z-item_unavailable{color:var(--prizm-v3-text-icon-disable)}.z-cell:before{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:2px}.z-cell_interval:before{background:var(--prizm-v3-button-primary-ghost-active)}:host._single .z-cell_interval:before{background-color:var(--prizm-v3-button-primary-ghost-active)}.z-cell_interval:not(:last-child):before{right:-3.9375rem}.z-cell_interval:last-child:first-child:before{right:0}.z-cell_interval:first-child>.z-item{border-top-left-radius:2px;border-bottom-left-radius:2px}.z-cell_interval:last-child>.z-item{border-top-right-radius:2px;border-bottom-right-radius:2px}.z-cell_interval>.z-item{border-radius:0;color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item{color:var(--prizm-v3-text-icon-exception)}.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item:before,.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item:after{background-color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-range][data-state=hovered]>.z-item{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-range][data-state=hovered]>.z-item:before,.z-cell[data-range][data-state=hovered]>.z-item:after{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-range][data-state=pressed]>.z-item:before,.z-cell[data-range][data-state=pressed]>.z-item:after{background-color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-state=disabled]{pointer-events:none;cursor:not-allowed}.z-cell[data-state=disabled]>.z-item{text-decoration:line-through;opacity:.3}.z-cell[data-state=hovered]:not([data-range]):not(.z-cell_today)>.z-item{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-state=pressed]:hover:not([data-range])>.z-item{background-color:var(--prizm-v3-button-primary-solid-default);border-radius:2px;color:var(--prizm-v3-text-icon-exception)}:host{width:15.75rem}.z-row{margin:16px 0;gap:4px}.z-row:first-child{margin-top:0}.z-row:last-child{margin-bottom:0}.z-cell{flex-grow:1;width:100%}\n"], dependencies: [{ kind: "directive", type: PrizmHoveredDirective, selector: "[prizmHoveredChange]", outputs: ["prizmHoveredChange"] }, { kind: "directive", type: PrizmPressedDirective, selector: "[prizmPressedChange]", outputs: ["prizmPressedChange"] }, { kind: "directive", type: PrizmRepeatTimesDirective, selector: "[prizmRepeatTimes][prizmRepeatTimesOf]", inputs: ["prizmRepeatTimesOf"] }, { kind: "directive", type: PrizmLetDirective, selector: "[prizmLet]", inputs: ["prizmLet"], exportAs: ["prizmLet"] }, { kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "directive", type: PrizmScrollIntoViewDirective, selector: "[prizmScrollIntoView]", inputs: ["prizmScrollIntoView"] }, { kind: "ngmodule", type: PrizmMonthPipeModule }, { kind: "pipe", type: i2.PrizmMonthPipe, name: "prizmMonth" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveMonthPickerComponent.prototype, "value", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Number)
], PrizmPrimitiveMonthPickerComponent.prototype, "currentYear", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmPrimitiveMonthPickerComponent.prototype, "initialItem", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmPrimitiveMonthPickerComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmPrimitiveMonthPickerComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmPrimitiveMonthPickerComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", PrizmMonth)
], PrizmPrimitiveMonthPickerComponent.prototype, "getItem", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveMonthPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-primitive-month-picker`, standalone: true, imports: [
                        PrizmHoveredDirective,
                        PrizmPressedDirective,
                        PrizmRepeatTimesDirective,
                        PrizmLetDirective,
                        CommonModule,
                        PrizmScrollIntoViewDirective,
                        PrizmMonthPipeModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, providers: [prizmI18nInitWithKey(PRIZM_MONTHS, 'months')], template: "<div class=\"z-row\" *prizmRepeatTimes=\"let rowIndex of rows\" automation-id=\"prizm-primitive-year-picker__row\">\n  <ng-container *prizmRepeatTimes=\"let colIndex of ITEMS_IN_ROW\">\n    <div\n      class=\"z-cell\"\n      *prizmLet=\"getItem(rowIndex, colIndex) as item\"\n      [class.z-cell_today]=\"itemIsToday(item.month)\"\n      [class.z-cell_interval]=\"itemIsInterval(item.month)\"\n      [attr.data-range]=\"getItemRange(item.month)\"\n      [attr.data-state]=\"getItemState(item.month)\"\n      [prizmScrollIntoView]=\"scrollItemIntoView(item.month)\"\n      (prizmHoveredChange)=\"onItemHovered($event, item.month)\"\n      (prizmPressedChange)=\"onItemPressed($event, item.month)\"\n      (click)=\"onItemClick($event, item.month)\"\n      automation-id=\"prizm-primitive-year-picker__cell\"\n    >\n      <div class=\"z-item\">{{ item | prizmMonth | async }}</div>\n    </div>\n  </ng-container>\n</div>\n", styles: [":host{display:block;font:var(--prizm-font-text-m)}.z-row{position:relative;z-index:0;display:flex;justify-content:space-between;height:2.25rem}.z-item{position:relative;flex:1;line-height:2rem;border-radius:2px;color:var(--prizm-v3-text-icon-secondary);font-weight:600}.z-item:before,.z-item:after{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:2px}.z-cell{position:relative;display:flex;align-items:center;justify-content:center;width:3.9375rem;text-align:center;outline:none;cursor:pointer;background-clip:content-box;box-sizing:border-box;border:2px solid transparent}.z-cell_today{border-radius:2px}.z-cell_today[data-state=hovered]>.z-item{border-color:var(--prizm-v3-button-primary-solid-hover);color:var(--prizm-v3-button-primary-solid-hover);background-color:var(--prizm-v3-button-ghost-hover)}.z-cell_today .z-item{border:1px solid var(--prizm-v3-button-primary-solid-default);color:var(--prizm-v3-button-primary-solid-default)}.z-cell_today .z-item_unavailable{color:var(--prizm-v3-text-icon-disable)}.z-cell:before{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:2px}.z-cell_interval:before{background:var(--prizm-v3-button-primary-ghost-active)}:host._single .z-cell_interval:before{background-color:var(--prizm-v3-button-primary-ghost-active)}.z-cell_interval:not(:last-child):before{right:-3.9375rem}.z-cell_interval:last-child:first-child:before{right:0}.z-cell_interval:first-child>.z-item{border-top-left-radius:2px;border-bottom-left-radius:2px}.z-cell_interval:last-child>.z-item{border-top-right-radius:2px;border-bottom-right-radius:2px}.z-cell_interval>.z-item{border-radius:0;color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item{color:var(--prizm-v3-text-icon-exception)}.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item:before,.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item:after{background-color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-range][data-state=hovered]>.z-item{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-range][data-state=hovered]>.z-item:before,.z-cell[data-range][data-state=hovered]>.z-item:after{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-range][data-state=pressed]>.z-item:before,.z-cell[data-range][data-state=pressed]>.z-item:after{background-color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-state=disabled]{pointer-events:none;cursor:not-allowed}.z-cell[data-state=disabled]>.z-item{text-decoration:line-through;opacity:.3}.z-cell[data-state=hovered]:not([data-range]):not(.z-cell_today)>.z-item{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-state=pressed]:hover:not([data-range])>.z-item{background-color:var(--prizm-v3-button-primary-solid-default);border-radius:2px;color:var(--prizm-v3-text-icon-exception)}:host{width:15.75rem}.z-row{margin:16px 0;gap:4px}.z-row:first-child{margin-top:0}.z-row:last-child{margin-bottom:0}.z-cell{flex-grow:1;width:100%}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], currentYear: [{
                type: Input
            }], initialItem: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], monthClick: [{
                type: Output
            }], isSingle: [{
                type: HostBinding,
                args: [`class._single`]
            }], getItem: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLW1vbnRoLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2ludGVybmFsL3ByaW1pdGl2ZS1tb250aC1waWNrZXIvcHJpbWl0aXZlLW1vbnRoLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2ludGVybmFsL3ByaW1pdGl2ZS1tb250aC1waWNrZXIvcHJpbWl0aXZlLW1vbnRoLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV0RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHlCQUF5QixFQUN6Qiw0QkFBNEIsR0FDN0IsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFz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QkFBeUIsbUhBQ3pCLGlCQUFpQixvR0FDakIsWUFBWSxvRkFDWiw0QkFBNEIsa0dBQzVCLG9CQUFvQjtBQVd0QjtJQUNDLGdCQUFnQixFQUFFOztpRUFDK0M7QUFFbEU7SUFDQyxnQkFBZ0IsRUFBRTs7dUVBQ2tDO0FBRXJEO0lBQ0MsZ0JBQWdCLEVBQUU7OEJBQ04sVUFBVTt1RUFBNkI7QUFFcEQ7SUFDQyxnQkFBZ0IsRUFBRTs4QkFDZCxVQUFVOytEQUFtQjtBQUVsQztJQUNDLGdCQUFnQixFQUFFOzhCQUNkLFVBQVU7K0RBQWtCO0FBRWpDO0lBQ0MsZ0JBQWdCLEVBQUU7OytFQUMyRDtBQTBCOUU7SUFBQyxTQUFTOzs7b0NBQzBDLFVBQVU7aUVBSTdEOzJGQTNEVSxrQ0FBa0M7a0JBakI5QyxTQUFTOytCQUNFLDhCQUE4QixjQUc1QixJQUFJLFdBQ1A7d0JBQ1AscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsaUJBQWlCO3dCQUNqQixZQUFZO3dCQUNaLDRCQUE0Qjt3QkFDNUIsb0JBQW9CO3FCQUNyQixtQkFDZ0IsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQzs4QkFVekQsS0FBSztzQkFGSixLQUFLO2dCQU1OLFdBQVc7c0JBRlYsS0FBSztnQkFNTixXQUFXO3NCQUZWLEtBQUs7Z0JBTU4sR0FBRztzQkFGRixLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFNTixtQkFBbUI7c0JBRmxCLEtBQUs7Z0JBS0csVUFBVTtzQkFEbEIsTUFBTTtnQkFJSCxRQUFRO3NCQURYLFdBQVc7dUJBQUMsZUFBZTtnQkFzQnJCLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bU1vbnRoUmFuZ2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvbW9udGgtcmFuZ2UnO1xuaW1wb3J0IHsgUFJJWk1fRklSU1RfREFZLCBQUklaTV9MQVNUX0RBWSwgUHJpem1EYXlSYW5nZSwgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZSc7XG5pbXBvcnQgeyBQcml6bUJvb2xlYW5IYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBwcml6bUluUmFuZ2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL21hdGgvaW4tcmFuZ2UnO1xuaW1wb3J0IHtcbiAgUHJpem1Ib3ZlcmVkRGlyZWN0aXZlLFxuICBQcml6bUludGVyYWN0aXZlU3RhdGUsXG4gIFByaXptUHJlc3NlZERpcmVjdGl2ZSxcbiAgUHJpem1SZXBlYXRUaW1lc0RpcmVjdGl2ZSxcbiAgUHJpem1TY3JvbGxJbnRvVmlld0RpcmVjdGl2ZSxcbn0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBQcml6bVJhbmdlU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9lbnVtcy9yYW5nZS1zdGF0ZSc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wLCBwcml6bVB1cmUgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBwcml6bUkxOG5Jbml0V2l0aEtleSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2kxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBQUklaTV9NT05USFMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvaTE4bic7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1MZXREaXJlY3RpdmUgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1Nb250aFBpcGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcyc7XG5cbmNvbnN0IElURU1TX0lOX1JPVyA9IDM7XG5jb25zdCBST1dTID0gNDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBgcHJpem0tcHJpbWl0aXZlLW1vbnRoLXBpY2tlcmAsXG4gIHRlbXBsYXRlVXJsOiBgLi9wcmltaXRpdmUtbW9udGgtcGlja2VyLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vcHJpbWl0aXZlLW1vbnRoLXBpY2tlci5jb21wb25lbnQubGVzc2BdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgUHJpem1Ib3ZlcmVkRGlyZWN0aXZlLFxuICAgIFByaXptUHJlc3NlZERpcmVjdGl2ZSxcbiAgICBQcml6bVJlcGVhdFRpbWVzRGlyZWN0aXZlLFxuICAgIFByaXptTGV0RGlyZWN0aXZlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQcml6bVNjcm9sbEludG9WaWV3RGlyZWN0aXZlLFxuICAgIFByaXptTW9udGhQaXBlTW9kdWxlLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbcHJpem1JMThuSW5pdFdpdGhLZXkoUFJJWk1fTU9OVEhTLCAnbW9udGhzJyldLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVByaW1pdGl2ZU1vbnRoUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIHByaXZhdGUgaG92ZXJlZEl0ZW06IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHByZXNzZWRJdGVtOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50TW9udGggPSBQcml6bU1vbnRoLmN1cnJlbnRMb2NhbCgpLm1vbnRoO1xuXG4gIHB1YmxpYyByZWFkb25seSBJVEVNU19JTl9ST1cgPSBJVEVNU19JTl9ST1c7XG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgdmFsdWU6IFByaXptTW9udGhSYW5nZSB8IFByaXptTW9udGggfCBQcml6bURheVJhbmdlIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBjdXJyZW50WWVhcjogbnVtYmVyID0gUHJpem1Nb250aC5jdXJyZW50TG9jYWwoKS55ZWFyO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaW5pdGlhbEl0ZW06IFByaXptTW9udGggPSBQcml6bU1vbnRoLmN1cnJlbnRMb2NhbCgpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluOiBQcml6bU1vbnRoID0gUFJJWk1fRklSU1RfREFZO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4OiBQcml6bU1vbnRoID0gUFJJWk1fTEFTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBQcml6bUJvb2xlYW5IYW5kbGVyPG51bWJlcj4gPSBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUjtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbW9udGhDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8UHJpem1Nb250aD4oKTtcblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLl9zaW5nbGVgKVxuICBnZXQgaXNTaW5nbGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcblxuICAgIHJldHVybiAhIXZhbHVlICYmIHRoaXMuaXNSYW5nZSh2YWx1ZSkgJiYgdmFsdWUuZnJvbS5tb250aFNhbWUodmFsdWUudG8pO1xuICB9XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9wcmltaXRpdmVfbW9udGhfcGlja2VyJztcblxuICBnZXQgcm93cygpOiBudW1iZXIge1xuICAgIHJldHVybiBST1dTO1xuICB9XG5cbiAgcHVibGljIGlzUmFuZ2UoaXRlbTogUHJpem1Nb250aFJhbmdlIHwgUHJpem1Nb250aCk6IGl0ZW0gaXMgUHJpem1Nb250aFJhbmdlIHtcbiAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIFByaXptTW9udGhSYW5nZTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxJdGVtSW50b1ZpZXcoaXRlbTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbEl0ZW0ubW9udGggPT09IGl0ZW07XG4gIH1cblxuICBAcHJpem1QdXJlXG4gIHB1YmxpYyBnZXRJdGVtKHJvd0luZGV4OiBudW1iZXIsIGNvbEluZGV4OiBudW1iZXIpOiBQcml6bU1vbnRoIHtcbiAgICBjb25zdCBtb250aCA9IGNvbEluZGV4ICsgcm93SW5kZXggKiBJVEVNU19JTl9ST1c7XG5cbiAgICByZXR1cm4gbmV3IFByaXptTW9udGgodGhpcy5jdXJyZW50WWVhciwgbW9udGgpO1xuICB9XG5cbiAgcHVibGljIGdldEl0ZW1TdGF0ZShpdGVtOiBudW1iZXIpOiBQcml6bUludGVyYWN0aXZlU3RhdGUgfCBudWxsIHtcbiAgICBjb25zdCB7IGRpc2FibGVkSXRlbUhhbmRsZXIsIG1heCwgcHJlc3NlZEl0ZW0sIGhvdmVyZWRJdGVtIH0gPSB0aGlzO1xuXG4gICAgaWYgKFxuICAgICAgKG1heC5tb250aCA8IGl0ZW0gJiYgbWF4LnllYXIgPD0gdGhpcy5jdXJyZW50WWVhcikgfHxcbiAgICAgIChkaXNhYmxlZEl0ZW1IYW5kbGVyICE9PSBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiAmJiBkaXNhYmxlZEl0ZW1IYW5kbGVyKGl0ZW0pKVxuICAgICkge1xuICAgICAgcmV0dXJuIFByaXptSW50ZXJhY3RpdmVTdGF0ZS5EaXNhYmxlZDtcbiAgICB9XG5cbiAgICBpZiAocHJlc3NlZEl0ZW0gPT09IGl0ZW0pIHtcbiAgICAgIHJldHVybiBQcml6bUludGVyYWN0aXZlU3RhdGUuUHJlc3NlZDtcbiAgICB9XG5cbiAgICBpZiAoaG92ZXJlZEl0ZW0gPT09IGl0ZW0pIHtcbiAgICAgIHJldHVybiBQcml6bUludGVyYWN0aXZlU3RhdGUuSG92ZXJlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJdGVtUmFuZ2UoaXRlbTogbnVtYmVyKTogUHJpem1SYW5nZVN0YXRlIHwgbnVsbCB7XG4gICAgY29uc3QgeyB2YWx1ZSwgaG92ZXJlZEl0ZW0gfSA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByaXptTW9udGgpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5tb250aCA9PT0gaXRlbSAmJiB2YWx1ZS55ZWFyID09PSB0aGlzLmN1cnJlbnRZZWFyID8gUHJpem1SYW5nZVN0YXRlLlNpbmdsZSA6IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy52YWx1ZSBpbnN0YW5jZW9mIFByaXptRGF5UmFuZ2UgJiZcbiAgICAgIHRoaXMudmFsdWUuaXNNb250aEluUmFuZ2UobmV3IFByaXptTW9udGgodGhpcy5jdXJyZW50WWVhciwgaXRlbSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJpem1SYW5nZVN0YXRlLlNpbmdsZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAodmFsdWUuZnJvbS5tb250aCA9PT0gaXRlbSAmJiAhdmFsdWUuZnJvbS5tb250aFNhbWUodmFsdWUudG8pKSB8fFxuICAgICAgKGhvdmVyZWRJdGVtICE9PSBudWxsICYmXG4gICAgICAgIGhvdmVyZWRJdGVtID4gdmFsdWUuZnJvbS5tb250aCAmJlxuICAgICAgICB2YWx1ZS5mcm9tLm1vbnRoID09PSBpdGVtICYmXG4gICAgICAgIHZhbHVlLmZyb20ubW9udGhTYW1lKHZhbHVlLnRvKSkgfHxcbiAgICAgIChob3ZlcmVkSXRlbSAhPT0gbnVsbCAmJlxuICAgICAgICBob3ZlcmVkSXRlbSA9PT0gaXRlbSAmJlxuICAgICAgICBob3ZlcmVkSXRlbSA9PT0gdmFsdWUuZnJvbS5tb250aCAmJlxuICAgICAgICB2YWx1ZS5mcm9tLm1vbnRoU2FtZSh2YWx1ZS50bykpXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJpem1SYW5nZVN0YXRlLlNpbmdsZTtcblxuICAgICAgLy8gVE9ETyBmaW5pc2ggaXQgYWZ0ZXIgYWRkIHN1cHBvcnQgaW50ZXJ2YWxzXG4gICAgICAvLyByZXR1cm4gUHJpem1SYW5nZVN0YXRlLlN0YXJ0O1xuICAgIH1cblxuICAgIC8vIFRPRE8gZmluaXNoIGl0IGFmdGVyIGFkZCBzdXBwb3J0IGludGVydmFsc1xuICAgIC8vIGlmIChcbiAgICAvLyAgICAgKHZhbHVlLnRvLm1vbnRoID09PSBpdGVtICYmICF2YWx1ZS5mcm9tLm1vbnRoU2FtZSh2YWx1ZS50bykpIHx8XG4gICAgLy8gICAgIChob3ZlcmVkSXRlbSAhPT0gbnVsbCAmJlxuICAgIC8vICAgICAgICAgaG92ZXJlZEl0ZW0gPCB2YWx1ZS5mcm9tLm1vbnRoICYmXG4gICAgLy8gICAgICAgICB2YWx1ZS5mcm9tLm1vbnRoID09PSBpdGVtICYmXG4gICAgLy8gICAgICAgICB2YWx1ZS5mcm9tLm1vbnRoU2FtZSh2YWx1ZS50bykpIHx8XG4gICAgLy8gICAgIChob3ZlcmVkSXRlbSAhPT0gbnVsbCAmJlxuICAgIC8vICAgICAgICAgaG92ZXJlZEl0ZW0gPT09IGl0ZW0gJiZcbiAgICAvLyAgICAgICAgIGhvdmVyZWRJdGVtID4gdmFsdWUuZnJvbS5tb250aCAmJlxuICAgIC8vICAgICAgICAgdmFsdWUuZnJvbS5tb250aFNhbWUodmFsdWUudG8pKVxuICAgIC8vICkge1xuICAgIC8vICAgcmV0dXJuIFByaXptUmFuZ2VTdGF0ZS5TaW5nbGU7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vICAgLy8gcmV0dXJuIFByaXptUmFuZ2VTdGF0ZS5FbmQ7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHZhbHVlLmZyb20ubW9udGhTYW1lKHZhbHVlLnRvKSAmJiB2YWx1ZS5mcm9tLm1vbnRoID09PSBpdGVtICYmIHZhbHVlLmZyb20ueWVhciA9PT0gdGhpcy5jdXJyZW50WWVhclxuICAgICAgPyBQcml6bVJhbmdlU3RhdGUuU2luZ2xlXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgaXRlbUlzVG9kYXkoaXRlbTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1vbnRoID09PSBpdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIG5vdCBzdXBwb3J0IGludGVydmFsXG4gICAqICovXG4gIHB1YmxpYyBpdGVtSXNJbnRlcnZhbChpdGVtOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVE9ETyBhZGQgYWZ0ZXIgZGVjaWRlZCwgd2l0aCBzdXBwb3J0IGludGVydmFsc1xuICAgKiBFeGFtcGxlXG4gICAqICovXG4gIHB1YmxpYyBpdGVtSXNJbnRlcnZhbE5ldyhpdGVtOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IHZhbHVlLCBob3ZlcmVkSXRlbSB9ID0gdGhpcztcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCAhdGhpcy5pc1JhbmdlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdmFsdWUuZnJvbS5tb250aFNhbWUodmFsdWUudG8pKSB7XG4gICAgICByZXR1cm4gdmFsdWUuZnJvbS5tb250aCA8PSBpdGVtICYmIHZhbHVlLnRvLm1vbnRoID4gaXRlbTtcbiAgICB9XG5cbiAgICBpZiAoaG92ZXJlZEl0ZW0gPT09IG51bGwgfHwgdmFsdWUuZnJvbS5tb250aCA9PT0gaG92ZXJlZEl0ZW0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpem1JblJhbmdlKFxuICAgICAgaXRlbSxcbiAgICAgIE1hdGgubWluKHZhbHVlLmZyb20ubW9udGgsIGhvdmVyZWRJdGVtKSxcbiAgICAgIE1hdGgubWF4KHZhbHVlLmZyb20ubW9udGgsIGhvdmVyZWRJdGVtKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25JdGVtSG92ZXJlZChob3ZlcmVkOiBib29sZWFuLCBpdGVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUhvdmVyZWRJdGVtKGhvdmVyZWQsIGl0ZW0pO1xuICB9XG5cbiAgcHVibGljIG9uSXRlbVByZXNzZWQocHJlc3NlZDogYm9vbGVhbiwgaXRlbTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQcmVzc2VkSXRlbShwcmVzc2VkLCBpdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkl0ZW1DbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IG51bWJlcik6IHZvaWQge1xuICAgIC8vIFRPRE8gZGVsZXRlIGFmdGVyIHVwZGF0ZSBkcm9wZG93bi1ob3N0IChuZWVkIGFjdGl2ZVpvbmUgb3B0aW9uYW4sIGZvciBkeW5hbWljIGNoYW5nZSBlbGVtZW50cylcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLm1vbnRoQ2xpY2suZW1pdChuZXcgUHJpem1Nb250aCh0aGlzLmN1cnJlbnRZZWFyLCBpdGVtKSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUhvdmVyZWRJdGVtKGhvdmVyZWQ6IGJvb2xlYW4sIGl0ZW06IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaG92ZXJlZEl0ZW0gPSBob3ZlcmVkID8gaXRlbSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByZXNzZWRJdGVtKHByZXNzZWQ6IGJvb2xlYW4sIGl0ZW06IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucHJlc3NlZEl0ZW0gPSBwcmVzc2VkID8gaXRlbSA6IG51bGw7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ6LXJvd1wiICpwcml6bVJlcGVhdFRpbWVzPVwibGV0IHJvd0luZGV4IG9mIHJvd3NcIiBhdXRvbWF0aW9uLWlkPVwicHJpem0tcHJpbWl0aXZlLXllYXItcGlja2VyX19yb3dcIj5cbiAgPG5nLWNvbnRhaW5lciAqcHJpem1SZXBlYXRUaW1lcz1cImxldCBjb2xJbmRleCBvZiBJVEVNU19JTl9ST1dcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInotY2VsbFwiXG4gICAgICAqcHJpem1MZXQ9XCJnZXRJdGVtKHJvd0luZGV4LCBjb2xJbmRleCkgYXMgaXRlbVwiXG4gICAgICBbY2xhc3Muei1jZWxsX3RvZGF5XT1cIml0ZW1Jc1RvZGF5KGl0ZW0ubW9udGgpXCJcbiAgICAgIFtjbGFzcy56LWNlbGxfaW50ZXJ2YWxdPVwiaXRlbUlzSW50ZXJ2YWwoaXRlbS5tb250aClcIlxuICAgICAgW2F0dHIuZGF0YS1yYW5nZV09XCJnZXRJdGVtUmFuZ2UoaXRlbS5tb250aClcIlxuICAgICAgW2F0dHIuZGF0YS1zdGF0ZV09XCJnZXRJdGVtU3RhdGUoaXRlbS5tb250aClcIlxuICAgICAgW3ByaXptU2Nyb2xsSW50b1ZpZXddPVwic2Nyb2xsSXRlbUludG9WaWV3KGl0ZW0ubW9udGgpXCJcbiAgICAgIChwcml6bUhvdmVyZWRDaGFuZ2UpPVwib25JdGVtSG92ZXJlZCgkZXZlbnQsIGl0ZW0ubW9udGgpXCJcbiAgICAgIChwcml6bVByZXNzZWRDaGFuZ2UpPVwib25JdGVtUHJlc3NlZCgkZXZlbnQsIGl0ZW0ubW9udGgpXCJcbiAgICAgIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsIGl0ZW0ubW9udGgpXCJcbiAgICAgIGF1dG9tYXRpb24taWQ9XCJwcml6bS1wcmltaXRpdmUteWVhci1waWNrZXJfX2NlbGxcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJ6LWl0ZW1cIj57eyBpdGVtIHwgcHJpem1Nb250aCB8IGFzeW5jIH19PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=