import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Injector, Input, Optional, Self, ViewChild, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmMonth } from '../../../@core/date-time/month';
import { prizmAsControl } from '../../../abstract/control';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PrizmMonthPipe } from '../../../pipes/month/month.pipe';
import { PRIZM_MONTH_FORMATTER_PROVIDER } from '../../../providers/month-formatter.provider';
import { prizmAsFocusableItemAccessor } from '../../../tokens/focusable-item-accessor';
import { PRIZM_INPUT_DATE_OPTIONS } from '../../../tokens/input-date-options';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { prizmI18nInitWithKey } from '../../../services';
import { PRIZM_MONTHS } from '../../../tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../calendar-month/calendar-month.component";
import * as i3 from "../../dropdowns/dropdown-host/dropdown-host.component";
import * as i4 from "../../../directives/prevent-default/prevent-default.directive";
import * as i5 from "@angular/forms";
import * as i6 from "../../../directives/polymorph/directives/outlet";
import * as i7 from "../common/input-layout/input-layout.component";
import * as i8 from "../common/input-icon-button/input-icon-button.component";
import * as i9 from "../input-text/input-text.component";
import * as i10 from "../../table/pipes/mapper/mapper.pipe";
export class PrizmInputMonthComponent extends AbstractPrizmNullableControl {
    onClick() {
        this.open = !this.open;
    }
    constructor(control, changeDetectorRef, formatter, options, injector) {
        super(control, changeDetectorRef);
        this.formatter = formatter;
        this.options = options;
        this.injector = injector;
        this.min = this.options.min;
        this.outer = false;
        this.extraButtonInjector = this.injector;
        this.label = 'Выберите месяц';
        this.forceClear = null;
        this.size = 'm';
        this.placeholder = '';
        this.max = this.options.max;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.open = false;
        this.activeYear = this.value || PrizmDay.currentLocal();
        this.testId_ = 'ui_input_month';
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
    onValueChange(value) {
        if (value) {
            return;
        }
        this.updateValue(null);
        this.onOpenChange(true);
    }
    onMonthClick(month) {
        this.updateValue(month);
        this.close();
    }
    onFocused(focused) {
        this.updateFocused(focused);
    }
    onOpenChange(open) {
        if (open && this.value) {
            this.activeYear = this.value;
        }
        this.open = open;
    }
    setDisabledState() {
        super.setDisabledState();
        this.close();
    }
    close() {
        this.open = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputMonthComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: ChangeDetectorRef }, { token: PRIZM_MONTH_FORMATTER }, { token: PRIZM_INPUT_DATE_OPTIONS }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputMonthComponent, selector: "prizm-input-month", inputs: { min: "min", outer: "outer", extraButtonInjector: "extraButtonInjector", label: "label", forceClear: "forceClear", size: "size", placeholder: "placeholder", max: "max", disabledItemHandler: "disabledItemHandler" }, host: { listeners: { "click": "onClick()" } }, providers: [
            ...prizmI18nInitWithKey(PRIZM_MONTHS, 'months'),
            prizmAsFocusableItemAccessor(PrizmInputMonthComponent),
            prizmAsControl(PrizmInputMonthComponent),
            PRIZM_MONTH_FORMATTER_PROVIDER,
            PrizmMonthPipe,
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"interactive\"\n  [content]=\"dropdown\"\n  [isOpen]=\"open && interactive\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout [label]=\"label\" [outer]=\"outer\" [forceClear]=\"forceClear\" [size]=\"size\">\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [placeholder]=\"placeholder\"\n      [readonly]=\"true\"\n      [disabled]=\"computedDisabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"(value | prizmMapper : formatter | async) || ''\"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <ng-container *polymorphOutlet=\"calendarIcon as data; context: { $implicit: size }\">\n        <button [prizmInputIconButton]=\"$any(data)\" [interactive]=\"true\"></button>\n      </ng-container>\n\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n  <ng-template #dropdown>\n    <prizm-calendar-month\n      [(year)]=\"activeYear\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [value]=\"value\"\n      (monthClick)=\"onMonthClick($event)\"\n      prizmPreventDefault=\"mousedown\"\n    ></prizm-calendar-month>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.PrizmCalendarMonthComponent, selector: "prizm-calendar-month", inputs: ["value", "year", "disabledItemHandler", "min", "max"], outputs: ["monthClick", "yearChange"] }, { kind: "component", type: i3.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "directive", type: i4.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i6.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "component", type: i7.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i8.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i9.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: i10.PrizmMapperPipe, name: "prizmMapper" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmInputMonthComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputMonthComponent.prototype, "outer", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputMonthComponent.prototype, "extraButtonInjector", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputMonthComponent.prototype, "label", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputMonthComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputMonthComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmInputMonthComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputMonthComponent.prototype, "disabledItemHandler", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputMonthComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-month`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ...prizmI18nInitWithKey(PRIZM_MONTHS, 'months'),
                        prizmAsFocusableItemAccessor(PrizmInputMonthComponent),
                        prizmAsControl(PrizmInputMonthComponent),
                        PRIZM_MONTH_FORMATTER_PROVIDER,
                        PrizmMonthPipe,
                    ], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"interactive\"\n  [content]=\"dropdown\"\n  [isOpen]=\"open && interactive\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout [label]=\"label\" [outer]=\"outer\" [forceClear]=\"forceClear\" [size]=\"size\">\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [placeholder]=\"placeholder\"\n      [readonly]=\"true\"\n      [disabled]=\"computedDisabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"(value | prizmMapper : formatter | async) || ''\"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <ng-container *polymorphOutlet=\"calendarIcon as data; context: { $implicit: size }\">\n        <button [prizmInputIconButton]=\"$any(data)\" [interactive]=\"true\"></button>\n      </ng-container>\n\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n  <ng-template #dropdown>\n    <prizm-calendar-month\n      [(year)]=\"activeYear\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [value]=\"value\"\n      (monthClick)=\"onMonthClick($event)\"\n      prizmPreventDefault=\"mousedown\"\n    ></prizm-calendar-month>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}\n"] }]
        }], ctorParameters: function () { return [{ type: i5.NgControl, decorators: [{
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
            }], min: [{
                type: Input
            }], outer: [{
                type: Input
            }], extraButtonInjector: [{
                type: Input
            }], label: [{
                type: Input
            }], forceClear: [{
                type: Input
            }], size: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], max: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: [`click`]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbW9udGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1tb250aC9pbnB1dC1tb250aC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LW1vbnRoL2lucHV0LW1vbnRoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZG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QkFBQyxxQkFBcUI7OzBCQUU1QixNQUFNOzJCQUFDLHdCQUF3QjttRUF0RGxCLGdCQUFnQjtzQkFEL0IsU0FBUzt1QkFBQyxxQkFBcUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Z0JBSy9DLEdBQUc7c0JBRlQsS0FBSztnQkFNQyxLQUFLO3NCQUZYLEtBQUs7Z0JBTUMsbUJBQW1CO3NCQUZ6QixLQUFLO2dCQU1DLEtBQUs7c0JBRlgsS0FBSztnQkFJRyxVQUFVO3NCQUFsQixLQUFLO2dCQUlDLElBQUk7c0JBRlYsS0FBSztnQkFNQyxXQUFXO3NCQUZqQixLQUFLO2dCQU1DLEdBQUc7c0JBRlQsS0FBSztnQkFNQyxtQkFBbUI7c0JBRnpCLEtBQUs7Z0JBV0MsT0FBTztzQkFEYixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bURheSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9kYXknO1xuaW1wb3J0IHsgUHJpem1Nb250aCB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS9tb250aCc7XG5pbXBvcnQgeyBQcml6bVllYXIgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUveWVhcic7XG5pbXBvcnQgeyBwcml6bUFzQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L2NvbnRyb2wnO1xuaW1wb3J0IHsgQWJzdHJhY3RQcml6bU51bGxhYmxlQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L251bGxhYmxlLWNvbnRyb2wnO1xuaW1wb3J0IHsgUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvYWx3YXlzLWZhbHNlLWhhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1Nb250aFBpcGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcy9tb250aC9tb250aC5waXBlJztcbmltcG9ydCB7IFBSSVpNX01PTlRIX0ZPUk1BVFRFUl9QUk9WSURFUiB9IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9tb250aC1mb3JtYXR0ZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgcHJpem1Bc0ZvY3VzYWJsZUl0ZW1BY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9mb2N1c2FibGUtaXRlbS1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBQUklaTV9JTlBVVF9EQVRFX09QVElPTlMsIFByaXptSW5wdXREYXRlT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9pbnB1dC1kYXRlLW9wdGlvbnMnO1xuaW1wb3J0IHsgUFJJWk1fTU9OVEhfRk9STUFUVEVSIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL21vbnRoLWZvcm1hdHRlcic7XG5pbXBvcnQgeyBQcml6bURhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRlLWJ1dHRvbic7XG5pbXBvcnQgeyBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3NvciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2ZvY3VzYWJsZS1lbGVtZW50LWFjY2Vzc29yJztcbmltcG9ydCB7IFByaXptQm9vbGVhbkhhbmRsZXIsIFByaXptSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2hhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1XaXRoT3B0aW9uYWxNaW5NYXggfSBmcm9tICcuLi8uLi8uLi90eXBlcy93aXRoLW9wdGlvbmFsLW1pbi1tYXgnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWRJbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvaXMtbmF0aXZlLWZvY3VzZWQtaW4nO1xuaW1wb3J0IHsgUHJpem1JbnB1dFNpemUgfSBmcm9tICcuLi9jb21tb24vbW9kZWxzL3ByaXptLWlucHV0Lm1vZGVscyc7XG5pbXBvcnQgeyBwcml6bUkxOG5Jbml0V2l0aEtleSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IFBSSVpNX01PTlRIUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWlucHV0LW1vbnRoYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LW1vbnRoLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vaW5wdXQtbW9udGguY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByaXptSTE4bkluaXRXaXRoS2V5KFBSSVpNX01PTlRIUywgJ21vbnRocycpLFxuICAgIHByaXptQXNGb2N1c2FibGVJdGVtQWNjZXNzb3IoUHJpem1JbnB1dE1vbnRoQ29tcG9uZW50KSxcbiAgICBwcml6bUFzQ29udHJvbChQcml6bUlucHV0TW9udGhDb21wb25lbnQpLFxuICAgIFBSSVpNX01PTlRIX0ZPUk1BVFRFUl9QUk9WSURFUixcbiAgICBQcml6bU1vbnRoUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dE1vbnRoQ29tcG9uZW50XG4gIGV4dGVuZHMgQWJzdHJhY3RQcml6bU51bGxhYmxlQ29udHJvbDxQcml6bU1vbnRoPlxuICBpbXBsZW1lbnRzIFByaXptV2l0aE9wdGlvbmFsTWluTWF4PFByaXptTW9udGg+LCBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3Nvclxue1xuICBAVmlld0NoaWxkKCdmb2N1c2FibGVFbGVtZW50UmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHB1YmxpYyByZWFkb25seSBmb2N1c2FibGVFbGVtZW50PzogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBtaW46IFByaXptTW9udGggPSB0aGlzLm9wdGlvbnMubWluO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIG91dGVyID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgZXh0cmFCdXR0b25JbmplY3RvcjogSW5qZWN0b3IgPSB0aGlzLmluamVjdG9yO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIGxhYmVsID0gJ9CS0YvQsdC10YDQuNGC0LUg0LzQtdGB0Y/Rhic7XG5cbiAgQElucHV0KCkgZm9yY2VDbGVhcjogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIHNpemU6IFByaXptSW5wdXRTaXplID0gJ20nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgbWF4OiBQcml6bU1vbnRoID0gdGhpcy5vcHRpb25zLm1heDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBkaXNhYmxlZEl0ZW1IYW5kbGVyOiBQcml6bUJvb2xlYW5IYW5kbGVyPFByaXptTW9udGg+ID0gUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVI7XG4gIHB1YmxpYyBvcGVuID0gZmFsc2U7XG5cbiAgcHVibGljIGFjdGl2ZVllYXI6IFByaXptWWVhciA9IHRoaXMudmFsdWUgfHwgUHJpem1EYXkuY3VycmVudExvY2FsKCk7XG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfaW5wdXRfbW9udGgnO1xuXG4gIHB1YmxpYyByaWdodEJ1dHRvbnMkITogQmVoYXZpb3JTdWJqZWN0PFByaXptRGF0ZUJ1dHRvbltdPjtcblxuICBASG9zdExpc3RlbmVyKGBjbGlja2ApXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBAU2VsZigpXG4gICAgQEluamVjdChOZ0NvbnRyb2wpXG4gICAgY29udHJvbDogTmdDb250cm9sIHwgbnVsbCxcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChQUklaTV9NT05USF9GT1JNQVRURVIpXG4gICAgcmVhZG9ubHkgZm9ybWF0dGVyOiBQcml6bUhhbmRsZXI8UHJpem1Nb250aCB8IG51bGwsIE9ic2VydmFibGU8c3RyaW5nPj4sXG4gICAgQEluamVjdChQUklaTV9JTlBVVF9EQVRFX09QVElPTlMpXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBQcml6bUlucHV0RGF0ZU9wdGlvbnMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgc3VwZXIoY29udHJvbCwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgcHVibGljIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50ID8gKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpIDogbnVsbDtcbiAgfVxuXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnRcbiAgICAgID8gcHJpem1Jc05hdGl2ZUZvY3VzZWRJbih0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudClcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICBnZXQgY2FsZW5kYXJJY29uKCk6IFByaXptSW5wdXREYXRlT3B0aW9uc1snaWNvbiddIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmljb247XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICB0aGlzLm9uT3BlbkNoYW5nZSh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vbnRoQ2xpY2sobW9udGg6IFByaXptTW9udGgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKG1vbnRoKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBwdWJsaWMgb25Gb2N1c2VkKGZvY3VzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUZvY3VzZWQoZm9jdXNlZCk7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAob3BlbiAmJiB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2ZVllYXIgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHNldERpc2FibGVkU3RhdGUoKTogdm9pZCB7XG4gICAgc3VwZXIuc2V0RGlzYWJsZWRTdGF0ZSgpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gIGNsYXNzPVwiei1ob3N0ZWRcIlxuICBbY2FuT3Blbl09XCJpbnRlcmFjdGl2ZVwiXG4gIFtjb250ZW50XT1cImRyb3Bkb3duXCJcbiAgW2lzT3Blbl09XCJvcGVuICYmIGludGVyYWN0aXZlXCJcbiAgKGlzT3BlbkNoYW5nZSk9XCJvbk9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gIHByaXptRHJvcGRvd25Ib3N0V2lkdGg9XCJhdXRvXCJcbj5cbiAgPHByaXptLWlucHV0LWxheW91dCBbbGFiZWxdPVwibGFiZWxcIiBbb3V0ZXJdPVwib3V0ZXJcIiBbZm9yY2VDbGVhcl09XCJmb3JjZUNsZWFyXCIgW3NpemVdPVwic2l6ZVwiPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJpbnB1dC1zZWFyY2hcIlxuICAgICAgI2ZvY3VzYWJsZUVsZW1lbnRSZWZcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbcmVhZG9ubHldPVwidHJ1ZVwiXG4gICAgICBbZGlzYWJsZWRdPVwiY29tcHV0ZWREaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgW25nTW9kZWxdPVwiKHZhbHVlIHwgcHJpem1NYXBwZXIgOiBmb3JtYXR0ZXIgfCBhc3luYykgfHwgJydcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQgfHwgJycpXCJcbiAgICAgIHByaXptSW5wdXRcbiAgICAvPlxuICAgIDxuZy1jb250YWluZXIgcHJpem0taW5wdXQtcmlnaHQ+XG4gICAgICA8bmctY29udGFpbmVyICpwb2x5bW9ycGhPdXRsZXQ9XCJjYWxlbmRhckljb24gYXMgZGF0YTsgY29udGV4dDogeyAkaW1wbGljaXQ6IHNpemUgfVwiPlxuICAgICAgICA8YnV0dG9uIFtwcml6bUlucHV0SWNvbkJ1dHRvbl09XCIkYW55KGRhdGEpXCIgW2ludGVyYWN0aXZlXT1cInRydWVcIj48L2J1dHRvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidXR0b24gb2YgcmlnaHRCdXR0b25zJCB8IGFzeW5jXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uLnRlbXBsYXRlXCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG4gIDxuZy10ZW1wbGF0ZSAjZHJvcGRvd24+XG4gICAgPHByaXptLWNhbGVuZGFyLW1vbnRoXG4gICAgICBbKHllYXIpXT1cImFjdGl2ZVllYXJcIlxuICAgICAgW2Rpc2FibGVkSXRlbUhhbmRsZXJdPVwiZGlzYWJsZWRJdGVtSGFuZGxlclwiXG4gICAgICBbbWluXT1cIm1pblwiXG4gICAgICBbbWF4XT1cIm1heFwiXG4gICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgKG1vbnRoQ2xpY2spPVwib25Nb250aENsaWNrKCRldmVudClcIlxuICAgICAgcHJpem1QcmV2ZW50RGVmYXVsdD1cIm1vdXNlZG93blwiXG4gICAgPjwvcHJpem0tY2FsZW5kYXItbW9udGg+XG4gIDwvbmctdGVtcGxhdGU+XG48L3ByaXptLWRyb3Bkb3duLWhvc3Q+XG4iXX0=