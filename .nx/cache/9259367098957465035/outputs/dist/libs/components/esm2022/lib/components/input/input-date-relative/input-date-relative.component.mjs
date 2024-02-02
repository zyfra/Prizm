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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateRelativeComponent, deps: [{ token: i0.Injector }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputDateRelativeComponent, selector: "prizm-input-date-relative", inputs: { label: "label", placeholder: "placeholder", forceClear: "forceClear", disabled: "disabled", showClear: "showClear", canOpen: "canOpen", outer: "outer", size: "size", extraButtonInjector: "extraButtonInjector" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PrizmInputDateRelativeComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [content]=\"dropdown\"\n  [isOpen]=\"isOpen && canOpen\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpenChange($event)\"\n  prizmDropdownHostWidth=\"auto\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [outer]=\"outer\"\n    [forceClear]=\"forceClear\"\n    [size]=\"size\"\n    (click)=\"safeOpenModal()\"\n  >\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [formControl]=\"value\"\n      [placeholder]=\"placeholder\"\n      (onClear)=\"onClear()\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <button\n        [interactive]=\"true\"\n        (click)=\"focusableElementRef.focus()\"\n        prizmInputIconButton=\"date-update\"\n      ></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n</prizm-dropdown-host>\n\n<ng-template #dropdown>\n  <ul class=\"prizm-datepicker-relative-menu\" role=\"listbox\">\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: timeItems }\"></ng-container>\n    <li class=\"relative-menu-item-divider\"></li>\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: directionItems }\"></ng-container>\n    <li class=\"relative-menu-item-divider\"></li>\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: periodItems }\"></ng-container>\n\n    <ng-template #menuItemsTemplate let-items=\"items\">\n      <li\n        class=\"relative-menu-item\"\n        *ngFor=\"let item of items\"\n        [class.relative-menu-item-active]=\"item.active\"\n        (click)=\"onMenuItemClick($event, item)\"\n        role=\"button\"\n        tabindex=\"0\"\n      >\n        <div class=\"relative-menu-item-icon\">\n          <i class=\"prizm-icon {{ item.icon }}\"></i>\n        </div>\n        <div class=\"relative-menu-item-label\">{{ item.label }}</div>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n", styles: [".prizm-datepicker-relative-menu{list-style:none;margin:0;padding:8px 0}.relative-menu-item{height:44px;padding:0 24px;display:flex;align-items:center;cursor:pointer}.relative-menu-item-icon{font-size:18px;display:inherit}.relative-menu-item-label{padding-left:8px}.relative-menu-item-divider{margin:2px 0;border-bottom:1px solid var(--prizm-border-widget)}.relative-menu-item:hover{background:var(--prizm-bg-dashboard-forms)}.relative-menu-item-active,.relative-menu-item-active:hover{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20))}.prizm-datepicker-relative-menu{color:var(--prizm-text-contrast)}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i3.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i4.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i6.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputDateRelativeComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1yZWxhdGl2ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtcmVsYXRpdmUvaW5wdXQtZGF0ZS1yZWxhdGl2ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtcmVsYXRpdmUvaW5wdXQtZGF0ZS1yZWxhdGl2ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBR1YsUUFBUSxFQUNSLEtBQUssRUFHTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBbUIsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRTVFLE9BQU8sRUFDTCwrQkFBK0IsR0FPaEMsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsdUJBQXVCLEVB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QU87c0JBRmIsS0FBSztnQkFNQyxLQUFLO3NCQUZYLEtBQUs7Z0JBTUMsSUFBSTtzQkFGVixLQUFLO2dCQU1OLG1CQUFtQjtzQkFGbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIFVudHlwZWRGb3JtQ29udHJvbCxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIE5nQ29udHJvbCxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZEluIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9pcy1uYXRpdmUtZm9jdXNlZC1pbic7XG5pbXBvcnQgeyBQcml6bUlucHV0U2l6ZSB9IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvcHJpem0taW5wdXQubW9kZWxzJztcbmltcG9ydCB7XG4gIGdldERlZmF1bHRSZWxhdGl2ZURhdGVNZW51SXRlbXMsXG4gIElkQnlHcm91cCxcbiAgUmVsYXRpdmVEYXRlRGlyZWN0aW9uSWQsXG4gIFJlbGF0aXZlRGF0ZU1lbnVJdGVtLFxuICBSZWxhdGl2ZURhdGVNZW51SXRlbXMsXG4gIFJlbGF0aXZlRGF0ZVBlcmlvZElkLFxuICBSZWxhdGl2ZURhdGVUaW1lSWQsXG59IGZyb20gJy4vaW5wdXQtZGF0ZS1yZWxhdGl2ZS5tb2RlbHMnO1xuaW1wb3J0IHsgUGFyc2VUZXh0SW5wdXQsIFJlbmRlclRleHQsIFVwZGF0ZUFjdGl2ZUl0ZW0gfSBmcm9tICcuL2lucHV0LWRhdGUtcmVsYXRpdmUudXRpbHMnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWQgfSBmcm9tICcuLi8uLi8uLi91dGlsJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfUklHSFRfQlVUVE9OUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWV4dHJhLWJ1dHRvbnMnO1xuaW1wb3J0IHsgUHJpem1EYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0ZS1idXR0b24nO1xuaW1wb3J0IHsgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuXG5jb25zdCBNZW51SXRlbXM6IFJlbGF0aXZlRGF0ZU1lbnVJdGVtcyA9IGdldERlZmF1bHRSZWxhdGl2ZURhdGVNZW51SXRlbXMoKTtcbmNvbnN0IFZhbGlkYXRpb25QYXR0ZXJuID0gJyhUfFxcXFwqKSgoXFxcXCt8XFxcXC0pKFxcXFxkKykoWXxNfGR8aHxtfHMpKT8oKFxcXFwrfFxcXFwtKShcXFxcZCspKFl8TXxkfGh8bXxzKSk/JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0taW5wdXQtZGF0ZS1yZWxhdGl2ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1kYXRlLXJlbGF0aXZlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtZGF0ZS1yZWxhdGl2ZS5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFByaXptSW5wdXREYXRlUmVsYXRpdmVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXREYXRlUmVsYXRpdmVDb21wb25lbnRcbiAgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95XG57XG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnRSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIGxhYmVsID0gJ9Ce0YLQvdC+0YHQuNGC0LXQu9GM0L3QvtC1JztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBwbGFjZWhvbGRlciA9ICfQktGL0LHQtdGA0LjRgtC1INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvtC1INCy0YDQtdC80Y8nO1xuXG4gIEBJbnB1dCgpIGZvcmNlQ2xlYXI6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiAqL1xuICBwdWJsaWMgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmdDb250cm9sID0gdGhpcy5pbmplY3Rvci5nZXQoTmdDb250cm9sKTtcbiAgICBpZiAobmdDb250cm9sLmNvbnRyb2wpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZ0NvbnRyb2wuY29udHJvbC5kaXNhYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZ0NvbnRyb2wuY29udHJvbC5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIHNob3dDbGVhciE6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgY2FuT3BlbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgb3V0ZXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBzaXplOiBQcml6bUlucHV0U2l6ZSA9ICdtJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGV4dHJhQnV0dG9uSW5qZWN0b3I6IEluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X2RhdGVfcmVsYXRpdmUnO1xuXG4gIHB1YmxpYyBpc09wZW4gPSBmYWxzZTtcblxuICBwdWJsaWMgdmFsdWUgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnBhdHRlcm4oVmFsaWRhdGlvblBhdHRlcm4pKTtcbiAgcHVibGljIHRpbWVJdGVtczogUmVsYXRpdmVEYXRlTWVudUl0ZW08UmVsYXRpdmVEYXRlVGltZUlkPltdID0gWy4uLk1lbnVJdGVtcy50aW1lXTtcbiAgcHVibGljIGRpcmVjdGlvbkl0ZW1zOiBSZWxhdGl2ZURhdGVNZW51SXRlbTxSZWxhdGl2ZURhdGVEaXJlY3Rpb25JZD5bXSA9IFsuLi5NZW51SXRlbXMuZGlyZWN0aW9uXTtcbiAgcHVibGljIHBlcmlvZEl0ZW1zOiBSZWxhdGl2ZURhdGVNZW51SXRlbTxSZWxhdGl2ZURhdGVQZXJpb2RJZD5bXSA9IFsuLi5NZW51SXRlbXMucGVyaW9kXTtcblxuICBwcml2YXRlIGFjdGl2ZVRpbWVJZCE6IFJlbGF0aXZlRGF0ZVRpbWVJZCB8IG51bGw7XG4gIHByaXZhdGUgYWN0aXZlRGlyZWN0aW9uSWQhOiBSZWxhdGl2ZURhdGVEaXJlY3Rpb25JZDtcbiAgcHJpdmF0ZSBhY3RpdmVQZXJpb2RJZCE6IFJlbGF0aXZlRGF0ZVBlcmlvZElkO1xuICBwcml2YXRlIGFjdGl2ZU51bWJlciA9ICcnO1xuXG4gIHB1YmxpYyBvbkNoYW5nZUZuITogKF86IHVua25vd24pID0+IHVua25vd247XG4gIHB1YmxpYyBvblRvdWNoZWQhOiBWb2lkRnVuY3Rpb247XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHB1YmxpYyByaWdodEJ1dHRvbnMkITogQmVoYXZpb3JTdWJqZWN0PFByaXptRGF0ZUJ1dHRvbltdPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmlnaHRCdXR0b25zJCA9IHRoaXMuZXh0cmFCdXR0b25JbmplY3Rvci5nZXQoUFJJWk1fREFURV9SSUdIVF9CVVRUT05TKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuaW5qZWN0b3IuZ2V0KE5nQ29udHJvbCkgYXMgdW5rbm93biBhcyBVbnR5cGVkRm9ybUNvbnRyb2w7XG4gICAgdGhpcy52YWx1ZS5hZGRWYWxpZGF0b3JzKGNvbnRyb2wudmFsaWRhdG9yIGFzIGFueSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy52YWx1ZS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXJzZUlucHV0VmFsdWUoKTtcbiAgICAgICAgdGhpcy5hY3R1YWxpemVNZW51KCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGbih0aGlzLnZhbHVlLnZhbHVlKTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICBQcml6bUZvcm1Db250cm9sSGVscGVycy5zeW5jVmFsdWVzKFxuICAgICAgICBjb250cm9sLFxuICAgICAgICB2ID0+IHYsXG4gICAgICAgIHYgPT4gdixcbiAgICAgICAgdGhpcy52YWx1ZVxuICAgICAgKS5zdWJzY3JpYmUoKVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNTdGF0ZXMoY29udHJvbCwgdHJ1ZSwgdGhpcy52YWx1ZSkuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUubWFya0FzRGlydHkoKTtcbiAgICB0aGlzLnZhbHVlLnNldFZhbHVlKHZhbHVlPy50b1N0cmluZygpKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogdW5rbm93bikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBWb2lkRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnZhbHVlLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZS5lbmFibGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUuc2V0VmFsdWUoJycpO1xuICB9XG5cbiAgcHVibGljIG9uTWVudUl0ZW1DbGljayhldmVudDogTW91c2VFdmVudCwgaXRlbTogUmVsYXRpdmVEYXRlTWVudUl0ZW0pOiB2b2lkIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBzd2l0Y2ggKGl0ZW0uZ3JvdXBJZCkge1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIHRoaXMuYWN0aXZlVGltZUlkID0gPElkQnlHcm91cDwndGltZSc+Pml0ZW0uaWQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkaXJlY3Rpb24nOlxuICAgICAgICB0aGlzLmFjdGl2ZURpcmVjdGlvbklkID0gPElkQnlHcm91cDwnZGlyZWN0aW9uJz4+aXRlbS5pZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BlcmlvZCc6XG4gICAgICAgIHRoaXMuYWN0aXZlUGVyaW9kSWQgPSA8SWRCeUdyb3VwPCdwZXJpb2QnPj5pdGVtLmlkO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLmFjdHVhbGl6ZU1lbnUoKTtcbiAgICB0aGlzLmFjdHVhbGl6ZUlucHV0KCk7XG4gICAgdGhpcy5vbkNoYW5nZUZuKHRoaXMudmFsdWUudmFsdWUpO1xuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBjb250cm9sIGlucHV0IHZhbHVlXG4gICAqL1xuICBwcml2YXRlIHBhcnNlSW5wdXRWYWx1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSB0aGlzLnZhbHVlLnZhbHVlO1xuXG4gICAgY29uc3QgbW9kZWwgPSBQYXJzZVRleHRJbnB1dCh0ZXh0SW5wdXQpO1xuXG4gICAgdGhpcy5hY3RpdmVUaW1lSWQgPSBtb2RlbC50aW1lO1xuICAgIHRoaXMuYWN0aXZlRGlyZWN0aW9uSWQgPSBtb2RlbC5kaXJlY3Rpb247XG4gICAgdGhpcy5hY3RpdmVOdW1iZXIgPSBtb2RlbC5udW1iZXI7XG4gICAgdGhpcy5hY3RpdmVQZXJpb2RJZCA9IG1vZGVsLnBlcmlvZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmF0aXZlRm9jdXNhYmxlRWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudCA/ICh0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KSA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByaXptSXNOYXRpdmVGb2N1c2VkSW4odGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50IGFzIGFueSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNvbnRyb2wgaW5wdXQgYXMgdGV4dFxuICAgKi9cbiAgcHJpdmF0ZSBhY3R1YWxpemVJbnB1dCgpOiB2b2lkIHtcbiAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IFJlbmRlclRleHQoe1xuICAgICAgdGltZTogdGhpcy5hY3RpdmVUaW1lSWQgYXMgYW55LFxuICAgICAgbnVtYmVyOiB0aGlzLmFjdGl2ZU51bWJlcixcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5hY3RpdmVEaXJlY3Rpb25JZCxcbiAgICAgIHBlcmlvZDogdGhpcy5hY3RpdmVQZXJpb2RJZCxcbiAgICB9KTtcblxuICAgIHRoaXMudmFsdWUuc2V0VmFsdWUoc3RyaW5nVmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG9uQ2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUaW1lSWQgPSBudWxsO1xuICAgIHRoaXMuYWN0dWFsaXplTWVudSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbGl6ZSBtZW51IGl0ZW1zLCBhcyByYWRpbyBncm91cCBidXR0b25cbiAgICovXG4gIHByaXZhdGUgYWN0dWFsaXplTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVJdGVtcyA9IFVwZGF0ZUFjdGl2ZUl0ZW0odGhpcy50aW1lSXRlbXMsIHRoaXMuYWN0aXZlVGltZUlkKSBhcyBhbnk7XG4gICAgdGhpcy5kaXJlY3Rpb25JdGVtcyA9IFVwZGF0ZUFjdGl2ZUl0ZW0odGhpcy5kaXJlY3Rpb25JdGVtcywgdGhpcy5hY3RpdmVEaXJlY3Rpb25JZCk7XG4gICAgdGhpcy5wZXJpb2RJdGVtcyA9IFVwZGF0ZUFjdGl2ZUl0ZW0odGhpcy5wZXJpb2RJdGVtcywgdGhpcy5hY3RpdmVQZXJpb2RJZCk7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuQ2hhbmdlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBzdGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBzYWZlT3Blbk1vZGFsKCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuZm9jdXNhYmxlRWxlbWVudD8ubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIXRoaXMuaXNPcGVuICYmICF0aGlzLmRpc2FibGVkICYmIGlucHV0RWxlbWVudCAmJiBwcml6bUlzTmF0aXZlRm9jdXNlZChpbnB1dEVsZW1lbnQpKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gIGNsYXNzPVwiei1ob3N0ZWRcIlxuICBbY2FuT3Blbl09XCJjYW5PcGVuXCJcbiAgW2NvbnRlbnRdPVwiZHJvcGRvd25cIlxuICBbaXNPcGVuXT1cImlzT3BlbiAmJiBjYW5PcGVuXCJcbiAgW2Nsb3NlQnlFc2NdPVwidHJ1ZVwiXG4gIChpc09wZW5DaGFuZ2UpPVwib25PcGVuQ2hhbmdlKCRldmVudClcIlxuICBwcml6bURyb3Bkb3duSG9zdFdpZHRoPVwiYXV0b1wiXG4+XG4gIDxwcml6bS1pbnB1dC1sYXlvdXRcbiAgICBbbGFiZWxdPVwibGFiZWxcIlxuICAgIFtvdXRlcl09XCJvdXRlclwiXG4gICAgW2ZvcmNlQ2xlYXJdPVwiZm9yY2VDbGVhclwiXG4gICAgW3NpemVdPVwic2l6ZVwiXG4gICAgKGNsaWNrKT1cInNhZmVPcGVuTW9kYWwoKVwiXG4gID5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiaW5wdXQtc2VhcmNoXCJcbiAgICAgICNmb2N1c2FibGVFbGVtZW50UmVmXG4gICAgICBbZm9ybUNvbnRyb2xdPVwidmFsdWVcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIChvbkNsZWFyKT1cIm9uQ2xlYXIoKVwiXG4gICAgICBwcml6bUlucHV0XG4gICAgLz5cbiAgICA8bmctY29udGFpbmVyIHByaXptLWlucHV0LXJpZ2h0PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiXG4gICAgICAgIChjbGljayk9XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzKClcIlxuICAgICAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImRhdGUtdXBkYXRlXCJcbiAgICAgID48L2J1dHRvbj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiByaWdodEJ1dHRvbnMkIHwgYXN5bmNcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b24udGVtcGxhdGVcIj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3ByaXptLWlucHV0LWxheW91dD5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cblxuPG5nLXRlbXBsYXRlICNkcm9wZG93bj5cbiAgPHVsIGNsYXNzPVwicHJpem0tZGF0ZXBpY2tlci1yZWxhdGl2ZS1tZW51XCIgcm9sZT1cImxpc3Rib3hcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWVudUl0ZW1zVGVtcGxhdGU7IGNvbnRleHQ6IHsgaXRlbXM6IHRpbWVJdGVtcyB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgPGxpIGNsYXNzPVwicmVsYXRpdmUtbWVudS1pdGVtLWRpdmlkZXJcIj48L2xpPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtZW51SXRlbXNUZW1wbGF0ZTsgY29udGV4dDogeyBpdGVtczogZGlyZWN0aW9uSXRlbXMgfVwiPjwvbmctY29udGFpbmVyPlxuICAgIDxsaSBjbGFzcz1cInJlbGF0aXZlLW1lbnUtaXRlbS1kaXZpZGVyXCI+PC9saT5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWVudUl0ZW1zVGVtcGxhdGU7IGNvbnRleHQ6IHsgaXRlbXM6IHBlcmlvZEl0ZW1zIH1cIj48L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjbWVudUl0ZW1zVGVtcGxhdGUgbGV0LWl0ZW1zPVwiaXRlbXNcIj5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzcz1cInJlbGF0aXZlLW1lbnUtaXRlbVwiXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCJcbiAgICAgICAgW2NsYXNzLnJlbGF0aXZlLW1lbnUtaXRlbS1hY3RpdmVdPVwiaXRlbS5hY3RpdmVcIlxuICAgICAgICAoY2xpY2spPVwib25NZW51SXRlbUNsaWNrKCRldmVudCwgaXRlbSlcIlxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlLW1lbnUtaXRlbS1pY29uXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJwcml6bS1pY29uIHt7IGl0ZW0uaWNvbiB9fVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZS1tZW51LWl0ZW0tbGFiZWxcIj57eyBpdGVtLmxhYmVsIH19PC9kaXY+XG4gICAgICA8L2xpPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvdWw+XG48L25nLXRlbXBsYXRlPlxuIl19