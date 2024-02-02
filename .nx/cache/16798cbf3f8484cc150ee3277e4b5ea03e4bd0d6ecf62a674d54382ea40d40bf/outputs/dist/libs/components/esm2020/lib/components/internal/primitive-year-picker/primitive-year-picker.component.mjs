import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY, PrizmDayRange, PrizmYear } from '../../../@core/date-time';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmInRange } from '../../../util/math/in-range';
import { PrizmHoveredDirective, PrizmInteractiveState, PrizmPressedDirective, PrizmRepeatTimesDirective, PrizmScrollIntoViewDirective, } from '../../../directives';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { PrizmLetDirective } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
const LIMIT = 100;
const ITEMS_IN_ROW = 3;
export class PrizmPrimitiveYearPickerComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.hoveredItem = null;
        this.pressedItem = null;
        this.currentYear = PrizmMonth.currentLocal().year;
        this.ITEMS_IN_ROW = ITEMS_IN_ROW;
        this.value = null;
        this.initialItem = PrizmMonth.currentLocal();
        this.min = PRIZM_FIRST_DAY;
        this.max = PRIZM_LAST_DAY;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.yearClick = new EventEmitter();
        this.testId_ = 'ui_primitive_year_picker';
    }
    get isSingle() {
        const { value } = this;
        return !!value && this.isRange(value) && value.from.yearSame(value.to);
    }
    get rows() {
        return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
    }
    get calculatedMin() {
        const initial = this.initialItem.year - LIMIT;
        return this.min.year > initial ? this.min.year : initial;
    }
    get calculatedMax() {
        const initial = this.initialItem.year + LIMIT;
        return this.max.year < initial ? this.max.year + 1 : initial;
    }
    isRange(item) {
        return item instanceof PrizmMonthRange;
    }
    scrollItemIntoView(item) {
        return this.initialItem.year === item;
    }
    getItem(rowIndex, colIndex) {
        return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
    }
    getItemState(item) {
        const { disabledItemHandler, max, pressedItem, hoveredItem } = this;
        if (max.year < item ||
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
        if (value instanceof PrizmYear) {
            return value.year === item ? "single" /* PrizmRangeState.Single */ : null;
        }
        if ((value instanceof PrizmDayRange || value instanceof PrizmMonthRange) &&
            value.isYearInRange(new PrizmYear(item))) {
            return "single" /* PrizmRangeState.Single */;
        }
        if ((value.from.year === item && !value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem > value.from.year &&
                value.from.year === item &&
                value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem === item &&
                hoveredItem < value.from.year &&
                value.from.yearSame(value.to))) {
            return "single" /* PrizmRangeState.Single */;
            // TODO add after add support intervals
            // return PrizmRangeState.Start;
        }
        if ((value.to.year === item && !value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem < value.from.year &&
                value.from.year === item &&
                value.from.yearSame(value.to)) ||
            (hoveredItem !== null &&
                hoveredItem === item &&
                hoveredItem > value.from.year &&
                value.from.yearSame(value.to))) {
            return "single" /* PrizmRangeState.Single */;
            // TODO add after add support intervals
            // return PrizmRangeState.End;
        }
        return value.from.yearSame(value.to) && value.from.year === item ? "single" /* PrizmRangeState.Single */ : null;
    }
    itemIsToday(item) {
        return this.currentYear === item;
    }
    /**
     * not support interval
     * */
    itemIsInterval(item) {
        return false;
    }
    /**
     * TODO with support intervals
     * */
    itemIsIntervalNew(item) {
        const { value, hoveredItem } = this;
        if (value === null || !this.isRange(value)) {
            return false;
        }
        if (!value.from.yearSame(value.to)) {
            return value.from.year <= item && value.to.year > item;
        }
        if (hoveredItem === null || value.from.year === hoveredItem) {
            return false;
        }
        return prizmInRange(item, Math.min(value.from.year, hoveredItem), Math.max(value.from.year, hoveredItem));
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
        this.yearClick.emit(new PrizmYear(item));
    }
    updateHoveredItem(hovered, item) {
        this.hoveredItem = hovered ? item : null;
    }
    updatePressedItem(pressed, item) {
        this.pressedItem = pressed ? item : null;
    }
}
PrizmPrimitiveYearPickerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveYearPickerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PrizmPrimitiveYearPickerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmPrimitiveYearPickerComponent, isStandalone: true, selector: "prizm-primitive-year-picker", inputs: { value: "value", initialItem: "initialItem", min: "min", max: "max", disabledItemHandler: "disabledItemHandler" }, outputs: { yearClick: "yearClick" }, host: { properties: { "class._single": "this.isSingle" } }, usesInheritance: true, ngImport: i0, template: "<div class=\"z-row\" *prizmRepeatTimes=\"let rowIndex of rows\" automation-id=\"prizm-primitive-year-picker__row\">\n  <ng-container *prizmRepeatTimes=\"let colIndex of ITEMS_IN_ROW\">\n    <div\n      class=\"z-cell\"\n      *prizmLet=\"getItem(rowIndex, colIndex) as item\"\n      [class.z-cell_today]=\"itemIsToday(item)\"\n      [class.z-cell_interval]=\"itemIsInterval(item)\"\n      [attr.data-range]=\"getItemRange(item)\"\n      [attr.data-state]=\"getItemState(item)\"\n      [prizmScrollIntoView]=\"scrollItemIntoView(item)\"\n      (prizmHoveredChange)=\"onItemHovered($event, item)\"\n      (prizmPressedChange)=\"onItemPressed($event, item)\"\n      (click)=\"onItemClick($event, item)\"\n      automation-id=\"prizm-primitive-year-picker__cell\"\n    >\n      <div class=\"z-item\">{{ item }}</div>\n    </div>\n  </ng-container>\n</div>\n", styles: [":host{display:block;font:var(--prizm-font-text-m)}.z-row{position:relative;z-index:0;display:flex;justify-content:space-between;height:2.25rem}.z-item{position:relative;flex:1;line-height:2rem;border-radius:2px;color:var(--prizm-v3-text-icon-secondary);font-weight:600}.z-item:before,.z-item:after{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:2px}.z-cell{position:relative;display:flex;align-items:center;justify-content:center;width:3.9375rem;text-align:center;outline:none;cursor:pointer;background-clip:content-box;box-sizing:border-box;border:2px solid transparent}.z-cell_today{border-radius:2px}.z-cell_today[data-state=hovered]>.z-item{border-color:var(--prizm-v3-button-primary-solid-hover);color:var(--prizm-v3-button-primary-solid-hover);background-color:var(--prizm-v3-button-ghost-hover)}.z-cell_today .z-item{border:1px solid var(--prizm-v3-button-primary-solid-default);color:var(--prizm-v3-button-primary-solid-default)}.z-cell_today .z-item_unavailable{color:var(--prizm-v3-text-icon-disable)}.z-cell:before{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:2px}.z-cell_interval:before{background:var(--prizm-v3-button-primary-ghost-active)}:host._single .z-cell_interval:before{background-color:var(--prizm-v3-button-primary-ghost-active)}.z-cell_interval:not(:last-child):before{right:-3.9375rem}.z-cell_interval:last-child:first-child:before{right:0}.z-cell_interval:first-child>.z-item{border-top-left-radius:2px;border-bottom-left-radius:2px}.z-cell_interval:last-child>.z-item{border-top-right-radius:2px;border-bottom-right-radius:2px}.z-cell_interval>.z-item{border-radius:0;color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item{color:var(--prizm-v3-text-icon-exception)}.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item:before,.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item:after{background-color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-range][data-state=hovered]>.z-item{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-range][data-state=hovered]>.z-item:before,.z-cell[data-range][data-state=hovered]>.z-item:after{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-range][data-state=pressed]>.z-item:before,.z-cell[data-range][data-state=pressed]>.z-item:after{background-color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-state=disabled]{pointer-events:none;cursor:not-allowed}.z-cell[data-state=disabled]>.z-item{text-decoration:line-through;opacity:.3}.z-cell[data-state=hovered]:not([data-range]):not(.z-cell_today)>.z-item{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-state=pressed]:hover:not([data-range])>.z-item{background-color:var(--prizm-v3-button-primary-solid-default);border-radius:2px;color:var(--prizm-v3-text-icon-exception)}:host{width:15.75rem}.z-row{margin:.875rem 0}.z-row:first-child{margin-top:0}.z-row:last-child{margin-bottom:0}\n"], dependencies: [{ kind: "directive", type: PrizmHoveredDirective, selector: "[prizmHoveredChange]", outputs: ["prizmHoveredChange"] }, { kind: "directive", type: PrizmPressedDirective, selector: "[prizmPressedChange]", outputs: ["prizmPressedChange"] }, { kind: "directive", type: PrizmRepeatTimesDirective, selector: "[prizmRepeatTimes][prizmRepeatTimesOf]", inputs: ["prizmRepeatTimesOf"] }, { kind: "directive", type: PrizmLetDirective, selector: "[prizmLet]", inputs: ["prizmLet"], exportAs: ["prizmLet"] }, { kind: "directive", type: PrizmScrollIntoViewDirective, selector: "[prizmScrollIntoView]", inputs: ["prizmScrollIntoView"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveYearPickerComponent.prototype, "value", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmYear)
], PrizmPrimitiveYearPickerComponent.prototype, "initialItem", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmYear)
], PrizmPrimitiveYearPickerComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmYear)
], PrizmPrimitiveYearPickerComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmPrimitiveYearPickerComponent.prototype, "disabledItemHandler", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmPrimitiveYearPickerComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-primitive-year-picker`, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
                        PrizmHoveredDirective,
                        PrizmPressedDirective,
                        PrizmRepeatTimesDirective,
                        PrizmLetDirective,
                        PrizmScrollIntoViewDirective,
                    ], template: "<div class=\"z-row\" *prizmRepeatTimes=\"let rowIndex of rows\" automation-id=\"prizm-primitive-year-picker__row\">\n  <ng-container *prizmRepeatTimes=\"let colIndex of ITEMS_IN_ROW\">\n    <div\n      class=\"z-cell\"\n      *prizmLet=\"getItem(rowIndex, colIndex) as item\"\n      [class.z-cell_today]=\"itemIsToday(item)\"\n      [class.z-cell_interval]=\"itemIsInterval(item)\"\n      [attr.data-range]=\"getItemRange(item)\"\n      [attr.data-state]=\"getItemState(item)\"\n      [prizmScrollIntoView]=\"scrollItemIntoView(item)\"\n      (prizmHoveredChange)=\"onItemHovered($event, item)\"\n      (prizmPressedChange)=\"onItemPressed($event, item)\"\n      (click)=\"onItemClick($event, item)\"\n      automation-id=\"prizm-primitive-year-picker__cell\"\n    >\n      <div class=\"z-item\">{{ item }}</div>\n    </div>\n  </ng-container>\n</div>\n", styles: [":host{display:block;font:var(--prizm-font-text-m)}.z-row{position:relative;z-index:0;display:flex;justify-content:space-between;height:2.25rem}.z-item{position:relative;flex:1;line-height:2rem;border-radius:2px;color:var(--prizm-v3-text-icon-secondary);font-weight:600}.z-item:before,.z-item:after{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:2px}.z-cell{position:relative;display:flex;align-items:center;justify-content:center;width:3.9375rem;text-align:center;outline:none;cursor:pointer;background-clip:content-box;box-sizing:border-box;border:2px solid transparent}.z-cell_today{border-radius:2px}.z-cell_today[data-state=hovered]>.z-item{border-color:var(--prizm-v3-button-primary-solid-hover);color:var(--prizm-v3-button-primary-solid-hover);background-color:var(--prizm-v3-button-ghost-hover)}.z-cell_today .z-item{border:1px solid var(--prizm-v3-button-primary-solid-default);color:var(--prizm-v3-button-primary-solid-default)}.z-cell_today .z-item_unavailable{color:var(--prizm-v3-text-icon-disable)}.z-cell:before{content:\"\";position:absolute;inset:0;z-index:-1;border-radius:2px}.z-cell_interval:before{background:var(--prizm-v3-button-primary-ghost-active)}:host._single .z-cell_interval:before{background-color:var(--prizm-v3-button-primary-ghost-active)}.z-cell_interval:not(:last-child):before{right:-3.9375rem}.z-cell_interval:last-child:first-child:before{right:0}.z-cell_interval:first-child>.z-item{border-top-left-radius:2px;border-bottom-left-radius:2px}.z-cell_interval:last-child>.z-item{border-top-right-radius:2px;border-bottom-right-radius:2px}.z-cell_interval>.z-item{border-radius:0;color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item{color:var(--prizm-v3-text-icon-exception)}.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item:before,.z-cell[data-range]:not([data-state=\"hovered\"])>.z-item:after{background-color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-range][data-state=hovered]>.z-item{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-range][data-state=hovered]>.z-item:before,.z-cell[data-range][data-state=hovered]>.z-item:after{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-range][data-state=pressed]>.z-item:before,.z-cell[data-range][data-state=pressed]>.z-item:after{background-color:var(--prizm-v3-button-primary-solid-default)}.z-cell[data-state=disabled]{pointer-events:none;cursor:not-allowed}.z-cell[data-state=disabled]>.z-item{text-decoration:line-through;opacity:.3}.z-cell[data-state=hovered]:not([data-range]):not(.z-cell_today)>.z-item{background-color:var(--prizm-v3-button-ghost-hover);color:var(--prizm-v3-button-primary-solid-hover)}.z-cell[data-state=pressed]:hover:not([data-range])>.z-item{background-color:var(--prizm-v3-button-primary-solid-default);border-radius:2px;color:var(--prizm-v3-text-icon-exception)}:host{width:15.75rem}.z-row{margin:.875rem 0}.z-row:first-child{margin-top:0}.z-row:last-child{margin-bottom:0}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], initialItem: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], yearClick: [{
                type: Output
            }], isSingle: [{
                type: HostBinding,
                args: [`class._single`]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLXllYXItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW50ZXJuYWwvcHJpbWl0aXZlLXllYXItcGlja2VyL3ByaW1pdGl2ZS15ZWFyLXBpY2tlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2ludGVybmFsL3ByaW1pdGl2ZS15ZWFyLXBpY2tlci9wcmltaXRpdmUteWVhci1waWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXJHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIseUJBQXlCLEVBQ3pCLDRCQUE0QixHQUM3QixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9B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bnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQcml6bU1vbnRoUmFuZ2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvbW9udGgtcmFuZ2UnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0ZJUlNUX0RBWSwgUFJJWk1fTEFTVF9EQVksIFByaXptRGF5UmFuZ2UsIFByaXptWWVhciB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZSc7XG5pbXBvcnQgeyBQcml6bUJvb2xlYW5IYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBwcml6bUluUmFuZ2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL21hdGgvaW4tcmFuZ2UnO1xuaW1wb3J0IHtcbiAgUHJpem1Ib3ZlcmVkRGlyZWN0aXZlLFxuICBQcml6bUludGVyYWN0aXZlU3RhdGUsXG4gIFByaXptUHJlc3NlZERpcmVjdGl2ZSxcbiAgUHJpem1SZXBlYXRUaW1lc0RpcmVjdGl2ZSxcbiAgUHJpem1TY3JvbGxJbnRvVmlld0RpcmVjdGl2ZSxcbn0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBQcml6bVJhbmdlU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9lbnVtcy9yYW5nZS1zdGF0ZSc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1MZXREaXJlY3RpdmUgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5cbmNvbnN0IExJTUlUID0gMTAwO1xuY29uc3QgSVRFTVNfSU5fUk9XID0gMztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBgcHJpem0tcHJpbWl0aXZlLXllYXItcGlja2VyYCxcbiAgdGVtcGxhdGVVcmw6IGAuL3ByaW1pdGl2ZS15ZWFyLXBpY2tlci5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlVXJsczogW2AuL3ByaW1pdGl2ZS15ZWFyLXBpY2tlci5jb21wb25lbnQubGVzc2BdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIFByaXptSG92ZXJlZERpcmVjdGl2ZSxcbiAgICBQcml6bVByZXNzZWREaXJlY3RpdmUsXG4gICAgUHJpem1SZXBlYXRUaW1lc0RpcmVjdGl2ZSxcbiAgICBQcml6bUxldERpcmVjdGl2ZSxcbiAgICBQcml6bVNjcm9sbEludG9WaWV3RGlyZWN0aXZlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVByaW1pdGl2ZVllYXJQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIHtcbiAgcHJpdmF0ZSBob3ZlcmVkSXRlbTogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgcHJlc3NlZEl0ZW06IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHJlYWRvbmx5IGN1cnJlbnRZZWFyID0gUHJpem1Nb250aC5jdXJyZW50TG9jYWwoKS55ZWFyO1xuICBwdWJsaWMgcmVhZG9ubHkgSVRFTVNfSU5fUk9XID0gSVRFTVNfSU5fUk9XO1xuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHZhbHVlOiBQcml6bU1vbnRoUmFuZ2UgfCBQcml6bVllYXIgfCBQcml6bURheVJhbmdlIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpbml0aWFsSXRlbTogUHJpem1ZZWFyID0gUHJpem1Nb250aC5jdXJyZW50TG9jYWwoKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbjogUHJpem1ZZWFyID0gUFJJWk1fRklSU1RfREFZO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4OiBQcml6bVllYXIgPSBQUklaTV9MQVNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRpc2FibGVkSXRlbUhhbmRsZXI6IFByaXptQm9vbGVhbkhhbmRsZXI8bnVtYmVyPiA9IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSB5ZWFyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFByaXptWWVhcj4oKTtcblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLl9zaW5nbGVgKVxuICBnZXQgaXNTaW5nbGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcztcblxuICAgIHJldHVybiAhIXZhbHVlICYmIHRoaXMuaXNSYW5nZSh2YWx1ZSkgJiYgdmFsdWUuZnJvbS55ZWFyU2FtZSh2YWx1ZS50byk7XG4gIH1cblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX3ByaW1pdGl2ZV95ZWFyX3BpY2tlcic7XG5cbiAgZ2V0IHJvd3MoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKCh0aGlzLmNhbGN1bGF0ZWRNYXggLSB0aGlzLmNhbGN1bGF0ZWRNaW4pIC8gSVRFTVNfSU5fUk9XKTtcbiAgfVxuXG4gIGdldCBjYWxjdWxhdGVkTWluKCk6IG51bWJlciB7XG4gICAgY29uc3QgaW5pdGlhbCA9IHRoaXMuaW5pdGlhbEl0ZW0ueWVhciAtIExJTUlUO1xuXG4gICAgcmV0dXJuIHRoaXMubWluLnllYXIgPiBpbml0aWFsID8gdGhpcy5taW4ueWVhciA6IGluaXRpYWw7XG4gIH1cblxuICBnZXQgY2FsY3VsYXRlZE1heCgpOiBudW1iZXIge1xuICAgIGNvbnN0IGluaXRpYWwgPSB0aGlzLmluaXRpYWxJdGVtLnllYXIgKyBMSU1JVDtcblxuICAgIHJldHVybiB0aGlzLm1heC55ZWFyIDwgaW5pdGlhbCA/IHRoaXMubWF4LnllYXIgKyAxIDogaW5pdGlhbDtcbiAgfVxuXG4gIHB1YmxpYyBpc1JhbmdlKGl0ZW06IFByaXptTW9udGhSYW5nZSB8IFByaXptWWVhcik6IGl0ZW0gaXMgUHJpem1Nb250aFJhbmdlIHtcbiAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIFByaXptTW9udGhSYW5nZTtcbiAgfVxuXG4gIHB1YmxpYyBzY3JvbGxJdGVtSW50b1ZpZXcoaXRlbTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbEl0ZW0ueWVhciA9PT0gaXRlbTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJdGVtKHJvd0luZGV4OiBudW1iZXIsIGNvbEluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiByb3dJbmRleCAqIElURU1TX0lOX1JPVyArIGNvbEluZGV4ICsgdGhpcy5jYWxjdWxhdGVkTWluO1xuICB9XG5cbiAgcHVibGljIGdldEl0ZW1TdGF0ZShpdGVtOiBudW1iZXIpOiBQcml6bUludGVyYWN0aXZlU3RhdGUgfCBudWxsIHtcbiAgICBjb25zdCB7IGRpc2FibGVkSXRlbUhhbmRsZXIsIG1heCwgcHJlc3NlZEl0ZW0sIGhvdmVyZWRJdGVtIH0gPSB0aGlzO1xuXG4gICAgaWYgKFxuICAgICAgbWF4LnllYXIgPCBpdGVtIHx8XG4gICAgICAoZGlzYWJsZWRJdGVtSGFuZGxlciAhPT0gUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVIgJiYgZGlzYWJsZWRJdGVtSGFuZGxlcihpdGVtKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBQcml6bUludGVyYWN0aXZlU3RhdGUuRGlzYWJsZWQ7XG4gICAgfVxuXG4gICAgaWYgKHByZXNzZWRJdGVtID09PSBpdGVtKSB7XG4gICAgICByZXR1cm4gUHJpem1JbnRlcmFjdGl2ZVN0YXRlLlByZXNzZWQ7XG4gICAgfVxuXG4gICAgaWYgKGhvdmVyZWRJdGVtID09PSBpdGVtKSB7XG4gICAgICByZXR1cm4gUHJpem1JbnRlcmFjdGl2ZVN0YXRlLkhvdmVyZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0SXRlbVJhbmdlKGl0ZW06IG51bWJlcik6IFByaXptUmFuZ2VTdGF0ZSB8IG51bGwge1xuICAgIGNvbnN0IHsgdmFsdWUsIGhvdmVyZWRJdGVtIH0gPSB0aGlzO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcml6bVllYXIpIHtcbiAgICAgIHJldHVybiB2YWx1ZS55ZWFyID09PSBpdGVtID8gUHJpem1SYW5nZVN0YXRlLlNpbmdsZSA6IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKHZhbHVlIGluc3RhbmNlb2YgUHJpem1EYXlSYW5nZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIFByaXptTW9udGhSYW5nZSkgJiZcbiAgICAgIHZhbHVlLmlzWWVhckluUmFuZ2UobmV3IFByaXptWWVhcihpdGVtKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBQcml6bVJhbmdlU3RhdGUuU2luZ2xlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICh2YWx1ZS5mcm9tLnllYXIgPT09IGl0ZW0gJiYgIXZhbHVlLmZyb20ueWVhclNhbWUodmFsdWUudG8pKSB8fFxuICAgICAgKGhvdmVyZWRJdGVtICE9PSBudWxsICYmXG4gICAgICAgIGhvdmVyZWRJdGVtID4gdmFsdWUuZnJvbS55ZWFyICYmXG4gICAgICAgIHZhbHVlLmZyb20ueWVhciA9PT0gaXRlbSAmJlxuICAgICAgICB2YWx1ZS5mcm9tLnllYXJTYW1lKHZhbHVlLnRvKSkgfHxcbiAgICAgIChob3ZlcmVkSXRlbSAhPT0gbnVsbCAmJlxuICAgICAgICBob3ZlcmVkSXRlbSA9PT0gaXRlbSAmJlxuICAgICAgICBob3ZlcmVkSXRlbSA8IHZhbHVlLmZyb20ueWVhciAmJlxuICAgICAgICB2YWx1ZS5mcm9tLnllYXJTYW1lKHZhbHVlLnRvKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBQcml6bVJhbmdlU3RhdGUuU2luZ2xlO1xuXG4gICAgICAvLyBUT0RPIGFkZCBhZnRlciBhZGQgc3VwcG9ydCBpbnRlcnZhbHNcbiAgICAgIC8vIHJldHVybiBQcml6bVJhbmdlU3RhdGUuU3RhcnQ7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKHZhbHVlLnRvLnllYXIgPT09IGl0ZW0gJiYgIXZhbHVlLmZyb20ueWVhclNhbWUodmFsdWUudG8pKSB8fFxuICAgICAgKGhvdmVyZWRJdGVtICE9PSBudWxsICYmXG4gICAgICAgIGhvdmVyZWRJdGVtIDwgdmFsdWUuZnJvbS55ZWFyICYmXG4gICAgICAgIHZhbHVlLmZyb20ueWVhciA9PT0gaXRlbSAmJlxuICAgICAgICB2YWx1ZS5mcm9tLnllYXJTYW1lKHZhbHVlLnRvKSkgfHxcbiAgICAgIChob3ZlcmVkSXRlbSAhPT0gbnVsbCAmJlxuICAgICAgICBob3ZlcmVkSXRlbSA9PT0gaXRlbSAmJlxuICAgICAgICBob3ZlcmVkSXRlbSA+IHZhbHVlLmZyb20ueWVhciAmJlxuICAgICAgICB2YWx1ZS5mcm9tLnllYXJTYW1lKHZhbHVlLnRvKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBQcml6bVJhbmdlU3RhdGUuU2luZ2xlO1xuXG4gICAgICAvLyBUT0RPIGFkZCBhZnRlciBhZGQgc3VwcG9ydCBpbnRlcnZhbHNcbiAgICAgIC8vIHJldHVybiBQcml6bVJhbmdlU3RhdGUuRW5kO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZS5mcm9tLnllYXJTYW1lKHZhbHVlLnRvKSAmJiB2YWx1ZS5mcm9tLnllYXIgPT09IGl0ZW0gPyBQcml6bVJhbmdlU3RhdGUuU2luZ2xlIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBpdGVtSXNUb2RheShpdGVtOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50WWVhciA9PT0gaXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBub3Qgc3VwcG9ydCBpbnRlcnZhbFxuICAgKiAqL1xuICBwdWJsaWMgaXRlbUlzSW50ZXJ2YWwoaXRlbTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRPRE8gd2l0aCBzdXBwb3J0IGludGVydmFsc1xuICAgKiAqL1xuICBwdWJsaWMgaXRlbUlzSW50ZXJ2YWxOZXcoaXRlbTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyB2YWx1ZSwgaG92ZXJlZEl0ZW0gfSA9IHRoaXM7XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgIXRoaXMuaXNSYW5nZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlLmZyb20ueWVhclNhbWUodmFsdWUudG8pKSB7XG4gICAgICByZXR1cm4gdmFsdWUuZnJvbS55ZWFyIDw9IGl0ZW0gJiYgdmFsdWUudG8ueWVhciA+IGl0ZW07XG4gICAgfVxuXG4gICAgaWYgKGhvdmVyZWRJdGVtID09PSBudWxsIHx8IHZhbHVlLmZyb20ueWVhciA9PT0gaG92ZXJlZEl0ZW0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJpem1JblJhbmdlKGl0ZW0sIE1hdGgubWluKHZhbHVlLmZyb20ueWVhciwgaG92ZXJlZEl0ZW0pLCBNYXRoLm1heCh2YWx1ZS5mcm9tLnllYXIsIGhvdmVyZWRJdGVtKSk7XG4gIH1cblxuICBwdWJsaWMgb25JdGVtSG92ZXJlZChob3ZlcmVkOiBib29sZWFuLCBpdGVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUhvdmVyZWRJdGVtKGhvdmVyZWQsIGl0ZW0pO1xuICB9XG5cbiAgcHVibGljIG9uSXRlbVByZXNzZWQocHJlc3NlZDogYm9vbGVhbiwgaXRlbTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQcmVzc2VkSXRlbShwcmVzc2VkLCBpdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkl0ZW1DbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQsIGl0ZW06IG51bWJlcik6IHZvaWQge1xuICAgIC8vIFRPRE8gZGVsZXRlIGFmdGVyIHVwZGF0ZSBkcm9wZG93bi1ob3N0IChuZWVkIGFjdGl2ZVpvbmUgb3B0aW9uYW4sIGZvciBkeW5hbWljIGNoYW5nZSBlbGVtZW50cylcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLnllYXJDbGljay5lbWl0KG5ldyBQcml6bVllYXIoaXRlbSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVIb3ZlcmVkSXRlbShob3ZlcmVkOiBib29sZWFuLCBpdGVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmhvdmVyZWRJdGVtID0gaG92ZXJlZCA/IGl0ZW0gOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQcmVzc2VkSXRlbShwcmVzc2VkOiBib29sZWFuLCBpdGVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnByZXNzZWRJdGVtID0gcHJlc3NlZCA/IGl0ZW0gOiBudWxsO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiei1yb3dcIiAqcHJpem1SZXBlYXRUaW1lcz1cImxldCByb3dJbmRleCBvZiByb3dzXCIgYXV0b21hdGlvbi1pZD1cInByaXptLXByaW1pdGl2ZS15ZWFyLXBpY2tlcl9fcm93XCI+XG4gIDxuZy1jb250YWluZXIgKnByaXptUmVwZWF0VGltZXM9XCJsZXQgY29sSW5kZXggb2YgSVRFTVNfSU5fUk9XXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ6LWNlbGxcIlxuICAgICAgKnByaXptTGV0PVwiZ2V0SXRlbShyb3dJbmRleCwgY29sSW5kZXgpIGFzIGl0ZW1cIlxuICAgICAgW2NsYXNzLnotY2VsbF90b2RheV09XCJpdGVtSXNUb2RheShpdGVtKVwiXG4gICAgICBbY2xhc3Muei1jZWxsX2ludGVydmFsXT1cIml0ZW1Jc0ludGVydmFsKGl0ZW0pXCJcbiAgICAgIFthdHRyLmRhdGEtcmFuZ2VdPVwiZ2V0SXRlbVJhbmdlKGl0ZW0pXCJcbiAgICAgIFthdHRyLmRhdGEtc3RhdGVdPVwiZ2V0SXRlbVN0YXRlKGl0ZW0pXCJcbiAgICAgIFtwcml6bVNjcm9sbEludG9WaWV3XT1cInNjcm9sbEl0ZW1JbnRvVmlldyhpdGVtKVwiXG4gICAgICAocHJpem1Ib3ZlcmVkQ2hhbmdlKT1cIm9uSXRlbUhvdmVyZWQoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAocHJpem1QcmVzc2VkQ2hhbmdlKT1cIm9uSXRlbVByZXNzZWQoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAoY2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50LCBpdGVtKVwiXG4gICAgICBhdXRvbWF0aW9uLWlkPVwicHJpem0tcHJpbWl0aXZlLXllYXItcGlja2VyX19jZWxsXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiei1pdGVtXCI+e3sgaXRlbSB9fTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19