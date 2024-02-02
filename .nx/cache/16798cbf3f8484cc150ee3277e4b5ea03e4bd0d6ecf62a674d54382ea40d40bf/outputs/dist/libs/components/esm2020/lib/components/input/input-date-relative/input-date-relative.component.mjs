import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Injector, Input, ViewChild, } from '@angular/core';
import { UntypedFormControl, NG_VALUE_ACCESSOR, NgControl, Validators, } from '@angular/forms';
import { Subscription } from 'rxjs';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { getDefaultRelativeDateMenuItems, } from './input-date-relative.models';
import { ParseTextInput, RenderText, UpdateActiveItem } from './input-date-relative.utils';
import { prizmIsNativeFocused } from '../../../util';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PrizmFormControlHelpers } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../common/input-layout/input-layout.component";
import * as i3 from "../common/input-icon-button/input-icon-button.component";
import * as i4 from "../input-text/input-text.component";
import * as i5 from "@angular/forms";
import * as i6 from "../../dropdowns/dropdown-host/dropdown-host.component";
const MenuItems = getDefaultRelativeDateMenuItems();
const ValidationPattern = '(T|\\*)((\\+|\\-)(\\d+)(Y|M|d|h|m|s))?((\\+|\\-)(\\d+)(Y|M|d|h|m|s))?';
export class PrizmInputDateRelativeComponent extends PrizmAbstractTestId {
    set disabled(value) {
        const ngControl = this.injector.get(NgControl);
        if (ngControl.control) {
            if (value) {
                ngControl.control.disable();
            }
            else {
                ngControl.control.enable();
            }
        }
        else {
            this.setDisabledState(value);
        }
    }
    get disabled() {
        return this.value.disabled;
    }
    constructor(injector, cdr) {
        super();
        this.injector = injector;
        this.cdr = cdr;
        this.label = 'Относительное';
        this.placeholder = 'Выберите относительное время';
        this.forceClear = null;
        this.canOpen = true;
        this.outer = false;
        this.size = 'm';
        this.extraButtonInjector = this.injector;
        this.testId_ = 'ui_input_date_relative';
        this.isOpen = false;
        this.value = new UntypedFormControl('', Validators.pattern(ValidationPattern));
        this.timeItems = [...MenuItems.time];
        this.directionItems = [...MenuItems.direction];
        this.periodItems = [...MenuItems.period];
        this.activeNumber = '';
        this.subscriptions = new Subscription();
    }
    ngOnInit() {
        this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
    }
    ngAfterViewInit() {
        const control = this.injector.get(NgControl);
        this.value.addValidators(control.validator);
        this.subscriptions.add(this.value.valueChanges.subscribe(() => {
            this.parseInputValue();
            this.actualizeMenu();
            this.onChangeFn(this.value.value);
        }));
        this.subscriptions.add(PrizmFormControlHelpers.syncValues(control, v => v, v => v, this.value).subscribe());
        this.subscriptions.add(PrizmFormControlHelpers.syncStates(control, true, this.value).subscribe());
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    writeValue(value) {
        this.value.markAsDirty();
        this.value.setValue(value?.toString());
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.value.disable();
        }
        else {
            this.value.enable();
        }
        this.cdr.markForCheck();
    }
    clearValue() {
        this.value.setValue('');
    }
    onMenuItemClick(event, item) {
        event.stopImmediatePropagation();
        switch (item.groupId) {
            case 'time':
                this.activeTimeId = item.id;
                break;
            case 'direction':
                this.activeDirectionId = item.id;
                break;
            case 'period':
                this.activePeriodId = item.id;
                break;
        }
        this.actualizeMenu();
        this.actualizeInput();
        this.onChangeFn(this.value.value);
        this.cdr.detectChanges();
    }
    /**
     * Parses control input value
     */
    parseInputValue() {
        const textInput = this.value.value;
        const model = ParseTextInput(textInput);
        this.activeTimeId = model.time;
        this.activeDirectionId = model.direction;
        this.activeNumber = model.number;
        this.activePeriodId = model.period;
    }
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return prizmIsNativeFocusedIn(this.focusableElement?.nativeElement);
    }
    /**
     * Set control input as text
     */
    actualizeInput() {
        const stringValue = RenderText({
            time: this.activeTimeId,
            number: this.activeNumber,
            direction: this.activeDirectionId,
            period: this.activePeriodId,
        });
        this.value.setValue(stringValue);
    }
    onClear() {
        this.activeTimeId = null;
        this.actualizeMenu();
    }
    /**
     * Actualize menu items, as radio group button
     */
    actualizeMenu() {
        this.timeItems = UpdateActiveItem(this.timeItems, this.activeTimeId);
        this.directionItems = UpdateActiveItem(this.directionItems, this.activeDirectionId);
        this.periodItems = UpdateActiveItem(this.periodItems, this.activePeriodId);
    }
    onOpenChange(state) {
        this.isOpen = state;
    }
    safeOpenModal() {
        const inputElement = this.focusableElement?.nativeElement;
        if (!this.isOpen && !this.disabled && inputElement && prizmIsNativeFocused(inputElement)) {
            this.isOpen = true;
            this.cdr.markForCheck();
        }
    }
}
PrizmInputDateRelativeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateRelativeComponent, deps: [{ token: i0.Injector }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputDateRelativeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputDateRelativeComponent, selector: "prizm-input-date-relative", inputs: { label: "label", placeholder: "placeholder", forceClear: "forceClear", disabled: "disabled", showClear: "showClear", canOpen: "canOpen", outer: "outer", size: "size", extraButtonInjector: "extraButtonInjector" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PrizmInputDateRelativeComponent),
            multi: true,
        },
    ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [content]=\"dropdown\"\n  [isOpen]=\"isOpen && canOpen\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [outer]=\"outer\"\n    [forceClear]=\"forceClear\"\n    [size]=\"size\"\n    (click)=\"safeOpenModal()\"\n  >\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [formControl]=\"value\"\n      [placeholder]=\"placeholder\"\n      (onClear)=\"onClear()\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <button\n        [interactive]=\"true\"\n        (click)=\"focusableElementRef.focus()\"\n        prizmInputIconButton=\"date-update\"\n      ></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n</prizm-dropdown-host>\n\n<ng-template #dropdown>\n  <ul class=\"prizm-datepicker-relative-menu\" role=\"listbox\">\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: timeItems }\"></ng-container>\n    <li class=\"relative-menu-item-divider\"></li>\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: directionItems }\"></ng-container>\n    <li class=\"relative-menu-item-divider\"></li>\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: periodItems }\"></ng-container>\n\n    <ng-template #menuItemsTemplate let-items=\"items\">\n      <li\n        class=\"relative-menu-item\"\n        *ngFor=\"let item of items\"\n        [class.relative-menu-item-active]=\"item.active\"\n        (click)=\"onMenuItemClick($event, item)\"\n        role=\"button\"\n        tabindex=\"0\"\n      >\n        <div class=\"relative-menu-item-icon\">\n          <i class=\"prizm-icon {{ item.icon }}\"></i>\n        </div>\n        <div class=\"relative-menu-item-label\">{{ item.label }}</div>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n", styles: [".prizm-datepicker-relative-menu{list-style:none;margin:0;padding:8px 0}.relative-menu-item{height:44px;padding:0 24px;display:flex;align-items:center;cursor:pointer}.relative-menu-item-icon{font-size:18px;display:inherit}.relative-menu-item-label{padding-left:8px}.relative-menu-item-divider{margin:2px 0;border-bottom:1px solid var(--prizm-border-widget)}.relative-menu-item:hover{background:var(--prizm-bg-dashboard-forms)}.relative-menu-item-active,.relative-menu-item-active:hover{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20))}.prizm-datepicker-relative-menu{color:var(--prizm-text-contrast)}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i3.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i4.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i6.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRelativeComponent.prototype, "label", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRelativeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp()
    /**
     * @deprecated
     * */
    ,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PrizmInputDateRelativeComponent.prototype, "disabled", null);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Boolean)
], PrizmInputDateRelativeComponent.prototype, "showClear", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRelativeComponent.prototype, "canOpen", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateRelativeComponent.prototype, "outer", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputDateRelativeComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputDateRelativeComponent.prototype, "extraButtonInjector", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateRelativeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-input-date-relative', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PrizmInputDateRelativeComponent),
                            multi: true,
                        },
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [content]=\"dropdown\"\n  [isOpen]=\"isOpen && canOpen\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [outer]=\"outer\"\n    [forceClear]=\"forceClear\"\n    [size]=\"size\"\n    (click)=\"safeOpenModal()\"\n  >\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [formControl]=\"value\"\n      [placeholder]=\"placeholder\"\n      (onClear)=\"onClear()\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <button\n        [interactive]=\"true\"\n        (click)=\"focusableElementRef.focus()\"\n        prizmInputIconButton=\"date-update\"\n      ></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n</prizm-dropdown-host>\n\n<ng-template #dropdown>\n  <ul class=\"prizm-datepicker-relative-menu\" role=\"listbox\">\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: timeItems }\"></ng-container>\n    <li class=\"relative-menu-item-divider\"></li>\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: directionItems }\"></ng-container>\n    <li class=\"relative-menu-item-divider\"></li>\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: periodItems }\"></ng-container>\n\n    <ng-template #menuItemsTemplate let-items=\"items\">\n      <li\n        class=\"relative-menu-item\"\n        *ngFor=\"let item of items\"\n        [class.relative-menu-item-active]=\"item.active\"\n        (click)=\"onMenuItemClick($event, item)\"\n        role=\"button\"\n        tabindex=\"0\"\n      >\n        <div class=\"relative-menu-item-icon\">\n          <i class=\"prizm-icon {{ item.icon }}\"></i>\n        </div>\n        <div class=\"relative-menu-item-label\">{{ item.label }}</div>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n", styles: [".prizm-datepicker-relative-menu{list-style:none;margin:0;padding:8px 0}.relative-menu-item{height:44px;padding:0 24px;display:flex;align-items:center;cursor:pointer}.relative-menu-item-icon{font-size:18px;display:inherit}.relative-menu-item-label{padding-left:8px}.relative-menu-item-divider{margin:2px 0;border-bottom:1px solid var(--prizm-border-widget)}.relative-menu-item:hover{background:var(--prizm-bg-dashboard-forms)}.relative-menu-item-active,.relative-menu-item-active:hover{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20))}.prizm-datepicker-relative-menu{color:var(--prizm-text-contrast)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: ElementRef }]
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], forceClear: [{
                type: Input
            }], disabled: [{
                type: Input
            }], showClear: [{
                type: Input
            }], canOpen: [{
                type: Input
            }], outer: [{
                type: Input
            }], size: [{
                type: Input
            }], extraButtonInjector: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1yZWxhdGl2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtcmVsYXRpdmUvaW5wdXQtZGF0ZS1yZWxhdGl2ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtcmVsYXRpdmUvaW5wdXQtZGF0ZS1yZWxhdGl2ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBR1YsUUFBUSxFQUNSLEtBQUssRUFHTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBbUIsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTVFLE9BQU8sRUFDTCwrQkFBK0IsR0FPaEMsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsdUJBQXVCLEVB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TztzQkFGYixLQUFLO2dCQU1DLEtBQUs7c0JBRlgsS0FBSztnQkFNQyxJQUFJO3NCQUZWLEtBQUs7Z0JBTU4sbUJBQW1CO3NCQUZsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgVW50eXBlZEZvcm1Db250cm9sLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgTmdDb250cm9sLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IHByaXptSXNOYXRpdmVGb2N1c2VkSW4gfSBmcm9tICcuLi8uLi8uLi91dGlsL2lzLW5hdGl2ZS1mb2N1c2VkLWluJztcbmltcG9ydCB7IFByaXptSW5wdXRTaXplIH0gZnJvbSAnLi4vY29tbW9uL21vZGVscy9wcml6bS1pbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFJlbGF0aXZlRGF0ZU1lbnVJdGVtcyxcbiAgSWRCeUdyb3VwLFxuICBSZWxhdGl2ZURhdGVEaXJlY3Rpb25JZCxcbiAgUmVsYXRpdmVEYXRlTWVudUl0ZW0sXG4gIFJlbGF0aXZlRGF0ZU1lbnVJdGVtcyxcbiAgUmVsYXRpdmVEYXRlUGVyaW9kSWQsXG4gIFJlbGF0aXZlRGF0ZVRpbWVJZCxcbn0gZnJvbSAnLi9pbnB1dC1kYXRlLXJlbGF0aXZlLm1vZGVscyc7XG5pbXBvcnQgeyBQYXJzZVRleHRJbnB1dCwgUmVuZGVyVGV4dCwgVXBkYXRlQWN0aXZlSXRlbSB9IGZyb20gJy4vaW5wdXQtZGF0ZS1yZWxhdGl2ZS51dGlscyc7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZCB9IGZyb20gJy4uLy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgUFJJWk1fREFURV9SSUdIVF9CVVRUT05TIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2RhdGUtZXh0cmEtYnV0dG9ucyc7XG5pbXBvcnQgeyBQcml6bURhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRlLWJ1dHRvbic7XG5pbXBvcnQgeyBQcml6bUZvcm1Db250cm9sSGVscGVycyB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9pbnRlcmFjdGl2ZSc7XG5cbmNvbnN0IE1lbnVJdGVtczogUmVsYXRpdmVEYXRlTWVudUl0ZW1zID0gZ2V0RGVmYXVsdFJlbGF0aXZlRGF0ZU1lbnVJdGVtcygpO1xuY29uc3QgVmFsaWRhdGlvblBhdHRlcm4gPSAnKFR8XFxcXCopKChcXFxcK3xcXFxcLSkoXFxcXGQrKShZfE18ZHxofG18cykpPygoXFxcXCt8XFxcXC0pKFxcXFxkKykoWXxNfGR8aHxtfHMpKT8nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1pbnB1dC1kYXRlLXJlbGF0aXZlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWRhdGUtcmVsYXRpdmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1kYXRlLXJlbGF0aXZlLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1JbnB1dERhdGVSZWxhdGl2ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dERhdGVSZWxhdGl2ZUNvbXBvbmVudFxuICBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWRcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3lcbntcbiAgQFZpZXdDaGlsZCgnZm9jdXNhYmxlRWxlbWVudFJlZicsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBwdWJsaWMgcmVhZG9ubHkgZm9jdXNhYmxlRWxlbWVudD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgbGFiZWwgPSAn0J7RgtC90L7RgdC40YLQtdC70YzQvdC+0LUnO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIHBsYWNlaG9sZGVyID0gJ9CS0YvQsdC10YDQuNGC0LUg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+0LUg0LLRgNC10LzRjyc7XG5cbiAgQElucHV0KCkgZm9yY2VDbGVhcjogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqICovXG4gIHB1YmxpYyBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZ0NvbnRyb2wgPSB0aGlzLmluamVjdG9yLmdldChOZ0NvbnRyb2wpO1xuICAgIGlmIChuZ0NvbnRyb2wuY29udHJvbCkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIG5nQ29udHJvbC5jb250cm9sLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5nQ29udHJvbC5jb250cm9sLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldERpc2FibGVkU3RhdGUodmFsdWUpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLmRpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgc2hvd0NsZWFyITogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBjYW5PcGVuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBvdXRlciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIHNpemU6IFByaXptSW5wdXRTaXplID0gJ20nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZXh0cmFCdXR0b25JbmplY3RvcjogSW5qZWN0b3IgPSB0aGlzLmluamVjdG9yO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfaW5wdXRfZGF0ZV9yZWxhdGl2ZSc7XG5cbiAgcHVibGljIGlzT3BlbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyB2YWx1ZSA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucGF0dGVybihWYWxpZGF0aW9uUGF0dGVybikpO1xuICBwdWJsaWMgdGltZUl0ZW1zOiBSZWxhdGl2ZURhdGVNZW51SXRlbTxSZWxhdGl2ZURhdGVUaW1lSWQ+W10gPSBbLi4uTWVudUl0ZW1zLnRpbWVdO1xuICBwdWJsaWMgZGlyZWN0aW9uSXRlbXM6IFJlbGF0aXZlRGF0ZU1lbnVJdGVtPFJlbGF0aXZlRGF0ZURpcmVjdGlvbklkPltdID0gWy4uLk1lbnVJdGVtcy5kaXJlY3Rpb25dO1xuICBwdWJsaWMgcGVyaW9kSXRlbXM6IFJlbGF0aXZlRGF0ZU1lbnVJdGVtPFJlbGF0aXZlRGF0ZVBlcmlvZElkPltdID0gWy4uLk1lbnVJdGVtcy5wZXJpb2RdO1xuXG4gIHByaXZhdGUgYWN0aXZlVGltZUlkITogUmVsYXRpdmVEYXRlVGltZUlkIHwgbnVsbDtcbiAgcHJpdmF0ZSBhY3RpdmVEaXJlY3Rpb25JZCE6IFJlbGF0aXZlRGF0ZURpcmVjdGlvbklkO1xuICBwcml2YXRlIGFjdGl2ZVBlcmlvZElkITogUmVsYXRpdmVEYXRlUGVyaW9kSWQ7XG4gIHByaXZhdGUgYWN0aXZlTnVtYmVyID0gJyc7XG5cbiAgcHVibGljIG9uQ2hhbmdlRm4hOiAoXzogdW5rbm93bikgPT4gdW5rbm93bjtcbiAgcHVibGljIG9uVG91Y2hlZCE6IFZvaWRGdW5jdGlvbjtcblxuICBwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHVibGljIHJpZ2h0QnV0dG9ucyQhOiBCZWhhdmlvclN1YmplY3Q8UHJpem1EYXRlQnV0dG9uW10+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yaWdodEJ1dHRvbnMkID0gdGhpcy5leHRyYUJ1dHRvbkluamVjdG9yLmdldChQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sID0gdGhpcy5pbmplY3Rvci5nZXQoTmdDb250cm9sKSBhcyB1bmtub3duIGFzIFVudHlwZWRGb3JtQ29udHJvbDtcbiAgICB0aGlzLnZhbHVlLmFkZFZhbGlkYXRvcnMoY29udHJvbC52YWxpZGF0b3IgYXMgYW55KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnZhbHVlLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnBhcnNlSW5wdXRWYWx1ZSgpO1xuICAgICAgICB0aGlzLmFjdHVhbGl6ZU1lbnUoKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKHRoaXMudmFsdWUudmFsdWUpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNWYWx1ZXMoXG4gICAgICAgIGNvbnRyb2wsXG4gICAgICAgIHYgPT4gdixcbiAgICAgICAgdiA9PiB2LFxuICAgICAgICB0aGlzLnZhbHVlXG4gICAgICApLnN1YnNjcmliZSgpXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuc3luY1N0YXRlcyhjb250cm9sLCB0cnVlLCB0aGlzLnZhbHVlKS5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZS5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMudmFsdWUuc2V0VmFsdWUodmFsdWU/LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiB1bmtub3duKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IFZvaWRGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudmFsdWUuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlLmVuYWJsZSgpO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZS5zZXRWYWx1ZSgnJyk7XG4gIH1cblxuICBwdWJsaWMgb25NZW51SXRlbUNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBpdGVtOiBSZWxhdGl2ZURhdGVNZW51SXRlbSk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIHN3aXRjaCAoaXRlbS5ncm91cElkKSB7XG4gICAgICBjYXNlICd0aW1lJzpcbiAgICAgICAgdGhpcy5hY3RpdmVUaW1lSWQgPSA8SWRCeUdyb3VwPCd0aW1lJz4+aXRlbS5pZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RpcmVjdGlvbic6XG4gICAgICAgIHRoaXMuYWN0aXZlRGlyZWN0aW9uSWQgPSA8SWRCeUdyb3VwPCdkaXJlY3Rpb24nPj5pdGVtLmlkO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncGVyaW9kJzpcbiAgICAgICAgdGhpcy5hY3RpdmVQZXJpb2RJZCA9IDxJZEJ5R3JvdXA8J3BlcmlvZCc+Pml0ZW0uaWQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuYWN0dWFsaXplTWVudSgpO1xuICAgIHRoaXMuYWN0dWFsaXplSW5wdXQoKTtcbiAgICB0aGlzLm9uQ2hhbmdlRm4odGhpcy52YWx1ZS52YWx1ZSk7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIGNvbnRyb2wgaW5wdXQgdmFsdWVcbiAgICovXG4gIHByaXZhdGUgcGFyc2VJbnB1dFZhbHVlKCk6IHZvaWQge1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IHRoaXMudmFsdWUudmFsdWU7XG5cbiAgICBjb25zdCBtb2RlbCA9IFBhcnNlVGV4dElucHV0KHRleHRJbnB1dCk7XG5cbiAgICB0aGlzLmFjdGl2ZVRpbWVJZCA9IG1vZGVsLnRpbWU7XG4gICAgdGhpcy5hY3RpdmVEaXJlY3Rpb25JZCA9IG1vZGVsLmRpcmVjdGlvbjtcbiAgICB0aGlzLmFjdGl2ZU51bWJlciA9IG1vZGVsLm51bWJlcjtcbiAgICB0aGlzLmFjdGl2ZVBlcmlvZElkID0gbW9kZWwucGVyaW9kO1xuICB9XG5cbiAgcHVibGljIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50ID8gKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJpem1Jc05hdGl2ZUZvY3VzZWRJbih0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQgYXMgYW55KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29udHJvbCBpbnB1dCBhcyB0ZXh0XG4gICAqL1xuICBwcml2YXRlIGFjdHVhbGl6ZUlucHV0KCk6IHZvaWQge1xuICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gUmVuZGVyVGV4dCh7XG4gICAgICB0aW1lOiB0aGlzLmFjdGl2ZVRpbWVJZCBhcyBhbnksXG4gICAgICBudW1iZXI6IHRoaXMuYWN0aXZlTnVtYmVyLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLmFjdGl2ZURpcmVjdGlvbklkLFxuICAgICAgcGVyaW9kOiB0aGlzLmFjdGl2ZVBlcmlvZElkLFxuICAgIH0pO1xuXG4gICAgdGhpcy52YWx1ZS5zZXRWYWx1ZShzdHJpbmdWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgb25DbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRpbWVJZCA9IG51bGw7XG4gICAgdGhpcy5hY3R1YWxpemVNZW51KCk7XG4gIH1cblxuICAvKipcbiAgICogQWN0dWFsaXplIG1lbnUgaXRlbXMsIGFzIHJhZGlvIGdyb3VwIGJ1dHRvblxuICAgKi9cbiAgcHJpdmF0ZSBhY3R1YWxpemVNZW51KCk6IHZvaWQge1xuICAgIHRoaXMudGltZUl0ZW1zID0gVXBkYXRlQWN0aXZlSXRlbSh0aGlzLnRpbWVJdGVtcywgdGhpcy5hY3RpdmVUaW1lSWQpIGFzIGFueTtcbiAgICB0aGlzLmRpcmVjdGlvbkl0ZW1zID0gVXBkYXRlQWN0aXZlSXRlbSh0aGlzLmRpcmVjdGlvbkl0ZW1zLCB0aGlzLmFjdGl2ZURpcmVjdGlvbklkKTtcbiAgICB0aGlzLnBlcmlvZEl0ZW1zID0gVXBkYXRlQWN0aXZlSXRlbSh0aGlzLnBlcmlvZEl0ZW1zLCB0aGlzLmFjdGl2ZVBlcmlvZElkKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9wZW5DaGFuZ2Uoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiA9IHN0YXRlO1xuICB9XG5cbiAgcHVibGljIHNhZmVPcGVuTW9kYWwoKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50O1xuICAgIGlmICghdGhpcy5pc09wZW4gJiYgIXRoaXMuZGlzYWJsZWQgJiYgaW5wdXRFbGVtZW50ICYmIHByaXptSXNOYXRpdmVGb2N1c2VkKGlucHV0RWxlbWVudCkpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIiwiPHByaXptLWRyb3Bkb3duLWhvc3RcbiAgY2xhc3M9XCJ6LWhvc3RlZFwiXG4gIFtjYW5PcGVuXT1cImNhbk9wZW5cIlxuICBbY29udGVudF09XCJkcm9wZG93blwiXG4gIFtpc09wZW5dPVwiaXNPcGVuICYmIGNhbk9wZW5cIlxuICBbY2xvc2VCeUVzY109XCJ0cnVlXCJcbiAgKGlzT3BlbkNoYW5nZSk9XCJvbk9wZW5DaGFuZ2UoJGV2ZW50KVwiXG4gIHByaXptRHJvcGRvd25Ib3N0V2lkdGg9XCJhdXRvXCJcbj5cbiAgPHByaXptLWlucHV0LWxheW91dFxuICAgIFtsYWJlbF09XCJsYWJlbFwiXG4gICAgW291dGVyXT1cIm91dGVyXCJcbiAgICBbZm9yY2VDbGVhcl09XCJmb3JjZUNsZWFyXCJcbiAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAoY2xpY2spPVwic2FmZU9wZW5Nb2RhbCgpXCJcbiAgPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJpbnB1dC1zZWFyY2hcIlxuICAgICAgI2ZvY3VzYWJsZUVsZW1lbnRSZWZcbiAgICAgIFtmb3JtQ29udHJvbF09XCJ2YWx1ZVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgKG9uQ2xlYXIpPVwib25DbGVhcigpXCJcbiAgICAgIHByaXptSW5wdXRcbiAgICAvPlxuICAgIDxuZy1jb250YWluZXIgcHJpem0taW5wdXQtcmlnaHQ+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCJcbiAgICAgICAgKGNsaWNrKT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXMoKVwiXG4gICAgICAgIHByaXptSW5wdXRJY29uQnV0dG9uPVwiZGF0ZS11cGRhdGVcIlxuICAgICAgPjwvYnV0dG9uPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIHJpZ2h0QnV0dG9ucyQgfCBhc3luY1wiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ1dHRvbi50ZW1wbGF0ZVwiPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvcHJpem0taW5wdXQtbGF5b3V0PlxuPC9wcml6bS1kcm9wZG93bi1ob3N0PlxuXG48bmctdGVtcGxhdGUgI2Ryb3Bkb3duPlxuICA8dWwgY2xhc3M9XCJwcml6bS1kYXRlcGlja2VyLXJlbGF0aXZlLW1lbnVcIiByb2xlPVwibGlzdGJveFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtZW51SXRlbXNUZW1wbGF0ZTsgY29udGV4dDogeyBpdGVtczogdGltZUl0ZW1zIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICA8bGkgY2xhc3M9XCJyZWxhdGl2ZS1tZW51LWl0ZW0tZGl2aWRlclwiPjwvbGk+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1lbnVJdGVtc1RlbXBsYXRlOyBjb250ZXh0OiB7IGl0ZW1zOiBkaXJlY3Rpb25JdGVtcyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgPGxpIGNsYXNzPVwicmVsYXRpdmUtbWVudS1pdGVtLWRpdmlkZXJcIj48L2xpPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtZW51SXRlbXNUZW1wbGF0ZTsgY29udGV4dDogeyBpdGVtczogcGVyaW9kSXRlbXMgfVwiPjwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLXRlbXBsYXRlICNtZW51SXRlbXNUZW1wbGF0ZSBsZXQtaXRlbXM9XCJpdGVtc1wiPlxuICAgICAgPGxpXG4gICAgICAgIGNsYXNzPVwicmVsYXRpdmUtbWVudS1pdGVtXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIlxuICAgICAgICBbY2xhc3MucmVsYXRpdmUtbWVudS1pdGVtLWFjdGl2ZV09XCJpdGVtLmFjdGl2ZVwiXG4gICAgICAgIChjbGljayk9XCJvbk1lbnVJdGVtQ2xpY2soJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUtbWVudS1pdGVtLWljb25cIj5cbiAgICAgICAgICA8aSBjbGFzcz1cInByaXptLWljb24ge3sgaXRlbS5pY29uIH19XCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlLW1lbnUtaXRlbS1sYWJlbFwiPnt7IGl0ZW0ubGFiZWwgfX08L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC91bD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=