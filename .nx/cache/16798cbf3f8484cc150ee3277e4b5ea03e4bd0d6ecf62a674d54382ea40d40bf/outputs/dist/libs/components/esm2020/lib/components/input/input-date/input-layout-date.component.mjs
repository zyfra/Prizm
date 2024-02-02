import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostBinding, Inject, Injector, Input, Optional, ViewChild, } from '@angular/core';
import { Observable } from 'rxjs';
import { PRIZM_INPUT_DATE_PROVIDERS } from './input-date.providers';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PRIZM_DATE_FILLER_LENGTH, PRIZM_DATE_FORMAT, PRIZM_DATE_SEPARATOR, PRIZM_FIRST_DAY, PRIZM_LAST_DAY, PrizmDay, PrizmMonth, } from '../../../@core/date-time';
import { PrizmDialogService } from '../../dialogs/dialog';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { PRIZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PRIZM_DATE_TEXTS } from '../../../tokens/i18n';
import { prizmIsNativeFocusedIn } from '../../../util';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common';
import { prizmI18nInitWithKey } from '../../../services';
import { CommonModule } from '@angular/common';
import { PolymorphOutletDirective, PrizmLifecycleModule, PrizmPreventDefaultModule, PrizmValueAccessorModule, } from '../../../directives';
import { PrizmMaskModule } from '../../../modules';
import { PrizmCalendarModule } from '../../calendar';
import { PrizmInputTextModule } from '../input-text';
import { PrizmIconComponent } from '../../icon';
import { PrizmLinkModule } from '../../link';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../directives/lifecycle/lifecycle.directive";
import * as i3 from "ngx-mask";
import * as i4 from "../../../directives/prevent-default/prevent-default.directive";
import * as i5 from "../../calendar/calendar.component";
import * as i6 from "../common/input-icon-button/input-icon-button.component";
import * as i7 from "../common/input-layout/input-layout-right.directive";
import * as i8 from "../input-text/input-text.component";
import * as i9 from "../../link/link.component";
import * as i10 from "@angular/forms";
import * as i11 from "../../dialogs/dialog";
import * as i12 from "rxjs";
export class PrizmInputLayoutDateComponent extends PrizmInputNgControl {
    constructor(injector, dialogService, dateFormat, dateSeparator, dateTexts$, valueTransformer) {
        super(injector, valueTransformer);
        this.dialogService = dialogService;
        this.dateFormat = dateFormat;
        this.dateSeparator = dateSeparator;
        this.dateTexts$ = dateTexts$;
        this.nativeElementType = 'input-date';
        this.hasClearButton = true;
        this.month = null;
        this.mask = prizmCreateDateNgxMask(this.dateFormat, this.dateSeparator);
        this.min = PRIZM_FIRST_DAY;
        this.placeholder = '';
        this.max = PRIZM_LAST_DAY;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.markerHandler = PRIZM_DEFAULT_MARKER_HANDLER;
        this.items = [];
        this.defaultActiveYearMonth = PrizmMonth.currentLocal();
        this.testId_ = 'ui_input_date';
        this.width = 'auto';
        this.open = false;
        this.extraButtonInjector = injector;
    }
    ngOnInit() {
        super.ngOnInit();
        this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
    }
    get computedActiveYearMonth() {
        if (this.items[0] && this.value && this.value.daySame(this.items[0].day)) {
            return this.items[0].displayDay;
        }
        return this.month || this.value || this.defaultActiveYearMonth;
    }
    get canOpen() {
        return !this.disabled;
    }
    get stringValue() {
        return this.value?.toString() ?? '';
    }
    get computedMask() {
        return this.mask;
    }
    onValueChange(value) {
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
        this.changeDetectorRef.markForCheck();
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
    }
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return this.focusableElement?.nativeElement
            ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
            : false;
    }
    clear(ev) {
        ev.stopImmediatePropagation();
        this.updateValue(null);
        this.markAsTouched();
        this.changeDetectorRef.markForCheck();
    }
}
PrizmInputLayoutDateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateComponent, deps: [{ token: Injector }, { token: PrizmDialogService }, { token: PRIZM_DATE_FORMAT, optional: true }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputLayoutDateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputLayoutDateComponent, isStandalone: true, selector: "prizm-input-layout-date", inputs: { min: "min", placeholder: "placeholder", max: "max", disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", items: "items", defaultActiveYearMonth: "defaultActiveYearMonth", extraButtonInjector: "extraButtonInjector" }, host: { properties: { "style.width": "this.width" } }, providers: [
        ...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'),
        ...PRIZM_INPUT_DATE_PROVIDERS,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PrizmInputLayoutDateComponent),
            multi: true,
        },
        PrizmDestroyService,
        { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateComponent },
    ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [isOpen]=\"open && canOpen\"\n  [content]=\"dropdown\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [mask]=\"computedMask\"\n    [showMaskTyped]=\"focusableElementRef.focused\"\n    [dropSpecialCharacters]=\"false\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"!!disabled\"\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"stringValue\"\n    (ngModelChange)=\"onValueChange($event || '')\"\n    prizmInput\n  />\n  <ng-template #dropdown>\n    <prizm-calendar\n      [min]=\"min\"\n      [max]=\"max\"\n      [markerHandler]=\"markerHandler\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [month]=\"computedActiveYearMonth\"\n      [value]=\"value\"\n      (prizmAfterViewInit)=\"markAsTouched()\"\n      (dayClick)=\"onDayClick($event)\"\n      (monthChange)=\"onMonthChange($event)\"\n      prizmPreventDefault=\"mousedown\"\n      automation-id=\"prizm-input-date__calendar\"\n    ></prizm-calendar>\n    <div class=\"z-button\" *ngIf=\"items.length === 1\" prizmPreventDefault=\"mousedown\">\n      <button (click)=\"onDayClick(items[0].day)\" prizmLink type=\"button\">\n        {{ items[0] }}\n      </button>\n    </div>\n  </ng-template>\n</prizm-dropdown-host>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [disabled]=\"!!disabled\"\n    [interactive]=\"true\"\n    (click)=\"onOpenChange(!open)\"\n    prizmInputIconButton=\"date-calendar-blank\"\n  ></button>\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n", styles: [":host{display:block}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.z-button{display:flex;height:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--prizm-v3-background-stroke)}.z-button button{flex:1;text-align:center}button[disabled]{cursor:not-allowed}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i2.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmMaskModule }, { kind: "directive", type: i3.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "ngmodule", type: PrizmPreventDefaultModule }, { kind: "directive", type: i4.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "ngmodule", type: PrizmCalendarModule }, { kind: "component", type: i5.PrizmCalendarComponent, selector: "prizm-calendar", inputs: ["month", "value", "disabledItemHandler", "min", "daysWithStatus", "max", "minViewedMonth", "maxViewedMonth", "hoveredItem", "showAdjacent", "markerHandler"], outputs: ["dayClick", "monthChange", "hoveredItemChange"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "component", type: i6.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i7.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: i8.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "ngmodule", type: PrizmLinkModule }, { kind: "component", type: i9.PrizmLinkComponent, selector: "a[prizmLink], button[prizmLink]", inputs: ["pseudo", "icon", "iconAlign", "iconRotated", "mode"], exportAs: ["prizmLink"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i10.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i10.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i10.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "ngmodule", type: PrizmValueAccessorModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputLayoutDateComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputLayoutDateComponent.prototype, "markerHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmInputLayoutDateComponent.prototype, "items", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateComponent.prototype, "defaultActiveYearMonth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputLayoutDateComponent.prototype, "extraButtonInjector", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-layout-date`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'),
                        ...PRIZM_INPUT_DATE_PROVIDERS,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PrizmInputLayoutDateComponent),
                            multi: true,
                        },
                        PrizmDestroyService,
                        { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateComponent },
                    ], standalone: true, imports: [
                        CommonModule,
                        PrizmLifecycleModule,
                        PrizmMaskModule,
                        PolymorphOutletDirective,
                        PrizmPreventDefaultModule,
                        PrizmCalendarModule,
                        PrizmInputTextModule,
                        PrizmIconComponent,
                        PrizmLinkModule,
                        FormsModule,
                        PrizmDropdownHostComponent,
                        PrizmValueAccessorModule,
                        PrizmLetDirective,
                    ], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [isOpen]=\"open && canOpen\"\n  [content]=\"dropdown\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [mask]=\"computedMask\"\n    [showMaskTyped]=\"focusableElementRef.focused\"\n    [dropSpecialCharacters]=\"false\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"!!disabled\"\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"stringValue\"\n    (ngModelChange)=\"onValueChange($event || '')\"\n    prizmInput\n  />\n  <ng-template #dropdown>\n    <prizm-calendar\n      [min]=\"min\"\n      [max]=\"max\"\n      [markerHandler]=\"markerHandler\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [month]=\"computedActiveYearMonth\"\n      [value]=\"value\"\n      (prizmAfterViewInit)=\"markAsTouched()\"\n      (dayClick)=\"onDayClick($event)\"\n      (monthChange)=\"onMonthChange($event)\"\n      prizmPreventDefault=\"mousedown\"\n      automation-id=\"prizm-input-date__calendar\"\n    ></prizm-calendar>\n    <div class=\"z-button\" *ngIf=\"items.length === 1\" prizmPreventDefault=\"mousedown\">\n      <button (click)=\"onDayClick(items[0].day)\" prizmLink type=\"button\">\n        {{ items[0] }}\n      </button>\n    </div>\n  </ng-template>\n</prizm-dropdown-host>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [disabled]=\"!!disabled\"\n    [interactive]=\"true\"\n    (click)=\"onOpenChange(!open)\"\n    prizmInputIconButton=\"date-calendar-blank\"\n  ></button>\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n", styles: [":host{display:block}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.z-button{display:flex;height:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--prizm-v3-background-stroke)}.z-button button{flex:1;text-align:center}button[disabled]{cursor:not-allowed}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector, decorators: [{
                    type: Inject,
                    args: [Injector]
                }] }, { type: i11.PrizmDialogService, decorators: [{
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
            }], extraButtonInjector: [{
                type: Input
            }], width: [{
                type: HostBinding,
                args: ['style.width']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1kYXRlL2lucHV0LWxheW91dC1kYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS9pbnB1dC1sYXlvdXQtZGF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQW1CLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsZUFBZSxFQUNmLGNBQWMsRUFDZCxRQUFRLEVBQ1IsVUFBVSxHQUNYLE1BQU0sMEJBQTBCLENBQUM7QUFRbEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFekYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDRC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d0JBQ2Ysd0JBQXdCO3dCQUN4Qix5QkFBeUI7d0JBQ3pCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsV0FBVzt3QkFDWCwwQkFBMEI7d0JBQzFCLHdCQUF3Qjt3QkFDeEIsaUJBQWlCO3FCQUNsQjs7MEJBd0RFLE1BQU07MkJBQUMsUUFBUTs7MEJBQ2YsTUFBTTsyQkFBQyxrQkFBa0I7OzBCQUN6QixRQUFROzswQkFDUixNQUFNOzJCQUFDLGlCQUFpQjs7MEJBRXhCLE1BQU07MkJBQUMsb0JBQW9COzswQkFDM0IsTUFBTTsyQkFBQyxnQkFBZ0I7OzBCQUV2QixRQUFROzswQkFDUixNQUFNOzJCQUFDLDRCQUE0Qjs0Q0EzRGIsZ0JBQWdCO3NCQUR4QyxTQUFTO3VCQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFTdEQsR0FBRztzQkFGRixLQUFLO2dCQU1OLFdBQVc7c0JBRlYsS0FBSztnQkFNTixHQUFHO3NCQUZGLEtBQUs7Z0JBTU4sbUJBQW1CO3NCQUZsQixLQUFLO2dCQU1OLGFBQWE7c0JBRlosS0FBSztnQkFNTixLQUFLO3NCQUZKLEtBQUs7Z0JBTU4sc0JBQXNCO3NCQUZyQixLQUFLO2dCQU1OLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFPRyxLQUFLO3NCQURiLFdBQVc7dUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBSSVpNX0lOUFVUX0RBVEVfUFJPVklERVJTIH0gZnJvbSAnLi9pbnB1dC1kYXRlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHtcbiAgUFJJWk1fREFURV9GSUxMRVJfTEVOR1RILFxuICBQUklaTV9EQVRFX0ZPUk1BVCxcbiAgUFJJWk1fREFURV9TRVBBUkFUT1IsXG4gIFBSSVpNX0ZJUlNUX0RBWSxcbiAgUFJJWk1fTEFTVF9EQVksXG4gIFByaXptRGF5LFxuICBQcml6bU1vbnRoLFxufSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUnO1xuaW1wb3J0IHtcbiAgUHJpem1Cb29sZWFuSGFuZGxlcixcbiAgUHJpem1Db250ZXh0V2l0aEltcGxpY2l0LFxuICBQcml6bUNvbnRyb2xWYWx1ZVRyYW5zZm9ybWVyLFxuICBQcml6bURhdGVNb2RlLFxufSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBQcml6bU1hcmtlckhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9tYXJrZXItaGFuZGxlcic7XG5pbXBvcnQgeyBQcml6bURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaWFsb2dzL2RpYWxvZyc7XG5pbXBvcnQgeyBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2RlZmF1bHQtbWFya2VyLWhhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1OYW1lZERheSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2NsYXNzZXMvbmFtZWQtZGF5JztcbmltcG9ydCB7IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2Fsd2F5cy1mYWxzZS1oYW5kbGVyJztcbmltcG9ydCB7IHByaXptQ3JlYXRlRGF0ZU5neE1hc2sgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9tYXNrL2NyZWF0ZS1kYXRlLW1hc2snO1xuaW1wb3J0IHsgUFJJWk1fREFURV9WQUxVRV9UUkFOU0ZPUk1FUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWlucHV0cy12YWx1ZS10cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9URVhUUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9pMThuJztcbmltcG9ydCB7IHByaXptSXNOYXRpdmVGb2N1c2VkSW4gfSBmcm9tICcuLi8uLi8uLi91dGlsJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfUklHSFRfQlVUVE9OUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWV4dHJhLWJ1dHRvbnMnO1xuaW1wb3J0IHsgUHJpem1EYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0ZS1idXR0b24nO1xuaW1wb3J0IHsgUHJpem1JbnB1dE5nQ29udHJvbCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlL2lucHV0LW5nLWNvbnRyb2wuY2xhc3MnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSwgUHJpem1MZXREaXJlY3RpdmUgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUlucHV0Q29udHJvbCB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBwcml6bUkxOG5Jbml0V2l0aEtleSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBQb2x5bW9ycGhPdXRsZXREaXJlY3RpdmUsXG4gIFByaXptTGlmZWN5Y2xlTW9kdWxlLFxuICBQcml6bVByZXZlbnREZWZhdWx0TW9kdWxlLFxuICBQcml6bVZhbHVlQWNjZXNzb3JNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUHJpem1NYXNrTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcyc7XG5pbXBvcnQgeyBQcml6bUNhbGVuZGFyTW9kdWxlIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXInO1xuaW1wb3J0IHsgUHJpem1JbnB1dFRleHRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC10ZXh0JztcbmltcG9ydCB7IFByaXptSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ljb24nO1xuaW1wb3J0IHsgUHJpem1MaW5rTW9kdWxlIH0gZnJvbSAnLi4vLi4vbGluayc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBgcHJpem0taW5wdXQtbGF5b3V0LWRhdGVgLFxuICB0ZW1wbGF0ZVVybDogYC4vaW5wdXQtbGF5b3V0LWRhdGUuY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFtgLi9pbnB1dC1sYXlvdXQtZGF0ZS5jb21wb25lbnQubGVzc2BdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4ucHJpem1JMThuSW5pdFdpdGhLZXkoUFJJWk1fREFURV9URVhUUywgJ2RhdGVUZXh0cycpLFxuICAgIC4uLlBSSVpNX0lOUFVUX0RBVEVfUFJPVklERVJTLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1JbnB1dExheW91dERhdGVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICAgIHsgcHJvdmlkZTogUHJpem1JbnB1dENvbnRyb2wsIHVzZUV4aXN0aW5nOiBQcml6bUlucHV0TGF5b3V0RGF0ZUNvbXBvbmVudCB9LFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFByaXptTGlmZWN5Y2xlTW9kdWxlLFxuICAgIFByaXptTWFza01vZHVsZSxcbiAgICBQb2x5bW9ycGhPdXRsZXREaXJlY3RpdmUsXG4gICAgUHJpem1QcmV2ZW50RGVmYXVsdE1vZHVsZSxcbiAgICBQcml6bUNhbGVuZGFyTW9kdWxlLFxuICAgIFByaXptSW5wdXRUZXh0TW9kdWxlLFxuICAgIFByaXptSWNvbkNvbXBvbmVudCxcbiAgICBQcml6bUxpbmtNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQsXG4gICAgUHJpem1WYWx1ZUFjY2Vzc29yTW9kdWxlLFxuICAgIFByaXptTGV0RGlyZWN0aXZlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TGF5b3V0RGF0ZUNvbXBvbmVudCBleHRlbmRzIFByaXptSW5wdXROZ0NvbnRyb2w8UHJpem1EYXkgfCBudWxsPiB7XG4gIHJlYWRvbmx5IG5hdGl2ZUVsZW1lbnRUeXBlID0gJ2lucHV0LWRhdGUnO1xuICByZWFkb25seSBoYXNDbGVhckJ1dHRvbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnRSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgcHVibGljIG92ZXJyaWRlIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIHByaXZhdGUgbW9udGg6IFByaXptTW9udGggfCBudWxsID0gbnVsbDtcblxuICBwdWJsaWMgbWFzayA9IHByaXptQ3JlYXRlRGF0ZU5neE1hc2sodGhpcy5kYXRlRm9ybWF0LCB0aGlzLmRhdGVTZXBhcmF0b3IpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluID0gUFJJWk1fRklSU1RfREFZO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcGxhY2Vob2xkZXIgPSAnJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heCA9IFBSSVpNX0xBU1RfREFZO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGlzYWJsZWRJdGVtSGFuZGxlcjogUHJpem1Cb29sZWFuSGFuZGxlcjxQcml6bURheT4gPSBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1hcmtlckhhbmRsZXI6IFByaXptTWFya2VySGFuZGxlciA9IFBSSVpNX0RFRkFVTFRfTUFSS0VSX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpdGVtczogcmVhZG9ubHkgUHJpem1OYW1lZERheVtdID0gW107XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkZWZhdWx0QWN0aXZlWWVhck1vbnRoID0gUHJpem1Nb250aC5jdXJyZW50TG9jYWwoKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGV4dHJhQnV0dG9uSW5qZWN0b3I6IEluamVjdG9yO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfaW5wdXRfZGF0ZSc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gIHJlYWRvbmx5IHdpZHRoID0gJ2F1dG8nO1xuXG4gIHB1YmxpYyBvcGVuID0gZmFsc2U7XG5cbiAgcmVhZG9ubHkgdHlwZSE6IFByaXptQ29udGV4dFdpdGhJbXBsaWNpdDx1bmtub3duPjtcblxuICBwdWJsaWMgcmlnaHRCdXR0b25zJCE6IEJlaGF2aW9yU3ViamVjdDxQcml6bURhdGVCdXR0b25bXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChJbmplY3RvcikgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoUHJpem1EaWFsb2dTZXJ2aWNlKSBwcml2YXRlIHJlYWRvbmx5IGRpYWxvZ1NlcnZpY2U6IFByaXptRGlhbG9nU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUFJJWk1fREFURV9GT1JNQVQpXG4gICAgcmVhZG9ubHkgZGF0ZUZvcm1hdDogUHJpem1EYXRlTW9kZSxcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfU0VQQVJBVE9SKSByZWFkb25seSBkYXRlU2VwYXJhdG9yOiBzdHJpbmcsXG4gICAgQEluamVjdChQUklaTV9EQVRFX1RFWFRTKVxuICAgIHJlYWRvbmx5IGRhdGVUZXh0cyQ6IE9ic2VydmFibGU8UmVjb3JkPFByaXptRGF0ZU1vZGUsIHN0cmluZz4+LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChQUklaTV9EQVRFX1ZBTFVFX1RSQU5TRk9STUVSKVxuICAgIHZhbHVlVHJhbnNmb3JtZXI6IFByaXptQ29udHJvbFZhbHVlVHJhbnNmb3JtZXI8UHJpem1EYXkgfCBudWxsPiB8IG51bGxcbiAgKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsIHZhbHVlVHJhbnNmb3JtZXIpO1xuICAgIHRoaXMuZXh0cmFCdXR0b25JbmplY3RvciA9IGluamVjdG9yO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICB0aGlzLnJpZ2h0QnV0dG9ucyQgPSB0aGlzLmV4dHJhQnV0dG9uSW5qZWN0b3IuZ2V0KFBSSVpNX0RBVEVfUklHSFRfQlVUVE9OUyk7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRBY3RpdmVZZWFyTW9udGgoKTogUHJpem1Nb250aCB7XG4gICAgaWYgKHRoaXMuaXRlbXNbMF0gJiYgdGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmRheVNhbWUodGhpcy5pdGVtc1swXS5kYXkpKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtc1swXS5kaXNwbGF5RGF5O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm1vbnRoIHx8IHRoaXMudmFsdWUgfHwgdGhpcy5kZWZhdWx0QWN0aXZlWWVhck1vbnRoO1xuICB9XG5cbiAgZ2V0IGNhbk9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHN0cmluZ1ZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU/LnRvU3RyaW5nKCkgPz8gJyc7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRNYXNrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIHB1YmxpYyBvblZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCAhPT0gUFJJWk1fREFURV9GSUxMRVJfTEVOR1RIKSB7XG4gICAgICBpZiAoIXZhbHVlKSB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWUoXG4gICAgICB2YWx1ZS5sZW5ndGggIT09IFBSSVpNX0RBVEVfRklMTEVSX0xFTkdUSCA/IG51bGwgOiBQcml6bURheS5ub3JtYWxpemVQYXJzZSh2YWx1ZSwgdGhpcy5kYXRlRm9ybWF0KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25EYXlDbGljayh2YWx1ZTogUHJpem1EYXkpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG9uTW9udGhDaGFuZ2UobW9udGg6IFByaXptTW9udGgpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRoID0gbW9udGg7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgd3JpdGVWYWx1ZSh2YWx1ZTogUHJpem1EYXkgfCBudWxsKTogdm9pZCB7XG4gICAgc3VwZXIud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQoKTogSFRNTElucHV0RWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQgPyAodGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkgOiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnRcbiAgICAgID8gcHJpem1Jc05hdGl2ZUZvY3VzZWRJbih0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudClcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgY2xlYXIoZXY6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgIHRoaXMubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gIGNsYXNzPVwiei1ob3N0ZWRcIlxuICBbY2FuT3Blbl09XCJjYW5PcGVuXCJcbiAgW2lzT3Blbl09XCJvcGVuICYmIGNhbk9wZW5cIlxuICBbY29udGVudF09XCJkcm9wZG93blwiXG4gIFtwcml6bURyb3Bkb3duSG9zdF09XCJsYXlvdXRDb21wb25lbnQ/LmVsPy5uYXRpdmVFbGVtZW50XCJcbiAgW2Nsb3NlQnlFc2NdPVwidHJ1ZVwiXG4gIChpc09wZW5DaGFuZ2UpPVwib25PcGVuQ2hhbmdlKCRldmVudClcIlxuICBwcml6bURyb3Bkb3duSG9zdFdpZHRoPVwiYXV0b1wiXG4+XG4gIDxpbnB1dFxuICAgIGNsYXNzPVwiaW5wdXQtc2VhcmNoXCJcbiAgICAjZm9jdXNhYmxlRWxlbWVudFJlZlxuICAgIFttYXNrXT1cImNvbXB1dGVkTWFza1wiXG4gICAgW3Nob3dNYXNrVHlwZWRdPVwiZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1c2VkXCJcbiAgICBbZHJvcFNwZWNpYWxDaGFyYWN0ZXJzXT1cImZhbHNlXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgIFtkaXNhYmxlZF09XCIhIWRpc2FibGVkXCJcbiAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgIFtuZ01vZGVsXT1cInN0cmluZ1ZhbHVlXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudCB8fCAnJylcIlxuICAgIHByaXptSW5wdXRcbiAgLz5cbiAgPG5nLXRlbXBsYXRlICNkcm9wZG93bj5cbiAgICA8cHJpem0tY2FsZW5kYXJcbiAgICAgIFttaW5dPVwibWluXCJcbiAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgIFttYXJrZXJIYW5kbGVyXT1cIm1hcmtlckhhbmRsZXJcIlxuICAgICAgW2Rpc2FibGVkSXRlbUhhbmRsZXJdPVwiZGlzYWJsZWRJdGVtSGFuZGxlclwiXG4gICAgICBbbW9udGhdPVwiY29tcHV0ZWRBY3RpdmVZZWFyTW9udGhcIlxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgIChwcml6bUFmdGVyVmlld0luaXQpPVwibWFya0FzVG91Y2hlZCgpXCJcbiAgICAgIChkYXlDbGljayk9XCJvbkRheUNsaWNrKCRldmVudClcIlxuICAgICAgKG1vbnRoQ2hhbmdlKT1cIm9uTW9udGhDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBwcml6bVByZXZlbnREZWZhdWx0PVwibW91c2Vkb3duXCJcbiAgICAgIGF1dG9tYXRpb24taWQ9XCJwcml6bS1pbnB1dC1kYXRlX19jYWxlbmRhclwiXG4gICAgPjwvcHJpem0tY2FsZW5kYXI+XG4gICAgPGRpdiBjbGFzcz1cInotYnV0dG9uXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGggPT09IDFcIiBwcml6bVByZXZlbnREZWZhdWx0PVwibW91c2Vkb3duXCI+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJvbkRheUNsaWNrKGl0ZW1zWzBdLmRheSlcIiBwcml6bUxpbmsgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICB7eyBpdGVtc1swXSB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG48L3ByaXptLWRyb3Bkb3duLWhvc3Q+XG5cbjxuZy1jb250YWluZXIgKnByaXptSW5wdXRMYXlvdXRSaWdodD5cbiAgPGJ1dHRvblxuICAgIFtkaXNhYmxlZF09XCIhIWRpc2FibGVkXCJcbiAgICBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiXG4gICAgKGNsaWNrKT1cIm9uT3BlbkNoYW5nZSghb3BlbilcIlxuICAgIHByaXptSW5wdXRJY29uQnV0dG9uPVwiZGF0ZS1jYWxlbmRhci1ibGFua1wiXG4gID48L2J1dHRvbj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIHJpZ2h0QnV0dG9ucyQgfCBhc3luY1wiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvbi50ZW1wbGF0ZVwiPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19