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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateTimeComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: ChangeDetectorRef }, { token: PRIZM_DATE_FORMAT }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_TIME_TEXTS }, { token: i0.Injector }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_TIME_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputDateTimeComponent, selector: "prizm-input-date-time", inputs: { timeItems: "timeItems", label: "label", forceClear: "forceClear", placeholder: "placeholder", size: "size", extraButtonInjector: "extraButtonInjector", outer: "outer", min: "min", max: "max", timeStrict: "timeStrict", disabledItemHandler: "disabledItemHandler", defaultActiveYearMonth: "defaultActiveYearMonth", timeMode: "timeMode" }, host: { listeners: { "click": "onClick()" } }, providers: [
            ...prizmI18nInitWithKeys({
                time: PRIZM_TIME_TEXTS,
                dateTexts: PRIZM_DATE_TEXTS,
            }),
            ...PRIZM_INPUT_DATE_TIME_PROVIDERS,
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  #prizmDropdownHostComponent\n  [style.--prizm-dropdown-host-width]=\"'100%'\"\n  [canOpen]=\"interactive\"\n  [content]=\"openTimeTemplate ? dropdownTimeTemplate : dropdownDateTemplate\"\n  [prizmDropdownHostWidth]=\"openTimeTemplate ? '100%' : 'auto'\"\n  [isOpen]=\"interactive && (openTimeTemplate || open)\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event); $event && prizmDropdownHostComponent.reCalculatePositions()\"\n>\n  <prizm-input-layout [label]=\"label\" [outer]=\"outer\" [forceClear]=\"forceClear\" [size]=\"size\">\n    <ng-template prizmInputStatusText>\u041E\u0448\u0438\u0431\u043A\u0430! \u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442</ng-template>\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"textMaskOptions\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [readonly]=\"readOnly\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"computedDisabled\"\n      [formControl]=\"innerControl\"\n      prizmInput\n    />\n    <!--    [ngModel]=\"computedValue\"-->\n    <!--    (ngModelChange)=\"onValueChange($event || '')\"-->\n\n    <!--    [patterns]=\"fixedPatternForTime\"-->\n    <ng-container prizm-input-right>\n      <button\n        [interactive]=\"true\"\n        (click)=\"openDateDropdown()\"\n        prizmInputIconButton=\"date-calendar-blank\"\n      ></button>\n      <button [interactive]=\"true\" (click)=\"openTimeDropdown()\" prizmInputIconButton=\"date-clock\"></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n</prizm-dropdown-host>\n\n<ng-template #dropdownDateTemplate>\n  <prizm-calendar\n    [min]=\"calendarMinDay\"\n    [max]=\"calendarMaxDay\"\n    [disabledItemHandler]=\"disabledItemHandler\"\n    [month]=\"computedActiveYearMonth\"\n    [value]=\"calendarValue\"\n    (dayClick)=\"onDayClick($event)\"\n    (monthChange)=\"onMonthChange($event)\"\n    prizmPreventDefault=\"mousedown\"\n    automation-id=\"prizm-input-date-time__calendar\"\n  ></prizm-calendar>\n</ng-template>\n\n<ng-template #dropdownTimeTemplate>\n  <prizm-data-list\n    class=\"block\"\n    *ngIf=\"timeItems.length\"\n    [style.--prizm-data-list-border]=\"0\"\n    (prizmAfterViewInit)=\"prizmDropdownHostComponent.reCalculatePositions()\"\n    (prizmOnDestroy)=\"openTimeTemplate = false\"\n    prizmLifecycle\n  >\n    <ng-container>\n      <div\n        class=\"time-item\"\n        *ngFor=\"let item of timeItems; let idx = index\"\n        [class.selected]=\"value?.[1] && item.isSameTime($any(value?.[1]))\"\n        (click)=\"$event.stopPropagation(); onTimeMenuClick(item, $event)\"\n      >\n        <span class=\"text\">\n          {{ item }}\n        </span>\n      </div>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.z-button{display:flex;height:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--prizm-base-03)}.time-item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.time-item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.time-item.selected{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20));color:var(--prizm-text-contrast)}.time-item:not(.selected):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "leadZero", "triggerOnMaskChange", "apm"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "component", type: i4.PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "component", type: i5.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i6.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i7.PrizmInputStatusTextDirective, selector: "[prizmInputStatusText]", inputs: ["enable", "status"] }, { kind: "component", type: i8.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "directive", type: i9.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "directive", type: i10.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "component", type: i11.PrizmCalendarComponent, selector: "prizm-calendar", inputs: ["month", "value", "disabledItemHandler", "min", "daysWithStatus", "max", "minViewedMonth", "maxViewedMonth", "hoveredItem", "showAdjacent", "markerHandler"], outputs: ["dayClick", "monthChange", "hoveredItemChange"] }, { kind: "component", type: i12.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateTimeComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS10aW1lL2lucHV0LWRhdGUtdGltZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtdGltZS9pbnB1dC1kYXRlLXRpbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFFBQVEsRUFDUixJQUFJLEVBQ0osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQW1CLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLDZCQUE2QixHQUM5QixNQUFNLHdDQUF3QyxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVExRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFOUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWUxRCxNQUFNLE9BQU8sMkJBQ1gsU0FBUSxvQkFBeUQ7SUEyRWpFLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RixDQUFDO0lBV0QsWUFJRSxPQUF5QixFQUNFLGlCQUFvQyxFQUMzQixVQUF5QixFQUN0QixhQUFxQixFQUVuRCxVQUFxRCxFQUM3QyxRQUFrQixFQUUxQixVQUFxRCxFQUc1QyxnQkFFVjtRQUVSLEtBQUssQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQWJoQixlQUFVLEdBQVYsVUFBVSxDQUFlO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBRW5ELGVBQVUsR0FBVixVQUFVLENBQTJDO1FBQzdDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFMUIsZUFBVSxHQUFWLFVBQVUsQ0FBMkM7UUFHNUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUUxQjtRQTFHRixVQUFLLEdBQXNCLElBQUksQ0FBQztRQU94QyxjQUFTLEdBQXlCLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBSXBHLFVBQUssR0FBRyxZQUFZLENBQUM7UUFFWixlQUFVLEdBQW1CLElBQUksQ0FBQztRQUkzQyxnQkFBVyxHQUFHLHVCQUF1QixDQUFDO1FBSXRDLFNBQUksR0FBbUIsR0FBRyxDQUFDO1FBSTNCLHdCQUFtQixHQUFhLElBQUksQ0FBQyxRQUFRLENBQUM7UUFJOUMsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUlkLFFBQUcsR0FBcUMsZUFBZSxDQUFDO1FBSXhELFFBQUcsR0FBcUMsY0FBYyxDQUFDO1FBSXZELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkIsd0JBQW1CLEdBQWtDLDBCQUEwQixDQUFDO1FBSWhGLDJCQUFzQixHQUFHLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUluRCxhQUFRLEdBQWtCLE9BQU8sQ0FBQztRQUVoQixZQUFPLEdBQUcsb0JBQW9CLENBQUM7UUFFMUMscUJBQWdCLEdBQVEsS0FBSyxDQUFDO1FBRXJDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFxQkosWUFBTyxHQUF1QixhQUFhLENBQUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2xCLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQzNGO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUc1QyxpQkFBWSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQXFCeEQsQ0FBQztJQUdPLFVBQVUsQ0FBQyxLQUEyQixFQUFFLElBQW1CLEVBQUUsTUFBYztRQUNqRixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyx3QkFBd0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLGtCQUFrQjtZQUM1Qyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQTZCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7aUJBQzdGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sNkJBQTZCO1FBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxrQkFBa0I7WUFDNUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQTZCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7aUJBQ3BHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8seUJBQXlCO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxrQkFBa0I7WUFDNUMsdUJBQXVCLENBQUMsVUFBVSxDQUNoQyxJQUFJLENBQUMsT0FBNkIsRUFDbEMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFDeEIsSUFBSSxFQUNKLElBQUksQ0FBQyxZQUFZLENBQ2xCO2lCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRWUsUUFBUTtRQUN0QixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBa0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xHLENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYTtZQUN6QyxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztZQUM3RCxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ1osQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sd0JBQXdCLEdBQUcseUJBQXlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzVGLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNiLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMzQixNQUFNLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsd0JBQXdCLENBQUM7UUFFeEUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLEVBQUU7WUFDekMsT0FBTyxXQUFXLENBQUM7U0FDcEI7UUFFRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzFELENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUMxRCxDQUFDO0lBRUQsSUFBSSx1QkFBdUI7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3BFLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlFLENBQUM7SUFFRCxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUdNLE9BQU87UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSztnQkFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsT0FBTztTQUNSO1FBRUQsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFFaEUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksVUFBVSxHQUNaLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQztZQUM3RCxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ1gsSUFBSSxVQUFVO1lBQUUsVUFBVSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0QsTUFBTSxLQUFLLEdBQUcsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNmLFVBQVU7WUFDVixLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7U0FDM0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxHQUFhLEVBQUUsSUFBZ0I7UUFDL0MsTUFBTSxZQUFZLEdBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxPQUFnQjtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBaUI7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLFlBQVksQ0FBQyxJQUFhO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFTSxTQUFTLENBQUMsT0FBZ0I7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QixJQUNFLE9BQU87WUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUk7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcseUJBQXlCLENBQUMsTUFBTTtZQUMvRSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFDekI7WUFDQSxPQUFPO1NBQ1I7UUFFRCxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPO1NBQ1I7UUFFRCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFOUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFZSxnQkFBZ0I7UUFDOUIsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVlLFVBQVUsQ0FBQyxLQUFpRDtRQUMxRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0UsQ0FBQztJQUVTLGdCQUFnQjtRQUN4QixPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFa0Isd0JBQXdCLENBQ3pDLFFBQTZDLEVBQzdDLFFBQTZDO1FBRTdDLE9BQU8sQ0FDTCxRQUFRO1lBQ1IsUUFBUTtZQUNSLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQy9FLENBQUM7SUFDSixDQUFDO0lBR08sYUFBYSxDQUNuQixHQUFvQixFQUNwQixHQUFhLEVBQ2IsR0FBYSxFQUNiLFFBQXVCLEVBQ3ZCLFVBQXlCLEVBQ3pCLGFBQXFCO1FBRXJCLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLElBQUksc0JBQXNCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUNwRyxDQUFDO0lBR08saUJBQWlCLENBQ3ZCLElBQXVCLEVBQ3ZCLElBQStCLEVBQy9CLFdBQTBCLE9BQU87UUFFakMsTUFBTSxVQUFVLEdBQUcsSUFBSSxZQUFZLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hHLE1BQU0sVUFBVSxHQUFHLElBQUksWUFBWSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFFcEYsT0FBTyxHQUFHLFVBQVUsR0FBRyx5QkFBeUIsR0FBRyxVQUFVLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBRU8saUJBQWlCLENBQUMsR0FBYTtRQUNyQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLHdCQUF3QixDQUFDLEtBQWdCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUMzRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzFFLENBQUMsQ0FBQyxPQUFPO1lBQ1QsQ0FBQyxDQUFDLFFBQVEsQ0FDYixDQUFDO0lBQ0osQ0FBQztJQUVPLFFBQVEsQ0FBQyxLQUFhO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sZUFBZSxDQUFDLElBQWUsRUFBRSxFQUFTO1FBQy9DLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV0QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUU1RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTyxjQUFjLENBQUMsSUFBZSxFQUFFLEdBQWE7UUFDbkQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDekMsTUFBTSxHQUFHLEdBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixFQUFFO1lBQ3RDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNoQixNQUFNLEdBQUcsR0FDUCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDekQsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLEVBQUU7WUFDdEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUVmLE9BQU8sU0FBUyxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakQsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0Msa0RBQWtEO0lBQ3BELENBQUM7OEdBcFpVLDJCQUEyQixrQkFnRzVCLFNBQVMseUNBRVQsaUJBQWlCLGFBQ2pCLGlCQUFpQixhQUNqQixvQkFBb0IsYUFDcEIsZ0JBQWdCLHFDQUdoQixnQkFBZ0IsYUFHaEIsaUNBQWlDO2tHQTNHaEMsMkJBQTJCLHliQVIzQjtZQUNULEdBQUcscUJBQXFCLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLFNBQVMsRUFBRSxnQkFBZ0I7YUFDNUIsQ0FBQztZQUNGLEdBQUcsK0JBQStCO1NBQ25DLDhIQVF5QyxVQUFVLG9EQ3ZFdEQsKzlGQStFQTs7QURIRTtJQURDLGdCQUFnQixFQUFFOzs4REFDaUY7QUFJcEc7SUFEQyxnQkFBZ0IsRUFBRTs7MERBQ0U7QUFNckI7SUFEQyxnQkFBZ0IsRUFBRTs7Z0VBQ21CO0FBSXRDO0lBREMsZ0JBQWdCLEVBQUU7O3lEQUNRO0FBSTNCO0lBREMsZ0JBQWdCLEVBQUU7OEJBQ0UsUUFBUTt3RUFBaUI7QUFJOUM7SUFEQyxnQkFBZ0IsRUFBRTs7MERBQ0w7QUFJZDtJQURDLGdCQUFnQixFQUFFOzt3REFDcUM7QUFJeEQ7SUFEQyxnQkFBZ0IsRUFBRTs7d0RBQ29DO0FBSXZEO0lBREMsZ0JBQWdCLEVBQUU7OytEQUNBO0FBSW5CO0lBREMsZ0JBQWdCLEVBQUU7O3dFQUM2RDtBQUloRjtJQURDLGdCQUFnQixFQUFFOzsyRUFDZ0M7QUFJbkQ7SUFEQyxnQkFBZ0IsRUFBRTs7NkRBQ2U7QUEyRDFCO0lBRFAsU0FBUzs7Ozs2REFHVDtBQW1OTztJQURQLFNBQVM7OzZDQUdILFFBQVE7UUFDUixRQUFROztnRUFNZDtBQUdPO0lBRFAsU0FBUzs7OztvRUFVVDsyRkE5VlUsMkJBQTJCO2tCQWJ2QyxTQUFTOytCQUNFLHVCQUF1QixtQkFHaEIsdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVCxHQUFHLHFCQUFxQixDQUFDOzRCQUN2QixJQUFJLEVBQUUsZ0JBQWdCOzRCQUN0QixTQUFTLEVBQUUsZ0JBQWdCO3lCQUM1QixDQUFDO3dCQUNGLEdBQUcsK0JBQStCO3FCQUNuQzs7MEJBZ0dFLFFBQVE7OzBCQUNSLElBQUk7OzBCQUNKLE1BQU07MkJBQUMsU0FBUzs7MEJBRWhCLE1BQU07MkJBQUMsaUJBQWlCOzswQkFDeEIsTUFBTTsyQkFBQyxpQkFBaUI7OzBCQUN4QixNQUFNOzJCQUFDLG9CQUFvQjs7MEJBQzNCLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFHdkIsTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUV2QixRQUFROzswQkFDUixNQUFNOzJCQUFDLGlDQUFpQzs0Q0FwRzNCLGdCQUFnQjtzQkFEL0IsU0FBUzt1QkFBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Z0JBS3RELFNBQVM7c0JBRlIsS0FBSztnQkFNTixLQUFLO3NCQUZKLEtBQUs7Z0JBSUcsVUFBVTtzQkFBbEIsS0FBSztnQkFJTixXQUFXO3NCQUZWLEtBQUs7Z0JBTU4sSUFBSTtzQkFGSCxLQUFLO2dCQU1OLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTixLQUFLO3NCQUZKLEtBQUs7Z0JBTU4sR0FBRztzQkFGRixLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFNTixVQUFVO3NCQUZULEtBQUs7Z0JBTU4sbUJBQW1CO3NCQUZsQixLQUFLO2dCQU1OLHNCQUFzQjtzQkFGckIsS0FBSztnQkFNTixRQUFRO3NCQUZQLEtBQUs7Z0JBNkRFLFVBQVUsTUE0R1gsT0FBTztzQkFEYixZQUFZO3VCQUFDLE9BQU87Z0JBMEdiLGFBQWEsTUFZYixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBwbHVjaywgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9GSUxMRVJfTEVOR1RIIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RhdGUtZmlsbGVycyc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX0ZPUk1BVCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXRlLWZvcm1hdCc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1NFUEFSQVRPUiwgcHJpem1DaGFuZ2VEYXRlU2VwYXJhdG9yIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RhdGUtc2VwYXJhdG9yJztcbmltcG9ydCB7IFByaXptRGF5IH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheSc7XG5pbXBvcnQgeyBQUklaTV9GSVJTVF9EQVksIFBSSVpNX0xBU1RfREFZIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheXMuY29uc3QnO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQcml6bVRpbWUgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvdGltZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L2NvbnRyb2wnO1xuaW1wb3J0IHsgUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvYWx3YXlzLWZhbHNlLWhhbmRsZXInO1xuaW1wb3J0IHtcbiAgUFJJWk1fREFURV9USU1FX1NFUEFSQVRPUixcbiAgUFJJWk1fREFURV9USU1FX1NFUEFSQVRPUl9OR1gsXG59IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9kYXRlLXRpbWUtc2VwYXJhdG9yJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AsIHByaXptUHVyZSB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfVElNRV9WQUxVRV9UUkFOU0ZPUk1FUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWlucHV0cy12YWx1ZS10cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9URVhUUywgUFJJWk1fVElNRV9URVhUUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9pMThuJztcbmltcG9ydCB7IFByaXptQ29udGV4dFdpdGhJbXBsaWNpdCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2NvbnRleHQtd2l0aC1pbXBsaWNpdCc7XG5pbXBvcnQgeyBQcml6bUNvbnRyb2xWYWx1ZVRyYW5zZm9ybWVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvY29udHJvbC12YWx1ZS10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBQcml6bURhdGVNb2RlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0ZS1tb2RlJztcbmltcG9ydCB7IFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZm9jdXNhYmxlLWVsZW1lbnQtYWNjZXNzb3InO1xuaW1wb3J0IHsgUHJpem1Cb29sZWFuSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2hhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1UaW1lTW9kZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3RpbWUtbW9kZSc7XG5pbXBvcnQgeyBQcml6bVdpdGhPcHRpb25hbE1pbk1heCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3dpdGgtb3B0aW9uYWwtbWluLW1heCc7XG5pbXBvcnQgeyBQUklaTV9JTlBVVF9EQVRFX1RJTUVfUFJPVklERVJTIH0gZnJvbSAnLi9pbnB1dC1kYXRlLXRpbWUucHJvdmlkZXJzJztcbmltcG9ydCB7IHByaXptTnVsbGFibGVTYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb21tb24vbnVsbGFibGUtc2FtZSc7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZEluIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9pcy1uYXRpdmUtZm9jdXNlZC1pbic7XG5pbXBvcnQgeyBwcml6bUNyZWF0ZURhdGVOZ3hNYXNrIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvbWFzay9jcmVhdGUtZGF0ZS1tYXNrJztcbmltcG9ydCB7IHByaXptQ3JlYXRlVGltZU5neE1hc2sgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9tYXNrL2NyZWF0ZS10aW1lLW1hc2snO1xuaW1wb3J0IHsgcHJpem1DbGFtcCB9IGZyb20gJy4uLy4uLy4uL3V0aWwvbWF0aC9jbGFtcCc7XG5pbXBvcnQgeyBQcml6bUlucHV0U2l6ZSB9IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvcHJpem0taW5wdXQubW9kZWxzJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfUklHSFRfQlVUVE9OUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWV4dHJhLWJ1dHRvbnMnO1xuaW1wb3J0IHsgUHJpem1EYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0ZS1idXR0b24nO1xuaW1wb3J0IHsgUFJJWk1fU1RSSUNUX01BVENIRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBwcml6bUkxOG5Jbml0V2l0aEtleXMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWlucHV0LWRhdGUtdGltZWAsXG4gIHRlbXBsYXRlVXJsOiBgLi9pbnB1dC1kYXRlLXRpbWUuY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFtgLi9pbnB1dC1kYXRlLXRpbWUuY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByaXptSTE4bkluaXRXaXRoS2V5cyh7XG4gICAgICB0aW1lOiBQUklaTV9USU1FX1RFWFRTLFxuICAgICAgZGF0ZVRleHRzOiBQUklaTV9EQVRFX1RFWFRTLFxuICAgIH0pLFxuICAgIC4uLlBSSVpNX0lOUFVUX0RBVEVfVElNRV9QUk9WSURFUlMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXREYXRlVGltZUNvbXBvbmVudFxuICBleHRlbmRzIEFic3RyYWN0UHJpem1Db250cm9sPFtQcml6bURheSB8IG51bGwsIFByaXptVGltZSB8IG51bGxdPlxuICBpbXBsZW1lbnRzIFByaXptV2l0aE9wdGlvbmFsTWluTWF4PFByaXptRGF5IHwgW1ByaXptRGF5LCBQcml6bVRpbWVdPiwgUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3JcbntcbiAgcHJpdmF0ZSBtb250aDogUHJpem1Nb250aCB8IG51bGwgPSBudWxsO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnRSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgdGltZUl0ZW1zOiByZWFkb25seSBQcml6bVRpbWVbXSA9IG5ldyBBcnJheSgyNCkuZmlsbChudWxsKS5tYXAoKF8sIGkpID0+IG5ldyBQcml6bVRpbWUoaSwgMCwgMCwgMCkpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbGFiZWwgPSAn0JDQsdGB0L7Qu9GO0YLQvdC+0LUnO1xuXG4gIEBJbnB1dCgpIGZvcmNlQ2xlYXI6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHBsYWNlaG9sZGVyID0gJ9CS0YvQsdC10YDQuNGC0LUg0LTQsNGC0YMg0Lgg0LLRgNC10LzRjyc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzaXplOiBQcml6bUlucHV0U2l6ZSA9ICdtJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGV4dHJhQnV0dG9uSW5qZWN0b3I6IEluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG91dGVyID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtaW46IFByaXptRGF5IHwgW1ByaXptRGF5LCBQcml6bVRpbWVdID0gUFJJWk1fRklSU1RfREFZO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4OiBQcml6bURheSB8IFtQcml6bURheSwgUHJpem1UaW1lXSA9IFBSSVpNX0xBU1RfREFZO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgdGltZVN0cmljdCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGlzYWJsZWRJdGVtSGFuZGxlcjogUHJpem1Cb29sZWFuSGFuZGxlcjxQcml6bURheT4gPSBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRlZmF1bHRBY3RpdmVZZWFyTW9udGggPSBQcml6bU1vbnRoLmN1cnJlbnRMb2NhbCgpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgdGltZU1vZGU6IFByaXptVGltZU1vZGUgPSBgSEg6TU1gO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfaW5wdXRfZGF0ZV90aW1lJztcblxuICBwdWJsaWMgb3BlblRpbWVUZW1wbGF0ZTogYW55ID0gZmFsc2U7XG5cbiAgb3BlbiA9IGZhbHNlO1xuXG4gIC8qKiBmb3IgYXZvaWQgdGltZSBmb3JtYXQgMjk6MDEgKi9cbiAgLy8gVE9ETyByZW1vdmUgYWZ0ZXIgdXBkYXRlIGFuZ3VsYXIgMTUgYW5kIGxhdGVzdCBtYXNrIHZlcnNpb25cbiAgLy8gcmVhZG9ubHkgZml4ZWRQYXR0ZXJuRm9yVGltZSA9IHtcbiAgLy8gICBIOiB7IHBhdHRlcm46IC9bMC0yXS9pIH0sXG4gIC8vICAgaDogeyBwYXR0ZXJuOiAvWzAtM10vaSB9LFxuICAvLyAgIG06IHsgcGF0dGVybjogL1swLTVdL2kgfSxcbiAgLy8gICAwOiB7IHBhdHRlcm46IC9bMC05XS9pIH0sXG4gIC8vIH07XG5cbiAgcmVhZG9ubHkgdHlwZSE6IFByaXptQ29udGV4dFdpdGhJbXBsaWNpdDx1bmtub3duPjtcblxuICBnZXQgZmlsdGVyZWRUaW1lKCk6IHJlYWRvbmx5IFByaXptVGltZVtdIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJUaW1lKHRoaXMudGltZUl0ZW1zLCB0aGlzLnRpbWVNb2RlLCB0aGlzLmNvbXB1dGVkU2VhcmNoVGltZSk7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRTZWFyY2hUaW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29tcHV0ZWRWYWx1ZS5sZW5ndGggIT09IHRoaXMudGltZU1vZGUubGVuZ3RoID8gdGhpcy5jb21wdXRlZFZhbHVlIDogYGA7XG4gIH1cblxuICByZWFkb25seSBmaWxsZXIkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLmRhdGVUZXh0cyQucGlwZShcbiAgICAgIG1hcChkYXRlVGV4dHMgPT4gcHJpem1DaGFuZ2VEYXRlU2VwYXJhdG9yKGRhdGVUZXh0c1t0aGlzLmRhdGVGb3JtYXRdLCB0aGlzLmRhdGVTZXBhcmF0b3IpKVxuICAgICksXG4gICAgdGhpcy50aW1lVGV4dHMkLnBpcGUocGx1Y2sodGhpcy50aW1lTW9kZSkpLFxuICBdKS5waXBlKG1hcChmaWxsZXJzID0+IHRoaXMuZ2V0RGF0ZVRpbWVTdHJpbmcoLi4uZmlsbGVycykpKTtcblxuICBwdWJsaWMgcmlnaHRCdXR0b25zJCE6IEJlaGF2aW9yU3ViamVjdDxQcml6bURhdGVCdXR0b25bXT47XG4gIHB1YmxpYyByZWFkb25seSBpbm5lckNvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIEBJbmplY3QoTmdDb250cm9sKVxuICAgIGNvbnRyb2w6IE5nQ29udHJvbCB8IG51bGwsXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9GT1JNQVQpIHJlYWRvbmx5IGRhdGVGb3JtYXQ6IFByaXptRGF0ZU1vZGUsXG4gICAgQEluamVjdChQUklaTV9EQVRFX1NFUEFSQVRPUikgcmVhZG9ubHkgZGF0ZVNlcGFyYXRvcjogc3RyaW5nLFxuICAgIEBJbmplY3QoUFJJWk1fVElNRV9URVhUUylcbiAgICByZWFkb25seSB0aW1lVGV4dHMkOiBPYnNlcnZhYmxlPFJlY29yZDxQcml6bVRpbWVNb2RlLCBzdHJpbmc+PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfVEVYVFMpXG4gICAgcmVhZG9ubHkgZGF0ZVRleHRzJDogT2JzZXJ2YWJsZTxSZWNvcmQ8UHJpem1EYXRlTW9kZSwgc3RyaW5nPj4sXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfVElNRV9WQUxVRV9UUkFOU0ZPUk1FUilcbiAgICBvdmVycmlkZSByZWFkb25seSB2YWx1ZVRyYW5zZm9ybWVyOiBQcml6bUNvbnRyb2xWYWx1ZVRyYW5zZm9ybWVyPFxuICAgICAgW1ByaXptRGF5IHwgbnVsbCwgUHJpem1UaW1lIHwgbnVsbF1cbiAgICA+IHwgbnVsbFxuICApIHtcbiAgICBzdXBlcihjb250cm9sLCBjaGFuZ2VEZXRlY3RvclJlZiwgdmFsdWVUcmFuc2Zvcm1lcik7XG4gIH1cblxuICBAcHJpem1QdXJlXG4gIHByaXZhdGUgZmlsdGVyVGltZShpdGVtczogcmVhZG9ubHkgUHJpem1UaW1lW10sIG1vZGU6IFByaXptVGltZU1vZGUsIHNlYXJjaDogc3RyaW5nKTogcmVhZG9ubHkgUHJpem1UaW1lW10ge1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnRvU3RyaW5nKG1vZGUpLmluY2x1ZGVzKHNlYXJjaCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU3RhdGVCZXR3ZWVuQ29udHJvbHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCBpbnN0YW5jZW9mIFVudHlwZWRGb3JtQ29udHJvbClcbiAgICAgIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNTdGF0ZXModGhpcy5jb250cm9sIGFzIFVudHlwZWRGb3JtQ29udHJvbCwgZmFsc2UsIHRoaXMuaW5uZXJDb250cm9sKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3luY1ZhbGlkYXRvcnNCZXR3ZWVuQ29udHJvbHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCBpbnN0YW5jZW9mIFVudHlwZWRGb3JtQ29udHJvbClcbiAgICAgIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNBbGxWYWxpZGF0b3JzKHRoaXMuY29udHJvbCBhcyBVbnR5cGVkRm9ybUNvbnRyb2wsIGZhbHNlLCB0aGlzLmlubmVyQ29udHJvbClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIHN5bmNWYWx1ZXNCZXR3ZWVuQ29udHJvbHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCBpbnN0YW5jZW9mIFVudHlwZWRGb3JtQ29udHJvbClcbiAgICAgIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNWYWx1ZXMoXG4gICAgICAgIHRoaXMuY29udHJvbCBhcyBVbnR5cGVkRm9ybUNvbnRyb2wsXG4gICAgICAgICgpID0+IHRoaXMuY29tcHV0ZWRWYWx1ZSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5pbm5lckNvbnRyb2xcbiAgICAgIClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLnN5bmNTdGF0ZUJldHdlZW5Db250cm9scygpO1xuICAgIHRoaXMuc3luY1ZhbGlkYXRvcnNCZXR3ZWVuQ29udHJvbHMoKTtcbiAgICB0aGlzLnN5bmNWYWx1ZXNCZXR3ZWVuQ29udHJvbHMoKTtcbiAgICB0aGlzLnJpZ2h0QnV0dG9ucyQgPSB0aGlzLmV4dHJhQnV0dG9uSW5qZWN0b3IuZ2V0KFBSSVpNX0RBVEVfUklHSFRfQlVUVE9OUyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQoKTogSFRNTElucHV0RWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQgPyAodGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkgOiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnRcbiAgICAgID8gcHJpem1Jc05hdGl2ZUZvY3VzZWRJbih0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudClcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICBnZXQgZmlsbGVyTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIFBSSVpNX0RBVEVfRklMTEVSX0xFTkdUSCArIFBSSVpNX0RBVEVfVElNRV9TRVBBUkFUT1IubGVuZ3RoICsgdGhpcy50aW1lTW9kZS5sZW5ndGg7XG4gIH1cblxuICBnZXQgdGV4dE1hc2tPcHRpb25zKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlTWFzayhcbiAgICAgIHRoaXMudmFsdWVbMF0sXG4gICAgICB0aGlzLmNhbGVuZGFyTWluRGF5LFxuICAgICAgdGhpcy5jYWxlbmRhck1heERheSxcbiAgICAgIHRoaXMudGltZU1vZGUsXG4gICAgICB0aGlzLmRhdGVGb3JtYXQsXG4gICAgICB0aGlzLmRhdGVTZXBhcmF0b3JcbiAgICApO1xuICB9XG5cbiAgZ2V0IHN0cmluZ1ZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU/LnRvU3RyaW5nKCkgPz8gJyc7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hdGl2ZVZhbHVlLCB0aW1lTW9kZSB9ID0gdGhpcztcbiAgICBjb25zdCBbZGF0ZSwgdGltZV0gPSB2YWx1ZTtcbiAgICBjb25zdCBoYXNUaW1lSW5wdXRDaGFycyA9IG5hdGl2ZVZhbHVlLmxlbmd0aCA+IFBSSVpNX0RBVEVfRklMTEVSX0xFTkdUSDtcblxuICAgIGlmICghZGF0ZSB8fCAoIXRpbWUgJiYgaGFzVGltZUlucHV0Q2hhcnMpKSB7XG4gICAgICByZXR1cm4gbmF0aXZlVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZVRpbWVTdHJpbmcoZGF0ZSwgdGltZSwgdGltZU1vZGUpO1xuICB9XG5cbiAgZ2V0IGNhbGVuZGFyVmFsdWUoKTogUHJpem1EYXkgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVswXTtcbiAgfVxuXG4gIGdldCBjYWxlbmRhck1pbkRheSgpOiBQcml6bURheSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5taW4pID8gdGhpcy5taW5bMF0gOiB0aGlzLm1pbjtcbiAgfVxuXG4gIGdldCBjYWxlbmRhck1heERheSgpOiBQcml6bURheSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5tYXgpID8gdGhpcy5tYXhbMF0gOiB0aGlzLm1heDtcbiAgfVxuXG4gIGdldCBjb21wdXRlZEFjdGl2ZVllYXJNb250aCgpOiBQcml6bU1vbnRoIHtcbiAgICByZXR1cm4gdGhpcy5tb250aCB8fCB0aGlzLnZhbHVlWzBdIHx8IHRoaXMuZGVmYXVsdEFjdGl2ZVllYXJNb250aDtcbiAgfVxuXG4gIGdldCBuYXRpdmVWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQudmFsdWUgOiBgYDtcbiAgfVxuXG4gIHNldCBuYXRpdmVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoYGNsaWNrYClcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgfVxuXG4gIHB1YmxpYyBvblZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8IDE2KSB7XG4gICAgICBpZiAoIXZhbHVlKSB0aGlzLnVwZGF0ZVZhbHVlKFtudWxsLCBudWxsXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgW2RhdGUsIHRpbWVdID0gdmFsdWUuc3BsaXQoUFJJWk1fREFURV9USU1FX1NFUEFSQVRPUl9OR1gpO1xuXG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IFByaXptRGF5Lm5vcm1hbGl6ZVBhcnNlKGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCk7XG4gICAgbGV0IHBhcnNlZFRpbWUgPVxuICAgICAgdGltZSAmJiB0aW1lLmxlbmd0aCA9PT0gdGhpcy50aW1lTW9kZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLnByaXptQ2xhbXBUaW1lKFByaXptVGltZS5mcm9tU3RyaW5nKHRpbWUpLCBwYXJzZWREYXRlKVxuICAgICAgICA6IG51bGw7XG4gICAgaWYgKHBhcnNlZFRpbWUpIHBhcnNlZFRpbWUgPSBQcml6bVRpbWUuY29ycmVjdFRpbWUocGFyc2VkVGltZSk7XG4gICAgY29uc3QgbWF0Y2ggPSBwYXJzZWRUaW1lICYmIHRoaXMuZ2V0TWF0Y2godGltZSk7XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKFtcbiAgICAgIHBhcnNlZERhdGUsXG4gICAgICBtYXRjaCB8fCAodGhpcy50aW1lU3RyaWN0ID8gdGhpcy5maW5kTmVhcmVzdFRpbWVGcm9tSXRlbXMocGFyc2VkVGltZSBhcyBhbnkpIDogcGFyc2VkVGltZSksXG4gICAgXSk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgb25EYXlDbGljayhkYXk6IFByaXptRGF5LCB0aW1lPzogUHJpem1UaW1lKTogdm9pZCB7XG4gICAgY29uc3QgbW9kaWZpZWRUaW1lID1cbiAgICAgIHRpbWUgPz8gKHRoaXMudmFsdWVbMV0gJiYgdGhpcy5wcml6bUNsYW1wVGltZSh0aGlzLnZhbHVlWzFdLCBkYXkpKSA/PyBuZXcgUHJpem1UaW1lKDAsIDApO1xuICAgIHRoaXMudXBkYXRlVmFsdWUoW2RheSwgbW9kaWZpZWRUaW1lXSk7XG4gICAgdGhpcy51cGRhdGVOYXRpdmVWYWx1ZShkYXkpO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG9uSG92ZXJlZChob3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVIb3ZlcmVkKGhvdmVyZWQpO1xuICB9XG5cbiAgcHVibGljIG9uTW9udGhDaGFuZ2UobW9udGg6IFByaXptTW9udGgpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRoID0gbW9udGg7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICB9XG5cbiAgcHVibGljIG9uRm9jdXNlZChmb2N1c2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVGb2N1c2VkKGZvY3VzZWQpO1xuXG4gICAgaWYgKFxuICAgICAgZm9jdXNlZCB8fFxuICAgICAgdGhpcy52YWx1ZVswXSA9PT0gbnVsbCB8fFxuICAgICAgdGhpcy52YWx1ZVsxXSAhPT0gbnVsbCB8fFxuICAgICAgdGhpcy5uYXRpdmVWYWx1ZS5sZW5ndGggPD0gdGhpcy5maWxsZXJMZW5ndGggKyBQUklaTV9EQVRFX1RJTUVfU0VQQVJBVE9SLmxlbmd0aCB8fFxuICAgICAgdGhpcy50aW1lTW9kZSA9PT0gYEhIOk1NYFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IFssIHRpbWVdID0gdGhpcy5uYXRpdmVWYWx1ZS5zcGxpdChQUklaTV9EQVRFX1RJTUVfU0VQQVJBVE9SKTtcblxuICAgIGlmICghdGltZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZFRpbWUgPSBQcml6bVRpbWUuZnJvbVN0cmluZyh0aW1lKTtcblxuICAgIHRoaXMudXBkYXRlVmFsdWUoW3RoaXMudmFsdWVbMF0sIHBhcnNlZFRpbWVdKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubmF0aXZlVmFsdWUuZW5kc1dpdGgoYC5gKSB8fCB0aGlzLm5hdGl2ZVZhbHVlLmVuZHNXaXRoKGA6YCkpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVWYWx1ZSA9IHRoaXMubmF0aXZlVmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHNldERpc2FibGVkU3RhdGUoKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0RGlzYWJsZWRTdGF0ZSgpO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IFtQcml6bURheSB8IG51bGwsIFByaXptVGltZSB8IG51bGxdIHwgbnVsbCk6IHZvaWQge1xuICAgIHN1cGVyLndyaXRlVmFsdWUodmFsdWUpO1xuXG4gICAgdGhpcy5uYXRpdmVWYWx1ZSA9IHZhbHVlICYmICh2YWx1ZVswXSB8fCB2YWx1ZVsxXSkgPyB0aGlzLmNvbXB1dGVkVmFsdWUgOiBgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRGYWxsYmFja1ZhbHVlKCk6IFtQcml6bURheSB8IG51bGwsIFByaXptVGltZSB8IG51bGxdIHtcbiAgICByZXR1cm4gW251bGwsIG51bGxdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHZhbHVlSWRlbnRpY2FsQ29tcGFyYXRvcihcbiAgICBvbGRWYWx1ZTogW1ByaXptRGF5IHwgbnVsbCwgUHJpem1UaW1lIHwgbnVsbF0sXG4gICAgbmV3VmFsdWU6IFtQcml6bURheSB8IG51bGwsIFByaXptVGltZSB8IG51bGxdXG4gICk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBuZXdWYWx1ZSAmJlxuICAgICAgb2xkVmFsdWUgJiZcbiAgICAgIHByaXptTnVsbGFibGVTYW1lKG9sZFZhbHVlWzBdLCBuZXdWYWx1ZVswXSwgKGEsIGIpID0+IGE/LmRheVNhbWUoYikpICYmXG4gICAgICBwcml6bU51bGxhYmxlU2FtZShvbGRWYWx1ZVsxXSwgbmV3VmFsdWVbMV0sIChhLCBiKSA9PiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKSlcbiAgICApO1xuICB9XG5cbiAgQHByaXptUHVyZVxuICBwcml2YXRlIGNhbGN1bGF0ZU1hc2soXG4gICAgZGF5OiBQcml6bURheSB8IG51bGwsXG4gICAgbWluOiBQcml6bURheSxcbiAgICBtYXg6IFByaXptRGF5LFxuICAgIHRpbWVNb2RlOiBQcml6bVRpbWVNb2RlLFxuICAgIGRhdGVGb3JtYXQ6IFByaXptRGF0ZU1vZGUsXG4gICAgZGF0ZVNlcGFyYXRvcjogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3ByaXptQ3JlYXRlRGF0ZU5neE1hc2soZGF0ZUZvcm1hdCwgZGF0ZVNlcGFyYXRvcil9ICR7cHJpem1DcmVhdGVUaW1lTmd4TWFzayh0aW1lTW9kZSl9YDtcbiAgfVxuXG4gIEBwcml6bVB1cmVcbiAgcHJpdmF0ZSBnZXREYXRlVGltZVN0cmluZyhcbiAgICBkYXRlOiBQcml6bURheSB8IHN0cmluZyxcbiAgICB0aW1lOiBQcml6bVRpbWUgfCBzdHJpbmcgfCBudWxsLFxuICAgIHRpbWVNb2RlOiBQcml6bVRpbWVNb2RlID0gYEhIOk1NYFxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlIGluc3RhbmNlb2YgUHJpem1EYXkgPyBkYXRlLnRvU3RyaW5nKHRoaXMuZGF0ZUZvcm1hdCwgdGhpcy5kYXRlU2VwYXJhdG9yKSA6IGRhdGU7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IHRpbWUgaW5zdGFuY2VvZiBQcml6bVRpbWUgPyB0aW1lLnRvU3RyaW5nKHRpbWVNb2RlKSA6IHRpbWUgfHwgYGA7XG5cbiAgICByZXR1cm4gYCR7ZGF0ZVN0cmluZ30ke1BSSVpNX0RBVEVfVElNRV9TRVBBUkFUT1J9JHt0aW1lU3RyaW5nfWA7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU5hdGl2ZVZhbHVlKGRheTogUHJpem1EYXkpOiB2b2lkIHtcbiAgICBjb25zdCB0aW1lID0gdGhpcy5uYXRpdmVWYWx1ZS5zcGxpdChQUklaTV9EQVRFX1RJTUVfU0VQQVJBVE9SKVsxXSB8fCBgYDtcbiAgICB0aGlzLm5hdGl2ZVZhbHVlID0gdGhpcy5nZXREYXRlVGltZVN0cmluZyhkYXksIHRpbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kTmVhcmVzdFRpbWVGcm9tSXRlbXModmFsdWU6IFByaXptVGltZSk6IFByaXptVGltZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnRpbWVJdGVtcy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PlxuICAgICAgTWF0aC5hYnMoY3VycmVudC50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkgLSB2YWx1ZS50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkpIDxcbiAgICAgIE1hdGguYWJzKHByZXZpb3VzLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKSAtIHZhbHVlLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKSlcbiAgICAgICAgPyBjdXJyZW50XG4gICAgICAgIDogcHJldmlvdXNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXRjaCh2YWx1ZTogc3RyaW5nKTogUHJpem1UaW1lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50aW1lSXRlbXMuZmluZChpdGVtID0+IFBSSVpNX1NUUklDVF9NQVRDSEVSKGl0ZW0sIHZhbHVlKSk7XG4gIH1cblxuICBwdWJsaWMgb25UaW1lTWVudUNsaWNrKGl0ZW06IFByaXptVGltZSwgZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMub3BlblRpbWVUZW1wbGF0ZSA9IHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cbiAgICBpZiAodGhpcy52YWx1ZVsxXSAmJiBpdGVtLmlzU2FtZVRpbWUodGhpcy52YWx1ZVsxXSkpIHJldHVybjtcblxuICAgIHRoaXMub25EYXlDbGljayh0aGlzLnZhbHVlWzBdID8/IFByaXptRGF5LmN1cnJlbnRMb2NhbCgpLCBpdGVtKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJpem1DbGFtcFRpbWUodGltZTogUHJpem1UaW1lLCBkYXk6IFByaXptRGF5KTogUHJpem1UaW1lIHtcbiAgICBjb25zdCBtcyA9IHRpbWUudG9BYnNvbHV0ZU1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IG1pbiA9XG4gICAgICBBcnJheS5pc0FycmF5KHRoaXMubWluKSAmJiBkYXkuZGF5U2FtZSh0aGlzLmNhbGVuZGFyTWluRGF5KVxuICAgICAgICA/IHRoaXMubWluWzFdLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKVxuICAgICAgICA6IC1JbmZpbml0eTtcbiAgICBjb25zdCBtYXggPVxuICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLm1heCkgJiYgZGF5LmRheVNhbWUodGhpcy5jYWxlbmRhck1heERheSlcbiAgICAgICAgPyB0aGlzLm1heFsxXS50b0Fic29sdXRlTWlsbGlzZWNvbmRzKClcbiAgICAgICAgOiBJbmZpbml0eTtcblxuICAgIHJldHVybiBQcml6bVRpbWUuZnJvbUFic29sdXRlTWlsbGlzZWNvbmRzKHByaXptQ2xhbXAobXMsIG1pbiwgbWF4KSk7XG4gIH1cblxuICBwdWJsaWMgb3BlblRpbWVEcm9wZG93bigpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5UaW1lVGVtcGxhdGUgPSAhdGhpcy5vcGVuVGltZVRlbXBsYXRlO1xuICB9XG5cbiAgcHVibGljIG9wZW5EYXRlRHJvcGRvd24oKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuVGltZVRlbXBsYXRlID0gbnVsbDtcbiAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAvLyB0aGlzLm9wZW5UaW1lVGVtcGxhdGUgPSAhdGhpcy5vcGVuVGltZVRlbXBsYXRlO1xuICB9XG59XG4iLCI8cHJpem0tZHJvcGRvd24taG9zdFxuICBjbGFzcz1cInotaG9zdGVkXCJcbiAgI3ByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50XG4gIFtzdHlsZS4tLXByaXptLWRyb3Bkb3duLWhvc3Qtd2lkdGhdPVwiJzEwMCUnXCJcbiAgW2Nhbk9wZW5dPVwiaW50ZXJhY3RpdmVcIlxuICBbY29udGVudF09XCJvcGVuVGltZVRlbXBsYXRlID8gZHJvcGRvd25UaW1lVGVtcGxhdGUgOiBkcm9wZG93bkRhdGVUZW1wbGF0ZVwiXG4gIFtwcml6bURyb3Bkb3duSG9zdFdpZHRoXT1cIm9wZW5UaW1lVGVtcGxhdGUgPyAnMTAwJScgOiAnYXV0bydcIlxuICBbaXNPcGVuXT1cImludGVyYWN0aXZlICYmIChvcGVuVGltZVRlbXBsYXRlIHx8IG9wZW4pXCJcbiAgW2Nsb3NlQnlFc2NdPVwidHJ1ZVwiXG4gIChpc09wZW5DaGFuZ2UpPVwib25PcGVuQ2hhbmdlKCRldmVudCk7ICRldmVudCAmJiBwcml6bURyb3Bkb3duSG9zdENvbXBvbmVudC5yZUNhbGN1bGF0ZVBvc2l0aW9ucygpXCJcbj5cbiAgPHByaXptLWlucHV0LWxheW91dCBbbGFiZWxdPVwibGFiZWxcIiBbb3V0ZXJdPVwib3V0ZXJcIiBbZm9yY2VDbGVhcl09XCJmb3JjZUNsZWFyXCIgW3NpemVdPVwic2l6ZVwiPlxuICAgIDxuZy10ZW1wbGF0ZSBwcml6bUlucHV0U3RhdHVzVGV4dD7QntGI0LjQsdC60LAhINCd0LXQv9GA0LDQstC40LvRjNC90YvQuSDRhNC+0YDQvNCw0YI8L25nLXRlbXBsYXRlPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJpbnB1dC1zZWFyY2hcIlxuICAgICAgI2ZvY3VzYWJsZUVsZW1lbnRSZWZcbiAgICAgIFttYXNrXT1cInRleHRNYXNrT3B0aW9uc1wiXG4gICAgICBbc2hvd01hc2tUeXBlZF09XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzZWRcIlxuICAgICAgW2Ryb3BTcGVjaWFsQ2hhcmFjdGVyc109XCJmYWxzZVwiXG4gICAgICBbcmVhZG9ubHldPVwicmVhZE9ubHlcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIFtkaXNhYmxlZF09XCJjb21wdXRlZERpc2FibGVkXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJpbm5lckNvbnRyb2xcIlxuICAgICAgcHJpem1JbnB1dFxuICAgIC8+XG4gICAgPCEtLSAgICBbbmdNb2RlbF09XCJjb21wdXRlZFZhbHVlXCItLT5cbiAgICA8IS0tICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50IHx8ICcnKVwiLS0+XG5cbiAgICA8IS0tICAgIFtwYXR0ZXJuc109XCJmaXhlZFBhdHRlcm5Gb3JUaW1lXCItLT5cbiAgICA8bmctY29udGFpbmVyIHByaXptLWlucHV0LXJpZ2h0PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiXG4gICAgICAgIChjbGljayk9XCJvcGVuRGF0ZURyb3Bkb3duKClcIlxuICAgICAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImRhdGUtY2FsZW5kYXItYmxhbmtcIlxuICAgICAgPjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiIChjbGljayk9XCJvcGVuVGltZURyb3Bkb3duKClcIiBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImRhdGUtY2xvY2tcIj48L2J1dHRvbj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiByaWdodEJ1dHRvbnMkIHwgYXN5bmNcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b24udGVtcGxhdGVcIj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3ByaXptLWlucHV0LWxheW91dD5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cblxuPG5nLXRlbXBsYXRlICNkcm9wZG93bkRhdGVUZW1wbGF0ZT5cbiAgPHByaXptLWNhbGVuZGFyXG4gICAgW21pbl09XCJjYWxlbmRhck1pbkRheVwiXG4gICAgW21heF09XCJjYWxlbmRhck1heERheVwiXG4gICAgW2Rpc2FibGVkSXRlbUhhbmRsZXJdPVwiZGlzYWJsZWRJdGVtSGFuZGxlclwiXG4gICAgW21vbnRoXT1cImNvbXB1dGVkQWN0aXZlWWVhck1vbnRoXCJcbiAgICBbdmFsdWVdPVwiY2FsZW5kYXJWYWx1ZVwiXG4gICAgKGRheUNsaWNrKT1cIm9uRGF5Q2xpY2soJGV2ZW50KVwiXG4gICAgKG1vbnRoQ2hhbmdlKT1cIm9uTW9udGhDaGFuZ2UoJGV2ZW50KVwiXG4gICAgcHJpem1QcmV2ZW50RGVmYXVsdD1cIm1vdXNlZG93blwiXG4gICAgYXV0b21hdGlvbi1pZD1cInByaXptLWlucHV0LWRhdGUtdGltZV9fY2FsZW5kYXJcIlxuICA+PC9wcml6bS1jYWxlbmRhcj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZHJvcGRvd25UaW1lVGVtcGxhdGU+XG4gIDxwcml6bS1kYXRhLWxpc3RcbiAgICBjbGFzcz1cImJsb2NrXCJcbiAgICAqbmdJZj1cInRpbWVJdGVtcy5sZW5ndGhcIlxuICAgIFtzdHlsZS4tLXByaXptLWRhdGEtbGlzdC1ib3JkZXJdPVwiMFwiXG4gICAgKHByaXptQWZ0ZXJWaWV3SW5pdCk9XCJwcml6bURyb3Bkb3duSG9zdENvbXBvbmVudC5yZUNhbGN1bGF0ZVBvc2l0aW9ucygpXCJcbiAgICAocHJpem1PbkRlc3Ryb3kpPVwib3BlblRpbWVUZW1wbGF0ZSA9IGZhbHNlXCJcbiAgICBwcml6bUxpZmVjeWNsZVxuICA+XG4gICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ0aW1lLWl0ZW1cIlxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0aW1lSXRlbXM7IGxldCBpZHggPSBpbmRleFwiXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJ2YWx1ZT8uWzFdICYmIGl0ZW0uaXNTYW1lVGltZSgkYW55KHZhbHVlPy5bMV0pKVwiXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IG9uVGltZU1lbnVDbGljayhpdGVtLCAkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAge3sgaXRlbSB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9wcml6bS1kYXRhLWxpc3Q+XG48L25nLXRlbXBsYXRlPlxuIl19