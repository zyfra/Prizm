import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_CALENDAR_DATA_STREAM } from '../../../tokens/calendar-data-stream';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
import * as i1 from "../../calendar/calendar.component";
import * as i2 from "../../../pipes/mapper/mapper.pipe";
import * as i3 from "rxjs";
import * as i4 from "@prizm-ui/helpers";
/**
 * @internal
 */
export class PrizmPrimitiveCalendarRangeComponent extends PrizmAbstractTestId {
    constructor(valueChanges, changeDetectorRef, destroy$) {
        super();
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.markerHandler = PRIZM_DEFAULT_MARKER_HANDLER;
        this.defaultViewedMonthFirst = PrizmMonth.currentLocal();
        this.defaultViewedMonthSecond = PrizmMonth.currentLocal().append({ month: 1 });
        this.min = PRIZM_FIRST_DAY;
        this.max = PRIZM_LAST_DAY;
        this.value = null;
        this.dayClick = new EventEmitter();
        this.testId_ = 'ui_primitive_calendar_range';
        this.hoveredItem = null;
        this.userViewedMonthFirst = this.defaultViewedMonthFirst;
        this.userViewedMonthSecond = this.defaultViewedMonthSecond;
        this.monthOffset = (value, offset) => value.append({ month: offset });
        if (!valueChanges) {
            return;
        }
        valueChanges
            .pipe(tap(() => changeDetectorRef.markForCheck()), takeUntil(destroy$))
            .subscribe(value => {
            this.value = value;
            this.updateViewedMonths();
        });
    }
    get cappedUserViewedMonthSecond() {
        return this.userViewedMonthSecond.monthBefore(this.max) ? this.userViewedMonthSecond : this.max;
    }
    get cappedUserViewedMonthFirst() {
        return this.userViewedMonthFirst.monthSameOrBefore(this.userViewedMonthSecond)
            ? this.userViewedMonthFirst
            : this.userViewedMonthSecond;
    }
    ngOnInit() {
        this.setInitialMonths();
    }
    onSectionFirstViewedMonth(month) {
        this.userViewedMonthFirst = month;
        if (this.userViewedMonthSecond.year < this.userViewedMonthFirst.year) {
            this.userViewedMonthSecond = this.userViewedMonthSecond.append({
                year: month.year - this.userViewedMonthSecond.year,
            });
        }
    }
    onSectionSecondViewedMonth(month) {
        this.userViewedMonthSecond = month;
        if (this.userViewedMonthFirst.year > this.userViewedMonthSecond.year) {
            this.userViewedMonthFirst = this.userViewedMonthFirst.append({
                year: month.year - this.userViewedMonthFirst.year,
            });
        }
    }
    onDayClick(day) {
        this.dayClick.emit(day);
    }
    setInitialMonths() {
        if (!this.value) {
            this.userViewedMonthSecond = this.updatedViewedMonthSecond(this.defaultViewedMonthSecond);
            this.userViewedMonthFirst = this.updatedViewedMonthFirst(this.defaultViewedMonthFirst);
        }
        else {
            this.userViewedMonthFirst = this.updatedViewedMonthFirst(this.value.from);
            this.userViewedMonthSecond = this.updatedViewedMonthSecond(this.value.to.monthSame(this.value.from) ? this.value.to.append({ month: 1 }) : this.value.to);
        }
    }
    updatedViewedMonthSecond(month) {
        if (month.monthSameOrAfter(this.max)) {
            return this.max;
        }
        if (month.monthBefore(this.min)) {
            return this.min.append({ month: 1 });
        }
        return month;
    }
    updatedViewedMonthFirst(month) {
        if (month.monthSameOrAfter(this.userViewedMonthSecond)) {
            return this.userViewedMonthSecond.append({ month: -1 });
        }
        if (month.monthSameOrBefore(this.min)) {
            return this.min;
        }
        return month;
    }
    updateViewedMonths() {
        this.userViewedMonthFirst = this.value === null ? this.defaultViewedMonthFirst : this.value.from;
        this.userViewedMonthSecond = this.value === null ? this.defaultViewedMonthSecond : this.value.to;
        if (this.userViewedMonthFirst.monthSame(this.userViewedMonthSecond)) {
            this.userViewedMonthSecond = this.userViewedMonthSecond.append({ month: 1 });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmPrimitiveCalendarRangeComponent, deps: [{ token: PRIZM_CALENDAR_DATA_STREAM, optional: true }, { token: ChangeDetectorRef }, { token: PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmPrimitiveCalendarRangeComponent, selector: "prizm-primitive-calendar-range", inputs: { disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", defaultViewedMonthFirst: "defaultViewedMonthFirst", defaultViewedMonthSecond: "defaultViewedMonthSecond", min: "min", max: "max", value: "value" }, outputs: { dayClick: "dayClick" }, providers: [PrizmDestroyService], usesInheritance: true, ngImport: i0, template: "<prizm-calendar\n  [(hoveredItem)]=\"hoveredItem\"\n  [min]=\"min\"\n  [max]=\"max\"\n  [month]=\"userViewedMonthFirst\"\n  [markerHandler]=\"markerHandler\"\n  [maxViewedMonth]=\"cappedUserViewedMonthSecond | prizmMapper : monthOffset : -1\"\n  [value]=\"value\"\n  [disabledItemHandler]=\"disabledItemHandler\"\n  [showAdjacent]=\"false\"\n  (dayClick)=\"onDayClick($event)\"\n  (monthChange)=\"onSectionFirstViewedMonth($event)\"\n>\n  <ng-container footer> <ng-content select=\"[footerFrom]\"></ng-content></ng-container>\n  <ng-container header> <ng-content select=\"[headerFrom]\"></ng-content></ng-container>\n</prizm-calendar>\n\n<prizm-calendar\n  [(hoveredItem)]=\"hoveredItem\"\n  [min]=\"min\"\n  [max]=\"max\"\n  [month]=\"userViewedMonthSecond\"\n  [markerHandler]=\"markerHandler\"\n  [minViewedMonth]=\"cappedUserViewedMonthFirst | prizmMapper : monthOffset : 1\"\n  [value]=\"value\"\n  [disabledItemHandler]=\"disabledItemHandler\"\n  [showAdjacent]=\"false\"\n  (dayClick)=\"onDayClick($event)\"\n  (monthChange)=\"onSectionSecondViewedMonth($event)\"\n>\n  <ng-container footer>\n    <ng-content select=\"[footerTo]\"></ng-content>\n  </ng-container>\n  <ng-container header>\n    <ng-content select=\"[headerTo]\"></ng-content>\n  </ng-container>\n</prizm-calendar>\n", styles: [":host{display:flex}\n"], dependencies: [{ kind: "component", type: i1.PrizmCalendarComponent, selector: "prizm-calendar", inputs: ["month", "value", "disabledItemHandler", "min", "daysWithStatus", "max", "minViewedMonth", "maxViewedMonth", "hoveredItem", "showAdjacent", "markerHandler"], outputs: ["dayClick", "monthChange", "hoveredItemChange"] }, { kind: "pipe", type: i2.PrizmMapperPipe, name: "prizmMapper" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmPrimitiveCalendarRangeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmPrimitiveCalendarRangeComponent.prototype, "markerHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveCalendarRangeComponent.prototype, "defaultViewedMonthFirst", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveCalendarRangeComponent.prototype, "defaultViewedMonthSecond", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveCalendarRangeComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveCalendarRangeComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmPrimitiveCalendarRangeComponent.prototype, "value", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmPrimitiveCalendarRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-primitive-calendar-range`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [PrizmDestroyService], template: "<prizm-calendar\n  [(hoveredItem)]=\"hoveredItem\"\n  [min]=\"min\"\n  [max]=\"max\"\n  [month]=\"userViewedMonthFirst\"\n  [markerHandler]=\"markerHandler\"\n  [maxViewedMonth]=\"cappedUserViewedMonthSecond | prizmMapper : monthOffset : -1\"\n  [value]=\"value\"\n  [disabledItemHandler]=\"disabledItemHandler\"\n  [showAdjacent]=\"false\"\n  (dayClick)=\"onDayClick($event)\"\n  (monthChange)=\"onSectionFirstViewedMonth($event)\"\n>\n  <ng-container footer> <ng-content select=\"[footerFrom]\"></ng-content></ng-container>\n  <ng-container header> <ng-content select=\"[headerFrom]\"></ng-content></ng-container>\n</prizm-calendar>\n\n<prizm-calendar\n  [(hoveredItem)]=\"hoveredItem\"\n  [min]=\"min\"\n  [max]=\"max\"\n  [month]=\"userViewedMonthSecond\"\n  [markerHandler]=\"markerHandler\"\n  [minViewedMonth]=\"cappedUserViewedMonthFirst | prizmMapper : monthOffset : 1\"\n  [value]=\"value\"\n  [disabledItemHandler]=\"disabledItemHandler\"\n  [showAdjacent]=\"false\"\n  (dayClick)=\"onDayClick($event)\"\n  (monthChange)=\"onSectionSecondViewedMonth($event)\"\n>\n  <ng-container footer>\n    <ng-content select=\"[footerTo]\"></ng-content>\n  </ng-container>\n  <ng-container header>\n    <ng-content select=\"[headerTo]\"></ng-content>\n  </ng-container>\n</prizm-calendar>\n", styles: [":host{display:flex}\n"] }]
        }], ctorParameters: function () { return [{ type: i3.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_CALENDAR_DATA_STREAM]
                }, {
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: i4.PrizmDestroyService, decorators: [{
                    type: Inject,
                    args: [PrizmDestroyService]
                }] }]; }, propDecorators: { disabledItemHandler: [{
                type: Input
            }], markerHandler: [{
                type: Input
            }], defaultViewedMonthFirst: [{
                type: Input
            }], defaultViewedMonthSecond: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], value: [{
                type: Input
            }], dayClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbWl0aXZlLWNhbGVuZGFyLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW50ZXJuYWwvcHJpbWl0aXZlLWNhbGVuZGFyLXJhbmdlL3ByaW1pdGl2ZS1jYWxlbmRhci1yYW5nZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2ludGVybmFsL3ByaW1pdGl2ZS1jYWxlbmRhci1yYW5nZS9wcmltaXRpdmUtY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXhELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1B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Q0gsQ0FBQzs4R0FuSlUsb0NBQW9DLGtCQXdDckMsMEJBQTBCLDZCQUcxQixpQkFBaUIsYUFDakIsbUJBQW1CO2tHQTVDbEIsb0NBQW9DLHNVQUZwQyxDQUFDLG1CQUFtQixDQUFDLGlEQ25DbEMsMHdDQXFDQTs7QURHRTtJQURDLGdCQUFnQixFQUFFOztpRkFDNkQ7QUFJaEY7SUFEQyxnQkFBZ0IsRUFBRTs7MkVBQzhDO0FBSWpFO0lBREMsZ0JBQWdCLEVBQUU7O3FGQUNpQztBQUlwRDtJQURDLGdCQUFnQixFQUFFOztzRkFDdUQ7QUFJMUU7SUFEQyxnQkFBZ0IsRUFBRTs7aUVBQ0c7QUFJdEI7SUFEQyxnQkFBZ0IsRUFBRTs7aUVBQ0U7QUFJckI7SUFEQyxnQkFBZ0IsRUFBRTs7bUVBQ2dCOzJGQTNCeEIsb0NBQW9DO2tCQVBoRCxTQUFTOytCQUNFLGdDQUFnQyxtQkFHekIsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLG1CQUFtQixDQUFDOzswQkEwQzdCLE1BQU07MkJBQUMsMEJBQTBCOzswQkFDakMsUUFBUTs7MEJBRVIsTUFBTTsyQkFBQyxpQkFBaUI7OzBCQUN4QixNQUFNOzJCQUFDLG1CQUFtQjs0Q0F6QzdCLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTixhQUFhO3NCQUZaLEtBQUs7Z0JBTU4sdUJBQXVCO3NCQUZ0QixLQUFLO2dCQU1OLHdCQUF3QjtzQkFGdkIsS0FBSztnQkFNTixHQUFHO3NCQUZGLEtBQUs7Z0JBTU4sR0FBRztzQkFGRixLQUFLO2dCQU1OLEtBQUs7c0JBRkosS0FBSztnQkFLRyxRQUFRO3NCQURoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptRGF5IH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheSc7XG5pbXBvcnQgeyBQcml6bURheVJhbmdlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheS1yYW5nZSc7XG5pbXBvcnQgeyBQUklaTV9GSVJTVF9EQVksIFBSSVpNX0xBU1RfREFZIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheXMuY29uc3QnO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2RlZmF1bHQtbWFya2VyLWhhbmRsZXInO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0NBTEVOREFSX0RBVEFfU1RSRUFNIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2NhbGVuZGFyLWRhdGEtc3RyZWFtJztcbmltcG9ydCB7IFByaXptQm9vbGVhbkhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9oYW5kbGVyJztcbmltcG9ydCB7IFByaXptTWFwcGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvbWFwcGVyJztcbmltcG9ydCB7IFByaXptTWFya2VySGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL21hcmtlci1oYW5kbGVyJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9pbnRlcmFjdGl2ZSc7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLXByaW1pdGl2ZS1jYWxlbmRhci1yYW5nZWAsXG4gIHRlbXBsYXRlVXJsOiBgLi9wcmltaXRpdmUtY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFtgLi9wcmltaXRpdmUtY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVByaW1pdGl2ZUNhbGVuZGFyUmFuZ2VDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBQcml6bUJvb2xlYW5IYW5kbGVyPFByaXptRGF5PiA9IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWFya2VySGFuZGxlcjogUHJpem1NYXJrZXJIYW5kbGVyID0gUFJJWk1fREVGQVVMVF9NQVJLRVJfSEFORExFUjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRlZmF1bHRWaWV3ZWRNb250aEZpcnN0ID0gUHJpem1Nb250aC5jdXJyZW50TG9jYWwoKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRlZmF1bHRWaWV3ZWRNb250aFNlY29uZCA9IFByaXptTW9udGguY3VycmVudExvY2FsKCkuYXBwZW5kKHsgbW9udGg6IDEgfSk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtaW4gPSBQUklaTV9GSVJTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXggPSBQUklaTV9MQVNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHZhbHVlOiBQcml6bURheVJhbmdlIHwgbnVsbCA9IG51bGw7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGRheUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxQcml6bURheT4oKTtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX3ByaW1pdGl2ZV9jYWxlbmRhcl9yYW5nZSc7XG5cbiAgaG92ZXJlZEl0ZW06IFByaXptRGF5IHwgbnVsbCA9IG51bGw7XG5cbiAgdXNlclZpZXdlZE1vbnRoRmlyc3Q6IFByaXptTW9udGggPSB0aGlzLmRlZmF1bHRWaWV3ZWRNb250aEZpcnN0O1xuICB1c2VyVmlld2VkTW9udGhTZWNvbmQ6IFByaXptTW9udGggPSB0aGlzLmRlZmF1bHRWaWV3ZWRNb250aFNlY29uZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBSSVpNX0NBTEVOREFSX0RBVEFfU1RSRUFNKVxuICAgIEBPcHRpb25hbCgpXG4gICAgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPFByaXptRGF5UmFuZ2UgfCBudWxsPiB8IG51bGwsXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUHJpem1EZXN0cm95U2VydmljZSkgZGVzdHJveSQ6IFByaXptRGVzdHJveVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpZiAoIXZhbHVlQ2hhbmdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiBjaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSksXG4gICAgICAgIHRha2VVbnRpbChkZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlVmlld2VkTW9udGhzKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldCBjYXBwZWRVc2VyVmlld2VkTW9udGhTZWNvbmQoKTogUHJpem1Nb250aCB7XG4gICAgcmV0dXJuIHRoaXMudXNlclZpZXdlZE1vbnRoU2Vjb25kLm1vbnRoQmVmb3JlKHRoaXMubWF4KSA/IHRoaXMudXNlclZpZXdlZE1vbnRoU2Vjb25kIDogdGhpcy5tYXg7XG4gIH1cblxuICBnZXQgY2FwcGVkVXNlclZpZXdlZE1vbnRoRmlyc3QoKTogUHJpem1Nb250aCB7XG4gICAgcmV0dXJuIHRoaXMudXNlclZpZXdlZE1vbnRoRmlyc3QubW9udGhTYW1lT3JCZWZvcmUodGhpcy51c2VyVmlld2VkTW9udGhTZWNvbmQpXG4gICAgICA/IHRoaXMudXNlclZpZXdlZE1vbnRoRmlyc3RcbiAgICAgIDogdGhpcy51c2VyVmlld2VkTW9udGhTZWNvbmQ7XG4gIH1cblxuICBtb250aE9mZnNldDogUHJpem1NYXBwZXI8UHJpem1Nb250aCwgUHJpem1Nb250aD4gPSAodmFsdWUsIG9mZnNldDogbnVtYmVyKSA9PlxuICAgIHZhbHVlLmFwcGVuZCh7IG1vbnRoOiBvZmZzZXQgfSk7XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0SW5pdGlhbE1vbnRocygpO1xuICB9XG5cbiAgcHVibGljIG9uU2VjdGlvbkZpcnN0Vmlld2VkTW9udGgobW9udGg6IFByaXptTW9udGgpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJWaWV3ZWRNb250aEZpcnN0ID0gbW9udGg7XG5cbiAgICBpZiAodGhpcy51c2VyVmlld2VkTW9udGhTZWNvbmQueWVhciA8IHRoaXMudXNlclZpZXdlZE1vbnRoRmlyc3QueWVhcikge1xuICAgICAgdGhpcy51c2VyVmlld2VkTW9udGhTZWNvbmQgPSB0aGlzLnVzZXJWaWV3ZWRNb250aFNlY29uZC5hcHBlbmQoe1xuICAgICAgICB5ZWFyOiBtb250aC55ZWFyIC0gdGhpcy51c2VyVmlld2VkTW9udGhTZWNvbmQueWVhcixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblNlY3Rpb25TZWNvbmRWaWV3ZWRNb250aChtb250aDogUHJpem1Nb250aCk6IHZvaWQge1xuICAgIHRoaXMudXNlclZpZXdlZE1vbnRoU2Vjb25kID0gbW9udGg7XG5cbiAgICBpZiAodGhpcy51c2VyVmlld2VkTW9udGhGaXJzdC55ZWFyID4gdGhpcy51c2VyVmlld2VkTW9udGhTZWNvbmQueWVhcikge1xuICAgICAgdGhpcy51c2VyVmlld2VkTW9udGhGaXJzdCA9IHRoaXMudXNlclZpZXdlZE1vbnRoRmlyc3QuYXBwZW5kKHtcbiAgICAgICAgeWVhcjogbW9udGgueWVhciAtIHRoaXMudXNlclZpZXdlZE1vbnRoRmlyc3QueWVhcixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkRheUNsaWNrKGRheTogUHJpem1EYXkpOiB2b2lkIHtcbiAgICB0aGlzLmRheUNsaWNrLmVtaXQoZGF5KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SW5pdGlhbE1vbnRocygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudXNlclZpZXdlZE1vbnRoU2Vjb25kID0gdGhpcy51cGRhdGVkVmlld2VkTW9udGhTZWNvbmQodGhpcy5kZWZhdWx0Vmlld2VkTW9udGhTZWNvbmQpO1xuXG4gICAgICB0aGlzLnVzZXJWaWV3ZWRNb250aEZpcnN0ID0gdGhpcy51cGRhdGVkVmlld2VkTW9udGhGaXJzdCh0aGlzLmRlZmF1bHRWaWV3ZWRNb250aEZpcnN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyVmlld2VkTW9udGhGaXJzdCA9IHRoaXMudXBkYXRlZFZpZXdlZE1vbnRoRmlyc3QodGhpcy52YWx1ZS5mcm9tKTtcbiAgICAgIHRoaXMudXNlclZpZXdlZE1vbnRoU2Vjb25kID0gdGhpcy51cGRhdGVkVmlld2VkTW9udGhTZWNvbmQoXG4gICAgICAgIHRoaXMudmFsdWUudG8ubW9udGhTYW1lKHRoaXMudmFsdWUuZnJvbSkgPyB0aGlzLnZhbHVlLnRvLmFwcGVuZCh7IG1vbnRoOiAxIH0pIDogdGhpcy52YWx1ZS50b1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZWRWaWV3ZWRNb250aFNlY29uZChtb250aDogUHJpem1Nb250aCk6IFByaXptTW9udGgge1xuICAgIGlmIChtb250aC5tb250aFNhbWVPckFmdGVyKHRoaXMubWF4KSkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4O1xuICAgIH1cblxuICAgIGlmIChtb250aC5tb250aEJlZm9yZSh0aGlzLm1pbikpIHtcbiAgICAgIHJldHVybiB0aGlzLm1pbi5hcHBlbmQoeyBtb250aDogMSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGg7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZWRWaWV3ZWRNb250aEZpcnN0KG1vbnRoOiBQcml6bU1vbnRoKTogUHJpem1Nb250aCB7XG4gICAgaWYgKG1vbnRoLm1vbnRoU2FtZU9yQWZ0ZXIodGhpcy51c2VyVmlld2VkTW9udGhTZWNvbmQpKSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyVmlld2VkTW9udGhTZWNvbmQuYXBwZW5kKHsgbW9udGg6IC0xIH0pO1xuICAgIH1cblxuICAgIGlmIChtb250aC5tb250aFNhbWVPckJlZm9yZSh0aGlzLm1pbikpIHtcbiAgICAgIHJldHVybiB0aGlzLm1pbjtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9udGg7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZpZXdlZE1vbnRocygpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJWaWV3ZWRNb250aEZpcnN0ID0gdGhpcy52YWx1ZSA9PT0gbnVsbCA/IHRoaXMuZGVmYXVsdFZpZXdlZE1vbnRoRmlyc3QgOiB0aGlzLnZhbHVlLmZyb207XG4gICAgdGhpcy51c2VyVmlld2VkTW9udGhTZWNvbmQgPSB0aGlzLnZhbHVlID09PSBudWxsID8gdGhpcy5kZWZhdWx0Vmlld2VkTW9udGhTZWNvbmQgOiB0aGlzLnZhbHVlLnRvO1xuXG4gICAgaWYgKHRoaXMudXNlclZpZXdlZE1vbnRoRmlyc3QubW9udGhTYW1lKHRoaXMudXNlclZpZXdlZE1vbnRoU2Vjb25kKSkge1xuICAgICAgdGhpcy51c2VyVmlld2VkTW9udGhTZWNvbmQgPSB0aGlzLnVzZXJWaWV3ZWRNb250aFNlY29uZC5hcHBlbmQoeyBtb250aDogMSB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxwcml6bS1jYWxlbmRhclxuICBbKGhvdmVyZWRJdGVtKV09XCJob3ZlcmVkSXRlbVwiXG4gIFttaW5dPVwibWluXCJcbiAgW21heF09XCJtYXhcIlxuICBbbW9udGhdPVwidXNlclZpZXdlZE1vbnRoRmlyc3RcIlxuICBbbWFya2VySGFuZGxlcl09XCJtYXJrZXJIYW5kbGVyXCJcbiAgW21heFZpZXdlZE1vbnRoXT1cImNhcHBlZFVzZXJWaWV3ZWRNb250aFNlY29uZCB8IHByaXptTWFwcGVyIDogbW9udGhPZmZzZXQgOiAtMVwiXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gIFtkaXNhYmxlZEl0ZW1IYW5kbGVyXT1cImRpc2FibGVkSXRlbUhhbmRsZXJcIlxuICBbc2hvd0FkamFjZW50XT1cImZhbHNlXCJcbiAgKGRheUNsaWNrKT1cIm9uRGF5Q2xpY2soJGV2ZW50KVwiXG4gIChtb250aENoYW5nZSk9XCJvblNlY3Rpb25GaXJzdFZpZXdlZE1vbnRoKCRldmVudClcIlxuPlxuICA8bmctY29udGFpbmVyIGZvb3Rlcj4gPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3RlckZyb21dXCI+PC9uZy1jb250ZW50PjwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyIGhlYWRlcj4gPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2hlYWRlckZyb21dXCI+PC9uZy1jb250ZW50PjwvbmctY29udGFpbmVyPlxuPC9wcml6bS1jYWxlbmRhcj5cblxuPHByaXptLWNhbGVuZGFyXG4gIFsoaG92ZXJlZEl0ZW0pXT1cImhvdmVyZWRJdGVtXCJcbiAgW21pbl09XCJtaW5cIlxuICBbbWF4XT1cIm1heFwiXG4gIFttb250aF09XCJ1c2VyVmlld2VkTW9udGhTZWNvbmRcIlxuICBbbWFya2VySGFuZGxlcl09XCJtYXJrZXJIYW5kbGVyXCJcbiAgW21pblZpZXdlZE1vbnRoXT1cImNhcHBlZFVzZXJWaWV3ZWRNb250aEZpcnN0IHwgcHJpem1NYXBwZXIgOiBtb250aE9mZnNldCA6IDFcIlxuICBbdmFsdWVdPVwidmFsdWVcIlxuICBbZGlzYWJsZWRJdGVtSGFuZGxlcl09XCJkaXNhYmxlZEl0ZW1IYW5kbGVyXCJcbiAgW3Nob3dBZGphY2VudF09XCJmYWxzZVwiXG4gIChkYXlDbGljayk9XCJvbkRheUNsaWNrKCRldmVudClcIlxuICAobW9udGhDaGFuZ2UpPVwib25TZWN0aW9uU2Vjb25kVmlld2VkTW9udGgoJGV2ZW50KVwiXG4+XG4gIDxuZy1jb250YWluZXIgZm9vdGVyPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltmb290ZXJUb11cIj48L25nLWNvbnRlbnQ+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyIGhlYWRlcj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbaGVhZGVyVG9dXCI+PC9uZy1jb250ZW50PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvcHJpem0tY2FsZW5kYXI+XG4iXX0=