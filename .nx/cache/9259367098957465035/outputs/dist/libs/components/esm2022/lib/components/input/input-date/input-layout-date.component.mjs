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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutDateComponent, deps: [{ token: Injector }, { token: PrizmDialogService }, { token: PRIZM_DATE_FORMAT, optional: true }, { token: PRIZM_DATE_SEPARATOR }, { token: PRIZM_DATE_TEXTS }, { token: PRIZM_DATE_VALUE_TRANSFORMER, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputLayoutDateComponent, isStandalone: true, selector: "prizm-input-layout-date", inputs: { min: "min", placeholder: "placeholder", max: "max", disabledItemHandler: "disabledItemHandler", markerHandler: "markerHandler", items: "items", defaultActiveYearMonth: "defaultActiveYearMonth", extraButtonInjector: "extraButtonInjector" }, host: { properties: { "style.width": "this.width" } }, providers: [
            ...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'),
            ...PRIZM_INPUT_DATE_PROVIDERS,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PrizmInputLayoutDateComponent),
                multi: true,
            },
            PrizmDestroyService,
            { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateComponent },
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [isOpen]=\"open && canOpen\"\n  [content]=\"dropdown\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [mask]=\"computedMask\"\n    [showMaskTyped]=\"focusableElementRef.focused\"\n    [dropSpecialCharacters]=\"false\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"!!disabled\"\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"stringValue\"\n    (ngModelChange)=\"onValueChange($event || '')\"\n    prizmInput\n  />\n  <ng-template #dropdown>\n    <prizm-calendar\n      [min]=\"min\"\n      [max]=\"max\"\n      [markerHandler]=\"markerHandler\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [month]=\"computedActiveYearMonth\"\n      [value]=\"value\"\n      (prizmAfterViewInit)=\"markAsTouched()\"\n      (dayClick)=\"onDayClick($event)\"\n      (monthChange)=\"onMonthChange($event)\"\n      prizmPreventDefault=\"mousedown\"\n      automation-id=\"prizm-input-date__calendar\"\n    ></prizm-calendar>\n    <div class=\"z-button\" *ngIf=\"items.length === 1\" prizmPreventDefault=\"mousedown\">\n      <button (click)=\"onDayClick(items[0].day)\" prizmLink type=\"button\">\n        {{ items[0] }}\n      </button>\n    </div>\n  </ng-template>\n</prizm-dropdown-host>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [disabled]=\"!!disabled\"\n    [interactive]=\"true\"\n    (click)=\"onOpenChange(!open)\"\n    prizmInputIconButton=\"date-calendar-blank\"\n  ></button>\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n", styles: [":host{display:block}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.z-button{display:flex;height:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--prizm-v3-background-stroke)}.z-button button{flex:1;text-align:center}button[disabled]{cursor:not-allowed}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i2.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmMaskModule }, { kind: "directive", type: i3.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "leadZero", "triggerOnMaskChange", "apm"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "ngmodule", type: PrizmPreventDefaultModule }, { kind: "directive", type: i4.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "ngmodule", type: PrizmCalendarModule }, { kind: "component", type: i5.PrizmCalendarComponent, selector: "prizm-calendar", inputs: ["month", "value", "disabledItemHandler", "min", "daysWithStatus", "max", "minViewedMonth", "maxViewedMonth", "hoveredItem", "showAdjacent", "markerHandler"], outputs: ["dayClick", "monthChange", "hoveredItemChange"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "component", type: i6.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i7.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: i8.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "ngmodule", type: PrizmLinkModule }, { kind: "component", type: i9.PrizmLinkComponent, selector: "a[prizmLink], button[prizmLink]", inputs: ["pseudo", "icon", "iconAlign", "iconRotated", "mode"], exportAs: ["prizmLink"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i10.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i10.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i10.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "ngmodule", type: PrizmValueAccessorModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutDateComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1kYXRlL2lucHV0LWxheW91dC1kYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS9pbnB1dC1sYXlvdXQtZGF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQW1CLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsZUFBZSxFQUNmLGNBQWMsRUFDZCxRQUFRLEVBQ1IsVUFBVSxHQUNYLE1BQU0sMEJBQTBCLENBQUM7QUFRbEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFekYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDOUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsb0JBQW9CLEVBQ3BCLHlCQUF5QixFQUN6Qix3QkFBd0IsR0FDekIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQW1DM0UsTUFBTSxPQUFPLDZCQUE4QixTQUFRLG1CQUFvQztJQXFEckYsWUFDb0IsUUFBa0IsRUFDUyxhQUFpQyxFQUdyRSxVQUF5QixFQUNLLGFBQXFCLEVBRW5ELFVBQXFELEVBRzlELGdCQUFzRTtRQUV0RSxLQUFLLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFYVyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFHckUsZUFBVSxHQUFWLFVBQVUsQ0FBZTtRQUNLLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBRW5ELGVBQVUsR0FBVixVQUFVLENBQTJDO1FBNUR2RCxzQkFBaUIsR0FBRyxZQUFZLENBQUM7UUFDakMsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFJdkIsVUFBSyxHQUFzQixJQUFJLENBQUM7UUFFakMsU0FBSSxHQUFHLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBSTFFLFFBQUcsR0FBRyxlQUFlLENBQUM7UUFJdEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFJakIsUUFBRyxHQUFHLGNBQWMsQ0FBQztRQUlyQix3QkFBbUIsR0FBa0MsMEJBQTBCLENBQUM7UUFJaEYsa0JBQWEsR0FBdUIsNEJBQTRCLENBQUM7UUFJakUsVUFBSyxHQUE2QixFQUFFLENBQUM7UUFJckMsMkJBQXNCLEdBQUcsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBTWpDLFlBQU8sR0FBRyxlQUFlLENBQUM7UUFHbkMsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUVqQixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBb0JsQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDO0lBQ3RDLENBQUM7SUFFZSxRQUFRO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsSUFBSSx1QkFBdUI7UUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ2pFLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssd0JBQXdCLEVBQUU7WUFDdkQsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUNkLEtBQUssQ0FBQyxNQUFNLEtBQUssd0JBQXdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUNuRyxDQUFDO0lBQ0osQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFlO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBaUI7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLFlBQVksQ0FBQyxJQUFhO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRWUsVUFBVSxDQUFDLEtBQXNCO1FBQy9DLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBa0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xHLENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYTtZQUN6QyxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztZQUM3RCxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ1osQ0FBQztJQUVlLEtBQUssQ0FBQyxFQUFjO1FBQ2xDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzhHQTdJVSw2QkFBNkIsa0JBc0Q5QixRQUFRLGFBQ1Isa0JBQWtCLGFBRWxCLGlCQUFpQiw2QkFFakIsb0JBQW9CLGFBQ3BCLGdCQUFnQixhQUdoQiw0QkFBNEI7a0dBL0QzQiw2QkFBNkIsdVhBNUI3QjtZQUNULEdBQUcsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDO1lBQ3RELEdBQUcsMEJBQTBCO1lBQzdCO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzVELEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRCxtQkFBbUI7WUFDbkIsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLDZCQUE2QixFQUFFO1NBQzNFLDhIQXFCeUMsVUFBVSxvRENoR3RELGl5REF1REEsbVpEdUJJLFlBQVksMmRBQ1osb0JBQW9CLDhUQUNwQixlQUFlLCtoQkFFZix5QkFBeUIsK0hBQ3pCLG1CQUFtQixvVkFDbkIsb0JBQW9CLG1tQkFFcEIsZUFBZSx3TkFDZixXQUFXLGtuQkFDWCwwQkFBMEIsNlhBQzFCLHdCQUF3Qjs7QUFnQjFCO0lBREMsZ0JBQWdCLEVBQUU7OzBEQUNHO0FBSXRCO0lBREMsZ0JBQWdCLEVBQUU7O2tFQUNGO0FBSWpCO0lBREMsZ0JBQWdCLEVBQUU7OzBEQUNFO0FBSXJCO0lBREMsZ0JBQWdCLEVBQUU7OzBFQUM2RDtBQUloRjtJQURDLGdCQUFnQixFQUFFOztvRUFDOEM7QUFJakU7SUFEQyxnQkFBZ0IsRUFBRTs7NERBQ2tCO0FBSXJDO0lBREMsZ0JBQWdCLEVBQUU7OzZFQUNnQztBQUluRDtJQURDLGdCQUFnQixFQUFFOzhCQUNFLFFBQVE7MEVBQUM7MkZBeENuQiw2QkFBNkI7a0JBakN6QyxTQUFTOytCQUNFLHlCQUF5QixtQkFHbEIsdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVCxHQUFHLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQzt3QkFDdEQsR0FBRywwQkFBMEI7d0JBQzdCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLDhCQUE4QixDQUFDOzRCQUM1RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRCxtQkFBbUI7d0JBQ25CLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsK0JBQStCLEVBQUU7cUJBQzNFLGNBQ1csSUFBSSxXQUNQO3dCQUNQLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3dCQUN6QixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLFdBQVc7d0JBQ1gsMEJBQTBCO3dCQUMxQix3QkFBd0I7d0JBQ3hCLGlCQUFpQjtxQkFDbEI7OzBCQXdERSxNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsa0JBQWtCOzswQkFDekIsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxpQkFBaUI7OzBCQUV4QixNQUFNOzJCQUFDLG9CQUFvQjs7MEJBQzNCLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFFdkIsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyw0QkFBNEI7NENBM0RiLGdCQUFnQjtzQkFEeEMsU0FBUzt1QkFBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Z0JBU3RELEdBQUc7c0JBRkYsS0FBSztnQkFNTixXQUFXO3NCQUZWLEtBQUs7Z0JBTU4sR0FBRztzQkFGRixLQUFLO2dCQU1OLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTixhQUFhO3NCQUZaLEtBQUs7Z0JBTU4sS0FBSztzQkFGSixLQUFLO2dCQU1OLHNCQUFzQjtzQkFGckIsS0FBSztnQkFNTixtQkFBbUI7c0JBRmxCLEtBQUs7Z0JBT0csS0FBSztzQkFEYixXQUFXO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQUklaTV9JTlBVVF9EQVRFX1BST1ZJREVSUyB9IGZyb20gJy4vaW5wdXQtZGF0ZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7XG4gIFBSSVpNX0RBVEVfRklMTEVSX0xFTkdUSCxcbiAgUFJJWk1fREFURV9GT1JNQVQsXG4gIFBSSVpNX0RBVEVfU0VQQVJBVE9SLFxuICBQUklaTV9GSVJTVF9EQVksXG4gIFBSSVpNX0xBU1RfREFZLFxuICBQcml6bURheSxcbiAgUHJpem1Nb250aCxcbn0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lJztcbmltcG9ydCB7XG4gIFByaXptQm9vbGVhbkhhbmRsZXIsXG4gIFByaXptQ29udGV4dFdpdGhJbXBsaWNpdCxcbiAgUHJpem1Db250cm9sVmFsdWVUcmFuc2Zvcm1lcixcbiAgUHJpem1EYXRlTW9kZSxcbn0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUHJpem1NYXJrZXJIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvbWFya2VyLWhhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9kaWFsb2cnO1xuaW1wb3J0IHsgUFJJWk1fREVGQVVMVF9NQVJLRVJfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9kZWZhdWx0LW1hcmtlci1oYW5kbGVyJztcbmltcG9ydCB7IFByaXptTmFtZWREYXkgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9jbGFzc2VzL25hbWVkLWRheSc7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBwcml6bUNyZWF0ZURhdGVOZ3hNYXNrIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvbWFzay9jcmVhdGUtZGF0ZS1tYXNrJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfVkFMVUVfVFJBTlNGT1JNRVIgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvZGF0ZS1pbnB1dHMtdmFsdWUtdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfVEVYVFMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvaTE4bic7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZEluIH0gZnJvbSAnLi4vLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvZGF0ZS1leHRyYS1idXR0b25zJztcbmltcG9ydCB7IFByaXptRGF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGUtYnV0dG9uJztcbmltcG9ydCB7IFByaXptSW5wdXROZ0NvbnRyb2wgfSBmcm9tICcuLi9jb21tb24vYmFzZS9pbnB1dC1uZy1jb250cm9sLmNsYXNzJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UsIFByaXptTGV0RGlyZWN0aXZlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENvbnRyb2wgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgcHJpem1JMThuSW5pdFdpdGhLZXkgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgUG9seW1vcnBoT3V0bGV0RGlyZWN0aXZlLFxuICBQcml6bUxpZmVjeWNsZU1vZHVsZSxcbiAgUHJpem1QcmV2ZW50RGVmYXVsdE1vZHVsZSxcbiAgUHJpem1WYWx1ZUFjY2Vzc29yTW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFByaXptTWFza01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL21vZHVsZXMnO1xuaW1wb3J0IHsgUHJpem1DYWxlbmRhck1vZHVsZSB9IGZyb20gJy4uLy4uL2NhbGVuZGFyJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dCc7XG5pbXBvcnQgeyBQcml6bUljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9pY29uJztcbmltcG9ydCB7IFByaXptTGlua01vZHVsZSB9IGZyb20gJy4uLy4uL2xpbmsnO1xuaW1wb3J0IHsgUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kcm9wZG93bnMvZHJvcGRvd24taG9zdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWlucHV0LWxheW91dC1kYXRlYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LWxheW91dC1kYXRlLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vaW5wdXQtbGF5b3V0LWRhdGUuY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByaXptSTE4bkluaXRXaXRoS2V5KFBSSVpNX0RBVEVfVEVYVFMsICdkYXRlVGV4dHMnKSxcbiAgICAuLi5QUklaTV9JTlBVVF9EQVRFX1BST1ZJREVSUyxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFByaXptSW5wdXRMYXlvdXREYXRlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgUHJpem1EZXN0cm95U2VydmljZSxcbiAgICB7IHByb3ZpZGU6IFByaXptSW5wdXRDb250cm9sLCB1c2VFeGlzdGluZzogUHJpem1JbnB1dExheW91dERhdGVDb21wb25lbnQgfSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUxpZmVjeWNsZU1vZHVsZSxcbiAgICBQcml6bU1hc2tNb2R1bGUsXG4gICAgUG9seW1vcnBoT3V0bGV0RGlyZWN0aXZlLFxuICAgIFByaXptUHJldmVudERlZmF1bHRNb2R1bGUsXG4gICAgUHJpem1DYWxlbmRhck1vZHVsZSxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgICBQcml6bUljb25Db21wb25lbnQsXG4gICAgUHJpem1MaW5rTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50LFxuICAgIFByaXptVmFsdWVBY2Nlc3Nvck1vZHVsZSxcbiAgICBQcml6bUxldERpcmVjdGl2ZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dExheW91dERhdGVDb21wb25lbnQgZXh0ZW5kcyBQcml6bUlucHV0TmdDb250cm9sPFByaXptRGF5IHwgbnVsbD4ge1xuICByZWFkb25seSBuYXRpdmVFbGVtZW50VHlwZSA9ICdpbnB1dC1kYXRlJztcbiAgcmVhZG9ubHkgaGFzQ2xlYXJCdXR0b24gPSB0cnVlO1xuICBAVmlld0NoaWxkKCdmb2N1c2FibGVFbGVtZW50UmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBmb2N1c2FibGVFbGVtZW50PzogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBwcml2YXRlIG1vbnRoOiBQcml6bU1vbnRoIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIG1hc2sgPSBwcml6bUNyZWF0ZURhdGVOZ3hNYXNrKHRoaXMuZGF0ZUZvcm1hdCwgdGhpcy5kYXRlU2VwYXJhdG9yKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbiA9IFBSSVpNX0ZJUlNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXggPSBQUklaTV9MQVNUX0RBWTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRpc2FibGVkSXRlbUhhbmRsZXI6IFByaXptQm9vbGVhbkhhbmRsZXI8UHJpem1EYXk+ID0gUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXJrZXJIYW5kbGVyOiBQcml6bU1hcmtlckhhbmRsZXIgPSBQUklaTV9ERUZBVUxUX01BUktFUl9IQU5ETEVSO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaXRlbXM6IHJlYWRvbmx5IFByaXptTmFtZWREYXlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGVmYXVsdEFjdGl2ZVllYXJNb250aCA9IFByaXptTW9udGguY3VycmVudExvY2FsKCk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBleHRyYUJ1dHRvbkluamVjdG9yOiBJbmplY3RvcjtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X2RhdGUnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICByZWFkb25seSB3aWR0aCA9ICdhdXRvJztcblxuICBwdWJsaWMgb3BlbiA9IGZhbHNlO1xuXG4gIHJlYWRvbmx5IHR5cGUhOiBQcml6bUNvbnRleHRXaXRoSW1wbGljaXQ8dW5rbm93bj47XG5cbiAgcHVibGljIHJpZ2h0QnV0dG9ucyQhOiBCZWhhdmlvclN1YmplY3Q8UHJpem1EYXRlQnV0dG9uW10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoSW5qZWN0b3IpIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KFByaXptRGlhbG9nU2VydmljZSkgcHJpdmF0ZSByZWFkb25seSBkaWFsb2dTZXJ2aWNlOiBQcml6bURpYWxvZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFBSSVpNX0RBVEVfRk9STUFUKVxuICAgIHJlYWRvbmx5IGRhdGVGb3JtYXQ6IFByaXptRGF0ZU1vZGUsXG4gICAgQEluamVjdChQUklaTV9EQVRFX1NFUEFSQVRPUikgcmVhZG9ubHkgZGF0ZVNlcGFyYXRvcjogc3RyaW5nLFxuICAgIEBJbmplY3QoUFJJWk1fREFURV9URVhUUylcbiAgICByZWFkb25seSBkYXRlVGV4dHMkOiBPYnNlcnZhYmxlPFJlY29yZDxQcml6bURhdGVNb2RlLCBzdHJpbmc+PixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUFJJWk1fREFURV9WQUxVRV9UUkFOU0ZPUk1FUilcbiAgICB2YWx1ZVRyYW5zZm9ybWVyOiBQcml6bUNvbnRyb2xWYWx1ZVRyYW5zZm9ybWVyPFByaXptRGF5IHwgbnVsbD4gfCBudWxsXG4gICkge1xuICAgIHN1cGVyKGluamVjdG9yLCB2YWx1ZVRyYW5zZm9ybWVyKTtcbiAgICB0aGlzLmV4dHJhQnV0dG9uSW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy5yaWdodEJ1dHRvbnMkID0gdGhpcy5leHRyYUJ1dHRvbkluamVjdG9yLmdldChQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMpO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkQWN0aXZlWWVhck1vbnRoKCk6IFByaXptTW9udGgge1xuICAgIGlmICh0aGlzLml0ZW1zWzBdICYmIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5kYXlTYW1lKHRoaXMuaXRlbXNbMF0uZGF5KSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbMF0uZGlzcGxheURheTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5tb250aCB8fCB0aGlzLnZhbHVlIHx8IHRoaXMuZGVmYXVsdEFjdGl2ZVllYXJNb250aDtcbiAgfVxuXG4gIGdldCBjYW5PcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBzdHJpbmdWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy50b1N0cmluZygpID8/ICcnO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkTWFzaygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1hc2s7XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggIT09IFBSSVpNX0RBVEVfRklMTEVSX0xFTkdUSCkge1xuICAgICAgaWYgKCF2YWx1ZSkgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKFxuICAgICAgdmFsdWUubGVuZ3RoICE9PSBQUklaTV9EQVRFX0ZJTExFUl9MRU5HVEggPyBudWxsIDogUHJpem1EYXkubm9ybWFsaXplUGFyc2UodmFsdWUsIHRoaXMuZGF0ZUZvcm1hdClcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9uRGF5Q2xpY2sodmFsdWU6IFByaXptRGF5KTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vbnRoQ2hhbmdlKG1vbnRoOiBQcml6bU1vbnRoKTogdm9pZCB7XG4gICAgdGhpcy5tb250aCA9IG1vbnRoO1xuICB9XG5cbiAgcHVibGljIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IFByaXptRGF5IHwgbnVsbCk6IHZvaWQge1xuICAgIHN1cGVyLndyaXRlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50ID8gKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50XG4gICAgICA/IHByaXptSXNOYXRpdmVGb2N1c2VkSW4odGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGNsZWFyKGV2OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iLCI8cHJpem0tZHJvcGRvd24taG9zdFxuICBjbGFzcz1cInotaG9zdGVkXCJcbiAgW2Nhbk9wZW5dPVwiY2FuT3BlblwiXG4gIFtpc09wZW5dPVwib3BlbiAmJiBjYW5PcGVuXCJcbiAgW2NvbnRlbnRdPVwiZHJvcGRvd25cIlxuICBbcHJpem1Ecm9wZG93bkhvc3RdPVwibGF5b3V0Q29tcG9uZW50Py5lbD8ubmF0aXZlRWxlbWVudFwiXG4gIFtjbG9zZUJ5RXNjXT1cInRydWVcIlxuICAoaXNPcGVuQ2hhbmdlKT1cIm9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgcHJpem1Ecm9wZG93bkhvc3RXaWR0aD1cImF1dG9cIlxuPlxuICA8aW5wdXRcbiAgICBjbGFzcz1cImlucHV0LXNlYXJjaFwiXG4gICAgI2ZvY3VzYWJsZUVsZW1lbnRSZWZcbiAgICBbbWFza109XCJjb21wdXRlZE1hc2tcIlxuICAgIFtzaG93TWFza1R5cGVkXT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXNlZFwiXG4gICAgW2Ryb3BTcGVjaWFsQ2hhcmFjdGVyc109XCJmYWxzZVwiXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICBbZGlzYWJsZWRdPVwiISFkaXNhYmxlZFwiXG4gICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICBbbmdNb2RlbF09XCJzdHJpbmdWYWx1ZVwiXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQgfHwgJycpXCJcbiAgICBwcml6bUlucHV0XG4gIC8+XG4gIDxuZy10ZW1wbGF0ZSAjZHJvcGRvd24+XG4gICAgPHByaXptLWNhbGVuZGFyXG4gICAgICBbbWluXT1cIm1pblwiXG4gICAgICBbbWF4XT1cIm1heFwiXG4gICAgICBbbWFya2VySGFuZGxlcl09XCJtYXJrZXJIYW5kbGVyXCJcbiAgICAgIFtkaXNhYmxlZEl0ZW1IYW5kbGVyXT1cImRpc2FibGVkSXRlbUhhbmRsZXJcIlxuICAgICAgW21vbnRoXT1cImNvbXB1dGVkQWN0aXZlWWVhck1vbnRoXCJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAocHJpem1BZnRlclZpZXdJbml0KT1cIm1hcmtBc1RvdWNoZWQoKVwiXG4gICAgICAoZGF5Q2xpY2spPVwib25EYXlDbGljaygkZXZlbnQpXCJcbiAgICAgIChtb250aENoYW5nZSk9XCJvbk1vbnRoQ2hhbmdlKCRldmVudClcIlxuICAgICAgcHJpem1QcmV2ZW50RGVmYXVsdD1cIm1vdXNlZG93blwiXG4gICAgICBhdXRvbWF0aW9uLWlkPVwicHJpem0taW5wdXQtZGF0ZV9fY2FsZW5kYXJcIlxuICAgID48L3ByaXptLWNhbGVuZGFyPlxuICAgIDxkaXYgY2xhc3M9XCJ6LWJ1dHRvblwiICpuZ0lmPVwiaXRlbXMubGVuZ3RoID09PSAxXCIgcHJpem1QcmV2ZW50RGVmYXVsdD1cIm1vdXNlZG93blwiPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25EYXlDbGljayhpdGVtc1swXS5kYXkpXCIgcHJpem1MaW5rIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAge3sgaXRlbXNbMF0gfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9wcml6bS1kcm9wZG93bi1ob3N0PlxuXG48bmctY29udGFpbmVyICpwcml6bUlucHV0TGF5b3V0UmlnaHQ+XG4gIDxidXR0b25cbiAgICBbZGlzYWJsZWRdPVwiISFkaXNhYmxlZFwiXG4gICAgW2ludGVyYWN0aXZlXT1cInRydWVcIlxuICAgIChjbGljayk9XCJvbk9wZW5DaGFuZ2UoIW9wZW4pXCJcbiAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImRhdGUtY2FsZW5kYXItYmxhbmtcIlxuICA+PC9idXR0b24+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiByaWdodEJ1dHRvbnMkIHwgYXN5bmNcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b24udGVtcGxhdGVcIj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==