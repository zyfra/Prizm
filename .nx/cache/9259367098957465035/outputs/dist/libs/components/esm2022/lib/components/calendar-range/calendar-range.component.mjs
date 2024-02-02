import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Optional, Output, } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmDay } from '../../@core/date-time/day';
import { PrizmDayRange } from '../../@core/date-time/day-range';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../@core/date-time/days.const';
import { PrizmMonth } from '../../@core/date-time/month';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../constants/default-marker-handler';
import { PRIZM_MAX_DAY_RANGE_LENGTH_MAPPER } from '../../constants/max-day-range-length-mapper';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { PRIZM_CALENDAR_DATA_STREAM } from '../../tokens/calendar-data-stream';
import { prizmNullableSame } from '../../util/common/nullable-same';
import { PRIZM_OTHER_DATE_TEXT } from '../../tokens/i18n';
import { prizmI18nInitWithKey } from '../../services';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmMapperPipeModule } from '../../pipes';
import { PrizmButtonModule } from '../button';
import { PrizmPreventDefaultModule } from '../../directives';
import { PrizmCalendarComponent } from '../calendar';
import { PrizmIconComponent } from '../icon';
import { PrizmDataListComponent } from '../data-list';
import { PrizmPrimitiveCalendarRangeModule } from '../internal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../pipes/mapper/mapper.pipe";
import * as i3 from "../button/button.component";
import * as i4 from "../../directives/prevent-default/prevent-default.directive";
import * as i5 from "../internal/primitive-calendar-range/primitive-calendar-range.component";
import * as i6 from "rxjs";
import * as i7 from "@prizm-ui/helpers";
export class PrizmCalendarRangeComponent extends PrizmAbstractTestId {
    constructor(valueChanges, changeDetectorRef, destroy$, otherDateText$) {
        super();
        this.otherDateText$ = otherDateText$;
        this.defaultViewedMonth = PrizmMonth.currentLocal();
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.markerHandler = PRIZM_DEFAULT_MARKER_HANDLER;
        this.items = [];
        this.min = PRIZM_FIRST_DAY;
        this.max = PRIZM_LAST_DAY;
        this.minLength = null;
        this.maxLength = null;
        this.value = null;
        this.valueChange = new EventEmitter();
        /** @deprecated TODO: 2.0 remove */
        this.rangeChange = new EventEmitter();
        this.testId_ = 'ui_calendar_range';
        this.maxLengthMapper = PRIZM_MAX_DAY_RANGE_LENGTH_MAPPER;
        this.getEndRangeMonthOrShift = item => {
            if (!this.value || !this.value.to)
                return item.append({ month: 1 });
            return this.value.to;
        };
        this.mapper = (items, min, max, minLength, otherDateText) => [
            ...items.filter(item => (minLength === null || item.range.from.append(minLength).daySameOrBefore(item.range.to)) &&
                item.range.to.daySameOrAfter(min) &&
                (max === null || item.range.from.daySameOrBefore(max))),
            otherDateText,
        ];
        if (!valueChanges) {
            return;
        }
        valueChanges
            .pipe(tap(() => changeDetectorRef.markForCheck()), takeUntil(destroy$))
            .subscribe(value => {
            this.value = value;
        });
    }
    get calculatedDisabledItemHandler() {
        return this.calculateDisabledItemHandler(this.disabledItemHandler, this.value, this.minLength);
    }
    get computedMonth() {
        return this.value ? this.value.to : this.defaultViewedMonth;
    }
    isItemActive(item) {
        const { activePeriod } = this;
        return (typeof item === `string` && activePeriod === null) || activePeriod === item;
    }
    onRangeChange(dayRange) {
        this.updateValue(dayRange);
    }
    onDayClick(day) {
        const { value } = this;
        if (value === null || !value.isSingleDay) {
            this.value = new PrizmDayRange(day, day);
            return;
        }
        this.updateValue(PrizmDayRange.sort(value.from, day));
    }
    onItemSelect(item) {
        if (typeof item !== `string`) {
            this.updateValue(item.range.dayLimit(this.min, this.max));
            return;
        }
        if (this.activePeriod !== null) {
            this.updateValue(null);
        }
    }
    updateValue(value) {
        this.value = value;
        this.valueChange.emit(value);
        this.rangeChange.emit(value);
    }
    get activePeriod() {
        return (this.items.find(item => prizmNullableSame(this.value, item.range, (a, b) => a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
            a.to.daySame(b.to.dayLimit(this.min, this.max)))) || null);
    }
    calculateDisabledItemHandler(disabledItemHandler, value, minLength) {
        return (item) => {
            if (!value || !value.isSingleDay || !minLength) {
                return disabledItemHandler(item);
            }
            const disabledBefore = value.from.append(minLength, true).append({ day: 1 });
            const disabledAfter = value.from.append(minLength).append({ day: -1 });
            const inDisabledRange = disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);
            return inDisabledRange || disabledItemHandler(item);
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCalendarRangeComponent, deps: [{ token: PRIZM_CALENDAR_DATA_STREAM, optional: true }, { token: ChangeDetectorRef }, { token: PrizmDestroyService }, { token: PRIZM_OTHER_DATE_TEXT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmCalendarRangeComponent, isStandalone: true, selector: "prizm-calendar-range", inputs: { defaultViewedMonth: "defaultViewedMonth", disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", items: "items", min: "min", max: "max", minLength: "minLength", maxLength: "maxLength", value: "value" }, outputs: { valueChange: "valueChange", rangeChange: "rangeChange" }, providers: [...prizmI18nInitWithKey(PRIZM_OTHER_DATE_TEXT, 'otherDate'), PrizmDestroyService], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"!items.length; else presets\">\n  <prizm-primitive-calendar-range\n    [markerHandler]=\"markerHandler\"\n    [min]=\"min | prizmMapper : maxLengthMapper : value : maxLength : true\"\n    [max]=\"max | prizmMapper : maxLengthMapper : value : maxLength : false\"\n    [defaultViewedMonthFirst]=\"computedMonth\"\n    [defaultViewedMonthSecond]=\"computedMonth | prizmMapper : getEndRangeMonthOrShift\"\n    [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n    [value]=\"value\"\n    (dayClick)=\"onDayClick($event)\"\n    automation-id=\"prizm-calendar-range__calendars\"\n    prizmPreventDefault=\"mousedown\"\n  >\n    <ng-container footerFrom>\n      <ng-content select=\"[footerFrom]\"></ng-content>\n    </ng-container>\n    <ng-container headerFrom>\n      <ng-content select=\"[headerFrom]\"></ng-content>\n    </ng-container>\n    <ng-container footerTo>\n      <ng-content select=\"[footerTo]\"></ng-content>\n    </ng-container>\n    <ng-container headerTo>\n      <ng-content select=\"[headerTo]\"></ng-content>\n    </ng-container>\n  </prizm-primitive-calendar-range>\n</ng-container>\n<ng-template #presets>\n  <div class=\"z-wrapper\">\n    <prizm-calendar\n      [value]=\"value\"\n      [markerHandler]=\"markerHandler\"\n      [min]=\"min | prizmMapper : maxLengthMapper : value : maxLength : true\"\n      [max]=\"max | prizmMapper : maxLengthMapper : value : maxLength : false\"\n      [month]=\"computedMonth\"\n      [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n      (dayClick)=\"onDayClick($event)\"\n      automation-id=\"prizm-calendar-range__calendar\"\n      prizmPreventDefault=\"mousedown\"\n    >\n    </prizm-calendar>\n    <prizm-data-list\n      class=\"z-menu\"\n      [style.--prizm-data-list-border]=\"0\"\n      [style.--prizm-data-list-border-left]=\"'1px solid var(--prizm-v3-background-stroke)'\"\n      role=\"menu\"\n      automation-id=\"prizm-calendar-range__menu\"\n    >\n      <button\n        class=\"button-list\"\n        *ngFor=\"let item of items | prizmMapper : mapper : min : max : minLength : (otherDateText$ | async)\"\n        [attr.aria-checked]=\"isItemActive(item)\"\n        (keydown.enter.prevent)=\"onItemSelect(item)\"\n        (keydown.space.prevent)=\"onItemSelect(item)\"\n        (click)=\"onItemSelect(item)\"\n        prizmPreventDefault=\"mousedown\"\n        role=\"menuitemradio\"\n        prizmButton\n        appearanceType=\"ghost\"\n        appearance=\"primary\"\n        automation-id=\"prizm-calendar-range__menu__item\"\n      >\n        <div class=\"btn-content\">\n          <span>{{ item }}</span>\n          <prizm-icon\n            [style.visibility]=\"isItemActive(item) ? '' : 'hidden'\"\n            iconClass=\"selection-check-simple\"\n          ></prizm-icon>\n        </div>\n      </button>\n    </prizm-data-list>\n  </div>\n</ng-template>\n", styles: [":host{display:block}.z-wrapper{display:flex}.z-menu{width:11rem;border-left:1px solid var(--prizm-v3-background-stroke)}.z-checkmark{margin-left:auto;width:1rem;height:1rem}.button-list{width:100%}.btn-content{display:flex;justify-content:space-between;align-items:center}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmMapperPipeModule }, { kind: "pipe", type: i2.PrizmMapperPipe, name: "prizmMapper" }, { kind: "ngmodule", type: PrizmButtonModule }, { kind: "component", type: i3.PrizmButtonComponent, selector: "button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]", inputs: ["size", "icon", "iconRight", "appearance", "appearanceType", "disabled", "showLoader"] }, { kind: "ngmodule", type: PrizmPreventDefaultModule }, { kind: "directive", type: i4.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "component", type: PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "component", type: PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "ngmodule", type: PrizmPrimitiveCalendarRangeModule }, { kind: "component", type: i5.PrizmPrimitiveCalendarRangeComponent, selector: "prizm-primitive-calendar-range", inputs: ["disabledItemHandler", "markerHandler", "defaultViewedMonthFirst", "defaultViewedMonthSecond", "min", "max", "value"], outputs: ["dayClick"] }, { kind: "component", type: PrizmCalendarComponent, selector: "prizm-calendar", inputs: ["month", "value", "disabledItemHandler", "min", "daysWithStatus", "max", "minViewedMonth", "maxViewedMonth", "hoveredItem", "showAdjacent", "markerHandler"], outputs: ["dayClick", "monthChange", "hoveredItemChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmCalendarRangeComponent.prototype, "defaultViewedMonth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmCalendarRangeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmCalendarRangeComponent.prototype, "markerHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmCalendarRangeComponent.prototype, "items", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmDay)
], PrizmCalendarRangeComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmDay)
], PrizmCalendarRangeComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCalendarRangeComponent.prototype, "minLength", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCalendarRangeComponent.prototype, "maxLength", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCalendarRangeComponent.prototype, "value", void 0);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object, Object]),
    __metadata("design:returntype", Function)
], PrizmCalendarRangeComponent.prototype, "calculateDisabledItemHandler", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCalendarRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-calendar-range`, changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
                        CommonModule,
                        PrizmMapperPipeModule,
                        PrizmButtonModule,
                        PrizmPreventDefaultModule,
                        PrizmIconComponent,
                        PrizmDataListComponent,
                        PrizmPrimitiveCalendarRangeModule,
                        PrizmCalendarComponent,
                    ], providers: [...prizmI18nInitWithKey(PRIZM_OTHER_DATE_TEXT, 'otherDate'), PrizmDestroyService], template: "<ng-container *ngIf=\"!items.length; else presets\">\n  <prizm-primitive-calendar-range\n    [markerHandler]=\"markerHandler\"\n    [min]=\"min | prizmMapper : maxLengthMapper : value : maxLength : true\"\n    [max]=\"max | prizmMapper : maxLengthMapper : value : maxLength : false\"\n    [defaultViewedMonthFirst]=\"computedMonth\"\n    [defaultViewedMonthSecond]=\"computedMonth | prizmMapper : getEndRangeMonthOrShift\"\n    [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n    [value]=\"value\"\n    (dayClick)=\"onDayClick($event)\"\n    automation-id=\"prizm-calendar-range__calendars\"\n    prizmPreventDefault=\"mousedown\"\n  >\n    <ng-container footerFrom>\n      <ng-content select=\"[footerFrom]\"></ng-content>\n    </ng-container>\n    <ng-container headerFrom>\n      <ng-content select=\"[headerFrom]\"></ng-content>\n    </ng-container>\n    <ng-container footerTo>\n      <ng-content select=\"[footerTo]\"></ng-content>\n    </ng-container>\n    <ng-container headerTo>\n      <ng-content select=\"[headerTo]\"></ng-content>\n    </ng-container>\n  </prizm-primitive-calendar-range>\n</ng-container>\n<ng-template #presets>\n  <div class=\"z-wrapper\">\n    <prizm-calendar\n      [value]=\"value\"\n      [markerHandler]=\"markerHandler\"\n      [min]=\"min | prizmMapper : maxLengthMapper : value : maxLength : true\"\n      [max]=\"max | prizmMapper : maxLengthMapper : value : maxLength : false\"\n      [month]=\"computedMonth\"\n      [disabledItemHandler]=\"calculatedDisabledItemHandler\"\n      (dayClick)=\"onDayClick($event)\"\n      automation-id=\"prizm-calendar-range__calendar\"\n      prizmPreventDefault=\"mousedown\"\n    >\n    </prizm-calendar>\n    <prizm-data-list\n      class=\"z-menu\"\n      [style.--prizm-data-list-border]=\"0\"\n      [style.--prizm-data-list-border-left]=\"'1px solid var(--prizm-v3-background-stroke)'\"\n      role=\"menu\"\n      automation-id=\"prizm-calendar-range__menu\"\n    >\n      <button\n        class=\"button-list\"\n        *ngFor=\"let item of items | prizmMapper : mapper : min : max : minLength : (otherDateText$ | async)\"\n        [attr.aria-checked]=\"isItemActive(item)\"\n        (keydown.enter.prevent)=\"onItemSelect(item)\"\n        (keydown.space.prevent)=\"onItemSelect(item)\"\n        (click)=\"onItemSelect(item)\"\n        prizmPreventDefault=\"mousedown\"\n        role=\"menuitemradio\"\n        prizmButton\n        appearanceType=\"ghost\"\n        appearance=\"primary\"\n        automation-id=\"prizm-calendar-range__menu__item\"\n      >\n        <div class=\"btn-content\">\n          <span>{{ item }}</span>\n          <prizm-icon\n            [style.visibility]=\"isItemActive(item) ? '' : 'hidden'\"\n            iconClass=\"selection-check-simple\"\n          ></prizm-icon>\n        </div>\n      </button>\n    </prizm-data-list>\n  </div>\n</ng-template>\n", styles: [":host{display:block}.z-wrapper{display:flex}.z-menu{width:11rem;border-left:1px solid var(--prizm-v3-background-stroke)}.z-checkmark{margin-left:auto;width:1rem;height:1rem}.button-list{width:100%}.btn-content{display:flex;justify-content:space-between;align-items:center}\n"] }]
        }], ctorParameters: function () { return [{ type: i6.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_CALENDAR_DATA_STREAM]
                }, {
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: i7.PrizmDestroyService, decorators: [{
                    type: Inject,
                    args: [PrizmDestroyService]
                }] }, { type: i6.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_OTHER_DATE_TEXT]
                }] }]; }, propDecorators: { defaultViewedMonth: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], markerHandler: [{
                type: Input
            }], items: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], rangeChange: [{
                type: Output
            }], calculateDisabledItemHandler: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jYWxlbmRhci1yYW5nZS9jYWxlbmRhci1yYW5nZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NhbGVuZGFyLXJhbmdlL2NhbGVuZGFyLXJhbmdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUVaLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZ0JBQWdC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QUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFNTixHQUFHO3NCQUZGLEtBQUs7Z0JBTU4sU0FBUztzQkFGUixLQUFLO2dCQU1OLFNBQVM7c0JBRlIsS0FBSztnQkFNTixLQUFLO3NCQUZKLEtBQUs7Z0JBS0csV0FBVztzQkFEbkIsTUFBTTtnQkFLRSxXQUFXO3NCQURuQixNQUFNO2dCQTJHQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bURheVJhbmdlUGVyaW9kIH0gZnJvbSAnLi4vLi4vQGNvcmUvY2xhc3Nlcy9kYXktcmFuZ2UtcGVyaW9kJztcbmltcG9ydCB7IFByaXptRGF5IH0gZnJvbSAnLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheSc7XG5pbXBvcnQgeyBQcml6bURheVJhbmdlIH0gZnJvbSAnLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheS1yYW5nZSc7XG5pbXBvcnQgeyBQUklaTV9GSVJTVF9EQVksIFBSSVpNX0xBU1RfREFZIH0gZnJvbSAnLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheXMuY29uc3QnO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2RlZmF1bHQtbWFya2VyLWhhbmRsZXInO1xuaW1wb3J0IHsgUFJJWk1fTUFYX0RBWV9SQU5HRV9MRU5HVEhfTUFQUEVSIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL21heC1kYXktcmFuZ2UtbGVuZ3RoLW1hcHBlcic7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wLCBwcml6bVB1cmUgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQUklaTV9DQUxFTkRBUl9EQVRBX1NUUkVBTSB9IGZyb20gJy4uLy4uL3Rva2Vucy9jYWxlbmRhci1kYXRhLXN0cmVhbSc7XG5pbXBvcnQgeyBQcml6bURheUxpa2UgfSBmcm9tICcuLi8uLi90eXBlcy9kYXktbGlrZSc7XG5pbXBvcnQgeyBQcml6bUJvb2xlYW5IYW5kbGVyIH0gZnJvbSAnLi4vLi4vdHlwZXMvaGFuZGxlcic7XG5pbXBvcnQgeyBQcml6bU1hcHBlciB9IGZyb20gJy4uLy4uL3R5cGVzL21hcHBlcic7XG5pbXBvcnQgeyBQcml6bU1hcmtlckhhbmRsZXIgfSBmcm9tICcuLi8uLi90eXBlcy9tYXJrZXItaGFuZGxlcic7XG5pbXBvcnQgeyBQcml6bVdpdGhPcHRpb25hbE1pbk1heCB9IGZyb20gJy4uLy4uL3R5cGVzL3dpdGgtb3B0aW9uYWwtbWluLW1heCc7XG5pbXBvcnQgeyBwcml6bU51bGxhYmxlU2FtZSB9IGZyb20gJy4uLy4uL3V0aWwvY29tbW9uL251bGxhYmxlLXNhbWUnO1xuaW1wb3J0IHsgUFJJWk1fT1RIRVJfREFURV9URVhUIH0gZnJvbSAnLi4vLi4vdG9rZW5zL2kxOG4nO1xuaW1wb3J0IHsgcHJpem1JMThuSW5pdFdpdGhLZXkgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaXptTWFwcGVyUGlwZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BpcGVzJztcbmltcG9ydCB7IFByaXptQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uJztcbmltcG9ydCB7IFByaXptUHJldmVudERlZmF1bHRNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFByaXptQ2FsZW5kYXJDb21wb25lbnQsIFByaXptQ2FsZW5kYXJNb2R1bGUgfSBmcm9tICcuLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBQcml6bUljb25Db21wb25lbnQsIFByaXptSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IHsgUHJpem1EYXRhTGlzdENvbXBvbmVudCwgUHJpem1EYXRhTGlzdE1vZHVsZSB9IGZyb20gJy4uL2RhdGEtbGlzdCc7XG5pbXBvcnQgeyBQcml6bVByaW1pdGl2ZUNhbGVuZGFyUmFuZ2VNb2R1bGUgfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWNhbGVuZGFyLXJhbmdlYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2NhbGVuZGFyLXJhbmdlLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vY2FsZW5kYXItcmFuZ2UuY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1NYXBwZXJQaXBlTW9kdWxlLFxuICAgIFByaXptQnV0dG9uTW9kdWxlLFxuICAgIFByaXptUHJldmVudERlZmF1bHRNb2R1bGUsXG4gICAgUHJpem1JY29uQ29tcG9uZW50LFxuICAgIFByaXptRGF0YUxpc3RDb21wb25lbnQsXG4gICAgUHJpem1QcmltaXRpdmVDYWxlbmRhclJhbmdlTW9kdWxlLFxuICAgIFByaXptQ2FsZW5kYXJDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogWy4uLnByaXptSTE4bkluaXRXaXRoS2V5KFBSSVpNX09USEVSX0RBVEVfVEVYVCwgJ290aGVyRGF0ZScpLCBQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1DYWxlbmRhclJhbmdlQ29tcG9uZW50XG4gIGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZFxuICBpbXBsZW1lbnRzIFByaXptV2l0aE9wdGlvbmFsTWluTWF4PFByaXptRGF5Plxue1xuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRlZmF1bHRWaWV3ZWRNb250aDogUHJpem1Nb250aCA9IFByaXptTW9udGguY3VycmVudExvY2FsKCk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBQcml6bUJvb2xlYW5IYW5kbGVyPFByaXptRGF5PiA9IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWFya2VySGFuZGxlcjogUHJpem1NYXJrZXJIYW5kbGVyID0gUFJJWk1fREVGQVVMVF9NQVJLRVJfSEFORExFUjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGl0ZW1zOiByZWFkb25seSBQcml6bURheVJhbmdlUGVyaW9kW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbjogUHJpem1EYXkgPSBQUklaTV9GSVJTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXg6IFByaXptRGF5ID0gUFJJWk1fTEFTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtaW5MZW5ndGg6IFByaXptRGF5TGlrZSB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4TGVuZ3RoOiBQcml6bURheUxpa2UgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHZhbHVlOiBQcml6bURheVJhbmdlIHwgbnVsbCA9IG51bGw7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQcml6bURheVJhbmdlPigpO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCBUT0RPOiAyLjAgcmVtb3ZlICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSByYW5nZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UHJpem1EYXlSYW5nZSB8IG51bGw+KCk7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9jYWxlbmRhcl9yYW5nZSc7XG5cbiAgcmVhZG9ubHkgbWF4TGVuZ3RoTWFwcGVyOiBQcml6bU1hcHBlcjxQcml6bURheSwgUHJpem1EYXk+ID0gUFJJWk1fTUFYX0RBWV9SQU5HRV9MRU5HVEhfTUFQUEVSO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUFJJWk1fQ0FMRU5EQVJfREFUQV9TVFJFQU0pXG4gICAgQE9wdGlvbmFsKClcbiAgICB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8UHJpem1EYXlSYW5nZSB8IG51bGw+IHwgbnVsbCxcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChQcml6bURlc3Ryb3lTZXJ2aWNlKSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZSxcbiAgICBASW5qZWN0KFBSSVpNX09USEVSX0RBVEVfVEVYVCkgcmVhZG9ubHkgb3RoZXJEYXRlVGV4dCQ6IE9ic2VydmFibGU8c3RyaW5nPlxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghdmFsdWVDaGFuZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+IGNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKSxcbiAgICAgICAgdGFrZVVudGlsKGRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVhZG9ubHkgZ2V0RW5kUmFuZ2VNb250aE9yU2hpZnQ6IFByaXptTWFwcGVyPFByaXptTW9udGgsIFByaXptTW9udGg+ID0gaXRlbSA9PiB7XG4gICAgaWYgKCF0aGlzLnZhbHVlIHx8ICF0aGlzLnZhbHVlLnRvKSByZXR1cm4gaXRlbS5hcHBlbmQoeyBtb250aDogMSB9KTtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS50bztcbiAgfTtcblxuICByZWFkb25seSBtYXBwZXI6IFByaXptTWFwcGVyPHJlYWRvbmx5IFByaXptRGF5UmFuZ2VQZXJpb2RbXSwgUmVhZG9ubHlBcnJheTxQcml6bURheVJhbmdlUGVyaW9kIHwgc3RyaW5nPj4gPVxuICAgIChpdGVtcywgbWluOiBQcml6bURheSwgbWF4OiBQcml6bURheSB8IG51bGwsIG1pbkxlbmd0aDogUHJpem1EYXlMaWtlIHwgbnVsbCwgb3RoZXJEYXRlVGV4dDogc3RyaW5nKSA9PiBbXG4gICAgICAuLi5pdGVtcy5maWx0ZXIoXG4gICAgICAgIGl0ZW0gPT5cbiAgICAgICAgICAobWluTGVuZ3RoID09PSBudWxsIHx8IGl0ZW0ucmFuZ2UuZnJvbS5hcHBlbmQobWluTGVuZ3RoKS5kYXlTYW1lT3JCZWZvcmUoaXRlbS5yYW5nZS50bykpICYmXG4gICAgICAgICAgaXRlbS5yYW5nZS50by5kYXlTYW1lT3JBZnRlcihtaW4pICYmXG4gICAgICAgICAgKG1heCA9PT0gbnVsbCB8fCBpdGVtLnJhbmdlLmZyb20uZGF5U2FtZU9yQmVmb3JlKG1heCkpXG4gICAgICApLFxuICAgICAgb3RoZXJEYXRlVGV4dCxcbiAgICBdO1xuXG4gIGdldCBjYWxjdWxhdGVkRGlzYWJsZWRJdGVtSGFuZGxlcigpOiBQcml6bUJvb2xlYW5IYW5kbGVyPFByaXptRGF5PiB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlRGlzYWJsZWRJdGVtSGFuZGxlcih0aGlzLmRpc2FibGVkSXRlbUhhbmRsZXIsIHRoaXMudmFsdWUsIHRoaXMubWluTGVuZ3RoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29tcHV0ZWRNb250aCgpOiBQcml6bU1vbnRoIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUudG8gOiB0aGlzLmRlZmF1bHRWaWV3ZWRNb250aDtcbiAgfVxuXG4gIHB1YmxpYyBpc0l0ZW1BY3RpdmUoaXRlbTogc3RyaW5nIHwgUHJpem1EYXlSYW5nZVBlcmlvZCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgYWN0aXZlUGVyaW9kIH0gPSB0aGlzO1xuXG4gICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gYHN0cmluZ2AgJiYgYWN0aXZlUGVyaW9kID09PSBudWxsKSB8fCBhY3RpdmVQZXJpb2QgPT09IGl0ZW07XG4gIH1cblxuICBwdWJsaWMgb25SYW5nZUNoYW5nZShkYXlSYW5nZTogUHJpem1EYXlSYW5nZSk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUoZGF5UmFuZ2UpO1xuICB9XG5cbiAgcHVibGljIG9uRGF5Q2xpY2soZGF5OiBQcml6bURheSk6IHZvaWQge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXM7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8ICF2YWx1ZS5pc1NpbmdsZURheSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBQcml6bURheVJhbmdlKGRheSwgZGF5KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWUoUHJpem1EYXlSYW5nZS5zb3J0KHZhbHVlLmZyb20sIGRheSkpO1xuICB9XG5cbiAgcHVibGljIG9uSXRlbVNlbGVjdChpdGVtOiBzdHJpbmcgfCBQcml6bURheVJhbmdlUGVyaW9kKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtICE9PSBgc3RyaW5nYCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZShpdGVtLnJhbmdlLmRheUxpbWl0KHRoaXMubWluLCB0aGlzLm1heCkpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmFjdGl2ZVBlcmlvZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVmFsdWUodmFsdWU6IFByaXptRGF5UmFuZ2UgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSBhcyBQcml6bURheVJhbmdlKTtcbiAgICB0aGlzLnJhbmdlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgYWN0aXZlUGVyaW9kKCk6IFByaXptRGF5UmFuZ2VQZXJpb2QgfCBudWxsIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT5cbiAgICAgICAgcHJpem1OdWxsYWJsZVNhbWU8UHJpem1EYXlSYW5nZT4oXG4gICAgICAgICAgdGhpcy52YWx1ZSxcbiAgICAgICAgICBpdGVtLnJhbmdlLFxuICAgICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgICAgYS5mcm9tLmRheVNhbWUoYi5mcm9tLmRheUxpbWl0KHRoaXMubWluLCB0aGlzLm1heCkpICYmXG4gICAgICAgICAgICBhLnRvLmRheVNhbWUoYi50by5kYXlMaW1pdCh0aGlzLm1pbiwgdGhpcy5tYXgpKVxuICAgICAgICApXG4gICAgICApIHx8IG51bGxcbiAgICApO1xuICB9XG5cbiAgQHByaXptUHVyZVxuICBwcml2YXRlIGNhbGN1bGF0ZURpc2FibGVkSXRlbUhhbmRsZXIoXG4gICAgZGlzYWJsZWRJdGVtSGFuZGxlcjogUHJpem1Cb29sZWFuSGFuZGxlcjxQcml6bURheT4sXG4gICAgdmFsdWU6IFByaXptRGF5UmFuZ2UgfCBudWxsLFxuICAgIG1pbkxlbmd0aDogUHJpem1EYXlMaWtlIHwgbnVsbFxuICApOiBQcml6bUJvb2xlYW5IYW5kbGVyPFByaXptRGF5PiB7XG4gICAgcmV0dXJuIChpdGVtOiBQcml6bURheSk6IGJvb2xlYW4gPT4ge1xuICAgICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUuaXNTaW5nbGVEYXkgfHwgIW1pbkxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZGlzYWJsZWRJdGVtSGFuZGxlcihpdGVtKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlzYWJsZWRCZWZvcmUgPSB2YWx1ZS5mcm9tLmFwcGVuZChtaW5MZW5ndGgsIHRydWUpLmFwcGVuZCh7IGRheTogMSB9KTtcbiAgICAgIGNvbnN0IGRpc2FibGVkQWZ0ZXIgPSB2YWx1ZS5mcm9tLmFwcGVuZChtaW5MZW5ndGgpLmFwcGVuZCh7IGRheTogLTEgfSk7XG4gICAgICBjb25zdCBpbkRpc2FibGVkUmFuZ2UgPSBkaXNhYmxlZEJlZm9yZS5kYXlCZWZvcmUoaXRlbSkgJiYgZGlzYWJsZWRBZnRlci5kYXlBZnRlcihpdGVtKTtcblxuICAgICAgcmV0dXJuIGluRGlzYWJsZWRSYW5nZSB8fCBkaXNhYmxlZEl0ZW1IYW5kbGVyKGl0ZW0pO1xuICAgIH07XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbXMubGVuZ3RoOyBlbHNlIHByZXNldHNcIj5cbiAgPHByaXptLXByaW1pdGl2ZS1jYWxlbmRhci1yYW5nZVxuICAgIFttYXJrZXJIYW5kbGVyXT1cIm1hcmtlckhhbmRsZXJcIlxuICAgIFttaW5dPVwibWluIHwgcHJpem1NYXBwZXIgOiBtYXhMZW5ndGhNYXBwZXIgOiB2YWx1ZSA6IG1heExlbmd0aCA6IHRydWVcIlxuICAgIFttYXhdPVwibWF4IHwgcHJpem1NYXBwZXIgOiBtYXhMZW5ndGhNYXBwZXIgOiB2YWx1ZSA6IG1heExlbmd0aCA6IGZhbHNlXCJcbiAgICBbZGVmYXVsdFZpZXdlZE1vbnRoRmlyc3RdPVwiY29tcHV0ZWRNb250aFwiXG4gICAgW2RlZmF1bHRWaWV3ZWRNb250aFNlY29uZF09XCJjb21wdXRlZE1vbnRoIHwgcHJpem1NYXBwZXIgOiBnZXRFbmRSYW5nZU1vbnRoT3JTaGlmdFwiXG4gICAgW2Rpc2FibGVkSXRlbUhhbmRsZXJdPVwiY2FsY3VsYXRlZERpc2FibGVkSXRlbUhhbmRsZXJcIlxuICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgKGRheUNsaWNrKT1cIm9uRGF5Q2xpY2soJGV2ZW50KVwiXG4gICAgYXV0b21hdGlvbi1pZD1cInByaXptLWNhbGVuZGFyLXJhbmdlX19jYWxlbmRhcnNcIlxuICAgIHByaXptUHJldmVudERlZmF1bHQ9XCJtb3VzZWRvd25cIlxuICA+XG4gICAgPG5nLWNvbnRhaW5lciBmb290ZXJGcm9tPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3RlckZyb21dXCI+PC9uZy1jb250ZW50PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgaGVhZGVyRnJvbT5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltoZWFkZXJGcm9tXVwiPjwvbmctY29udGVudD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyIGZvb3RlclRvPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3RlclRvXVwiPjwvbmctY29udGVudD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyIGhlYWRlclRvPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2hlYWRlclRvXVwiPjwvbmctY29udGVudD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9wcml6bS1wcmltaXRpdmUtY2FsZW5kYXItcmFuZ2U+XG48L25nLWNvbnRhaW5lcj5cbjxuZy10ZW1wbGF0ZSAjcHJlc2V0cz5cbiAgPGRpdiBjbGFzcz1cInotd3JhcHBlclwiPlxuICAgIDxwcml6bS1jYWxlbmRhclxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgIFttYXJrZXJIYW5kbGVyXT1cIm1hcmtlckhhbmRsZXJcIlxuICAgICAgW21pbl09XCJtaW4gfCBwcml6bU1hcHBlciA6IG1heExlbmd0aE1hcHBlciA6IHZhbHVlIDogbWF4TGVuZ3RoIDogdHJ1ZVwiXG4gICAgICBbbWF4XT1cIm1heCB8IHByaXptTWFwcGVyIDogbWF4TGVuZ3RoTWFwcGVyIDogdmFsdWUgOiBtYXhMZW5ndGggOiBmYWxzZVwiXG4gICAgICBbbW9udGhdPVwiY29tcHV0ZWRNb250aFwiXG4gICAgICBbZGlzYWJsZWRJdGVtSGFuZGxlcl09XCJjYWxjdWxhdGVkRGlzYWJsZWRJdGVtSGFuZGxlclwiXG4gICAgICAoZGF5Q2xpY2spPVwib25EYXlDbGljaygkZXZlbnQpXCJcbiAgICAgIGF1dG9tYXRpb24taWQ9XCJwcml6bS1jYWxlbmRhci1yYW5nZV9fY2FsZW5kYXJcIlxuICAgICAgcHJpem1QcmV2ZW50RGVmYXVsdD1cIm1vdXNlZG93blwiXG4gICAgPlxuICAgIDwvcHJpem0tY2FsZW5kYXI+XG4gICAgPHByaXptLWRhdGEtbGlzdFxuICAgICAgY2xhc3M9XCJ6LW1lbnVcIlxuICAgICAgW3N0eWxlLi0tcHJpem0tZGF0YS1saXN0LWJvcmRlcl09XCIwXCJcbiAgICAgIFtzdHlsZS4tLXByaXptLWRhdGEtbGlzdC1ib3JkZXItbGVmdF09XCInMXB4IHNvbGlkIHZhcigtLXByaXptLXYzLWJhY2tncm91bmQtc3Ryb2tlKSdcIlxuICAgICAgcm9sZT1cIm1lbnVcIlxuICAgICAgYXV0b21hdGlvbi1pZD1cInByaXptLWNhbGVuZGFyLXJhbmdlX19tZW51XCJcbiAgICA+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzPVwiYnV0dG9uLWxpc3RcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtcyB8IHByaXptTWFwcGVyIDogbWFwcGVyIDogbWluIDogbWF4IDogbWluTGVuZ3RoIDogKG90aGVyRGF0ZVRleHQkIHwgYXN5bmMpXCJcbiAgICAgICAgW2F0dHIuYXJpYS1jaGVja2VkXT1cImlzSXRlbUFjdGl2ZShpdGVtKVwiXG4gICAgICAgIChrZXlkb3duLmVudGVyLnByZXZlbnQpPVwib25JdGVtU2VsZWN0KGl0ZW0pXCJcbiAgICAgICAgKGtleWRvd24uc3BhY2UucHJldmVudCk9XCJvbkl0ZW1TZWxlY3QoaXRlbSlcIlxuICAgICAgICAoY2xpY2spPVwib25JdGVtU2VsZWN0KGl0ZW0pXCJcbiAgICAgICAgcHJpem1QcmV2ZW50RGVmYXVsdD1cIm1vdXNlZG93blwiXG4gICAgICAgIHJvbGU9XCJtZW51aXRlbXJhZGlvXCJcbiAgICAgICAgcHJpem1CdXR0b25cbiAgICAgICAgYXBwZWFyYW5jZVR5cGU9XCJnaG9zdFwiXG4gICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgYXV0b21hdGlvbi1pZD1cInByaXptLWNhbGVuZGFyLXJhbmdlX19tZW51X19pdGVtXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jb250ZW50XCI+XG4gICAgICAgICAgPHNwYW4+e3sgaXRlbSB9fTwvc3Bhbj5cbiAgICAgICAgICA8cHJpem0taWNvblxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiaXNJdGVtQWN0aXZlKGl0ZW0pID8gJycgOiAnaGlkZGVuJ1wiXG4gICAgICAgICAgICBpY29uQ2xhc3M9XCJzZWxlY3Rpb24tY2hlY2stc2ltcGxlXCJcbiAgICAgICAgICA+PC9wcml6bS1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvcHJpem0tZGF0YS1saXN0PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=