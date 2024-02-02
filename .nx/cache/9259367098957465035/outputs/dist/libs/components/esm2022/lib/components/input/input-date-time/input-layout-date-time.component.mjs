import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, forwardRef, Inject, Injector, Input, Optional, ViewChild, } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, of, tap } from 'rxjs';
import { PRIZM_DATE_FILLER_LENGTH } from '../../../@core/date-time/date-fillers';
import { PRIZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PRIZM_DATE_SEPARATOR } from '../../../@core/date-time/date-separator';
import { PrizmDay } from '../../../@core/date-time/day';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmTime } from '../../../@core/date-time/time';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_DATE_TIME_SEPARATOR } from '../../../constants/date-time-separator';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { PRIZM_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PRIZM_DATE_TEXTS, PRIZM_TIME_TEXTS } from '../../../tokens/i18n';
import { PRIZM_INPUT_DATE_TIME_PROVIDERS } from './input-date-time.providers';
import { prizmCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { prizmCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { prizmClamp } from '../../../util/math/clamp';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PRIZM_STRICT_MATCHER } from '../../../constants';
import { filterTruthy, PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '../common';
import { PrizmInputZoneDirective, PrizmInputZoneModule } from '../../../directives/input-zone';
import { debounceTime, delay, map, takeUntil } from 'rxjs/operators';
import { PrizmLifecycleModule } from '../../../directives/lifecycle';
import { PolymorphOutletDirective } from '../../../directives/polymorph';
import { PrizmInputNativeValueModule, } from '../../../directives/native-value';
import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { prizmI18nInitWithKeys } from '../../../services';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host/dropdown-host.component';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmMaskModule } from '../../../modules/mask/mask.module';
import { PrizmDataListComponent } from '../../data-list/data-list.component';
import { PrizmIconComponent } from '../../icon/icon.component';
import { PrizmPreventDefaultModule } from '../../../directives/prevent-default/prevent-default.module';
import { PrizmCalendarComponent } from '../../calendar';
import { PrizmLinkComponent } from '../../link';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmListingItemComponent } from '../../listing-item';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../common/input-icon-button/input-icon-button.component";
import * as i3 from "../common/input-status-text/input-status-text.directive";
import * as i4 from "../common/input-layout/input-layout-right.directive";
import * as i5 from "../input-text/input-text.component";
import * as i6 from "@angular/forms";
import * as i7 from "ngx-mask";
import * as i8 from "../../../directives/input-zone/input-zone.directive";
import * as i9 from "../../../directives/input-zone/input-in-zone.directive";
import * as i10 from "../../../directives/lifecycle/lifecycle.directive";
import * as i11 from "../../../directives/prevent-default/prevent-default.directive";
import * as i12 from "rxjs";
export class PrizmInputLayoutDateTimeComponent extends PrizmInputNgControl {
    get empty() {
        return combineLatest([this.value$, this.nativeValue$$]).pipe(map(([value, nativeValue]) => {
            return (!value || !value.filter?.(Boolean).join('')) && !nativeValue.find(Boolean);
        }));
    }
    constructor(document, dateFormat, dateSeparator, timeTexts$, injector, dateTexts$, valueTransformer) {
        super(injector, valueTransformer);
        this.document = document;
        this.dateFormat = dateFormat;
        this.dateSeparator = dateSeparator;
        this.timeTexts$ = timeTexts$;
        this.dateTexts$ = dateTexts$;
        this.nativeElementType = 'input-date-time';
        this.hasClearButton = true;
        this.month = null;
        this.fallbackValue = [null, null];
        this.timeItems = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));
        this.placeholder = 'Выберите дату и время';
        this.min = PRIZM_FIRST_DAY;
        this.max = PRIZM_LAST_DAY;
        this.timeStrict = false;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.defaultActiveYearMonth = PrizmMonth.currentLocal();
        this.timeMode = `HH:MM`;
        this.testId_ = 'ui_input_date_time';
        this.openTimeTemplate = false;
        this.nativeValue$$ = new BehaviorSubject(['', '']);
        this.open = false;
        this.needChangeNativeValue = (currentValue, nativeValue, el) => {
            if (this.document.activeElement === el)
                return false;
            const newNativeValue = nativeValue.replace(/[^0-9]/g, '');
            const currentNewValue = currentValue.replace(/[^0-9]/g, '');
            if (newNativeValue.length !== 4)
                return false;
            if (currentNewValue.length !== 4)
                return false;
            if (newNativeValue === currentNewValue)
                return false;
            return true;
        };
        this.extraButtonInjector = injector;
    }
    ngAfterViewInit() {
        this.focusableElement?.blur$
            .pipe(debounceTime(0), filterTruthy(), tap(() => this.completeDateIfAreNotPending()), takeUntil(this.destroy$))
            .subscribe();
    }
    completeDateIfAreNotPending() {
        const [dateValue, timeValue] = this.nativeValue$$.value;
        if (!dateValue && !timeValue)
            return;
        if (dateValue && dateValue.length !== this.textMaskOptions.length)
            return;
        if (timeValue && timeValue.length !== this.timeMaskOptions.length)
            return;
        const parsedDate = dateValue
            ? PrizmDay.normalizeParse(dateValue, this.dateFormat)
            : new PrizmDay(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        const parsedTime = PrizmTime.correctTime(timeValue ? PrizmTime.fromString(timeValue) : new PrizmTime(0, 0));
        this.nativeValue$$.next([parsedDate.toString(this.dateFormat), parsedTime.toString(this.timeMode)]);
        this.updateWithCorrectDateAndTime([parsedDate, parsedTime]);
    }
    filterTime(items, mode, search) {
        return items.filter(item => item.toString(mode).includes(search));
    }
    ngOnInit() {
        super.ngOnInit();
        this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
    }
    get focused() {
        return this.focusableElement?.focused$ ?? of(false);
    }
    get fillerLength() {
        return PRIZM_DATE_FILLER_LENGTH + PRIZM_DATE_TIME_SEPARATOR.length + this.timeMode.length;
    }
    get textMaskOptions() {
        return this.calculateMask(this.dateFormat, this.dateSeparator);
    }
    get timeMaskOptions() {
        return this.calculateTimeMask(this.timeMode);
    }
    get stringValue() {
        return this.value?.toString() ?? '';
    }
    computedDateValue(date = this.value?.[0]) {
        if (!date) {
            return this.nativeValue$$.value[0] || ''; //this.focusableElement?.values[0] || '';
        }
        return this.getDateString(date);
    }
    computedTimeValue(time = this.value?.[1]) {
        if (!time) {
            return this.nativeValue$$.value[1] || '';
        }
        return this.getTimeString(time, this.timeMode);
    }
    get calendarValue() {
        return this.value?.[0];
    }
    get calendarMinDay() {
        return Array.isArray(this.min) ? this.min[0] : this.min;
    }
    get calendarMaxDay() {
        return Array.isArray(this.max) ? this.max[0] : this.max;
    }
    get computedActiveYearMonth() {
        return this.month || this.value?.[0] || this.defaultActiveYearMonth;
    }
    onDateValueChange(value) {
        if (value === this.computedDateValue())
            return;
        this.nativeValue$$.next([value, this.nativeValue$$.value[1]]);
        if (!value || value.length < this.textMaskOptions.length || this.isValueMasked(value)) {
            if (!value)
                this.updateValue([null, this.value?.[1] ?? null]);
            return;
        }
        const parsedDate = PrizmDay.normalizeParse(value, this.dateFormat);
        this.updateWithCorrectDateAndTime([parsedDate, this.value?.[1] ?? null]);
        this.open = false;
    }
    updateWithCorrectDateAndTime(value) {
        if (!value)
            return;
        let [date, time] = value;
        // correct min max time
        if (date)
            date = date.dayLimit(this.min instanceof PrizmDay ? this.min : this.min && this.min[0], this.max instanceof PrizmDay ? this.max : this.max && this.max[0]);
        const timeMin = Array.isArray(this.min) && this.min[1] ? this.min[1] : null;
        const timeMax = Array.isArray(this.max) && this.max[1] ? this.max[1] : null;
        if (time && (timeMin || timeMax)) {
            time = time.timeLimit(timeMin, timeMax);
        }
        this.focusableElement?.updateNativeValues({
            idx: 0,
            value: date?.toString() ?? '',
        });
        // force update native value
        this.nativeValue$$.next([
            date?.toString() ?? this.nativeValue$$.value[0],
            time?.toString() ?? this.nativeValue$$.value[1],
        ]);
        this.updateValue([date, time]);
    }
    onTimeValueChange(value) {
        if (value === this.computedTimeValue())
            return;
        this.nativeValue$$.next([this.nativeValue$$.value[0], value]);
        if (!value || value.length < this.timeMaskOptions.length || this.isValueMasked(value)) {
            if (!value)
                this.updateValue([this.value?.[0] ?? null, null]);
            return;
        }
        const time = value;
        let parsedTime = time && time.length === this.timeMode.length ? PrizmTime.fromString(time) : null;
        if (parsedTime)
            parsedTime = PrizmTime.correctTime(parsedTime);
        // TODO later add correct time as in nearest time
        // const match = parsedTime && this.getMatch(time);
        // hide sidebar
        this.open = false;
        this.updateWithCorrectDateAndTime([
            this.value?.[0] ?? null,
            parsedTime,
            // TODO later add correct time as in nearest time
            // || (this.timeStrict ? this.findNearestTimeFromItems(parsedTime) : parsedTime),
        ]);
    }
    timeLimit(value) {
        if (!value)
            return null;
        let [, parsedTime] = value;
        if (parsedTime)
            parsedTime = parsedTime.timeLimit(Array.isArray(this.min) && this.min[1] instanceof PrizmTime && value?.[0]?.daySame(this.min[0])
                ? this.min[1]
                : null, Array.isArray(this.max) && this.max[1] instanceof PrizmTime && value?.[0]?.daySame(this.max[0])
                ? this.max[1]
                : null);
        return parsedTime;
    }
    onDayClick(day, time) {
        this.onDateValueChange(day.toString(this.dateFormat));
        this.open = false;
        this.changeDetectorRef.markForCheck();
    }
    getTemplate(openTimeTemplate, dropdownTimeTemplate) {
        if (!this.open && !this.openTimeTemplate)
            return null;
        if (this.openTimeTemplate)
            return openTimeTemplate;
        return dropdownTimeTemplate;
    }
    onMonthChange(month) {
        this.month = month;
    }
    onOpenChange(open) {
        this.open = open;
        this.changeDetectorRef.markForCheck();
    }
    writeValue(value) {
        super.writeValue(value);
        this.nativeValue$$.next(['', '']);
    }
    calculateMask(dateFormat, dateSeparator) {
        return `${prizmCreateDateNgxMask(dateFormat, dateSeparator)}`;
    }
    calculateTimeMask(timeMode) {
        return prizmCreateTimeNgxMask(timeMode);
    }
    getDateTimeString(date, time, timeMode = `HH:MM`) {
        const dateString = date instanceof PrizmDay ? date.toString(this.dateFormat, this.dateSeparator) : date;
        const timeString = time instanceof PrizmTime ? time.toString(timeMode) : time || ``;
        return `${dateString}${PRIZM_DATE_TIME_SEPARATOR}${timeString}`;
    }
    getTimeString(time, timeMode = `HH:MM`) {
        const timeString = time instanceof PrizmTime ? time.toString(timeMode) : time || ``;
        return `${timeString}`;
    }
    getDateString(date) {
        const dateString = date instanceof PrizmDay ? date.toString(this.dateFormat, this.dateSeparator) : date;
        return `${dateString}`;
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
        // if (!(this.value[1] && item.isSameTime(this.value[1])))
        //   this.onDayClick(this.value[0] ?? PrizmDay.currentLocal(), item);
        this.onTimeValueChange(item.toString(this.timeMode));
        this.openTimeTemplate = this.open = false;
        this.changeDetectorRef.markForCheck();
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
    openTimeDropdown(open) {
        this.openTimeTemplate = open;
        this.open = false;
        this.changeDetectorRef.markForCheck();
    }
    openDateDropdown(open) {
        this.open = open;
        this.openTimeTemplate = false;
        this.changeDetectorRef.markForCheck();
    }
    clear(ev) {
        ev.stopImmediatePropagation();
        super.clear(ev);
        this.nativeValue$$.next(['', '']);
        this.updateValue(null);
        this.markAsTouched();
        this.stateChanges.next();
    }
    referFocusToMain(referFocus = true) {
        if (!referFocus)
            return;
        // TODO create operator and rxjs functin to run sequence in event loop
        of(null)
            .pipe(delay(0), tap(() => {
            this.focusableElement?.selectionToStart();
        }))
            .subscribe();
    }
    isValueMasked(value) {
        return value.includes('_');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutDateTimeComponent, deps: [{ token: DOCUMENT, optional: true }, { token: PRIZM_DATE_FORMAT }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_TIME_TEXTS }, { token: i0.Injector }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_TIME_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputLayoutDateTimeComponent, isStandalone: true, selector: "prizm-input-layout-date-time", inputs: { timeItems: "timeItems", placeholder: "placeholder", extraButtonInjector: "extraButtonInjector", min: "min", max: "max", timeStrict: "timeStrict", disabledItemHandler: "disabledItemHandler", defaultActiveYearMonth: "defaultActiveYearMonth", timeMode: "timeMode" }, providers: [
            ...prizmI18nInitWithKeys({
                time: PRIZM_TIME_TEXTS,
                dateTexts: PRIZM_DATE_TEXTS,
            }),
            ...PRIZM_INPUT_DATE_TIME_PROVIDERS,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PrizmInputLayoutDateTimeComponent),
                multi: true,
            },
            PrizmDestroyService,
            { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateTimeComponent },
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: PrizmInputZoneDirective }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  #prizmDropdownHostComponent\n  [style.--prizm-dropdown-host-width]=\"'100%'\"\n  [canOpen]=\"!disabled\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  [content]=\"$any(getTemplate(dropdownTimeTemplate, dropdownDateTemplate))\"\n  [prizmDropdownHostWidth]=\"openTimeTemplate ? '100%' : 'auto'\"\n  [isOpen]=\"!disabled && (openTimeTemplate || open)\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event); $event && prizmDropdownHostComponent.reCalculatePositions()\"\n>\n  <ng-template prizmInputStatusText>\u041E\u0448\u0438\u0431\u043A\u0430! \u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442</ng-template>\n  <div\n    class=\"multiple-input-box\"\n    #focusableElementRef=\"prizmInputZone\"\n    [attr.data-placeholder]=\"placeholder\"\n    prizmInputZone\n  >\n    <input\n      class=\"input-main\"\n      #fe=\"prizmInputInZone\"\n      #maskDirectiveDate=\"mask\"\n      [class.show-placeholder]=\"\n        (empty | async) && (disabled || (focusableElementRef.focused$ | async) !== true)\n      \"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [mask]=\"textMaskOptions\"\n      [showMaskTyped]=\"focusableElementRef.focused$ | async\"\n      [dropSpecialCharacters]=\"false\"\n      [size]=\"textMaskOptions.length\"\n      [clearIfNotMatch]=\"false\"\n      [maxLength]=\"textMaskOptions.length + 1\"\n      [maxSize]=\"textMaskOptions.length\"\n      [ngModel]=\"computedDateValue()\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      (click)=\"referFocusToMain(!computedDateValue())\"\n      (ngModelChange)=\"onDateValueChange($event)\"\n      (updateNativeValue)=\"maskDirectiveDate.writeValue($event)\"\n      style=\"padding: 0\"\n      prizmInput\n      prizmInputInZone\n    />\n    <input\n      class=\"input-time\"\n      #element\n      #maskDirectiveTime=\"mask\"\n      [mask]=\"timeMaskOptions\"\n      [clearIfNotMatch]=\"false\"\n      [dropSpecialCharacters]=\"false\"\n      [showMaskTyped]=\"focusableElementRef.focused$ | async\"\n      [disabled]=\"disabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"computedTimeValue()\"\n      [size]=\"timeMaskOptions.length\"\n      [maxLength]=\"timeMaskOptions.length + 1\"\n      [maxSize]=\"timeMaskOptions.length\"\n      (ngModelChange)=\"onTimeValueChange($event)\"\n      (updateNativeValue)=\"maskDirectiveTime.writeValue($event)\"\n      style=\"padding: 0\"\n      prizmInput\n      prizmInputInZone\n    />\n    <!--    TODO add later correct fix for update native value when ng does not know about change -->\n    <!--    [prizmInputNativeValue]='computedTimeValue()'-->\n    <!--    [needChange]='needChangeNativeValue'-->\n  </div>\n</prizm-dropdown-host>\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"openDateDropdown(!open)\"\n    prizmInputIconButton=\"date-calendar-blank\"\n  ></button>\n  <button\n    [disabled]=\"disabled\"\n    [interactive]=\"true\"\n    (click)=\"openTimeDropdown(!openTimeTemplate)\"\n    prizmInputIconButton=\"date-clock\"\n  ></button>\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n<ng-template #dropdownDateTemplate>\n  <prizm-calendar\n    [min]=\"calendarMinDay\"\n    [max]=\"calendarMaxDay\"\n    [disabledItemHandler]=\"disabledItemHandler\"\n    [month]=\"computedActiveYearMonth\"\n    [value]=\"calendarValue\"\n    (prizmAfterViewInit)=\"markAsTouched()\"\n    (dayClick)=\"onDayClick($event)\"\n    (monthChange)=\"onMonthChange($event)\"\n    prizmPreventDefault=\"mousedown\"\n    automation-id=\"prizm-input-date-time__calendar\"\n  ></prizm-calendar>\n</ng-template>\n\n<ng-template #dropdownTimeTemplate>\n  <prizm-data-list\n    class=\"block\"\n    *ngIf=\"timeItems.length\"\n    [style.--prizm-data-list-border]=\"0\"\n    (prizmAfterViewInit)=\"markAsTouched(); prizmDropdownHostComponent.reCalculatePositions()\"\n    (prizmOnDestroy)=\"openTimeTemplate = false\"\n    prizmLifecycle\n  >\n    <ng-container>\n      <prizm-listing-item\n        *ngFor=\"let item of timeItems; let idx = index\"\n        [selected]=\"value?.[1] && item.isSameTime($any(value?.[1]))\"\n        (click)=\"$event.stopPropagation(); onTimeMenuClick(item, $event)\"\n      >\n        {{ item }}\n      </prizm-listing-item>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n", styles: [":host{display:block}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.block{padding:8px 0}input{width:calc(var(--prizm-input-in-zone-max-size) * 1cm)}\n", ":host{display:block}:host::placeholder{color:var(--prizm-v3-text-icon-disable)}.multiple-input-box{display:flex;gap:2px;padding:22px 8px 4px 0}.multiple-input-box input{width:calc(var(--prizm-input-in-zone-max-size) * .9ch)}.multiple-input-box .input-main.show-placeholder{width:100%}.multiple-input-box .input-main.show-placeholder~input,.multiple-input-box .input-main.show-placeholder~.delimiter{display:none}:host-context(.prizm-input-form-outer) .multiple-input-box{padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"l\"]) .multiple-input-box{padding:11px 0}:host-context(.prizm-input-form-outer[data-size=\"m\"]) .multiple-input-box{padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"s\"]) .multiple-input-box{font-size:12px;padding:4px 0}:host-context(.prizm-input-form-inner) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:4px}:host-context(.prizm-input-form-inner) :host-context(.prizm-input-empty-label) .multiple-input-box :host::placeholder{opacity:1}:host-context(.prizm-input-form-inner) .multiple-input-box{padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner) .multiple-input-box :host::placeholder{opacity:0}:host-context(.prizm-input-form-inner) .multiple-input-box :host:focus::placeholder{opacity:1;transition:opacity .2s ease 0s}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"l\"]) .multiple-input-box{padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]) .multiple-input-box{padding:16px 8px 2px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:2px}.placeholder-input-search.hidden{position:absolute;top:-10000px;left:-10000px;opacity:0}.placeholder-input-search:not(.hidden)~input,.placeholder-input-search:not(.hidden)~.delimiter{display:none}.delimiter{line-height:16px;height:16px;margin:0 .25ch}\n"], dependencies: [{ kind: "component", type: PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i3.PrizmInputStatusTextDirective, selector: "[prizmInputStatusText]", inputs: ["enable", "status"] }, { kind: "directive", type: i4.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: i5.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: PrizmMaskModule }, { kind: "directive", type: i7.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "leadZero", "triggerOnMaskChange", "apm"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "component", type: PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "ngmodule", type: PrizmInputZoneModule }, { kind: "directive", type: i8.PrizmInputZoneDirective, selector: "[prizmInputZone]", outputs: ["focused$", "blur$"], exportAs: ["prizmInputZone"] }, { kind: "directive", type: i9.PrizmInputInZoneDirective, selector: "input[prizmInputInZone]", inputs: ["idx", "maxSize"], outputs: ["updateNativeValue", "focused$", "blured$"], exportAs: ["prizmInputInZone"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i10.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmPreventDefaultModule }, { kind: "directive", type: i11.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "component", type: PrizmCalendarComponent, selector: "prizm-calendar", inputs: ["month", "value", "disabledItemHandler", "min", "daysWithStatus", "max", "minViewedMonth", "maxViewedMonth", "hoveredItem", "showAdjacent", "markerHandler"], outputs: ["dayClick", "monthChange", "hoveredItemChange"] }, { kind: "ngmodule", type: PrizmValueAccessorModule }, { kind: "ngmodule", type: PrizmInputNativeValueModule }, { kind: "component", type: PrizmListingItemComponent, selector: "prizm-listing-item", inputs: ["disabled", "selected"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmInputLayoutDateTimeComponent.prototype, "timeItems", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateTimeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputLayoutDateTimeComponent.prototype, "extraButtonInjector", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateTimeComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateTimeComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateTimeComponent.prototype, "timeStrict", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputLayoutDateTimeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateTimeComponent.prototype, "defaultActiveYearMonth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputLayoutDateTimeComponent.prototype, "timeMode", void 0);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, String]),
    __metadata("design:returntype", Array)
], PrizmInputLayoutDateTimeComponent.prototype, "filterTime", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], PrizmInputLayoutDateTimeComponent.prototype, "calculateMask", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], PrizmInputLayoutDateTimeComponent.prototype, "calculateTimeMask", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", String)
], PrizmInputLayoutDateTimeComponent.prototype, "getDateTimeString", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", String)
], PrizmInputLayoutDateTimeComponent.prototype, "getTimeString", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], PrizmInputLayoutDateTimeComponent.prototype, "getDateString", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutDateTimeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-layout-date-time`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ...prizmI18nInitWithKeys({
                            time: PRIZM_TIME_TEXTS,
                            dateTexts: PRIZM_DATE_TEXTS,
                        }),
                        ...PRIZM_INPUT_DATE_TIME_PROVIDERS,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PrizmInputLayoutDateTimeComponent),
                            multi: true,
                        },
                        PrizmDestroyService,
                        { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateTimeComponent },
                    ], standalone: true, imports: [
                        PrizmInputLayoutDateTimeComponent,
                        PrizmDropdownHostComponent,
                        PrizmInputTextModule,
                        NgIf,
                        NgFor,
                        ReactiveFormsModule,
                        PrizmMaskModule,
                        PrizmDataListComponent,
                        PolymorphOutletDirective,
                        PrizmIconComponent,
                        PrizmInputZoneModule,
                        FormsModule,
                        PrizmLifecycleModule,
                        PrizmPreventDefaultModule,
                        PrizmCalendarComponent,
                        PrizmLinkComponent,
                        PrizmDropdownHostComponent,
                        PrizmValueAccessorModule,
                        PrizmInputNativeValueModule,
                        PrizmListingItemComponent,
                    ], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  #prizmDropdownHostComponent\n  [style.--prizm-dropdown-host-width]=\"'100%'\"\n  [canOpen]=\"!disabled\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  [content]=\"$any(getTemplate(dropdownTimeTemplate, dropdownDateTemplate))\"\n  [prizmDropdownHostWidth]=\"openTimeTemplate ? '100%' : 'auto'\"\n  [isOpen]=\"!disabled && (openTimeTemplate || open)\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event); $event && prizmDropdownHostComponent.reCalculatePositions()\"\n>\n  <ng-template prizmInputStatusText>\u041E\u0448\u0438\u0431\u043A\u0430! \u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442</ng-template>\n  <div\n    class=\"multiple-input-box\"\n    #focusableElementRef=\"prizmInputZone\"\n    [attr.data-placeholder]=\"placeholder\"\n    prizmInputZone\n  >\n    <input\n      class=\"input-main\"\n      #fe=\"prizmInputInZone\"\n      #maskDirectiveDate=\"mask\"\n      [class.show-placeholder]=\"\n        (empty | async) && (disabled || (focusableElementRef.focused$ | async) !== true)\n      \"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [mask]=\"textMaskOptions\"\n      [showMaskTyped]=\"focusableElementRef.focused$ | async\"\n      [dropSpecialCharacters]=\"false\"\n      [size]=\"textMaskOptions.length\"\n      [clearIfNotMatch]=\"false\"\n      [maxLength]=\"textMaskOptions.length + 1\"\n      [maxSize]=\"textMaskOptions.length\"\n      [ngModel]=\"computedDateValue()\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      (click)=\"referFocusToMain(!computedDateValue())\"\n      (ngModelChange)=\"onDateValueChange($event)\"\n      (updateNativeValue)=\"maskDirectiveDate.writeValue($event)\"\n      style=\"padding: 0\"\n      prizmInput\n      prizmInputInZone\n    />\n    <input\n      class=\"input-time\"\n      #element\n      #maskDirectiveTime=\"mask\"\n      [mask]=\"timeMaskOptions\"\n      [clearIfNotMatch]=\"false\"\n      [dropSpecialCharacters]=\"false\"\n      [showMaskTyped]=\"focusableElementRef.focused$ | async\"\n      [disabled]=\"disabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"computedTimeValue()\"\n      [size]=\"timeMaskOptions.length\"\n      [maxLength]=\"timeMaskOptions.length + 1\"\n      [maxSize]=\"timeMaskOptions.length\"\n      (ngModelChange)=\"onTimeValueChange($event)\"\n      (updateNativeValue)=\"maskDirectiveTime.writeValue($event)\"\n      style=\"padding: 0\"\n      prizmInput\n      prizmInputInZone\n    />\n    <!--    TODO add later correct fix for update native value when ng does not know about change -->\n    <!--    [prizmInputNativeValue]='computedTimeValue()'-->\n    <!--    [needChange]='needChangeNativeValue'-->\n  </div>\n</prizm-dropdown-host>\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"openDateDropdown(!open)\"\n    prizmInputIconButton=\"date-calendar-blank\"\n  ></button>\n  <button\n    [disabled]=\"disabled\"\n    [interactive]=\"true\"\n    (click)=\"openTimeDropdown(!openTimeTemplate)\"\n    prizmInputIconButton=\"date-clock\"\n  ></button>\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n<ng-template #dropdownDateTemplate>\n  <prizm-calendar\n    [min]=\"calendarMinDay\"\n    [max]=\"calendarMaxDay\"\n    [disabledItemHandler]=\"disabledItemHandler\"\n    [month]=\"computedActiveYearMonth\"\n    [value]=\"calendarValue\"\n    (prizmAfterViewInit)=\"markAsTouched()\"\n    (dayClick)=\"onDayClick($event)\"\n    (monthChange)=\"onMonthChange($event)\"\n    prizmPreventDefault=\"mousedown\"\n    automation-id=\"prizm-input-date-time__calendar\"\n  ></prizm-calendar>\n</ng-template>\n\n<ng-template #dropdownTimeTemplate>\n  <prizm-data-list\n    class=\"block\"\n    *ngIf=\"timeItems.length\"\n    [style.--prizm-data-list-border]=\"0\"\n    (prizmAfterViewInit)=\"markAsTouched(); prizmDropdownHostComponent.reCalculatePositions()\"\n    (prizmOnDestroy)=\"openTimeTemplate = false\"\n    prizmLifecycle\n  >\n    <ng-container>\n      <prizm-listing-item\n        *ngFor=\"let item of timeItems; let idx = index\"\n        [selected]=\"value?.[1] && item.isSameTime($any(value?.[1]))\"\n        (click)=\"$event.stopPropagation(); onTimeMenuClick(item, $event)\"\n      >\n        {{ item }}\n      </prizm-listing-item>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n", styles: [":host{display:block}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.block{padding:8px 0}input{width:calc(var(--prizm-input-in-zone-max-size) * 1cm)}\n", ":host{display:block}:host::placeholder{color:var(--prizm-v3-text-icon-disable)}.multiple-input-box{display:flex;gap:2px;padding:22px 8px 4px 0}.multiple-input-box input{width:calc(var(--prizm-input-in-zone-max-size) * .9ch)}.multiple-input-box .input-main.show-placeholder{width:100%}.multiple-input-box .input-main.show-placeholder~input,.multiple-input-box .input-main.show-placeholder~.delimiter{display:none}:host-context(.prizm-input-form-outer) .multiple-input-box{padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"l\"]) .multiple-input-box{padding:11px 0}:host-context(.prizm-input-form-outer[data-size=\"m\"]) .multiple-input-box{padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"s\"]) .multiple-input-box{font-size:12px;padding:4px 0}:host-context(.prizm-input-form-inner) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:4px}:host-context(.prizm-input-form-inner) :host-context(.prizm-input-empty-label) .multiple-input-box :host::placeholder{opacity:1}:host-context(.prizm-input-form-inner) .multiple-input-box{padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner) .multiple-input-box :host::placeholder{opacity:0}:host-context(.prizm-input-form-inner) .multiple-input-box :host:focus::placeholder{opacity:1;transition:opacity .2s ease 0s}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"l\"]) .multiple-input-box{padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]) .multiple-input-box{padding:16px 8px 2px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:2px}.placeholder-input-search.hidden{position:absolute;top:-10000px;left:-10000px;opacity:0}.placeholder-input-search:not(.hidden)~input,.placeholder-input-search:not(.hidden)~.delimiter{display:none}.delimiter{line-height:16px;height:16px;margin:0 .25ch}\n"] }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_FORMAT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_SEPARATOR]
                }] }, { type: i12.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_TIME_TEXTS]
                }] }, { type: i0.Injector }, { type: i12.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_TEXTS]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_DATE_TIME_VALUE_TRANSFORMER]
                }] }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: PrizmInputZoneDirective }]
            }], timeItems: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], extraButtonInjector: [{
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
            }], filterTime: [], calculateMask: [], calculateTimeMask: [], getDateTimeString: [], getTimeString: [], getDateString: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LWRhdGUtdGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtdGltZS9pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS10aW1lL2lucHV0LWxheW91dC1kYXRlLXRpbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxRQUFRLEVBRVIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFF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MkJBQUMsZ0JBQWdCOzswQkFHdkIsTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUV2QixRQUFROzswQkFDUixNQUFNOzJCQUFDLGlDQUFpQzs0Q0FuRWxCLGdCQUFnQjtzQkFEeEMsU0FBUzt1QkFBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTtnQkFLbkUsU0FBUztzQkFGUixLQUFLO2dCQU1OLFdBQVc7c0JBRlYsS0FBSztnQkFNTixtQkFBbUI7c0JBRmxCLEtBQUs7Z0JBTU4sR0FBRztzQkFGRixLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFNTixVQUFVO3NCQUZULEtBQUs7Z0JBTU4sbUJBQW1CO3NCQUZsQixLQUFLO2dCQU1OLHNCQUFzQjtzQkFGckIsS0FBSztnQkFNTixRQUFRO3NCQUZQLEtBQUs7Z0JBeUVFLFVBQVUsTUFvTVYsYUFBYSxNQUtiLGlCQUFpQixNQUtqQixpQkFBaUIsTUFXakIsYUFBYSxNQU9iLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIE5HX1ZBTFVFX0FDQ0VTU09SLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiwgdGFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX0ZJTExFUl9MRU5HVEggfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF0ZS1maWxsZXJzJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfRk9STUFUIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RhdGUtZm9ybWF0JztcbmltcG9ydCB7IFBSSVpNX0RBVEVfU0VQQVJBVE9SIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RhdGUtc2VwYXJhdG9yJztcbmltcG9ydCB7IFByaXptRGF5IH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheSc7XG5pbXBvcnQgeyBQUklaTV9GSVJTVF9EQVksIFBSSVpNX0xBU1RfREFZIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheXMuY29uc3QnO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQcml6bVRpbWUgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvdGltZSc7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1RJTUVfU0VQQVJBVE9SIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2RhdGUtdGltZS1zZXBhcmF0b3InO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCwgcHJpem1QdXJlIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9USU1FX1ZBTFVFX1RSQU5TRk9STUVSIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2RhdGUtaW5wdXRzLXZhbHVlLXRyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1RFWFRTLCBQUklaTV9USU1FX1RFWFRTIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2kxOG4nO1xuaW1wb3J0IHsgUHJpem1Db250ZXh0V2l0aEltcGxpY2l0IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvY29udGV4dC13aXRoLWltcGxpY2l0JztcbmltcG9ydCB7IFByaXptQ29udHJvbFZhbHVlVHJhbnNmb3JtZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9jb250cm9sLXZhbHVlLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IFByaXptRGF0ZU1vZGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRlLW1vZGUnO1xuaW1wb3J0IHsgUHJpem1Cb29sZWFuSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2hhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1UaW1lTW9kZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3RpbWUtbW9kZSc7XG5pbXBvcnQgeyBQUklaTV9JTlBVVF9EQVRFX1RJTUVfUFJPVklERVJTIH0gZnJvbSAnLi9pbnB1dC1kYXRlLXRpbWUucHJvdmlkZXJzJztcbmltcG9ydCB7IHByaXptQ3JlYXRlRGF0ZU5neE1hc2sgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9tYXNrL2NyZWF0ZS1kYXRlLW1hc2snO1xuaW1wb3J0IHsgcHJpem1DcmVhdGVUaW1lTmd4TWFzayB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL21hc2svY3JlYXRlLXRpbWUtbWFzayc7XG5pbXBvcnQgeyBwcml6bUNsYW1wIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9tYXRoL2NsYW1wJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfUklHSFRfQlVUVE9OUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWV4dHJhLWJ1dHRvbnMnO1xuaW1wb3J0IHsgUHJpem1EYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0ZS1idXR0b24nO1xuaW1wb3J0IHsgUFJJWk1fU1RSSUNUX01BVENIRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZmlsdGVyVHJ1dGh5LCBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENvbnRyb2wsIFByaXptSW5wdXROZ0NvbnRyb2wgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1JbnB1dFpvbmVEaXJlY3RpdmUsIFByaXptSW5wdXRab25lTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9pbnB1dC16b25lJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGVsYXksIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1MaWZlY3ljbGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2xpZmVjeWNsZSc7XG5pbXBvcnQgeyBQb2x5bW9ycGhPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL3BvbHltb3JwaCc7XG5pbXBvcnQge1xuICBQcml6bUlucHV0TmF0aXZlVmFsdWVNb2R1bGUsXG4gIFByaXptSW5wdXROYXRpdmVWYWx1ZU5lZWRDaGFuZ2UsXG59IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvbmF0aXZlLXZhbHVlJztcbmltcG9ydCB7IERPQ1VNRU5ULCBOZ0ZvciwgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBwcml6bUkxOG5Jbml0V2l0aEtleXMgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0L2Ryb3Bkb3duLWhvc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dC9pbnB1dC10ZXh0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bU1hc2tNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL21hc2svbWFzay5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1EYXRhTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2RhdGEtbGlzdC9kYXRhLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1QcmV2ZW50RGVmYXVsdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvcHJldmVudC1kZWZhdWx0L3ByZXZlbnQtZGVmYXVsdC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1DYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NhbGVuZGFyJztcbmltcG9ydCB7IFByaXptTGlua0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xpbmsnO1xuaW1wb3J0IHsgUHJpem1WYWx1ZUFjY2Vzc29yTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy92YWx1ZS1hY2Nlc3Nvci92YWx1ZS1hY2Nlc3Nvci5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1MaXN0aW5nSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xpc3RpbmctaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWlucHV0LWxheW91dC1kYXRlLXRpbWVgLFxuICB0ZW1wbGF0ZVVybDogYC4vaW5wdXQtbGF5b3V0LWRhdGUtdGltZS5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlVXJsczogW1xuICAgIGAuL2lucHV0LWxheW91dC1kYXRlLXRpbWUuY29tcG9uZW50Lmxlc3NgLFxuICAgIGAuLy4uL2lucHV0LWRhdGUvaW5wdXQtbGF5b3V0LWRhdGUtc2hhcmVkLmNvbXBvbmVudC5sZXNzYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByaXptSTE4bkluaXRXaXRoS2V5cyh7XG4gICAgICB0aW1lOiBQUklaTV9USU1FX1RFWFRTLFxuICAgICAgZGF0ZVRleHRzOiBQUklaTV9EQVRFX1RFWFRTLFxuICAgIH0pLFxuICAgIC4uLlBSSVpNX0lOUFVUX0RBVEVfVElNRV9QUk9WSURFUlMsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQcml6bUlucHV0TGF5b3V0RGF0ZVRpbWVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICAgIHsgcHJvdmlkZTogUHJpem1JbnB1dENvbnRyb2wsIHVzZUV4aXN0aW5nOiBQcml6bUlucHV0TGF5b3V0RGF0ZVRpbWVDb21wb25lbnQgfSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIFByaXptSW5wdXRMYXlvdXREYXRlVGltZUNvbXBvbmVudCxcbiAgICBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgICBOZ0lmLFxuICAgIE5nRm9yLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgUHJpem1NYXNrTW9kdWxlLFxuICAgIFByaXptRGF0YUxpc3RDb21wb25lbnQsXG4gICAgUG9seW1vcnBoT3V0bGV0RGlyZWN0aXZlLFxuICAgIFByaXptSWNvbkNvbXBvbmVudCxcbiAgICBQcml6bUlucHV0Wm9uZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBQcml6bUxpZmVjeWNsZU1vZHVsZSxcbiAgICBQcml6bVByZXZlbnREZWZhdWx0TW9kdWxlLFxuICAgIFByaXptQ2FsZW5kYXJDb21wb25lbnQsXG4gICAgUHJpem1MaW5rQ29tcG9uZW50LFxuICAgIFByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50LFxuICAgIFByaXptVmFsdWVBY2Nlc3Nvck1vZHVsZSxcbiAgICBQcml6bUlucHV0TmF0aXZlVmFsdWVNb2R1bGUsXG4gICAgUHJpem1MaXN0aW5nSXRlbUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dExheW91dERhdGVUaW1lQ29tcG9uZW50XG4gIGV4dGVuZHMgUHJpem1JbnB1dE5nQ29udHJvbDxbUHJpem1EYXkgfCBudWxsLCBQcml6bVRpbWUgfCBudWxsXSB8IG51bGw+XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdFxue1xuICByZWFkb25seSBuYXRpdmVFbGVtZW50VHlwZSA9ICdpbnB1dC1kYXRlLXRpbWUnO1xuICByZWFkb25seSBoYXNDbGVhckJ1dHRvbiA9IHRydWU7XG4gIHByaXZhdGUgbW9udGg6IFByaXptTW9udGggfCBudWxsID0gbnVsbDtcblxuICBvdmVycmlkZSBmYWxsYmFja1ZhbHVlOiBbUHJpem1EYXkgfCBudWxsLCBQcml6bVRpbWUgfCBudWxsXSA9IFtudWxsLCBudWxsXTtcblxuICBAVmlld0NoaWxkKCdmb2N1c2FibGVFbGVtZW50UmVmJywgeyByZWFkOiBQcml6bUlucHV0Wm9uZURpcmVjdGl2ZSB9KVxuICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZm9jdXNhYmxlRWxlbWVudD86IFByaXptSW5wdXRab25lRGlyZWN0aXZlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgdGltZUl0ZW1zOiByZWFkb25seSBQcml6bVRpbWVbXSA9IG5ldyBBcnJheSgyNCkuZmlsbChudWxsKS5tYXAoKF8sIGkpID0+IG5ldyBQcml6bVRpbWUoaSwgMCwgMCwgMCkpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcGxhY2Vob2xkZXIgPSAn0JLRi9Cx0LXRgNC40YLQtSDQtNCw0YLRgyDQuCDQstGA0LXQvNGPJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGV4dHJhQnV0dG9uSW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluOiBQcml6bURheSB8IFtQcml6bURheSwgUHJpem1UaW1lXSA9IFBSSVpNX0ZJUlNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heDogUHJpem1EYXkgfCBbUHJpem1EYXksIFByaXptVGltZV0gPSBQUklaTV9MQVNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHRpbWVTdHJpY3QgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRpc2FibGVkSXRlbUhhbmRsZXI6IFByaXptQm9vbGVhbkhhbmRsZXI8UHJpem1EYXk+ID0gUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkZWZhdWx0QWN0aXZlWWVhck1vbnRoID0gUHJpem1Nb250aC5jdXJyZW50TG9jYWwoKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHRpbWVNb2RlOiBQcml6bVRpbWVNb2RlID0gYEhIOk1NYDtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X2RhdGVfdGltZSc7XG5cbiAgcHVibGljIG9wZW5UaW1lVGVtcGxhdGUgPSBmYWxzZTtcblxuICByZWFkb25seSBuYXRpdmVWYWx1ZSQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxbc3RyaW5nLCBzdHJpbmddPihbJycsICcnXSk7XG5cbiAgb3BlbiA9IGZhbHNlO1xuXG4gIHJlYWRvbmx5IHR5cGUhOiBQcml6bUNvbnRleHRXaXRoSW1wbGljaXQ8dW5rbm93bj47XG5cbiAgb3ZlcnJpZGUgZ2V0IGVtcHR5KCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFt0aGlzLnZhbHVlJCwgdGhpcy5uYXRpdmVWYWx1ZSQkXSkucGlwZShcbiAgICAgIG1hcCgoW3ZhbHVlLCBuYXRpdmVWYWx1ZV0pID0+IHtcbiAgICAgICAgcmV0dXJuICghdmFsdWUgfHwgIXZhbHVlLmZpbHRlcj8uKEJvb2xlYW4pLmpvaW4oJycpKSAmJiAhbmF0aXZlVmFsdWUuZmluZChCb29sZWFuKTtcbiAgICAgIH0pXG4gICAgKSBhcyBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICB9XG5cbiAgcHVibGljIHJpZ2h0QnV0dG9ucyQhOiBCZWhhdmlvclN1YmplY3Q8UHJpem1EYXRlQnV0dG9uW10+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfRk9STUFUKSByZWFkb25seSBkYXRlRm9ybWF0OiBQcml6bURhdGVNb2RlLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9TRVBBUkFUT1IpIHJlYWRvbmx5IGRhdGVTZXBhcmF0b3I6IHN0cmluZyxcbiAgICBASW5qZWN0KFBSSVpNX1RJTUVfVEVYVFMpXG4gICAgcmVhZG9ubHkgdGltZVRleHRzJDogT2JzZXJ2YWJsZTxSZWNvcmQ8UHJpem1UaW1lTW9kZSwgc3RyaW5nPj4sXG4gICAgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9URVhUUylcbiAgICByZWFkb25seSBkYXRlVGV4dHMkOiBPYnNlcnZhYmxlPFJlY29yZDxQcml6bURhdGVNb2RlLCBzdHJpbmc+PixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUFJJWk1fREFURV9USU1FX1ZBTFVFX1RSQU5TRk9STUVSKVxuICAgIHZhbHVlVHJhbnNmb3JtZXI6IFByaXptQ29udHJvbFZhbHVlVHJhbnNmb3JtZXI8W1ByaXptRGF5IHwgbnVsbCwgUHJpem1UaW1lIHwgbnVsbF0gfCBudWxsPiB8IG51bGxcbiAgKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHZhbHVlVHJhbnNmb3JtZXIpO1xuICAgIHRoaXMuZXh0cmFCdXR0b25JbmplY3RvciA9IGluamVjdG9yO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNhYmxlRWxlbWVudD8uYmx1ciRcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICAgIGZpbHRlclRydXRoeSgpLFxuICAgICAgICB0YXAoKCkgPT4gdGhpcy5jb21wbGV0ZURhdGVJZkFyZU5vdFBlbmRpbmcoKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wbGV0ZURhdGVJZkFyZU5vdFBlbmRpbmcoKSB7XG4gICAgY29uc3QgW2RhdGVWYWx1ZSwgdGltZVZhbHVlXSA9IHRoaXMubmF0aXZlVmFsdWUkJC52YWx1ZTtcblxuICAgIGlmICghZGF0ZVZhbHVlICYmICF0aW1lVmFsdWUpIHJldHVybjtcblxuICAgIGlmIChkYXRlVmFsdWUgJiYgZGF0ZVZhbHVlLmxlbmd0aCAhPT0gdGhpcy50ZXh0TWFza09wdGlvbnMubGVuZ3RoKSByZXR1cm47XG4gICAgaWYgKHRpbWVWYWx1ZSAmJiB0aW1lVmFsdWUubGVuZ3RoICE9PSB0aGlzLnRpbWVNYXNrT3B0aW9ucy5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBkYXRlVmFsdWVcbiAgICAgID8gUHJpem1EYXkubm9ybWFsaXplUGFyc2UoZGF0ZVZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpXG4gICAgICA6IG5ldyBQcml6bURheShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIG5ldyBEYXRlKCkuZ2V0TW9udGgoKSwgbmV3IERhdGUoKS5nZXREYXRlKCkpO1xuXG4gICAgY29uc3QgcGFyc2VkVGltZSA9IFByaXptVGltZS5jb3JyZWN0VGltZShcbiAgICAgIHRpbWVWYWx1ZSA/IFByaXptVGltZS5mcm9tU3RyaW5nKHRpbWVWYWx1ZSkgOiBuZXcgUHJpem1UaW1lKDAsIDApXG4gICAgKTtcblxuICAgIHRoaXMubmF0aXZlVmFsdWUkJC5uZXh0KFtwYXJzZWREYXRlLnRvU3RyaW5nKHRoaXMuZGF0ZUZvcm1hdCksIHBhcnNlZFRpbWUudG9TdHJpbmcodGhpcy50aW1lTW9kZSldKTtcblxuICAgIHRoaXMudXBkYXRlV2l0aENvcnJlY3REYXRlQW5kVGltZShbcGFyc2VkRGF0ZSwgcGFyc2VkVGltZV0pO1xuICB9XG5cbiAgQHByaXptUHVyZVxuICBwcml2YXRlIGZpbHRlclRpbWUoaXRlbXM6IHJlYWRvbmx5IFByaXptVGltZVtdLCBtb2RlOiBQcml6bVRpbWVNb2RlLCBzZWFyY2g6IHN0cmluZyk6IHJlYWRvbmx5IFByaXptVGltZVtdIHtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b1N0cmluZyhtb2RlKS5pbmNsdWRlcyhzZWFyY2gpKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMucmlnaHRCdXR0b25zJCA9IHRoaXMuZXh0cmFCdXR0b25JbmplY3Rvci5nZXQoUFJJWk1fREFURV9SSUdIVF9CVVRUT05TKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5mb2N1c2VkJCA/PyBvZihmYWxzZSk7XG4gIH1cblxuICBnZXQgZmlsbGVyTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIFBSSVpNX0RBVEVfRklMTEVSX0xFTkdUSCArIFBSSVpNX0RBVEVfVElNRV9TRVBBUkFUT1IubGVuZ3RoICsgdGhpcy50aW1lTW9kZS5sZW5ndGg7XG4gIH1cblxuICBnZXQgdGV4dE1hc2tPcHRpb25zKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlTWFzayh0aGlzLmRhdGVGb3JtYXQsIHRoaXMuZGF0ZVNlcGFyYXRvcik7XG4gIH1cblxuICBnZXQgdGltZU1hc2tPcHRpb25zKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlVGltZU1hc2sodGhpcy50aW1lTW9kZSk7XG4gIH1cblxuICBnZXQgc3RyaW5nVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZT8udG9TdHJpbmcoKSA/PyAnJztcbiAgfVxuXG4gIHB1YmxpYyBjb21wdXRlZERhdGVWYWx1ZShkYXRlID0gdGhpcy52YWx1ZT8uWzBdKTogc3RyaW5nIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZVZhbHVlJCQudmFsdWVbMF0gfHwgJyc7IC8vdGhpcy5mb2N1c2FibGVFbGVtZW50Py52YWx1ZXNbMF0gfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZVN0cmluZyhkYXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wdXRlZFRpbWVWYWx1ZSh0aW1lID0gdGhpcy52YWx1ZT8uWzFdKTogc3RyaW5nIHtcbiAgICBpZiAoIXRpbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdGl2ZVZhbHVlJCQudmFsdWVbMV0gfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0VGltZVN0cmluZyh0aW1lLCB0aGlzLnRpbWVNb2RlKTtcbiAgfVxuXG4gIHB1YmxpYyByZWFkb25seSBuZWVkQ2hhbmdlTmF0aXZlVmFsdWU6IFByaXptSW5wdXROYXRpdmVWYWx1ZU5lZWRDaGFuZ2U8c3RyaW5nPiA9IChcbiAgICBjdXJyZW50VmFsdWU6IHN0cmluZyxcbiAgICBuYXRpdmVWYWx1ZTogc3RyaW5nLFxuICAgIGVsOiBIVE1MSW5wdXRFbGVtZW50XG4gICkgPT4ge1xuICAgIGlmICh0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGVsKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgbmV3TmF0aXZlVmFsdWUgPSBuYXRpdmVWYWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuICAgIGNvbnN0IGN1cnJlbnROZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xuXG4gICAgaWYgKG5ld05hdGl2ZVZhbHVlLmxlbmd0aCAhPT0gNCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChjdXJyZW50TmV3VmFsdWUubGVuZ3RoICE9PSA0KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG5ld05hdGl2ZVZhbHVlID09PSBjdXJyZW50TmV3VmFsdWUpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBnZXQgY2FsZW5kYXJWYWx1ZSgpOiBQcml6bURheSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy5bMF0gYXMgYW55O1xuICB9XG5cbiAgZ2V0IGNhbGVuZGFyTWluRGF5KCk6IFByaXptRGF5IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLm1pbikgPyB0aGlzLm1pblswXSA6IHRoaXMubWluO1xuICB9XG5cbiAgZ2V0IGNhbGVuZGFyTWF4RGF5KCk6IFByaXptRGF5IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLm1heCkgPyB0aGlzLm1heFswXSA6IHRoaXMubWF4O1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkQWN0aXZlWWVhck1vbnRoKCk6IFByaXptTW9udGgge1xuICAgIHJldHVybiB0aGlzLm1vbnRoIHx8IHRoaXMudmFsdWU/LlswXSB8fCB0aGlzLmRlZmF1bHRBY3RpdmVZZWFyTW9udGg7XG4gIH1cblxuICBwdWJsaWMgb25EYXRlVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5jb21wdXRlZERhdGVWYWx1ZSgpKSByZXR1cm47XG5cbiAgICB0aGlzLm5hdGl2ZVZhbHVlJCQubmV4dChbdmFsdWUsIHRoaXMubmF0aXZlVmFsdWUkJC52YWx1ZVsxXV0pO1xuXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggPCB0aGlzLnRleHRNYXNrT3B0aW9ucy5sZW5ndGggfHwgdGhpcy5pc1ZhbHVlTWFza2VkKHZhbHVlKSkge1xuICAgICAgaWYgKCF2YWx1ZSkgdGhpcy51cGRhdGVWYWx1ZShbbnVsbCwgdGhpcy52YWx1ZT8uWzFdID8/IG51bGxdKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IFByaXptRGF5Lm5vcm1hbGl6ZVBhcnNlKHZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpO1xuICAgIHRoaXMudXBkYXRlV2l0aENvcnJlY3REYXRlQW5kVGltZShbcGFyc2VkRGF0ZSwgdGhpcy52YWx1ZT8uWzFdID8/IG51bGxdKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlV2l0aENvcnJlY3REYXRlQW5kVGltZSh2YWx1ZTogW1ByaXptRGF5IHwgbnVsbCwgUHJpem1UaW1lIHwgbnVsbF0pOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgbGV0IFtkYXRlLCB0aW1lXSA9IHZhbHVlO1xuICAgIC8vIGNvcnJlY3QgbWluIG1heCB0aW1lXG4gICAgaWYgKGRhdGUpXG4gICAgICBkYXRlID0gZGF0ZS5kYXlMaW1pdChcbiAgICAgICAgdGhpcy5taW4gaW5zdGFuY2VvZiBQcml6bURheSA/IHRoaXMubWluIDogdGhpcy5taW4gJiYgdGhpcy5taW5bMF0sXG4gICAgICAgIHRoaXMubWF4IGluc3RhbmNlb2YgUHJpem1EYXkgPyB0aGlzLm1heCA6IHRoaXMubWF4ICYmIHRoaXMubWF4WzBdXG4gICAgICApO1xuXG4gICAgY29uc3QgdGltZU1pbiA9IEFycmF5LmlzQXJyYXkodGhpcy5taW4pICYmIHRoaXMubWluWzFdID8gdGhpcy5taW5bMV0gOiBudWxsO1xuICAgIGNvbnN0IHRpbWVNYXggPSBBcnJheS5pc0FycmF5KHRoaXMubWF4KSAmJiB0aGlzLm1heFsxXSA/IHRoaXMubWF4WzFdIDogbnVsbDtcbiAgICBpZiAodGltZSAmJiAodGltZU1pbiB8fCB0aW1lTWF4KSkge1xuICAgICAgdGltZSA9IHRpbWUudGltZUxpbWl0KHRpbWVNaW4sIHRpbWVNYXgpO1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNhYmxlRWxlbWVudD8udXBkYXRlTmF0aXZlVmFsdWVzKHtcbiAgICAgIGlkeDogMCxcbiAgICAgIHZhbHVlOiBkYXRlPy50b1N0cmluZygpID8/ICcnLFxuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgdXBkYXRlIG5hdGl2ZSB2YWx1ZVxuICAgIHRoaXMubmF0aXZlVmFsdWUkJC5uZXh0KFtcbiAgICAgIGRhdGU/LnRvU3RyaW5nKCkgPz8gdGhpcy5uYXRpdmVWYWx1ZSQkLnZhbHVlWzBdLFxuICAgICAgdGltZT8udG9TdHJpbmcoKSA/PyB0aGlzLm5hdGl2ZVZhbHVlJCQudmFsdWVbMV0sXG4gICAgXSk7XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKFtkYXRlLCB0aW1lXSk7XG4gIH1cblxuICBwdWJsaWMgb25UaW1lVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5jb21wdXRlZFRpbWVWYWx1ZSgpKSByZXR1cm47XG4gICAgdGhpcy5uYXRpdmVWYWx1ZSQkLm5leHQoW3RoaXMubmF0aXZlVmFsdWUkJC52YWx1ZVswXSwgdmFsdWVdKTtcblxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDwgdGhpcy50aW1lTWFza09wdGlvbnMubGVuZ3RoIHx8IHRoaXMuaXNWYWx1ZU1hc2tlZCh2YWx1ZSkpIHtcbiAgICAgIGlmICghdmFsdWUpIHRoaXMudXBkYXRlVmFsdWUoW3RoaXMudmFsdWU/LlswXSA/PyBudWxsLCBudWxsXSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lID0gdmFsdWU7XG5cbiAgICBsZXQgcGFyc2VkVGltZSA9IHRpbWUgJiYgdGltZS5sZW5ndGggPT09IHRoaXMudGltZU1vZGUubGVuZ3RoID8gUHJpem1UaW1lLmZyb21TdHJpbmcodGltZSkgOiBudWxsO1xuXG4gICAgaWYgKHBhcnNlZFRpbWUpIHBhcnNlZFRpbWUgPSBQcml6bVRpbWUuY29ycmVjdFRpbWUocGFyc2VkVGltZSk7XG5cbiAgICAvLyBUT0RPIGxhdGVyIGFkZCBjb3JyZWN0IHRpbWUgYXMgaW4gbmVhcmVzdCB0aW1lXG4gICAgLy8gY29uc3QgbWF0Y2ggPSBwYXJzZWRUaW1lICYmIHRoaXMuZ2V0TWF0Y2godGltZSk7XG5cbiAgICAvLyBoaWRlIHNpZGViYXJcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcblxuICAgIHRoaXMudXBkYXRlV2l0aENvcnJlY3REYXRlQW5kVGltZShbXG4gICAgICB0aGlzLnZhbHVlPy5bMF0gPz8gbnVsbCxcbiAgICAgIHBhcnNlZFRpbWUsXG4gICAgICAvLyBUT0RPIGxhdGVyIGFkZCBjb3JyZWN0IHRpbWUgYXMgaW4gbmVhcmVzdCB0aW1lXG4gICAgICAvLyB8fCAodGhpcy50aW1lU3RyaWN0ID8gdGhpcy5maW5kTmVhcmVzdFRpbWVGcm9tSXRlbXMocGFyc2VkVGltZSkgOiBwYXJzZWRUaW1lKSxcbiAgICBdKTtcbiAgfVxuXG4gIHB1YmxpYyB0aW1lTGltaXQodmFsdWU6IFtQcml6bURheSwgUHJpem1UaW1lXSB8IG51bGwpOiBQcml6bVRpbWUgfCBudWxsIHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gbnVsbDtcbiAgICBsZXQgWywgcGFyc2VkVGltZV0gPSB2YWx1ZTtcbiAgICBpZiAocGFyc2VkVGltZSlcbiAgICAgIHBhcnNlZFRpbWUgPSBwYXJzZWRUaW1lLnRpbWVMaW1pdChcbiAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLm1pbikgJiYgdGhpcy5taW5bMV0gaW5zdGFuY2VvZiBQcml6bVRpbWUgJiYgdmFsdWU/LlswXT8uZGF5U2FtZSh0aGlzLm1pblswXSlcbiAgICAgICAgICA/IHRoaXMubWluWzFdXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBBcnJheS5pc0FycmF5KHRoaXMubWF4KSAmJiB0aGlzLm1heFsxXSBpbnN0YW5jZW9mIFByaXptVGltZSAmJiB2YWx1ZT8uWzBdPy5kYXlTYW1lKHRoaXMubWF4WzBdKVxuICAgICAgICAgID8gdGhpcy5tYXhbMV1cbiAgICAgICAgICA6IG51bGxcbiAgICAgICk7XG5cbiAgICByZXR1cm4gcGFyc2VkVGltZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRheUNsaWNrKGRheTogUHJpem1EYXksIHRpbWU/OiBQcml6bVRpbWUpOiB2b2lkIHtcbiAgICB0aGlzLm9uRGF0ZVZhbHVlQ2hhbmdlKGRheS50b1N0cmluZyh0aGlzLmRhdGVGb3JtYXQpKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGdldFRlbXBsYXRlKFxuICAgIG9wZW5UaW1lVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHVua25vd24+LFxuICAgIGRyb3Bkb3duVGltZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx1bmtub3duPlxuICApOiBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbCB7XG4gICAgaWYgKCF0aGlzLm9wZW4gJiYgIXRoaXMub3BlblRpbWVUZW1wbGF0ZSkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHRoaXMub3BlblRpbWVUZW1wbGF0ZSkgcmV0dXJuIG9wZW5UaW1lVGVtcGxhdGU7XG4gICAgcmV0dXJuIGRyb3Bkb3duVGltZVRlbXBsYXRlO1xuICB9XG5cbiAgcHVibGljIG9uTW9udGhDaGFuZ2UobW9udGg6IFByaXptTW9udGgpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRoID0gbW9udGg7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgd3JpdGVWYWx1ZSh2YWx1ZTogW1ByaXptRGF5IHwgbnVsbCwgUHJpem1UaW1lIHwgbnVsbF0gfCBudWxsKTogdm9pZCB7XG4gICAgc3VwZXIud3JpdGVWYWx1ZSh2YWx1ZSBhcyBhbnkpO1xuICAgIHRoaXMubmF0aXZlVmFsdWUkJC5uZXh0KFsnJywgJyddKTtcbiAgfVxuXG4gIEBwcml6bVB1cmVcbiAgcHJpdmF0ZSBjYWxjdWxhdGVNYXNrKGRhdGVGb3JtYXQ6IFByaXptRGF0ZU1vZGUsIGRhdGVTZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3ByaXptQ3JlYXRlRGF0ZU5neE1hc2soZGF0ZUZvcm1hdCwgZGF0ZVNlcGFyYXRvcil9YDtcbiAgfVxuXG4gIEBwcml6bVB1cmVcbiAgcHJpdmF0ZSBjYWxjdWxhdGVUaW1lTWFzayh0aW1lTW9kZTogUHJpem1UaW1lTW9kZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByaXptQ3JlYXRlVGltZU5neE1hc2sodGltZU1vZGUpO1xuICB9XG5cbiAgQHByaXptUHVyZVxuICBwcml2YXRlIGdldERhdGVUaW1lU3RyaW5nKFxuICAgIGRhdGU6IFByaXptRGF5IHwgc3RyaW5nLFxuICAgIHRpbWU6IFByaXptVGltZSB8IHN0cmluZyB8IG51bGwsXG4gICAgdGltZU1vZGU6IFByaXptVGltZU1vZGUgPSBgSEg6TU1gXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUgaW5zdGFuY2VvZiBQcml6bURheSA/IGRhdGUudG9TdHJpbmcodGhpcy5kYXRlRm9ybWF0LCB0aGlzLmRhdGVTZXBhcmF0b3IpIDogZGF0ZTtcbiAgICBjb25zdCB0aW1lU3RyaW5nID0gdGltZSBpbnN0YW5jZW9mIFByaXptVGltZSA/IHRpbWUudG9TdHJpbmcodGltZU1vZGUpIDogdGltZSB8fCBgYDtcblxuICAgIHJldHVybiBgJHtkYXRlU3RyaW5nfSR7UFJJWk1fREFURV9USU1FX1NFUEFSQVRPUn0ke3RpbWVTdHJpbmd9YDtcbiAgfVxuICBAcHJpem1QdXJlXG4gIHByaXZhdGUgZ2V0VGltZVN0cmluZyh0aW1lOiBQcml6bVRpbWUgfCBzdHJpbmcgfCBudWxsLCB0aW1lTW9kZTogUHJpem1UaW1lTW9kZSA9IGBISDpNTWApOiBzdHJpbmcge1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSB0aW1lIGluc3RhbmNlb2YgUHJpem1UaW1lID8gdGltZS50b1N0cmluZyh0aW1lTW9kZSkgOiB0aW1lIHx8IGBgO1xuXG4gICAgcmV0dXJuIGAke3RpbWVTdHJpbmd9YDtcbiAgfVxuXG4gIEBwcml6bVB1cmVcbiAgcHJpdmF0ZSBnZXREYXRlU3RyaW5nKGRhdGU6IFByaXptRGF5IHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZSBpbnN0YW5jZW9mIFByaXptRGF5ID8gZGF0ZS50b1N0cmluZyh0aGlzLmRhdGVGb3JtYXQsIHRoaXMuZGF0ZVNlcGFyYXRvcikgOiBkYXRlO1xuICAgIHJldHVybiBgJHtkYXRlU3RyaW5nfWA7XG4gIH1cblxuICBwcml2YXRlIGZpbmROZWFyZXN0VGltZUZyb21JdGVtcyh2YWx1ZTogUHJpem1UaW1lKTogUHJpem1UaW1lIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudGltZUl0ZW1zLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+XG4gICAgICBNYXRoLmFicyhjdXJyZW50LnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKSAtIHZhbHVlLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKSkgPFxuICAgICAgTWF0aC5hYnMocHJldmlvdXMudG9BYnNvbHV0ZU1pbGxpc2Vjb25kcygpIC0gdmFsdWUudG9BYnNvbHV0ZU1pbGxpc2Vjb25kcygpKVxuICAgICAgICA/IGN1cnJlbnRcbiAgICAgICAgOiBwcmV2aW91c1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldE1hdGNoKHZhbHVlOiBzdHJpbmcpOiBQcml6bVRpbWUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnRpbWVJdGVtcy5maW5kKGl0ZW0gPT4gUFJJWk1fU1RSSUNUX01BVENIRVIoaXRlbSwgdmFsdWUpKTtcbiAgfVxuXG4gIHB1YmxpYyBvblRpbWVNZW51Q2xpY2soaXRlbTogUHJpem1UaW1lLCBldjogRXZlbnQpOiB2b2lkIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgLy8gaWYgKCEodGhpcy52YWx1ZVsxXSAmJiBpdGVtLmlzU2FtZVRpbWUodGhpcy52YWx1ZVsxXSkpKVxuICAgIC8vICAgdGhpcy5vbkRheUNsaWNrKHRoaXMudmFsdWVbMF0gPz8gUHJpem1EYXkuY3VycmVudExvY2FsKCksIGl0ZW0pO1xuXG4gICAgdGhpcy5vblRpbWVWYWx1ZUNoYW5nZShpdGVtLnRvU3RyaW5nKHRoaXMudGltZU1vZGUpKTtcblxuICAgIHRoaXMub3BlblRpbWVUZW1wbGF0ZSA9IHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHByaXptQ2xhbXBUaW1lKHRpbWU6IFByaXptVGltZSwgZGF5OiBQcml6bURheSk6IFByaXptVGltZSB7XG4gICAgY29uc3QgbXMgPSB0aW1lLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKTtcbiAgICBjb25zdCBtaW4gPVxuICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLm1pbikgJiYgZGF5LmRheVNhbWUodGhpcy5jYWxlbmRhck1pbkRheSlcbiAgICAgICAgPyB0aGlzLm1pblsxXS50b0Fic29sdXRlTWlsbGlzZWNvbmRzKClcbiAgICAgICAgOiAtSW5maW5pdHk7XG4gICAgY29uc3QgbWF4ID1cbiAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5tYXgpICYmIGRheS5kYXlTYW1lKHRoaXMuY2FsZW5kYXJNYXhEYXkpXG4gICAgICAgID8gdGhpcy5tYXhbMV0udG9BYnNvbHV0ZU1pbGxpc2Vjb25kcygpXG4gICAgICAgIDogSW5maW5pdHk7XG5cbiAgICByZXR1cm4gUHJpem1UaW1lLmZyb21BYnNvbHV0ZU1pbGxpc2Vjb25kcyhwcml6bUNsYW1wKG1zLCBtaW4sIG1heCkpO1xuICB9XG5cbiAgcHVibGljIG9wZW5UaW1lRHJvcGRvd24ob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlblRpbWVUZW1wbGF0ZSA9IG9wZW47XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRGF0ZURyb3Bkb3duKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIHRoaXMub3BlblRpbWVUZW1wbGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgY2xlYXIoZXY6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBzdXBlci5jbGVhcihldik7XG4gICAgdGhpcy5uYXRpdmVWYWx1ZSQkLm5leHQoWycnLCAnJ10pO1xuICAgIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIHJlZmVyRm9jdXNUb01haW4ocmVmZXJGb2N1cyA9IHRydWUpIHtcbiAgICBpZiAoIXJlZmVyRm9jdXMpIHJldHVybjtcbiAgICAvLyBUT0RPIGNyZWF0ZSBvcGVyYXRvciBhbmQgcnhqcyBmdW5jdGluIHRvIHJ1biBzZXF1ZW5jZSBpbiBldmVudCBsb29wXG4gICAgb2YobnVsbClcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWxheSgwKSxcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/LnNlbGVjdGlvblRvU3RhcnQoKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNWYWx1ZU1hc2tlZCh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlLmluY2x1ZGVzKCdfJyk7XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gIGNsYXNzPVwiei1ob3N0ZWRcIlxuICAjcHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnRcbiAgW3N0eWxlLi0tcHJpem0tZHJvcGRvd24taG9zdC13aWR0aF09XCInMTAwJSdcIlxuICBbY2FuT3Blbl09XCIhZGlzYWJsZWRcIlxuICBbcHJpem1Ecm9wZG93bkhvc3RdPVwibGF5b3V0Q29tcG9uZW50Py5lbD8ubmF0aXZlRWxlbWVudFwiXG4gIFtjb250ZW50XT1cIiRhbnkoZ2V0VGVtcGxhdGUoZHJvcGRvd25UaW1lVGVtcGxhdGUsIGRyb3Bkb3duRGF0ZVRlbXBsYXRlKSlcIlxuICBbcHJpem1Ecm9wZG93bkhvc3RXaWR0aF09XCJvcGVuVGltZVRlbXBsYXRlID8gJzEwMCUnIDogJ2F1dG8nXCJcbiAgW2lzT3Blbl09XCIhZGlzYWJsZWQgJiYgKG9wZW5UaW1lVGVtcGxhdGUgfHwgb3BlbilcIlxuICBbY2xvc2VCeUVzY109XCJ0cnVlXCJcbiAgKGlzT3BlbkNoYW5nZSk9XCJvbk9wZW5DaGFuZ2UoJGV2ZW50KTsgJGV2ZW50ICYmIHByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50LnJlQ2FsY3VsYXRlUG9zaXRpb25zKClcIlxuPlxuICA8bmctdGVtcGxhdGUgcHJpem1JbnB1dFN0YXR1c1RleHQ+0J7RiNC40LHQutCwISDQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0YTQvtGA0LzQsNGCPC9uZy10ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwibXVsdGlwbGUtaW5wdXQtYm94XCJcbiAgICAjZm9jdXNhYmxlRWxlbWVudFJlZj1cInByaXptSW5wdXRab25lXCJcbiAgICBbYXR0ci5kYXRhLXBsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICBwcml6bUlucHV0Wm9uZVxuICA+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImlucHV0LW1haW5cIlxuICAgICAgI2ZlPVwicHJpem1JbnB1dEluWm9uZVwiXG4gICAgICAjbWFza0RpcmVjdGl2ZURhdGU9XCJtYXNrXCJcbiAgICAgIFtjbGFzcy5zaG93LXBsYWNlaG9sZGVyXT1cIlxuICAgICAgICAoZW1wdHkgfCBhc3luYykgJiYgKGRpc2FibGVkIHx8IChmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzZWQkIHwgYXN5bmMpICE9PSB0cnVlKVxuICAgICAgXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW21hc2tdPVwidGV4dE1hc2tPcHRpb25zXCJcbiAgICAgIFtzaG93TWFza1R5cGVkXT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXNlZCQgfCBhc3luY1wiXG4gICAgICBbZHJvcFNwZWNpYWxDaGFyYWN0ZXJzXT1cImZhbHNlXCJcbiAgICAgIFtzaXplXT1cInRleHRNYXNrT3B0aW9ucy5sZW5ndGhcIlxuICAgICAgW2NsZWFySWZOb3RNYXRjaF09XCJmYWxzZVwiXG4gICAgICBbbWF4TGVuZ3RoXT1cInRleHRNYXNrT3B0aW9ucy5sZW5ndGggKyAxXCJcbiAgICAgIFttYXhTaXplXT1cInRleHRNYXNrT3B0aW9ucy5sZW5ndGhcIlxuICAgICAgW25nTW9kZWxdPVwiY29tcHV0ZWREYXRlVmFsdWUoKVwiXG4gICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgKGNsaWNrKT1cInJlZmVyRm9jdXNUb01haW4oIWNvbXB1dGVkRGF0ZVZhbHVlKCkpXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uRGF0ZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKHVwZGF0ZU5hdGl2ZVZhbHVlKT1cIm1hc2tEaXJlY3RpdmVEYXRlLndyaXRlVmFsdWUoJGV2ZW50KVwiXG4gICAgICBzdHlsZT1cInBhZGRpbmc6IDBcIlxuICAgICAgcHJpem1JbnB1dFxuICAgICAgcHJpem1JbnB1dEluWm9uZVxuICAgIC8+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImlucHV0LXRpbWVcIlxuICAgICAgI2VsZW1lbnRcbiAgICAgICNtYXNrRGlyZWN0aXZlVGltZT1cIm1hc2tcIlxuICAgICAgW21hc2tdPVwidGltZU1hc2tPcHRpb25zXCJcbiAgICAgIFtjbGVhcklmTm90TWF0Y2hdPVwiZmFsc2VcIlxuICAgICAgW2Ryb3BTcGVjaWFsQ2hhcmFjdGVyc109XCJmYWxzZVwiXG4gICAgICBbc2hvd01hc2tUeXBlZF09XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzZWQkIHwgYXN5bmNcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICBbbmdNb2RlbF09XCJjb21wdXRlZFRpbWVWYWx1ZSgpXCJcbiAgICAgIFtzaXplXT1cInRpbWVNYXNrT3B0aW9ucy5sZW5ndGhcIlxuICAgICAgW21heExlbmd0aF09XCJ0aW1lTWFza09wdGlvbnMubGVuZ3RoICsgMVwiXG4gICAgICBbbWF4U2l6ZV09XCJ0aW1lTWFza09wdGlvbnMubGVuZ3RoXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uVGltZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgKHVwZGF0ZU5hdGl2ZVZhbHVlKT1cIm1hc2tEaXJlY3RpdmVUaW1lLndyaXRlVmFsdWUoJGV2ZW50KVwiXG4gICAgICBzdHlsZT1cInBhZGRpbmc6IDBcIlxuICAgICAgcHJpem1JbnB1dFxuICAgICAgcHJpem1JbnB1dEluWm9uZVxuICAgIC8+XG4gICAgPCEtLSAgICBUT0RPIGFkZCBsYXRlciBjb3JyZWN0IGZpeCBmb3IgdXBkYXRlIG5hdGl2ZSB2YWx1ZSB3aGVuIG5nIGRvZXMgbm90IGtub3cgYWJvdXQgY2hhbmdlIC0tPlxuICAgIDwhLS0gICAgW3ByaXptSW5wdXROYXRpdmVWYWx1ZV09J2NvbXB1dGVkVGltZVZhbHVlKCknLS0+XG4gICAgPCEtLSAgICBbbmVlZENoYW5nZV09J25lZWRDaGFuZ2VOYXRpdmVWYWx1ZSctLT5cbiAgPC9kaXY+XG48L3ByaXptLWRyb3Bkb3duLWhvc3Q+XG48bmctY29udGFpbmVyICpwcml6bUlucHV0TGF5b3V0UmlnaHQ+XG4gIDxidXR0b25cbiAgICBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAoY2xpY2spPVwib3BlbkRhdGVEcm9wZG93bighb3BlbilcIlxuICAgIHByaXptSW5wdXRJY29uQnV0dG9uPVwiZGF0ZS1jYWxlbmRhci1ibGFua1wiXG4gID48L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW2ludGVyYWN0aXZlXT1cInRydWVcIlxuICAgIChjbGljayk9XCJvcGVuVGltZURyb3Bkb3duKCFvcGVuVGltZVRlbXBsYXRlKVwiXG4gICAgcHJpem1JbnB1dEljb25CdXR0b249XCJkYXRlLWNsb2NrXCJcbiAgPjwvYnV0dG9uPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidXR0b24gb2YgcmlnaHRCdXR0b25zJCB8IGFzeW5jXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uLnRlbXBsYXRlXCI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG48bmctdGVtcGxhdGUgI2Ryb3Bkb3duRGF0ZVRlbXBsYXRlPlxuICA8cHJpem0tY2FsZW5kYXJcbiAgICBbbWluXT1cImNhbGVuZGFyTWluRGF5XCJcbiAgICBbbWF4XT1cImNhbGVuZGFyTWF4RGF5XCJcbiAgICBbZGlzYWJsZWRJdGVtSGFuZGxlcl09XCJkaXNhYmxlZEl0ZW1IYW5kbGVyXCJcbiAgICBbbW9udGhdPVwiY29tcHV0ZWRBY3RpdmVZZWFyTW9udGhcIlxuICAgIFt2YWx1ZV09XCJjYWxlbmRhclZhbHVlXCJcbiAgICAocHJpem1BZnRlclZpZXdJbml0KT1cIm1hcmtBc1RvdWNoZWQoKVwiXG4gICAgKGRheUNsaWNrKT1cIm9uRGF5Q2xpY2soJGV2ZW50KVwiXG4gICAgKG1vbnRoQ2hhbmdlKT1cIm9uTW9udGhDaGFuZ2UoJGV2ZW50KVwiXG4gICAgcHJpem1QcmV2ZW50RGVmYXVsdD1cIm1vdXNlZG93blwiXG4gICAgYXV0b21hdGlvbi1pZD1cInByaXptLWlucHV0LWRhdGUtdGltZV9fY2FsZW5kYXJcIlxuICA+PC9wcml6bS1jYWxlbmRhcj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZHJvcGRvd25UaW1lVGVtcGxhdGU+XG4gIDxwcml6bS1kYXRhLWxpc3RcbiAgICBjbGFzcz1cImJsb2NrXCJcbiAgICAqbmdJZj1cInRpbWVJdGVtcy5sZW5ndGhcIlxuICAgIFtzdHlsZS4tLXByaXptLWRhdGEtbGlzdC1ib3JkZXJdPVwiMFwiXG4gICAgKHByaXptQWZ0ZXJWaWV3SW5pdCk9XCJtYXJrQXNUb3VjaGVkKCk7IHByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50LnJlQ2FsY3VsYXRlUG9zaXRpb25zKClcIlxuICAgIChwcml6bU9uRGVzdHJveSk9XCJvcGVuVGltZVRlbXBsYXRlID0gZmFsc2VcIlxuICAgIHByaXptTGlmZWN5Y2xlXG4gID5cbiAgICA8bmctY29udGFpbmVyPlxuICAgICAgPHByaXptLWxpc3RpbmctaXRlbVxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0aW1lSXRlbXM7IGxldCBpZHggPSBpbmRleFwiXG4gICAgICAgIFtzZWxlY3RlZF09XCJ2YWx1ZT8uWzFdICYmIGl0ZW0uaXNTYW1lVGltZSgkYW55KHZhbHVlPy5bMV0pKVwiXG4gICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IG9uVGltZU1lbnVDbGljayhpdGVtLCAkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAge3sgaXRlbSB9fVxuICAgICAgPC9wcml6bS1saXN0aW5nLWl0ZW0+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvcHJpem0tZGF0YS1saXN0PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==