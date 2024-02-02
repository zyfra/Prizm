import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, ContentChild, forwardRef, Inject, Injector, Input, Optional, TemplateRef, ViewChild, } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { PRIZM_INPUT_DATE_RANGE_PROVIDERS } from './input-date-range.providers';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PrizmDay } from '../../../@core/date-time/day';
import { prizmCreateDateRangeMask } from '../../../@core/mask/create-date-range-mask';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PRIZM_DATE_SEPARATOR } from '../../../@core/date-time/date-separator';
import { PrizmDialogService } from '../../dialogs/dialog/dialog.service';
import { PRIZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PRIZM_DATE_TEXTS } from '../../../tokens/i18n';
import { PRIZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { PrizmDestroyService, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import { map } from 'rxjs/operators';
import { prizmCreateDateNgxMask } from '../../../@core';
import { PrizmInputZoneDirective, PrizmInputZoneModule } from '../../../directives/input-zone';
import { prizmI18nInitWithKey } from '../../../services';
import { CommonModule } from '@angular/common';
import { PrizmMaskModule } from '../../../modules';
import { PolymorphOutletDirective, PrizmLifecycleDirective, PrizmValueAccessorModule, } from '../../../directives';
import { PrizmInputTextModule } from '../input-text';
import { PrizmIconComponent } from '../../icon';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import { PrizmCalendarRangeComponent } from '../../calendar-range';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-mask";
import * as i3 from "../../../directives/input-zone/input-zone.directive";
import * as i4 from "../../../directives/input-zone/input-in-zone.directive";
import * as i5 from "../common/input-icon-button/input-icon-button.component";
import * as i6 from "../common/input-layout/input-layout-right.directive";
import * as i7 from "../input-text/input-text.component";
import * as i8 from "@angular/forms";
import * as i9 from "../../dialogs/dialog/dialog.service";
import * as i10 from "rxjs";
export class PrizmInputLayoutDateRangeComponent extends PrizmInputNgControl {
    get interactive() {
        return !this.disabled;
    }
    get empty() {
        return combineLatest([this.value$, this.nativeValue$$]).pipe(map(([value, nativeValue]) => {
            return !value && !nativeValue.find(Boolean);
        }));
    }
    constructor(changeDetectorRef, injector, dialogService, dateFormat, dateSeparator, dateTexts$, valueTransformer) {
        super(injector, valueTransformer);
        this.dialogService = dialogService;
        this.dateFormat = dateFormat;
        this.dateSeparator = dateSeparator;
        this.dateTexts$ = dateTexts$;
        this.valueTransformer = valueTransformer;
        this.hasClearButton = true;
        this.nativeElementType = 'input-layout-date-range';
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.markerHandler = PRIZM_DEFAULT_MARKER_HANDLER;
        this.defaultViewedMonth = PrizmMonth.currentLocal();
        this.items = [];
        this.placeholder = '';
        this.min = PRIZM_FIRST_DAY;
        this.max = PRIZM_LAST_DAY;
        this.minLength = null;
        this.maxLength = null;
        this.open = false;
        this.testId_ = 'ui_input_date_range';
        this.nativeValue$$ = new BehaviorSubject(['', '']);
        this.closeOnOutsideClick = true;
    }
    get focused() {
        return this.focusableElement?.focused$ ?? of(false);
    }
    get canOpen() {
        return this.interactive;
    }
    get computedMask() {
        return prizmCreateDateRangeMask(this.dateFormat, this.dateSeparator);
    }
    get computedSingleMask() {
        return prizmCreateDateNgxMask(this.dateFormat, this.dateSeparator);
    }
    get stringValue() {
        return this.value?.toString() ?? '';
    }
    get fromValue() {
        return this.value?.from?.toString() ?? '';
    }
    get toValue() {
        return this.value?.to?.toString() ?? '';
    }
    get activePeriod() {
        return (this.items.find(item => prizmNullableSame(this.value, item.range, (a, b) => a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
            a.to.daySame(b.to.dayLimit(this.min, this.max)))) || null);
    }
    onOpenChange(open) {
        this.open = open;
        this.changeDetectorRef.markForCheck();
    }
    onValueFromChange(value, isFromValue) {
        // clear from mask
        value = value.replace(/[_]/g, '');
        if (isFromValue && value === this.fromValue)
            return;
        if (!isFromValue && value === this.toValue)
            return;
        this.nativeValue$$.next(isFromValue ? [value, this.nativeValue$$.value[1]] : [this.nativeValue$$.value[0], value]);
        if (value == null) {
            this.onOpenChange(true);
        }
        if (!value || value.length !== this.computedSingleMask.length) {
            if (!value && isFromValue && !this.value?.to && !isFromValue && !this.value?.from)
                this.updateValue(null);
            return;
        }
        const parsedValue = PrizmDay.normalizeParse(value, this.dateFormat);
        this.updateWithCorrectDateAndTime(isFromValue ? parsedValue : this.value?.from, isFromValue ? this.value?.to : parsedValue);
    }
    onRangeChange(range) {
        this.focusInput();
        if (!range) {
            this.nativeValue$$.next(['', '']);
        }
        if (!prizmNullableSame(this.value, range, (a, b) => a.daySame(b))) {
            this.updateValue(range);
            this.open = false;
        }
        this.nativeValue$$.next([this.fromValue, this.toValue]);
        this.changeDetectorRef.markForCheck();
    }
    onItemSelect(item) {
        this.toggle();
        this.focusInput();
        if (typeof item !== `string`) {
            this.updateValue(item.range.dayLimit(this.min, this.max));
            return;
        }
        if (this.activePeriod !== null) {
            this.updateValue(null);
            this.nativeValue$$.next(['', '']);
        }
    }
    updateWithCorrectDateAndTime(from, to) {
        if (from)
            from = this.dayLimit(from);
        if (to)
            to = this.dayLimit(to);
        // need to update mask value for sync values
        // TODO move to helper and add to all similar cases
        this.focusableElement?.updateNativeValues({
            idx: 0,
            value: from?.toString() ?? '',
        }, {
            idx: 1,
            value: to?.toString() ?? '',
        });
        this.updateValue(new PrizmDayRange(from, to));
    }
    dayLimit(value) {
        return value.dayLimit(this.min, this.max);
    }
    writeValue(value) {
        super.writeValue(value);
        this.nativeValue$$.next([value?.from?.toString(), value?.to?.toString()]);
    }
    toggle() {
        this.open = !this.open;
    }
    focusInput() {
        this.focusableElement?.focus(0);
    }
    clampValue(value) {
        const clampedBottom = this.minLength && value.from.append(this.minLength).dayAfter(value.to)
            ? new PrizmDayRange(value.from, value.from.append(this.minLength).append({ day: -1 }))
            : value;
        const availableMax = this.maxLength
            ? clampedBottom.from.append(this.maxLength).append({ day: -1 })
            : this.max;
        return clampedBottom.to.dayAfter(availableMax)
            ? new PrizmDayRange(clampedBottom.from, availableMax)
            : clampedBottom;
    }
    clear(ev) {
        ev.stopImmediatePropagation();
        super.clear(ev);
        this.nativeValue$$.next(['', '']);
        this.updateValue(null);
        this.layoutComponent?.cdr.markForCheck();
    }
}
PrizmInputLayoutDateRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateRangeComponent, deps: [{ token: ChangeDetectorRef }, { token: Injector }, { token: PrizmDialogService }, { token: PRIZM_DATE_FORMAT, optional: true }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_RANGE_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputLayoutDateRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputLayoutDateRangeComponent, isStandalone: true, selector: "prizm-input-layout-date-range", inputs: { disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", defaultViewedMonth: "defaultViewedMonth", items: "items", placeholder: "placeholder", min: "min", max: "max", minLength: "minLength", maxLength: "maxLength" }, providers: [
        ...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'),
        ...PRIZM_INPUT_DATE_RANGE_PROVIDERS,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PrizmInputLayoutDateRangeComponent),
            multi: true,
        },
        PrizmDestroyService,
        { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateRangeComponent },
    ], queries: [{ propertyName: "footerFromTemplate", first: true, predicate: ["footerFrom"], descendants: true, read: TemplateRef }, { propertyName: "footerToTemplate", first: true, predicate: ["footerTo"], descendants: true, read: TemplateRef }], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: PrizmInputZoneDirective }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  [closeOnOutsideClick]=\"closeOnOutsideClick\"\n  [isOpen]=\"open && canOpen\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <div\n    class=\"multiple-input-box\"\n    #focusableElementRef=\"prizmInputZone\"\n    [attr.data-placeholder]=\"placeholder\"\n    prizmInputZone\n  >\n    <input\n      class=\"input-main\"\n      #maskDirectiveFrom=\"mask\"\n      [class.show-placeholder]=\"(empty | async) && (focusableElementRef.focused$ | async) !== true\"\n      [placeholder]=\"placeholder\"\n      [mask]=\"computedSingleMask\"\n      [showMaskTyped]=\"focusableElementRef.focused$ | async\"\n      [dropSpecialCharacters]=\"false\"\n      [disabled]=\"disabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"fromValue\"\n      [size]=\"computedSingleMask.length\"\n      [maxLength]=\"computedSingleMask.length + 1\"\n      [maxSize]=\"computedSingleMask.length\"\n      (ngModelChange)=\"onValueFromChange($event || '', true)\"\n      (updateNativeValue)=\"maskDirectiveFrom.writeValue($event)\"\n      style=\"padding: 0\"\n      prizmInput\n      prizmInputInZone\n    />\n    <span class=\"delimiter\">-</span>\n    <input\n      class=\"input-time\"\n      #maskDirectiveTo=\"mask\"\n      [mask]=\"computedSingleMask\"\n      [dropSpecialCharacters]=\"false\"\n      [showMaskTyped]=\"focusableElementRef.focused$ | async\"\n      [disabled]=\"disabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"toValue\"\n      [size]=\"computedSingleMask.length\"\n      [maxLength]=\"computedSingleMask.length + 1\"\n      [maxSize]=\"computedSingleMask.length\"\n      (ngModelChange)=\"onValueFromChange($event || '', false)\"\n      (updateNativeValue)=\"maskDirectiveTo.writeValue($event)\"\n      style=\"padding: 0\"\n      prizmInput\n      prizmInputInZone\n    />\n  </div>\n\n  <ng-template #dropdown>\n    <prizm-calendar-range\n      [style.--prizm-input-layout-width]=\"'100%'\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [defaultViewedMonth]=\"defaultViewedMonth\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [items]=\"items\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [markerHandler]=\"markerHandler\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [value]=\"value\"\n      (prizmAfterViewInit)=\"markAsTouched()\"\n      (valueChange)=\"onRangeChange($event)\"\n    >\n      <ng-container footerFrom>\n        <ng-template [ngTemplateOutlet]=\"$any(footerFromTemplate)\"> ></ng-template>\n      </ng-container>\n      <ng-container footerTo>\n        <ng-template [ngTemplateOutlet]=\"$any(footerToTemplate)\"> ></ng-template>\n      </ng-container>\n    </prizm-calendar-range>\n  </ng-template>\n</prizm-dropdown-host>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"focusableElementRef.focus(); onOpenChange(!open)\"\n    prizmInputIconButton=\"date-calendar-range\"\n  ></button>\n</ng-container>\n", styles: [":host{display:block}:host._disabled{pointer-events:none}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}input{width:calc(var(--prizm-input-in-zone-max-size) * 1cm)}\n", ":host{display:block}:host::placeholder{color:var(--prizm-v3-text-icon-disable)}.multiple-input-box{display:flex;gap:2px;padding:22px 8px 4px 0}.multiple-input-box input{width:calc(var(--prizm-input-in-zone-max-size) * .9ch)}.multiple-input-box .input-main.show-placeholder{width:100%}.multiple-input-box .input-main.show-placeholder~input,.multiple-input-box .input-main.show-placeholder~.delimiter{display:none}:host-context(.prizm-input-form-outer) .multiple-input-box{padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"l\"]) .multiple-input-box{padding:11px 0}:host-context(.prizm-input-form-outer[data-size=\"m\"]) .multiple-input-box{padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"s\"]) .multiple-input-box{font-size:12px;padding:4px 0}:host-context(.prizm-input-form-inner) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:4px}:host-context(.prizm-input-form-inner) :host-context(.prizm-input-empty-label) .multiple-input-box :host::placeholder{opacity:1}:host-context(.prizm-input-form-inner) .multiple-input-box{padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner) .multiple-input-box :host::placeholder{opacity:0}:host-context(.prizm-input-form-inner) .multiple-input-box :host:focus::placeholder{opacity:1;transition:opacity .2s ease 0s}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"l\"]) .multiple-input-box{padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]) .multiple-input-box{padding:16px 8px 2px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:2px}.placeholder-input-search.hidden{position:absolute;top:-10000px;left:-10000px;opacity:0}.placeholder-input-search:not(.hidden)~input,.placeholder-input-search:not(.hidden)~.delimiter{display:none}.delimiter{line-height:16px;height:16px;margin:0 .25ch}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmMaskModule }, { kind: "directive", type: i2.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "ngmodule", type: PrizmInputZoneModule }, { kind: "directive", type: i3.PrizmInputZoneDirective, selector: "[prizmInputZone]", outputs: ["focused$", "blur$"], exportAs: ["prizmInputZone"] }, { kind: "directive", type: i4.PrizmInputInZoneDirective, selector: "input[prizmInputInZone]", inputs: ["idx", "maxSize"], outputs: ["updateNativeValue", "focused$", "blured$"], exportAs: ["prizmInputInZone"] }, { kind: "directive", type: PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "component", type: i5.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i6.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: i7.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "component", type: PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "component", type: PrizmCalendarRangeComponent, selector: "prizm-calendar-range", inputs: ["defaultViewedMonth", "disabledItemHandler", "markerHandler", "items", "min", "max", "minLength", "maxLength", "value"], outputs: ["valueChange", "rangeChange"] }, { kind: "ngmodule", type: PrizmValueAccessorModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i8.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i8.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputLayoutDateRangeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputLayoutDateRangeComponent.prototype, "markerHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateRangeComponent.prototype, "defaultViewedMonth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmInputLayoutDateRangeComponent.prototype, "items", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateRangeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateRangeComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateRangeComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateRangeComponent.prototype, "minLength", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateRangeComponent.prototype, "maxLength", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-layout-date-range`, providers: [
                        ...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'),
                        ...PRIZM_INPUT_DATE_RANGE_PROVIDERS,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PrizmInputLayoutDateRangeComponent),
                            multi: true,
                        },
                        PrizmDestroyService,
                        { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateRangeComponent },
                    ], standalone: true, imports: [
                        CommonModule,
                        PrizmMaskModule,
                        PrizmInputZoneModule,
                        PrizmLifecycleDirective,
                        PrizmLetDirective,
                        PolymorphOutletDirective,
                        PrizmInputTextModule,
                        PrizmIconComponent,
                        PrizmDropdownHostComponent,
                        PrizmCalendarRangeComponent,
                        PrizmValueAccessorModule,
                        FormsModule,
                    ], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  [closeOnOutsideClick]=\"closeOnOutsideClick\"\n  [isOpen]=\"open && canOpen\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <div\n    class=\"multiple-input-box\"\n    #focusableElementRef=\"prizmInputZone\"\n    [attr.data-placeholder]=\"placeholder\"\n    prizmInputZone\n  >\n    <input\n      class=\"input-main\"\n      #maskDirectiveFrom=\"mask\"\n      [class.show-placeholder]=\"(empty | async) && (focusableElementRef.focused$ | async) !== true\"\n      [placeholder]=\"placeholder\"\n      [mask]=\"computedSingleMask\"\n      [showMaskTyped]=\"focusableElementRef.focused$ | async\"\n      [dropSpecialCharacters]=\"false\"\n      [disabled]=\"disabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"fromValue\"\n      [size]=\"computedSingleMask.length\"\n      [maxLength]=\"computedSingleMask.length + 1\"\n      [maxSize]=\"computedSingleMask.length\"\n      (ngModelChange)=\"onValueFromChange($event || '', true)\"\n      (updateNativeValue)=\"maskDirectiveFrom.writeValue($event)\"\n      style=\"padding: 0\"\n      prizmInput\n      prizmInputInZone\n    />\n    <span class=\"delimiter\">-</span>\n    <input\n      class=\"input-time\"\n      #maskDirectiveTo=\"mask\"\n      [mask]=\"computedSingleMask\"\n      [dropSpecialCharacters]=\"false\"\n      [showMaskTyped]=\"focusableElementRef.focused$ | async\"\n      [disabled]=\"disabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"toValue\"\n      [size]=\"computedSingleMask.length\"\n      [maxLength]=\"computedSingleMask.length + 1\"\n      [maxSize]=\"computedSingleMask.length\"\n      (ngModelChange)=\"onValueFromChange($event || '', false)\"\n      (updateNativeValue)=\"maskDirectiveTo.writeValue($event)\"\n      style=\"padding: 0\"\n      prizmInput\n      prizmInputInZone\n    />\n  </div>\n\n  <ng-template #dropdown>\n    <prizm-calendar-range\n      [style.--prizm-input-layout-width]=\"'100%'\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [defaultViewedMonth]=\"defaultViewedMonth\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [items]=\"items\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [markerHandler]=\"markerHandler\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [value]=\"value\"\n      (prizmAfterViewInit)=\"markAsTouched()\"\n      (valueChange)=\"onRangeChange($event)\"\n    >\n      <ng-container footerFrom>\n        <ng-template [ngTemplateOutlet]=\"$any(footerFromTemplate)\"> ></ng-template>\n      </ng-container>\n      <ng-container footerTo>\n        <ng-template [ngTemplateOutlet]=\"$any(footerToTemplate)\"> ></ng-template>\n      </ng-container>\n    </prizm-calendar-range>\n  </ng-template>\n</prizm-dropdown-host>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"focusableElementRef.focus(); onOpenChange(!open)\"\n    prizmInputIconButton=\"date-calendar-range\"\n  ></button>\n</ng-container>\n", styles: [":host{display:block}:host._disabled{pointer-events:none}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}input{width:calc(var(--prizm-input-in-zone-max-size) * 1cm)}\n", ":host{display:block}:host::placeholder{color:var(--prizm-v3-text-icon-disable)}.multiple-input-box{display:flex;gap:2px;padding:22px 8px 4px 0}.multiple-input-box input{width:calc(var(--prizm-input-in-zone-max-size) * .9ch)}.multiple-input-box .input-main.show-placeholder{width:100%}.multiple-input-box .input-main.show-placeholder~input,.multiple-input-box .input-main.show-placeholder~.delimiter{display:none}:host-context(.prizm-input-form-outer) .multiple-input-box{padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"l\"]) .multiple-input-box{padding:11px 0}:host-context(.prizm-input-form-outer[data-size=\"m\"]) .multiple-input-box{padding:7px 0}:host-context(.prizm-input-form-outer[data-size=\"s\"]) .multiple-input-box{font-size:12px;padding:4px 0}:host-context(.prizm-input-form-inner) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:4px}:host-context(.prizm-input-form-inner) :host-context(.prizm-input-empty-label) .multiple-input-box :host::placeholder{opacity:1}:host-context(.prizm-input-form-inner) .multiple-input-box{padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner) .multiple-input-box :host::placeholder{opacity:0}:host-context(.prizm-input-form-inner) .multiple-input-box :host:focus::placeholder{opacity:1;transition:opacity .2s ease 0s}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:4px}:host-context(.prizm-input-form-inner[data-size=\"l\"]) .multiple-input-box{padding:22px 8px 4px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]) .multiple-input-box{padding:16px 8px 2px 0}:host-context(.prizm-input-form-inner[data-size=\"m\"]) :host-context(.prizm-input-empty-label) .multiple-input-box{padding-top:2px}.placeholder-input-search.hidden{position:absolute;top:-10000px;left:-10000px;opacity:0}.placeholder-input-search:not(.hidden)~input,.placeholder-input-search:not(.hidden)~.delimiter{display:none}.delimiter{line-height:16px;height:16px;margin:0 .25ch}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: i0.Injector, decorators: [{
                    type: Inject,
                    args: [Injector]
                }] }, { type: i9.PrizmDialogService, decorators: [{
                    type: Inject,
                    args: [PrizmDialogService]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_DATE_FORMAT]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_SEPARATOR]
                }] }, { type: i10.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_TEXTS]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_DATE_RANGE_VALUE_TRANSFORMER]
                }] }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: PrizmInputZoneDirective }]
            }], footerFromTemplate: [{
                type: ContentChild,
                args: ['footerFrom', { read: TemplateRef }]
            }], footerToTemplate: [{
                type: ContentChild,
                args: ['footerTo', { read: TemplateRef }]
            }], disabledItemHandler: [{
                type: Input
            }], markerHandler: [{
                type: Input
            }], defaultViewedMonth: [{
                type: Input
            }], items: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], minLength: [{
                type: Input
            }], maxLength: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LWRhdGUtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1kYXRlLXJhbmdlL2lucHV0LWxheW91dC1kYXRlLXJhbmdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS1yYW5nZS9pbnB1dC1sYXlvdXQtZGF0ZS1yYW5nZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxRQUFRLEVBQ1IsV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXJGLE9BQU8sRUFBRSw0QkFB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O3NCQUZSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQUklaTV9JTlBVVF9EQVRFX1JBTkdFX1BST1ZJREVSUyB9IGZyb20gJy4vaW5wdXQtZGF0ZS1yYW5nZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgUHJpem1EYXlSYW5nZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXktcmFuZ2UnO1xuaW1wb3J0IHsgUHJpem1EYXkgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF5JztcbmltcG9ydCB7IHByaXptQ3JlYXRlRGF0ZVJhbmdlTWFzayB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL21hc2svY3JlYXRlLWRhdGUtcmFuZ2UtbWFzayc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1Cb29sZWFuSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2hhbmRsZXInO1xuaW1wb3J0IHsgUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvYWx3YXlzLWZhbHNlLWhhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1NYXJrZXJIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvbWFya2VyLWhhbmRsZXInO1xuaW1wb3J0IHsgUFJJWk1fREVGQVVMVF9NQVJLRVJfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9kZWZhdWx0LW1hcmtlci1oYW5kbGVyJztcbmltcG9ydCB7IFByaXptTW9udGggfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvbW9udGgnO1xuaW1wb3J0IHsgUHJpem1EYXlSYW5nZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2NsYXNzZXMvZGF5LXJhbmdlLXBlcmlvZCc7XG5pbXBvcnQgeyBQUklaTV9GSVJTVF9EQVksIFBSSVpNX0xBU1RfREFZIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheXMuY29uc3QnO1xuaW1wb3J0IHsgUHJpem1EYXlMaWtlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF5LWxpa2UnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9TRVBBUkFUT1IgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF0ZS1zZXBhcmF0b3InO1xuaW1wb3J0IHsgUHJpem1EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9kaWFsb2cvZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9GT1JNQVQgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF0ZS1mb3JtYXQnO1xuaW1wb3J0IHsgUHJpem1EYXRlTW9kZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGUtbW9kZSc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1RFWFRTIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2kxOG4nO1xuaW1wb3J0IHsgUFJJWk1fREFURV9SQU5HRV9WQUxVRV9UUkFOU0ZPUk1FUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWlucHV0cy12YWx1ZS10cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgUHJpem1Db250cm9sVmFsdWVUcmFuc2Zvcm1lciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2NvbnRyb2wtdmFsdWUtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgcHJpem1OdWxsYWJsZVNhbWUgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbW1vbi9udWxsYWJsZS1zYW1lJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UsIFByaXptTGV0RGlyZWN0aXZlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENvbnRyb2wgfSBmcm9tICcuLi9jb21tb24vYmFzZS9pbnB1dC1jb250cm9sLmNsYXNzJztcbmltcG9ydCB7IFByaXptSW5wdXROZ0NvbnRyb2wgfSBmcm9tICcuLi9jb21tb24vYmFzZS9pbnB1dC1uZy1jb250cm9sLmNsYXNzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHByaXptQ3JlYXRlRGF0ZU5neE1hc2sgfSBmcm9tICcuLi8uLi8uLi9AY29yZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0Wm9uZURpcmVjdGl2ZSwgUHJpem1JbnB1dFpvbmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2lucHV0LXpvbmUnO1xuaW1wb3J0IHsgcHJpem1JMThuSW5pdFdpdGhLZXkgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1NYXNrTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcyc7XG5pbXBvcnQge1xuICBQb2x5bW9ycGhPdXRsZXREaXJlY3RpdmUsXG4gIFByaXptTGlmZWN5Y2xlRGlyZWN0aXZlLFxuICBQcml6bVZhbHVlQWNjZXNzb3JNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFRleHRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC10ZXh0JztcbmltcG9ydCB7IFByaXptSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ljb24nO1xuaW1wb3J0IHsgUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kcm9wZG93bnMvZHJvcGRvd24taG9zdCc7XG5pbXBvcnQgeyBQcml6bUNhbGVuZGFyUmFuZ2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jYWxlbmRhci1yYW5nZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWlucHV0LWxheW91dC1kYXRlLXJhbmdlYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LWxheW91dC1kYXRlLXJhbmdlLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbXG4gICAgYC4vaW5wdXQtbGF5b3V0LWRhdGUtcmFuZ2UuY29tcG9uZW50Lmxlc3NgLFxuICAgICcuLy4uL2lucHV0LWRhdGUvaW5wdXQtbGF5b3V0LWRhdGUtc2hhcmVkLmNvbXBvbmVudC5sZXNzJyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJpem1JMThuSW5pdFdpdGhLZXkoUFJJWk1fREFURV9URVhUUywgJ2RhdGVUZXh0cycpLFxuICAgIC4uLlBSSVpNX0lOUFVUX0RBVEVfUkFOR0VfUFJPVklERVJTLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1JbnB1dExheW91dERhdGVSYW5nZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAgeyBwcm92aWRlOiBQcml6bUlucHV0Q29udHJvbCwgdXNlRXhpc3Rpbmc6IFByaXptSW5wdXRMYXlvdXREYXRlUmFuZ2VDb21wb25lbnQgfSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQcml6bU1hc2tNb2R1bGUsXG4gICAgUHJpem1JbnB1dFpvbmVNb2R1bGUsXG4gICAgUHJpem1MaWZlY3ljbGVEaXJlY3RpdmUsXG4gICAgUHJpem1MZXREaXJlY3RpdmUsXG4gICAgUG9seW1vcnBoT3V0bGV0RGlyZWN0aXZlLFxuICAgIFByaXptSW5wdXRUZXh0TW9kdWxlLFxuICAgIFByaXptSWNvbkNvbXBvbmVudCxcbiAgICBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCxcbiAgICBQcml6bUNhbGVuZGFyUmFuZ2VDb21wb25lbnQsXG4gICAgUHJpem1WYWx1ZUFjY2Vzc29yTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TGF5b3V0RGF0ZVJhbmdlQ29tcG9uZW50IGV4dGVuZHMgUHJpem1JbnB1dE5nQ29udHJvbDxQcml6bURheVJhbmdlIHwgbnVsbD4ge1xuICBoYXNDbGVhckJ1dHRvbiA9IHRydWU7XG4gIG5hdGl2ZUVsZW1lbnRUeXBlID0gJ2lucHV0LWxheW91dC1kYXRlLXJhbmdlJztcblxuICBAVmlld0NoaWxkKCdmb2N1c2FibGVFbGVtZW50UmVmJywgeyByZWFkOiBQcml6bUlucHV0Wm9uZURpcmVjdGl2ZSB9KVxuICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZm9jdXNhYmxlRWxlbWVudD86IFByaXptSW5wdXRab25lRGlyZWN0aXZlO1xuXG4gIEBDb250ZW50Q2hpbGQoJ2Zvb3RlckZyb20nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHB1YmxpYyByZWFkb25seSBmb290ZXJGcm9tVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBAQ29udGVudENoaWxkKCdmb290ZXJUbycsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvb3RlclRvVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRpc2FibGVkSXRlbUhhbmRsZXI6IFByaXptQm9vbGVhbkhhbmRsZXI8UHJpem1EYXk+ID0gUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXJrZXJIYW5kbGVyOiBQcml6bU1hcmtlckhhbmRsZXIgPSBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGVmYXVsdFZpZXdlZE1vbnRoID0gUHJpem1Nb250aC5jdXJyZW50TG9jYWwoKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGl0ZW1zOiByZWFkb25seSBQcml6bURheVJhbmdlUGVyaW9kW10gPSBbXTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtaW4gPSBQUklaTV9GSVJTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXggPSBQUklaTV9MQVNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbkxlbmd0aDogUHJpem1EYXlMaWtlIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXhMZW5ndGg6IFByaXptRGF5TGlrZSB8IG51bGwgPSBudWxsO1xuXG4gIG9wZW4gPSBmYWxzZTtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X2RhdGVfcmFuZ2UnO1xuXG4gIGdldCBpbnRlcmFjdGl2ZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQ7XG4gIH1cbiAgcmVhZG9ubHkgbmF0aXZlVmFsdWUkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8W3N0cmluZywgc3RyaW5nXT4oWycnLCAnJ10pO1xuXG4gIG92ZXJyaWRlIGdldCBlbXB0eSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbdGhpcy52YWx1ZSQsIHRoaXMubmF0aXZlVmFsdWUkJF0pLnBpcGUoXG4gICAgICBtYXAoKFt2YWx1ZSwgbmF0aXZlVmFsdWVdKSA9PiB7XG4gICAgICAgIHJldHVybiAhdmFsdWUgJiYgIW5hdGl2ZVZhbHVlLmZpbmQoQm9vbGVhbik7XG4gICAgICB9KVxuICAgICkgYXMgT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChQcml6bURpYWxvZ1NlcnZpY2UpIHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nU2VydmljZTogUHJpem1EaWFsb2dTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQUklaTV9EQVRFX0ZPUk1BVClcbiAgICByZWFkb25seSBkYXRlRm9ybWF0OiBQcml6bURhdGVNb2RlLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9TRVBBUkFUT1IpIHJlYWRvbmx5IGRhdGVTZXBhcmF0b3I6IHN0cmluZyxcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfVEVYVFMpXG4gICAgcmVhZG9ubHkgZGF0ZVRleHRzJDogT2JzZXJ2YWJsZTxSZWNvcmQ8UHJpem1EYXRlTW9kZSwgc3RyaW5nPj4sXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfUkFOR0VfVkFMVUVfVFJBTlNGT1JNRVIpXG4gICAgb3ZlcnJpZGUgcmVhZG9ubHkgdmFsdWVUcmFuc2Zvcm1lcjogUHJpem1Db250cm9sVmFsdWVUcmFuc2Zvcm1lcjxQcml6bURheVJhbmdlIHwgbnVsbD4gfCBudWxsXG4gICkge1xuICAgIHN1cGVyKGluamVjdG9yLCB2YWx1ZVRyYW5zZm9ybWVyKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5mb2N1c2VkJCA/PyBvZihmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbk9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJhY3RpdmU7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VPbk91dHNpZGVDbGljayA9IHRydWU7XG5cbiAgZ2V0IGNvbXB1dGVkTWFzaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcml6bUNyZWF0ZURhdGVSYW5nZU1hc2sodGhpcy5kYXRlRm9ybWF0LCB0aGlzLmRhdGVTZXBhcmF0b3IpO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkU2luZ2xlTWFzaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcml6bUNyZWF0ZURhdGVOZ3hNYXNrKHRoaXMuZGF0ZUZvcm1hdCwgdGhpcy5kYXRlU2VwYXJhdG9yKTtcbiAgfVxuXG4gIGdldCBzdHJpbmdWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy50b1N0cmluZygpID8/ICcnO1xuICB9XG4gIGdldCBmcm9tVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZT8uZnJvbT8udG9TdHJpbmcoKSA/PyAnJztcbiAgfVxuICBnZXQgdG9WYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy50bz8udG9TdHJpbmcoKSA/PyAnJztcbiAgfVxuXG4gIGdldCBhY3RpdmVQZXJpb2QoKTogUHJpem1EYXlSYW5nZVBlcmlvZCB8IG51bGwge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PlxuICAgICAgICBwcml6bU51bGxhYmxlU2FtZShcbiAgICAgICAgICB0aGlzLnZhbHVlLFxuICAgICAgICAgIGl0ZW0ucmFuZ2UsXG4gICAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgICBhLmZyb20uZGF5U2FtZShiLmZyb20uZGF5TGltaXQodGhpcy5taW4sIHRoaXMubWF4KSkgJiZcbiAgICAgICAgICAgIGEudG8uZGF5U2FtZShiLnRvLmRheUxpbWl0KHRoaXMubWluLCB0aGlzLm1heCkpXG4gICAgICAgIClcbiAgICAgICkgfHwgbnVsbFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUZyb21DaGFuZ2UodmFsdWU6IHN0cmluZywgaXNGcm9tVmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyBjbGVhciBmcm9tIG1hc2tcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tfXS9nLCAnJyk7XG5cbiAgICBpZiAoaXNGcm9tVmFsdWUgJiYgdmFsdWUgPT09IHRoaXMuZnJvbVZhbHVlKSByZXR1cm47XG4gICAgaWYgKCFpc0Zyb21WYWx1ZSAmJiB2YWx1ZSA9PT0gdGhpcy50b1ZhbHVlKSByZXR1cm47XG4gICAgdGhpcy5uYXRpdmVWYWx1ZSQkLm5leHQoXG4gICAgICBpc0Zyb21WYWx1ZSA/IFt2YWx1ZSwgdGhpcy5uYXRpdmVWYWx1ZSQkLnZhbHVlWzFdXSA6IFt0aGlzLm5hdGl2ZVZhbHVlJCQudmFsdWVbMF0sIHZhbHVlXVxuICAgICk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMub25PcGVuQ2hhbmdlKHRydWUpO1xuICAgIH1cblxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoICE9PSB0aGlzLmNvbXB1dGVkU2luZ2xlTWFzay5sZW5ndGgpIHtcbiAgICAgIGlmICghdmFsdWUgJiYgaXNGcm9tVmFsdWUgJiYgIXRoaXMudmFsdWU/LnRvICYmICFpc0Zyb21WYWx1ZSAmJiAhdGhpcy52YWx1ZT8uZnJvbSlcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IFByaXptRGF5Lm5vcm1hbGl6ZVBhcnNlKHZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpO1xuICAgIHRoaXMudXBkYXRlV2l0aENvcnJlY3REYXRlQW5kVGltZShcbiAgICAgIGlzRnJvbVZhbHVlID8gcGFyc2VkVmFsdWUgOiAodGhpcy52YWx1ZT8uZnJvbSBhcyBhbnkpLFxuICAgICAgaXNGcm9tVmFsdWUgPyB0aGlzLnZhbHVlPy50byA6IChwYXJzZWRWYWx1ZSBhcyBhbnkpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvblJhbmdlQ2hhbmdlKHJhbmdlOiBQcml6bURheVJhbmdlIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuXG4gICAgaWYgKCFyYW5nZSkge1xuICAgICAgdGhpcy5uYXRpdmVWYWx1ZSQkLm5leHQoWycnLCAnJ10pO1xuICAgIH1cblxuICAgIGlmICghcHJpem1OdWxsYWJsZVNhbWU8UHJpem1EYXlSYW5nZT4odGhpcy52YWx1ZSwgcmFuZ2UsIChhLCBiKSA9PiBhLmRheVNhbWUoYikpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKHJhbmdlKTtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLm5hdGl2ZVZhbHVlJCQubmV4dChbdGhpcy5mcm9tVmFsdWUsIHRoaXMudG9WYWx1ZV0pO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb25JdGVtU2VsZWN0KGl0ZW06IHN0cmluZyB8IFByaXptRGF5UmFuZ2VQZXJpb2QpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtICE9PSBgc3RyaW5nYCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZShpdGVtLnJhbmdlLmRheUxpbWl0KHRoaXMubWluLCB0aGlzLm1heCkpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlUGVyaW9kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5uYXRpdmVWYWx1ZSQkLm5leHQoWycnLCAnJ10pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlV2l0aENvcnJlY3REYXRlQW5kVGltZShmcm9tOiBQcml6bURheSB8IG51bGwsIHRvOiBQcml6bURheSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoZnJvbSkgZnJvbSA9IHRoaXMuZGF5TGltaXQoZnJvbSk7XG4gICAgaWYgKHRvKSB0byA9IHRoaXMuZGF5TGltaXQodG8pO1xuICAgIC8vIG5lZWQgdG8gdXBkYXRlIG1hc2sgdmFsdWUgZm9yIHN5bmMgdmFsdWVzXG4gICAgLy8gVE9ETyBtb3ZlIHRvIGhlbHBlciBhbmQgYWRkIHRvIGFsbCBzaW1pbGFyIGNhc2VzXG4gICAgdGhpcy5mb2N1c2FibGVFbGVtZW50Py51cGRhdGVOYXRpdmVWYWx1ZXMoXG4gICAgICB7XG4gICAgICAgIGlkeDogMCxcbiAgICAgICAgdmFsdWU6IGZyb20/LnRvU3RyaW5nKCkgPz8gJycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZHg6IDEsXG4gICAgICAgIHZhbHVlOiB0bz8udG9TdHJpbmcoKSA/PyAnJyxcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMudXBkYXRlVmFsdWUobmV3IFByaXptRGF5UmFuZ2UoZnJvbSBhcyBhbnksIHRvIGFzIGFueSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkYXlMaW1pdCh2YWx1ZTogUHJpem1EYXkpOiBQcml6bURheSB7XG4gICAgcmV0dXJuIHZhbHVlLmRheUxpbWl0KHRoaXMubWluLCB0aGlzLm1heCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgd3JpdGVWYWx1ZSh2YWx1ZTogUHJpem1EYXlSYW5nZSB8IG51bGwpOiB2b2lkIHtcbiAgICBzdXBlci53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLm5hdGl2ZVZhbHVlJCQubmV4dChbdmFsdWU/LmZyb20/LnRvU3RyaW5nKCkgYXMgc3RyaW5nLCB2YWx1ZT8udG8/LnRvU3RyaW5nKCkgYXMgc3RyaW5nXSk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICB9XG5cbiAgcHJpdmF0ZSBmb2N1c0lucHV0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNhYmxlRWxlbWVudD8uZm9jdXMoMCk7XG4gIH1cblxuICBwcml2YXRlIGNsYW1wVmFsdWUodmFsdWU6IFByaXptRGF5UmFuZ2UpOiBQcml6bURheVJhbmdlIHtcbiAgICBjb25zdCBjbGFtcGVkQm90dG9tID1cbiAgICAgIHRoaXMubWluTGVuZ3RoICYmIHZhbHVlLmZyb20uYXBwZW5kKHRoaXMubWluTGVuZ3RoKS5kYXlBZnRlcih2YWx1ZS50bylcbiAgICAgICAgPyBuZXcgUHJpem1EYXlSYW5nZSh2YWx1ZS5mcm9tLCB2YWx1ZS5mcm9tLmFwcGVuZCh0aGlzLm1pbkxlbmd0aCkuYXBwZW5kKHsgZGF5OiAtMSB9KSlcbiAgICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZU1heCA9IHRoaXMubWF4TGVuZ3RoXG4gICAgICA/IGNsYW1wZWRCb3R0b20uZnJvbS5hcHBlbmQodGhpcy5tYXhMZW5ndGgpLmFwcGVuZCh7IGRheTogLTEgfSlcbiAgICAgIDogdGhpcy5tYXg7XG5cbiAgICByZXR1cm4gY2xhbXBlZEJvdHRvbS50by5kYXlBZnRlcihhdmFpbGFibGVNYXgpXG4gICAgICA/IG5ldyBQcml6bURheVJhbmdlKGNsYW1wZWRCb3R0b20uZnJvbSwgYXZhaWxhYmxlTWF4KVxuICAgICAgOiBjbGFtcGVkQm90dG9tO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGNsZWFyKGV2OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgc3VwZXIuY2xlYXIoZXYpO1xuICAgIHRoaXMubmF0aXZlVmFsdWUkJC5uZXh0KFsnJywgJyddKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgIHRoaXMubGF5b3V0Q29tcG9uZW50Py5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gIGNsYXNzPVwiei1ob3N0ZWRcIlxuICBbY2FuT3Blbl09XCJjYW5PcGVuXCJcbiAgW2NvbnRlbnRdPVwiZHJvcGRvd25cIlxuICBbY2xvc2VCeUVzY109XCJ0cnVlXCJcbiAgW2Nsb3NlT25PdXRzaWRlQ2xpY2tdPVwiY2xvc2VPbk91dHNpZGVDbGlja1wiXG4gIFtpc09wZW5dPVwib3BlbiAmJiBjYW5PcGVuXCJcbiAgW3ByaXptRHJvcGRvd25Ib3N0XT1cImxheW91dENvbXBvbmVudD8uZWw/Lm5hdGl2ZUVsZW1lbnRcIlxuICAoaXNPcGVuQ2hhbmdlKT1cIm9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgcHJpem1Ecm9wZG93bkhvc3RXaWR0aD1cImF1dG9cIlxuPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJtdWx0aXBsZS1pbnB1dC1ib3hcIlxuICAgICNmb2N1c2FibGVFbGVtZW50UmVmPVwicHJpem1JbnB1dFpvbmVcIlxuICAgIFthdHRyLmRhdGEtcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgIHByaXptSW5wdXRab25lXG4gID5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiaW5wdXQtbWFpblwiXG4gICAgICAjbWFza0RpcmVjdGl2ZUZyb209XCJtYXNrXCJcbiAgICAgIFtjbGFzcy5zaG93LXBsYWNlaG9sZGVyXT1cIihlbXB0eSB8IGFzeW5jKSAmJiAoZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1c2VkJCB8IGFzeW5jKSAhPT0gdHJ1ZVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgW21hc2tdPVwiY29tcHV0ZWRTaW5nbGVNYXNrXCJcbiAgICAgIFtzaG93TWFza1R5cGVkXT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXNlZCQgfCBhc3luY1wiXG4gICAgICBbZHJvcFNwZWNpYWxDaGFyYWN0ZXJzXT1cImZhbHNlXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgW25nTW9kZWxdPVwiZnJvbVZhbHVlXCJcbiAgICAgIFtzaXplXT1cImNvbXB1dGVkU2luZ2xlTWFzay5sZW5ndGhcIlxuICAgICAgW21heExlbmd0aF09XCJjb21wdXRlZFNpbmdsZU1hc2subGVuZ3RoICsgMVwiXG4gICAgICBbbWF4U2l6ZV09XCJjb21wdXRlZFNpbmdsZU1hc2subGVuZ3RoXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsdWVGcm9tQ2hhbmdlKCRldmVudCB8fCAnJywgdHJ1ZSlcIlxuICAgICAgKHVwZGF0ZU5hdGl2ZVZhbHVlKT1cIm1hc2tEaXJlY3RpdmVGcm9tLndyaXRlVmFsdWUoJGV2ZW50KVwiXG4gICAgICBzdHlsZT1cInBhZGRpbmc6IDBcIlxuICAgICAgcHJpem1JbnB1dFxuICAgICAgcHJpem1JbnB1dEluWm9uZVxuICAgIC8+XG4gICAgPHNwYW4gY2xhc3M9XCJkZWxpbWl0ZXJcIj4tPC9zcGFuPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJpbnB1dC10aW1lXCJcbiAgICAgICNtYXNrRGlyZWN0aXZlVG89XCJtYXNrXCJcbiAgICAgIFttYXNrXT1cImNvbXB1dGVkU2luZ2xlTWFza1wiXG4gICAgICBbZHJvcFNwZWNpYWxDaGFyYWN0ZXJzXT1cImZhbHNlXCJcbiAgICAgIFtzaG93TWFza1R5cGVkXT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXNlZCQgfCBhc3luY1wiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICAgIFtuZ01vZGVsXT1cInRvVmFsdWVcIlxuICAgICAgW3NpemVdPVwiY29tcHV0ZWRTaW5nbGVNYXNrLmxlbmd0aFwiXG4gICAgICBbbWF4TGVuZ3RoXT1cImNvbXB1dGVkU2luZ2xlTWFzay5sZW5ndGggKyAxXCJcbiAgICAgIFttYXhTaXplXT1cImNvbXB1dGVkU2luZ2xlTWFzay5sZW5ndGhcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWx1ZUZyb21DaGFuZ2UoJGV2ZW50IHx8ICcnLCBmYWxzZSlcIlxuICAgICAgKHVwZGF0ZU5hdGl2ZVZhbHVlKT1cIm1hc2tEaXJlY3RpdmVUby53cml0ZVZhbHVlKCRldmVudClcIlxuICAgICAgc3R5bGU9XCJwYWRkaW5nOiAwXCJcbiAgICAgIHByaXptSW5wdXRcbiAgICAgIHByaXptSW5wdXRJblpvbmVcbiAgICAvPlxuICA8L2Rpdj5cblxuICA8bmctdGVtcGxhdGUgI2Ryb3Bkb3duPlxuICAgIDxwcml6bS1jYWxlbmRhci1yYW5nZVxuICAgICAgW3N0eWxlLi0tcHJpem0taW5wdXQtbGF5b3V0LXdpZHRoXT1cIicxMDAlJ1wiXG4gICAgICBbc3R5bGUuLS1wcml6bS1kcm9wZG93bi1ob3N0LXdpZHRoXT1cIicxMDAlJ1wiXG4gICAgICBbZGVmYXVsdFZpZXdlZE1vbnRoXT1cImRlZmF1bHRWaWV3ZWRNb250aFwiXG4gICAgICBbZGlzYWJsZWRJdGVtSGFuZGxlcl09XCJkaXNhYmxlZEl0ZW1IYW5kbGVyXCJcbiAgICAgIFtpdGVtc109XCJpdGVtc1wiXG4gICAgICBbbWluXT1cIm1pblwiXG4gICAgICBbbWF4XT1cIm1heFwiXG4gICAgICBbbWFya2VySGFuZGxlcl09XCJtYXJrZXJIYW5kbGVyXCJcbiAgICAgIFttaW5MZW5ndGhdPVwibWluTGVuZ3RoXCJcbiAgICAgIFttYXhMZW5ndGhdPVwibWF4TGVuZ3RoXCJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAocHJpem1BZnRlclZpZXdJbml0KT1cIm1hcmtBc1RvdWNoZWQoKVwiXG4gICAgICAodmFsdWVDaGFuZ2UpPVwib25SYW5nZUNoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyIGZvb3RlckZyb20+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCIkYW55KGZvb3RlckZyb21UZW1wbGF0ZSlcIj4gPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgZm9vdGVyVG8+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCIkYW55KGZvb3RlclRvVGVtcGxhdGUpXCI+ID48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9wcml6bS1jYWxlbmRhci1yYW5nZT5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cblxuPG5nLWNvbnRhaW5lciAqcHJpem1JbnB1dExheW91dFJpZ2h0PlxuICA8YnV0dG9uXG4gICAgW2ludGVyYWN0aXZlXT1cInRydWVcIlxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgKGNsaWNrKT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXMoKTsgb25PcGVuQ2hhbmdlKCFvcGVuKVwiXG4gICAgcHJpem1JbnB1dEljb25CdXR0b249XCJkYXRlLWNhbGVuZGFyLXJhbmdlXCJcbiAgPjwvYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG4iXX0=