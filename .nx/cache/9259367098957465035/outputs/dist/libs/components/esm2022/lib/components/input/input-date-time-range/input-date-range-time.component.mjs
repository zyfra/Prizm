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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateTimeRangeComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: i1.PrizmDestroyService }, { token: ChangeDetectorRef }, { token: Injector }, { token: PRIZM_IS_MOBILE }, { token: PrizmDialogService }, { token: PRIZM_MOBILE_CALENDAR, optional: true }, { token: PRIZM_DATE_FORMAT }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_RANGE_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputDateTimeRangeComponent, selector: "prizm-input-date-time-range", inputs: { disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", forceClear: "forceClear", label: "label", size: "size", outer: "outer", timeItems: "timeItems", defaultViewedMonth: "defaultViewedMonth", items: "items", placeholder: "placeholder", timeMode: "timeMode", min: "min", max: "max", minLength: "minLength", maxLength: "maxLength", timeStrict: "timeStrict" }, providers: [
            ...prizmI18nInitWithKeys({
                time: PRIZM_TIME_TEXTS,
                dateTexts: PRIZM_DATE_TEXTS,
            }),
            ...PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS,
            PrizmDestroyService,
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-input-date-range\n  #focusableElementRef\n  [disabledItemHandler]=\"disabledItemHandler\"\n  [label]=\"label\"\n  [markerHandler]=\"markerHandler\"\n  [defaultViewedMonth]=\"defaultViewedMonth\"\n  [items]=\"items\"\n  [size]=\"size\"\n  [forceClear]=\"forceClear\"\n  [outer]=\"outer\"\n  [formControl]=\"dateControl\"\n  [placeholder]=\"placeholder\"\n  [min]=\"$any(min?.day)\"\n  [max]=\"$any(max?.day)\"\n>\n  <ng-template #footerTo let-zone=\"zone\">\n    <prizm-input-time\n      [prizmEventZoneParent]=\"zone\"\n      [size]=\"size\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [formControl]=\"timeControlFrom\"\n      [strict]=\"timeStrict\"\n      [items]=\"timeItems\"\n      [mode]=\"timeMode\"\n    >\n    </prizm-input-time>\n  </ng-template>\n  <ng-template #footerFrom let-zone=\"zone\">\n    <prizm-input-time\n      [prizmEventZoneParent]=\"zone\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [formControl]=\"timeControlTo\"\n      [items]=\"timeItems\"\n      [mode]=\"timeMode\"\n    >\n    </prizm-input-time>\n  </ng-template>\n</prizm-input-date-range>\n", styles: [":host{--prizm-calendar-footer-height: 40px;--prizm-input-layout-width: 100%;--prizm-dropdown-host-width: 100%;display:block}prizm-input-time{width:100%}\n"], dependencies: [{ kind: "component", type: i2.PrizmInputDateRangeComponent, selector: "prizm-input-date-range", inputs: ["disabledItemHandler", "markerHandler", "defaultViewedMonth", "items", "forceClear", "placeholder", "min", "max", "minLength", "maxLength", "label", "size", "outer"] }, { kind: "directive", type: i3.PrizmDropdownZoneDirective, selector: "[prizmEventZone]:not(ng-container), [prizmEventZoneChange]:not(ng-container), [prizmEventZoneParent]:not(ng-container)", inputs: ["prizmEventZoneParent", "prizmEventZoneHost"], outputs: ["prizmEventZoneEvent"], exportAs: ["prizmEventZone"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "component", type: i5.PrizmInputTimeComponent, selector: "prizm-input-time", inputs: ["placeholder", "forceClear", "label", "size", "outer", "disabledItemHandler", "items", "itemSize", "strict", "mode", "extraButtonInjector"] }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateTimeRangeComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1yYW5nZS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS10aW1lLXJhbmdlL2lucHV0LWRhdGUtcmFuZ2UtdGltZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtdGltZS1yYW5nZS9pbnB1dC1kYXRlLXJhbmdlLXRpbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxFQUVKLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRzFHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxP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MkJBQUMsaUJBQWlCOzswQkFDeEIsTUFBTTsyQkFBQyxvQkFBb0I7OzBCQUMzQixNQUFNOzJCQUFDLGdCQUFnQjs7MEJBRXZCLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsa0NBQWtDOzRDQWpHNUIsZ0JBQWdCO3NCQUQvQixTQUFTO3VCQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFLdEQsbUJBQW1CO3NCQUZsQixLQUFLO2dCQU1OLGFBQWE7c0JBRlosS0FBSztnQkFJRyxVQUFVO3NCQUFsQixLQUFLO2dCQUlOLEtBQUs7c0JBRkosS0FBSztnQkFNTixJQUFJO3NCQUZILEtBQUs7Z0JBTU4sS0FBSztzQkFGSixLQUFLO2dCQU1OLFNBQVM7c0JBRlIsS0FBSztnQkFNTixrQkFBa0I7c0JBRmpCLEtBQUs7Z0JBTU4sS0FBSztzQkFGSixLQUFLO2dCQU1OLFdBQVc7c0JBRlYsS0FBSztnQkFNTixRQUFRO3NCQUZQLEtBQUs7Z0JBTU4sR0FBRztzQkFGRixLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFNTixTQUFTO3NCQUZSLEtBQUs7Z0JBTU4sU0FBUztzQkFGUixLQUFLO2dCQU1OLFVBQVU7c0JBRlQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgVHlwZSxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0lOUFVUX0RBVEVfVElNRV9SQU5HRV9QUk9WSURFUlMgfSBmcm9tICcuL2lucHV0LWRhdGUtcmFuZ2UtdGltZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQWJzdHJhY3RQcml6bU51bGxhYmxlQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L251bGxhYmxlLWNvbnRyb2wnO1xuaW1wb3J0IHsgUHJpem1XaXRoT3B0aW9uYWxNaW5NYXggfSBmcm9tICcuLi8uLi8uLi90eXBlcy93aXRoLW9wdGlvbmFsLW1pbi1tYXgnO1xuaW1wb3J0IHsgUHJpem1EYXkgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF5JztcbmltcG9ydCB7IFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZm9jdXNhYmxlLWVsZW1lbnQtYWNjZXNzb3InO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFByaXptQm9vbGVhbkhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9oYW5kbGVyJztcbmltcG9ydCB7IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2Fsd2F5cy1mYWxzZS1oYW5kbGVyJztcbmltcG9ydCB7IFByaXptTWFya2VySGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL21hcmtlci1oYW5kbGVyJztcbmltcG9ydCB7IFBSSVpNX0RFRkFVTFRfTUFSS0VSX0hBTkRMRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvZGVmYXVsdC1tYXJrZXItaGFuZGxlcic7XG5pbXBvcnQgeyBQcml6bU1vbnRoIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL21vbnRoJztcbmltcG9ydCB7IFBSSVpNX0ZJUlNUX0RBWV9XSVRIX1RJTUUsIFBSSVpNX0xBU1RfREFZX1dJVEhfVElNRSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXlzLmNvbnN0JztcbmltcG9ydCB7IFByaXptRGF5TGlrZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RheS1saWtlJztcbmltcG9ydCB7IFByaXptRGF0ZVRpbWUgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF0ZS10aW1lJztcbmltcG9ydCB7IHByaXptSXNOYXRpdmVGb2N1c2VkSW4gfSBmcm9tICcuLi8uLi8uLi91dGlsJztcbmltcG9ydCB7IFByaXptRGF0ZVRpbWVSYW5nZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXktdGltZS1yYW5nZSc7XG5pbXBvcnQgeyBQcml6bURheVJhbmdlUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvY2xhc3Nlcy9kYXktcmFuZ2UtcGVyaW9kJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgUFJJWk1fREFURV9SQU5HRV9WQUxVRV9UUkFOU0ZPUk1FUixcbiAgUFJJWk1fREFURV9URVhUUyxcbiAgUFJJWk1fSVNfTU9CSUxFLFxuICBQUklaTV9NT0JJTEVfQ0FMRU5EQVIsXG4gIFBSSVpNX1RJTUVfVEVYVFMsXG59IGZyb20gJy4uLy4uLy4uL3Rva2Vucyc7XG5pbXBvcnQgeyBQcml6bURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaWFsb2dzL2RpYWxvZyc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX0ZPUk1BVCwgUFJJWk1fREFURV9TRVBBUkFUT1IsIFByaXptRGF5UmFuZ2UsIFByaXptVGltZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlJztcbmltcG9ydCB7IFByaXptQ29udHJvbFZhbHVlVHJhbnNmb3JtZXIsIFByaXptRGF0ZU1vZGUsIFByaXptVGltZU1vZGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bUlucHV0U2l6ZSB9IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvcHJpem0taW5wdXQubW9kZWxzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UsIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgcHJpem1JMThuSW5pdFdpdGhLZXlzIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBwcml6bS1pbnB1dC1kYXRlLXRpbWUtcmFuZ2VgLFxuICB0ZW1wbGF0ZVVybDogYC4vaW5wdXQtZGF0ZS1yYW5nZS10aW1lLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vaW5wdXQtZGF0ZS1yYW5nZS10aW1lLmNvbXBvbmVudC5sZXNzYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByaXptSTE4bkluaXRXaXRoS2V5cyh7XG4gICAgICB0aW1lOiBQUklaTV9USU1FX1RFWFRTLFxuICAgICAgZGF0ZVRleHRzOiBQUklaTV9EQVRFX1RFWFRTLFxuICAgIH0pLFxuICAgIC4uLlBSSVpNX0lOUFVUX0RBVEVfVElNRV9SQU5HRV9QUk9WSURFUlMsXG4gICAgUHJpem1EZXN0cm95U2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dERhdGVUaW1lUmFuZ2VDb21wb25lbnRcbiAgZXh0ZW5kcyBBYnN0cmFjdFByaXptTnVsbGFibGVDb250cm9sPFByaXptRGF0ZVRpbWVSYW5nZT5cbiAgaW1wbGVtZW50cyBQcml6bVdpdGhPcHRpb25hbE1pbk1heDxQcml6bURhdGVUaW1lPiwgUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3JcbntcbiAgQFZpZXdDaGlsZCgnZm9jdXNhYmxlRWxlbWVudFJlZicsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBwdWJsaWMgcmVhZG9ubHkgZm9jdXNhYmxlRWxlbWVudD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBQcml6bUJvb2xlYW5IYW5kbGVyPFByaXptRGF5PiA9IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWFya2VySGFuZGxlcjogUHJpem1NYXJrZXJIYW5kbGVyID0gUFJJWk1fREVGQVVMVF9NQVJLRVJfSEFORExFUjtcblxuICBASW5wdXQoKSBmb3JjZUNsZWFyOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBsYWJlbCA9ICfQktGL0LHQtdGA0LjRgtC1INC00LDRgtGDINC4INCy0YDQtdC80Y8nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2l6ZTogUHJpem1JbnB1dFNpemUgPSAnbSc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdXRlciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgdGltZUl0ZW1zOiByZWFkb25seSBQcml6bVRpbWVbXSA9IG5ldyBBcnJheSgyNCkuZmlsbChudWxsKS5tYXAoKF8sIGkpID0+IG5ldyBQcml6bVRpbWUoaSwgMCwgMCwgMCkpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGVmYXVsdFZpZXdlZE1vbnRoID0gUHJpem1Nb250aC5jdXJyZW50TG9jYWwoKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGl0ZW1zOiByZWFkb25seSBQcml6bURheVJhbmdlUGVyaW9kW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICB0aW1lTW9kZTogUHJpem1UaW1lTW9kZSA9ICdISDpNTSc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtaW4gPSBQUklaTV9GSVJTVF9EQVlfV0lUSF9USU1FO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4ID0gUFJJWk1fTEFTVF9EQVlfV0lUSF9USU1FO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluTGVuZ3RoOiBQcml6bURheUxpa2UgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heExlbmd0aDogUHJpem1EYXlMaWtlIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICB0aW1lU3RyaWN0ID0gZmFsc2U7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9pbnB1dF9kYXRlX3RpbWVfcmFuZ2UnO1xuXG4gIHB1YmxpYyBkYXRlQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHRpbWVDb250cm9sRnJvbSA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHRpbWVDb250cm9sVG8gPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCk7XG5cbiAgcHVibGljIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50ID8gKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50XG4gICAgICA/IHByaXptSXNOYXRpdmVGb2N1c2VkSW4odGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICA6IGZhbHNlO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIEBJbmplY3QoTmdDb250cm9sKVxuICAgIGNvbnRyb2w6IE5nQ29udHJvbCB8IG51bGwsXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95ZWQkOiBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KFBSSVpNX0lTX01PQklMRSkgcHJpdmF0ZSByZWFkb25seSBpc01vYmlsZTogYm9vbGVhbixcbiAgICBASW5qZWN0KFByaXptRGlhbG9nU2VydmljZSkgcHJpdmF0ZSByZWFkb25seSBkaWFsb2dTZXJ2aWNlOiBQcml6bURpYWxvZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBSSVpNX01PQklMRV9DQUxFTkRBUilcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vYmlsZUNhbGVuZGFyOiBUeXBlPGFueT4gfCBudWxsLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9GT1JNQVQpIHJlYWRvbmx5IGRhdGVGb3JtYXQ6IFByaXptRGF0ZU1vZGUsXG4gICAgQEluamVjdChQUklaTV9EQVRFX1NFUEFSQVRPUikgcmVhZG9ubHkgZGF0ZVNlcGFyYXRvcjogc3RyaW5nLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9URVhUUylcbiAgICByZWFkb25seSBkYXRlVGV4dHMkOiBPYnNlcnZhYmxlPFJlY29yZDxQcml6bURhdGVNb2RlLCBzdHJpbmc+PixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUFJJWk1fREFURV9SQU5HRV9WQUxVRV9UUkFOU0ZPUk1FUilcbiAgICBvdmVycmlkZSByZWFkb25seSB2YWx1ZVRyYW5zZm9ybWVyOiBQcml6bUNvbnRyb2xWYWx1ZVRyYW5zZm9ybWVyPFByaXptRGF0ZVRpbWVSYW5nZSB8IG51bGw+IHwgbnVsbFxuICApIHtcbiAgICBzdXBlcihjb250cm9sLCBjaGFuZ2VEZXRlY3RvclJlZiwgdmFsdWVUcmFuc2Zvcm1lcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdmFsdWVDaGFuZ2VkKFxuICAgIHByZXZpb3VzVmFsdWU6IFByaXptRGF0ZVRpbWVSYW5nZSB8IG51bGwsXG4gICAgY3VycmVudFZhbHVlOiBQcml6bURhdGVUaW1lUmFuZ2UgfCBudWxsXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcmV2aW91c1ZhbHVlPy50b1N0cmluZygpICE9PSBjdXJyZW50VmFsdWU/LnRvU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBpZiAoIXRoaXMuY29udHJvbCkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmNvbnRyb2wgYXMgVW50eXBlZEZvcm1Db250cm9sO1xuICAgIHRoaXMuc3luY1ZhbHVlc0JldHdlZW5Db250cm9scyhjb250cm9sKTtcbiAgICB0aGlzLnN5bmNTdGF0ZUJldHdlZW5Db250cm9scyhjb250cm9sKTtcbiAgICB0aGlzLnN5bmNBbGxWYWxpZGF0b3JzKGNvbnRyb2wpO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU3RhdGVCZXR3ZWVuQ29udHJvbHMob3JpZ2luOiBVbnR5cGVkRm9ybUNvbnRyb2wpOiB2b2lkIHtcbiAgICBQcml6bUZvcm1Db250cm9sSGVscGVycy5zeW5jU3RhdGVzKFxuICAgICAgb3JpZ2luLFxuICAgICAgZmFsc2UsXG4gICAgICB0aGlzLnRpbWVDb250cm9sRnJvbSxcbiAgICAgIHRoaXMudGltZUNvbnRyb2xUbyxcbiAgICAgIHRoaXMuZGF0ZUNvbnRyb2xcbiAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSlcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3luY0FsbFZhbGlkYXRvcnMob3JpZ2luOiBVbnR5cGVkRm9ybUNvbnRyb2wpOiB2b2lkIHtcbiAgICBQcml6bUZvcm1Db250cm9sSGVscGVycy5zeW5jQWxsVmFsaWRhdG9ycyhcbiAgICAgIG9yaWdpbixcbiAgICAgIGZhbHNlLFxuICAgICAgdGhpcy50aW1lQ29udHJvbEZyb20sXG4gICAgICB0aGlzLnRpbWVDb250cm9sVG8sXG4gICAgICB0aGlzLmRhdGVDb250cm9sXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIHN5bmNWYWx1ZXNCZXR3ZWVuQ29udHJvbHMob3JpZ2luOiBVbnR5cGVkRm9ybUNvbnRyb2wpOiB2b2lkIHtcbiAgICBQcml6bUZvcm1Db250cm9sSGVscGVycy5zeW5jVmFsdWVzPFByaXptRGF0ZVRpbWVSYW5nZSwgUHJpem1EYXlSYW5nZT4oXG4gICAgICBvcmlnaW4sXG4gICAgICAodmFsdWU6IFByaXptRGF0ZVRpbWVSYW5nZSkgPT4gdmFsdWU/LmRheVJhbmdlLFxuICAgICAgKCRldmVudDogUHJpem1EYXlSYW5nZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLmdldFZhbHVlPFByaXptRGF0ZVRpbWVSYW5nZT4ob3JpZ2luKTtcbiAgICAgICAgdmFsdWU/LnVwZGF0ZURheVJhbmdlKCRldmVudCk7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlPy5jb3B5KCkgYXMgYW55O1xuICAgICAgfSxcbiAgICAgIHRoaXMuZGF0ZUNvbnRyb2xcbiAgICApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSlcbiAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNWYWx1ZXM8UHJpem1EYXRlVGltZVJhbmdlLCBQcml6bVRpbWU+KFxuICAgICAgb3JpZ2luLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgKHZhbHVlOiBQcml6bURhdGVUaW1lUmFuZ2UpID0+IHZhbHVlPy50aW1lUmFuZ2U/LmZyb20sXG4gICAgICAoJGV2ZW50OiBQcml6bVRpbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBQcml6bUZvcm1Db250cm9sSGVscGVycy5nZXRWYWx1ZTxQcml6bURhdGVUaW1lUmFuZ2U+KG9yaWdpbik7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB2YWx1ZS50aW1lUmFuZ2UuZnJvbSA9ICRldmVudDtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU/LmNvcHkoKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLnRpbWVDb250cm9sRnJvbVxuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKVxuICAgICAgLnN1YnNjcmliZSgpO1xuXG4gICAgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuc3luY1ZhbHVlczxQcml6bURhdGVUaW1lUmFuZ2UsIFByaXptVGltZT4oXG4gICAgICBvcmlnaW4sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAodmFsdWU6IFByaXptRGF0ZVRpbWVSYW5nZSkgPT4gdmFsdWU/LnRpbWVSYW5nZT8udG8sXG4gICAgICAoJGV2ZW50OiBQcml6bVRpbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBQcml6bUZvcm1Db250cm9sSGVscGVycy5nZXRWYWx1ZTxQcml6bURhdGVUaW1lUmFuZ2U+KG9yaWdpbik7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB2YWx1ZS50aW1lUmFuZ2UudG8gPSAkZXZlbnQ7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlPy5jb3B5KCk7XG4gICAgICB9LFxuICAgICAgdGhpcy50aW1lQ29udHJvbFRvXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHRWYWx1ZSgpOiBQcml6bURhdGVUaW1lUmFuZ2Uge1xuICAgIHJldHVybiBuZXcgUHJpem1EYXRlVGltZVJhbmdlKFxuICAgICAgbmV3IFByaXptRGF5UmFuZ2UoXG4gICAgICAgIFByaXptRGF5LmZyb21Mb2NhbE5hdGl2ZURhdGUobmV3IERhdGUoKSksXG4gICAgICAgIFByaXptRGF5LmZyb21Mb2NhbE5hdGl2ZURhdGUobmV3IERhdGUoKSkuYXBwZW5kKHsgbW9udGg6IDIgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCI8cHJpem0taW5wdXQtZGF0ZS1yYW5nZVxuICAjZm9jdXNhYmxlRWxlbWVudFJlZlxuICBbZGlzYWJsZWRJdGVtSGFuZGxlcl09XCJkaXNhYmxlZEl0ZW1IYW5kbGVyXCJcbiAgW2xhYmVsXT1cImxhYmVsXCJcbiAgW21hcmtlckhhbmRsZXJdPVwibWFya2VySGFuZGxlclwiXG4gIFtkZWZhdWx0Vmlld2VkTW9udGhdPVwiZGVmYXVsdFZpZXdlZE1vbnRoXCJcbiAgW2l0ZW1zXT1cIml0ZW1zXCJcbiAgW3NpemVdPVwic2l6ZVwiXG4gIFtmb3JjZUNsZWFyXT1cImZvcmNlQ2xlYXJcIlxuICBbb3V0ZXJdPVwib3V0ZXJcIlxuICBbZm9ybUNvbnRyb2xdPVwiZGF0ZUNvbnRyb2xcIlxuICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICBbbWluXT1cIiRhbnkobWluPy5kYXkpXCJcbiAgW21heF09XCIkYW55KG1heD8uZGF5KVwiXG4+XG4gIDxuZy10ZW1wbGF0ZSAjZm9vdGVyVG8gbGV0LXpvbmU9XCJ6b25lXCI+XG4gICAgPHByaXptLWlucHV0LXRpbWVcbiAgICAgIFtwcml6bUV2ZW50Wm9uZVBhcmVudF09XCJ6b25lXCJcbiAgICAgIFtzaXplXT1cInNpemVcIlxuICAgICAgW3N0eWxlLi0tcHJpem0tZHJvcGRvd24taG9zdC13aWR0aF09XCInMTAwJSdcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cInRpbWVDb250cm9sRnJvbVwiXG4gICAgICBbc3RyaWN0XT1cInRpbWVTdHJpY3RcIlxuICAgICAgW2l0ZW1zXT1cInRpbWVJdGVtc1wiXG4gICAgICBbbW9kZV09XCJ0aW1lTW9kZVwiXG4gICAgPlxuICAgIDwvcHJpem0taW5wdXQtdGltZT5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlICNmb290ZXJGcm9tIGxldC16b25lPVwiem9uZVwiPlxuICAgIDxwcml6bS1pbnB1dC10aW1lXG4gICAgICBbcHJpem1FdmVudFpvbmVQYXJlbnRdPVwiem9uZVwiXG4gICAgICBbc3R5bGUuLS1wcml6bS1kcm9wZG93bi1ob3N0LXdpZHRoXT1cIicxMDAlJ1wiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwidGltZUNvbnRyb2xUb1wiXG4gICAgICBbaXRlbXNdPVwidGltZUl0ZW1zXCJcbiAgICAgIFttb2RlXT1cInRpbWVNb2RlXCJcbiAgICA+XG4gICAgPC9wcml6bS1pbnB1dC10aW1lPlxuICA8L25nLXRlbXBsYXRlPlxuPC9wcml6bS1pbnB1dC1kYXRlLXJhbmdlPlxuIl19