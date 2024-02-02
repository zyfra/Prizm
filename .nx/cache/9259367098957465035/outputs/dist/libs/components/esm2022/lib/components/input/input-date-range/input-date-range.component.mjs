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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateRangeComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: ChangeDetectorRef }, { token: Injector }, { token: PRIZM_IS_MOBILE }, { token: PrizmDialogService }, { token: PRIZM_MOBILE_CALENDAR, optional: true }, { token: PRIZM_DATE_FORMAT }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_RANGE_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputDateRangeComponent, selector: "prizm-input-date-range", inputs: { disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", defaultViewedMonth: "defaultViewedMonth", items: "items", forceClear: "forceClear", placeholder: "placeholder", min: "min", max: "max", minLength: "minLength", maxLength: "maxLength", label: "label", size: "size", outer: "outer" }, host: { listeners: { "click": "onClick()" } }, providers: [...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'), ...PRIZM_INPUT_DATE_RANGE_PROVIDERS], queries: [{ propertyName: "footerFromTemplate", first: true, predicate: ["footerFrom"], descendants: true, read: TemplateRef }, { propertyName: "footerToTemplate", first: true, predicate: ["footerTo"], descendants: true, read: TemplateRef }], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  [isOpen]=\"open && canOpen\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout [forceClear]=\"forceClear\" [label]=\"label\" [outer]=\"outer\" [size]=\"size\">\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"computedMask\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [readOnly]=\"readOnly\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"computedDisabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"stringValue\"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      prizmInput\n    />\n\n    <ng-container prizm-input-right>\n      <button\n        [interactive]=\"true\"\n        (click)=\"focusableElementRef.focus()\"\n        prizmInputIconButton=\"date-calendar-range\"\n      ></button>\n    </ng-container>\n  </prizm-input-layout>\n  <ng-template #dropdown>\n    <prizm-calendar-range\n      [style.--prizm-input-layout-width]=\"'100%'\"\n      [style.--prizm-dropdown-host-width]=\"'100%'\"\n      [defaultViewedMonth]=\"defaultViewedMonth\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [items]=\"items\"\n      [min]=\"$any(min)\"\n      [max]=\"$any(max)\"\n      [markerHandler]=\"markerHandler\"\n      [minLength]=\"minLength\"\n      [maxLength]=\"maxLength\"\n      [value]=\"value\"\n      (valueChange)=\"onRangeChange($event)\"\n    >\n      <ng-container footerFrom>\n        <ng-template [ngTemplateOutlet]=\"$any(footerToTemplate)\"> ></ng-template>\n      </ng-container>\n      <ng-container footerTo>\n        <ng-template [ngTemplateOutlet]=\"$any(footerFromTemplate)\"> ></ng-template>\n      </ng-container>\n    </prizm-calendar-range>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}:host._disabled{pointer-events:none}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}\n"], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "leadZero", "triggerOnMaskChange", "apm"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "component", type: i3.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i4.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i5.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "component", type: i6.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "component", type: i7.PrizmCalendarRangeComponent, selector: "prizm-calendar-range", inputs: ["defaultViewedMonth", "disabledItemHandler", "markerHandler", "items", "min", "max", "minLength", "maxLength", "value"], outputs: ["valueChange", "rangeChange"] }, { kind: "directive", type: i8.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i8.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateRangeComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtcmFuZ2UvaW5wdXQtZGF0ZS1yYW5nZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtcmFuZ2UvaW5wdXQtZGF0ZS1yYW5nZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDSixXQUFXLEVBRVgsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJbkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFckYsT0FBTyxFQUFFLDRC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bXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQUklaTV9JTlBVVF9EQVRFX1JBTkdFX1BST1ZJREVSUyB9IGZyb20gJy4vaW5wdXQtZGF0ZS1yYW5nZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQWJzdHJhY3RQcml6bU51bGxhYmxlQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L251bGxhYmxlLWNvbnRyb2wnO1xuaW1wb3J0IHsgUHJpem1EYXlSYW5nZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXktcmFuZ2UnO1xuaW1wb3J0IHsgUHJpem1XaXRoT3B0aW9uYWxNaW5NYXggfSBmcm9tICcuLi8uLi8uLi90eXBlcy93aXRoLW9wdGlvbmFsLW1pbi1tYXgnO1xuaW1wb3J0IHsgUHJpem1EYXkgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF5JztcbmltcG9ydCB7IFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZm9jdXNhYmxlLWVsZW1lbnQtYWNjZXNzb3InO1xuaW1wb3J0IHsgcHJpem1DcmVhdGVEYXRlUmFuZ2VNYXNrIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvbWFzay9jcmVhdGUtZGF0ZS1yYW5nZS1tYXNrJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bUJvb2xlYW5IYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBQcml6bU1hcmtlckhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9tYXJrZXItaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2RlZmF1bHQtbWFya2VyLWhhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQcml6bURheVJhbmdlUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvY2xhc3Nlcy9kYXktcmFuZ2UtcGVyaW9kJztcbmltcG9ydCB7IFBSSVpNX0ZJUlNUX0RBWSwgUFJJWk1fTEFTVF9EQVkgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF5cy5jb25zdCc7XG5pbXBvcnQgeyBQcml6bURheUxpa2UgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXktbGlrZSc7XG5pbXBvcnQgeyBQcml6bU1hcHBlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL21hcHBlcic7XG5pbXBvcnQgeyBQUklaTV9NQVhfREFZX1JBTkdFX0xFTkdUSF9NQVBQRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvbWF4LWRheS1yYW5nZS1sZW5ndGgtbWFwcGVyJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfU0VQQVJBVE9SLCBwcml6bUNoYW5nZURhdGVTZXBhcmF0b3IgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF0ZS1zZXBhcmF0b3InO1xuaW1wb3J0IHsgUFJJWk1fSVNfTU9CSUxFIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2lzLW1vYmlsZSc7XG5pbXBvcnQgeyBQcml6bURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaWFsb2dzL2RpYWxvZy9kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBQUklaTV9NT0JJTEVfQ0FMRU5EQVIgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvbW9iaWxlLWNhbGVuZGFyJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfRk9STUFUIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL2RhdGUtZm9ybWF0JztcbmltcG9ydCB7IFByaXptRGF0ZU1vZGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRlLW1vZGUnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9URVhUUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9pMThuJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfUkFOR0VfVkFMVUVfVFJBTlNGT1JNRVIgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvZGF0ZS1pbnB1dHMtdmFsdWUtdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IFByaXptQ29udHJvbFZhbHVlVHJhbnNmb3JtZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9jb250cm9sLXZhbHVlLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IHByaXptTnVsbGFibGVTYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb21tb24vbnVsbGFibGUtc2FtZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0U2l6ZSB9IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvcHJpem0taW5wdXQubW9kZWxzJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfUkFOR0VfRklMTEVSX0xFTkdUSCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXRlLWZpbGxlcnMnO1xuaW1wb3J0IHsgUFJJWk1fUkFOR0VfU0VQQVJBVE9SX0NIQVIgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF0ZS10aW1lJztcbmltcG9ydCB7IHByaXptU2V0TmF0aXZlRm9jdXNlZCB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2V0LW5hdGl2ZS1mb2N1c2VkJztcbmltcG9ydCB7IHByaXptSXNOYXRpdmVGb2N1c2VkSW4gfSBmcm9tICcuLi8uLi8uLi91dGlsJztcbmltcG9ydCB7IHByaXptSTE4bkluaXRXaXRoS2V5IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBgcHJpem0taW5wdXQtZGF0ZS1yYW5nZWAsXG4gIHRlbXBsYXRlVXJsOiBgLi9pbnB1dC1kYXRlLXJhbmdlLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vaW5wdXQtZGF0ZS1yYW5nZS5jb21wb25lbnQubGVzc2BdLFxuICBwcm92aWRlcnM6IFsuLi5wcml6bUkxOG5Jbml0V2l0aEtleShQUklaTV9EQVRFX1RFWFRTLCAnZGF0ZVRleHRzJyksIC4uLlBSSVpNX0lOUFVUX0RBVEVfUkFOR0VfUFJPVklERVJTXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dERhdGVSYW5nZUNvbXBvbmVudFxuICBleHRlbmRzIEFic3RyYWN0UHJpem1OdWxsYWJsZUNvbnRyb2w8UHJpem1EYXlSYW5nZT5cbiAgaW1wbGVtZW50cyBQcml6bVdpdGhPcHRpb25hbE1pbk1heDxQcml6bURheT4sIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yXG57XG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnRSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBDb250ZW50Q2hpbGQoJ2Zvb3RlckZyb20nLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHB1YmxpYyByZWFkb25seSBmb290ZXJGcm9tVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBAQ29udGVudENoaWxkKCdmb290ZXJUbycsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvb3RlclRvVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRpc2FibGVkSXRlbUhhbmRsZXI6IFByaXptQm9vbGVhbkhhbmRsZXI8UHJpem1EYXk+ID0gUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXJrZXJIYW5kbGVyOiBQcml6bU1hcmtlckhhbmRsZXIgPSBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGVmYXVsdFZpZXdlZE1vbnRoID0gUHJpem1Nb250aC5jdXJyZW50TG9jYWwoKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGl0ZW1zOiByZWFkb25seSBQcml6bURheVJhbmdlUGVyaW9kW10gPSBbXTtcblxuICBASW5wdXQoKSBmb3JjZUNsZWFyOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluOiBQcml6bURheSB8IG51bGwgPSBQUklaTV9GSVJTVF9EQVk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXg6IFByaXptRGF5IHwgbnVsbCA9IFBSSVpNX0xBU1RfREFZO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluTGVuZ3RoOiBQcml6bURheUxpa2UgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heExlbmd0aDogUHJpem1EYXlMaWtlIHwgbnVsbCA9IG51bGw7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9pbnB1dF9kYXRlX3JhbmdlJztcblxuICBvcGVuID0gZmFsc2U7XG5cbiAgcmVhZG9ubHkgbWF4TGVuZ3RoTWFwcGVyOiBQcml6bU1hcHBlcjxQcml6bURheSwgUHJpem1EYXk+ID0gUFJJWk1fTUFYX0RBWV9SQU5HRV9MRU5HVEhfTUFQUEVSO1xuICByZWFkb25seSBkYXRlRmlsbGVyJCA9IHRoaXMuZGF0ZVRleHRzJC5waXBlKFxuICAgIG1hcChkYXRlVGV4dHMgPT4gcHJpem1DaGFuZ2VEYXRlU2VwYXJhdG9yKGRhdGVUZXh0c1t0aGlzLmRhdGVGb3JtYXRdLCB0aGlzLmRhdGVTZXBhcmF0b3IpKVxuICApO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbGFiZWwgPSAn0JLRi9Cx0LXRgNC40YLQtSDQtNCw0YLRgyc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzaXplOiBQcml6bUlucHV0U2l6ZSA9ICdtJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG91dGVyID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBAU2VsZigpXG4gICAgQEluamVjdChOZ0NvbnRyb2wpXG4gICAgY29udHJvbDogTmdDb250cm9sIHwgbnVsbCxcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChJbmplY3RvcikgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChQUklaTV9JU19NT0JJTEUpIHByaXZhdGUgcmVhZG9ubHkgaXNNb2JpbGU6IGJvb2xlYW4sXG4gICAgQEluamVjdChQcml6bURpYWxvZ1NlcnZpY2UpIHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nU2VydmljZTogUHJpem1EaWFsb2dTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQUklaTV9NT0JJTEVfQ0FMRU5EQVIpXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2JpbGVDYWxlbmRhcjogVHlwZTxhbnk+IHwgbnVsbCxcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfRk9STUFUKSByZWFkb25seSBkYXRlRm9ybWF0OiBQcml6bURhdGVNb2RlLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9TRVBBUkFUT1IpIHJlYWRvbmx5IGRhdGVTZXBhcmF0b3I6IHN0cmluZyxcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfVEVYVFMpXG4gICAgcmVhZG9ubHkgZGF0ZVRleHRzJDogT2JzZXJ2YWJsZTxSZWNvcmQ8UHJpem1EYXRlTW9kZSwgc3RyaW5nPj4sXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfUkFOR0VfVkFMVUVfVFJBTlNGT1JNRVIpXG4gICAgb3ZlcnJpZGUgcmVhZG9ubHkgdmFsdWVUcmFuc2Zvcm1lcjogUHJpem1Db250cm9sVmFsdWVUcmFuc2Zvcm1lcjxQcml6bURheVJhbmdlIHwgbnVsbD4gfCBudWxsXG4gICkge1xuICAgIHN1cGVyKGNvbnRyb2wsIGNoYW5nZURldGVjdG9yUmVmLCB2YWx1ZVRyYW5zZm9ybWVyKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmF0aXZlRm9jdXNhYmxlRWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudCA/ICh0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KSA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudD8ubmF0aXZlRWxlbWVudFxuICAgICAgPyBwcml6bUlzTmF0aXZlRm9jdXNlZEluKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50KVxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29tcHV0ZWRNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNNb2JpbGUgJiYgISF0aGlzLm1vYmlsZUNhbGVuZGFyO1xuICB9XG5cbiAgcHVibGljIGdldCBjYW5PcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmludGVyYWN0aXZlICYmICF0aGlzLmNvbXB1dGVkTW9iaWxlO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkTWFzaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcml6bUNyZWF0ZURhdGVSYW5nZU1hc2sodGhpcy5kYXRlRm9ybWF0LCB0aGlzLmRhdGVTZXBhcmF0b3IpO1xuICB9XG5cbiAgZ2V0IHN0cmluZ1ZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU/LnRvU3RyaW5nKCkgPz8gJyc7XG4gIH1cblxuICBnZXQgYWN0aXZlUGVyaW9kKCk6IFByaXptRGF5UmFuZ2VQZXJpb2QgfCBudWxsIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT5cbiAgICAgICAgcHJpem1OdWxsYWJsZVNhbWUoXG4gICAgICAgICAgdGhpcy52YWx1ZSxcbiAgICAgICAgICBpdGVtLnJhbmdlLFxuICAgICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgICAgYS5mcm9tLmRheVNhbWUoYi5mcm9tLmRheUxpbWl0KHRoaXMubWluLCB0aGlzLm1heCkpICYmXG4gICAgICAgICAgICBhLnRvLmRheVNhbWUoYi50by5kYXlMaW1pdCh0aGlzLm1pbiwgdGhpcy5tYXgpKVxuICAgICAgICApXG4gICAgICApIHx8IG51bGxcbiAgICApO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYXRpdmVWYWx1ZSwgYWN0aXZlUGVyaW9kIH0gPSB0aGlzO1xuXG4gICAgaWYgKGFjdGl2ZVBlcmlvZCkge1xuICAgICAgcmV0dXJuIFN0cmluZyhhY3RpdmVQZXJpb2QpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLmdldEZvcm1hdHRlZERheVJhbmdlKHRoaXMuZGF0ZUZvcm1hdCwgdGhpcy5kYXRlU2VwYXJhdG9yKSA6IG5hdGl2ZVZhbHVlO1xuICB9XG5cbiAgZ2V0IGlubmVyUHNldWRvRm9jdXNlZCgpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMucHNldWRvRm9jdXNlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcGVuIHx8IHRoaXMuY29tcHV0ZWRGb2N1c2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBuYXRpdmVWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQudmFsdWUgOiBgYDtcbiAgfVxuXG4gIHNldCBuYXRpdmVWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoYGNsaWNrYClcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTW9iaWxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLm9uT3BlbkNoYW5nZSh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCAhPT0gUFJJWk1fREFURV9SQU5HRV9GSUxMRVJfTEVOR1RIKSB7XG4gICAgICBpZiAoIXZhbHVlKSB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gUHJpem1EYXlSYW5nZS5ub3JtYWxpemVQYXJzZSh2YWx1ZSwgdGhpcy5kYXRlRm9ybWF0KTtcblxuICAgIHRoaXMudXBkYXRlVmFsdWUoIXRoaXMubWluTGVuZ3RoICYmICF0aGlzLm1heExlbmd0aCA/IHBhcnNlZFZhbHVlIDogdGhpcy5jbGFtcFZhbHVlKHBhcnNlZFZhbHVlKSk7XG4gIH1cblxuICBwdWJsaWMgb25SYW5nZUNoYW5nZShyYW5nZTogUHJpem1EYXlSYW5nZSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuXG4gICAgaWYgKCFyYW5nZSkge1xuICAgICAgdGhpcy5uYXRpdmVWYWx1ZSA9IGBgO1xuICAgIH1cblxuICAgIGlmICghcHJpem1OdWxsYWJsZVNhbWU8UHJpem1EYXlSYW5nZT4odGhpcy52YWx1ZSwgcmFuZ2UsIChhLCBiKSA9PiBhLmRheVNhbWUoYikpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKHJhbmdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25JdGVtU2VsZWN0KGl0ZW06IHN0cmluZyB8IFByaXptRGF5UmFuZ2VQZXJpb2QpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtICE9PSBgc3RyaW5nYCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZShpdGVtLnJhbmdlLmRheUxpbWl0KHRoaXMubWluLCB0aGlzLm1heCkpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlUGVyaW9kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgICAgdGhpcy5uYXRpdmVWYWx1ZSA9IGBgO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkhvdmVyZWQoaG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlSG92ZXJlZChob3ZlcmVkKTtcbiAgfVxuXG4gIHB1YmxpYyBvblByZXNzZWQocHJlc3NlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUHJlc3NlZChwcmVzc2VkKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBQcml6bURheVJhbmdlIHwgbnVsbCk6IHZvaWQge1xuICAgIHN1cGVyLndyaXRlVmFsdWUodmFsdWUpO1xuICAgIHRoaXMubmF0aXZlVmFsdWUgPSB2YWx1ZSA/IHRoaXMuY29tcHV0ZWRWYWx1ZSA6IGBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgaXRlbVNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmRJbmRleChpdGVtID0+IFN0cmluZyhpdGVtKSA9PT0gdGhpcy5uYXRpdmVWYWx1ZSkgIT09IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgfVxuXG4gIHByaXZhdGUgZm9jdXNJbnB1dChwcmV2ZW50U2Nyb2xsID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICBwcml6bVNldE5hdGl2ZUZvY3VzZWQodGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50LCB0cnVlLCBwcmV2ZW50U2Nyb2xsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsYW1wVmFsdWUodmFsdWU6IFByaXptRGF5UmFuZ2UpOiBQcml6bURheVJhbmdlIHtcbiAgICBjb25zdCBjbGFtcGVkQm90dG9tID1cbiAgICAgIHRoaXMubWluTGVuZ3RoICYmIHZhbHVlLmZyb20uYXBwZW5kKHRoaXMubWluTGVuZ3RoKS5kYXlBZnRlcih2YWx1ZS50bylcbiAgICAgICAgPyBuZXcgUHJpem1EYXlSYW5nZSh2YWx1ZS5mcm9tLCB2YWx1ZS5mcm9tLmFwcGVuZCh0aGlzLm1pbkxlbmd0aCkuYXBwZW5kKHsgZGF5OiAtMSB9KSlcbiAgICAgICAgOiB2YWx1ZTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZU1heCA9IHRoaXMubWF4TGVuZ3RoXG4gICAgICA/IGNsYW1wZWRCb3R0b20uZnJvbS5hcHBlbmQodGhpcy5tYXhMZW5ndGgpLmFwcGVuZCh7IGRheTogLTEgfSlcbiAgICAgIDogdGhpcy5tYXg7XG5cbiAgICByZXR1cm4gY2xhbXBlZEJvdHRvbS50by5kYXlBZnRlcihhdmFpbGFibGVNYXggYXMgYW55KVxuICAgICAgPyBuZXcgUHJpem1EYXlSYW5nZShjbGFtcGVkQm90dG9tLmZyb20sIGF2YWlsYWJsZU1heCBhcyBhbnkpXG4gICAgICA6IGNsYW1wZWRCb3R0b207XG4gIH1cblxuICBwcml2YXRlIGdldERhdGVSYW5nZUZpbGxlcihkYXRlRmlsbGVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtkYXRlRmlsbGVyfSR7UFJJWk1fUkFOR0VfU0VQQVJBVE9SX0NIQVJ9JHtkYXRlRmlsbGVyfWA7XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gIGNsYXNzPVwiei1ob3N0ZWRcIlxuICBbY2FuT3Blbl09XCJjYW5PcGVuXCJcbiAgW2NvbnRlbnRdPVwiZHJvcGRvd25cIlxuICBbY2xvc2VCeUVzY109XCJ0cnVlXCJcbiAgW2lzT3Blbl09XCJvcGVuICYmIGNhbk9wZW5cIlxuICAoaXNPcGVuQ2hhbmdlKT1cIm9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgcHJpem1Ecm9wZG93bkhvc3RXaWR0aD1cImF1dG9cIlxuPlxuICA8cHJpem0taW5wdXQtbGF5b3V0IFtmb3JjZUNsZWFyXT1cImZvcmNlQ2xlYXJcIiBbbGFiZWxdPVwibGFiZWxcIiBbb3V0ZXJdPVwib3V0ZXJcIiBbc2l6ZV09XCJzaXplXCI+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImlucHV0LXNlYXJjaFwiXG4gICAgICAjZm9jdXNhYmxlRWxlbWVudFJlZlxuICAgICAgW21hc2tdPVwiY29tcHV0ZWRNYXNrXCJcbiAgICAgIFtzaG93TWFza1R5cGVkXT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXNlZFwiXG4gICAgICBbZHJvcFNwZWNpYWxDaGFyYWN0ZXJzXT1cImZhbHNlXCJcbiAgICAgIFtyZWFkT25seV09XCJyZWFkT25seVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgW2Rpc2FibGVkXT1cImNvbXB1dGVkRGlzYWJsZWRcIlxuICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICAgIFtuZ01vZGVsXT1cInN0cmluZ1ZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50IHx8ICcnKVwiXG4gICAgICBwcml6bUlucHV0XG4gICAgLz5cblxuICAgIDxuZy1jb250YWluZXIgcHJpem0taW5wdXQtcmlnaHQ+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCJcbiAgICAgICAgKGNsaWNrKT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXMoKVwiXG4gICAgICAgIHByaXptSW5wdXRJY29uQnV0dG9uPVwiZGF0ZS1jYWxlbmRhci1yYW5nZVwiXG4gICAgICA+PC9idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvcHJpem0taW5wdXQtbGF5b3V0PlxuICA8bmctdGVtcGxhdGUgI2Ryb3Bkb3duPlxuICAgIDxwcml6bS1jYWxlbmRhci1yYW5nZVxuICAgICAgW3N0eWxlLi0tcHJpem0taW5wdXQtbGF5b3V0LXdpZHRoXT1cIicxMDAlJ1wiXG4gICAgICBbc3R5bGUuLS1wcml6bS1kcm9wZG93bi1ob3N0LXdpZHRoXT1cIicxMDAlJ1wiXG4gICAgICBbZGVmYXVsdFZpZXdlZE1vbnRoXT1cImRlZmF1bHRWaWV3ZWRNb250aFwiXG4gICAgICBbZGlzYWJsZWRJdGVtSGFuZGxlcl09XCJkaXNhYmxlZEl0ZW1IYW5kbGVyXCJcbiAgICAgIFtpdGVtc109XCJpdGVtc1wiXG4gICAgICBbbWluXT1cIiRhbnkobWluKVwiXG4gICAgICBbbWF4XT1cIiRhbnkobWF4KVwiXG4gICAgICBbbWFya2VySGFuZGxlcl09XCJtYXJrZXJIYW5kbGVyXCJcbiAgICAgIFttaW5MZW5ndGhdPVwibWluTGVuZ3RoXCJcbiAgICAgIFttYXhMZW5ndGhdPVwibWF4TGVuZ3RoXCJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAodmFsdWVDaGFuZ2UpPVwib25SYW5nZUNoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyIGZvb3RlckZyb20+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCIkYW55KGZvb3RlclRvVGVtcGxhdGUpXCI+ID48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyIGZvb3RlclRvPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiJGFueShmb290ZXJGcm9tVGVtcGxhdGUpXCI+ID48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9wcml6bS1jYWxlbmRhci1yYW5nZT5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cbiJdfQ==