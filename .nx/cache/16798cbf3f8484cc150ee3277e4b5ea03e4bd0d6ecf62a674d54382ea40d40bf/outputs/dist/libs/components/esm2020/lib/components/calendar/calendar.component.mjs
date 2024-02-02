import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../@core/date-time/days.const';
import { PrizmMonth } from '../../@core/date-time/month';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../constants/default-marker-handler';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmNullableSame } from '../../util/common/nullable-same';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmPrimitiveCalendarComponent } from '../internal/primitive-calendar';
import { PrizmScrollbarModule } from '../scrollbar';
import { PrizmMapperPipeModule } from '../../pipes';
import { PrizmPrimitiveYearMonthPaginationComponent } from '../internal/primitive-year-month-pagination/primitive-year-month-pagination.component';
import { PrizmPrimitiveMonthPickerComponent } from '../internal/primitive-month-picker/primitive-month-picker.component';
import { PrizmPrimitiveYearPickerComponent } from '../internal/primitive-year-picker/primitive-year-picker.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../scrollbar/scrollbar.component";
import * as i3 from "../../pipes/mapper/mapper.pipe";
export class PrizmCalendarComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.month = PrizmMonth.currentLocal();
        this.value = null;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.min = PRIZM_FIRST_DAY;
        this.daysWithStatus = [];
        this.max = PRIZM_LAST_DAY;
        this.minViewedMonth = PRIZM_FIRST_DAY;
        this.maxViewedMonth = PRIZM_LAST_DAY;
        this.hoveredItem = null;
        this.showAdjacent = true;
        this.markerHandler = PRIZM_DEFAULT_MARKER_HANDLER;
        this.dayClick = new EventEmitter();
        this.monthChange = new EventEmitter();
        this.hoveredItemChange = new EventEmitter();
        this.testId_ = 'ui_calendar';
        this.year = null;
        this.clickedMonth = null;
        this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
    }
    get computedMinViewedMonth() {
        return this.minViewedMonth.monthSameOrAfter(this.min) ? this.minViewedMonth : this.min;
    }
    get computedMaxViewedMonth() {
        return this.maxViewedMonth.monthSameOrBefore(this.max) ? this.maxViewedMonth : this.max;
    }
    onPaginationYearClick(year) {
        this.year = year;
        this.clickedMonth = null;
    }
    onPaginationMonthClick(month) {
        this.clickedMonth = month;
        this.year = null;
    }
    onPickerYearClick({ year }) {
        this.year = null;
        this.updateViewedMonth(new PrizmMonth(year, this.month.month));
    }
    onPickerMonthClick({ month }) {
        this.clickedMonth = null;
        this.updateViewedMonth(new PrizmMonth(this.month.year, month));
    }
    onPaginationValueChange(month) {
        this.updateViewedMonth(month);
    }
    onDayClick(day) {
        this.dayClick.emit(day);
    }
    onHoveredItemChange(day) {
        this.updateHoveredDay(day);
    }
    updateViewedMonth(month) {
        if (this.month.monthSame(month)) {
            return;
        }
        this.month = month;
        this.monthChange.emit(month);
    }
    updateHoveredDay(day) {
        if (prizmNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
            return;
        }
        this.hoveredItem = day;
        this.hoveredItemChange.emit(day);
    }
}
PrizmCalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCalendarComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PrizmCalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmCalendarComponent, isStandalone: true, selector: "prizm-calendar", inputs: { month: "month", value: "value", disabledItemHandler: "disabledItemHandler", min: "min", daysWithStatus: "daysWithStatus", max: "max", minViewedMonth: "minViewedMonth", maxViewedMonth: "maxViewedMonth", hoveredItem: "hoveredItem", showAdjacent: "showAdjacent", markerHandler: "markerHandler" }, outputs: { dayClick: "dayClick", monthChange: "monthChange", hoveredItemChange: "hoveredItemChange" }, usesInheritance: true, ngImport: i0, template: "<div class=\"calendar-host\">\n  <ng-container *ngIf=\"year || clickedMonth; else calendar\">\n    <prizm-primitive-year-month-pagination\n      class=\"z-pagination\"\n      [min]=\"computedMinViewedMonth\"\n      [max]=\"computedMaxViewedMonth\"\n      [value]=\"month\"\n      [hideButtons]=\"true\"\n      [monthActive]=\"!!clickedMonth\"\n      [yearActive]=\"!!year\"\n      (valueChange)=\"onPaginationValueChange($event)\"\n      (yearClick)=\"onPaginationYearClick($event)\"\n      (monthClick)=\"onPaginationMonthClick($event)\"\n      automation-id=\"prizm-calendar__pagination\"\n    ></prizm-primitive-year-month-pagination>\n    <prizm-scrollbar class=\"z-scrollbar\" automation-id=\"prizm-calendar__scrollbar\">\n      <prizm-primitive-year-picker\n        *ngIf=\"year; else monthPickerTemplate\"\n        [min]=\"min\"\n        [max]=\"max\"\n        [initialItem]=\"year\"\n        [value]=\"value\"\n        (yearClick)=\"onPickerYearClick($event)\"\n        automation-id=\"prizm-calendar__year\"\n      ></prizm-primitive-year-picker>\n      <ng-template #monthPickerTemplate>\n        <prizm-primitive-month-picker\n          [min]=\"min\"\n          [max]=\"max\"\n          [initialItem]=\"$any(clickedMonth)\"\n          [value]=\"value\"\n          [currentYear]=\"month.year\"\n          (monthClick)=\"onPickerMonthClick($event)\"\n          automation-id=\"prizm-calendar__year\"\n        ></prizm-primitive-month-picker>\n      </ng-template>\n    </prizm-scrollbar>\n  </ng-container>\n  <ng-template #calendar>\n    <prizm-primitive-year-month-pagination\n      class=\"z-pagination\"\n      [min]=\"computedMinViewedMonth\"\n      [max]=\"computedMaxViewedMonth\"\n      [value]=\"month\"\n      (valueChange)=\"onPaginationValueChange($event)\"\n      (yearClick)=\"onPaginationYearClick($event)\"\n      (monthClick)=\"onPaginationMonthClick($event)\"\n      automation-id=\"prizm-calendar__pagination\"\n    ></prizm-primitive-year-month-pagination>\n    <prizm-primitive-calendar\n      [showAdjacent]=\"showAdjacent\"\n      [value]=\"value\"\n      [month]=\"month\"\n      [daysWithStatus]=\"daysWithStatus\"\n      [disabledItemHandler]=\"disabledItemHandler | prizmMapper : disabledItemHandlerMapper : min : max\"\n      [markerHandler]=\"markerHandler\"\n      [hoveredItem]=\"hoveredItem\"\n      (hoveredItemChange)=\"onHoveredItemChange($event)\"\n      (dayClick)=\"onDayClick($event)\"\n      automation-id=\"prizm-calendar__calendar\"\n    >\n      <ng-container footer>\n        <ng-content select=\"[footer]\"></ng-content>\n      </ng-container>\n      <ng-container header>\n        <ng-content select=\"[header]\"></ng-content>\n      </ng-container>\n    </prizm-primitive-calendar>\n  </ng-template>\n</div>\n", styles: [":host{display:block;height:calc(18.25rem + var(--prizm-calendar-footer-height, 0));width:15.75rem;padding:16px;box-sizing:content-box}.z-scrollbar{height:16.25rem;width:16.875rem}.z-pagination{margin-bottom:1rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: PrizmPrimitiveYearMonthPaginationComponent, selector: "prizm-primitive-year-month-pagination", inputs: ["value", "hideButtons", "min", "max", "monthActive", "yearActive"], outputs: ["valueChange", "yearClick", "monthClick"] }, { kind: "component", type: PrizmPrimitiveCalendarComponent, selector: "prizm-primitive-calendar", inputs: ["month", "disabledItemHandler", "markerHandler", "value", "daysWithStatus", "hoveredItem", "showAdjacent"], outputs: ["hoveredItemChange", "dayClick"] }, { kind: "component", type: PrizmPrimitiveYearPickerComponent, selector: "prizm-primitive-year-picker", inputs: ["value", "initialItem", "min", "max", "disabledItemHandler"], outputs: ["yearClick"] }, { kind: "component", type: PrizmPrimitiveMonthPickerComponent, selector: "prizm-primitive-month-picker", inputs: ["value", "currentYear", "initialItem", "min", "max", "disabledItemHandler"], outputs: ["monthClick"] }, { kind: "ngmodule", type: PrizmScrollbarModule }, { kind: "component", type: i2.PrizmScrollbarComponent, selector: "prizm-scrollbar", inputs: ["visibility"] }, { kind: "ngmodule", type: PrizmMapperPipeModule }, { kind: "pipe", type: i3.PrizmMapperPipe, name: "prizmMapper" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmCalendarComponent.prototype, "month", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCalendarComponent.prototype, "value", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmCalendarComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCalendarComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmCalendarComponent.prototype, "daysWithStatus", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCalendarComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmCalendarComponent.prototype, "minViewedMonth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmCalendarComponent.prototype, "maxViewedMonth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCalendarComponent.prototype, "hoveredItem", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCalendarComponent.prototype, "showAdjacent", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmCalendarComponent.prototype, "markerHandler", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-calendar`, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
                        CommonModule,
                        PrizmPrimitiveYearMonthPaginationComponent,
                        PrizmPrimitiveCalendarComponent,
                        PrizmPrimitiveYearPickerComponent,
                        PrizmPrimitiveMonthPickerComponent,
                        PrizmScrollbarModule,
                        PrizmMapperPipeModule,
                    ], template: "<div class=\"calendar-host\">\n  <ng-container *ngIf=\"year || clickedMonth; else calendar\">\n    <prizm-primitive-year-month-pagination\n      class=\"z-pagination\"\n      [min]=\"computedMinViewedMonth\"\n      [max]=\"computedMaxViewedMonth\"\n      [value]=\"month\"\n      [hideButtons]=\"true\"\n      [monthActive]=\"!!clickedMonth\"\n      [yearActive]=\"!!year\"\n      (valueChange)=\"onPaginationValueChange($event)\"\n      (yearClick)=\"onPaginationYearClick($event)\"\n      (monthClick)=\"onPaginationMonthClick($event)\"\n      automation-id=\"prizm-calendar__pagination\"\n    ></prizm-primitive-year-month-pagination>\n    <prizm-scrollbar class=\"z-scrollbar\" automation-id=\"prizm-calendar__scrollbar\">\n      <prizm-primitive-year-picker\n        *ngIf=\"year; else monthPickerTemplate\"\n        [min]=\"min\"\n        [max]=\"max\"\n        [initialItem]=\"year\"\n        [value]=\"value\"\n        (yearClick)=\"onPickerYearClick($event)\"\n        automation-id=\"prizm-calendar__year\"\n      ></prizm-primitive-year-picker>\n      <ng-template #monthPickerTemplate>\n        <prizm-primitive-month-picker\n          [min]=\"min\"\n          [max]=\"max\"\n          [initialItem]=\"$any(clickedMonth)\"\n          [value]=\"value\"\n          [currentYear]=\"month.year\"\n          (monthClick)=\"onPickerMonthClick($event)\"\n          automation-id=\"prizm-calendar__year\"\n        ></prizm-primitive-month-picker>\n      </ng-template>\n    </prizm-scrollbar>\n  </ng-container>\n  <ng-template #calendar>\n    <prizm-primitive-year-month-pagination\n      class=\"z-pagination\"\n      [min]=\"computedMinViewedMonth\"\n      [max]=\"computedMaxViewedMonth\"\n      [value]=\"month\"\n      (valueChange)=\"onPaginationValueChange($event)\"\n      (yearClick)=\"onPaginationYearClick($event)\"\n      (monthClick)=\"onPaginationMonthClick($event)\"\n      automation-id=\"prizm-calendar__pagination\"\n    ></prizm-primitive-year-month-pagination>\n    <prizm-primitive-calendar\n      [showAdjacent]=\"showAdjacent\"\n      [value]=\"value\"\n      [month]=\"month\"\n      [daysWithStatus]=\"daysWithStatus\"\n      [disabledItemHandler]=\"disabledItemHandler | prizmMapper : disabledItemHandlerMapper : min : max\"\n      [markerHandler]=\"markerHandler\"\n      [hoveredItem]=\"hoveredItem\"\n      (hoveredItemChange)=\"onHoveredItemChange($event)\"\n      (dayClick)=\"onDayClick($event)\"\n      automation-id=\"prizm-calendar__calendar\"\n    >\n      <ng-container footer>\n        <ng-content select=\"[footer]\"></ng-content>\n      </ng-container>\n      <ng-container header>\n        <ng-content select=\"[header]\"></ng-content>\n      </ng-container>\n    </prizm-primitive-calendar>\n  </ng-template>\n</div>\n", styles: [":host{display:block;height:calc(18.25rem + var(--prizm-calendar-footer-height, 0));width:15.75rem;padding:16px;box-sizing:content-box}.z-scrollbar{height:16.25rem;width:16.875rem}.z-pagination{margin-bottom:1rem}\n"] }]
        }], propDecorators: { month: [{
                type: Input
            }], value: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], min: [{
                type: Input
            }], daysWithStatus: [{
                type: Input
            }], max: [{
                type: Input
            }], minViewedMonth: [{
                type: Input
            }], maxViewedMonth: [{
                type: Input
            }], hoveredItem: [{
                type: Input
            }], showAdjacent: [{
                type: Input
            }], markerHandler: [{
                type: Input
            }], dayClick: [{
                type: Output
            }], monthChange: [{
                type: Output
            }], hoveredItemChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hHLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXpELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BELE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLHVGQUF1RixDQUFDO0FBQ25KLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDOzs7OztBQWtCdEgsTUFBTSxPQUFPLHNCQUF1QixTQUFRLG1CQUFtQjtJQWhCL0Q7O1FBbUJFLFVBQUssR0FBZSxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFJOUMsVUFBSyxHQUFvQyxJQUFJLENBQUM7UUFJOUMsd0JBQW1CLEdBQWtDLDBCQUEwQixDQUFDO1FBSWhGLFFBQUcsR0FBRyxlQUFlLENBQUM7UUFJdEIsbUJBQWMsR0FBeUIsRUFBRSxDQUFDO1FBSTFDLFFBQUcsR0FBRyxjQUFjLENBQUM7UUFJckIsbUJBQWMsR0FBZSxlQUFlLENBQUM7UUFJN0MsbUJBQWMsR0FBZSxjQUFjLENBQUM7UUFJNUMsZ0JBQVcsR0FBb0IsSUFBSSxDQUFDO1FBSXBDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBSXBCLGtCQUFhLEdBQXVCLDRCQUE0QixDQUFDO1FBR3hELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBR3hDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUc3QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUUvQyxZQUFPLEdBQUcsYUFBYSxDQUFDO1FBRTFDLFNBQUksR0FBcUIsSUFBSSxDQUFDO1FBQzlCLGlCQUFZLEdBQXNCLElBQUksQ0FBQztRQUU5Qiw4QkFBeUIsR0FJaEMsQ0FBQyxtQkFBbUIsRUFBRSxHQUFhLEVBQUUsR0FBYSxFQUFFLEVBQUUsQ0FDdEQsQ0FBQyxJQUFjLEVBQVcsRUFBRSxDQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7S0EyRDVFO0lBekRDLElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDekYsQ0FBQztJQUVELElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDMUYsQ0FBQztJQUVNLHFCQUFxQixDQUFDLElBQWU7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVNLHNCQUFzQixDQUFDLEtBQWlCO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBYTtRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sa0JBQWtCLENBQUMsRUFBRSxLQUFLLEVBQWM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLHVCQUF1QixDQUFDLEtBQWlCO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sVUFBVSxDQUFDLEdBQWE7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLG1CQUFtQixDQUFDLEdBQW9CO1FBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8saUJBQWlCLENBQUMsS0FBaUI7UUFDekMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsR0FBb0I7UUFDM0MsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwRSxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7O21IQTNIVSxzQkFBc0I7dUdBQXRCLHNCQUFzQix3ZkN4Q25DLCtzRkFzRUEsK1FEdkNJLFlBQVksbUlBQ1osMENBQTBDLG9OQUMxQywrQkFBK0Isc09BQy9CLGlDQUFpQyx1S0FDakMsa0NBQWtDLHVMQUNsQyxvQkFBb0IsNElBQ3BCLHFCQUFxQjtBQUl2QjtJQUNDLGdCQUFnQixFQUFFOzhCQUNaLFVBQVU7cURBQTZCO0FBRTlDO0lBQ0MsZ0JBQWdCLEVBQUU7O3FEQUMyQjtBQUU5QztJQUNDLGdCQUFnQixFQUFFOzttRUFDNkQ7QUFFaEY7SUFDQyxnQkFBZ0IsRUFBRTs7bURBQ0c7QUFFdEI7SUFDQyxnQkFBZ0IsRUFBRTs7OERBQ3VCO0FBRTFDO0lBQ0MsZ0JBQWdCLEVBQUU7O21EQUNFO0FBRXJCO0lBQ0MsZ0JBQWdCLEVBQUU7OEJBQ0gsVUFBVTs4REFBbUI7QUFFN0M7SUFDQyxnQkFBZ0IsRUFBRTs4QkFDSCxVQUFVOzhEQUFrQjtBQUU1QztJQUNDLGdCQUFnQixFQUFFOzsyREFDaUI7QUFFcEM7SUFDQyxnQkFBZ0IsRUFBRTs7NERBQ0M7QUFFcEI7SUFDQyxnQkFBZ0IsRUFBRTs7NkRBQzhDOzJGQTNDdEQsc0JBQXNCO2tCQWhCbEMsU0FBUzsrQkFDRSxnQkFBZ0IsbUJBR1QsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxJQUFJLFdBQ1A7d0JBQ1AsWUFBWTt3QkFDWiwwQ0FBMEM7d0JBQzFDLCtCQUErQjt3QkFDL0IsaUNBQWlDO3dCQUNqQyxrQ0FBa0M7d0JBQ2xDLG9CQUFvQjt3QkFDcEIscUJBQXFCO3FCQUN0Qjs4QkFLRCxLQUFLO3NCQUZKLEtBQUs7Z0JBTU4sS0FBSztzQkFGSixLQUFLO2dCQU1OLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTixHQUFHO3NCQUZGLEtBQUs7Z0JBTU4sY0FBYztzQkFGYixLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFNTixjQUFjO3NCQUZiLEtBQUs7Z0JBTU4sY0FBYztzQkFGYixLQUFLO2dCQU1OLFdBQVc7c0JBRlYsS0FBSztnQkFNTixZQUFZO3NCQUZYLEtBQUs7Z0JBTU4sYUFBYTtzQkFGWixLQUFLO2dCQUtHLFFBQVE7c0JBRGhCLE1BQU07Z0JBSUUsV0FBVztzQkFEbkIsTUFBTTtnQkFJRSxpQkFBaUI7c0JBRHpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRGF5IH0gZnJvbSAnLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheSc7XG5pbXBvcnQgeyBQcml6bURheVJhbmdlIH0gZnJvbSAnLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheS1yYW5nZSc7XG5pbXBvcnQgeyBQUklaTV9GSVJTVF9EQVksIFBSSVpNX0xBU1RfREFZIH0gZnJvbSAnLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheXMuY29uc3QnO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQcml6bVllYXIgfSBmcm9tICcuLi8uLi9AY29yZS9kYXRlLXRpbWUveWVhcic7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2RlZmF1bHQtbWFya2VyLWhhbmRsZXInO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFByaXptQm9vbGVhbkhhbmRsZXIgfSBmcm9tICcuLi8uLi90eXBlcy9oYW5kbGVyJztcbmltcG9ydCB7IFByaXptTWFwcGVyIH0gZnJvbSAnLi4vLi4vdHlwZXMvbWFwcGVyJztcbmltcG9ydCB7IFByaXptTWFya2VySGFuZGxlciB9IGZyb20gJy4uLy4uL3R5cGVzL21hcmtlci1oYW5kbGVyJztcbmltcG9ydCB7IFByaXptV2l0aE9wdGlvbmFsTWluTWF4IH0gZnJvbSAnLi4vLi4vdHlwZXMvd2l0aC1vcHRpb25hbC1taW4tbWF4JztcbmltcG9ydCB7IHByaXptTnVsbGFibGVTYW1lIH0gZnJvbSAnLi4vLi4vdXRpbC9jb21tb24vbnVsbGFibGUtc2FtZSc7XG5pbXBvcnQgeyBQcml6bURheVdpdGhTdGF0dXMgfSBmcm9tICcuLi8uLi9AY29yZSc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaXptUHJpbWl0aXZlQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcm5hbC9wcmltaXRpdmUtY2FsZW5kYXInO1xuaW1wb3J0IHsgUHJpem1TY3JvbGxiYXJNb2R1bGUgfSBmcm9tICcuLi9zY3JvbGxiYXInO1xuaW1wb3J0IHsgUHJpem1NYXBwZXJQaXBlTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGlwZXMnO1xuaW1wb3J0IHsgUHJpem1QcmltaXRpdmVZZWFyTW9udGhQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJuYWwvcHJpbWl0aXZlLXllYXItbW9udGgtcGFnaW5hdGlvbi9wcmltaXRpdmUteWVhci1tb250aC1wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVByaW1pdGl2ZU1vbnRoUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vaW50ZXJuYWwvcHJpbWl0aXZlLW1vbnRoLXBpY2tlci9wcmltaXRpdmUtbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bVByaW1pdGl2ZVllYXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi9pbnRlcm5hbC9wcmltaXRpdmUteWVhci1waWNrZXIvcHJpbWl0aXZlLXllYXItcGlja2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWNhbGVuZGFyYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vY2FsZW5kYXIuY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1QcmltaXRpdmVZZWFyTW9udGhQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIFByaXptUHJpbWl0aXZlQ2FsZW5kYXJDb21wb25lbnQsXG4gICAgUHJpem1QcmltaXRpdmVZZWFyUGlja2VyQ29tcG9uZW50LFxuICAgIFByaXptUHJpbWl0aXZlTW9udGhQaWNrZXJDb21wb25lbnQsXG4gICAgUHJpem1TY3JvbGxiYXJNb2R1bGUsXG4gICAgUHJpem1NYXBwZXJQaXBlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUNhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCBpbXBsZW1lbnRzIFByaXptV2l0aE9wdGlvbmFsTWluTWF4PFByaXptRGF5PiB7XG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbW9udGg6IFByaXptTW9udGggPSBQcml6bU1vbnRoLmN1cnJlbnRMb2NhbCgpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgdmFsdWU6IFByaXptRGF5UmFuZ2UgfCBQcml6bURheSB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGlzYWJsZWRJdGVtSGFuZGxlcjogUHJpem1Cb29sZWFuSGFuZGxlcjxQcml6bURheT4gPSBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbiA9IFBSSVpNX0ZJUlNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRheXNXaXRoU3RhdHVzOiBQcml6bURheVdpdGhTdGF0dXNbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4ID0gUFJJWk1fTEFTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtaW5WaWV3ZWRNb250aDogUHJpem1Nb250aCA9IFBSSVpNX0ZJUlNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heFZpZXdlZE1vbnRoOiBQcml6bU1vbnRoID0gUFJJWk1fTEFTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBob3ZlcmVkSXRlbTogUHJpem1EYXkgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNob3dBZGphY2VudCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXJrZXJIYW5kbGVyOiBQcml6bU1hcmtlckhhbmRsZXIgPSBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBkYXlDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8UHJpem1EYXk+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IG1vbnRoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQcml6bU1vbnRoPigpO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBob3ZlcmVkSXRlbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UHJpem1EYXkgfCBudWxsPigpO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfY2FsZW5kYXInO1xuXG4gIHllYXI6IFByaXptWWVhciB8IG51bGwgPSBudWxsO1xuICBjbGlja2VkTW9udGg6IFByaXptTW9udGggfCBudWxsID0gbnVsbDtcblxuICByZWFkb25seSBkaXNhYmxlZEl0ZW1IYW5kbGVyTWFwcGVyOiBQcml6bU1hcHBlcjxcbiAgICBQcml6bUJvb2xlYW5IYW5kbGVyPFByaXptRGF5PixcbiAgICBQcml6bUJvb2xlYW5IYW5kbGVyPFByaXptRGF5PlxuICA+ID1cbiAgICAoZGlzYWJsZWRJdGVtSGFuZGxlciwgbWluOiBQcml6bURheSwgbWF4OiBQcml6bURheSkgPT5cbiAgICAoaXRlbTogUHJpem1EYXkpOiBib29sZWFuID0+XG4gICAgICBpdGVtLmRheUJlZm9yZShtaW4pIHx8IGl0ZW0uZGF5QWZ0ZXIobWF4KSB8fCBkaXNhYmxlZEl0ZW1IYW5kbGVyKGl0ZW0pO1xuXG4gIGdldCBjb21wdXRlZE1pblZpZXdlZE1vbnRoKCk6IFByaXptTW9udGgge1xuICAgIHJldHVybiB0aGlzLm1pblZpZXdlZE1vbnRoLm1vbnRoU2FtZU9yQWZ0ZXIodGhpcy5taW4pID8gdGhpcy5taW5WaWV3ZWRNb250aCA6IHRoaXMubWluO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkTWF4Vmlld2VkTW9udGgoKTogUHJpem1Nb250aCB7XG4gICAgcmV0dXJuIHRoaXMubWF4Vmlld2VkTW9udGgubW9udGhTYW1lT3JCZWZvcmUodGhpcy5tYXgpID8gdGhpcy5tYXhWaWV3ZWRNb250aCA6IHRoaXMubWF4O1xuICB9XG5cbiAgcHVibGljIG9uUGFnaW5hdGlvblllYXJDbGljayh5ZWFyOiBQcml6bVllYXIpOiB2b2lkIHtcbiAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIHRoaXMuY2xpY2tlZE1vbnRoID0gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBvblBhZ2luYXRpb25Nb250aENsaWNrKG1vbnRoOiBQcml6bU1vbnRoKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja2VkTW9udGggPSBtb250aDtcbiAgICB0aGlzLnllYXIgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIG9uUGlja2VyWWVhckNsaWNrKHsgeWVhciB9OiBQcml6bVllYXIpOiB2b2lkIHtcbiAgICB0aGlzLnllYXIgPSBudWxsO1xuICAgIHRoaXMudXBkYXRlVmlld2VkTW9udGgobmV3IFByaXptTW9udGgoeWVhciwgdGhpcy5tb250aC5tb250aCkpO1xuICB9XG5cbiAgcHVibGljIG9uUGlja2VyTW9udGhDbGljayh7IG1vbnRoIH06IFByaXptTW9udGgpOiB2b2lkIHtcbiAgICB0aGlzLmNsaWNrZWRNb250aCA9IG51bGw7XG4gICAgdGhpcy51cGRhdGVWaWV3ZWRNb250aChuZXcgUHJpem1Nb250aCh0aGlzLm1vbnRoLnllYXIsIG1vbnRoKSk7XG4gIH1cblxuICBwdWJsaWMgb25QYWdpbmF0aW9uVmFsdWVDaGFuZ2UobW9udGg6IFByaXptTW9udGgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVZpZXdlZE1vbnRoKG1vbnRoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRheUNsaWNrKGRheTogUHJpem1EYXkpOiB2b2lkIHtcbiAgICB0aGlzLmRheUNsaWNrLmVtaXQoZGF5KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkhvdmVyZWRJdGVtQ2hhbmdlKGRheTogUHJpem1EYXkgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVIb3ZlcmVkRGF5KGRheSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZpZXdlZE1vbnRoKG1vbnRoOiBQcml6bU1vbnRoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9udGgubW9udGhTYW1lKG1vbnRoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubW9udGggPSBtb250aDtcbiAgICB0aGlzLm1vbnRoQ2hhbmdlLmVtaXQobW9udGgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVIb3ZlcmVkRGF5KGRheTogUHJpem1EYXkgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKHByaXptTnVsbGFibGVTYW1lKHRoaXMuaG92ZXJlZEl0ZW0sIGRheSwgKGEsIGIpID0+IGEuZGF5U2FtZShiKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhvdmVyZWRJdGVtID0gZGF5O1xuICAgIHRoaXMuaG92ZXJlZEl0ZW1DaGFuZ2UuZW1pdChkYXkpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FsZW5kYXItaG9zdFwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwieWVhciB8fCBjbGlja2VkTW9udGg7IGVsc2UgY2FsZW5kYXJcIj5cbiAgICA8cHJpem0tcHJpbWl0aXZlLXllYXItbW9udGgtcGFnaW5hdGlvblxuICAgICAgY2xhc3M9XCJ6LXBhZ2luYXRpb25cIlxuICAgICAgW21pbl09XCJjb21wdXRlZE1pblZpZXdlZE1vbnRoXCJcbiAgICAgIFttYXhdPVwiY29tcHV0ZWRNYXhWaWV3ZWRNb250aFwiXG4gICAgICBbdmFsdWVdPVwibW9udGhcIlxuICAgICAgW2hpZGVCdXR0b25zXT1cInRydWVcIlxuICAgICAgW21vbnRoQWN0aXZlXT1cIiEhY2xpY2tlZE1vbnRoXCJcbiAgICAgIFt5ZWFyQWN0aXZlXT1cIiEheWVhclwiXG4gICAgICAodmFsdWVDaGFuZ2UpPVwib25QYWdpbmF0aW9uVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoeWVhckNsaWNrKT1cIm9uUGFnaW5hdGlvblllYXJDbGljaygkZXZlbnQpXCJcbiAgICAgIChtb250aENsaWNrKT1cIm9uUGFnaW5hdGlvbk1vbnRoQ2xpY2soJGV2ZW50KVwiXG4gICAgICBhdXRvbWF0aW9uLWlkPVwicHJpem0tY2FsZW5kYXJfX3BhZ2luYXRpb25cIlxuICAgID48L3ByaXptLXByaW1pdGl2ZS15ZWFyLW1vbnRoLXBhZ2luYXRpb24+XG4gICAgPHByaXptLXNjcm9sbGJhciBjbGFzcz1cInotc2Nyb2xsYmFyXCIgYXV0b21hdGlvbi1pZD1cInByaXptLWNhbGVuZGFyX19zY3JvbGxiYXJcIj5cbiAgICAgIDxwcml6bS1wcmltaXRpdmUteWVhci1waWNrZXJcbiAgICAgICAgKm5nSWY9XCJ5ZWFyOyBlbHNlIG1vbnRoUGlja2VyVGVtcGxhdGVcIlxuICAgICAgICBbbWluXT1cIm1pblwiXG4gICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgW2luaXRpYWxJdGVtXT1cInllYXJcIlxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAoeWVhckNsaWNrKT1cIm9uUGlja2VyWWVhckNsaWNrKCRldmVudClcIlxuICAgICAgICBhdXRvbWF0aW9uLWlkPVwicHJpem0tY2FsZW5kYXJfX3llYXJcIlxuICAgICAgPjwvcHJpem0tcHJpbWl0aXZlLXllYXItcGlja2VyPlxuICAgICAgPG5nLXRlbXBsYXRlICNtb250aFBpY2tlclRlbXBsYXRlPlxuICAgICAgICA8cHJpem0tcHJpbWl0aXZlLW1vbnRoLXBpY2tlclxuICAgICAgICAgIFttaW5dPVwibWluXCJcbiAgICAgICAgICBbbWF4XT1cIm1heFwiXG4gICAgICAgICAgW2luaXRpYWxJdGVtXT1cIiRhbnkoY2xpY2tlZE1vbnRoKVwiXG4gICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICBbY3VycmVudFllYXJdPVwibW9udGgueWVhclwiXG4gICAgICAgICAgKG1vbnRoQ2xpY2spPVwib25QaWNrZXJNb250aENsaWNrKCRldmVudClcIlxuICAgICAgICAgIGF1dG9tYXRpb24taWQ9XCJwcml6bS1jYWxlbmRhcl9feWVhclwiXG4gICAgICAgID48L3ByaXptLXByaW1pdGl2ZS1tb250aC1waWNrZXI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvcHJpem0tc2Nyb2xsYmFyPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLXRlbXBsYXRlICNjYWxlbmRhcj5cbiAgICA8cHJpem0tcHJpbWl0aXZlLXllYXItbW9udGgtcGFnaW5hdGlvblxuICAgICAgY2xhc3M9XCJ6LXBhZ2luYXRpb25cIlxuICAgICAgW21pbl09XCJjb21wdXRlZE1pblZpZXdlZE1vbnRoXCJcbiAgICAgIFttYXhdPVwiY29tcHV0ZWRNYXhWaWV3ZWRNb250aFwiXG4gICAgICBbdmFsdWVdPVwibW9udGhcIlxuICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uUGFnaW5hdGlvblZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKHllYXJDbGljayk9XCJvblBhZ2luYXRpb25ZZWFyQ2xpY2soJGV2ZW50KVwiXG4gICAgICAobW9udGhDbGljayk9XCJvblBhZ2luYXRpb25Nb250aENsaWNrKCRldmVudClcIlxuICAgICAgYXV0b21hdGlvbi1pZD1cInByaXptLWNhbGVuZGFyX19wYWdpbmF0aW9uXCJcbiAgICA+PC9wcml6bS1wcmltaXRpdmUteWVhci1tb250aC1wYWdpbmF0aW9uPlxuICAgIDxwcml6bS1wcmltaXRpdmUtY2FsZW5kYXJcbiAgICAgIFtzaG93QWRqYWNlbnRdPVwic2hvd0FkamFjZW50XCJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICBbbW9udGhdPVwibW9udGhcIlxuICAgICAgW2RheXNXaXRoU3RhdHVzXT1cImRheXNXaXRoU3RhdHVzXCJcbiAgICAgIFtkaXNhYmxlZEl0ZW1IYW5kbGVyXT1cImRpc2FibGVkSXRlbUhhbmRsZXIgfCBwcml6bU1hcHBlciA6IGRpc2FibGVkSXRlbUhhbmRsZXJNYXBwZXIgOiBtaW4gOiBtYXhcIlxuICAgICAgW21hcmtlckhhbmRsZXJdPVwibWFya2VySGFuZGxlclwiXG4gICAgICBbaG92ZXJlZEl0ZW1dPVwiaG92ZXJlZEl0ZW1cIlxuICAgICAgKGhvdmVyZWRJdGVtQ2hhbmdlKT1cIm9uSG92ZXJlZEl0ZW1DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAoZGF5Q2xpY2spPVwib25EYXlDbGljaygkZXZlbnQpXCJcbiAgICAgIGF1dG9tYXRpb24taWQ9XCJwcml6bS1jYWxlbmRhcl9fY2FsZW5kYXJcIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgZm9vdGVyPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZm9vdGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciBoZWFkZXI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltoZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9wcml6bS1wcmltaXRpdmUtY2FsZW5kYXI+XG4gIDwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbiJdfQ==