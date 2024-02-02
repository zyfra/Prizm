import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Injector, Input, Optional, Self, ViewChild, } from '@angular/core';
import { NgControl, UntypedFormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, pluck, takeUntil } from 'rxjs/operators';
import { PRIZM_DATE_FILLER_LENGTH } from '../../../@core/date-time/date-fillers';
import { PRIZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PRIZM_DATE_SEPARATOR, prizmChangeDateSeparator } from '../../../@core/date-time/date-separator';
import { PrizmDay } from '../../../@core/date-time/day';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmTime } from '../../../@core/date-time/time';
import { AbstractPrizmControl } from '../../../abstract/control';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_DATE_TIME_SEPARATOR, PRIZM_DATE_TIME_SEPARATOR_NGX, } from '../../../constants/date-time-separator';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { PRIZM_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PRIZM_DATE_TEXTS, PRIZM_TIME_TEXTS } from '../../../tokens/i18n';
import { PRIZM_INPUT_DATE_TIME_PROVIDERS } from './input-date-time.providers';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { prizmCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { prizmCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { prizmClamp } from '../../../util/math/clamp';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PRIZM_STRICT_MATCHER } from '../../../constants';
import { PrizmFormControlHelpers } from '@prizm-ui/helpers';
import { prizmI18nInitWithKeys } from '../../../services';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ngx-mask";
import * as i4 from "../../data-list/data-list.component";
import * as i5 from "../common/input-layout/input-layout.component";
import * as i6 from "../common/input-icon-button/input-icon-button.component";
import * as i7 from "../common/input-status-text/input-status-text.directive";
import * as i8 from "../input-text/input-text.component";
import * as i9 from "../../../directives/lifecycle/lifecycle.directive";
import * as i10 from "../../../directives/prevent-default/prevent-default.directive";
import * as i11 from "../../calendar/calendar.component";
import * as i12 from "../../dropdowns/dropdown-host/dropdown-host.component";
import * as i13 from "rxjs";
export class PrizmInputDateTimeComponent extends AbstractPrizmControl {
    get filteredTime() {
        return this.filterTime(this.timeItems, this.timeMode, this.computedSearchTime);
    }
    get computedSearchTime() {
        return this.computedValue.length !== this.timeMode.length ? this.computedValue : ``;
    }
    constructor(control, changeDetectorRef, dateFormat, dateSeparator, timeTexts$, injector, dateTexts$, valueTransformer) {
        super(control, changeDetectorRef, valueTransformer);
        this.dateFormat = dateFormat;
        this.dateSeparator = dateSeparator;
        this.timeTexts$ = timeTexts$;
        this.injector = injector;
        this.dateTexts$ = dateTexts$;
        this.valueTransformer = valueTransformer;
        this.month = null;
        this.timeItems = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));
        this.label = 'Абсолютное';
        this.forceClear = null;
        this.placeholder = 'Выберите дату и время';
        this.size = 'm';
        this.extraButtonInjector = this.injector;
        this.outer = false;
        this.min = PRIZM_FIRST_DAY;
        this.max = PRIZM_LAST_DAY;
        this.timeStrict = false;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.defaultActiveYearMonth = PrizmMonth.currentLocal();
        this.timeMode = `HH:MM`;
        this.testId_ = 'ui_input_date_time';
        this.openTimeTemplate = false;
        this.open = false;
        this.filler$ = combineLatest([
            this.dateTexts$.pipe(map(dateTexts => prizmChangeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator))),
            this.timeTexts$.pipe(pluck(this.timeMode)),
        ]).pipe(map(fillers => this.getDateTimeString(...fillers)));
        this.innerControl = new UntypedFormControl();
    }
    filterTime(items, mode, search) {
        return items.filter(item => item.toString(mode).includes(search));
    }
    syncStateBetweenControls() {
        if (this.control instanceof UntypedFormControl)
            PrizmFormControlHelpers.syncStates(this.control, false, this.innerControl)
                .pipe(takeUntil(this.destroy$))
                .subscribe();
    }
    syncValidatorsBetweenControls() {
        if (this.control instanceof UntypedFormControl)
            PrizmFormControlHelpers.syncAllValidators(this.control, false, this.innerControl)
                .pipe(takeUntil(this.destroy$))
                .subscribe();
    }
    syncValuesBetweenControls() {
        if (this.control instanceof UntypedFormControl)
            PrizmFormControlHelpers.syncValues(this.control, () => this.computedValue, null, this.innerControl)
                .pipe(takeUntil(this.destroy$))
                .subscribe();
    }
    ngOnInit() {
        super.ngOnInit();
        this.syncStateBetweenControls();
        this.syncValidatorsBetweenControls();
        this.syncValuesBetweenControls();
        this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
    }
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return this.focusableElement?.nativeElement
            ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
            : false;
    }
    get fillerLength() {
        return PRIZM_DATE_FILLER_LENGTH + PRIZM_DATE_TIME_SEPARATOR.length + this.timeMode.length;
    }
    get textMaskOptions() {
        return this.calculateMask(this.value[0], this.calendarMinDay, this.calendarMaxDay, this.timeMode, this.dateFormat, this.dateSeparator);
    }
    get stringValue() {
        return this.value?.toString() ?? '';
    }
    get computedValue() {
        const { value, nativeValue, timeMode } = this;
        const [date, time] = value;
        const hasTimeInputChars = nativeValue.length > PRIZM_DATE_FILLER_LENGTH;
        if (!date || (!time && hasTimeInputChars)) {
            return nativeValue;
        }
        return this.getDateTimeString(date, time, timeMode);
    }
    get calendarValue() {
        return this.value[0];
    }
    get calendarMinDay() {
        return Array.isArray(this.min) ? this.min[0] : this.min;
    }
    get calendarMaxDay() {
        return Array.isArray(this.max) ? this.max[0] : this.max;
    }
    get computedActiveYearMonth() {
        return this.month || this.value[0] || this.defaultActiveYearMonth;
    }
    get nativeValue() {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : ``;
    }
    set nativeValue(value) {
        if (!this.nativeFocusableElement) {
            return;
        }
        this.nativeFocusableElement.value = value;
    }
    onClick() {
        this.open = !this.open;
    }
    onValueChange(value) {
        if (!value || value.length < 16) {
            if (!value)
                this.updateValue([null, null]);
            return;
        }
        const [date, time] = value.split(PRIZM_DATE_TIME_SEPARATOR_NGX);
        const parsedDate = PrizmDay.normalizeParse(date, this.dateFormat);
        let parsedTime = time && time.length === this.timeMode.length
            ? this.prizmClampTime(PrizmTime.fromString(time), parsedDate)
            : null;
        if (parsedTime)
            parsedTime = PrizmTime.correctTime(parsedTime);
        const match = parsedTime && this.getMatch(time);
        this.updateValue([
            parsedDate,
            match || (this.timeStrict ? this.findNearestTimeFromItems(parsedTime) : parsedTime),
        ]);
        this.open = false;
    }
    onDayClick(day, time) {
        const modifiedTime = time ?? (this.value[1] && this.prizmClampTime(this.value[1], day)) ?? new PrizmTime(0, 0);
        this.updateValue([day, modifiedTime]);
        this.updateNativeValue(day);
        this.open = false;
    }
    onHovered(hovered) {
        this.updateHovered(hovered);
    }
    onMonthChange(month) {
        this.month = month;
    }
    onOpenChange(open) {
        this.open = open;
    }
    onFocused(focused) {
        this.updateFocused(focused);
        if (focused ||
            this.value[0] === null ||
            this.value[1] !== null ||
            this.nativeValue.length <= this.fillerLength + PRIZM_DATE_TIME_SEPARATOR.length ||
            this.timeMode === `HH:MM`) {
            return;
        }
        const [, time] = this.nativeValue.split(PRIZM_DATE_TIME_SEPARATOR);
        if (!time) {
            return;
        }
        const parsedTime = PrizmTime.fromString(time);
        this.updateValue([this.value[0], parsedTime]);
        setTimeout(() => {
            if (this.nativeValue.endsWith(`.`) || this.nativeValue.endsWith(`:`)) {
                this.nativeValue = this.nativeValue.slice(0, -1);
            }
        });
    }
    setDisabledState() {
        super.setDisabledState();
        this.open = false;
    }
    writeValue(value) {
        super.writeValue(value);
        this.nativeValue = value && (value[0] || value[1]) ? this.computedValue : ``;
    }
    getFallbackValue() {
        return [null, null];
    }
    valueIdenticalComparator(oldValue, newValue) {
        return (newValue &&
            oldValue &&
            prizmNullableSame(oldValue[0], newValue[0], (a, b) => a?.daySame(b)) &&
            prizmNullableSame(oldValue[1], newValue[1], (a, b) => String(a) === String(b)));
    }
    calculateMask(day, min, max, timeMode, dateFormat, dateSeparator) {
        return `${prizmCreateDateNgxMask(dateFormat, dateSeparator)} ${prizmCreateTimeNgxMask(timeMode)}`;
    }
    getDateTimeString(date, time, timeMode = `HH:MM`) {
        const dateString = date instanceof PrizmDay ? date.toString(this.dateFormat, this.dateSeparator) : date;
        const timeString = time instanceof PrizmTime ? time.toString(timeMode) : time || ``;
        return `${dateString}${PRIZM_DATE_TIME_SEPARATOR}${timeString}`;
    }
    updateNativeValue(day) {
        const time = this.nativeValue.split(PRIZM_DATE_TIME_SEPARATOR)[1] || ``;
        this.nativeValue = this.getDateTimeString(day, time);
    }
    findNearestTimeFromItems(value) {
        return this.timeItems.reduce((previous, current) => Math.abs(current.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds()) <
            Math.abs(previous.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds())
            ? current
            : previous);
    }
    getMatch(value) {
        return this.timeItems.find(item => PRIZM_STRICT_MATCHER(item, value));
    }
    onTimeMenuClick(item, ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.openTimeTemplate = this.open = false;
        this.changeDetectorRef.markForCheck();
        if (this.value[1] && item.isSameTime(this.value[1]))
            return;
        this.onDayClick(this.value[0] ?? PrizmDay.currentLocal(), item);
    }
    prizmClampTime(time, day) {
        const ms = time.toAbsoluteMilliseconds();
        const min = Array.isArray(this.min) && day.daySame(this.calendarMinDay)
            ? this.min[1].toAbsoluteMilliseconds()
            : -Infinity;
        const max = Array.isArray(this.max) && day.daySame(this.calendarMaxDay)
            ? this.max[1].toAbsoluteMilliseconds()
            : Infinity;
        return PrizmTime.fromAbsoluteMilliseconds(prizmClamp(ms, min, max));
    }
    openTimeDropdown() {
        this.openTimeTemplate = !this.openTimeTemplate;
    }
    openDateDropdown() {
        this.openTimeTemplate = null;
        this.focusableElement?.nativeElement.focus();
        // this.openTimeTemplate = !this.openTimeTemplate;
    }
}
PrizmInputDateTimeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateTimeComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: ChangeDetectorRef }, { token: PRIZM_DATE_FORMAT }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_TIME_TEXTS }, { token: i0.Injector }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_TIME_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputDateTimeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputDateTimeComponent, selector: "prizm-input-date-time", inputs: { timeItems: "timeItems", label: "label", forceClear: "forceClear", placeholder: "placeholder", size: "size", extraButtonInjector: "extraButtonInjector", outer: "outer", min: "min", max: "max", timeStrict: "timeStrict", disabledItemHandler: "disabledItemHandler", defaultActiveYearMonth: "defaultActiveYearMonth", timeMode: "timeMode" }, host: { listeners: { "click": "onClick()" } }, providers: [
        ...prizmI18nInitWithKeys({
            time: PRIZM_TIME_TEXTS,
            dateTexts: PRIZM_DATE_TEXTS,
        }),
        ...PRIZM_INPUT_DATE_TIME_PROVIDERS,
    ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  #prizmDropdownHostComponent\n  [style.--prizm-dropdown-host-width]=\"'100%'\"\n  [canOpen]=\"interactive\"\n  [content]=\"openTimeTemplate ? dropdownTimeTemplate : dropdownDateTemplate\"\n  [prizmDropdownHostWidth]=\"openTimeTemplate ? '100%' : 'auto'\"\n  [isOpen]=\"interactive && (openTimeTemplate || open)\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event); $event && prizmDropdownHostComponent.reCalculatePositions()\"\n>\n  <prizm-input-layout [label]=\"label\" [outer]=\"outer\" [forceClear]=\"forceClear\" [size]=\"size\">\n    <ng-template prizmInputStatusText>\u041E\u0448\u0438\u0431\u043A\u0430! \u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442</ng-template>\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"textMaskOptions\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [readonly]=\"readOnly\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"computedDisabled\"\n      [formControl]=\"innerControl\"\n      prizmInput\n    />\n    <!--    [ngModel]=\"computedValue\"-->\n    <!--    (ngModelChange)=\"onValueChange($event || '')\"-->\n\n    <!--    [patterns]=\"fixedPatternForTime\"-->\n    <ng-container prizm-input-right>\n      <button\n        [interactive]=\"true\"\n        (click)=\"openDateDropdown()\"\n        prizmInputIconButton=\"date-calendar-blank\"\n      ></button>\n      <button [interactive]=\"true\" (click)=\"openTimeDropdown()\" prizmInputIconButton=\"date-clock\"></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n</prizm-dropdown-host>\n\n<ng-template #dropdownDateTemplate>\n  <prizm-calendar\n    [min]=\"calendarMinDay\"\n    [max]=\"calendarMaxDay\"\n    [disabledItemHandler]=\"disabledItemHandler\"\n    [month]=\"computedActiveYearMonth\"\n    [value]=\"calendarValue\"\n    (dayClick)=\"onDayClick($event)\"\n    (monthChange)=\"onMonthChange($event)\"\n    prizmPreventDefault=\"mousedown\"\n    automation-id=\"prizm-input-date-time__calendar\"\n  ></prizm-calendar>\n</ng-template>\n\n<ng-template #dropdownTimeTemplate>\n  <prizm-data-list\n    class=\"block\"\n    *ngIf=\"timeItems.length\"\n    [style.--prizm-data-list-border]=\"0\"\n    (prizmAfterViewInit)=\"prizmDropdownHostComponent.reCalculatePositions()\"\n    (prizmOnDestroy)=\"openTimeTemplate = false\"\n    prizmLifecycle\n  >\n    <ng-container>\n      <div\n        class=\"time-item\"\n        *ngFor=\"let item of timeItems; let idx = index\"\n        [class.selected]=\"value?.[1] && item.isSameTime($any(value?.[1]))\"\n        (click)=\"$event.stopPropagation(); onTimeMenuClick(item, $event)\"\n      >\n        <span class=\"text\">\n          {{ item }}\n        </span>\n      </div>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.z-button{display:flex;height:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--prizm-base-03)}.time-item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.time-item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.time-item.selected{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20));color:var(--prizm-text-contrast)}.time-item:not(.selected):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "component", type: i4.PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "component", type: i5.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i6.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i7.PrizmInputStatusTextDirective, selector: "[prizmInputStatusText]", inputs: ["enable", "status"] }, { kind: "component", type: i8.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "directive", type: i9.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "directive", type: i10.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "component", type: i11.PrizmCalendarComponent, selector: "prizm-calendar", inputs: ["month", "value", "disabledItemHandler", "min", "daysWithStatus", "max", "minViewedMonth", "maxViewedMonth", "hoveredItem", "showAdjacent", "markerHandler"], outputs: ["dayClick", "monthChange", "hoveredItemChange"] }, { kind: "component", type: i12.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmInputDateTimeComponent.prototype, "timeItems", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeComponent.prototype, "label", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputDateTimeComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputDateTimeComponent.prototype, "extraButtonInjector", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeComponent.prototype, "outer", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeComponent.prototype, "timeStrict", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputDateTimeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateTimeComponent.prototype, "defaultActiveYearMonth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputDateTimeComponent.prototype, "timeMode", void 0);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, String]),
    __metadata("design:returntype", Array)
], PrizmInputDateTimeComponent.prototype, "filterTime", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, PrizmDay,
        PrizmDay, String, String, String]),
    __metadata("design:returntype", String)
], PrizmInputDateTimeComponent.prototype, "calculateMask", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", String)
], PrizmInputDateTimeComponent.prototype, "getDateTimeString", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateTimeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-date-time`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ...prizmI18nInitWithKeys({
                            time: PRIZM_TIME_TEXTS,
                            dateTexts: PRIZM_DATE_TEXTS,
                        }),
                        ...PRIZM_INPUT_DATE_TIME_PROVIDERS,
                    ], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  #prizmDropdownHostComponent\n  [style.--prizm-dropdown-host-width]=\"'100%'\"\n  [canOpen]=\"interactive\"\n  [content]=\"openTimeTemplate ? dropdownTimeTemplate : dropdownDateTemplate\"\n  [prizmDropdownHostWidth]=\"openTimeTemplate ? '100%' : 'auto'\"\n  [isOpen]=\"interactive && (openTimeTemplate || open)\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event); $event && prizmDropdownHostComponent.reCalculatePositions()\"\n>\n  <prizm-input-layout [label]=\"label\" [outer]=\"outer\" [forceClear]=\"forceClear\" [size]=\"size\">\n    <ng-template prizmInputStatusText>\u041E\u0448\u0438\u0431\u043A\u0430! \u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442</ng-template>\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"textMaskOptions\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [readonly]=\"readOnly\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"computedDisabled\"\n      [formControl]=\"innerControl\"\n      prizmInput\n    />\n    <!--    [ngModel]=\"computedValue\"-->\n    <!--    (ngModelChange)=\"onValueChange($event || '')\"-->\n\n    <!--    [patterns]=\"fixedPatternForTime\"-->\n    <ng-container prizm-input-right>\n      <button\n        [interactive]=\"true\"\n        (click)=\"openDateDropdown()\"\n        prizmInputIconButton=\"date-calendar-blank\"\n      ></button>\n      <button [interactive]=\"true\" (click)=\"openTimeDropdown()\" prizmInputIconButton=\"date-clock\"></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n</prizm-dropdown-host>\n\n<ng-template #dropdownDateTemplate>\n  <prizm-calendar\n    [min]=\"calendarMinDay\"\n    [max]=\"calendarMaxDay\"\n    [disabledItemHandler]=\"disabledItemHandler\"\n    [month]=\"computedActiveYearMonth\"\n    [value]=\"calendarValue\"\n    (dayClick)=\"onDayClick($event)\"\n    (monthChange)=\"onMonthChange($event)\"\n    prizmPreventDefault=\"mousedown\"\n    automation-id=\"prizm-input-date-time__calendar\"\n  ></prizm-calendar>\n</ng-template>\n\n<ng-template #dropdownTimeTemplate>\n  <prizm-data-list\n    class=\"block\"\n    *ngIf=\"timeItems.length\"\n    [style.--prizm-data-list-border]=\"0\"\n    (prizmAfterViewInit)=\"prizmDropdownHostComponent.reCalculatePositions()\"\n    (prizmOnDestroy)=\"openTimeTemplate = false\"\n    prizmLifecycle\n  >\n    <ng-container>\n      <div\n        class=\"time-item\"\n        *ngFor=\"let item of timeItems; let idx = index\"\n        [class.selected]=\"value?.[1] && item.isSameTime($any(value?.[1]))\"\n        (click)=\"$event.stopPropagation(); onTimeMenuClick(item, $event)\"\n      >\n        <span class=\"text\">\n          {{ item }}\n        </span>\n      </div>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.z-button{display:flex;height:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--prizm-base-03)}.time-item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.time-item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.time-item.selected{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20));color:var(--prizm-text-contrast)}.time-item:not(.selected):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}\n"] }]
        }], ctorParameters: function () { return [{ type: i2.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }, {
                    type: Inject,
                    args: [NgControl]
                }] }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_FORMAT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_SEPARATOR]
                }] }, { type: i13.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_TIME_TEXTS]
                }] }, { type: i0.Injector }, { type: i13.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_TEXTS]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_DATE_TIME_VALUE_TRANSFORMER]
                }] }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: ElementRef }]
            }], timeItems: [{
                type: Input
            }], label: [{
                type: Input
            }], forceClear: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], size: [{
                type: Input
            }], extraButtonInjector: [{
                type: Input
            }], outer: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], timeStrict: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], defaultActiveYearMonth: [{
                type: Input
            }], timeMode: [{
                type: Input
            }], filterTime: [], onClick: [{
                type: HostListener,
                args: [`click`]
            }], calculateMask: [], getDateTimeString: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS10aW1lL2lucHV0LWRhdGUtdGltZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtdGltZS9pbnB1dC1kYXRlLXRpbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFFBQVEsRUFDUixJQUFJLEVBQ0osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQW1CLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEYsT0FBTyxF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QUFROzswQkFDUixJQUFJOzswQkFDSixNQUFNOzJCQUFDLFNBQVM7OzBCQUVoQixNQUFNOzJCQUFDLGlCQUFpQjs7MEJBQ3hCLE1BQU07MkJBQUMsaUJBQWlCOzswQkFDeEIsTUFBTTsyQkFBQyxvQkFBb0I7OzBCQUMzQixNQUFNOzJCQUFDLGdCQUFnQjs7MEJBR3ZCLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFFdkIsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxpQ0FBaUM7NENBcEczQixnQkFBZ0I7c0JBRC9CLFNBQVM7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUt0RCxTQUFTO3NCQUZSLEtBQUs7Z0JBTU4sS0FBSztzQkFGSixLQUFLO2dCQUlHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBSU4sV0FBVztzQkFGVixLQUFLO2dCQU1OLElBQUk7c0JBRkgsS0FBSztnQkFNTixtQkFBbUI7c0JBRmxCLEtBQUs7Z0JBTU4sS0FBSztzQkFGSixLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFNTixHQUFHO3NCQUZGLEtBQUs7Z0JBTU4sVUFBVTtzQkFGVCxLQUFLO2dCQU1OLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTixzQkFBc0I7c0JBRnJCLEtBQUs7Z0JBTU4sUUFBUTtzQkFGUCxLQUFLO2dCQTZERSxVQUFVLE1BNEdYLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxPQUFPO2dCQTBHYixhQUFhLE1BWWIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sLCBVbnR5cGVkRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgcGx1Y2ssIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfRklMTEVSX0xFTkdUSCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXRlLWZpbGxlcnMnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9GT1JNQVQgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF0ZS1mb3JtYXQnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9TRVBBUkFUT1IsIHByaXptQ2hhbmdlRGF0ZVNlcGFyYXRvciB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXRlLXNlcGFyYXRvcic7XG5pbXBvcnQgeyBQcml6bURheSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXknO1xuaW1wb3J0IHsgUFJJWk1fRklSU1RfREFZLCBQUklaTV9MQVNUX0RBWSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXlzLmNvbnN0JztcbmltcG9ydCB7IFByaXptTW9udGggfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvbW9udGgnO1xuaW1wb3J0IHsgUHJpem1UaW1lIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL3RpbWUnO1xuaW1wb3J0IHsgQWJzdHJhY3RQcml6bUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9jb250cm9sJztcbmltcG9ydCB7IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2Fsd2F5cy1mYWxzZS1oYW5kbGVyJztcbmltcG9ydCB7XG4gIFBSSVpNX0RBVEVfVElNRV9TRVBBUkFUT1IsXG4gIFBSSVpNX0RBVEVfVElNRV9TRVBBUkFUT1JfTkdYLFxufSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvZGF0ZS10aW1lLXNlcGFyYXRvcic7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wLCBwcml6bVB1cmUgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1RJTUVfVkFMVUVfVFJBTlNGT1JNRVIgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvZGF0ZS1pbnB1dHMtdmFsdWUtdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfVEVYVFMsIFBSSVpNX1RJTUVfVEVYVFMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvaTE4bic7XG5pbXBvcnQgeyBQcml6bUNvbnRleHRXaXRoSW1wbGljaXQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9jb250ZXh0LXdpdGgtaW1wbGljaXQnO1xuaW1wb3J0IHsgUHJpem1Db250cm9sVmFsdWVUcmFuc2Zvcm1lciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2NvbnRyb2wtdmFsdWUtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgUHJpem1EYXRlTW9kZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGUtbW9kZSc7XG5pbXBvcnQgeyBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2ZvY3VzYWJsZS1lbGVtZW50LWFjY2Vzc29yJztcbmltcG9ydCB7IFByaXptQm9vbGVhbkhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9oYW5kbGVyJztcbmltcG9ydCB7IFByaXptVGltZU1vZGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy90aW1lLW1vZGUnO1xuaW1wb3J0IHsgUHJpem1XaXRoT3B0aW9uYWxNaW5NYXggfSBmcm9tICcuLi8uLi8uLi90eXBlcy93aXRoLW9wdGlvbmFsLW1pbi1tYXgnO1xuaW1wb3J0IHsgUFJJWk1fSU5QVVRfREFURV9USU1FX1BST1ZJREVSUyB9IGZyb20gJy4vaW5wdXQtZGF0ZS10aW1lLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBwcml6bU51bGxhYmxlU2FtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29tbW9uL251bGxhYmxlLXNhbWUnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWRJbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvaXMtbmF0aXZlLWZvY3VzZWQtaW4nO1xuaW1wb3J0IHsgcHJpem1DcmVhdGVEYXRlTmd4TWFzayB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL21hc2svY3JlYXRlLWRhdGUtbWFzayc7XG5pbXBvcnQgeyBwcml6bUNyZWF0ZVRpbWVOZ3hNYXNrIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvbWFzay9jcmVhdGUtdGltZS1tYXNrJztcbmltcG9ydCB7IHByaXptQ2xhbXAgfSBmcm9tICcuLi8uLi8uLi91dGlsL21hdGgvY2xhbXAnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFNpemUgfSBmcm9tICcuLi9jb21tb24vbW9kZWxzL3ByaXptLWlucHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvZGF0ZS1leHRyYS1idXR0b25zJztcbmltcG9ydCB7IFByaXptRGF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGUtYnV0dG9uJztcbmltcG9ydCB7IFBSSVpNX1NUUklDVF9NQVRDSEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFByaXptRm9ybUNvbnRyb2xIZWxwZXJzIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgcHJpem1JMThuSW5pdFdpdGhLZXlzIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBwcml6bS1pbnB1dC1kYXRlLXRpbWVgLFxuICB0ZW1wbGF0ZVVybDogYC4vaW5wdXQtZGF0ZS10aW1lLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vaW5wdXQtZGF0ZS10aW1lLmNvbXBvbmVudC5sZXNzYF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcml6bUkxOG5Jbml0V2l0aEtleXMoe1xuICAgICAgdGltZTogUFJJWk1fVElNRV9URVhUUyxcbiAgICAgIGRhdGVUZXh0czogUFJJWk1fREFURV9URVhUUyxcbiAgICB9KSxcbiAgICAuLi5QUklaTV9JTlBVVF9EQVRFX1RJTUVfUFJPVklERVJTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0RGF0ZVRpbWVDb21wb25lbnRcbiAgZXh0ZW5kcyBBYnN0cmFjdFByaXptQ29udHJvbDxbUHJpem1EYXkgfCBudWxsLCBQcml6bVRpbWUgfCBudWxsXT5cbiAgaW1wbGVtZW50cyBQcml6bVdpdGhPcHRpb25hbE1pbk1heDxQcml6bURheSB8IFtQcml6bURheSwgUHJpem1UaW1lXT4sIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yXG57XG4gIHByaXZhdGUgbW9udGg6IFByaXptTW9udGggfCBudWxsID0gbnVsbDtcblxuICBAVmlld0NoaWxkKCdmb2N1c2FibGVFbGVtZW50UmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHB1YmxpYyByZWFkb25seSBmb2N1c2FibGVFbGVtZW50PzogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHRpbWVJdGVtczogcmVhZG9ubHkgUHJpem1UaW1lW10gPSBuZXcgQXJyYXkoMjQpLmZpbGwobnVsbCkubWFwKChfLCBpKSA9PiBuZXcgUHJpem1UaW1lKGksIDAsIDAsIDApKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGxhYmVsID0gJ9CQ0LHRgdC+0LvRjtGC0L3QvtC1JztcblxuICBASW5wdXQoKSBmb3JjZUNsZWFyOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwbGFjZWhvbGRlciA9ICfQktGL0LHQtdGA0LjRgtC1INC00LDRgtGDINC4INCy0YDQtdC80Y8nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2l6ZTogUHJpem1JbnB1dFNpemUgPSAnbSc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBleHRyYUJ1dHRvbkluamVjdG9yOiBJbmplY3RvciA9IHRoaXMuaW5qZWN0b3I7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdXRlciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluOiBQcml6bURheSB8IFtQcml6bURheSwgUHJpem1UaW1lXSA9IFBSSVpNX0ZJUlNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heDogUHJpem1EYXkgfCBbUHJpem1EYXksIFByaXptVGltZV0gPSBQUklaTV9MQVNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHRpbWVTdHJpY3QgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRpc2FibGVkSXRlbUhhbmRsZXI6IFByaXptQm9vbGVhbkhhbmRsZXI8UHJpem1EYXk+ID0gUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkZWZhdWx0QWN0aXZlWWVhck1vbnRoID0gUHJpem1Nb250aC5jdXJyZW50TG9jYWwoKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHRpbWVNb2RlOiBQcml6bVRpbWVNb2RlID0gYEhIOk1NYDtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X2RhdGVfdGltZSc7XG5cbiAgcHVibGljIG9wZW5UaW1lVGVtcGxhdGU6IGFueSA9IGZhbHNlO1xuXG4gIG9wZW4gPSBmYWxzZTtcblxuICAvKiogZm9yIGF2b2lkIHRpbWUgZm9ybWF0IDI5OjAxICovXG4gIC8vIFRPRE8gcmVtb3ZlIGFmdGVyIHVwZGF0ZSBhbmd1bGFyIDE1IGFuZCBsYXRlc3QgbWFzayB2ZXJzaW9uXG4gIC8vIHJlYWRvbmx5IGZpeGVkUGF0dGVybkZvclRpbWUgPSB7XG4gIC8vICAgSDogeyBwYXR0ZXJuOiAvWzAtMl0vaSB9LFxuICAvLyAgIGg6IHsgcGF0dGVybjogL1swLTNdL2kgfSxcbiAgLy8gICBtOiB7IHBhdHRlcm46IC9bMC01XS9pIH0sXG4gIC8vICAgMDogeyBwYXR0ZXJuOiAvWzAtOV0vaSB9LFxuICAvLyB9O1xuXG4gIHJlYWRvbmx5IHR5cGUhOiBQcml6bUNvbnRleHRXaXRoSW1wbGljaXQ8dW5rbm93bj47XG5cbiAgZ2V0IGZpbHRlcmVkVGltZSgpOiByZWFkb25seSBQcml6bVRpbWVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyVGltZSh0aGlzLnRpbWVJdGVtcywgdGhpcy50aW1lTW9kZSwgdGhpcy5jb21wdXRlZFNlYXJjaFRpbWUpO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkU2VhcmNoVGltZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVmFsdWUubGVuZ3RoICE9PSB0aGlzLnRpbWVNb2RlLmxlbmd0aCA/IHRoaXMuY29tcHV0ZWRWYWx1ZSA6IGBgO1xuICB9XG5cbiAgcmVhZG9ubHkgZmlsbGVyJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5kYXRlVGV4dHMkLnBpcGUoXG4gICAgICBtYXAoZGF0ZVRleHRzID0+IHByaXptQ2hhbmdlRGF0ZVNlcGFyYXRvcihkYXRlVGV4dHNbdGhpcy5kYXRlRm9ybWF0XSwgdGhpcy5kYXRlU2VwYXJhdG9yKSlcbiAgICApLFxuICAgIHRoaXMudGltZVRleHRzJC5waXBlKHBsdWNrKHRoaXMudGltZU1vZGUpKSxcbiAgXSkucGlwZShtYXAoZmlsbGVycyA9PiB0aGlzLmdldERhdGVUaW1lU3RyaW5nKC4uLmZpbGxlcnMpKSk7XG5cbiAgcHVibGljIHJpZ2h0QnV0dG9ucyQhOiBCZWhhdmlvclN1YmplY3Q8UHJpem1EYXRlQnV0dG9uW10+O1xuICBwdWJsaWMgcmVhZG9ubHkgaW5uZXJDb250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTZWxmKClcbiAgICBASW5qZWN0KE5nQ29udHJvbClcbiAgICBjb250cm9sOiBOZ0NvbnRyb2wgfCBudWxsLFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfRk9STUFUKSByZWFkb25seSBkYXRlRm9ybWF0OiBQcml6bURhdGVNb2RlLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9TRVBBUkFUT1IpIHJlYWRvbmx5IGRhdGVTZXBhcmF0b3I6IHN0cmluZyxcbiAgICBASW5qZWN0KFBSSVpNX1RJTUVfVEVYVFMpXG4gICAgcmVhZG9ubHkgdGltZVRleHRzJDogT2JzZXJ2YWJsZTxSZWNvcmQ8UHJpem1UaW1lTW9kZSwgc3RyaW5nPj4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChQUklaTV9EQVRFX1RFWFRTKVxuICAgIHJlYWRvbmx5IGRhdGVUZXh0cyQ6IE9ic2VydmFibGU8UmVjb3JkPFByaXptRGF0ZU1vZGUsIHN0cmluZz4+LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQUklaTV9EQVRFX1RJTUVfVkFMVUVfVFJBTlNGT1JNRVIpXG4gICAgb3ZlcnJpZGUgcmVhZG9ubHkgdmFsdWVUcmFuc2Zvcm1lcjogUHJpem1Db250cm9sVmFsdWVUcmFuc2Zvcm1lcjxcbiAgICAgIFtQcml6bURheSB8IG51bGwsIFByaXptVGltZSB8IG51bGxdXG4gICAgPiB8IG51bGxcbiAgKSB7XG4gICAgc3VwZXIoY29udHJvbCwgY2hhbmdlRGV0ZWN0b3JSZWYsIHZhbHVlVHJhbnNmb3JtZXIpO1xuICB9XG5cbiAgQHByaXptUHVyZVxuICBwcml2YXRlIGZpbHRlclRpbWUoaXRlbXM6IHJlYWRvbmx5IFByaXptVGltZVtdLCBtb2RlOiBQcml6bVRpbWVNb2RlLCBzZWFyY2g6IHN0cmluZyk6IHJlYWRvbmx5IFByaXptVGltZVtdIHtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b1N0cmluZyhtb2RlKS5pbmNsdWRlcyhzZWFyY2gpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3luY1N0YXRlQmV0d2VlbkNvbnRyb2xzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2wgaW5zdGFuY2VvZiBVbnR5cGVkRm9ybUNvbnRyb2wpXG4gICAgICBQcml6bUZvcm1Db250cm9sSGVscGVycy5zeW5jU3RhdGVzKHRoaXMuY29udHJvbCBhcyBVbnR5cGVkRm9ybUNvbnRyb2wsIGZhbHNlLCB0aGlzLmlubmVyQ29udHJvbClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIHN5bmNWYWxpZGF0b3JzQmV0d2VlbkNvbnRyb2xzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2wgaW5zdGFuY2VvZiBVbnR5cGVkRm9ybUNvbnRyb2wpXG4gICAgICBQcml6bUZvcm1Db250cm9sSGVscGVycy5zeW5jQWxsVmFsaWRhdG9ycyh0aGlzLmNvbnRyb2wgYXMgVW50eXBlZEZvcm1Db250cm9sLCBmYWxzZSwgdGhpcy5pbm5lckNvbnRyb2wpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVmFsdWVzQmV0d2VlbkNvbnRyb2xzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2wgaW5zdGFuY2VvZiBVbnR5cGVkRm9ybUNvbnRyb2wpXG4gICAgICBQcml6bUZvcm1Db250cm9sSGVscGVycy5zeW5jVmFsdWVzKFxuICAgICAgICB0aGlzLmNvbnRyb2wgYXMgVW50eXBlZEZvcm1Db250cm9sLFxuICAgICAgICAoKSA9PiB0aGlzLmNvbXB1dGVkVmFsdWUsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMuaW5uZXJDb250cm9sXG4gICAgICApXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5zeW5jU3RhdGVCZXR3ZWVuQ29udHJvbHMoKTtcbiAgICB0aGlzLnN5bmNWYWxpZGF0b3JzQmV0d2VlbkNvbnRyb2xzKCk7XG4gICAgdGhpcy5zeW5jVmFsdWVzQmV0d2VlbkNvbnRyb2xzKCk7XG4gICAgdGhpcy5yaWdodEJ1dHRvbnMkID0gdGhpcy5leHRyYUJ1dHRvbkluamVjdG9yLmdldChQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50ID8gKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50XG4gICAgICA/IHByaXptSXNOYXRpdmVGb2N1c2VkSW4odGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGZpbGxlckxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiBQUklaTV9EQVRFX0ZJTExFUl9MRU5HVEggKyBQUklaTV9EQVRFX1RJTUVfU0VQQVJBVE9SLmxlbmd0aCArIHRoaXMudGltZU1vZGUubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHRleHRNYXNrT3B0aW9ucygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZU1hc2soXG4gICAgICB0aGlzLnZhbHVlWzBdLFxuICAgICAgdGhpcy5jYWxlbmRhck1pbkRheSxcbiAgICAgIHRoaXMuY2FsZW5kYXJNYXhEYXksXG4gICAgICB0aGlzLnRpbWVNb2RlLFxuICAgICAgdGhpcy5kYXRlRm9ybWF0LFxuICAgICAgdGhpcy5kYXRlU2VwYXJhdG9yXG4gICAgKTtcbiAgfVxuXG4gIGdldCBzdHJpbmdWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy50b1N0cmluZygpID8/ICcnO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYXRpdmVWYWx1ZSwgdGltZU1vZGUgfSA9IHRoaXM7XG4gICAgY29uc3QgW2RhdGUsIHRpbWVdID0gdmFsdWU7XG4gICAgY29uc3QgaGFzVGltZUlucHV0Q2hhcnMgPSBuYXRpdmVWYWx1ZS5sZW5ndGggPiBQUklaTV9EQVRFX0ZJTExFUl9MRU5HVEg7XG5cbiAgICBpZiAoIWRhdGUgfHwgKCF0aW1lICYmIGhhc1RpbWVJbnB1dENoYXJzKSkge1xuICAgICAgcmV0dXJuIG5hdGl2ZVZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldERhdGVUaW1lU3RyaW5nKGRhdGUsIHRpbWUsIHRpbWVNb2RlKTtcbiAgfVxuXG4gIGdldCBjYWxlbmRhclZhbHVlKCk6IFByaXptRGF5IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVbMF07XG4gIH1cblxuICBnZXQgY2FsZW5kYXJNaW5EYXkoKTogUHJpem1EYXkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMubWluKSA/IHRoaXMubWluWzBdIDogdGhpcy5taW47XG4gIH1cblxuICBnZXQgY2FsZW5kYXJNYXhEYXkoKTogUHJpem1EYXkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMubWF4KSA/IHRoaXMubWF4WzBdIDogdGhpcy5tYXg7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRBY3RpdmVZZWFyTW9udGgoKTogUHJpem1Nb250aCB7XG4gICAgcmV0dXJuIHRoaXMubW9udGggfHwgdGhpcy52YWx1ZVswXSB8fCB0aGlzLmRlZmF1bHRBY3RpdmVZZWFyTW9udGg7XG4gIH1cblxuICBnZXQgbmF0aXZlVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50ID8gdGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50LnZhbHVlIDogYGA7XG4gIH1cblxuICBzZXQgbmF0aXZlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKGBjbGlja2ApXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPCAxNikge1xuICAgICAgaWYgKCF2YWx1ZSkgdGhpcy51cGRhdGVWYWx1ZShbbnVsbCwgbnVsbF0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IFtkYXRlLCB0aW1lXSA9IHZhbHVlLnNwbGl0KFBSSVpNX0RBVEVfVElNRV9TRVBBUkFUT1JfTkdYKTtcblxuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBQcml6bURheS5ub3JtYWxpemVQYXJzZShkYXRlLCB0aGlzLmRhdGVGb3JtYXQpO1xuICAgIGxldCBwYXJzZWRUaW1lID1cbiAgICAgIHRpbWUgJiYgdGltZS5sZW5ndGggPT09IHRoaXMudGltZU1vZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5wcml6bUNsYW1wVGltZShQcml6bVRpbWUuZnJvbVN0cmluZyh0aW1lKSwgcGFyc2VkRGF0ZSlcbiAgICAgICAgOiBudWxsO1xuICAgIGlmIChwYXJzZWRUaW1lKSBwYXJzZWRUaW1lID0gUHJpem1UaW1lLmNvcnJlY3RUaW1lKHBhcnNlZFRpbWUpO1xuICAgIGNvbnN0IG1hdGNoID0gcGFyc2VkVGltZSAmJiB0aGlzLmdldE1hdGNoKHRpbWUpO1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZShbXG4gICAgICBwYXJzZWREYXRlLFxuICAgICAgbWF0Y2ggfHwgKHRoaXMudGltZVN0cmljdCA/IHRoaXMuZmluZE5lYXJlc3RUaW1lRnJvbUl0ZW1zKHBhcnNlZFRpbWUgYXMgYW55KSA6IHBhcnNlZFRpbWUpLFxuICAgIF0pO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG9uRGF5Q2xpY2soZGF5OiBQcml6bURheSwgdGltZT86IFByaXptVGltZSk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGlmaWVkVGltZSA9XG4gICAgICB0aW1lID8/ICh0aGlzLnZhbHVlWzFdICYmIHRoaXMucHJpem1DbGFtcFRpbWUodGhpcy52YWx1ZVsxXSwgZGF5KSkgPz8gbmV3IFByaXptVGltZSgwLCAwKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKFtkYXksIG1vZGlmaWVkVGltZV0pO1xuICAgIHRoaXMudXBkYXRlTmF0aXZlVmFsdWUoZGF5KTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkhvdmVyZWQoaG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlSG92ZXJlZChob3ZlcmVkKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vbnRoQ2hhbmdlKG1vbnRoOiBQcml6bU1vbnRoKTogdm9pZCB7XG4gICAgdGhpcy5tb250aCA9IG1vbnRoO1xuICB9XG5cbiAgcHVibGljIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgfVxuXG4gIHB1YmxpYyBvbkZvY3VzZWQoZm9jdXNlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlRm9jdXNlZChmb2N1c2VkKTtcblxuICAgIGlmIChcbiAgICAgIGZvY3VzZWQgfHxcbiAgICAgIHRoaXMudmFsdWVbMF0gPT09IG51bGwgfHxcbiAgICAgIHRoaXMudmFsdWVbMV0gIT09IG51bGwgfHxcbiAgICAgIHRoaXMubmF0aXZlVmFsdWUubGVuZ3RoIDw9IHRoaXMuZmlsbGVyTGVuZ3RoICsgUFJJWk1fREFURV9USU1FX1NFUEFSQVRPUi5sZW5ndGggfHxcbiAgICAgIHRoaXMudGltZU1vZGUgPT09IGBISDpNTWBcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBbLCB0aW1lXSA9IHRoaXMubmF0aXZlVmFsdWUuc3BsaXQoUFJJWk1fREFURV9USU1FX1NFUEFSQVRPUik7XG5cbiAgICBpZiAoIXRpbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWRUaW1lID0gUHJpem1UaW1lLmZyb21TdHJpbmcodGltZSk7XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKFt0aGlzLnZhbHVlWzBdLCBwYXJzZWRUaW1lXSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm5hdGl2ZVZhbHVlLmVuZHNXaXRoKGAuYCkgfHwgdGhpcy5uYXRpdmVWYWx1ZS5lbmRzV2l0aChgOmApKSB7XG4gICAgICAgIHRoaXMubmF0aXZlVmFsdWUgPSB0aGlzLm5hdGl2ZVZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBzZXREaXNhYmxlZFN0YXRlKCk6IHZvaWQge1xuICAgIHN1cGVyLnNldERpc2FibGVkU3RhdGUoKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBbUHJpem1EYXkgfCBudWxsLCBQcml6bVRpbWUgfCBudWxsXSB8IG51bGwpOiB2b2lkIHtcbiAgICBzdXBlci53cml0ZVZhbHVlKHZhbHVlKTtcblxuICAgIHRoaXMubmF0aXZlVmFsdWUgPSB2YWx1ZSAmJiAodmFsdWVbMF0gfHwgdmFsdWVbMV0pID8gdGhpcy5jb21wdXRlZFZhbHVlIDogYGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RmFsbGJhY2tWYWx1ZSgpOiBbUHJpem1EYXkgfCBudWxsLCBQcml6bVRpbWUgfCBudWxsXSB7XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSB2YWx1ZUlkZW50aWNhbENvbXBhcmF0b3IoXG4gICAgb2xkVmFsdWU6IFtQcml6bURheSB8IG51bGwsIFByaXptVGltZSB8IG51bGxdLFxuICAgIG5ld1ZhbHVlOiBbUHJpem1EYXkgfCBudWxsLCBQcml6bVRpbWUgfCBudWxsXVxuICApOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgbmV3VmFsdWUgJiZcbiAgICAgIG9sZFZhbHVlICYmXG4gICAgICBwcml6bU51bGxhYmxlU2FtZShvbGRWYWx1ZVswXSwgbmV3VmFsdWVbMF0sIChhLCBiKSA9PiBhPy5kYXlTYW1lKGIpKSAmJlxuICAgICAgcHJpem1OdWxsYWJsZVNhbWUob2xkVmFsdWVbMV0sIG5ld1ZhbHVlWzFdLCAoYSwgYikgPT4gU3RyaW5nKGEpID09PSBTdHJpbmcoYikpXG4gICAgKTtcbiAgfVxuXG4gIEBwcml6bVB1cmVcbiAgcHJpdmF0ZSBjYWxjdWxhdGVNYXNrKFxuICAgIGRheTogUHJpem1EYXkgfCBudWxsLFxuICAgIG1pbjogUHJpem1EYXksXG4gICAgbWF4OiBQcml6bURheSxcbiAgICB0aW1lTW9kZTogUHJpem1UaW1lTW9kZSxcbiAgICBkYXRlRm9ybWF0OiBQcml6bURhdGVNb2RlLFxuICAgIGRhdGVTZXBhcmF0b3I6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtwcml6bUNyZWF0ZURhdGVOZ3hNYXNrKGRhdGVGb3JtYXQsIGRhdGVTZXBhcmF0b3IpfSAke3ByaXptQ3JlYXRlVGltZU5neE1hc2sodGltZU1vZGUpfWA7XG4gIH1cblxuICBAcHJpem1QdXJlXG4gIHByaXZhdGUgZ2V0RGF0ZVRpbWVTdHJpbmcoXG4gICAgZGF0ZTogUHJpem1EYXkgfCBzdHJpbmcsXG4gICAgdGltZTogUHJpem1UaW1lIHwgc3RyaW5nIHwgbnVsbCxcbiAgICB0aW1lTW9kZTogUHJpem1UaW1lTW9kZSA9IGBISDpNTWBcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZSBpbnN0YW5jZW9mIFByaXptRGF5ID8gZGF0ZS50b1N0cmluZyh0aGlzLmRhdGVGb3JtYXQsIHRoaXMuZGF0ZVNlcGFyYXRvcikgOiBkYXRlO1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSB0aW1lIGluc3RhbmNlb2YgUHJpem1UaW1lID8gdGltZS50b1N0cmluZyh0aW1lTW9kZSkgOiB0aW1lIHx8IGBgO1xuXG4gICAgcmV0dXJuIGAke2RhdGVTdHJpbmd9JHtQUklaTV9EQVRFX1RJTUVfU0VQQVJBVE9SfSR7dGltZVN0cmluZ31gO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVOYXRpdmVWYWx1ZShkYXk6IFByaXptRGF5KTogdm9pZCB7XG4gICAgY29uc3QgdGltZSA9IHRoaXMubmF0aXZlVmFsdWUuc3BsaXQoUFJJWk1fREFURV9USU1FX1NFUEFSQVRPUilbMV0gfHwgYGA7XG4gICAgdGhpcy5uYXRpdmVWYWx1ZSA9IHRoaXMuZ2V0RGF0ZVRpbWVTdHJpbmcoZGF5LCB0aW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5lYXJlc3RUaW1lRnJvbUl0ZW1zKHZhbHVlOiBQcml6bVRpbWUpOiBQcml6bVRpbWUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy50aW1lSXRlbXMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT5cbiAgICAgIE1hdGguYWJzKGN1cnJlbnQudG9BYnNvbHV0ZU1pbGxpc2Vjb25kcygpIC0gdmFsdWUudG9BYnNvbHV0ZU1pbGxpc2Vjb25kcygpKSA8XG4gICAgICBNYXRoLmFicyhwcmV2aW91cy50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkgLSB2YWx1ZS50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkpXG4gICAgICAgID8gY3VycmVudFxuICAgICAgICA6IHByZXZpb3VzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWF0Y2godmFsdWU6IHN0cmluZyk6IFByaXptVGltZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMudGltZUl0ZW1zLmZpbmQoaXRlbSA9PiBQUklaTV9TVFJJQ1RfTUFUQ0hFUihpdGVtLCB2YWx1ZSkpO1xuICB9XG5cbiAgcHVibGljIG9uVGltZU1lbnVDbGljayhpdGVtOiBQcml6bVRpbWUsIGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLm9wZW5UaW1lVGVtcGxhdGUgPSB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgaWYgKHRoaXMudmFsdWVbMV0gJiYgaXRlbS5pc1NhbWVUaW1lKHRoaXMudmFsdWVbMV0pKSByZXR1cm47XG5cbiAgICB0aGlzLm9uRGF5Q2xpY2sodGhpcy52YWx1ZVswXSA/PyBQcml6bURheS5jdXJyZW50TG9jYWwoKSwgaXRlbSk7XG4gIH1cblxuICBwcml2YXRlIHByaXptQ2xhbXBUaW1lKHRpbWU6IFByaXptVGltZSwgZGF5OiBQcml6bURheSk6IFByaXptVGltZSB7XG4gICAgY29uc3QgbXMgPSB0aW1lLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKTtcbiAgICBjb25zdCBtaW4gPVxuICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLm1pbikgJiYgZGF5LmRheVNhbWUodGhpcy5jYWxlbmRhck1pbkRheSlcbiAgICAgICAgPyB0aGlzLm1pblsxXS50b0Fic29sdXRlTWlsbGlzZWNvbmRzKClcbiAgICAgICAgOiAtSW5maW5pdHk7XG4gICAgY29uc3QgbWF4ID1cbiAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5tYXgpICYmIGRheS5kYXlTYW1lKHRoaXMuY2FsZW5kYXJNYXhEYXkpXG4gICAgICAgID8gdGhpcy5tYXhbMV0udG9BYnNvbHV0ZU1pbGxpc2Vjb25kcygpXG4gICAgICAgIDogSW5maW5pdHk7XG5cbiAgICByZXR1cm4gUHJpem1UaW1lLmZyb21BYnNvbHV0ZU1pbGxpc2Vjb25kcyhwcml6bUNsYW1wKG1zLCBtaW4sIG1heCkpO1xuICB9XG5cbiAgcHVibGljIG9wZW5UaW1lRHJvcGRvd24oKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuVGltZVRlbXBsYXRlID0gIXRoaXMub3BlblRpbWVUZW1wbGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRGF0ZURyb3Bkb3duKCk6IHZvaWQge1xuICAgIHRoaXMub3BlblRpbWVUZW1wbGF0ZSA9IG51bGw7XG4gICAgdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgLy8gdGhpcy5vcGVuVGltZVRlbXBsYXRlID0gIXRoaXMub3BlblRpbWVUZW1wbGF0ZTtcbiAgfVxufVxuIiwiPHByaXptLWRyb3Bkb3duLWhvc3RcbiAgY2xhc3M9XCJ6LWhvc3RlZFwiXG4gICNwcml6bURyb3Bkb3duSG9zdENvbXBvbmVudFxuICBbc3R5bGUuLS1wcml6bS1kcm9wZG93bi1ob3N0LXdpZHRoXT1cIicxMDAlJ1wiXG4gIFtjYW5PcGVuXT1cImludGVyYWN0aXZlXCJcbiAgW2NvbnRlbnRdPVwib3BlblRpbWVUZW1wbGF0ZSA/IGRyb3Bkb3duVGltZVRlbXBsYXRlIDogZHJvcGRvd25EYXRlVGVtcGxhdGVcIlxuICBbcHJpem1Ecm9wZG93bkhvc3RXaWR0aF09XCJvcGVuVGltZVRlbXBsYXRlID8gJzEwMCUnIDogJ2F1dG8nXCJcbiAgW2lzT3Blbl09XCJpbnRlcmFjdGl2ZSAmJiAob3BlblRpbWVUZW1wbGF0ZSB8fCBvcGVuKVwiXG4gIFtjbG9zZUJ5RXNjXT1cInRydWVcIlxuICAoaXNPcGVuQ2hhbmdlKT1cIm9uT3BlbkNoYW5nZSgkZXZlbnQpOyAkZXZlbnQgJiYgcHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQucmVDYWxjdWxhdGVQb3NpdGlvbnMoKVwiXG4+XG4gIDxwcml6bS1pbnB1dC1sYXlvdXQgW2xhYmVsXT1cImxhYmVsXCIgW291dGVyXT1cIm91dGVyXCIgW2ZvcmNlQ2xlYXJdPVwiZm9yY2VDbGVhclwiIFtzaXplXT1cInNpemVcIj5cbiAgICA8bmctdGVtcGxhdGUgcHJpem1JbnB1dFN0YXR1c1RleHQ+0J7RiNC40LHQutCwISDQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0YTQvtGA0LzQsNGCPC9uZy10ZW1wbGF0ZT5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiaW5wdXQtc2VhcmNoXCJcbiAgICAgICNmb2N1c2FibGVFbGVtZW50UmVmXG4gICAgICBbbWFza109XCJ0ZXh0TWFza09wdGlvbnNcIlxuICAgICAgW3Nob3dNYXNrVHlwZWRdPVwiZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1c2VkXCJcbiAgICAgIFtkcm9wU3BlY2lhbENoYXJhY3RlcnNdPVwiZmFsc2VcIlxuICAgICAgW3JlYWRvbmx5XT1cInJlYWRPbmx5XCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbZGlzYWJsZWRdPVwiY29tcHV0ZWREaXNhYmxlZFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiaW5uZXJDb250cm9sXCJcbiAgICAgIHByaXptSW5wdXRcbiAgICAvPlxuICAgIDwhLS0gICAgW25nTW9kZWxdPVwiY29tcHV0ZWRWYWx1ZVwiLS0+XG4gICAgPCEtLSAgICAobmdNb2RlbENoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudCB8fCAnJylcIi0tPlxuXG4gICAgPCEtLSAgICBbcGF0dGVybnNdPVwiZml4ZWRQYXR0ZXJuRm9yVGltZVwiLS0+XG4gICAgPG5nLWNvbnRhaW5lciBwcml6bS1pbnB1dC1yaWdodD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgW2ludGVyYWN0aXZlXT1cInRydWVcIlxuICAgICAgICAoY2xpY2spPVwib3BlbkRhdGVEcm9wZG93bigpXCJcbiAgICAgICAgcHJpem1JbnB1dEljb25CdXR0b249XCJkYXRlLWNhbGVuZGFyLWJsYW5rXCJcbiAgICAgID48L2J1dHRvbj5cbiAgICAgIDxidXR0b24gW2ludGVyYWN0aXZlXT1cInRydWVcIiAoY2xpY2spPVwib3BlblRpbWVEcm9wZG93bigpXCIgcHJpem1JbnB1dEljb25CdXR0b249XCJkYXRlLWNsb2NrXCI+PC9idXR0b24+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidXR0b24gb2YgcmlnaHRCdXR0b25zJCB8IGFzeW5jXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uLnRlbXBsYXRlXCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG48L3ByaXptLWRyb3Bkb3duLWhvc3Q+XG5cbjxuZy10ZW1wbGF0ZSAjZHJvcGRvd25EYXRlVGVtcGxhdGU+XG4gIDxwcml6bS1jYWxlbmRhclxuICAgIFttaW5dPVwiY2FsZW5kYXJNaW5EYXlcIlxuICAgIFttYXhdPVwiY2FsZW5kYXJNYXhEYXlcIlxuICAgIFtkaXNhYmxlZEl0ZW1IYW5kbGVyXT1cImRpc2FibGVkSXRlbUhhbmRsZXJcIlxuICAgIFttb250aF09XCJjb21wdXRlZEFjdGl2ZVllYXJNb250aFwiXG4gICAgW3ZhbHVlXT1cImNhbGVuZGFyVmFsdWVcIlxuICAgIChkYXlDbGljayk9XCJvbkRheUNsaWNrKCRldmVudClcIlxuICAgIChtb250aENoYW5nZSk9XCJvbk1vbnRoQ2hhbmdlKCRldmVudClcIlxuICAgIHByaXptUHJldmVudERlZmF1bHQ9XCJtb3VzZWRvd25cIlxuICAgIGF1dG9tYXRpb24taWQ9XCJwcml6bS1pbnB1dC1kYXRlLXRpbWVfX2NhbGVuZGFyXCJcbiAgPjwvcHJpem0tY2FsZW5kYXI+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2Ryb3Bkb3duVGltZVRlbXBsYXRlPlxuICA8cHJpem0tZGF0YS1saXN0XG4gICAgY2xhc3M9XCJibG9ja1wiXG4gICAgKm5nSWY9XCJ0aW1lSXRlbXMubGVuZ3RoXCJcbiAgICBbc3R5bGUuLS1wcml6bS1kYXRhLWxpc3QtYm9yZGVyXT1cIjBcIlxuICAgIChwcml6bUFmdGVyVmlld0luaXQpPVwicHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQucmVDYWxjdWxhdGVQb3NpdGlvbnMoKVwiXG4gICAgKHByaXptT25EZXN0cm95KT1cIm9wZW5UaW1lVGVtcGxhdGUgPSBmYWxzZVwiXG4gICAgcHJpem1MaWZlY3ljbGVcbiAgPlxuICAgIDxuZy1jb250YWluZXI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwidGltZS1pdGVtXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGltZUl0ZW1zOyBsZXQgaWR4ID0gaW5kZXhcIlxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwidmFsdWU/LlsxXSAmJiBpdGVtLmlzU2FtZVRpbWUoJGFueSh2YWx1ZT8uWzFdKSlcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyBvblRpbWVNZW51Q2xpY2soaXRlbSwgJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgIHt7IGl0ZW0gfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvcHJpem0tZGF0YS1saXN0PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==