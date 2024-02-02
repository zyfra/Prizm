import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, HostListener, Inject, Injector, Input, ViewChild, } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PrizmMonthPipe } from '../../../pipes/month/month.pipe';
import { PRIZM_MONTH_FORMATTER_PROVIDER } from '../../../providers/month-formatter.provider';
import { PRIZM_INPUT_DATE_OPTIONS } from '../../../tokens/input-date-options';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '../common';
import { prizmI18nInitWithKey } from '../../../services';
import { PRIZM_MONTHS } from '../../../tokens';
import { CommonModule } from '@angular/common';
import { PrizmCalendarMonthComponent } from '../../calendar-month';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import { PolymorphOutletDirective, PrizmLifecycleModule, PrizmPreventDefaultModule, } from '../../../directives';
import { PrizmMaskModule } from '../../../modules';
import { PrizmInputTextModule } from '../input-text';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../directives/prevent-default/prevent-default.directive";
import * as i3 from "@angular/forms";
import * as i4 from "../../../directives/lifecycle/lifecycle.directive";
import * as i5 from "../common/input-icon-button/input-icon-button.component";
import * as i6 from "../common/input-layout/input-layout-right.directive";
import * as i7 from "../input-text/input-text.component";
import * as i8 from "../../table/pipes/mapper/mapper.pipe";
export class PrizmInputLayoutMonthComponent extends PrizmInputNgControl {
    get interactive() {
        return !this.disabled;
    }
    onClick() {
        this.open = !this.open;
    }
    constructor(formatter, options, injector) {
        super(injector);
        this.formatter = formatter;
        this.options = options;
        this.hasClearButton = true;
        this.nativeElementType = 'input-month';
        this.testId_ = 'ui_input_month';
        this.min = this.options.min;
        this.extraButtonInjector = this.injector;
        this.placeholder = '';
        this.max = this.options.max;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.open = false;
        this.activeYear = this.value || PrizmDay.currentLocal();
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
    onOpenChange(open) {
        if (open && this.value) {
            this.activeYear = this.value;
        }
        this.open = open;
        this.changeDetectorRef.markForCheck();
    }
    close() {
        this.open = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutMonthComponent, deps: [{ token: PRIZM_MONTH_FORMATTER }, { token: PRIZM_INPUT_DATE_OPTIONS }, { token: Injector }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputLayoutMonthComponent, isStandalone: true, selector: "prizm-input-layout-month", inputs: { min: "min", extraButtonInjector: "extraButtonInjector", placeholder: "placeholder", max: "max", disabledItemHandler: "disabledItemHandler" }, host: { listeners: { "click": "onClick()" } }, providers: [
            ...prizmI18nInitWithKey(PRIZM_MONTHS, 'months'),
            PRIZM_MONTH_FORMATTER_PROVIDER,
            PrizmMonthPipe,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PrizmInputLayoutMonthComponent),
                multi: true,
            },
            PrizmDestroyService,
            { provide: PrizmInputControl, useExisting: PrizmInputLayoutMonthComponent },
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"interactive\"\n  [content]=\"dropdown\"\n  [isOpen]=\"open && interactive\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [placeholder]=\"placeholder\"\n    [readonly]=\"true\"\n    [disabled]=\"disabled\"\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"(value | prizmMapper : formatter | async) || ''\"\n    (ngModelChange)=\"onValueChange($event || '')\"\n    prizmInput\n  />\n  <ng-template #dropdown>\n    <prizm-calendar-month\n      [(year)]=\"activeYear\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [value]=\"value\"\n      (prizmAfterViewInit)=\"markAsTouched()\"\n      (monthClick)=\"onMonthClick($event)\"\n      prizmPreventDefault=\"mousedown\"\n    ></prizm-calendar-month>\n  </ng-template>\n</prizm-dropdown-host>\n<ng-container *prizmInputLayoutRight>\n  <ng-container *polymorphOutlet=\"calendarIcon as data\">\n    <button\n      [prizmInputIconButton]=\"$any(data)\"\n      [interactive]=\"true\"\n      [disabled]=\"disabled\"\n      (click)=\"onOpenChange(!open)\"\n    ></button>\n  </ng-container>\n\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n", styles: [":host{display:block}.z-hosted{display:block;border-radius:inherit}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "component", type: PrizmCalendarMonthComponent, selector: "prizm-calendar-month", inputs: ["value", "year", "disabledItemHandler", "min", "max"], outputs: ["monthClick", "yearChange"] }, { kind: "component", type: PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "ngmodule", type: PrizmPreventDefaultModule }, { kind: "directive", type: i2.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i4.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "directive", type: PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "ngmodule", type: PrizmMaskModule }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "component", type: i5.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i6.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: i7.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "ngmodule", type: PrizmMapperPipeModule }, { kind: "pipe", type: i8.PrizmMapperPipe, name: "prizmMapper" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmInputLayoutMonthComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputLayoutMonthComponent.prototype, "extraButtonInjector", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutMonthComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmInputLayoutMonthComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputLayoutMonthComponent.prototype, "disabledItemHandler", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutMonthComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-layout-month`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ...prizmI18nInitWithKey(PRIZM_MONTHS, 'months'),
                        PRIZM_MONTH_FORMATTER_PROVIDER,
                        PrizmMonthPipe,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PrizmInputLayoutMonthComponent),
                            multi: true,
                        },
                        PrizmDestroyService,
                        { provide: PrizmInputControl, useExisting: PrizmInputLayoutMonthComponent },
                    ], standalone: true, imports: [
                        CommonModule,
                        PrizmCalendarMonthComponent,
                        PrizmDropdownHostComponent,
                        PrizmPreventDefaultModule,
                        FormsModule,
                        PrizmLifecycleModule,
                        PolymorphOutletDirective,
                        PrizmMaskModule,
                        PrizmInputTextModule,
                        PrizmMapperPipeModule,
                    ], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"interactive\"\n  [content]=\"dropdown\"\n  [isOpen]=\"open && interactive\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [placeholder]=\"placeholder\"\n    [readonly]=\"true\"\n    [disabled]=\"disabled\"\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"(value | prizmMapper : formatter | async) || ''\"\n    (ngModelChange)=\"onValueChange($event || '')\"\n    prizmInput\n  />\n  <ng-template #dropdown>\n    <prizm-calendar-month\n      [(year)]=\"activeYear\"\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [value]=\"value\"\n      (prizmAfterViewInit)=\"markAsTouched()\"\n      (monthClick)=\"onMonthClick($event)\"\n      prizmPreventDefault=\"mousedown\"\n    ></prizm-calendar-month>\n  </ng-template>\n</prizm-dropdown-host>\n<ng-container *prizmInputLayoutRight>\n  <ng-container *polymorphOutlet=\"calendarIcon as data\">\n    <button\n      [prizmInputIconButton]=\"$any(data)\"\n      [interactive]=\"true\"\n      [disabled]=\"disabled\"\n      (click)=\"onOpenChange(!open)\"\n    ></button>\n  </ng-container>\n\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n", styles: [":host{display:block}.z-hosted{display:block;border-radius:inherit}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_MONTH_FORMATTER]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_INPUT_DATE_OPTIONS]
                }] }, { type: i0.Injector, decorators: [{
                    type: Inject,
                    args: [Injector]
                }] }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: ElementRef }]
            }], min: [{
                type: Input
            }], extraButtonInjector: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LW1vbnRoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbW9udGgvaW5wdXQtbGF5b3V0LW1vbnRoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbW9udGgvaW5wdXQtbGF5b3V0LW1vbnRoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDN0YsT0FBTyxFQUFFLHdCQUF3QixFQUF5QixNQUFNLG9DQUFvQyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFB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LGdCQUFnQixFQUFFOzsyRUFDc0U7MkZBMUI5RSw4QkFBOEI7a0JBL0IxQyxTQUFTOytCQUNFLDBCQUEwQixtQkFHbkIsdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVCxHQUFHLG9CQUFvQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUM7d0JBQy9DLDhCQUE4Qjt3QkFDOUIsY0FBYzt3QkFDZDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSwrQkFBK0IsQ0FBQzs0QkFDN0QsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0QsbUJBQW1CO3dCQUNuQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLGdDQUFnQyxFQUFFO3FCQUM1RSxjQUNXLElBQUksV0FDUDt3QkFDUCxZQUFZO3dCQUNaLDJCQUEyQjt3QkFDM0IsMEJBQTBCO3dCQUMxQix5QkFBeUI7d0JBQ3pCLFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixxQkFBcUI7cUJBQ3RCOzswQkE0Q0UsTUFBTTsyQkFBQyxxQkFBcUI7OzBCQUU1QixNQUFNOzJCQUFDLHdCQUF3Qjs7MEJBRS9CLE1BQU07MkJBQUMsUUFBUTs0Q0F4Q08sZ0JBQWdCO3NCQUR4QyxTQUFTO3VCQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFLL0MsR0FBRztzQkFGVCxLQUFLO2dCQU1DLG1CQUFtQjtzQkFGekIsS0FBSztnQkFNQyxXQUFXO3NCQUZqQixLQUFLO2dCQU1DLEdBQUc7c0JBRlQsS0FBSztnQkFNQyxtQkFBbUI7c0JBRnpCLEtBQUs7Z0JBY0MsT0FBTztzQkFEYixZQUFZO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1EYXkgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvZGF5JztcbmltcG9ydCB7IFByaXptTW9udGggfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvbW9udGgnO1xuaW1wb3J0IHsgUHJpem1ZZWFyIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL3llYXInO1xuaW1wb3J0IHsgUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvYWx3YXlzLWZhbHNlLWhhbmRsZXInO1xuaW1wb3J0IHsgUHJpem1Nb250aFBpcGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcy9tb250aC9tb250aC5waXBlJztcbmltcG9ydCB7IFBSSVpNX01PTlRIX0ZPUk1BVFRFUl9QUk9WSURFUiB9IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9tb250aC1mb3JtYXR0ZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgUFJJWk1fSU5QVVRfREFURV9PUFRJT05TLCBQcml6bUlucHV0RGF0ZU9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvaW5wdXQtZGF0ZS1vcHRpb25zJztcbmltcG9ydCB7IFBSSVpNX01PTlRIX0ZPUk1BVFRFUiB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9tb250aC1mb3JtYXR0ZXInO1xuaW1wb3J0IHsgUHJpem1EYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0ZS1idXR0b24nO1xuaW1wb3J0IHsgUHJpem1Cb29sZWFuSGFuZGxlciwgUHJpem1IYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaGFuZGxlcic7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZEluIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9pcy1uYXRpdmUtZm9jdXNlZC1pbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENvbnRyb2wsIFByaXptSW5wdXROZ0NvbnRyb2wgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgcHJpem1JMThuSW5pdFdpdGhLZXkgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQUklaTV9NT05USFMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaXptQ2FsZW5kYXJNb250aENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NhbGVuZGFyLW1vbnRoJztcbmltcG9ydCB7IFByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZHJvcGRvd25zL2Ryb3Bkb3duLWhvc3QnO1xuaW1wb3J0IHtcbiAgUG9seW1vcnBoT3V0bGV0RGlyZWN0aXZlLFxuICBQcml6bUxpZmVjeWNsZU1vZHVsZSxcbiAgUHJpem1QcmV2ZW50RGVmYXVsdE1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBQcml6bU1hc2tNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dCc7XG5pbXBvcnQgeyBQcml6bU1hcHBlclBpcGVNb2R1bGUgfSBmcm9tICcuLi8uLi90YWJsZS9waXBlcy9tYXBwZXIvbWFwcGVyLm1vZHVsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWlucHV0LWxheW91dC1tb250aGAsXG4gIHRlbXBsYXRlVXJsOiBgLi9pbnB1dC1sYXlvdXQtbW9udGguY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFtgLi9pbnB1dC1sYXlvdXQtbW9udGguY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByaXptSTE4bkluaXRXaXRoS2V5KFBSSVpNX01PTlRIUywgJ21vbnRocycpLFxuICAgIFBSSVpNX01PTlRIX0ZPUk1BVFRFUl9QUk9WSURFUixcbiAgICBQcml6bU1vbnRoUGlwZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFByaXptSW5wdXRMYXlvdXRNb250aENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAgeyBwcm92aWRlOiBQcml6bUlucHV0Q29udHJvbCwgdXNlRXhpc3Rpbmc6IFByaXptSW5wdXRMYXlvdXRNb250aENvbXBvbmVudCB9LFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFByaXptQ2FsZW5kYXJNb250aENvbXBvbmVudCxcbiAgICBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCxcbiAgICBQcml6bVByZXZlbnREZWZhdWx0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFByaXptTGlmZWN5Y2xlTW9kdWxlLFxuICAgIFBvbHltb3JwaE91dGxldERpcmVjdGl2ZSxcbiAgICBQcml6bU1hc2tNb2R1bGUsXG4gICAgUHJpem1JbnB1dFRleHRNb2R1bGUsXG4gICAgUHJpem1NYXBwZXJQaXBlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TGF5b3V0TW9udGhDb21wb25lbnQgZXh0ZW5kcyBQcml6bUlucHV0TmdDb250cm9sPFByaXptTW9udGggfCBudWxsPiB7XG4gIHJlYWRvbmx5IGhhc0NsZWFyQnV0dG9uID0gdHJ1ZTtcbiAgcmVhZG9ubHkgbmF0aXZlRWxlbWVudFR5cGUgPSAnaW5wdXQtbW9udGgnO1xuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X21vbnRoJztcblxuICBAVmlld0NoaWxkKCdmb2N1c2FibGVFbGVtZW50UmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHB1YmxpYyBvdmVycmlkZSByZWFkb25seSBmb2N1c2FibGVFbGVtZW50PzogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBtaW46IFByaXptTW9udGggPSB0aGlzLm9wdGlvbnMubWluO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIGV4dHJhQnV0dG9uSW5qZWN0b3I6IEluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIG1heDogUHJpem1Nb250aCA9IHRoaXMub3B0aW9ucy5tYXg7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgZGlzYWJsZWRJdGVtSGFuZGxlcjogUHJpem1Cb29sZWFuSGFuZGxlcjxQcml6bU1vbnRoPiA9IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSO1xuICBwdWJsaWMgb3BlbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBhY3RpdmVZZWFyOiBQcml6bVllYXIgPSB0aGlzLnZhbHVlIHx8IFByaXptRGF5LmN1cnJlbnRMb2NhbCgpO1xuXG4gIHB1YmxpYyByaWdodEJ1dHRvbnMkITogQmVoYXZpb3JTdWJqZWN0PFByaXptRGF0ZUJ1dHRvbltdPjtcblxuICBnZXQgaW50ZXJhY3RpdmUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcihgY2xpY2tgKVxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUFJJWk1fTU9OVEhfRk9STUFUVEVSKVxuICAgIHJlYWRvbmx5IGZvcm1hdHRlcjogUHJpem1IYW5kbGVyPFByaXptTW9udGggfCBudWxsLCBPYnNlcnZhYmxlPHN0cmluZz4+LFxuICAgIEBJbmplY3QoUFJJWk1fSU5QVVRfREFURV9PUFRJT05TKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogUHJpem1JbnB1dERhdGVPcHRpb25zLFxuICAgIEBJbmplY3QoSW5qZWN0b3IpIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQoKTogSFRNTElucHV0RWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQgPyAodGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudD8ubmF0aXZlRWxlbWVudFxuICAgICAgPyBwcml6bUlzTmF0aXZlRm9jdXNlZEluKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50KVxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBjYWxlbmRhckljb24oKTogUHJpem1JbnB1dERhdGVPcHRpb25zWydpY29uJ10ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvbjtcbiAgfVxuXG4gIHB1YmxpYyBvblZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKG51bGwpO1xuICAgIHRoaXMub25PcGVuQ2hhbmdlKHRydWUpO1xuICB9XG5cbiAgcHVibGljIG9uTW9udGhDbGljayhtb250aDogUHJpem1Nb250aCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUobW9udGgpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChvcGVuICYmIHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuYWN0aXZlWWVhciA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gIGNsYXNzPVwiei1ob3N0ZWRcIlxuICBbY2FuT3Blbl09XCJpbnRlcmFjdGl2ZVwiXG4gIFtjb250ZW50XT1cImRyb3Bkb3duXCJcbiAgW2lzT3Blbl09XCJvcGVuICYmIGludGVyYWN0aXZlXCJcbiAgW3ByaXptRHJvcGRvd25Ib3N0XT1cImxheW91dENvbXBvbmVudD8uZWw/Lm5hdGl2ZUVsZW1lbnRcIlxuICAoaXNPcGVuQ2hhbmdlKT1cIm9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcbiAgcHJpem1Ecm9wZG93bkhvc3RXaWR0aD1cImF1dG9cIlxuPlxuICA8aW5wdXRcbiAgICBjbGFzcz1cImlucHV0LXNlYXJjaFwiXG4gICAgI2ZvY3VzYWJsZUVsZW1lbnRSZWZcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgIFtyZWFkb25seV09XCJ0cnVlXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgW25nTW9kZWxdPVwiKHZhbHVlIHwgcHJpem1NYXBwZXIgOiBmb3JtYXR0ZXIgfCBhc3luYykgfHwgJydcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50IHx8ICcnKVwiXG4gICAgcHJpem1JbnB1dFxuICAvPlxuICA8bmctdGVtcGxhdGUgI2Ryb3Bkb3duPlxuICAgIDxwcml6bS1jYWxlbmRhci1tb250aFxuICAgICAgWyh5ZWFyKV09XCJhY3RpdmVZZWFyXCJcbiAgICAgIFtkaXNhYmxlZEl0ZW1IYW5kbGVyXT1cImRpc2FibGVkSXRlbUhhbmRsZXJcIlxuICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgW21heF09XCJtYXhcIlxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgIChwcml6bUFmdGVyVmlld0luaXQpPVwibWFya0FzVG91Y2hlZCgpXCJcbiAgICAgIChtb250aENsaWNrKT1cIm9uTW9udGhDbGljaygkZXZlbnQpXCJcbiAgICAgIHByaXptUHJldmVudERlZmF1bHQ9XCJtb3VzZWRvd25cIlxuICAgID48L3ByaXptLWNhbGVuZGFyLW1vbnRoPlxuICA8L25nLXRlbXBsYXRlPlxuPC9wcml6bS1kcm9wZG93bi1ob3N0PlxuPG5nLWNvbnRhaW5lciAqcHJpem1JbnB1dExheW91dFJpZ2h0PlxuICA8bmctY29udGFpbmVyICpwb2x5bW9ycGhPdXRsZXQ9XCJjYWxlbmRhckljb24gYXMgZGF0YVwiPlxuICAgIDxidXR0b25cbiAgICAgIFtwcml6bUlucHV0SWNvbkJ1dHRvbl09XCIkYW55KGRhdGEpXCJcbiAgICAgIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAoY2xpY2spPVwib25PcGVuQ2hhbmdlKCFvcGVuKVwiXG4gICAgPjwvYnV0dG9uPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidXR0b24gb2YgcmlnaHRCdXR0b25zJCB8IGFzeW5jXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uLnRlbXBsYXRlXCI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=