import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Injector, Input, Optional, Self, ViewChild, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PRIZM_INPUT_DATE_PROVIDERS } from './input-date.providers';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_DATE_FILLER_LENGTH, PRIZM_DATE_FORMAT, PRIZM_DATE_SEPARATOR, PRIZM_FIRST_DAY, PRIZM_LAST_DAY, prizmChangeDateSeparator, PrizmDay, PrizmMonth, } from '../../../@core/date-time';
import { PRIZM_IS_MOBILE } from '../../../tokens/is-mobile';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { PrizmDialogService } from '../../dialogs/dialog';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PRIZM_MOBILE_CALENDAR } from '../../../tokens/mobile-calendar';
import { PRIZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PRIZM_DATE_TEXTS } from '../../../tokens/i18n';
import { prizmIsNativeFocusedIn } from '../../../util';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { prizmI18nInitWithKey } from '../../../services';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-mask";
import * as i3 from "../../../directives/prevent-default/prevent-default.directive";
import * as i4 from "../../calendar/calendar.component";
import * as i5 from "../common/input-layout/input-layout.component";
import * as i6 from "../common/input-icon-button/input-icon-button.component";
import * as i7 from "../input-text/input-text.component";
import * as i8 from "../../link/link.component";
import * as i9 from "@angular/forms";
import * as i10 from "../../dropdowns/dropdown-host/dropdown-host.component";
import * as i11 from "../../dialogs/dialog";
import * as i12 from "rxjs";
/**
 * @deprecated
 * use PrizmInputLayoutDateComponent
 * */
