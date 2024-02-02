import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, Injector, Input, Optional, Self, ViewChild, } from '@angular/core';
import { PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS } from './input-date-range-time.providers';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PrizmDay } from '../../../@core/date-time/day';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_FIRST_DAY_WITH_TIME, PRIZM_LAST_DAY_WITH_TIME } from '../../../@core/date-time/days.const';
import { prizmIsNativeFocusedIn } from '../../../util';
import { PrizmDateTimeRange } from '../../../@core/date-time/day-time-range';
import { UntypedFormControl, NgControl } from '@angular/forms';
import { PRIZM_DATE_RANGE_VALUE_TRANSFORMER, PRIZM_DATE_TEXTS, PRIZM_IS_MOBILE, PRIZM_MOBILE_CALENDAR, PRIZM_TIME_TEXTS, } from '../../../tokens';
import { PrizmDialogService } from '../../dialogs/dialog';
import { PRIZM_DATE_FORMAT, PRIZM_DATE_SEPARATOR, PrizmDayRange, PrizmTime } from '../../../@core';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService, PrizmFormControlHelpers } from '@prizm-ui/helpers';
import { prizmI18nInitWithKeys } from '../../../services';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
import * as i2 from "../input-date-range/input-date-range.component";
import * as i3 from "../../../directives/event-zone/event-zone.directive";
import * as i4 from "@angular/forms";
import * as i5 from "../input-time/input-time.component";
import * as i6 from "../../dialogs/dialog";
import * as i7 from "rxjs";
export class PrizmInputDateTimeRangeComponent extends AbstractPrizmNullableControl {
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return this.focusableElement?.nativeElement
            ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
            : false;
    }
    constructor(control, destroyed$, changeDetectorRef, injector, isMobile, dialogService, mobileCalendar, dateFormat, dateSeparator, dateTexts$, valueTransformer) {
        super(control, changeDetectorRef, valueTransformer);
        this.destroyed$ = destroyed$;
        this.injector = injector;
        this.isMobile = isMobile;
        this.dialogService = dialogService;
        this.mobileCalendar = mobileCalendar;
        this.dateFormat = dateFormat;
        this.dateSeparator = dateSeparator;
        this.dateTexts$ = dateTexts$;
        this.valueTransformer = valueTransformer;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.markerHandler = PRIZM_DEFAULT_MARKER_HANDLER;
        this.forceClear = null;
        this.label = 'Выберите дату и время';
        this.size = 'm';
        this.outer = false;
        this.timeItems = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));
        this.defaultViewedMonth = PrizmMonth.currentLocal();
        this.items = [];
        this.placeholder = '';
        this.timeMode = 'HH:MM';
        this.min = PRIZM_FIRST_DAY_WITH_TIME;
        this.max = PRIZM_LAST_DAY_WITH_TIME;
        this.minLength = null;
        this.maxLength = null;
        this.timeStrict = false;
        this.testId_ = 'ui_input_date_time_range';
        this.dateControl = new UntypedFormControl();
        this.timeControlFrom = new UntypedFormControl();
        this.timeControlTo = new UntypedFormControl();
    }
    valueChanged(previousValue, currentValue) {
        return previousValue?.toString() !== currentValue?.toString();
    }
    ngOnInit() {
        super.ngOnInit();
        if (!this.control)
            return;
        const control = this.control;
        this.syncValuesBetweenControls(control);
        this.syncStateBetweenControls(control);
        this.syncAllValidators(control);
    }
    syncStateBetweenControls(origin) {
        PrizmFormControlHelpers.syncStates(origin, false, this.timeControlFrom, this.timeControlTo, this.dateControl)
            .pipe(takeUntil(this.destroyed$))
            .subscribe();
    }
    syncAllValidators(origin) {
        PrizmFormControlHelpers.syncAllValidators(origin, false, this.timeControlFrom, this.timeControlTo, this.dateControl)
            .pipe(takeUntil(this.destroyed$))
            .subscribe();
    }
    syncValuesBetweenControls(origin) {
        PrizmFormControlHelpers.syncValues(origin, (value) => value?.dayRange, ($event) => {
            const value = PrizmFormControlHelpers.getValue(origin);
            value?.updateDayRange($event);
            return this.value?.copy();
        }, this.dateControl)
            .pipe(takeUntil(this.destroyed$))
            .subscribe();
        PrizmFormControlHelpers.syncValues(origin, 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (value) => value?.timeRange?.from, ($event) => {
            const value = PrizmFormControlHelpers.getValue(origin);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            value.timeRange.from = $event;
            return this.value?.copy();
        }, this.timeControlFrom)
            .pipe(takeUntil(this.destroyed$))
            .subscribe();
        PrizmFormControlHelpers.syncValues(origin, 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        (value) => value?.timeRange?.to, ($event) => {
            const value = PrizmFormControlHelpers.getValue(origin);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            value.timeRange.to = $event;
            return this.value?.copy();
        }, this.timeControlTo)
            .pipe(takeUntil(this.destroyed$))
            .subscribe();
    }
    getDefaultValue() {
        return new PrizmDateTimeRange(new PrizmDayRange(PrizmDay.fromLocalNativeDate(new Date()), PrizmDay.fromLocalNativeDate(new Date()).append({ month: 2 })));
    }
}
PrizmInputDateTimeRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateTimeRangeComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: i1.PrizmDestroyService }, { token: ChangeDetectorRef }, { token: Injector }, { token: PRIZM_IS_MOBILE }, { token: PrizmDialogService }, { token: PRIZM_MOBILE_CALENDAR, optional: true }, { token: PRIZM_DATE_FORMAT }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_RANGE_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputDateTimeRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputDateTimeRangeComponent, selector: "prizm-input-date-time-range", inputs: { disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", forceClear: "forceClear", label: "label", size: "size", outer: "outer", timeItems: "timeItems", defaultViewedMonth: "defaultViewedMonth", items: "items", placeholder: "placeholder", timeMode: "timeMode", min: "min", max: "max", minLength: "minLength", maxLength: "maxLength", timeStrict: "timeStrict" }, providers: [
        ...prizmI18nInitWithKeys({
            time: PRIZM_TIME_TEXTS,
            dateTexts: PRIZM_DATE_TEXTS,
        }),
        ...PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS,
        PrizmDestroyService,
    ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-input-date-range\n  #focusableElementRef\n  [disabledItemHandler]=\"disabledItemHandler\"\n  [label]=\"label\"\n  [markerHandler]=\"markerHandler\"\n  [defaultViewedMonth]=\"defaultViewedMonth\"\n  [items]=\"items\"\n  [size]=\"size\"\n  [forceClear]=\"forceClear\"\n  [outer]=\"outer\"\n  [formControl]=\"dateControl\"\n  [placeholder]=\"placeholder\"\n  [min]=\"$any(min?.day)\"\n  [max]=\"$any(max?.day)\"\n>\n  <ng-template #footerTo let-zone=\"zone\">\n    <prizm-input-time\n      [prizmEventZoneParent]=\"zone\"\n      [size]=\"size\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [formControl]=\"timeControlFrom\"\n      [strict]=\"timeStrict\"\n      [items]=\"timeItems\"\n      [mode]=\"timeMode\"\n    >\n    </prizm-input-time>\n  </ng-template>\n  <ng-template #footerFrom let-zone=\"zone\">\n    <prizm-input-time\n      [prizmEventZoneParent]=\"zone\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [formControl]=\"timeControlTo\"\n      [items]=\"timeItems\"\n      [mode]=\"timeMode\"\n    >\n    </prizm-input-time>\n  </ng-template>\n</prizm-input-date-range>\n", styles: [":host{--prizm-calendar-footer-height: 40px;--prizm-input-layout-width: 100%;--prizm-dropdown-host-width: 100%;display:block}prizm-input-time{width:100%}\n"], dependencies: [{ kind: "component", type: i2.PrizmInputDateRangeComponent, selector: "prizm-input-date-range", inputs: ["disabledItemHandler", "markerHandler", "defaultViewedMonth", "items", "forceClear", "placeholder", "min", "max", "minLength", "maxLength", "label", "size", "outer"] }, { kind: "directive", type: i3.PrizmDropdownZoneDirective, selector: "[prizmEventZone]:not(ng-container), [prizmEventZoneChange]:not(ng-container), [prizmEventZoneParent]:not(ng-container)", inputs: ["prizmEventZoneParent", "prizmEventZoneHost"], outputs: ["prizmEventZoneEvent"], exportAs: ["prizmEventZone"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "component", type: i5.PrizmInputTimeComponent, selector: "prizm-input-time", inputs: ["placeholder", "forceClear", "label", "size", "outer", "disabledItemHandler", "items", "itemSize", "strict", "mode", "extraButtonInjector"] }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputDateTimeRangeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputDateTimeRangeComponent.prototype, "markerHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeRangeComponent.prototype, "label", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputDateTimeRangeComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeRangeComponent.prototype, "outer", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmInputDateTimeRangeComponent.prototype, "timeItems", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeRangeComponent.prototype, "defaultViewedMonth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmInputDateTimeRangeComponent.prototype, "items", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeRangeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputDateTimeRangeComponent.prototype, "timeMode", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeRangeComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeRangeComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeRangeComponent.prototype, "minLength", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeRangeComponent.prototype, "maxLength", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeRangeComponent.prototype, "timeStrict", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateTimeRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-date-time-range`, providers: [
                        ...prizmI18nInitWithKeys({
                            time: PRIZM_TIME_TEXTS,
                            dateTexts: PRIZM_DATE_TEXTS,
                        }),
                        ...PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS,
                        PrizmDestroyService,
                    ], template: "<prizm-input-date-range\n  #focusableElementRef\n  [disabledItemHandler]=\"disabledItemHandler\"\n  [label]=\"label\"\n  [markerHandler]=\"markerHandler\"\n  [defaultViewedMonth]=\"defaultViewedMonth\"\n  [items]=\"items\"\n  [size]=\"size\"\n  [forceClear]=\"forceClear\"\n  [outer]=\"outer\"\n  [formControl]=\"dateControl\"\n  [placeholder]=\"placeholder\"\n  [min]=\"$any(min?.day)\"\n  [max]=\"$any(max?.day)\"\n>\n  <ng-template #footerTo let-zone=\"zone\">\n    <prizm-input-time\n      [prizmEventZoneParent]=\"zone\"\n      [size]=\"size\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [formControl]=\"timeControlFrom\"\n      [strict]=\"timeStrict\"\n      [items]=\"timeItems\"\n      [mode]=\"timeMode\"\n    >\n    </prizm-input-time>\n  </ng-template>\n  <ng-template #footerFrom let-zone=\"zone\">\n    <prizm-input-time\n      [prizmEventZoneParent]=\"zone\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [formControl]=\"timeControlTo\"\n      [items]=\"timeItems\"\n      [mode]=\"timeMode\"\n    >\n    </prizm-input-time>\n  </ng-template>\n</prizm-input-date-range>\n", styles: [":host{--prizm-calendar-footer-height: 40px;--prizm-input-layout-width: 100%;--prizm-dropdown-host-width: 100%;display:block}prizm-input-time{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i4.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }, {
                    type: Inject,
                    args: [NgControl]
                }] }, { type: i1.PrizmDestroyService }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: i0.Injector, decorators: [{
                    type: Inject,
                    args: [Injector]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_IS_MOBILE]
                }] }, { type: i6.PrizmDialogService, decorators: [{
                    type: Inject,
                    args: [PrizmDialogService]
                }] }, { type: i0.Type, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_MOBILE_CALENDAR]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_FORMAT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_SEPARATOR]
                }] }, { type: i7.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_TEXTS]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_DATE_RANGE_VALUE_TRANSFORMER]
                }] }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: ElementRef }]
            }], disabledItemHandler: [{
                type: Input
            }], markerHandler: [{
                type: Input
            }], forceClear: [{
                type: Input
            }], label: [{
                type: Input
            }], size: [{
                type: Input
            }], outer: [{
                type: Input
            }], timeItems: [{
                type: Input
            }], defaultViewedMonth: [{
                type: Input
            }], items: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], timeMode: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], timeStrict: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1yYW5nZS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS10aW1lLXJhbmdlL2lucHV0LWRhdGUtcmFuZ2UtdGltZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtdGltZS1yYW5nZS9pbnB1dC1kYXRlLXJhbmdlLXRpbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxFQUVKLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRzFHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxP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QUFDLGlCQUFpQjs7MEJBQ3hCLE1BQU07MkJBQUMsb0JBQW9COzswQkFDM0IsTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUV2QixRQUFROzswQkFDUixNQUFNOzJCQUFDLGtDQUFrQzs0Q0FqRzVCLGdCQUFnQjtzQkFEL0IsU0FBUzt1QkFBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Z0JBS3RELG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTixhQUFhO3NCQUZaLEtBQUs7Z0JBSUcsVUFBVTtzQkFBbEIsS0FBSztnQkFJTixLQUFLO3NCQUZKLEtBQUs7Z0JBTU4sSUFBSTtzQkFGSCxLQUFLO2dCQU1OLEtBQUs7c0JBRkosS0FBSztnQkFNTixTQUFTO3NCQUZSLEtBQUs7Z0JBTU4sa0JBQWtCO3NCQUZqQixLQUFLO2dCQU1OLEtBQUs7c0JBRkosS0FBSztnQkFNTixXQUFXO3NCQUZWLEtBQUs7Z0JBTU4sUUFBUTtzQkFGUCxLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFNTixHQUFHO3NCQUZGLEtBQUs7Z0JBTU4sU0FBUztzQkFGUixLQUFLO2dCQU1OLFNBQVM7c0JBRlIsS0FBSztnQkFNTixVQUFVO3NCQUZULEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQUklaTV9JTlBVVF9EQVRFX1RJTUVfUkFOR0VfUFJPVklERVJTIH0gZnJvbSAnLi9pbnB1dC1kYXRlLXJhbmdlLXRpbWUucHJvdmlkZXJzJztcbmltcG9ydCB7IEFic3RyYWN0UHJpem1OdWxsYWJsZUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9udWxsYWJsZS1jb250cm9sJztcbmltcG9ydCB7IFByaXptV2l0aE9wdGlvbmFsTWluTWF4IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvd2l0aC1vcHRpb25hbC1taW4tbWF4JztcbmltcG9ydCB7IFByaXptRGF5IH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheSc7XG5pbXBvcnQgeyBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2ZvY3VzYWJsZS1lbGVtZW50LWFjY2Vzc29yJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bUJvb2xlYW5IYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBQcml6bU1hcmtlckhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9tYXJrZXItaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2RlZmF1bHQtbWFya2VyLWhhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQUklaTV9GSVJTVF9EQVlfV0lUSF9USU1FLCBQUklaTV9MQVNUX0RBWV9XSVRIX1RJTUUgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF5cy5jb25zdCc7XG5pbXBvcnQgeyBQcml6bURheUxpa2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXktbGlrZSc7XG5pbXBvcnQgeyBQcml6bURhdGVUaW1lIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RhdGUtdGltZSc7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZEluIH0gZnJvbSAnLi4vLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyBQcml6bURhdGVUaW1lUmFuZ2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF5LXRpbWUtcmFuZ2UnO1xuaW1wb3J0IHsgUHJpem1EYXlSYW5nZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2NsYXNzZXMvZGF5LXJhbmdlLXBlcmlvZCc7XG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIFBSSVpNX0RBVEVfUkFOR0VfVkFMVUVfVFJBTlNGT1JNRVIsXG4gIFBSSVpNX0RBVEVfVEVYVFMsXG4gIFBSSVpNX0lTX01PQklMRSxcbiAgUFJJWk1fTU9CSUxFX0NBTEVOREFSLFxuICBQUklaTV9USU1FX1RFWFRTLFxufSBmcm9tICcuLi8uLi8uLi90b2tlbnMnO1xuaW1wb3J0IHsgUHJpem1EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9kaWFsb2cnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9GT1JNQVQsIFBSSVpNX0RBVEVfU0VQQVJBVE9SLCBQcml6bURheVJhbmdlLCBQcml6bVRpbWUgfSBmcm9tICcuLi8uLi8uLi9AY29yZSc7XG5pbXBvcnQgeyBQcml6bUNvbnRyb2xWYWx1ZVRyYW5zZm9ybWVyLCBQcml6bURhdGVNb2RlLCBQcml6bVRpbWVNb2RlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFNpemUgfSBmcm9tICcuLi9jb21tb24vbW9kZWxzL3ByaXptLWlucHV0Lm1vZGVscyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlLCBQcml6bUZvcm1Db250cm9sSGVscGVycyB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IHByaXptSTE4bkluaXRXaXRoS2V5cyB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBgcHJpem0taW5wdXQtZGF0ZS10aW1lLXJhbmdlYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LWRhdGUtcmFuZ2UtdGltZS5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlVXJsczogW2AuL2lucHV0LWRhdGUtcmFuZ2UtdGltZS5jb21wb25lbnQubGVzc2BdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcml6bUkxOG5Jbml0V2l0aEtleXMoe1xuICAgICAgdGltZTogUFJJWk1fVElNRV9URVhUUyxcbiAgICAgIGRhdGVUZXh0czogUFJJWk1fREFURV9URVhUUyxcbiAgICB9KSxcbiAgICAuLi5QUklaTV9JTlBVVF9EQVRFX1RJTUVfUkFOR0VfUFJPVklERVJTLFxuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXREYXRlVGltZVJhbmdlQ29tcG9uZW50XG4gIGV4dGVuZHMgQWJzdHJhY3RQcml6bU51bGxhYmxlQ29udHJvbDxQcml6bURhdGVUaW1lUmFuZ2U+XG4gIGltcGxlbWVudHMgUHJpem1XaXRoT3B0aW9uYWxNaW5NYXg8UHJpem1EYXRlVGltZT4sIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yXG57XG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnRSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGlzYWJsZWRJdGVtSGFuZGxlcjogUHJpem1Cb29sZWFuSGFuZGxlcjxQcml6bURheT4gPSBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1hcmtlckhhbmRsZXI6IFByaXptTWFya2VySGFuZGxlciA9IFBSSVpNX0RFRkFVTFRfTUFSS0VSX0hBTkRMRVI7XG5cbiAgQElucHV0KCkgZm9yY2VDbGVhcjogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbGFiZWwgPSAn0JLRi9Cx0LXRgNC40YLQtSDQtNCw0YLRgyDQuCDQstGA0LXQvNGPJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNpemU6IFByaXptSW5wdXRTaXplID0gJ20nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3V0ZXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHRpbWVJdGVtczogcmVhZG9ubHkgUHJpem1UaW1lW10gPSBuZXcgQXJyYXkoMjQpLmZpbGwobnVsbCkubWFwKChfLCBpKSA9PiBuZXcgUHJpem1UaW1lKGksIDAsIDAsIDApKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRlZmF1bHRWaWV3ZWRNb250aCA9IFByaXptTW9udGguY3VycmVudExvY2FsKCk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpdGVtczogcmVhZG9ubHkgUHJpem1EYXlSYW5nZVBlcmlvZFtdID0gW107XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgdGltZU1vZGU6IFByaXptVGltZU1vZGUgPSAnSEg6TU0nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluID0gUFJJWk1fRklSU1RfREFZX1dJVEhfVElNRTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heCA9IFBSSVpNX0xBU1RfREFZX1dJVEhfVElNRTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbkxlbmd0aDogUHJpem1EYXlMaWtlIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXhMZW5ndGg6IFByaXptRGF5TGlrZSB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgdGltZVN0cmljdCA9IGZhbHNlO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfaW5wdXRfZGF0ZV90aW1lX3JhbmdlJztcblxuICBwdWJsaWMgZGF0ZUNvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCk7XG4gIHB1YmxpYyB0aW1lQ29udHJvbEZyb20gPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCk7XG4gIHB1YmxpYyB0aW1lQ29udHJvbFRvID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgpO1xuXG4gIHB1YmxpYyBnZXQgbmF0aXZlRm9jdXNhYmxlRWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudCA/ICh0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KSA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudD8ubmF0aXZlRWxlbWVudFxuICAgICAgPyBwcml6bUlzTmF0aXZlRm9jdXNlZEluKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50KVxuICAgICAgOiBmYWxzZTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTZWxmKClcbiAgICBASW5qZWN0KE5nQ29udHJvbClcbiAgICBjb250cm9sOiBOZ0NvbnRyb2wgfCBudWxsLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveWVkJDogUHJpem1EZXN0cm95U2VydmljZSxcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChJbmplY3RvcikgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChQUklaTV9JU19NT0JJTEUpIHByaXZhdGUgcmVhZG9ubHkgaXNNb2JpbGU6IGJvb2xlYW4sXG4gICAgQEluamVjdChQcml6bURpYWxvZ1NlcnZpY2UpIHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nU2VydmljZTogUHJpem1EaWFsb2dTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQUklaTV9NT0JJTEVfQ0FMRU5EQVIpXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2JpbGVDYWxlbmRhcjogVHlwZTxhbnk+IHwgbnVsbCxcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfRk9STUFUKSByZWFkb25seSBkYXRlRm9ybWF0OiBQcml6bURhdGVNb2RlLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9TRVBBUkFUT1IpIHJlYWRvbmx5IGRhdGVTZXBhcmF0b3I6IHN0cmluZyxcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfVEVYVFMpXG4gICAgcmVhZG9ubHkgZGF0ZVRleHRzJDogT2JzZXJ2YWJsZTxSZWNvcmQ8UHJpem1EYXRlTW9kZSwgc3RyaW5nPj4sXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfUkFOR0VfVkFMVUVfVFJBTlNGT1JNRVIpXG4gICAgb3ZlcnJpZGUgcmVhZG9ubHkgdmFsdWVUcmFuc2Zvcm1lcjogUHJpem1Db250cm9sVmFsdWVUcmFuc2Zvcm1lcjxQcml6bURhdGVUaW1lUmFuZ2UgfCBudWxsPiB8IG51bGxcbiAgKSB7XG4gICAgc3VwZXIoY29udHJvbCwgY2hhbmdlRGV0ZWN0b3JSZWYsIHZhbHVlVHJhbnNmb3JtZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHZhbHVlQ2hhbmdlZChcbiAgICBwcmV2aW91c1ZhbHVlOiBQcml6bURhdGVUaW1lUmFuZ2UgfCBudWxsLFxuICAgIGN1cnJlbnRWYWx1ZTogUHJpem1EYXRlVGltZVJhbmdlIHwgbnVsbFxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJldmlvdXNWYWx1ZT8udG9TdHJpbmcoKSAhPT0gY3VycmVudFZhbHVlPy50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgaWYgKCF0aGlzLmNvbnRyb2wpIHJldHVybjtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5jb250cm9sIGFzIFVudHlwZWRGb3JtQ29udHJvbDtcbiAgICB0aGlzLnN5bmNWYWx1ZXNCZXR3ZWVuQ29udHJvbHMoY29udHJvbCk7XG4gICAgdGhpcy5zeW5jU3RhdGVCZXR3ZWVuQ29udHJvbHMoY29udHJvbCk7XG4gICAgdGhpcy5zeW5jQWxsVmFsaWRhdG9ycyhjb250cm9sKTtcbiAgfVxuXG4gIHByaXZhdGUgc3luY1N0YXRlQmV0d2VlbkNvbnRyb2xzKG9yaWdpbjogVW50eXBlZEZvcm1Db250cm9sKTogdm9pZCB7XG4gICAgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuc3luY1N0YXRlcyhcbiAgICAgIG9yaWdpbixcbiAgICAgIGZhbHNlLFxuICAgICAgdGhpcy50aW1lQ29udHJvbEZyb20sXG4gICAgICB0aGlzLnRpbWVDb250cm9sVG8sXG4gICAgICB0aGlzLmRhdGVDb250cm9sXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIHN5bmNBbGxWYWxpZGF0b3JzKG9yaWdpbjogVW50eXBlZEZvcm1Db250cm9sKTogdm9pZCB7XG4gICAgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuc3luY0FsbFZhbGlkYXRvcnMoXG4gICAgICBvcmlnaW4sXG4gICAgICBmYWxzZSxcbiAgICAgIHRoaXMudGltZUNvbnRyb2xGcm9tLFxuICAgICAgdGhpcy50aW1lQ29udHJvbFRvLFxuICAgICAgdGhpcy5kYXRlQ29udHJvbFxuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVmFsdWVzQmV0d2VlbkNvbnRyb2xzKG9yaWdpbjogVW50eXBlZEZvcm1Db250cm9sKTogdm9pZCB7XG4gICAgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuc3luY1ZhbHVlczxQcml6bURhdGVUaW1lUmFuZ2UsIFByaXptRGF5UmFuZ2U+KFxuICAgICAgb3JpZ2luLFxuICAgICAgKHZhbHVlOiBQcml6bURhdGVUaW1lUmFuZ2UpID0+IHZhbHVlPy5kYXlSYW5nZSxcbiAgICAgICgkZXZlbnQ6IFByaXptRGF5UmFuZ2UpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBQcml6bUZvcm1Db250cm9sSGVscGVycy5nZXRWYWx1ZTxQcml6bURhdGVUaW1lUmFuZ2U+KG9yaWdpbik7XG4gICAgICAgIHZhbHVlPy51cGRhdGVEYXlSYW5nZSgkZXZlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZT8uY29weSgpIGFzIGFueTtcbiAgICAgIH0sXG4gICAgICB0aGlzLmRhdGVDb250cm9sXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpXG4gICAgICAuc3Vic2NyaWJlKCk7XG5cbiAgICBQcml6bUZvcm1Db250cm9sSGVscGVycy5zeW5jVmFsdWVzPFByaXptRGF0ZVRpbWVSYW5nZSwgUHJpem1UaW1lPihcbiAgICAgIG9yaWdpbixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICh2YWx1ZTogUHJpem1EYXRlVGltZVJhbmdlKSA9PiB2YWx1ZT8udGltZVJhbmdlPy5mcm9tLFxuICAgICAgKCRldmVudDogUHJpem1UaW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuZ2V0VmFsdWU8UHJpem1EYXRlVGltZVJhbmdlPihvcmlnaW4pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdmFsdWUudGltZVJhbmdlLmZyb20gPSAkZXZlbnQ7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlPy5jb3B5KCk7XG4gICAgICB9LFxuICAgICAgdGhpcy50aW1lQ29udHJvbEZyb21cbiAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSlcbiAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNWYWx1ZXM8UHJpem1EYXRlVGltZVJhbmdlLCBQcml6bVRpbWU+KFxuICAgICAgb3JpZ2luLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgKHZhbHVlOiBQcml6bURhdGVUaW1lUmFuZ2UpID0+IHZhbHVlPy50aW1lUmFuZ2U/LnRvLFxuICAgICAgKCRldmVudDogUHJpem1UaW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuZ2V0VmFsdWU8UHJpem1EYXRlVGltZVJhbmdlPihvcmlnaW4pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdmFsdWUudGltZVJhbmdlLnRvID0gJGV2ZW50O1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZT8uY29weSgpO1xuICAgICAgfSxcbiAgICAgIHRoaXMudGltZUNvbnRyb2xUb1xuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0VmFsdWUoKTogUHJpem1EYXRlVGltZVJhbmdlIHtcbiAgICByZXR1cm4gbmV3IFByaXptRGF0ZVRpbWVSYW5nZShcbiAgICAgIG5ldyBQcml6bURheVJhbmdlKFxuICAgICAgICBQcml6bURheS5mcm9tTG9jYWxOYXRpdmVEYXRlKG5ldyBEYXRlKCkpLFxuICAgICAgICBQcml6bURheS5mcm9tTG9jYWxOYXRpdmVEYXRlKG5ldyBEYXRlKCkpLmFwcGVuZCh7IG1vbnRoOiAyIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIiwiPHByaXptLWlucHV0LWRhdGUtcmFuZ2VcbiAgI2ZvY3VzYWJsZUVsZW1lbnRSZWZcbiAgW2Rpc2FibGVkSXRlbUhhbmRsZXJdPVwiZGlzYWJsZWRJdGVtSGFuZGxlclwiXG4gIFtsYWJlbF09XCJsYWJlbFwiXG4gIFttYXJrZXJIYW5kbGVyXT1cIm1hcmtlckhhbmRsZXJcIlxuICBbZGVmYXVsdFZpZXdlZE1vbnRoXT1cImRlZmF1bHRWaWV3ZWRNb250aFwiXG4gIFtpdGVtc109XCJpdGVtc1wiXG4gIFtzaXplXT1cInNpemVcIlxuICBbZm9yY2VDbGVhcl09XCJmb3JjZUNsZWFyXCJcbiAgW291dGVyXT1cIm91dGVyXCJcbiAgW2Zvcm1Db250cm9sXT1cImRhdGVDb250cm9sXCJcbiAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgW21pbl09XCIkYW55KG1pbj8uZGF5KVwiXG4gIFttYXhdPVwiJGFueShtYXg/LmRheSlcIlxuPlxuICA8bmctdGVtcGxhdGUgI2Zvb3RlclRvIGxldC16b25lPVwiem9uZVwiPlxuICAgIDxwcml6bS1pbnB1dC10aW1lXG4gICAgICBbcHJpem1FdmVudFpvbmVQYXJlbnRdPVwiem9uZVwiXG4gICAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAgIFtzdHlsZS4tLXByaXptLWRyb3Bkb3duLWhvc3Qtd2lkdGhdPVwiJzEwMCUnXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJ0aW1lQ29udHJvbEZyb21cIlxuICAgICAgW3N0cmljdF09XCJ0aW1lU3RyaWN0XCJcbiAgICAgIFtpdGVtc109XCJ0aW1lSXRlbXNcIlxuICAgICAgW21vZGVdPVwidGltZU1vZGVcIlxuICAgID5cbiAgICA8L3ByaXptLWlucHV0LXRpbWU+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy10ZW1wbGF0ZSAjZm9vdGVyRnJvbSBsZXQtem9uZT1cInpvbmVcIj5cbiAgICA8cHJpem0taW5wdXQtdGltZVxuICAgICAgW3ByaXptRXZlbnRab25lUGFyZW50XT1cInpvbmVcIlxuICAgICAgW3N0eWxlLi0tcHJpem0tZHJvcGRvd24taG9zdC13aWR0aF09XCInMTAwJSdcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cInRpbWVDb250cm9sVG9cIlxuICAgICAgW2l0ZW1zXT1cInRpbWVJdGVtc1wiXG4gICAgICBbbW9kZV09XCJ0aW1lTW9kZVwiXG4gICAgPlxuICAgIDwvcHJpem0taW5wdXQtdGltZT5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvcHJpem0taW5wdXQtZGF0ZS1yYW5nZT5cbiJdfQ==