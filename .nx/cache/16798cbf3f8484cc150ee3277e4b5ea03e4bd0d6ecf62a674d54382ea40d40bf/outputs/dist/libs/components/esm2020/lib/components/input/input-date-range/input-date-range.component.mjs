import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, ContentChild, ElementRef, HostListener, Inject, Injector, Input, Optional, Self, TemplateRef, ViewChild, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PRIZM_INPUT_DATE_RANGE_PROVIDERS } from './input-date-range.providers';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { prizmCreateDateRangeMask } from '../../../@core/mask/create-date-range-mask';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PRIZM_MAX_DAY_RANGE_LENGTH_MAPPER } from '../../../constants/max-day-range-length-mapper';
import { PRIZM_DATE_SEPARATOR, prizmChangeDateSeparator } from '../../../@core/date-time/date-separator';
import { PRIZM_IS_MOBILE } from '../../../tokens/is-mobile';
import { PrizmDialogService } from '../../dialogs/dialog/dialog.service';
import { PRIZM_MOBILE_CALENDAR } from '../../../tokens/mobile-calendar';
import { PRIZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PRIZM_DATE_TEXTS } from '../../../tokens/i18n';
import { PRIZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { PRIZM_DATE_RANGE_FILLER_LENGTH } from '../../../@core/date-time/date-fillers';
import { PRIZM_RANGE_SEPARATOR_CHAR } from '../../../@core/date-time/date-time';
import { prizmSetNativeFocused } from '../../../util/set-native-focused';
import { prizmIsNativeFocusedIn } from '../../../util';
import { prizmI18nInitWithKey } from '../../../services';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-mask";
import * as i3 from "../common/input-layout/input-layout.component";
import * as i4 from "../common/input-icon-button/input-icon-button.component";
import * as i5 from "../input-text/input-text.component";
import * as i6 from "../../dropdowns/dropdown-host/dropdown-host.component";
import * as i7 from "../../calendar-range/calendar-range.component";
import * as i8 from "@angular/forms";
import * as i9 from "../../dialogs/dialog/dialog.service";
import * as i10 from "rxjs";
export class PrizmInputDateRangeComponent extends AbstractPrizmNullableControl {
    constructor(control, changeDetectorRef, injector, isMobile, dialogService, mobileCalendar, dateFormat, dateSeparator, dateTexts$, valueTransformer) {
        super(control, changeDetectorRef, valueTransformer);
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
        this.defaultViewedMonth = PrizmMonth.currentLocal();
        this.items = [];
        this.forceClear = null;
        this.placeholder = '';
        this.min = PRIZM_FIRST_DAY;
        this.max = PRIZM_LAST_DAY;
        this.minLength = null;
        this.maxLength = null;
        this.testId_ = 'ui_input_date_range';
        this.open = false;
        this.maxLengthMapper = PRIZM_MAX_DAY_RANGE_LENGTH_MAPPER;
        this.dateFiller$ = this.dateTexts$.pipe(map(dateTexts => prizmChangeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator)));
        this.label = 'Выберите дату';
        this.size = 'm';
        this.outer = false;
    }
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return this.focusableElement?.nativeElement
            ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
            : false;
    }
    get computedMobile() {
        return this.isMobile && !!this.mobileCalendar;
    }
    get canOpen() {
        return this.interactive && !this.computedMobile;
    }
    get computedMask() {
        return prizmCreateDateRangeMask(this.dateFormat, this.dateSeparator);
    }
    get stringValue() {
        return this.value?.toString() ?? '';
    }
    get activePeriod() {
        return (this.items.find(item => prizmNullableSame(this.value, item.range, (a, b) => a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
            a.to.daySame(b.to.dayLimit(this.min, this.max)))) || null);
    }
    get computedValue() {
        const { value, nativeValue, activePeriod } = this;
        if (activePeriod) {
            return String(activePeriod);
        }
        return value ? value.getFormattedDayRange(this.dateFormat, this.dateSeparator) : nativeValue;
    }
    get innerPseudoFocused() {
        if (this.pseudoFocused === false) {
            return false;
        }
        if (this.open || this.computedFocused) {
            return true;
        }
        return null;
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
        if (!this.isMobile) {
            this.toggle();
        }
    }
    onOpenChange(open) {
        this.open = open;
    }
    onValueChange(value) {
        if (this.control) {
            this.control.updateValueAndValidity({ emitEvent: false });
        }
        if (value == null) {
            this.onOpenChange(true);
        }
        if (!value || value.length !== PRIZM_DATE_RANGE_FILLER_LENGTH) {
            if (!value)
                this.updateValue(null);
            return;
        }
        const parsedValue = PrizmDayRange.normalizeParse(value, this.dateFormat);
        this.updateValue(!this.minLength && !this.maxLength ? parsedValue : this.clampValue(parsedValue));
    }
    onRangeChange(range) {
        this.toggle();
        this.focusInput();
        if (!range) {
            this.nativeValue = ``;
        }
        if (!prizmNullableSame(this.value, range, (a, b) => a.daySame(b))) {
            this.updateValue(range);
        }
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
            this.nativeValue = ``;
        }
    }
    onHovered(hovered) {
        this.updateHovered(hovered);
    }
    onPressed(pressed) {
        this.updatePressed(pressed);
    }
    writeValue(value) {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : ``;
    }
    get itemSelected() {
        return this.items.findIndex(item => String(item) === this.nativeValue) !== -1;
    }
    toggle() {
        this.open = !this.open;
    }
    focusInput(preventScroll = false) {
        if (this.nativeFocusableElement) {
            prizmSetNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
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
    getDateRangeFiller(dateFiller) {
        return `${dateFiller}${PRIZM_RANGE_SEPARATOR_CHAR}${dateFiller}`;
    }
}
PrizmInputDateRangeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateRangeComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: ChangeDetectorRef }, { token: Injector }, { token: PRIZM_IS_MOBILE }, { token: PrizmDialogService }, { token: PRIZM_MOBILE_CALENDAR, optional: true }, { token: PRIZM_DATE_FORMAT }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_RANGE_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputDateRangeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputDateRangeComponent, selector: "prizm-input-date-range", inputs: { disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", defaultViewedMonth: "defaultViewedMonth", items: "items", forceClear: "forceClear", placeholder: "placeholder", min: "min", max: "max", minLength: "minLength", maxLength: "maxLength", label: "label", size: "size", outer: "outer" }, host: { listeners: { "click": "onClick()" } }, providers: [...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'), ...PRIZM_INPUT_DATE_RANGE_PROVIDERS], queries: [{ propertyName: "footerFromTemplate", first: true, predicate: ["footerFrom"], descendants: true, read: TemplateRef }, { propertyName: "footerToTemplate", first: true, predicate: ["footerTo"], descendants: true, read: TemplateRef }], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  [isOpen]=\"open && canOpen\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout [forceClear]=\"forceClear\" [label]=\"label\" [outer]=\"outer\" [size]=\"size\">\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"computedMask\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [readOnly]=\"readOnly\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"computedDisabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"stringValue\"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      prizmInput\n    />\n\n    <ng-container prizm-input-right>\n      <button\n        [interactive]=\"true\"\n        (click)=\"focusableElementRef.focus()\"\n        prizmInputIconButton=\"date-calendar-range\"\n      ></button>\n    </ng-container>\n  </prizm-input-layout>\n  <ng-template #dropdown>\n    <prizm-calendar-range\n      [style.--prizm-input-layout-width]=\"'100%'\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [defaultViewedMonth]=\"defaultViewedMonth\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [items]=\"items\"\n      [min]=\"$any(min)\"\n      [max]=\"$any(max)\"\n      [markerHandler]=\"markerHandler\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [value]=\"value\"\n      (valueChange)=\"onRangeChange($event)\"\n    >\n      <ng-container footerFrom>\n        <ng-template [ngTemplateOutlet]=\"$any(footerToTemplate)\"> ></ng-template>\n      </ng-container>\n      <ng-container footerTo>\n        <ng-template [ngTemplateOutlet]=\"$any(footerFromTemplate)\"> ></ng-template>\n      </ng-container>\n    </prizm-calendar-range>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}:host._disabled{pointer-events:none}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}\n"], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "component", type: i3.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i4.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i5.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "component", type: i6.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "component", type: i7.PrizmCalendarRangeComponent, selector: "prizm-calendar-range", inputs: ["defaultViewedMonth", "disabledItemHandler", "markerHandler", "items", "min", "max", "minLength", "maxLength", "value"], outputs: ["valueChange", "rangeChange"] }, { kind: "directive", type: i8.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i8.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputDateRangeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputDateRangeComponent.prototype, "markerHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRangeComponent.prototype, "defaultViewedMonth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmInputDateRangeComponent.prototype, "items", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRangeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRangeComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRangeComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRangeComponent.prototype, "minLength", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRangeComponent.prototype, "maxLength", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRangeComponent.prototype, "label", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputDateRangeComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRangeComponent.prototype, "outer", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-date-range`, providers: [...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'), ...PRIZM_INPUT_DATE_RANGE_PROVIDERS], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  [isOpen]=\"open && canOpen\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout [forceClear]=\"forceClear\" [label]=\"label\" [outer]=\"outer\" [size]=\"size\">\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"computedMask\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [readOnly]=\"readOnly\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"computedDisabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"stringValue\"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      prizmInput\n    />\n\n    <ng-container prizm-input-right>\n      <button\n        [interactive]=\"true\"\n        (click)=\"focusableElementRef.focus()\"\n        prizmInputIconButton=\"date-calendar-range\"\n      ></button>\n    </ng-container>\n  </prizm-input-layout>\n  <ng-template #dropdown>\n    <prizm-calendar-range\n      [style.--prizm-input-layout-width]=\"'100%'\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [defaultViewedMonth]=\"defaultViewedMonth\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [items]=\"items\"\n      [min]=\"$any(min)\"\n      [max]=\"$any(max)\"\n      [markerHandler]=\"markerHandler\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [value]=\"value\"\n      (valueChange)=\"onRangeChange($event)\"\n    >\n      <ng-container footerFrom>\n        <ng-template [ngTemplateOutlet]=\"$any(footerToTemplate)\"> ></ng-template>\n      </ng-container>\n      <ng-container footerTo>\n        <ng-template [ngTemplateOutlet]=\"$any(footerFromTemplate)\"> ></ng-template>\n      </ng-container>\n    </prizm-calendar-range>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}:host._disabled{pointer-events:none}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i8.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }, {
                    type: Inject,
                    args: [NgControl]
                }] }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: i0.Injector, decorators: [{
                    type: Inject,
                    args: [Injector]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_IS_MOBILE]
                }] }, { type: i9.PrizmDialogService, decorators: [{
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
                args: ['focusableElementRef', { read: ElementRef }]
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
            }], forceClear: [{
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
            }], label: [{
                type: Input
            }], size: [{
                type: Input
            }], outer: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: [`click`]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtcmFuZ2UvaW5wdXQtZGF0ZS1yYW5nZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtcmFuZ2UvaW5wdXQtZGF0ZS1yYW5nZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDSixXQUFXLEVBRVgsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJbkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFckYsT0FBTyxFQUFFLDRC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cG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBSSVpNX0lOUFVUX0RBVEVfUkFOR0VfUFJPVklERVJTIH0gZnJvbSAnLi9pbnB1dC1kYXRlLXJhbmdlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptTnVsbGFibGVDb250cm9sIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvbnVsbGFibGUtY29udHJvbCc7XG5pbXBvcnQgeyBQcml6bURheVJhbmdlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RheS1yYW5nZSc7XG5pbXBvcnQgeyBQcml6bVdpdGhPcHRpb25hbE1pbk1heCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3dpdGgtb3B0aW9uYWwtbWluLW1heCc7XG5pbXBvcnQgeyBQcml6bURheSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXknO1xuaW1wb3J0IHsgUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9mb2N1c2FibGUtZWxlbWVudC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBwcml6bUNyZWF0ZURhdGVSYW5nZU1hc2sgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9tYXNrL2NyZWF0ZS1kYXRlLXJhbmdlLW1hc2snO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFByaXptQm9vbGVhbkhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9oYW5kbGVyJztcbmltcG9ydCB7IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2Fsd2F5cy1mYWxzZS1oYW5kbGVyJztcbmltcG9ydCB7IFByaXptTWFya2VySGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL21hcmtlci1oYW5kbGVyJztcbmltcG9ydCB7IFBSSVpNX0RFRkFVTFRfTUFSS0VSX0hBTkRMRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvZGVmYXVsdC1tYXJrZXItaGFuZGxlcic7XG5pbXBvcnQgeyBQcml6bU1vbnRoIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL21vbnRoJztcbmltcG9ydCB7IFByaXptRGF5UmFuZ2VQZXJpb2QgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9jbGFzc2VzL2RheS1yYW5nZS1wZXJpb2QnO1xuaW1wb3J0IHsgUFJJWk1fRklSU1RfREFZLCBQUklaTV9MQVNUX0RBWSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXlzLmNvbnN0JztcbmltcG9ydCB7IFByaXptRGF5TGlrZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RheS1saWtlJztcbmltcG9ydCB7IFByaXptTWFwcGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvbWFwcGVyJztcbmltcG9ydCB7IFBSSVpNX01BWF9EQVlfUkFOR0VfTEVOR1RIX01BUFBFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9tYXgtZGF5LXJhbmdlLWxlbmd0aC1tYXBwZXInO1xuaW1wb3J0IHsgUFJJWk1fREFURV9TRVBBUkFUT1IsIHByaXptQ2hhbmdlRGF0ZVNlcGFyYXRvciB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXRlLXNlcGFyYXRvcic7XG5pbXBvcnQgeyBQUklaTV9JU19NT0JJTEUgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvaXMtbW9iaWxlJztcbmltcG9ydCB7IFByaXptRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2RpYWxvZ3MvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBSSVpNX01PQklMRV9DQUxFTkRBUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9tb2JpbGUtY2FsZW5kYXInO1xuaW1wb3J0IHsgUFJJWk1fREFURV9GT1JNQVQgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF0ZS1mb3JtYXQnO1xuaW1wb3J0IHsgUHJpem1EYXRlTW9kZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGUtbW9kZSc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1RFWFRTIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2kxOG4nO1xuaW1wb3J0IHsgUFJJWk1fREFURV9SQU5HRV9WQUxVRV9UUkFOU0ZPUk1FUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWlucHV0cy12YWx1ZS10cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgUHJpem1Db250cm9sVmFsdWVUcmFuc2Zvcm1lciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2NvbnRyb2wtdmFsdWUtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgcHJpem1OdWxsYWJsZVNhbWUgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbW1vbi9udWxsYWJsZS1zYW1lJztcbmltcG9ydCB7IFByaXptSW5wdXRTaXplIH0gZnJvbSAnLi4vY29tbW9uL21vZGVscy9wcml6bS1pbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9SQU5HRV9GSUxMRVJfTEVOR1RIIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RhdGUtZmlsbGVycyc7XG5pbXBvcnQgeyBQUklaTV9SQU5HRV9TRVBBUkFUT1JfQ0hBUiB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgcHJpem1TZXROYXRpdmVGb2N1c2VkIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXQtbmF0aXZlLWZvY3VzZWQnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWRJbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgcHJpem1JMThuSW5pdFdpdGhLZXkgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBwcml6bS1pbnB1dC1kYXRlLXJhbmdlYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LWRhdGUtcmFuZ2UuY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFtgLi9pbnB1dC1kYXRlLXJhbmdlLmNvbXBvbmVudC5sZXNzYF0sXG4gIHByb3ZpZGVyczogWy4uLnByaXptSTE4bkluaXRXaXRoS2V5KFBSSVpNX0RBVEVfVEVYVFMsICdkYXRlVGV4dHMnKSwgLi4uUFJJWk1fSU5QVVRfREFURV9SQU5HRV9QUk9WSURFUlNdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0RGF0ZVJhbmdlQ29tcG9uZW50XG4gIGV4dGVuZHMgQWJzdHJhY3RQcml6bU51bGxhYmxlQ29udHJvbDxQcml6bURheVJhbmdlPlxuICBpbXBsZW1lbnRzIFByaXptV2l0aE9wdGlvbmFsTWluTWF4PFByaXptRGF5PiwgUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3JcbntcbiAgQFZpZXdDaGlsZCgnZm9jdXNhYmxlRWxlbWVudFJlZicsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBwdWJsaWMgcmVhZG9ubHkgZm9jdXNhYmxlRWxlbWVudD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQENvbnRlbnRDaGlsZCgnZm9vdGVyRnJvbScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvb3RlckZyb21UZW1wbGF0ZT86IFRlbXBsYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGQoJ2Zvb3RlclRvJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBwdWJsaWMgcmVhZG9ubHkgZm9vdGVyVG9UZW1wbGF0ZT86IFRlbXBsYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGlzYWJsZWRJdGVtSGFuZGxlcjogUHJpem1Cb29sZWFuSGFuZGxlcjxQcml6bURheT4gPSBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1hcmtlckhhbmRsZXI6IFByaXptTWFya2VySGFuZGxlciA9IFBSSVpNX0RFRkFVTFRfTUFSS0VSX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkZWZhdWx0Vmlld2VkTW9udGggPSBQcml6bU1vbnRoLmN1cnJlbnRMb2NhbCgpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaXRlbXM6IHJlYWRvbmx5IFByaXptRGF5UmFuZ2VQZXJpb2RbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGZvcmNlQ2xlYXI6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtaW46IFByaXptRGF5IHwgbnVsbCA9IFBSSVpNX0ZJUlNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heDogUHJpem1EYXkgfCBudWxsID0gUFJJWk1fTEFTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtaW5MZW5ndGg6IFByaXptRGF5TGlrZSB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4TGVuZ3RoOiBQcml6bURheUxpa2UgfCBudWxsID0gbnVsbDtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X2RhdGVfcmFuZ2UnO1xuXG4gIG9wZW4gPSBmYWxzZTtcblxuICByZWFkb25seSBtYXhMZW5ndGhNYXBwZXI6IFByaXptTWFwcGVyPFByaXptRGF5LCBQcml6bURheT4gPSBQUklaTV9NQVhfREFZX1JBTkdFX0xFTkdUSF9NQVBQRVI7XG4gIHJlYWRvbmx5IGRhdGVGaWxsZXIkID0gdGhpcy5kYXRlVGV4dHMkLnBpcGUoXG4gICAgbWFwKGRhdGVUZXh0cyA9PiBwcml6bUNoYW5nZURhdGVTZXBhcmF0b3IoZGF0ZVRleHRzW3RoaXMuZGF0ZUZvcm1hdF0sIHRoaXMuZGF0ZVNlcGFyYXRvcikpXG4gICk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBsYWJlbCA9ICfQktGL0LHQtdGA0LjRgtC1INC00LDRgtGDJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNpemU6IFByaXptSW5wdXRTaXplID0gJ20nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3V0ZXIgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTZWxmKClcbiAgICBASW5qZWN0KE5nQ29udHJvbClcbiAgICBjb250cm9sOiBOZ0NvbnRyb2wgfCBudWxsLFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KFBSSVpNX0lTX01PQklMRSkgcHJpdmF0ZSByZWFkb25seSBpc01vYmlsZTogYm9vbGVhbixcbiAgICBASW5qZWN0KFByaXptRGlhbG9nU2VydmljZSkgcHJpdmF0ZSByZWFkb25seSBkaWFsb2dTZXJ2aWNlOiBQcml6bURpYWxvZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBSSVpNX01PQklMRV9DQUxFTkRBUilcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vYmlsZUNhbGVuZGFyOiBUeXBlPGFueT4gfCBudWxsLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9GT1JNQVQpIHJlYWRvbmx5IGRhdGVGb3JtYXQ6IFByaXptRGF0ZU1vZGUsXG4gICAgQEluamVjdChQUklaTV9EQVRFX1NFUEFSQVRPUikgcmVhZG9ubHkgZGF0ZVNlcGFyYXRvcjogc3RyaW5nLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9URVhUUylcbiAgICByZWFkb25seSBkYXRlVGV4dHMkOiBPYnNlcnZhYmxlPFJlY29yZDxQcml6bURhdGVNb2RlLCBzdHJpbmc+PixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUFJJWk1fREFURV9SQU5HRV9WQUxVRV9UUkFOU0ZPUk1FUilcbiAgICBvdmVycmlkZSByZWFkb25seSB2YWx1ZVRyYW5zZm9ybWVyOiBQcml6bUNvbnRyb2xWYWx1ZVRyYW5zZm9ybWVyPFByaXptRGF5UmFuZ2UgfCBudWxsPiB8IG51bGxcbiAgKSB7XG4gICAgc3VwZXIoY29udHJvbCwgY2hhbmdlRGV0ZWN0b3JSZWYsIHZhbHVlVHJhbnNmb3JtZXIpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50ID8gKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50XG4gICAgICA/IHByaXptSXNOYXRpdmVGb2N1c2VkSW4odGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldCBjb21wdXRlZE1vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc01vYmlsZSAmJiAhIXRoaXMubW9iaWxlQ2FsZW5kYXI7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbk9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJhY3RpdmUgJiYgIXRoaXMuY29tcHV0ZWRNb2JpbGU7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRNYXNrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByaXptQ3JlYXRlRGF0ZVJhbmdlTWFzayh0aGlzLmRhdGVGb3JtYXQsIHRoaXMuZGF0ZVNlcGFyYXRvcik7XG4gIH1cblxuICBnZXQgc3RyaW5nVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZT8udG9TdHJpbmcoKSA/PyAnJztcbiAgfVxuXG4gIGdldCBhY3RpdmVQZXJpb2QoKTogUHJpem1EYXlSYW5nZVBlcmlvZCB8IG51bGwge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PlxuICAgICAgICBwcml6bU51bGxhYmxlU2FtZShcbiAgICAgICAgICB0aGlzLnZhbHVlLFxuICAgICAgICAgIGl0ZW0ucmFuZ2UsXG4gICAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgICBhLmZyb20uZGF5U2FtZShiLmZyb20uZGF5TGltaXQodGhpcy5taW4sIHRoaXMubWF4KSkgJiZcbiAgICAgICAgICAgIGEudG8uZGF5U2FtZShiLnRvLmRheUxpbWl0KHRoaXMubWluLCB0aGlzLm1heCkpXG4gICAgICAgIClcbiAgICAgICkgfHwgbnVsbFxuICAgICk7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hdGl2ZVZhbHVlLCBhY3RpdmVQZXJpb2QgfSA9IHRoaXM7XG5cbiAgICBpZiAoYWN0aXZlUGVyaW9kKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGFjdGl2ZVBlcmlvZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlID8gdmFsdWUuZ2V0Rm9ybWF0dGVkRGF5UmFuZ2UodGhpcy5kYXRlRm9ybWF0LCB0aGlzLmRhdGVTZXBhcmF0b3IpIDogbmF0aXZlVmFsdWU7XG4gIH1cblxuICBnZXQgaW5uZXJQc2V1ZG9Gb2N1c2VkKCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICBpZiAodGhpcy5wc2V1ZG9Gb2N1c2VkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wZW4gfHwgdGhpcy5jb21wdXRlZEZvY3VzZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IG5hdGl2ZVZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudCA/IHRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudC52YWx1ZSA6IGBgO1xuICB9XG5cbiAgc2V0IG5hdGl2ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihgY2xpY2tgKVxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNNb2JpbGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgfVxuXG4gIHB1YmxpYyBvblZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHRoaXMub25PcGVuQ2hhbmdlKHRydWUpO1xuICAgIH1cblxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoICE9PSBQUklaTV9EQVRFX1JBTkdFX0ZJTExFUl9MRU5HVEgpIHtcbiAgICAgIGlmICghdmFsdWUpIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkVmFsdWUgPSBQcml6bURheVJhbmdlLm5vcm1hbGl6ZVBhcnNlKHZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpO1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5taW5MZW5ndGggJiYgIXRoaXMubWF4TGVuZ3RoID8gcGFyc2VkVmFsdWUgOiB0aGlzLmNsYW1wVmFsdWUocGFyc2VkVmFsdWUpKTtcbiAgfVxuXG4gIHB1YmxpYyBvblJhbmdlQ2hhbmdlKHJhbmdlOiBQcml6bURheVJhbmdlIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgdGhpcy5mb2N1c0lucHV0KCk7XG5cbiAgICBpZiAoIXJhbmdlKSB7XG4gICAgICB0aGlzLm5hdGl2ZVZhbHVlID0gYGA7XG4gICAgfVxuXG4gICAgaWYgKCFwcml6bU51bGxhYmxlU2FtZTxQcml6bURheVJhbmdlPih0aGlzLnZhbHVlLCByYW5nZSwgKGEsIGIpID0+IGEuZGF5U2FtZShiKSkpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUocmFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkl0ZW1TZWxlY3QoaXRlbTogc3RyaW5nIHwgUHJpem1EYXlSYW5nZVBlcmlvZCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgdGhpcy5mb2N1c0lucHV0KCk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0gIT09IGBzdHJpbmdgKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKGl0ZW0ucmFuZ2UuZGF5TGltaXQodGhpcy5taW4sIHRoaXMubWF4KSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmVQZXJpb2QgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gICAgICB0aGlzLm5hdGl2ZVZhbHVlID0gYGA7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uSG92ZXJlZChob3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVIb3ZlcmVkKGhvdmVyZWQpO1xuICB9XG5cbiAgcHVibGljIG9uUHJlc3NlZChwcmVzc2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQcmVzc2VkKHByZXNzZWQpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IFByaXptRGF5UmFuZ2UgfCBudWxsKTogdm9pZCB7XG4gICAgc3VwZXIud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5uYXRpdmVWYWx1ZSA9IHZhbHVlID8gdGhpcy5jb21wdXRlZFZhbHVlIDogYGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBpdGVtU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gU3RyaW5nKGl0ZW0pID09PSB0aGlzLm5hdGl2ZVZhbHVlKSAhPT0gLTE7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICB9XG5cbiAgcHJpdmF0ZSBmb2N1c0lucHV0KHByZXZlbnRTY3JvbGwgPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgIHByaXptU2V0TmF0aXZlRm9jdXNlZCh0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQsIHRydWUsIHByZXZlbnRTY3JvbGwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xhbXBWYWx1ZSh2YWx1ZTogUHJpem1EYXlSYW5nZSk6IFByaXptRGF5UmFuZ2Uge1xuICAgIGNvbnN0IGNsYW1wZWRCb3R0b20gPVxuICAgICAgdGhpcy5taW5MZW5ndGggJiYgdmFsdWUuZnJvbS5hcHBlbmQodGhpcy5taW5MZW5ndGgpLmRheUFmdGVyKHZhbHVlLnRvKVxuICAgICAgICA/IG5ldyBQcml6bURheVJhbmdlKHZhbHVlLmZyb20sIHZhbHVlLmZyb20uYXBwZW5kKHRoaXMubWluTGVuZ3RoKS5hcHBlbmQoeyBkYXk6IC0xIH0pKVxuICAgICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlTWF4ID0gdGhpcy5tYXhMZW5ndGhcbiAgICAgID8gY2xhbXBlZEJvdHRvbS5mcm9tLmFwcGVuZCh0aGlzLm1heExlbmd0aCkuYXBwZW5kKHsgZGF5OiAtMSB9KVxuICAgICAgOiB0aGlzLm1heDtcblxuICAgIHJldHVybiBjbGFtcGVkQm90dG9tLnRvLmRheUFmdGVyKGF2YWlsYWJsZU1heCBhcyBhbnkpXG4gICAgICA/IG5ldyBQcml6bURheVJhbmdlKGNsYW1wZWRCb3R0b20uZnJvbSwgYXZhaWxhYmxlTWF4IGFzIGFueSlcbiAgICAgIDogY2xhbXBlZEJvdHRvbTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGF0ZVJhbmdlRmlsbGVyKGRhdGVGaWxsZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2RhdGVGaWxsZXJ9JHtQUklaTV9SQU5HRV9TRVBBUkFUT1JfQ0hBUn0ke2RhdGVGaWxsZXJ9YDtcbiAgfVxufVxuIiwiPHByaXptLWRyb3Bkb3duLWhvc3RcbiAgY2xhc3M9XCJ6LWhvc3RlZFwiXG4gIFtjYW5PcGVuXT1cImNhbk9wZW5cIlxuICBbY29udGVudF09XCJkcm9wZG93blwiXG4gIFtjbG9zZUJ5RXNjXT1cInRydWVcIlxuICBbaXNPcGVuXT1cIm9wZW4gJiYgY2FuT3BlblwiXG4gIChpc09wZW5DaGFuZ2UpPVwib25PcGVuQ2hhbmdlKCRldmVudClcIlxuICBwcml6bURyb3Bkb3duSG9zdFdpZHRoPVwiYXV0b1wiXG4+XG4gIDxwcml6bS1pbnB1dC1sYXlvdXQgW2ZvcmNlQ2xlYXJdPVwiZm9yY2VDbGVhclwiIFtsYWJlbF09XCJsYWJlbFwiIFtvdXRlcl09XCJvdXRlclwiIFtzaXplXT1cInNpemVcIj5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiaW5wdXQtc2VhcmNoXCJcbiAgICAgICNmb2N1c2FibGVFbGVtZW50UmVmXG4gICAgICBbbWFza109XCJjb21wdXRlZE1hc2tcIlxuICAgICAgW3Nob3dNYXNrVHlwZWRdPVwiZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1c2VkXCJcbiAgICAgIFtkcm9wU3BlY2lhbENoYXJhY3RlcnNdPVwiZmFsc2VcIlxuICAgICAgW3JlYWRPbmx5XT1cInJlYWRPbmx5XCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbZGlzYWJsZWRdPVwiY29tcHV0ZWREaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgW25nTW9kZWxdPVwic3RyaW5nVmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQgfHwgJycpXCJcbiAgICAgIHByaXptSW5wdXRcbiAgICAvPlxuXG4gICAgPG5nLWNvbnRhaW5lciBwcml6bS1pbnB1dC1yaWdodD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgW2ludGVyYWN0aXZlXT1cInRydWVcIlxuICAgICAgICAoY2xpY2spPVwiZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1cygpXCJcbiAgICAgICAgcHJpem1JbnB1dEljb25CdXR0b249XCJkYXRlLWNhbGVuZGFyLXJhbmdlXCJcbiAgICAgID48L2J1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG4gIDxuZy10ZW1wbGF0ZSAjZHJvcGRvd24+XG4gICAgPHByaXptLWNhbGVuZGFyLXJhbmdlXG4gICAgICBbc3R5bGUuLS1wcml6bS1pbnB1dC1sYXlvdXQtd2lkdGhdPVwiJzEwMCUnXCJcbiAgICAgIFtzdHlsZS4tLXByaXptLWRyb3Bkb3duLWhvc3Qtd2lkdGhdPVwiJzEwMCUnXCJcbiAgICAgIFtkZWZhdWx0Vmlld2VkTW9udGhdPVwiZGVmYXVsdFZpZXdlZE1vbnRoXCJcbiAgICAgIFtkaXNhYmxlZEl0ZW1IYW5kbGVyXT1cImRpc2FibGVkSXRlbUhhbmRsZXJcIlxuICAgICAgW2l0ZW1zXT1cIml0ZW1zXCJcbiAgICAgIFttaW5dPVwiJGFueShtaW4pXCJcbiAgICAgIFttYXhdPVwiJGFueShtYXgpXCJcbiAgICAgIFttYXJrZXJIYW5kbGVyXT1cIm1hcmtlckhhbmRsZXJcIlxuICAgICAgW21pbkxlbmd0aF09XCJtaW5MZW5ndGhcIlxuICAgICAgW21heExlbmd0aF09XCJtYXhMZW5ndGhcIlxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICh2YWx1ZUNoYW5nZSk9XCJvblJhbmdlQ2hhbmdlKCRldmVudClcIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgZm9vdGVyRnJvbT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIiRhbnkoZm9vdGVyVG9UZW1wbGF0ZSlcIj4gPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgZm9vdGVyVG8+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCIkYW55KGZvb3RlckZyb21UZW1wbGF0ZSlcIj4gPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3ByaXptLWNhbGVuZGFyLXJhbmdlPlxuICA8L25nLXRlbXBsYXRlPlxuPC9wcml6bS1kcm9wZG93bi1ob3N0PlxuIl19