export class PrizmInputDateComponent extends AbstractPrizmNullableControl {
    onClick() {
        if (!this.isMobile) {
            this.open = !this.open;
        }
    }
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
        this.month = null;
        this.mask = prizmCreateDateNgxMask(this.dateFormat, this.dateSeparator);
        this.min = PRIZM_FIRST_DAY;
        this.placeholder = '';
        this.forceClear = null;
        this.max = PRIZM_LAST_DAY;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.markerHandler = PRIZM_DEFAULT_MARKER_HANDLER;
        this.items = [];
        this.defaultActiveYearMonth = PrizmMonth.currentLocal();
        this.label = 'Выберите дату';
        this.size = 'm';
        this.outer = false;
        this.extraButtonInjector = this.injector;
        this.testId_ = 'ui_input_date';
        this.open = false;
        this.filler$ = this.dateTexts$.pipe(map(dateTexts => prizmChangeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator)));
    }
    ngOnInit() {
        super.ngOnInit();
        this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
    }
    get computedMobile() {
        return this.isMobile && !!this.mobileCalendar;
    }
    get computedActiveYearMonth() {
        if (this.items[0] && this.value && this.value.daySame(this.items[0].day)) {
            return this.items[0].displayDay;
        }
        return this.month || this.value || this.defaultActiveYearMonth;
    }
    get canOpen() {
        return this.interactive && !this.computedMobile;
    }
    get stringValue() {
        return this.value?.toString() ?? '';
    }
    get computedMask() {
        return this.mask;
    }
    onValueChange(value) {
        if (this.control) {
            this.control.updateValueAndValidity({ emitEvent: false });
        }
        // if (value == null) {
        //     this.onOpenChange(true);
        // }
        if (!value || value.length !== PRIZM_DATE_FILLER_LENGTH) {
            if (!value)
                this.updateValue(null);
            return;
        }
        this.updateValue(value.length !== PRIZM_DATE_FILLER_LENGTH ? null : PrizmDay.normalizeParse(value, this.dateFormat));
    }
    onDayClick(value) {
        this.updateValue(value);
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
    }
    setDisabledState() {
        super.setDisabledState();
        this.open = false;
    }
    writeValue(value) {
        super.writeValue(value);
    }
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return this.focusableElement?.nativeElement
            ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
            : false;
    }
    valueIdenticalComparator(oldValue, newValue) {
        return prizmNullableSame(oldValue, newValue, (a, b) => a.daySame(b));
    }
}
PrizmInputDateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: ChangeDetectorRef }, { token: Injector }, { token: PRIZM_IS_MOBILE }, { token: PrizmDialogService }, { token: PRIZM_MOBILE_CALENDAR, optional: true }, { token: PRIZM_DATE_FORMAT }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputDateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputDateComponent, selector: "prizm-input-date", inputs: { min: "min", placeholder: "placeholder", forceClear: "forceClear", max: "max", disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", items: "items", defaultActiveYearMonth: "defaultActiveYearMonth", label: "label", size: "size", outer: "outer", extraButtonInjector: "extraButtonInjector" }, host: { listeners: { "click": "onClick()" } }, providers: [...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'), ...PRIZM_INPUT_DATE_PROVIDERS], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [isOpen]=\"open && canOpen\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout [label]=\"label\" [outer]=\"outer\" [forceClear]=\"forceClear\" [size]=\"size\">\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"computedMask\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [placeholder]=\"placeholder\"\n      [readonly]=\"readOnly\"\n      [disabled]=\"computedDisabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"stringValue\"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <button [interactive]=\"true\" prizmInputIconButton=\"date-calendar-blank\"></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n  <ng-template #dropdown>\n    <prizm-calendar\n      [min]=\"min\"\n      [max]=\"max\"\n      [markerHandler]=\"markerHandler\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [month]=\"computedActiveYearMonth\"\n      [value]=\"value\"\n      (dayClick)=\"onDayClick($event)\"\n      (monthChange)=\"onMonthChange($event)\"\n      prizmPreventDefault=\"mousedown\"\n      automation-id=\"prizm-input-date__calendar\"\n    ></prizm-calendar>\n    <div class=\"z-button\" *ngIf=\"items.length === 1\" prizmPreventDefault=\"mousedown\">\n      <button (click)=\"onDayClick(items[0].day)\" prizmLink type=\"button\">\n        {{ items[0] }}\n      </button>\n    </div>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.z-button{display:flex;height:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--prizm-base-03)}.z-button button{flex:1;text-align:center}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "directive", type: i3.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "component", type: i4.PrizmCalendarComponent, selector: "prizm-calendar", inputs: ["month", "value", "disabledItemHandler", "min", "daysWithStatus", "max", "minViewedMonth", "maxViewedMonth", "hoveredItem", "showAdjacent", "markerHandler"], outputs: ["dayClick", "monthChange", "hoveredItemChange"] }, { kind: "component", type: i5.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i6.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i7.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "component", type: i8.PrizmLinkComponent, selector: "a[prizmLink], button[prizmLink]", inputs: ["pseudo", "icon", "iconAlign", "iconRotated", "mode"], exportAs: ["prizmLink"] }, { kind: "directive", type: i9.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i9.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i9.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i10.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputDateComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputDateComponent.prototype, "markerHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmInputDateComponent.prototype, "items", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateComponent.prototype, "defaultActiveYearMonth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateComponent.prototype, "label", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputDateComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateComponent.prototype, "outer", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputDateComponent.prototype, "extraButtonInjector", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-date`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'), ...PRIZM_INPUT_DATE_PROVIDERS], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [isOpen]=\"open && canOpen\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout [label]=\"label\" [outer]=\"outer\" [forceClear]=\"forceClear\" [size]=\"size\">\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"computedMask\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [placeholder]=\"placeholder\"\n      [readonly]=\"readOnly\"\n      [disabled]=\"computedDisabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"stringValue\"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <button [interactive]=\"true\" prizmInputIconButton=\"date-calendar-blank\"></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n  <ng-template #dropdown>\n    <prizm-calendar\n      [min]=\"min\"\n      [max]=\"max\"\n      [markerHandler]=\"markerHandler\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [month]=\"computedActiveYearMonth\"\n      [value]=\"value\"\n      (dayClick)=\"onDayClick($event)\"\n      (monthChange)=\"onMonthChange($event)\"\n      prizmPreventDefault=\"mousedown\"\n      automation-id=\"prizm-input-date__calendar\"\n    ></prizm-calendar>\n    <div class=\"z-button\" *ngIf=\"items.length === 1\" prizmPreventDefault=\"mousedown\">\n      <button (click)=\"onDayClick(items[0].day)\" prizmLink type=\"button\">\n        {{ items[0] }}\n      </button>\n    </div>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.z-button{display:flex;height:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--prizm-base-03)}.z-button button{flex:1;text-align:center}\n"] }]
        }], ctorParameters: function () { return [{ type: i9.NgControl, decorators: [{
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
                }] }, { type: i11.PrizmDialogService, decorators: [{
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
                }] }, { type: i12.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_TEXTS]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [PRIZM_DATE_VALUE_TRANSFORMER]
                }] }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: ElementRef }]
            }], min: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], forceClear: [{
                type: Input
            }], max: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], markerHandler: [{
                type: Input
            }], items: [{
                type: Input
            }], defaultActiveYearMonth: [{
                type: Input
            }], label: [{
                type: Input
            }], size: [{
                type: Input
            }], outer: [{
                type: Input
            }], extraButtonInjector: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: [`click`]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUvZGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUvZGF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFFSixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBbUIsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsZUFBZSxFQUNmLGNBQWMsRUFDZCx3QkFBd0IsRUFDeEIsUUFBUSxFQUNSLFVBQVUsR0FDWCxNQUFNLDBCQUEwQixDQUFDO0FBQ2xDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVE1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUd2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFB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QXVCO2tCQVBuQyxTQUFTOytCQUNFLGtCQUFrQixtQkFHWCx1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsRUFBRSxHQUFHLDBCQUEwQixDQUFDOzswQkE4RS9GLFFBQVE7OzBCQUNSLElBQUk7OzBCQUNKLE1BQU07MkJBQUMsU0FBUzs7MEJBRWhCLE1BQU07MkJBQUMsaUJBQWlCOzswQkFDeEIsTUFBTTsyQkFBQyxRQUFROzswQkFDZixNQUFNOzJCQUFDLGVBQWU7OzBCQUN0QixNQUFNOzJCQUFDLGtCQUFrQjs7MEJBQ3pCLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMscUJBQXFCOzswQkFFNUIsTUFBTTsyQkFBQyxpQkFBaUI7OzBCQUN4QixNQUFNOzJCQUFDLG9CQUFvQjs7MEJBQzNCLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFFdkIsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyw0QkFBNEI7NENBdkZ0QixnQkFBZ0I7c0JBRC9CLFNBQVM7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQVN0RCxHQUFHO3NCQUZGLEtBQUs7Z0JBTU4sV0FBVztzQkFGVixLQUFLO2dCQUlHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBSU4sR0FBRztzQkFGRixLQUFLO2dCQU1OLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTixhQUFhO3NCQUZaLEtBQUs7Z0JBTU4sS0FBSztzQkFGSixLQUFLO2dCQU1OLHNCQUFzQjtzQkFGckIsS0FBSztnQkFNTixLQUFLO3NCQUZKLEtBQUs7Z0JBTU4sSUFBSTtzQkFGSCxLQUFLO2dCQU1OLEtBQUs7c0JBRkosS0FBSztnQkFNTixtQkFBbUI7c0JBRmxCLEtBQUs7Z0JBZ0JDLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBUeXBlLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQUklaTV9JTlBVVF9EQVRFX1BST1ZJREVSUyB9IGZyb20gJy4vaW5wdXQtZGF0ZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7XG4gIFBSSVpNX0RBVEVfRklMTEVSX0xFTkdUSCxcbiAgUFJJWk1fREFURV9GT1JNQVQsXG4gIFBSSVpNX0RBVEVfU0VQQVJBVE9SLFxuICBQUklaTV9GSVJTVF9EQVksXG4gIFBSSVpNX0xBU1RfREFZLFxuICBwcml6bUNoYW5nZURhdGVTZXBhcmF0b3IsXG4gIFByaXptRGF5LFxuICBQcml6bU1vbnRoLFxufSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgUFJJWk1fSVNfTU9CSUxFIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2lzLW1vYmlsZSc7XG5pbXBvcnQge1xuICBQcml6bUJvb2xlYW5IYW5kbGVyLFxuICBQcml6bUNvbnRleHRXaXRoSW1wbGljaXQsXG4gIFByaXptQ29udHJvbFZhbHVlVHJhbnNmb3JtZXIsXG4gIFByaXptRGF0ZU1vZGUsXG4gIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yLFxufSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBwcml6bU51bGxhYmxlU2FtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29tbW9uL251bGxhYmxlLXNhbWUnO1xuaW1wb3J0IHsgUHJpem1XaXRoT3B0aW9uYWxNaW5NYXggfSBmcm9tICcuLi8uLi8uLi90eXBlcy93aXRoLW9wdGlvbmFsLW1pbi1tYXgnO1xuaW1wb3J0IHsgUHJpem1NYXJrZXJIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvbWFya2VyLWhhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9kaWFsb2cnO1xuaW1wb3J0IHsgUFJJWk1fREVGQVVMVF9NQVJLRVJfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9kZWZhdWx0LW1hcmtlci1oYW5kbGVyJztcbmltcG9ydCB7IFByaXptTmFtZWREYXkgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9jbGFzc2VzL25hbWVkLWRheSc7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBwcml6bUNyZWF0ZURhdGVOZ3hNYXNrIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvbWFzay9jcmVhdGUtZGF0ZS1tYXNrJztcbmltcG9ydCB7IEFic3RyYWN0UHJpem1OdWxsYWJsZUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9udWxsYWJsZS1jb250cm9sJztcbmltcG9ydCB7IFBSSVpNX01PQklMRV9DQUxFTkRBUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9tb2JpbGUtY2FsZW5kYXInO1xuaW1wb3J0IHsgUFJJWk1fREFURV9WQUxVRV9UUkFOU0ZPUk1FUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWlucHV0cy12YWx1ZS10cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9URVhUUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9pMThuJztcbmltcG9ydCB7IFByaXptSW5wdXRTaXplIH0gZnJvbSAnLi4vY29tbW9uL21vZGVscy9wcml6bS1pbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWRJbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9SSUdIVF9CVVRUT05TIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2RhdGUtZXh0cmEtYnV0dG9ucyc7XG5pbXBvcnQgeyBQcml6bURhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRlLWJ1dHRvbic7XG5pbXBvcnQgeyBwcml6bUkxOG5Jbml0V2l0aEtleSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIFByaXptSW5wdXRMYXlvdXREYXRlQ29tcG9uZW50XG4gKiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBgcHJpem0taW5wdXQtZGF0ZWAsXG4gIHRlbXBsYXRlVXJsOiBgLi9kYXRlLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vZGF0ZS5jb21wb25lbnQubGVzc2BdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbLi4ucHJpem1JMThuSW5pdFdpdGhLZXkoUFJJWk1fREFURV9URVhUUywgJ2RhdGVUZXh0cycpLCAuLi5QUklaTV9JTlBVVF9EQVRFX1BST1ZJREVSU10sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXREYXRlQ29tcG9uZW50XG4gIGV4dGVuZHMgQWJzdHJhY3RQcml6bU51bGxhYmxlQ29udHJvbDxQcml6bURheT5cbiAgaW1wbGVtZW50cyBQcml6bVdpdGhPcHRpb25hbE1pbk1heDxQcml6bURheT4sIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yXG57XG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnRSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIHByaXZhdGUgbW9udGg6IFByaXptTW9udGggfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgbWFzayA9IHByaXptQ3JlYXRlRGF0ZU5neE1hc2sodGhpcy5kYXRlRm9ybWF0LCB0aGlzLmRhdGVTZXBhcmF0b3IpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluID0gUFJJWk1fRklSU1RfREFZO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcGxhY2Vob2xkZXIgPSAnJztcblxuICBASW5wdXQoKSBmb3JjZUNsZWFyOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXggPSBQUklaTV9MQVNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRpc2FibGVkSXRlbUhhbmRsZXI6IFByaXptQm9vbGVhbkhhbmRsZXI8UHJpem1EYXk+ID0gUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXJrZXJIYW5kbGVyOiBQcml6bU1hcmtlckhhbmRsZXIgPSBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaXRlbXM6IHJlYWRvbmx5IFByaXptTmFtZWREYXlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGVmYXVsdEFjdGl2ZVllYXJNb250aCA9IFByaXptTW9udGguY3VycmVudExvY2FsKCk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBsYWJlbCA9ICfQktGL0LHQtdGA0LjRgtC1INC00LDRgtGDJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNpemU6IFByaXptSW5wdXRTaXplID0gJ20nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3V0ZXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGV4dHJhQnV0dG9uSW5qZWN0b3I6IEluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X2RhdGUnO1xuXG4gIHB1YmxpYyBvcGVuID0gZmFsc2U7XG5cbiAgcmVhZG9ubHkgdHlwZSE6IFByaXptQ29udGV4dFdpdGhJbXBsaWNpdDx1bmtub3duPjtcblxuICByZWFkb25seSBmaWxsZXIkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmRhdGVUZXh0cyQucGlwZShcbiAgICBtYXAoZGF0ZVRleHRzID0+IHByaXptQ2hhbmdlRGF0ZVNlcGFyYXRvcihkYXRlVGV4dHNbdGhpcy5kYXRlRm9ybWF0XSwgdGhpcy5kYXRlU2VwYXJhdG9yKSlcbiAgKTtcbiAgcHVibGljIHJpZ2h0QnV0dG9ucyQhOiBCZWhhdmlvclN1YmplY3Q8UHJpem1EYXRlQnV0dG9uW10+O1xuXG4gIEBIb3N0TGlzdGVuZXIoYGNsaWNrYClcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTW9iaWxlKSB7XG4gICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIEBJbmplY3QoTmdDb250cm9sKVxuICAgIGNvbnRyb2w6IE5nQ29udHJvbCB8IG51bGwsXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoSW5qZWN0b3IpIHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoUFJJWk1fSVNfTU9CSUxFKSBwcml2YXRlIHJlYWRvbmx5IGlzTW9iaWxlOiBib29sZWFuLFxuICAgIEBJbmplY3QoUHJpem1EaWFsb2dTZXJ2aWNlKSBwcml2YXRlIHJlYWRvbmx5IGRpYWxvZ1NlcnZpY2U6IFByaXptRGlhbG9nU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUFJJWk1fTU9CSUxFX0NBTEVOREFSKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9iaWxlQ2FsZW5kYXI6IFR5cGU8YW55PiB8IG51bGwsXG4gICAgQEluamVjdChQUklaTV9EQVRFX0ZPUk1BVCkgcmVhZG9ubHkgZGF0ZUZvcm1hdDogUHJpem1EYXRlTW9kZSxcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfU0VQQVJBVE9SKSByZWFkb25seSBkYXRlU2VwYXJhdG9yOiBzdHJpbmcsXG4gICAgQEluamVjdChQUklaTV9EQVRFX1RFWFRTKVxuICAgIHJlYWRvbmx5IGRhdGVUZXh0cyQ6IE9ic2VydmFibGU8UmVjb3JkPFByaXptRGF0ZU1vZGUsIHN0cmluZz4+LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQUklaTV9EQVRFX1ZBTFVFX1RSQU5TRk9STUVSKVxuICAgIG92ZXJyaWRlIHJlYWRvbmx5IHZhbHVlVHJhbnNmb3JtZXI6IFByaXptQ29udHJvbFZhbHVlVHJhbnNmb3JtZXI8UHJpem1EYXkgfCBudWxsPiB8IG51bGxcbiAgKSB7XG4gICAgc3VwZXIoY29udHJvbCwgY2hhbmdlRGV0ZWN0b3JSZWYsIHZhbHVlVHJhbnNmb3JtZXIpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5yaWdodEJ1dHRvbnMkID0gdGhpcy5leHRyYUJ1dHRvbkluamVjdG9yLmdldChQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMpO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzTW9iaWxlICYmICEhdGhpcy5tb2JpbGVDYWxlbmRhcjtcbiAgfVxuXG4gIGdldCBjb21wdXRlZEFjdGl2ZVllYXJNb250aCgpOiBQcml6bU1vbnRoIHtcbiAgICBpZiAodGhpcy5pdGVtc1swXSAmJiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUuZGF5U2FtZSh0aGlzLml0ZW1zWzBdLmRheSkpIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zWzBdLmRpc3BsYXlEYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubW9udGggfHwgdGhpcy52YWx1ZSB8fCB0aGlzLmRlZmF1bHRBY3RpdmVZZWFyTW9udGg7XG4gIH1cblxuICBnZXQgY2FuT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmFjdGl2ZSAmJiAhdGhpcy5jb21wdXRlZE1vYmlsZTtcbiAgfVxuXG4gIGdldCBzdHJpbmdWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy50b1N0cmluZygpID8/ICcnO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkTWFzaygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1hc2s7XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIC8vIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgLy8gICAgIHRoaXMub25PcGVuQ2hhbmdlKHRydWUpO1xuICAgIC8vIH1cblxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUubGVuZ3RoICE9PSBQUklaTV9EQVRFX0ZJTExFUl9MRU5HVEgpIHtcbiAgICAgIGlmICghdmFsdWUpIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZShcbiAgICAgIHZhbHVlLmxlbmd0aCAhPT0gUFJJWk1fREFURV9GSUxMRVJfTEVOR1RIID8gbnVsbCA6IFByaXptRGF5Lm5vcm1hbGl6ZVBhcnNlKHZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRheUNsaWNrKHZhbHVlOiBQcml6bURheSk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG9uSG92ZXJlZChob3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVIb3ZlcmVkKGhvdmVyZWQpO1xuICB9XG5cbiAgcHVibGljIG9uTW9udGhDaGFuZ2UobW9udGg6IFByaXptTW9udGgpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRoID0gbW9udGg7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICB9XG5cbiAgcHVibGljIG9uRm9jdXNlZChmb2N1c2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVGb2N1c2VkKGZvY3VzZWQpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHNldERpc2FibGVkU3RhdGUoKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0RGlzYWJsZWRTdGF0ZSgpO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IFByaXptRGF5IHwgbnVsbCk6IHZvaWQge1xuICAgIHN1cGVyLndyaXRlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50ID8gKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50XG4gICAgICA/IHByaXptSXNOYXRpdmVGb2N1c2VkSW4odGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHZhbHVlSWRlbnRpY2FsQ29tcGFyYXRvcihvbGRWYWx1ZTogUHJpem1EYXkgfCBudWxsLCBuZXdWYWx1ZTogUHJpem1EYXkgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByaXptTnVsbGFibGVTYW1lKG9sZFZhbHVlLCBuZXdWYWx1ZSwgKGEsIGIpID0+IGEuZGF5U2FtZShiKSk7XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gIGNsYXNzPVwiei1ob3N0ZWRcIlxuICBbY2FuT3Blbl09XCJjYW5PcGVuXCJcbiAgW2lzT3Blbl09XCJvcGVuICYmIGNhbk9wZW5cIlxuICBbY29udGVudF09XCJkcm9wZG93blwiXG4gIFtjbG9zZUJ5RXNjXT1cInRydWVcIlxuICAoaXNPcGVuQ2hhbmdlKT1cIm9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgcHJpem1Ecm9wZG93bkhvc3RXaWR0aD1cImF1dG9cIlxuPlxuICA8cHJpem0taW5wdXQtbGF5b3V0IFtsYWJlbF09XCJsYWJlbFwiIFtvdXRlcl09XCJvdXRlclwiIFtmb3JjZUNsZWFyXT1cImZvcmNlQ2xlYXJcIiBbc2l6ZV09XCJzaXplXCI+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImlucHV0LXNlYXJjaFwiXG4gICAgICAjZm9jdXNhYmxlRWxlbWVudFJlZlxuICAgICAgW21hc2tdPVwiY29tcHV0ZWRNYXNrXCJcbiAgICAgIFtzaG93TWFza1R5cGVkXT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXNlZFwiXG4gICAgICBbZHJvcFNwZWNpYWxDaGFyYWN0ZXJzXT1cImZhbHNlXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbcmVhZG9ubHldPVwicmVhZE9ubHlcIlxuICAgICAgW2Rpc2FibGVkXT1cImNvbXB1dGVkRGlzYWJsZWRcIlxuICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICAgIFtuZ01vZGVsXT1cInN0cmluZ1ZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50IHx8ICcnKVwiXG4gICAgICBwcml6bUlucHV0XG4gICAgLz5cbiAgICA8bmctY29udGFpbmVyIHByaXptLWlucHV0LXJpZ2h0PlxuICAgICAgPGJ1dHRvbiBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiIHByaXptSW5wdXRJY29uQnV0dG9uPVwiZGF0ZS1jYWxlbmRhci1ibGFua1wiPjwvYnV0dG9uPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIHJpZ2h0QnV0dG9ucyQgfCBhc3luY1wiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvbi50ZW1wbGF0ZVwiPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvcHJpem0taW5wdXQtbGF5b3V0PlxuICA8bmctdGVtcGxhdGUgI2Ryb3Bkb3duPlxuICAgIDxwcml6bS1jYWxlbmRhclxuICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgW21heF09XCJtYXhcIlxuICAgICAgW21hcmtlckhhbmRsZXJdPVwibWFya2VySGFuZGxlclwiXG4gICAgICBbZGlzYWJsZWRJdGVtSGFuZGxlcl09XCJkaXNhYmxlZEl0ZW1IYW5kbGVyXCJcbiAgICAgIFttb250aF09XCJjb21wdXRlZEFjdGl2ZVllYXJNb250aFwiXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgKGRheUNsaWNrKT1cIm9uRGF5Q2xpY2soJGV2ZW50KVwiXG4gICAgICAobW9udGhDaGFuZ2UpPVwib25Nb250aENoYW5nZSgkZXZlbnQpXCJcbiAgICAgIHByaXptUHJldmVudERlZmF1bHQ9XCJtb3VzZWRvd25cIlxuICAgICAgYXV0b21hdGlvbi1pZD1cInByaXptLWlucHV0LWRhdGVfX2NhbGVuZGFyXCJcbiAgICA+PC9wcml6bS1jYWxlbmRhcj5cbiAgICA8ZGl2IGNsYXNzPVwiei1idXR0b25cIiAqbmdJZj1cIml0ZW1zLmxlbmd0aCA9PT0gMVwiIHByaXptUHJldmVudERlZmF1bHQ9XCJtb3VzZWRvd25cIj5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uRGF5Q2xpY2soaXRlbXNbMF0uZGF5KVwiIHByaXptTGluayB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgIHt7IGl0ZW1zWzBdIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cbiJdfQ==