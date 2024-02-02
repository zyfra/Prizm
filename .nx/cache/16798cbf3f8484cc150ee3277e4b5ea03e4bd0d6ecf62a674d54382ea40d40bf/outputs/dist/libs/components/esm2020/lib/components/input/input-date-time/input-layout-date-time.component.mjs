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
}
PrizmInputLayoutDateTimeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateTimeComponent, deps: [{ token: DOCUMENT, optional: true }, { token: PRIZM_DATE_FORMAT }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_TIME_TEXTS }, { token: i0.Injector }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_TIME_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputLayoutDateTimeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputLayoutDateTimeComponent, isStandalone: true, selector: "prizm-input-layout-date-time", inputs: { timeItems: "timeItems", placeholder: "placeholder", extraButtonInjector: "extraButtonInjector", min: "min", max: "max", timeStrict: "timeStrict", disabledItemHandler: "disabledItemHandler", defaultActiveYearMonth: "defaultActiveYearMonth", timeMode: "timeMode" }, providers: [
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
    ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: PrizmInputZoneDirective }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  #prizmDropdownHostComponent\n  [style.--prizm-dropdown-host-width]=\"'100%'\"\n  [canOpen]=\"!disabled\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  [content]=\"$any(getTemplate(dropdownTimeTemplate, dropdownDateTemplate))\"\n  [prizmDropdownHostWidth]=\"openTimeTemplate ? '100%' : 'auto'\"\n  [isOpen]=\"!disabled && (openTimeTemplate || open)\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event); $event && prizmDropdownHostComponent.reCalculatePositions()\"\n>\n  <ng-template prizmInputStatusText>\u041E\u0448\u0438\u0431\u043A\u0430! \u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442</ng-template>\n  <div\n    class=\"multiple-input-box\"\n    #focusableElementRef=\"prizmInputZone\"\n    [attr.data-placeholder]=\"placeholder\"\n    prizmInputZone\n  >\n    <input\n      class=\"input-main\"\n      #fe=\"prizmInputInZone\"\n      #maskDirectiveDate=\"mask\"\n      [class.show-placeholder]=\"\n        (empty | async) && (disabled || (focusableElementRef.focused$ | async) !== true)\n      \"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [mask]=\"textMaskOptions\"\n      [showMaskTyped]=\"focusableElementRef.focused$ | async\"\n      [dropSpecialCharacters]=\"false\"\n      [size]=\"textMaskOptions.length\"\n      [clearIfNotMatch]=\"false\"\n      [maxLength]=\"textMaskOptions.length + 1\"\n      [maxSize]=\"textMaskOptions.length\"\n      [ngModel]=\"computedDateValue()\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      (click)=\"referFocusToMain(!computedDateValue())\"\n      (ngModelChange)=\"onDateValueChange($event)\"\n      (updateNativeValue)=\"maskDirectiveDate.writeValue($event)\"\n      style=\"padding: 0\"\n      prizmInput\n      prizmInputInZone\n    />\n    <input\n      class=\"input-time\"\n      #element\n      #maskDirectiveTime=\"mask\"\n      [mask]=\"timeMaskOptions\"\n      [clearIfNotMatch]=\"false\"\n      [dropSpecialCharacters]=\"false\"\n      [showMaskTyped]=\"focusableElementRef.focused$ | async\"\n      [disabled]=\"disabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"computedTimeValue()\"\n      [size]=\"timeMaskOptions.length\"\n      [maxLength]=\"timeMaskOptions.length + 1\"\n      [maxSize]=\"timeMaskOptions.length\"\n      (ngModelChange)=\"onTimeValueChange($event)\"\n      (updateNativeValue)=\"maskDirectiveTime.writeValue($event)\"\n      style=\"padding: 0\"\n      prizmInput\n      prizmInputInZone\n    />\n    <!--    TODO add later correct fix for update native value when ng does not know about change -->\n    <!--    [prizmInputNativeValue]='computedTimeValue()'-->\n    <!--    [needChange]='needChangeNativeValue'-->\n  </div>\n</prizm-dropdown-host>\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"openDateDropdown(!open)\"\n    prizmInputIconButton=\"date-calendar-blank\"\n  ></button>\n  <button\n    [disabled]=\"disabled\"\n    [interactive]=\"true\"\n    (click)=\"openTimeDropdown(!openTimeTemplate)\"\n    prizmInputIconButton=\"date-clock\"\n  ></button>\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n<ng-template #dropdownDateTemplate>\n  <prizm-calendar\n    [min]=\"calendarMinDay\"\n    [max]=\"calendarMaxDay\"\n    [disabledItemHandler]=\"disabledItemHandler\"\n    [month]=\"computedActiveYearMonth\"\n    [value]=\"calendarValue\"\n    (prizmAfterViewInit)=\"markAsTouched()\"\n    (dayClick)=\"onDayClick($event)\"\n    (monthChange)=\"onMonthChange($event)\"\n    prizmPreventDefault=\"mousedown\"\n    automation-id=\"prizm-input-date-time__calendar\"\n  ></prizm-calendar>\n</ng-template>\n\n<ng-template #dropdownTimeTemplate>\n  <prizm-data-list\n    class=\"block\"\n    *ngIf=\"timeItems.length\"\n    [style.--prizm-data-list-border]=\"0\"\n    (prizmAfterViewInit)=\"markAsTouched(); prizmDropdownHostComponent.reCalculatePositions()\"\n    (prizmOnDestroy)=\"openTimeTemplate = false\"\n    prizmLifecycle\n  >\n    <ng-container>\n      <prizm-listing-item\n        *ngFor=\"let item of timeItems; let idx = index\"\n        [selected]=\"value?.[1] && item.isSameTime($any(value?.[1]))\"\n        (click)=\"$event.stopPropagation(); onTimeMenuClick(item, $event)\"\n      >\n        {{ item }}\n      </prizm-listing-item>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n", styles: [":host{display:block}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.block{padding:8px 0}input{width:calc(var(--prizm-input-in-zone-max-size) * 1cm)}\n", ":host{display:block}:host::placeholder{color:var(--prizm-v3-text-icon-disable)}.multiple-input-box{display:flex;gap:2px;padding:22px 8px 4px 0}.multiple-input-box input{width:calc(var(--prizm-input-in-zone-max-size) * .9ch)}.multiple-input-box .input-main.show-placeholder{width:100%}.multiple-input-box .input-main.show-placeholder~input,.multiple-input-box .input-main.show-placeholder~.delimiter{display:none}:host-context(.prizm-input-form-outer) .multiple-input-box{padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"l\"]) .multiple-input-box{padding:11px 0}:host-context(.prizm-input-form-outer[data-size=\"m\"]) .multiple-input-box{padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"s\"]) .multiple-input-box{font-size:12px;padding:4px 0}:host-context(.prizm-input-form-inner) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:4px}:host-context(.prizm-input-form-inner) :host-context(.prizm-input-empty-label) .multiple-input-box :host::placeholder{opacity:1}:host-context(.prizm-input-form-inner) .multiple-input-box{padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner) .multiple-input-box :host::placeholder{opacity:0}:host-context(.prizm-input-form-inner) .multiple-input-box :host:focus::placeholder{opacity:1;transition:opacity .2s ease 0s}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"l\"]) .multiple-input-box{padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]) .multiple-input-box{padding:16px 8px 2px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:2px}.placeholder-input-search.hidden{position:absolute;top:-10000px;left:-10000px;opacity:0}.placeholder-input-search:not(.hidden)~input,.placeholder-input-search:not(.hidden)~.delimiter{display:none}.delimiter{line-height:16px;height:16px;margin:0 .25ch}\n"], dependencies: [{ kind: "component", type: PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i3.PrizmInputStatusTextDirective, selector: "[prizmInputStatusText]", inputs: ["enable", "status"] }, { kind: "directive", type: i4.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: i5.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: PrizmMaskModule }, { kind: "directive", type: i7.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "component", type: PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "ngmodule", type: PrizmInputZoneModule }, { kind: "directive", type: i8.PrizmInputZoneDirective, selector: "[prizmInputZone]", outputs: ["focused$", "blur$"], exportAs: ["prizmInputZone"] }, { kind: "directive", type: i9.PrizmInputInZoneDirective, selector: "input[prizmInputInZone]", inputs: ["idx", "maxSize"], outputs: ["updateNativeValue", "focused$", "blured$"], exportAs: ["prizmInputInZone"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i10.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmPreventDefaultModule }, { kind: "directive", type: i11.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "component", type: PrizmCalendarComponent, selector: "prizm-calendar", inputs: ["month", "value", "disabledItemHandler", "min", "daysWithStatus", "max", "minViewedMonth", "maxViewedMonth", "hoveredItem", "showAdjacent", "markerHandler"], outputs: ["dayClick", "monthChange", "hoveredItemChange"] }, { kind: "ngmodule", type: PrizmValueAccessorModule }, { kind: "ngmodule", type: PrizmInputNativeValueModule }, { kind: "component", type: PrizmListingItemComponent, selector: "prizm-listing-item", inputs: ["disabled", "selected"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateTimeComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LWRhdGUtdGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtdGltZS9pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS10aW1lL2lucHV0LWxheW91dC1kYXRlLXRpbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxRQUFRLEVBRVIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFF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LGdCQUFnQjs7MEJBR3ZCLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFFdkIsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxpQ0FBaUM7NENBbkVsQixnQkFBZ0I7c0JBRHhDLFNBQVM7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7Z0JBS25FLFNBQVM7c0JBRlIsS0FBSztnQkFNTixXQUFXO3NCQUZWLEtBQUs7Z0JBTU4sbUJBQW1CO3NCQUZsQixLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFNTixHQUFHO3NCQUZGLEtBQUs7Z0JBTU4sVUFBVTtzQkFGVCxLQUFLO2dCQU1OLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTixzQkFBc0I7c0JBRnJCLEtBQUs7Z0JBTU4sUUFBUTtzQkFGUCxLQUFLO2dCQXlFRSxVQUFVLE1Bb01WLGFBQWEsTUFLYixpQkFBaUIsTUFLakIsaUJBQWlCLE1BV2pCLGFBQWEsTUFPYixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBOR19WQUxVRV9BQ0NFU1NPUiwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YsIHRhcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9GSUxMRVJfTEVOR1RIIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RhdGUtZmlsbGVycyc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX0ZPUk1BVCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXRlLWZvcm1hdCc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1NFUEFSQVRPUiB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXRlLXNlcGFyYXRvcic7XG5pbXBvcnQgeyBQcml6bURheSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXknO1xuaW1wb3J0IHsgUFJJWk1fRklSU1RfREFZLCBQUklaTV9MQVNUX0RBWSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXlzLmNvbnN0JztcbmltcG9ydCB7IFByaXptTW9udGggfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvbW9udGgnO1xuaW1wb3J0IHsgUHJpem1UaW1lIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL3RpbWUnO1xuaW1wb3J0IHsgUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvYWx3YXlzLWZhbHNlLWhhbmRsZXInO1xuaW1wb3J0IHsgUFJJWk1fREFURV9USU1FX1NFUEFSQVRPUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9kYXRlLXRpbWUtc2VwYXJhdG9yJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AsIHByaXptUHVyZSB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfVElNRV9WQUxVRV9UUkFOU0ZPUk1FUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWlucHV0cy12YWx1ZS10cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9URVhUUywgUFJJWk1fVElNRV9URVhUUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9pMThuJztcbmltcG9ydCB7IFByaXptQ29udGV4dFdpdGhJbXBsaWNpdCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2NvbnRleHQtd2l0aC1pbXBsaWNpdCc7XG5pbXBvcnQgeyBQcml6bUNvbnRyb2xWYWx1ZVRyYW5zZm9ybWVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvY29udHJvbC12YWx1ZS10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBQcml6bURhdGVNb2RlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0ZS1tb2RlJztcbmltcG9ydCB7IFByaXptQm9vbGVhbkhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9oYW5kbGVyJztcbmltcG9ydCB7IFByaXptVGltZU1vZGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy90aW1lLW1vZGUnO1xuaW1wb3J0IHsgUFJJWk1fSU5QVVRfREFURV9USU1FX1BST1ZJREVSUyB9IGZyb20gJy4vaW5wdXQtZGF0ZS10aW1lLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBwcml6bUNyZWF0ZURhdGVOZ3hNYXNrIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvbWFzay9jcmVhdGUtZGF0ZS1tYXNrJztcbmltcG9ydCB7IHByaXptQ3JlYXRlVGltZU5neE1hc2sgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9tYXNrL2NyZWF0ZS10aW1lLW1hc2snO1xuaW1wb3J0IHsgcHJpem1DbGFtcCB9IGZyb20gJy4uLy4uLy4uL3V0aWwvbWF0aC9jbGFtcCc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvZGF0ZS1leHRyYS1idXR0b25zJztcbmltcG9ydCB7IFByaXptRGF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGUtYnV0dG9uJztcbmltcG9ydCB7IFBSSVpNX1NUUklDVF9NQVRDSEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGZpbHRlclRydXRoeSwgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptSW5wdXRDb250cm9sLCBQcml6bUlucHV0TmdDb250cm9sIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IFByaXptSW5wdXRab25lRGlyZWN0aXZlLCBQcml6bUlucHV0Wm9uZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvaW5wdXQtem9uZSc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRlbGF5LCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptTGlmZWN5Y2xlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9saWZlY3ljbGUnO1xuaW1wb3J0IHsgUG9seW1vcnBoT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9wb2x5bW9ycGgnO1xuaW1wb3J0IHtcbiAgUHJpem1JbnB1dE5hdGl2ZVZhbHVlTW9kdWxlLFxuICBQcml6bUlucHV0TmF0aXZlVmFsdWVOZWVkQ2hhbmdlLFxufSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL25hdGl2ZS12YWx1ZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgTmdGb3IsIE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgcHJpem1JMThuSW5pdFdpdGhLZXlzIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kcm9wZG93bnMvZHJvcGRvd24taG9zdC9kcm9wZG93bi1ob3N0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUlucHV0VGV4dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0LXRleHQvaW5wdXQtdGV4dC5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1NYXNrTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9tYXNrL21hc2subW9kdWxlJztcbmltcG9ydCB7IFByaXptRGF0YUxpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kYXRhLWxpc3QvZGF0YS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptUHJldmVudERlZmF1bHRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL3ByZXZlbnQtZGVmYXVsdC9wcmV2ZW50LWRlZmF1bHQubW9kdWxlJztcbmltcG9ydCB7IFByaXptQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBQcml6bUxpbmtDb21wb25lbnQgfSBmcm9tICcuLi8uLi9saW5rJztcbmltcG9ydCB7IFByaXptVmFsdWVBY2Nlc3Nvck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvdmFsdWUtYWNjZXNzb3IvdmFsdWUtYWNjZXNzb3IubW9kdWxlJztcbmltcG9ydCB7IFByaXptTGlzdGluZ0l0ZW1Db21wb25lbnQgfSBmcm9tICcuLi8uLi9saXN0aW5nLWl0ZW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS10aW1lYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LWxheW91dC1kYXRlLXRpbWUuY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFtcbiAgICBgLi9pbnB1dC1sYXlvdXQtZGF0ZS10aW1lLmNvbXBvbmVudC5sZXNzYCxcbiAgICBgLi8uLi9pbnB1dC1kYXRlL2lucHV0LWxheW91dC1kYXRlLXNoYXJlZC5jb21wb25lbnQubGVzc2AsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcml6bUkxOG5Jbml0V2l0aEtleXMoe1xuICAgICAgdGltZTogUFJJWk1fVElNRV9URVhUUyxcbiAgICAgIGRhdGVUZXh0czogUFJJWk1fREFURV9URVhUUyxcbiAgICB9KSxcbiAgICAuLi5QUklaTV9JTlBVVF9EQVRFX1RJTUVfUFJPVklERVJTLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1JbnB1dExheW91dERhdGVUaW1lQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgUHJpem1EZXN0cm95U2VydmljZSxcbiAgICB7IHByb3ZpZGU6IFByaXptSW5wdXRDb250cm9sLCB1c2VFeGlzdGluZzogUHJpem1JbnB1dExheW91dERhdGVUaW1lQ29tcG9uZW50IH0sXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBQcml6bUlucHV0TGF5b3V0RGF0ZVRpbWVDb21wb25lbnQsXG4gICAgUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQsXG4gICAgUHJpem1JbnB1dFRleHRNb2R1bGUsXG4gICAgTmdJZixcbiAgICBOZ0ZvcixcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFByaXptTWFza01vZHVsZSxcbiAgICBQcml6bURhdGFMaXN0Q29tcG9uZW50LFxuICAgIFBvbHltb3JwaE91dGxldERpcmVjdGl2ZSxcbiAgICBQcml6bUljb25Db21wb25lbnQsXG4gICAgUHJpem1JbnB1dFpvbmVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUHJpem1MaWZlY3ljbGVNb2R1bGUsXG4gICAgUHJpem1QcmV2ZW50RGVmYXVsdE1vZHVsZSxcbiAgICBQcml6bUNhbGVuZGFyQ29tcG9uZW50LFxuICAgIFByaXptTGlua0NvbXBvbmVudCxcbiAgICBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCxcbiAgICBQcml6bVZhbHVlQWNjZXNzb3JNb2R1bGUsXG4gICAgUHJpem1JbnB1dE5hdGl2ZVZhbHVlTW9kdWxlLFxuICAgIFByaXptTGlzdGluZ0l0ZW1Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRMYXlvdXREYXRlVGltZUNvbXBvbmVudFxuICBleHRlbmRzIFByaXptSW5wdXROZ0NvbnRyb2w8W1ByaXptRGF5IHwgbnVsbCwgUHJpem1UaW1lIHwgbnVsbF0gfCBudWxsPlxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXRcbntcbiAgcmVhZG9ubHkgbmF0aXZlRWxlbWVudFR5cGUgPSAnaW5wdXQtZGF0ZS10aW1lJztcbiAgcmVhZG9ubHkgaGFzQ2xlYXJCdXR0b24gPSB0cnVlO1xuICBwcml2YXRlIG1vbnRoOiBQcml6bU1vbnRoIHwgbnVsbCA9IG51bGw7XG5cbiAgb3ZlcnJpZGUgZmFsbGJhY2tWYWx1ZTogW1ByaXptRGF5IHwgbnVsbCwgUHJpem1UaW1lIHwgbnVsbF0gPSBbbnVsbCwgbnVsbF07XG5cbiAgQFZpZXdDaGlsZCgnZm9jdXNhYmxlRWxlbWVudFJlZicsIHsgcmVhZDogUHJpem1JbnB1dFpvbmVEaXJlY3RpdmUgfSlcbiAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBQcml6bUlucHV0Wm9uZURpcmVjdGl2ZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHRpbWVJdGVtczogcmVhZG9ubHkgUHJpem1UaW1lW10gPSBuZXcgQXJyYXkoMjQpLmZpbGwobnVsbCkubWFwKChfLCBpKSA9PiBuZXcgUHJpem1UaW1lKGksIDAsIDAsIDApKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHBsYWNlaG9sZGVyID0gJ9CS0YvQsdC10YDQuNGC0LUg0LTQsNGC0YMg0Lgg0LLRgNC10LzRjyc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBleHRyYUJ1dHRvbkluamVjdG9yOiBJbmplY3RvcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbjogUHJpem1EYXkgfCBbUHJpem1EYXksIFByaXptVGltZV0gPSBQUklaTV9GSVJTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXg6IFByaXptRGF5IHwgW1ByaXptRGF5LCBQcml6bVRpbWVdID0gUFJJWk1fTEFTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICB0aW1lU3RyaWN0ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBQcml6bUJvb2xlYW5IYW5kbGVyPFByaXptRGF5PiA9IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGVmYXVsdEFjdGl2ZVllYXJNb250aCA9IFByaXptTW9udGguY3VycmVudExvY2FsKCk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICB0aW1lTW9kZTogUHJpem1UaW1lTW9kZSA9IGBISDpNTWA7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9pbnB1dF9kYXRlX3RpbWUnO1xuXG4gIHB1YmxpYyBvcGVuVGltZVRlbXBsYXRlID0gZmFsc2U7XG5cbiAgcmVhZG9ubHkgbmF0aXZlVmFsdWUkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8W3N0cmluZywgc3RyaW5nXT4oWycnLCAnJ10pO1xuXG4gIG9wZW4gPSBmYWxzZTtcblxuICByZWFkb25seSB0eXBlITogUHJpem1Db250ZXh0V2l0aEltcGxpY2l0PHVua25vd24+O1xuXG4gIG92ZXJyaWRlIGdldCBlbXB0eSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbdGhpcy52YWx1ZSQsIHRoaXMubmF0aXZlVmFsdWUkJF0pLnBpcGUoXG4gICAgICBtYXAoKFt2YWx1ZSwgbmF0aXZlVmFsdWVdKSA9PiB7XG4gICAgICAgIHJldHVybiAoIXZhbHVlIHx8ICF2YWx1ZS5maWx0ZXI/LihCb29sZWFuKS5qb2luKCcnKSkgJiYgIW5hdGl2ZVZhbHVlLmZpbmQoQm9vbGVhbik7XG4gICAgICB9KVxuICAgICkgYXMgT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgfVxuXG4gIHB1YmxpYyByaWdodEJ1dHRvbnMkITogQmVoYXZpb3JTdWJqZWN0PFByaXptRGF0ZUJ1dHRvbltdPjtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgQEluamVjdChQUklaTV9EQVRFX0ZPUk1BVCkgcmVhZG9ubHkgZGF0ZUZvcm1hdDogUHJpem1EYXRlTW9kZSxcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfU0VQQVJBVE9SKSByZWFkb25seSBkYXRlU2VwYXJhdG9yOiBzdHJpbmcsXG4gICAgQEluamVjdChQUklaTV9USU1FX1RFWFRTKVxuICAgIHJlYWRvbmx5IHRpbWVUZXh0cyQ6IE9ic2VydmFibGU8UmVjb3JkPFByaXptVGltZU1vZGUsIHN0cmluZz4+LFxuICAgIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfVEVYVFMpXG4gICAgcmVhZG9ubHkgZGF0ZVRleHRzJDogT2JzZXJ2YWJsZTxSZWNvcmQ8UHJpem1EYXRlTW9kZSwgc3RyaW5nPj4sXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfVElNRV9WQUxVRV9UUkFOU0ZPUk1FUilcbiAgICB2YWx1ZVRyYW5zZm9ybWVyOiBQcml6bUNvbnRyb2xWYWx1ZVRyYW5zZm9ybWVyPFtQcml6bURheSB8IG51bGwsIFByaXptVGltZSB8IG51bGxdIHwgbnVsbD4gfCBudWxsXG4gICkge1xuICAgIHN1cGVyKGluamVjdG9yLCB2YWx1ZVRyYW5zZm9ybWVyKTtcbiAgICB0aGlzLmV4dHJhQnV0dG9uSW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/LmJsdXIkXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgICBmaWx0ZXJUcnV0aHkoKSxcbiAgICAgICAgdGFwKCgpID0+IHRoaXMuY29tcGxldGVEYXRlSWZBcmVOb3RQZW5kaW5nKCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcGxldGVEYXRlSWZBcmVOb3RQZW5kaW5nKCkge1xuICAgIGNvbnN0IFtkYXRlVmFsdWUsIHRpbWVWYWx1ZV0gPSB0aGlzLm5hdGl2ZVZhbHVlJCQudmFsdWU7XG5cbiAgICBpZiAoIWRhdGVWYWx1ZSAmJiAhdGltZVZhbHVlKSByZXR1cm47XG5cbiAgICBpZiAoZGF0ZVZhbHVlICYmIGRhdGVWYWx1ZS5sZW5ndGggIT09IHRoaXMudGV4dE1hc2tPcHRpb25zLmxlbmd0aCkgcmV0dXJuO1xuICAgIGlmICh0aW1lVmFsdWUgJiYgdGltZVZhbHVlLmxlbmd0aCAhPT0gdGhpcy50aW1lTWFza09wdGlvbnMubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCBwYXJzZWREYXRlID0gZGF0ZVZhbHVlXG4gICAgICA/IFByaXptRGF5Lm5vcm1hbGl6ZVBhcnNlKGRhdGVWYWx1ZSwgdGhpcy5kYXRlRm9ybWF0KVxuICAgICAgOiBuZXcgUHJpem1EYXkobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBuZXcgRGF0ZSgpLmdldE1vbnRoKCksIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKTtcblxuICAgIGNvbnN0IHBhcnNlZFRpbWUgPSBQcml6bVRpbWUuY29ycmVjdFRpbWUoXG4gICAgICB0aW1lVmFsdWUgPyBQcml6bVRpbWUuZnJvbVN0cmluZyh0aW1lVmFsdWUpIDogbmV3IFByaXptVGltZSgwLCAwKVxuICAgICk7XG5cbiAgICB0aGlzLm5hdGl2ZVZhbHVlJCQubmV4dChbcGFyc2VkRGF0ZS50b1N0cmluZyh0aGlzLmRhdGVGb3JtYXQpLCBwYXJzZWRUaW1lLnRvU3RyaW5nKHRoaXMudGltZU1vZGUpXSk7XG5cbiAgICB0aGlzLnVwZGF0ZVdpdGhDb3JyZWN0RGF0ZUFuZFRpbWUoW3BhcnNlZERhdGUsIHBhcnNlZFRpbWVdKTtcbiAgfVxuXG4gIEBwcml6bVB1cmVcbiAgcHJpdmF0ZSBmaWx0ZXJUaW1lKGl0ZW1zOiByZWFkb25seSBQcml6bVRpbWVbXSwgbW9kZTogUHJpem1UaW1lTW9kZSwgc2VhcmNoOiBzdHJpbmcpOiByZWFkb25seSBQcml6bVRpbWVbXSB7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udG9TdHJpbmcobW9kZSkuaW5jbHVkZXMoc2VhcmNoKSk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLnJpZ2h0QnV0dG9ucyQgPSB0aGlzLmV4dHJhQnV0dG9uSW5qZWN0b3IuZ2V0KFBSSVpNX0RBVEVfUklHSFRfQlVUVE9OUyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvY3VzZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudD8uZm9jdXNlZCQgPz8gb2YoZmFsc2UpO1xuICB9XG5cbiAgZ2V0IGZpbGxlckxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiBQUklaTV9EQVRFX0ZJTExFUl9MRU5HVEggKyBQUklaTV9EQVRFX1RJTUVfU0VQQVJBVE9SLmxlbmd0aCArIHRoaXMudGltZU1vZGUubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHRleHRNYXNrT3B0aW9ucygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZU1hc2sodGhpcy5kYXRlRm9ybWF0LCB0aGlzLmRhdGVTZXBhcmF0b3IpO1xuICB9XG5cbiAgZ2V0IHRpbWVNYXNrT3B0aW9ucygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZVRpbWVNYXNrKHRoaXMudGltZU1vZGUpO1xuICB9XG5cbiAgZ2V0IHN0cmluZ1ZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU/LnRvU3RyaW5nKCkgPz8gJyc7XG4gIH1cblxuICBwdWJsaWMgY29tcHV0ZWREYXRlVmFsdWUoZGF0ZSA9IHRoaXMudmFsdWU/LlswXSk6IHN0cmluZyB7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVWYWx1ZSQkLnZhbHVlWzBdIHx8ICcnOyAvL3RoaXMuZm9jdXNhYmxlRWxlbWVudD8udmFsdWVzWzBdIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldERhdGVTdHJpbmcoZGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgY29tcHV0ZWRUaW1lVmFsdWUodGltZSA9IHRoaXMudmFsdWU/LlsxXSk6IHN0cmluZyB7XG4gICAgaWYgKCF0aW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXRpdmVWYWx1ZSQkLnZhbHVlWzFdIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldFRpbWVTdHJpbmcodGltZSwgdGhpcy50aW1lTW9kZSk7XG4gIH1cblxuICBwdWJsaWMgcmVhZG9ubHkgbmVlZENoYW5nZU5hdGl2ZVZhbHVlOiBQcml6bUlucHV0TmF0aXZlVmFsdWVOZWVkQ2hhbmdlPHN0cmluZz4gPSAoXG4gICAgY3VycmVudFZhbHVlOiBzdHJpbmcsXG4gICAgbmF0aXZlVmFsdWU6IHN0cmluZyxcbiAgICBlbDogSFRNTElucHV0RWxlbWVudFxuICApID0+IHtcbiAgICBpZiAodGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IG5ld05hdGl2ZVZhbHVlID0gbmF0aXZlVmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKTtcbiAgICBjb25zdCBjdXJyZW50TmV3VmFsdWUgPSBjdXJyZW50VmFsdWUucmVwbGFjZSgvW14wLTldL2csICcnKTtcblxuICAgIGlmIChuZXdOYXRpdmVWYWx1ZS5sZW5ndGggIT09IDQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoY3VycmVudE5ld1ZhbHVlLmxlbmd0aCAhPT0gNCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChuZXdOYXRpdmVWYWx1ZSA9PT0gY3VycmVudE5ld1ZhbHVlKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgZ2V0IGNhbGVuZGFyVmFsdWUoKTogUHJpem1EYXkgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZT8uWzBdIGFzIGFueTtcbiAgfVxuXG4gIGdldCBjYWxlbmRhck1pbkRheSgpOiBQcml6bURheSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5taW4pID8gdGhpcy5taW5bMF0gOiB0aGlzLm1pbjtcbiAgfVxuXG4gIGdldCBjYWxlbmRhck1heERheSgpOiBQcml6bURheSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5tYXgpID8gdGhpcy5tYXhbMF0gOiB0aGlzLm1heDtcbiAgfVxuXG4gIGdldCBjb21wdXRlZEFjdGl2ZVllYXJNb250aCgpOiBQcml6bU1vbnRoIHtcbiAgICByZXR1cm4gdGhpcy5tb250aCB8fCB0aGlzLnZhbHVlPy5bMF0gfHwgdGhpcy5kZWZhdWx0QWN0aXZlWWVhck1vbnRoO1xuICB9XG5cbiAgcHVibGljIG9uRGF0ZVZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuY29tcHV0ZWREYXRlVmFsdWUoKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5uYXRpdmVWYWx1ZSQkLm5leHQoW3ZhbHVlLCB0aGlzLm5hdGl2ZVZhbHVlJCQudmFsdWVbMV1dKTtcblxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoIDwgdGhpcy50ZXh0TWFza09wdGlvbnMubGVuZ3RoIHx8IHRoaXMuaXNWYWx1ZU1hc2tlZCh2YWx1ZSkpIHtcbiAgICAgIGlmICghdmFsdWUpIHRoaXMudXBkYXRlVmFsdWUoW251bGwsIHRoaXMudmFsdWU/LlsxXSA/PyBudWxsXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBQcml6bURheS5ub3JtYWxpemVQYXJzZSh2YWx1ZSwgdGhpcy5kYXRlRm9ybWF0KTtcbiAgICB0aGlzLnVwZGF0ZVdpdGhDb3JyZWN0RGF0ZUFuZFRpbWUoW3BhcnNlZERhdGUsIHRoaXMudmFsdWU/LlsxXSA/PyBudWxsXSk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVdpdGhDb3JyZWN0RGF0ZUFuZFRpbWUodmFsdWU6IFtQcml6bURheSB8IG51bGwsIFByaXptVGltZSB8IG51bGxdKTogdm9pZCB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgIGxldCBbZGF0ZSwgdGltZV0gPSB2YWx1ZTtcbiAgICAvLyBjb3JyZWN0IG1pbiBtYXggdGltZVxuICAgIGlmIChkYXRlKVxuICAgICAgZGF0ZSA9IGRhdGUuZGF5TGltaXQoXG4gICAgICAgIHRoaXMubWluIGluc3RhbmNlb2YgUHJpem1EYXkgPyB0aGlzLm1pbiA6IHRoaXMubWluICYmIHRoaXMubWluWzBdLFxuICAgICAgICB0aGlzLm1heCBpbnN0YW5jZW9mIFByaXptRGF5ID8gdGhpcy5tYXggOiB0aGlzLm1heCAmJiB0aGlzLm1heFswXVxuICAgICAgKTtcblxuICAgIGNvbnN0IHRpbWVNaW4gPSBBcnJheS5pc0FycmF5KHRoaXMubWluKSAmJiB0aGlzLm1pblsxXSA/IHRoaXMubWluWzFdIDogbnVsbDtcbiAgICBjb25zdCB0aW1lTWF4ID0gQXJyYXkuaXNBcnJheSh0aGlzLm1heCkgJiYgdGhpcy5tYXhbMV0gPyB0aGlzLm1heFsxXSA6IG51bGw7XG4gICAgaWYgKHRpbWUgJiYgKHRpbWVNaW4gfHwgdGltZU1heCkpIHtcbiAgICAgIHRpbWUgPSB0aW1lLnRpbWVMaW1pdCh0aW1lTWluLCB0aW1lTWF4KTtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/LnVwZGF0ZU5hdGl2ZVZhbHVlcyh7XG4gICAgICBpZHg6IDAsXG4gICAgICB2YWx1ZTogZGF0ZT8udG9TdHJpbmcoKSA/PyAnJyxcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHVwZGF0ZSBuYXRpdmUgdmFsdWVcbiAgICB0aGlzLm5hdGl2ZVZhbHVlJCQubmV4dChbXG4gICAgICBkYXRlPy50b1N0cmluZygpID8/IHRoaXMubmF0aXZlVmFsdWUkJC52YWx1ZVswXSxcbiAgICAgIHRpbWU/LnRvU3RyaW5nKCkgPz8gdGhpcy5uYXRpdmVWYWx1ZSQkLnZhbHVlWzFdLFxuICAgIF0pO1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZShbZGF0ZSwgdGltZV0pO1xuICB9XG5cbiAgcHVibGljIG9uVGltZVZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuY29tcHV0ZWRUaW1lVmFsdWUoKSkgcmV0dXJuO1xuICAgIHRoaXMubmF0aXZlVmFsdWUkJC5uZXh0KFt0aGlzLm5hdGl2ZVZhbHVlJCQudmFsdWVbMF0sIHZhbHVlXSk7XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCA8IHRoaXMudGltZU1hc2tPcHRpb25zLmxlbmd0aCB8fCB0aGlzLmlzVmFsdWVNYXNrZWQodmFsdWUpKSB7XG4gICAgICBpZiAoIXZhbHVlKSB0aGlzLnVwZGF0ZVZhbHVlKFt0aGlzLnZhbHVlPy5bMF0gPz8gbnVsbCwgbnVsbF0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGltZSA9IHZhbHVlO1xuXG4gICAgbGV0IHBhcnNlZFRpbWUgPSB0aW1lICYmIHRpbWUubGVuZ3RoID09PSB0aGlzLnRpbWVNb2RlLmxlbmd0aCA/IFByaXptVGltZS5mcm9tU3RyaW5nKHRpbWUpIDogbnVsbDtcblxuICAgIGlmIChwYXJzZWRUaW1lKSBwYXJzZWRUaW1lID0gUHJpem1UaW1lLmNvcnJlY3RUaW1lKHBhcnNlZFRpbWUpO1xuXG4gICAgLy8gVE9ETyBsYXRlciBhZGQgY29ycmVjdCB0aW1lIGFzIGluIG5lYXJlc3QgdGltZVxuICAgIC8vIGNvbnN0IG1hdGNoID0gcGFyc2VkVGltZSAmJiB0aGlzLmdldE1hdGNoKHRpbWUpO1xuXG4gICAgLy8gaGlkZSBzaWRlYmFyXG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG5cbiAgICB0aGlzLnVwZGF0ZVdpdGhDb3JyZWN0RGF0ZUFuZFRpbWUoW1xuICAgICAgdGhpcy52YWx1ZT8uWzBdID8/IG51bGwsXG4gICAgICBwYXJzZWRUaW1lLFxuICAgICAgLy8gVE9ETyBsYXRlciBhZGQgY29ycmVjdCB0aW1lIGFzIGluIG5lYXJlc3QgdGltZVxuICAgICAgLy8gfHwgKHRoaXMudGltZVN0cmljdCA/IHRoaXMuZmluZE5lYXJlc3RUaW1lRnJvbUl0ZW1zKHBhcnNlZFRpbWUpIDogcGFyc2VkVGltZSksXG4gICAgXSk7XG4gIH1cblxuICBwdWJsaWMgdGltZUxpbWl0KHZhbHVlOiBbUHJpem1EYXksIFByaXptVGltZV0gfCBudWxsKTogUHJpem1UaW1lIHwgbnVsbCB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgbGV0IFssIHBhcnNlZFRpbWVdID0gdmFsdWU7XG4gICAgaWYgKHBhcnNlZFRpbWUpXG4gICAgICBwYXJzZWRUaW1lID0gcGFyc2VkVGltZS50aW1lTGltaXQoXG4gICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5taW4pICYmIHRoaXMubWluWzFdIGluc3RhbmNlb2YgUHJpem1UaW1lICYmIHZhbHVlPy5bMF0/LmRheVNhbWUodGhpcy5taW5bMF0pXG4gICAgICAgICAgPyB0aGlzLm1pblsxXVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLm1heCkgJiYgdGhpcy5tYXhbMV0gaW5zdGFuY2VvZiBQcml6bVRpbWUgJiYgdmFsdWU/LlswXT8uZGF5U2FtZSh0aGlzLm1heFswXSlcbiAgICAgICAgICA/IHRoaXMubWF4WzFdXG4gICAgICAgICAgOiBudWxsXG4gICAgICApO1xuXG4gICAgcmV0dXJuIHBhcnNlZFRpbWU7XG4gIH1cblxuICBwdWJsaWMgb25EYXlDbGljayhkYXk6IFByaXptRGF5LCB0aW1lPzogUHJpem1UaW1lKTogdm9pZCB7XG4gICAgdGhpcy5vbkRhdGVWYWx1ZUNoYW5nZShkYXkudG9TdHJpbmcodGhpcy5kYXRlRm9ybWF0KSk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUZW1wbGF0ZShcbiAgICBvcGVuVGltZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx1bmtub3duPixcbiAgICBkcm9wZG93blRpbWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dW5rbm93bj5cbiAgKTogVGVtcGxhdGVSZWY8YW55PiB8IG51bGwge1xuICAgIGlmICghdGhpcy5vcGVuICYmICF0aGlzLm9wZW5UaW1lVGVtcGxhdGUpIHJldHVybiBudWxsO1xuICAgIGlmICh0aGlzLm9wZW5UaW1lVGVtcGxhdGUpIHJldHVybiBvcGVuVGltZVRlbXBsYXRlO1xuICAgIHJldHVybiBkcm9wZG93blRpbWVUZW1wbGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vbnRoQ2hhbmdlKG1vbnRoOiBQcml6bU1vbnRoKTogdm9pZCB7XG4gICAgdGhpcy5tb250aCA9IG1vbnRoO1xuICB9XG5cbiAgcHVibGljIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IFtQcml6bURheSB8IG51bGwsIFByaXptVGltZSB8IG51bGxdIHwgbnVsbCk6IHZvaWQge1xuICAgIHN1cGVyLndyaXRlVmFsdWUodmFsdWUgYXMgYW55KTtcbiAgICB0aGlzLm5hdGl2ZVZhbHVlJCQubmV4dChbJycsICcnXSk7XG4gIH1cblxuICBAcHJpem1QdXJlXG4gIHByaXZhdGUgY2FsY3VsYXRlTWFzayhkYXRlRm9ybWF0OiBQcml6bURhdGVNb2RlLCBkYXRlU2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtwcml6bUNyZWF0ZURhdGVOZ3hNYXNrKGRhdGVGb3JtYXQsIGRhdGVTZXBhcmF0b3IpfWA7XG4gIH1cblxuICBAcHJpem1QdXJlXG4gIHByaXZhdGUgY2FsY3VsYXRlVGltZU1hc2sodGltZU1vZGU6IFByaXptVGltZU1vZGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcml6bUNyZWF0ZVRpbWVOZ3hNYXNrKHRpbWVNb2RlKTtcbiAgfVxuXG4gIEBwcml6bVB1cmVcbiAgcHJpdmF0ZSBnZXREYXRlVGltZVN0cmluZyhcbiAgICBkYXRlOiBQcml6bURheSB8IHN0cmluZyxcbiAgICB0aW1lOiBQcml6bVRpbWUgfCBzdHJpbmcgfCBudWxsLFxuICAgIHRpbWVNb2RlOiBQcml6bVRpbWVNb2RlID0gYEhIOk1NYFxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlIGluc3RhbmNlb2YgUHJpem1EYXkgPyBkYXRlLnRvU3RyaW5nKHRoaXMuZGF0ZUZvcm1hdCwgdGhpcy5kYXRlU2VwYXJhdG9yKSA6IGRhdGU7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IHRpbWUgaW5zdGFuY2VvZiBQcml6bVRpbWUgPyB0aW1lLnRvU3RyaW5nKHRpbWVNb2RlKSA6IHRpbWUgfHwgYGA7XG5cbiAgICByZXR1cm4gYCR7ZGF0ZVN0cmluZ30ke1BSSVpNX0RBVEVfVElNRV9TRVBBUkFUT1J9JHt0aW1lU3RyaW5nfWA7XG4gIH1cbiAgQHByaXptUHVyZVxuICBwcml2YXRlIGdldFRpbWVTdHJpbmcodGltZTogUHJpem1UaW1lIHwgc3RyaW5nIHwgbnVsbCwgdGltZU1vZGU6IFByaXptVGltZU1vZGUgPSBgSEg6TU1gKTogc3RyaW5nIHtcbiAgICBjb25zdCB0aW1lU3RyaW5nID0gdGltZSBpbnN0YW5jZW9mIFByaXptVGltZSA/IHRpbWUudG9TdHJpbmcodGltZU1vZGUpIDogdGltZSB8fCBgYDtcblxuICAgIHJldHVybiBgJHt0aW1lU3RyaW5nfWA7XG4gIH1cblxuICBAcHJpem1QdXJlXG4gIHByaXZhdGUgZ2V0RGF0ZVN0cmluZyhkYXRlOiBQcml6bURheSB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUgaW5zdGFuY2VvZiBQcml6bURheSA/IGRhdGUudG9TdHJpbmcodGhpcy5kYXRlRm9ybWF0LCB0aGlzLmRhdGVTZXBhcmF0b3IpIDogZGF0ZTtcbiAgICByZXR1cm4gYCR7ZGF0ZVN0cmluZ31gO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kTmVhcmVzdFRpbWVGcm9tSXRlbXModmFsdWU6IFByaXptVGltZSk6IFByaXptVGltZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnRpbWVJdGVtcy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PlxuICAgICAgTWF0aC5hYnMoY3VycmVudC50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkgLSB2YWx1ZS50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkpIDxcbiAgICAgIE1hdGguYWJzKHByZXZpb3VzLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKSAtIHZhbHVlLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKSlcbiAgICAgICAgPyBjdXJyZW50XG4gICAgICAgIDogcHJldmlvdXNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXRjaCh2YWx1ZTogc3RyaW5nKTogUHJpem1UaW1lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy50aW1lSXRlbXMuZmluZChpdGVtID0+IFBSSVpNX1NUUklDVF9NQVRDSEVSKGl0ZW0sIHZhbHVlKSk7XG4gIH1cblxuICBwdWJsaWMgb25UaW1lTWVudUNsaWNrKGl0ZW06IFByaXptVGltZSwgZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIC8vIGlmICghKHRoaXMudmFsdWVbMV0gJiYgaXRlbS5pc1NhbWVUaW1lKHRoaXMudmFsdWVbMV0pKSlcbiAgICAvLyAgIHRoaXMub25EYXlDbGljayh0aGlzLnZhbHVlWzBdID8/IFByaXptRGF5LmN1cnJlbnRMb2NhbCgpLCBpdGVtKTtcblxuICAgIHRoaXMub25UaW1lVmFsdWVDaGFuZ2UoaXRlbS50b1N0cmluZyh0aGlzLnRpbWVNb2RlKSk7XG5cbiAgICB0aGlzLm9wZW5UaW1lVGVtcGxhdGUgPSB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcml6bUNsYW1wVGltZSh0aW1lOiBQcml6bVRpbWUsIGRheTogUHJpem1EYXkpOiBQcml6bVRpbWUge1xuICAgIGNvbnN0IG1zID0gdGltZS50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCk7XG4gICAgY29uc3QgbWluID1cbiAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5taW4pICYmIGRheS5kYXlTYW1lKHRoaXMuY2FsZW5kYXJNaW5EYXkpXG4gICAgICAgID8gdGhpcy5taW5bMV0udG9BYnNvbHV0ZU1pbGxpc2Vjb25kcygpXG4gICAgICAgIDogLUluZmluaXR5O1xuICAgIGNvbnN0IG1heCA9XG4gICAgICBBcnJheS5pc0FycmF5KHRoaXMubWF4KSAmJiBkYXkuZGF5U2FtZSh0aGlzLmNhbGVuZGFyTWF4RGF5KVxuICAgICAgICA/IHRoaXMubWF4WzFdLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKVxuICAgICAgICA6IEluZmluaXR5O1xuXG4gICAgcmV0dXJuIFByaXptVGltZS5mcm9tQWJzb2x1dGVNaWxsaXNlY29uZHMocHJpem1DbGFtcChtcywgbWluLCBtYXgpKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuVGltZURyb3Bkb3duKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5UaW1lVGVtcGxhdGUgPSBvcGVuO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb3BlbkRhdGVEcm9wZG93bihvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICB0aGlzLm9wZW5UaW1lVGVtcGxhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGNsZWFyKGV2OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgc3VwZXIuY2xlYXIoZXYpO1xuICAgIHRoaXMubmF0aXZlVmFsdWUkJC5uZXh0KFsnJywgJyddKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyByZWZlckZvY3VzVG9NYWluKHJlZmVyRm9jdXMgPSB0cnVlKSB7XG4gICAgaWYgKCFyZWZlckZvY3VzKSByZXR1cm47XG4gICAgLy8gVE9ETyBjcmVhdGUgb3BlcmF0b3IgYW5kIHJ4anMgZnVuY3RpbiB0byBydW4gc2VxdWVuY2UgaW4gZXZlbnQgbG9vcFxuICAgIG9mKG51bGwpXG4gICAgICAucGlwZShcbiAgICAgICAgZGVsYXkoMCksXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb2N1c2FibGVFbGVtZW50Py5zZWxlY3Rpb25Ub1N0YXJ0KCk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGlzVmFsdWVNYXNrZWQodmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZS5pbmNsdWRlcygnXycpO1xuICB9XG59XG4iLCI8cHJpem0tZHJvcGRvd24taG9zdFxuICBjbGFzcz1cInotaG9zdGVkXCJcbiAgI3ByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50XG4gIFtzdHlsZS4tLXByaXptLWRyb3Bkb3duLWhvc3Qtd2lkdGhdPVwiJzEwMCUnXCJcbiAgW2Nhbk9wZW5dPVwiIWRpc2FibGVkXCJcbiAgW3ByaXptRHJvcGRvd25Ib3N0XT1cImxheW91dENvbXBvbmVudD8uZWw/Lm5hdGl2ZUVsZW1lbnRcIlxuICBbY29udGVudF09XCIkYW55KGdldFRlbXBsYXRlKGRyb3Bkb3duVGltZVRlbXBsYXRlLCBkcm9wZG93bkRhdGVUZW1wbGF0ZSkpXCJcbiAgW3ByaXptRHJvcGRvd25Ib3N0V2lkdGhdPVwib3BlblRpbWVUZW1wbGF0ZSA/ICcxMDAlJyA6ICdhdXRvJ1wiXG4gIFtpc09wZW5dPVwiIWRpc2FibGVkICYmIChvcGVuVGltZVRlbXBsYXRlIHx8IG9wZW4pXCJcbiAgW2Nsb3NlQnlFc2NdPVwidHJ1ZVwiXG4gIChpc09wZW5DaGFuZ2UpPVwib25PcGVuQ2hhbmdlKCRldmVudCk7ICRldmVudCAmJiBwcml6bURyb3Bkb3duSG9zdENvbXBvbmVudC5yZUNhbGN1bGF0ZVBvc2l0aW9ucygpXCJcbj5cbiAgPG5nLXRlbXBsYXRlIHByaXptSW5wdXRTdGF0dXNUZXh0PtCe0YjQuNCx0LrQsCEg0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INGE0L7RgNC80LDRgjwvbmctdGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cIm11bHRpcGxlLWlucHV0LWJveFwiXG4gICAgI2ZvY3VzYWJsZUVsZW1lbnRSZWY9XCJwcml6bUlucHV0Wm9uZVwiXG4gICAgW2F0dHIuZGF0YS1wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgcHJpem1JbnB1dFpvbmVcbiAgPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJpbnB1dC1tYWluXCJcbiAgICAgICNmZT1cInByaXptSW5wdXRJblpvbmVcIlxuICAgICAgI21hc2tEaXJlY3RpdmVEYXRlPVwibWFza1wiXG4gICAgICBbY2xhc3Muc2hvdy1wbGFjZWhvbGRlcl09XCJcbiAgICAgICAgKGVtcHR5IHwgYXN5bmMpICYmIChkaXNhYmxlZCB8fCAoZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1c2VkJCB8IGFzeW5jKSAhPT0gdHJ1ZSlcbiAgICAgIFwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFttYXNrXT1cInRleHRNYXNrT3B0aW9uc1wiXG4gICAgICBbc2hvd01hc2tUeXBlZF09XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzZWQkIHwgYXN5bmNcIlxuICAgICAgW2Ryb3BTcGVjaWFsQ2hhcmFjdGVyc109XCJmYWxzZVwiXG4gICAgICBbc2l6ZV09XCJ0ZXh0TWFza09wdGlvbnMubGVuZ3RoXCJcbiAgICAgIFtjbGVhcklmTm90TWF0Y2hdPVwiZmFsc2VcIlxuICAgICAgW21heExlbmd0aF09XCJ0ZXh0TWFza09wdGlvbnMubGVuZ3RoICsgMVwiXG4gICAgICBbbWF4U2l6ZV09XCJ0ZXh0TWFza09wdGlvbnMubGVuZ3RoXCJcbiAgICAgIFtuZ01vZGVsXT1cImNvbXB1dGVkRGF0ZVZhbHVlKClcIlxuICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICAgIChjbGljayk9XCJyZWZlckZvY3VzVG9NYWluKCFjb21wdXRlZERhdGVWYWx1ZSgpKVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkRhdGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICh1cGRhdGVOYXRpdmVWYWx1ZSk9XCJtYXNrRGlyZWN0aXZlRGF0ZS53cml0ZVZhbHVlKCRldmVudClcIlxuICAgICAgc3R5bGU9XCJwYWRkaW5nOiAwXCJcbiAgICAgIHByaXptSW5wdXRcbiAgICAgIHByaXptSW5wdXRJblpvbmVcbiAgICAvPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJpbnB1dC10aW1lXCJcbiAgICAgICNlbGVtZW50XG4gICAgICAjbWFza0RpcmVjdGl2ZVRpbWU9XCJtYXNrXCJcbiAgICAgIFttYXNrXT1cInRpbWVNYXNrT3B0aW9uc1wiXG4gICAgICBbY2xlYXJJZk5vdE1hdGNoXT1cImZhbHNlXCJcbiAgICAgIFtkcm9wU3BlY2lhbENoYXJhY3RlcnNdPVwiZmFsc2VcIlxuICAgICAgW3Nob3dNYXNrVHlwZWRdPVwiZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1c2VkJCB8IGFzeW5jXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgW25nTW9kZWxdPVwiY29tcHV0ZWRUaW1lVmFsdWUoKVwiXG4gICAgICBbc2l6ZV09XCJ0aW1lTWFza09wdGlvbnMubGVuZ3RoXCJcbiAgICAgIFttYXhMZW5ndGhdPVwidGltZU1hc2tPcHRpb25zLmxlbmd0aCArIDFcIlxuICAgICAgW21heFNpemVdPVwidGltZU1hc2tPcHRpb25zLmxlbmd0aFwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvblRpbWVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICh1cGRhdGVOYXRpdmVWYWx1ZSk9XCJtYXNrRGlyZWN0aXZlVGltZS53cml0ZVZhbHVlKCRldmVudClcIlxuICAgICAgc3R5bGU9XCJwYWRkaW5nOiAwXCJcbiAgICAgIHByaXptSW5wdXRcbiAgICAgIHByaXptSW5wdXRJblpvbmVcbiAgICAvPlxuICAgIDwhLS0gICAgVE9ETyBhZGQgbGF0ZXIgY29ycmVjdCBmaXggZm9yIHVwZGF0ZSBuYXRpdmUgdmFsdWUgd2hlbiBuZyBkb2VzIG5vdCBrbm93IGFib3V0IGNoYW5nZSAtLT5cbiAgICA8IS0tICAgIFtwcml6bUlucHV0TmF0aXZlVmFsdWVdPSdjb21wdXRlZFRpbWVWYWx1ZSgpJy0tPlxuICAgIDwhLS0gICAgW25lZWRDaGFuZ2VdPSduZWVkQ2hhbmdlTmF0aXZlVmFsdWUnLS0+XG4gIDwvZGl2PlxuPC9wcml6bS1kcm9wZG93bi1ob3N0PlxuPG5nLWNvbnRhaW5lciAqcHJpem1JbnB1dExheW91dFJpZ2h0PlxuICA8YnV0dG9uXG4gICAgW2ludGVyYWN0aXZlXT1cInRydWVcIlxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgKGNsaWNrKT1cIm9wZW5EYXRlRHJvcGRvd24oIW9wZW4pXCJcbiAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImRhdGUtY2FsZW5kYXItYmxhbmtcIlxuICA+PC9idXR0b24+XG4gIDxidXR0b25cbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCJcbiAgICAoY2xpY2spPVwib3BlblRpbWVEcm9wZG93bighb3BlblRpbWVUZW1wbGF0ZSlcIlxuICAgIHByaXptSW5wdXRJY29uQnV0dG9uPVwiZGF0ZS1jbG9ja1wiXG4gID48L2J1dHRvbj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIHJpZ2h0QnV0dG9ucyQgfCBhc3luY1wiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvbi50ZW1wbGF0ZVwiPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuPG5nLXRlbXBsYXRlICNkcm9wZG93bkRhdGVUZW1wbGF0ZT5cbiAgPHByaXptLWNhbGVuZGFyXG4gICAgW21pbl09XCJjYWxlbmRhck1pbkRheVwiXG4gICAgW21heF09XCJjYWxlbmRhck1heERheVwiXG4gICAgW2Rpc2FibGVkSXRlbUhhbmRsZXJdPVwiZGlzYWJsZWRJdGVtSGFuZGxlclwiXG4gICAgW21vbnRoXT1cImNvbXB1dGVkQWN0aXZlWWVhck1vbnRoXCJcbiAgICBbdmFsdWVdPVwiY2FsZW5kYXJWYWx1ZVwiXG4gICAgKHByaXptQWZ0ZXJWaWV3SW5pdCk9XCJtYXJrQXNUb3VjaGVkKClcIlxuICAgIChkYXlDbGljayk9XCJvbkRheUNsaWNrKCRldmVudClcIlxuICAgIChtb250aENoYW5nZSk9XCJvbk1vbnRoQ2hhbmdlKCRldmVudClcIlxuICAgIHByaXptUHJldmVudERlZmF1bHQ9XCJtb3VzZWRvd25cIlxuICAgIGF1dG9tYXRpb24taWQ9XCJwcml6bS1pbnB1dC1kYXRlLXRpbWVfX2NhbGVuZGFyXCJcbiAgPjwvcHJpem0tY2FsZW5kYXI+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2Ryb3Bkb3duVGltZVRlbXBsYXRlPlxuICA8cHJpem0tZGF0YS1saXN0XG4gICAgY2xhc3M9XCJibG9ja1wiXG4gICAgKm5nSWY9XCJ0aW1lSXRlbXMubGVuZ3RoXCJcbiAgICBbc3R5bGUuLS1wcml6bS1kYXRhLWxpc3QtYm9yZGVyXT1cIjBcIlxuICAgIChwcml6bUFmdGVyVmlld0luaXQpPVwibWFya0FzVG91Y2hlZCgpOyBwcml6bURyb3Bkb3duSG9zdENvbXBvbmVudC5yZUNhbGN1bGF0ZVBvc2l0aW9ucygpXCJcbiAgICAocHJpem1PbkRlc3Ryb3kpPVwib3BlblRpbWVUZW1wbGF0ZSA9IGZhbHNlXCJcbiAgICBwcml6bUxpZmVjeWNsZVxuICA+XG4gICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgIDxwcml6bS1saXN0aW5nLWl0ZW1cbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGltZUl0ZW1zOyBsZXQgaWR4ID0gaW5kZXhcIlxuICAgICAgICBbc2VsZWN0ZWRdPVwidmFsdWU/LlsxXSAmJiBpdGVtLmlzU2FtZVRpbWUoJGFueSh2YWx1ZT8uWzFdKSlcIlxuICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyBvblRpbWVNZW51Q2xpY2soaXRlbSwgJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIHt7IGl0ZW0gfX1cbiAgICAgIDwvcHJpem0tbGlzdGluZy1pdGVtPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3ByaXptLWRhdGEtbGlzdD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=