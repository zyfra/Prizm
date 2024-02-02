import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Inject, Injector, Input, ViewChild, } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmMonthPipe } from '../../../pipes/month/month.pipe';
import { PRIZM_MONTH_FORMATTER_PROVIDER } from '../../../providers/month-formatter.provider';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { PRIZM_INPUT_DATE_OPTIONS } from '../../../tokens/input-date-options';
import { PRIZM_CHAR_EN_DASH } from '../../../constants/unicode-chars';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import { prizmI18nInitWithKey } from '../../../services';
import { PRIZM_MONTHS } from '../../../tokens';
import { CommonModule } from '@angular/common';
import { PrizmLifecycleModule, PrizmPreventDefaultModule } from '../../../directives';
import { PrizmCalendarMonthModule } from '../../calendar-month';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import { PrizmInputTextModule } from '../input-text';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../directives/lifecycle/lifecycle.directive";
import * as i3 from "../../calendar-month/calendar-month.component";
import * as i4 from "../../dropdowns/dropdown-host/dropdown-host.component";
import * as i5 from "../../../directives/prevent-default/prevent-default.directive";
import * as i6 from "../../table/pipes/mapper/mapper.pipe";
import * as i7 from "../common/input-icon-button/input-icon-button.component";
import * as i8 from "../common/input-layout/input-layout-right.directive";
import * as i9 from "../input-text/input-text.component";
import * as i10 from "@angular/forms";
export class PrizmInputLayoutMonthRangeComponent extends PrizmInputNgControl {
    get interactive() {
        return !this.disabled;
    }
    constructor(formatter, options, injector) {
        super(injector);
        this.formatter = formatter;
        this.options = options;
        this.nativeElementType = 'input-month-range';
        this.hasClearButton = true;
        this.testId_ = 'ui_input_month_range';
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
    get empty() {
        return !this.value || !(this.value instanceof PrizmMonthRange);
    }
    computeValue(from, to) {
        const formattedTo = from === to && this.focused ? `` : to;
        if (!from || !to)
            return '';
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
            this.updateValue(new PrizmMonthRange(month, month));
            return;
        }
        this.updateValue(PrizmMonthRange.sort(this.value.from, month));
        this.close();
        this.changeDetectorRef.markForCheck();
    }
    onOpenChange(open) {
        this.open = open;
        this.changeDetectorRef.markForCheck();
    }
    close() {
        this.open = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutMonthRangeComponent, deps: [{ token: PRIZM_MONTH_FORMATTER }, { token: PRIZM_INPUT_DATE_OPTIONS }, { token: Injector }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputLayoutMonthRangeComponent, isStandalone: true, selector: "prizm-input-layout-month-range", inputs: { placeholder: "placeholder", min: "min", max: "max", disabledItemHandler: "disabledItemHandler", extraButtonInjector: "extraButtonInjector" }, providers: [
            ...prizmI18nInitWithKey(PRIZM_MONTHS, 'months'),
            PRIZM_MONTH_FORMATTER_PROVIDER,
            PrizmMonthPipe,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PrizmInputLayoutMonthRangeComponent),
                multi: true,
            },
            PrizmDestroyService,
            { provide: PrizmInputControl, useExisting: PrizmInputLayoutMonthRangeComponent },
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"interactive\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  [isOpen]=\"open && interactive\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [readOnly]=\"true\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"\n      value\n        ? computeValue(\n            value.from | prizmMapper : formatter | async,\n            value.to | prizmMapper : formatter | async\n          )\n        : ''\n    \"\n    (click)=\"open = !open\"\n    (ngModelChange)=\"onValueChange($event || '')\"\n    prizmInput\n  />\n\n  <ng-template #dropdown>\n    <prizm-calendar-month\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [value]=\"value\"\n      (prizmAfterViewInit)=\"markAsTouched()\"\n      (monthClick)=\"onMonthClick($event)\"\n      prizmPreventDefault=\"mousedown\"\n    ></prizm-calendar-month>\n  </ng-template>\n</prizm-dropdown-host>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"onOpenChange(!open)\"\n    prizmInputIconButton=\"date-calendar-range\"\n  ></button>\n</ng-container>\n", styles: [":host{display:block}.z-hosted{display:block;border-radius:inherit}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i2.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmCalendarMonthModule }, { kind: "component", type: i3.PrizmCalendarMonthComponent, selector: "prizm-calendar-month", inputs: ["value", "year", "disabledItemHandler", "min", "max"], outputs: ["monthClick", "yearChange"] }, { kind: "ngmodule", type: PrizmDropdownHostModule }, { kind: "component", type: i4.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "ngmodule", type: PrizmPreventDefaultModule }, { kind: "directive", type: i5.PrizmPreventDefaultDirective, selector: "[prizmPreventDefault]" }, { kind: "ngmodule", type: PrizmMapperPipeModule }, { kind: "pipe", type: i6.PrizmMapperPipe, name: "prizmMapper" }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "component", type: i7.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i8.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: i9.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i10.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i10.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i10.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutMonthRangeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmInputLayoutMonthRangeComponent.prototype, "min", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", PrizmMonth)
], PrizmInputLayoutMonthRangeComponent.prototype, "max", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputLayoutMonthRangeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputLayoutMonthRangeComponent.prototype, "extraButtonInjector", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutMonthRangeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-layout-month-range`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ...prizmI18nInitWithKey(PRIZM_MONTHS, 'months'),
                        PRIZM_MONTH_FORMATTER_PROVIDER,
                        PrizmMonthPipe,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PrizmInputLayoutMonthRangeComponent),
                            multi: true,
                        },
                        PrizmDestroyService,
                        { provide: PrizmInputControl, useExisting: PrizmInputLayoutMonthRangeComponent },
                    ], standalone: true, imports: [
                        CommonModule,
                        PrizmLifecycleModule,
                        PrizmCalendarMonthModule,
                        PrizmDropdownHostModule,
                        PrizmPreventDefaultModule,
                        PrizmMapperPipeModule,
                        PrizmInputTextModule,
                        FormsModule,
                    ], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"interactive\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  [isOpen]=\"open && interactive\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [readOnly]=\"true\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"\n      value\n        ? computeValue(\n            value.from | prizmMapper : formatter | async,\n            value.to | prizmMapper : formatter | async\n          )\n        : ''\n    \"\n    (click)=\"open = !open\"\n    (ngModelChange)=\"onValueChange($event || '')\"\n    prizmInput\n  />\n\n  <ng-template #dropdown>\n    <prizm-calendar-month\n      [disabledItemHandler]=\"disabledItemHandler\"\n      [min]=\"min\"\n      [max]=\"max\"\n      [value]=\"value\"\n      (prizmAfterViewInit)=\"markAsTouched()\"\n      (monthClick)=\"onMonthClick($event)\"\n      prizmPreventDefault=\"mousedown\"\n    ></prizm-calendar-month>\n  </ng-template>\n</prizm-dropdown-host>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"onOpenChange(!open)\"\n    prizmInputIconButton=\"date-calendar-range\"\n  ></button>\n</ng-container>\n", styles: [":host{display:block}.z-hosted{display:block;border-radius:inherit}\n"] }]
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbW9udGgtcmFuZ2UvaW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbW9udGgtcmFuZ2UvaW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUNMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFeEUsT0FBTyxFQUFFLHdCQUF3QixFQUF5QixNQUFNLG9DQUFvQyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxr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Z0I7c0JBRHhDLFNBQVM7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUsvQyxXQUFXO3NCQUZqQixLQUFLO2dCQU1OLEdBQUc7c0JBRkYsS0FBSztnQkFNTixHQUFHO3NCQUZGLEtBQUs7Z0JBTU4sbUJBQW1CO3NCQUZsQixLQUFLO2dCQU9DLG1CQUFtQjtzQkFGekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1Nb250aFBpcGUgfSBmcm9tICcuLi8uLi8uLi9waXBlcy9tb250aC9tb250aC5waXBlJztcbmltcG9ydCB7IFBSSVpNX01PTlRIX0ZPUk1BVFRFUl9QUk9WSURFUiB9IGZyb20gJy4uLy4uLy4uL3Byb3ZpZGVycy9tb250aC1mb3JtYXR0ZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgUHJpem1Nb250aFJhbmdlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL21vbnRoLXJhbmdlJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bU1vbnRoIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL21vbnRoJztcbmltcG9ydCB7IFByaXptQm9vbGVhbkhhbmRsZXJXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2hhbmRsZXItd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFByaXptTW9udGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvZGF0ZS10aW1lL21vbnRoLWNvbnRleHQnO1xuaW1wb3J0IHsgUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvYWx3YXlzLWZhbHNlLWhhbmRsZXInO1xuaW1wb3J0IHsgUFJJWk1fTU9OVEhfRk9STUFUVEVSIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL21vbnRoLWZvcm1hdHRlcic7XG5pbXBvcnQgeyBQcml6bUhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9oYW5kbGVyJztcbmltcG9ydCB7IFBSSVpNX0lOUFVUX0RBVEVfT1BUSU9OUywgUHJpem1JbnB1dERhdGVPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2lucHV0LWRhdGUtb3B0aW9ucyc7XG5pbXBvcnQgeyBQUklaTV9DSEFSX0VOX0RBU0ggfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvdW5pY29kZS1jaGFycyc7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZEluIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9pcy1uYXRpdmUtZm9jdXNlZC1pbic7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENvbnRyb2wgfSBmcm9tICcuLi9jb21tb24vYmFzZS9pbnB1dC1jb250cm9sLmNsYXNzJztcbmltcG9ydCB7IFByaXptSW5wdXROZ0NvbnRyb2wgfSBmcm9tICcuLi9jb21tb24vYmFzZS9pbnB1dC1uZy1jb250cm9sLmNsYXNzJztcbmltcG9ydCB7IHByaXptSTE4bkluaXRXaXRoS2V5IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgUFJJWk1fTU9OVEhTIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcml6bUxpZmVjeWNsZU1vZHVsZSwgUHJpem1QcmV2ZW50RGVmYXVsdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUHJpem1DYWxlbmRhck1vbnRoTW9kdWxlIH0gZnJvbSAnLi4vLi4vY2FsZW5kYXItbW9udGgnO1xuaW1wb3J0IHsgUHJpem1Ecm9wZG93bkhvc3RNb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bnMvZHJvcGRvd24taG9zdCc7XG5pbXBvcnQgeyBQcml6bU1hcHBlclBpcGVNb2R1bGUgfSBmcm9tICcuLi8uLi90YWJsZS9waXBlcy9tYXBwZXIvbWFwcGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0VGV4dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0LXRleHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBwcml6bS1pbnB1dC1sYXlvdXQtbW9udGgtcmFuZ2VgLFxuICB0ZW1wbGF0ZVVybDogYC4vaW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vaW5wdXQtbGF5b3V0LW1vbnRoLXJhbmdlLmNvbXBvbmVudC5sZXNzYF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcml6bUkxOG5Jbml0V2l0aEtleShQUklaTV9NT05USFMsICdtb250aHMnKSxcbiAgICBQUklaTV9NT05USF9GT1JNQVRURVJfUFJPVklERVIsXG4gICAgUHJpem1Nb250aFBpcGUsXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQcml6bUlucHV0TGF5b3V0TW9udGhSYW5nZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAgeyBwcm92aWRlOiBQcml6bUlucHV0Q29udHJvbCwgdXNlRXhpc3Rpbmc6IFByaXptSW5wdXRMYXlvdXRNb250aFJhbmdlQ29tcG9uZW50IH0sXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1MaWZlY3ljbGVNb2R1bGUsXG4gICAgUHJpem1DYWxlbmRhck1vbnRoTW9kdWxlLFxuICAgIFByaXptRHJvcGRvd25Ib3N0TW9kdWxlLFxuICAgIFByaXptUHJldmVudERlZmF1bHRNb2R1bGUsXG4gICAgUHJpem1NYXBwZXJQaXBlTW9kdWxlLFxuICAgIFByaXptSW5wdXRUZXh0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0TGF5b3V0TW9udGhSYW5nZUNvbXBvbmVudCBleHRlbmRzIFByaXptSW5wdXROZ0NvbnRyb2w8UHJpem1Nb250aFJhbmdlIHwgbnVsbD4ge1xuICByZWFkb25seSBuYXRpdmVFbGVtZW50VHlwZSA9ICdpbnB1dC1tb250aC1yYW5nZSc7XG4gIHJlYWRvbmx5IGhhc0NsZWFyQnV0dG9uID0gdHJ1ZTtcbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9pbnB1dF9tb250aF9yYW5nZSc7XG5cbiAgQFZpZXdDaGlsZCgnZm9jdXNhYmxlRWxlbWVudFJlZicsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZm9jdXNhYmxlRWxlbWVudD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgcGxhY2Vob2xkZXIgPSAnJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbjogUHJpem1Nb250aCA9IHRoaXMub3B0aW9ucy5taW47XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXg6IFByaXptTW9udGggPSB0aGlzLm9wdGlvbnMubWF4O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGlzYWJsZWRJdGVtSGFuZGxlcjogUHJpem1Cb29sZWFuSGFuZGxlcldpdGhDb250ZXh0PFByaXptTW9udGgsIFByaXptTW9udGhDb250ZXh0PiA9XG4gICAgUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgZXh0cmFCdXR0b25JbmplY3RvcjogSW5qZWN0b3IgPSB0aGlzLmluamVjdG9yO1xuXG4gIG9wZW4gPSBmYWxzZTtcblxuICBnZXQgaW50ZXJhY3RpdmUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQUklaTV9NT05USF9GT1JNQVRURVIpXG4gICAgcmVhZG9ubHkgZm9ybWF0dGVyOiBQcml6bUhhbmRsZXI8UHJpem1Nb250aCB8IG51bGwsIE9ic2VydmFibGU8c3RyaW5nPj4sXG4gICAgQEluamVjdChQUklaTV9JTlBVVF9EQVRFX09QVElPTlMpXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBQcml6bUlucHV0RGF0ZU9wdGlvbnMsXG4gICAgQEluamVjdChJbmplY3RvcikgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmF0aXZlRm9jdXNhYmxlRWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudCA/ICh0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KSA6IG51bGw7XG4gIH1cblxuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50XG4gICAgICA/IHByaXptSXNOYXRpdmVGb2N1c2VkSW4odGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGdldCBlbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMudmFsdWUgfHwgISh0aGlzLnZhbHVlIGluc3RhbmNlb2YgUHJpem1Nb250aFJhbmdlKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wdXRlVmFsdWUoZnJvbTogc3RyaW5nIHwgbnVsbCwgdG86IHN0cmluZyB8IG51bGwpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZvcm1hdHRlZFRvID0gZnJvbSA9PT0gdG8gJiYgdGhpcy5mb2N1c2VkID8gYGAgOiB0bztcbiAgICBpZiAoIWZyb20gfHwgIXRvKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGAke2Zyb219ICR7UFJJWk1fQ0hBUl9FTl9EQVNIfSAke2Zvcm1hdHRlZFRvfWA7XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICB0aGlzLm9uT3BlbkNoYW5nZSh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vbnRoQ2xpY2sobW9udGg6IFByaXptTW9udGgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCB8fCAhdGhpcy52YWx1ZS5pc1NpbmdsZU1vbnRoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKG5ldyBQcml6bU1vbnRoUmFuZ2UobW9udGgsIG1vbnRoKSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKFByaXptTW9udGhSYW5nZS5zb3J0KHRoaXMudmFsdWUuZnJvbSwgbW9udGgpKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gIGNsYXNzPVwiei1ob3N0ZWRcIlxuICBbY2FuT3Blbl09XCJpbnRlcmFjdGl2ZVwiXG4gIFtjb250ZW50XT1cImRyb3Bkb3duXCJcbiAgW2Nsb3NlQnlFc2NdPVwidHJ1ZVwiXG4gIFtpc09wZW5dPVwib3BlbiAmJiBpbnRlcmFjdGl2ZVwiXG4gIFtwcml6bURyb3Bkb3duSG9zdF09XCJsYXlvdXRDb21wb25lbnQ/LmVsPy5uYXRpdmVFbGVtZW50XCJcbiAgKGlzT3BlbkNoYW5nZSk9XCJvbk9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gIHByaXptRHJvcGRvd25Ib3N0V2lkdGg9XCJhdXRvXCJcbj5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJpbnB1dC1zZWFyY2hcIlxuICAgICNmb2N1c2FibGVFbGVtZW50UmVmXG4gICAgW3JlYWRPbmx5XT1cInRydWVcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgIFtuZ01vZGVsXT1cIlxuICAgICAgdmFsdWVcbiAgICAgICAgPyBjb21wdXRlVmFsdWUoXG4gICAgICAgICAgICB2YWx1ZS5mcm9tIHwgcHJpem1NYXBwZXIgOiBmb3JtYXR0ZXIgfCBhc3luYyxcbiAgICAgICAgICAgIHZhbHVlLnRvIHwgcHJpem1NYXBwZXIgOiBmb3JtYXR0ZXIgfCBhc3luY1xuICAgICAgICAgIClcbiAgICAgICAgOiAnJ1xuICAgIFwiXG4gICAgKGNsaWNrKT1cIm9wZW4gPSAhb3BlblwiXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQgfHwgJycpXCJcbiAgICBwcml6bUlucHV0XG4gIC8+XG5cbiAgPG5nLXRlbXBsYXRlICNkcm9wZG93bj5cbiAgICA8cHJpem0tY2FsZW5kYXItbW9udGhcbiAgICAgIFtkaXNhYmxlZEl0ZW1IYW5kbGVyXT1cImRpc2FibGVkSXRlbUhhbmRsZXJcIlxuICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgW21heF09XCJtYXhcIlxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgIChwcml6bUFmdGVyVmlld0luaXQpPVwibWFya0FzVG91Y2hlZCgpXCJcbiAgICAgIChtb250aENsaWNrKT1cIm9uTW9udGhDbGljaygkZXZlbnQpXCJcbiAgICAgIHByaXptUHJldmVudERlZmF1bHQ9XCJtb3VzZWRvd25cIlxuICAgID48L3ByaXptLWNhbGVuZGFyLW1vbnRoPlxuICA8L25nLXRlbXBsYXRlPlxuPC9wcml6bS1kcm9wZG93bi1ob3N0PlxuXG48bmctY29udGFpbmVyICpwcml6bUlucHV0TGF5b3V0UmlnaHQ+XG4gIDxidXR0b25cbiAgICBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAoY2xpY2spPVwib25PcGVuQ2hhbmdlKCFvcGVuKVwiXG4gICAgcHJpem1JbnB1dEljb25CdXR0b249XCJkYXRlLWNhbGVuZGFyLXJhbmdlXCJcbiAgPjwvYnV0dG9uPlxuPC9uZy1jb250YWluZXI+XG4iXX0=