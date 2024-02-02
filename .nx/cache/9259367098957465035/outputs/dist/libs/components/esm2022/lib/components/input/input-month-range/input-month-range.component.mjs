import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Injector, Input, Optional, Self, ViewChild, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { prizmAsControl } from '../../../abstract/control';
import { PrizmMonthPipe } from '../../../pipes/month/month.pipe';
import { PRIZM_MONTH_FORMATTER_PROVIDER } from '../../../providers/month-formatter.provider';
import { prizmAsFocusableItemAccessor } from '../../../tokens/focusable-item-accessor';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { PRIZM_INPUT_DATE_OPTIONS } from '../../../tokens/input-date-options';
import { PRIZM_CHAR_EN_DASH } from '../../../constants/unicode-chars';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { prizmI18nInitWithKey } from '../../../services';
import { PRIZM_MONTHS } from '../../../tokens';
import * as i0 from "@angular/core";
import * as i1 from "../../calendar-month/calendar-month.component";
import * as i2 from "../../dropdowns/dropdown-host/dropdown-host.component";
import * as i3 from "../../../directives/prevent-default/prevent-default.directive";
import * as i4 from "../common/input-layout/input-layout.component";
import * as i5 from "../common/input-icon-button/input-icon-button.component";
import * as i6 from "../input-text/input-text.component";
import * as i7 from "@angular/forms";
import * as i8 from "@angular/common";
import * as i9 from "../../table/pipes/mapper/mapper.pipe";
export class PrizmInputMonthRangeComponent extends AbstractPrizmNullableControl {
    onClick() {
        this.open = !this.open;
    }
    constructor(control, changeDetectorRef, formatter, options, injector) {
        super(control, changeDetectorRef);
        this.formatter = formatter;
        this.options = options;
        this.injector = injector;
        this.testId_ = 'ui_input_month_range';
        this.outer = false;
        this.label = 'Выберите период';
        this.forceClear = null;
        this.size = 'm';
        this.placeholder = '';
        this.min = this.options.min;
        this.max = this.options.max;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.extraButtonInjector = this.injector;
        this.open = false;
    }
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return this.focusableElement?.nativeElement
            ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
            : false;
    }
    get calendarIcon() {
        return this.options.icon;
    }
    computeValue(from, to) {
        const formattedTo = from === to && this.focused && !this.readOnly ? `` : to;
        return `${from} ${PRIZM_CHAR_EN_DASH} ${formattedTo}`;
    }
    onValueChange(value) {
        if (value) {
            return;
        }
        this.updateValue(null);
        this.onOpenChange(true);
    }
    onMonthClick(month) {
        if (this.value === null || !this.value.isSingleMonth) {
            this.writeValue(new PrizmMonthRange(month, month));
            return;
        }
        this.updateValue(PrizmMonthRange.sort(this.value.from, month));
        this.close();
    }
    onOpenChange(open) {
        this.open = open;
    }
    onActiveZone(focused) {
        this.updateFocused(focused);
        if (focused) {
            return;
        }
        if (this.value?.isSingleMonth) {
            this.updateValue(new PrizmMonthRange(this.value.from, this.value.from));
        }
    }
    setDisabledState() {
        super.setDisabledState();
        this.close();
    }
    close() {
        this.open = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputMonthRangeComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: ChangeDetectorRef }, { token: PRIZM_MONTH_FORMATTER }, { token: PRIZM_INPUT_DATE_OPTIONS }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputMonthRangeComponent, selector: "prizm-input-month-range", inputs: { outer: "outer", label: "label", forceClear: "forceClear", size: "size", placeholder: "placeholder", min: "min", max: "max", disabledItemHandler: "disabledItemHandler", extraButtonInjector: "extraButtonInjector" }, host: { listeners: { "click": "onClick()" } }, providers: [
            ...prizmI18nInitWithKey(PRIZM_MONTHS, 'months'),
            prizmAsFocusableItemAccessor(PrizmInputMonthRangeComponent),
            prizmAsControl(PrizmInputMonthRangeComponent),
            PRIZM_MONTH_FORMATTER_PROVIDER,
            PrizmMonthPipe,
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"interactive\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  [isOpen]=\"open && interactive\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout [label]=\"label\" [outer]=\"outer\" [forceClear]=\"forceClear\" [size]=\"size\">\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [readOnly]=\"true\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"computedDisabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"\n        value\n          ? computeValue(\n              value.from | prizmMapper : formatter | async,\n              value.to | prizmMapper : formatter | async\n            )\n          : ''\n      \"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      prizmInput\n    />\n\n    <ng-container prizm-input-right>\n      <button [interactive]=\"true\" prizmInputIconButton=\"date-calendar-range\"></button>\n    </ng-container>\n  </prizm-input-layout>\n  <ng-template #dropdown>\n    <prizm-calendar-month\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [value]=\"value\"\n      (monthClick)=\"onMonthClick($event)\"\n      prizmPreventDefault=\"mousedown\"\n    ></prizm-calendar-month>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}\n"], dependencies: [{ kind: "component", type: i1.PrizmCalendarMonthComponent, selector: "prizm-calendar-month", inputs: ["value", "year", "disabledItemHandler", "min", "max"], outputs: ["monthClick", "yearChange"] }, { kind: "component", type: i2.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "directive", type: i3.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "component", type: i4.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i5.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i6.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "directive", type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i7.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "pipe", type: i8.AsyncPipe, name: "async" }, { kind: "pipe", type: i9.PrizmMapperPipe, name: "prizmMapper" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputMonthRangeComponent.prototype, "outer", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputMonthRangeComponent.prototype, "label", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputMonthRangeComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputMonthRangeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmInputMonthRangeComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmInputMonthRangeComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputMonthRangeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputMonthRangeComponent.prototype, "extraButtonInjector", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputMonthRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-month-range`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ...prizmI18nInitWithKey(PRIZM_MONTHS, 'months'),
                        prizmAsFocusableItemAccessor(PrizmInputMonthRangeComponent),
                        prizmAsControl(PrizmInputMonthRangeComponent),
                        PRIZM_MONTH_FORMATTER_PROVIDER,
                        PrizmMonthPipe,
                    ], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"interactive\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  [isOpen]=\"open && interactive\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout [label]=\"label\" [outer]=\"outer\" [forceClear]=\"forceClear\" [size]=\"size\">\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [readOnly]=\"true\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"computedDisabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"\n        value\n          ? computeValue(\n              value.from | prizmMapper : formatter | async,\n              value.to | prizmMapper : formatter | async\n            )\n          : ''\n      \"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      prizmInput\n    />\n\n    <ng-container prizm-input-right>\n      <button [interactive]=\"true\" prizmInputIconButton=\"date-calendar-range\"></button>\n    </ng-container>\n  </prizm-input-layout>\n  <ng-template #dropdown>\n    <prizm-calendar-month\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [value]=\"value\"\n      (monthClick)=\"onMonthClick($event)\"\n      prizmPreventDefault=\"mousedown\"\n    ></prizm-calendar-month>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}\n"] }]
        }], ctorParameters: function () { return [{ type: i7.NgControl, decorators: [{
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
                    args: [PRIZM_MONTH_FORMATTER]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_INPUT_DATE_OPTIONS]
                }] }, { type: i0.Injector }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: ElementRef }]
            }], outer: [{
                type: Input
            }], label: [{
                type: Input
            }], forceClear: [{
                type: Input
            }], size: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], extraButtonInjector: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: [`click`]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbW9udGgtcmFuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1tb250aC1yYW5nZS9pbnB1dC1tb250aC1yYW5nZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LW1vbnRoLXJhbmdlL2lucHV0LW1vbnRoLXJhbmdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM3RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN2RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzVELE9BQU8sRUFBRSwwQkFB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBwcml6bUFzQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L2NvbnRyb2wnO1xuaW1wb3J0IHsgUHJpem1Nb250aFBpcGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcy9tb250aC9tb250aC5waXBlJztcbmltcG9ydCB7IFBSSVpNX01PTlRIX0ZPUk1BVFRFUl9QUk9WSURFUiB9IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9tb250aC1mb3JtYXR0ZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgcHJpem1Bc0ZvY3VzYWJsZUl0ZW1BY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9mb2N1c2FibGUtaXRlbS1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptTnVsbGFibGVDb250cm9sIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvbnVsbGFibGUtY29udHJvbCc7XG5pbXBvcnQgeyBQcml6bU1vbnRoUmFuZ2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvbW9udGgtcmFuZ2UnO1xuaW1wb3J0IHsgUHJpem1XaXRoT3B0aW9uYWxNaW5NYXggfSBmcm9tICcuLi8uLi8uLi90eXBlcy93aXRoLW9wdGlvbmFsLW1pbi1tYXgnO1xuaW1wb3J0IHsgUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9mb2N1c2FibGUtZWxlbWVudC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQcml6bUJvb2xlYW5IYW5kbGVyV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9oYW5kbGVyLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBQcml6bU1vbnRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aC1jb250ZXh0JztcbmltcG9ydCB7IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2Fsd2F5cy1mYWxzZS1oYW5kbGVyJztcbmltcG9ydCB7IFBSSVpNX01PTlRIX0ZPUk1BVFRFUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9tb250aC1mb3JtYXR0ZXInO1xuaW1wb3J0IHsgUHJpem1IYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaGFuZGxlcic7XG5pbXBvcnQgeyBQcml6bUlucHV0RGF0ZU9wdGlvbnMsIFBSSVpNX0lOUFVUX0RBVEVfT1BUSU9OUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9pbnB1dC1kYXRlLW9wdGlvbnMnO1xuaW1wb3J0IHsgUFJJWk1fQ0hBUl9FTl9EQVNIIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL3VuaWNvZGUtY2hhcnMnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWRJbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvaXMtbmF0aXZlLWZvY3VzZWQtaW4nO1xuaW1wb3J0IHsgUHJpem1JbnB1dFNpemUgfSBmcm9tICcuLi9jb21tb24vbW9kZWxzL3ByaXptLWlucHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBwcml6bUkxOG5Jbml0V2l0aEtleSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IFBSSVpNX01PTlRIUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWlucHV0LW1vbnRoLXJhbmdlYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LW1vbnRoLXJhbmdlLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vaW5wdXQtbW9udGgtcmFuZ2UuY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByaXptSTE4bkluaXRXaXRoS2V5KFBSSVpNX01PTlRIUywgJ21vbnRocycpLFxuICAgIHByaXptQXNGb2N1c2FibGVJdGVtQWNjZXNzb3IoUHJpem1JbnB1dE1vbnRoUmFuZ2VDb21wb25lbnQpLFxuICAgIHByaXptQXNDb250cm9sKFByaXptSW5wdXRNb250aFJhbmdlQ29tcG9uZW50KSxcbiAgICBQUklaTV9NT05USF9GT1JNQVRURVJfUFJPVklERVIsXG4gICAgUHJpem1Nb250aFBpcGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRNb250aFJhbmdlQ29tcG9uZW50XG4gIGV4dGVuZHMgQWJzdHJhY3RQcml6bU51bGxhYmxlQ29udHJvbDxQcml6bU1vbnRoUmFuZ2U+XG4gIGltcGxlbWVudHMgUHJpem1XaXRoT3B0aW9uYWxNaW5NYXg8UHJpem1Nb250aD4sIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yXG57XG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfaW5wdXRfbW9udGhfcmFuZ2UnO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnRSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIG91dGVyID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgbGFiZWwgPSAn0JLRi9Cx0LXRgNC40YLQtSDQv9C10YDQuNC+0LQnO1xuXG4gIEBJbnB1dCgpIGZvcmNlQ2xlYXI6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBzaXplOiBQcml6bUlucHV0U2l6ZSA9ICdtJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluOiBQcml6bU1vbnRoID0gdGhpcy5vcHRpb25zLm1pbjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heDogUHJpem1Nb250aCA9IHRoaXMub3B0aW9ucy5tYXg7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBQcml6bUJvb2xlYW5IYW5kbGVyV2l0aENvbnRleHQ8UHJpem1Nb250aCwgUHJpem1Nb250aENvbnRleHQ+ID1cbiAgICBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBleHRyYUJ1dHRvbkluamVjdG9yOiBJbmplY3RvciA9IHRoaXMuaW5qZWN0b3I7XG5cbiAgb3BlbiA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoYGNsaWNrYClcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIEBJbmplY3QoTmdDb250cm9sKVxuICAgIGNvbnRyb2w6IE5nQ29udHJvbCB8IG51bGwsXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUFJJWk1fTU9OVEhfRk9STUFUVEVSKVxuICAgIHJlYWRvbmx5IGZvcm1hdHRlcjogUHJpem1IYW5kbGVyPFByaXptTW9udGggfCBudWxsLCBPYnNlcnZhYmxlPHN0cmluZz4+LFxuICAgIEBJbmplY3QoUFJJWk1fSU5QVVRfREFURV9PUFRJT05TKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogUHJpem1JbnB1dERhdGVPcHRpb25zLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIHN1cGVyKGNvbnRyb2wsIGNoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmF0aXZlRm9jdXNhYmxlRWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudCA/ICh0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KSA6IG51bGw7XG4gIH1cblxuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50XG4gICAgICA/IHByaXptSXNOYXRpdmVGb2N1c2VkSW4odGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGNhbGVuZGFySWNvbigpOiBQcml6bUlucHV0RGF0ZU9wdGlvbnNbJ2ljb24nXSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pY29uO1xuICB9XG5cbiAgcHVibGljIGNvbXB1dGVWYWx1ZShmcm9tOiBzdHJpbmcgfCBudWxsLCB0bzogc3RyaW5nIHwgbnVsbCk6IHN0cmluZyB7XG4gICAgY29uc3QgZm9ybWF0dGVkVG8gPSBmcm9tID09PSB0byAmJiB0aGlzLmZvY3VzZWQgJiYgIXRoaXMucmVhZE9ubHkgPyBgYCA6IHRvO1xuXG4gICAgcmV0dXJuIGAke2Zyb219ICR7UFJJWk1fQ0hBUl9FTl9EQVNIfSAke2Zvcm1hdHRlZFRvfWA7XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICB0aGlzLm9uT3BlbkNoYW5nZSh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vbnRoQ2xpY2sobW9udGg6IFByaXptTW9udGgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCB8fCAhdGhpcy52YWx1ZS5pc1NpbmdsZU1vbnRoKSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUobmV3IFByaXptTW9udGhSYW5nZShtb250aCwgbW9udGgpKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWUoUHJpem1Nb250aFJhbmdlLnNvcnQodGhpcy52YWx1ZS5mcm9tLCBtb250aCkpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gIH1cblxuICBwdWJsaWMgb25BY3RpdmVab25lKGZvY3VzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUZvY3VzZWQoZm9jdXNlZCk7XG5cbiAgICBpZiAoZm9jdXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZhbHVlPy5pc1NpbmdsZU1vbnRoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKG5ldyBQcml6bU1vbnRoUmFuZ2UodGhpcy52YWx1ZS5mcm9tLCB0aGlzLnZhbHVlLmZyb20pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgc2V0RGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5zZXREaXNhYmxlZFN0YXRlKCk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxufVxuIiwiPHByaXptLWRyb3Bkb3duLWhvc3RcbiAgY2xhc3M9XCJ6LWhvc3RlZFwiXG4gIFtjYW5PcGVuXT1cImludGVyYWN0aXZlXCJcbiAgW2NvbnRlbnRdPVwiZHJvcGRvd25cIlxuICBbY2xvc2VCeUVzY109XCJ0cnVlXCJcbiAgW2lzT3Blbl09XCJvcGVuICYmIGludGVyYWN0aXZlXCJcbiAgKGlzT3BlbkNoYW5nZSk9XCJvbk9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gIHByaXptRHJvcGRvd25Ib3N0V2lkdGg9XCJhdXRvXCJcbj5cbiAgPHByaXptLWlucHV0LWxheW91dCBbbGFiZWxdPVwibGFiZWxcIiBbb3V0ZXJdPVwib3V0ZXJcIiBbZm9yY2VDbGVhcl09XCJmb3JjZUNsZWFyXCIgW3NpemVdPVwic2l6ZVwiPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJpbnB1dC1zZWFyY2hcIlxuICAgICAgI2ZvY3VzYWJsZUVsZW1lbnRSZWZcbiAgICAgIFtyZWFkT25seV09XCJ0cnVlXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbZGlzYWJsZWRdPVwiY29tcHV0ZWREaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgW25nTW9kZWxdPVwiXG4gICAgICAgIHZhbHVlXG4gICAgICAgICAgPyBjb21wdXRlVmFsdWUoXG4gICAgICAgICAgICAgIHZhbHVlLmZyb20gfCBwcml6bU1hcHBlciA6IGZvcm1hdHRlciB8IGFzeW5jLFxuICAgICAgICAgICAgICB2YWx1ZS50byB8IHByaXptTWFwcGVyIDogZm9ybWF0dGVyIHwgYXN5bmNcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6ICcnXG4gICAgICBcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQgfHwgJycpXCJcbiAgICAgIHByaXptSW5wdXRcbiAgICAvPlxuXG4gICAgPG5nLWNvbnRhaW5lciBwcml6bS1pbnB1dC1yaWdodD5cbiAgICAgIDxidXR0b24gW2ludGVyYWN0aXZlXT1cInRydWVcIiBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImRhdGUtY2FsZW5kYXItcmFuZ2VcIj48L2J1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG4gIDxuZy10ZW1wbGF0ZSAjZHJvcGRvd24+XG4gICAgPHByaXptLWNhbGVuZGFyLW1vbnRoXG4gICAgICBbZGlzYWJsZWRJdGVtSGFuZGxlcl09XCJkaXNhYmxlZEl0ZW1IYW5kbGVyXCJcbiAgICAgIFttaW5dPVwibWluXCJcbiAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAobW9udGhDbGljayk9XCJvbk1vbnRoQ2xpY2soJGV2ZW50KVwiXG4gICAgICBwcml6bVByZXZlbnREZWZhdWx0PVwibW91c2Vkb3duXCJcbiAgICA+PC9wcml6bS1jYWxlbmRhci1tb250aD5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cbiJdfQ==