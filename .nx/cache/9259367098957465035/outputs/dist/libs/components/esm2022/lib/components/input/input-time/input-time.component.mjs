import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Inject, Injector, Input, Optional, Self, ViewChild, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmTime } from '../../../@core/date-time/time';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { PRIZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { PRIZM_INPUT_TIME_OPTIONS } from './input-time-options';
import { PRIZM_TIME_TEXTS } from '../../../tokens/i18n';
import { prizmCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { PRIZM_STRICT_MATCHER } from '../../../constants/matcher';
import { prizmSetNativeFocused } from '../../../util/set-native-focused';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { prizmIsNativeFocused } from '../../../util';
import { prizmI18nInitWithKey } from '../../../services';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-mask";
import * as i3 from "../../data-list/data-list.component";
import * as i4 from "../../dropdowns/dropdown-host/dropdown-host.component";
import * as i5 from "../common/input-layout/input-layout.component";
import * as i6 from "../common/input-icon-button/input-icon-button.component";
import * as i7 from "../input-text/input-text.component";
import * as i8 from "@angular/forms";
import * as i9 from "rxjs";
export class PrizmInputTimeComponent extends AbstractPrizmNullableControl {
    constructor(control, cdr, changeDetectorRef, timeTexts$, injector, options) {
        super(control, changeDetectorRef);
        this.cdr = cdr;
        this.timeTexts$ = timeTexts$;
        this.injector = injector;
        this.options = options;
        this.placeholder = '';
        this.forceClear = null;
        this.label = 'Выберите время';
        this.size = 'm';
        this.outer = false;
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.items = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));
        this.itemSize = this.options.itemSize;
        this.strict = false;
        this.mode = this.options.mode;
        this.extraButtonInjector = this.injector;
        this.testId_ = 'ui_input_time';
        this.open = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
    }
    get filtered() {
        return this.filter(this.items, this.mode, this.computedSearch);
    }
    get textMaskOptions() {
        return this.calculateMask(this.mode);
    }
    get computedValue() {
        return this.value ? this.value.toString(this.mode) : this.nativeValue;
    }
    get computedSearch() {
        return this.computedValue.length !== this.mode.length ? this.computedValue : ``;
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
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return this.focusableElement?.nativeElement
            ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
            : false;
    }
    // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
    set nativeValue(value) {
        if (!this.nativeFocusableElement) {
            return;
        }
        this.nativeFocusableElement.value = value;
    }
    getFiller$(mode) {
        return this.timeTexts$.pipe(map(texts => texts[mode]));
    }
    onValueChange(value) {
        // this.open = !!this.items.length;
        if (this.control) {
            this.control.updateValueAndValidity({ emitEvent: false });
        }
        const match = this.getMatch(value);
        if (match !== undefined) {
            this.updateValue(match);
            return;
        }
        if (!value || value.length !== this.mode.length) {
            if (!value)
                this.updateValue(null);
            return;
        }
        const time = PrizmTime.correctTime(PrizmTime.fromString(value));
        this.updateValue(this.strict ? this.findNearestTimeFromItems(time) : time);
    }
    onFocused(focused) {
        this.updateFocused(focused);
        if (focused || this.value !== null || this.nativeValue === `` || this.mode === `HH:MM`) {
            return;
        }
        const parsedTime = PrizmTime.fromString(this.nativeValue);
        this.updateValue(parsedTime);
        setTimeout(() => {
            if (this.nativeValue.endsWith(`.`) || this.nativeValue.endsWith(`:`)) {
                this.nativeValue = this.nativeValue.slice(0, -1);
            }
        });
    }
    onHovered(hovered) {
        this.updateHovered(hovered);
    }
    onArrowUp(event) {
        if (this.items.length) {
            return;
        }
        this.processArrow(event, 1);
    }
    onArrowDown(event) {
        if (this.items.length) {
            return;
        }
        this.processArrow(event, -1);
    }
    onMenuClick(item) {
        this.open = false;
        this.updateValue(item);
    }
    onOpen(open) {
        this.open = open;
    }
    writeValue(value) {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : ``;
    }
    calculateMask(mode) {
        return prizmCreateTimeNgxMask(mode, this.options.maxValues);
    }
    get stringValue() {
        return this.value?.toString() ?? '';
    }
    filter(items, mode, search) {
        return items.filter(item => item.toString(mode).includes(search));
    }
    findNearestTimeFromItems(value) {
        return this.items.reduce((previous, current) => Math.abs(current.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds()) <
            Math.abs(previous.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds())
            ? current
            : previous);
    }
    getMatch(value) {
        return this.items.find(item => PRIZM_STRICT_MATCHER(item, value));
    }
    close() {
        this.open = false;
    }
    processArrow(event, shift) {
        const { target } = event;
        // TODO: iframe warning
        if (this.readOnly || !(target instanceof HTMLInputElement)) {
            return;
        }
        const selectionStart = target.selectionStart || 0;
        this.shiftTime(this.calculateShift(selectionStart, shift));
        target.setSelectionRange(selectionStart, selectionStart);
        event.preventDefault();
    }
    calculateShift(selectionStart, shift) {
        if (selectionStart <= 2) {
            return { hours: shift };
        }
        if (selectionStart <= 5) {
            return { minutes: shift };
        }
        if (selectionStart <= 8) {
            return { seconds: shift };
        }
        return { ms: shift };
    }
    shiftTime(shift) {
        if (this.value === null) {
            return;
        }
        const increasedTime = this.value.shift(shift);
        // Manual update so we can set caret position properly
        this.nativeValue = increasedTime.toString(this.mode);
        this.updateValue(increasedTime);
    }
    focusInput(preventScroll = false) {
        if (this.nativeFocusableElement) {
            prizmSetNativeFocused(this.nativeFocusableElement, true, preventScroll);
            this.close();
        }
    }
    safeOpenModal() {
        const inputElement = this.focusableElement?.nativeElement;
        if (!this.open && !this.disabled && inputElement && prizmIsNativeFocused(inputElement)) {
            this.open = true;
            this.cdr.markForCheck();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTimeComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: i0.ChangeDetectorRef }, { token: ChangeDetectorRef }, { token: PRIZM_TIME_TEXTS }, { token: i0.Injector }, { token: PRIZM_INPUT_TIME_OPTIONS }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputTimeComponent, selector: "prizm-input-time", inputs: { placeholder: "placeholder", forceClear: "forceClear", label: "label", size: "size", outer: "outer", disabledItemHandler: "disabledItemHandler", items: "items", itemSize: "itemSize", strict: "strict", mode: "mode", extraButtonInjector: "extraButtonInjector" }, providers: [
            ...prizmI18nInitWithKey(PRIZM_TIME_TEXTS, 'time'),
            {
                provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
                useExisting: forwardRef(() => PrizmInputTimeComponent),
            },
            PRIZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER,
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-wrapper\"\n  [canOpen]=\"interactive && !!filtered.length\"\n  [content]=\"dropdownContent\"\n  [prizmDropdownHostWidth]=\"'100%'\"\n  [isOpen]=\"interactive && open && !!filtered.length\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpen($event)\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [outer]=\"outer\"\n    [forceClear]=\"forceClear\"\n    [size]=\"size\"\n    (click)=\"safeOpenModal()\"\n  >\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"textMaskOptions\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [required]=\"readOnly\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"computedValue\"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      (keydown.arrowUp)=\"onArrowUp($event)\"\n      (keydown.arrowDown)=\"onArrowDown($event)\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <button [interactive]=\"true\" (click)=\"onOpen(!open)\" prizmInputIconButton=\"date-clock\"></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n</prizm-dropdown-host>\n\n<ng-template #dropdownContent>\n  <prizm-data-list class=\"block\" [style.--prizm-data-list-border]=\"0\">\n    <ng-container *ngIf=\"items?.length\">\n      <div\n        class=\"item\"\n        *ngFor=\"let item of filtered; let idx = index\"\n        [class.selected]=\"value && item.isSameTime(value)\"\n        (click)=\"onMenuClick(item)\"\n      >\n        <span class=\"text\">\n          {{ item }}\n        </span>\n      </div>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n", styles: [".item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item.selected{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20));color:var(--prizm-text-contrast)}.item:not(.selected):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}:host{display:inline-block}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "leadZero", "triggerOnMaskChange", "apm"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "component", type: i3.PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "component", type: i4.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "component", type: i5.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i6.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i7.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "directive", type: i8.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i8.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputTimeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputTimeComponent.prototype, "label", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmInputTimeComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputTimeComponent.prototype, "outer", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputTimeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmInputTimeComponent.prototype, "items", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputTimeComponent.prototype, "itemSize", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputTimeComponent.prototype, "strict", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputTimeComponent.prototype, "mode", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputTimeComponent.prototype, "extraButtonInjector", void 0);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], PrizmInputTimeComponent.prototype, "getFiller$", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], PrizmInputTimeComponent.prototype, "calculateMask", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, String]),
    __metadata("design:returntype", Array)
], PrizmInputTimeComponent.prototype, "filter", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTimeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-time`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ...prizmI18nInitWithKey(PRIZM_TIME_TEXTS, 'time'),
                        {
                            provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
                            useExisting: forwardRef(() => PrizmInputTimeComponent),
                        },
                        PRIZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER,
                    ], template: "<prizm-dropdown-host\n  class=\"z-wrapper\"\n  [canOpen]=\"interactive && !!filtered.length\"\n  [content]=\"dropdownContent\"\n  [prizmDropdownHostWidth]=\"'100%'\"\n  [isOpen]=\"interactive && open && !!filtered.length\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpen($event)\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [outer]=\"outer\"\n    [forceClear]=\"forceClear\"\n    [size]=\"size\"\n    (click)=\"safeOpenModal()\"\n  >\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"textMaskOptions\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [required]=\"readOnly\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"computedValue\"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      (keydown.arrowUp)=\"onArrowUp($event)\"\n      (keydown.arrowDown)=\"onArrowDown($event)\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <button [interactive]=\"true\" (click)=\"onOpen(!open)\" prizmInputIconButton=\"date-clock\"></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n</prizm-dropdown-host>\n\n<ng-template #dropdownContent>\n  <prizm-data-list class=\"block\" [style.--prizm-data-list-border]=\"0\">\n    <ng-container *ngIf=\"items?.length\">\n      <div\n        class=\"item\"\n        *ngFor=\"let item of filtered; let idx = index\"\n        [class.selected]=\"value && item.isSameTime(value)\"\n        (click)=\"onMenuClick(item)\"\n      >\n        <span class=\"text\">\n          {{ item }}\n        </span>\n      </div>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n", styles: [".item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item.selected{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20));color:var(--prizm-text-contrast)}.item:not(.selected):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}:host{display:inline-block}\n"] }]
        }], ctorParameters: function () { return [{ type: i8.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }, {
                    type: Inject,
                    args: [NgControl]
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }, { type: i9.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_TIME_TEXTS]
                }] }, { type: i0.Injector }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_INPUT_TIME_OPTIONS]
                }] }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: ElementRef }]
            }], placeholder: [{
                type: Input
            }], forceClear: [{
                type: Input
            }], label: [{
                type: Input
            }], size: [{
                type: Input
            }], outer: [{
                type: Input
            }], disabledItemHandler: [{
                type: Input
            }], items: [{
                type: Input
            }], itemSize: [{
                type: Input
            }], strict: [{
                type: Input
            }], mode: [{
                type: Input
            }], extraButtonInjector: [{
                type: Input
            }], getFiller$: [], calculateMask: [], filter: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LXRpbWUvaW5wdXQtdGltZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LXRpbWUvaW5wdXQtdGltZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBbUIsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBR3hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBeUIsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7O0FBZ0J6RCxNQUFNLE9BQU8sdUJBQ1gsU0FBUSw0QkFBdUM7SUFxRC9DLFlBSUUsT0FBeUIsRUFDUixHQUFzQixFQUNaLGlCQUFvQyxFQUU5QyxVQUFxRCxFQUNyRCxRQUFrQixFQUVsQixPQUE4QjtRQUUvQyxLQUFLLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFSakIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFHdEIsZUFBVSxHQUFWLFVBQVUsQ0FBMkM7UUFDckQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUVsQixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQXhEakQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFUixlQUFVLEdBQW1CLElBQUksQ0FBQztRQUkzQyxVQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFJekIsU0FBSSxHQUFtQixHQUFHLENBQUM7UUFJM0IsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUlkLHdCQUFtQixHQUFtQywwQkFBMEIsQ0FBQztRQUlqRixVQUFLLEdBQXlCLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBSWhHLGFBQVEsR0FBc0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFJcEUsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUlmLFNBQUksR0FBa0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFJeEQsd0JBQW1CLEdBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU1QixZQUFPLEdBQUcsZUFBZSxDQUFDO1FBRXJDLFNBQUksR0FBRyxLQUFLLENBQUM7SUFpQnBCLENBQUM7SUFFZSxRQUFRO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN4RSxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRixDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtZQUNoQyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUUsQ0FBQztJQUVELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBa0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xHLENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYTtZQUN6QyxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztZQUM3RCxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ1osQ0FBQztJQUVELDJFQUEyRTtJQUMzRSxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUdNLFVBQVUsQ0FBQyxJQUFtQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUFhO1FBQ2hDLG1DQUFtQztRQUVuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV4QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxPQUFPO1NBQ1I7UUFFRCxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVNLFNBQVMsQ0FBQyxPQUFnQjtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVCLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3RGLE9BQU87U0FDUjtRQUVELE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFN0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxTQUFTLENBQUMsT0FBZ0I7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sU0FBUyxDQUFDLEtBQVk7UUFDM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQVk7UUFDN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxXQUFXLENBQUMsSUFBZTtRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBYTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRWUsVUFBVSxDQUFDLEtBQXVCO1FBQ2hELEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBR08sYUFBYSxDQUFDLElBQW1CO1FBQ3ZDLE9BQU8sc0JBQXNCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUdPLE1BQU0sQ0FBQyxLQUEyQixFQUFFLElBQW1CLEVBQUUsTUFBYztRQUM3RSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyx3QkFBd0IsQ0FBQyxLQUFnQjtRQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsS0FBSyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUMxRSxDQUFDLENBQUMsT0FBTztZQUNULENBQUMsQ0FBQyxRQUFRLENBQ2IsQ0FBQztJQUNKLENBQUM7SUFFTyxRQUFRLENBQUMsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVPLEtBQUs7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQVksRUFBRSxLQUFhO1FBQzlDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFFekIsdUJBQXVCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLGdCQUFnQixDQUFDLEVBQUU7WUFDMUQsT0FBTztTQUNSO1FBRUQsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTNELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDekQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxjQUFjLENBQUMsY0FBc0IsRUFBRSxLQUFhO1FBQzFELElBQUksY0FBYyxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMzQjtRQUVELE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUFvQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUVELE1BQU0sYUFBYSxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpELHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSztRQUN0QyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVNLGFBQWE7UUFDbEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksWUFBWSxJQUFJLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzhHQXZTVSx1QkFBdUIsa0JBeUR4QixTQUFTLDBFQUdULGlCQUFpQixhQUNqQixnQkFBZ0IscUNBR2hCLHdCQUF3QjtrR0FoRXZCLHVCQUF1Qix5VEFUdkI7WUFDVCxHQUFHLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztZQUNqRDtnQkFDRSxPQUFPLEVBQUUsNkJBQTZCO2dCQUN0QyxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZEO1lBQ0Qsd0NBQXdDO1NBQ3pDLDhIQU15QyxVQUFVLG9EQ3hEdEQsdzBEQXdEQTs7QURLRTtJQURDLGdCQUFnQixFQUFFOzs0REFDRjtBQU1qQjtJQURDLGdCQUFnQixFQUFFOztzREFDTTtBQUl6QjtJQURDLGdCQUFnQixFQUFFOztxREFDUTtBQUkzQjtJQURDLGdCQUFnQixFQUFFOztzREFDTDtBQUlkO0lBREMsZ0JBQWdCLEVBQUU7O29FQUM4RDtBQUlqRjtJQURDLGdCQUFnQixFQUFFOztzREFDNkU7QUFJaEc7SUFEQyxnQkFBZ0IsRUFBRTs7eURBQ2lEO0FBSXBFO0lBREMsZ0JBQWdCLEVBQUU7O3VEQUNKO0FBSWY7SUFEQyxnQkFBZ0IsRUFBRTs7cURBQ3FDO0FBSXhEO0lBREMsZ0JBQWdCLEVBQUU7OEJBQ0UsUUFBUTtvRUFBaUI7QUFnRnZDO0lBRE4sU0FBUzs7O29DQUM4QixVQUFVO3lEQUVqRDtBQStFTztJQURQLFNBQVM7Ozs7NERBR1Q7QUFPTztJQURQLFNBQVM7Ozs7cURBR1Q7MkZBM05VLHVCQUF1QjtrQkFkbkMsU0FBUzsrQkFDRSxrQkFBa0IsbUJBR1gsdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVCxHQUFHLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQzt3QkFDakQ7NEJBQ0UsT0FBTyxFQUFFLDZCQUE2Qjs0QkFDdEMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsd0JBQXdCLENBQUM7eUJBQ3ZEO3dCQUNELHdDQUF3QztxQkFDekM7OzBCQXlERSxRQUFROzswQkFDUixJQUFJOzswQkFDSixNQUFNOzJCQUFDLFNBQVM7OzBCQUdoQixNQUFNOzJCQUFDLGlCQUFpQjs7MEJBQ3hCLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFHdkIsTUFBTTsyQkFBQyx3QkFBd0I7NENBM0RsQixnQkFBZ0I7c0JBRC9CLFNBQVM7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUt0RCxXQUFXO3NCQUZWLEtBQUs7Z0JBSUcsVUFBVTtzQkFBbEIsS0FBSztnQkFJTixLQUFLO3NCQUZKLEtBQUs7Z0JBTU4sSUFBSTtzQkFGSCxLQUFLO2dCQU1OLEtBQUs7c0JBRkosS0FBSztnQkFNTixtQkFBbUI7c0JBRmxCLEtBQUs7Z0JBTU4sS0FBSztzQkFGSixLQUFLO2dCQU1OLFFBQVE7c0JBRlAsS0FBSztnQkFNTixNQUFNO3NCQUZMLEtBQUs7Z0JBTU4sSUFBSTtzQkFGSCxLQUFLO2dCQU1OLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFrRkMsVUFBVSxNQWlGVCxhQUFhLE1BU2IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptVGltZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS90aW1lJztcbmltcG9ydCB7IEFic3RyYWN0UHJpem1OdWxsYWJsZUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9udWxsYWJsZS1jb250cm9sJztcbmltcG9ydCB7IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2Fsd2F5cy1mYWxzZS1oYW5kbGVyJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AsIHByaXptUHVyZSB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0ZJWEVEX0RST1BET1dOX0NPTlRST0xMRVJfUFJPVklERVIgfSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvc3BlY2lmaWMtZHJvcGRvd24tY29udHJvbGxlcnMnO1xuaW1wb3J0IHsgUFJJWk1fRk9DVVNBQkxFX0lURU1fQUNDRVNTT1IgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvZm9jdXNhYmxlLWl0ZW0tYWNjZXNzb3InO1xuaW1wb3J0IHsgUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9mb2N1c2FibGUtZWxlbWVudC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBQcml6bUJvb2xlYW5IYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvaGFuZGxlcic7XG5pbXBvcnQgeyBQUklaTV9JTlBVVF9USU1FX09QVElPTlMsIFByaXptSW5wdXRUaW1lT3B0aW9ucyB9IGZyb20gJy4vaW5wdXQtdGltZS1vcHRpb25zJztcbmltcG9ydCB7IFBSSVpNX1RJTUVfVEVYVFMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvaTE4bic7XG5pbXBvcnQgeyBQcml6bVRpbWVNb2RlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdGltZS1tb2RlJztcbmltcG9ydCB7IHByaXptQ3JlYXRlVGltZU5neE1hc2sgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9tYXNrL2NyZWF0ZS10aW1lLW1hc2snO1xuaW1wb3J0IHsgUFJJWk1fU1RSSUNUX01BVENIRVIgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvbWF0Y2hlcic7XG5pbXBvcnQgeyBQcml6bVRpbWVMaWtlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvdGltZS1saWtlJztcbmltcG9ydCB7IHByaXptU2V0TmF0aXZlRm9jdXNlZCB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2V0LW5hdGl2ZS1mb2N1c2VkJztcbmltcG9ydCB7IFByaXptSW5wdXRTaXplIH0gZnJvbSAnLi4vY29tbW9uL21vZGVscy9wcml6bS1pbnB1dC5tb2RlbHMnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWRJbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvaXMtbmF0aXZlLWZvY3VzZWQtaW4nO1xuaW1wb3J0IHsgUFJJWk1fREFURV9SSUdIVF9CVVRUT05TIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2RhdGUtZXh0cmEtYnV0dG9ucyc7XG5pbXBvcnQgeyBQcml6bURhdGVCdXR0b24gfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRlLWJ1dHRvbic7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZCB9IGZyb20gJy4uLy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgcHJpem1JMThuSW5pdFdpdGhLZXkgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWlucHV0LXRpbWVgLFxuICB0ZW1wbGF0ZVVybDogYC4vaW5wdXQtdGltZS5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlVXJsczogW2AuL2lucHV0LXRpbWUuY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByaXptSTE4bkluaXRXaXRoS2V5KFBSSVpNX1RJTUVfVEVYVFMsICd0aW1lJyksXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fRk9DVVNBQkxFX0lURU1fQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQcml6bUlucHV0VGltZUNvbXBvbmVudCksXG4gICAgfSxcbiAgICBQUklaTV9GSVhFRF9EUk9QRE9XTl9DT05UUk9MTEVSX1BST1ZJREVSLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0VGltZUNvbXBvbmVudFxuICBleHRlbmRzIEFic3RyYWN0UHJpem1OdWxsYWJsZUNvbnRyb2w8UHJpem1UaW1lPlxuICBpbXBsZW1lbnRzIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yXG57XG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnRSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcGxhY2Vob2xkZXIgPSAnJztcblxuICBASW5wdXQoKSBmb3JjZUNsZWFyOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBsYWJlbCA9ICfQktGL0LHQtdGA0LjRgtC1INCy0YDQtdC80Y8nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2l6ZTogUHJpem1JbnB1dFNpemUgPSAnbSc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdXRlciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGlzYWJsZWRJdGVtSGFuZGxlcjogUHJpem1Cb29sZWFuSGFuZGxlcjxQcml6bVRpbWU+ID0gUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpdGVtczogcmVhZG9ubHkgUHJpem1UaW1lW10gPSBuZXcgQXJyYXkoMjQpLmZpbGwobnVsbCkubWFwKChfLCBpKSA9PiBuZXcgUHJpem1UaW1lKGksIDAsIDAsIDApKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGl0ZW1TaXplOiBQcml6bUlucHV0VGltZU9wdGlvbnNbJ2l0ZW1TaXplJ10gPSB0aGlzLm9wdGlvbnMuaXRlbVNpemU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzdHJpY3QgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1vZGU6IFByaXptSW5wdXRUaW1lT3B0aW9uc1snbW9kZSddID0gdGhpcy5vcHRpb25zLm1vZGU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBleHRyYUJ1dHRvbkluamVjdG9yOiBJbmplY3RvciA9IHRoaXMuaW5qZWN0b3I7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9pbnB1dF90aW1lJztcblxuICBwdWJsaWMgb3BlbiA9IGZhbHNlO1xuICBwdWJsaWMgcmlnaHRCdXR0b25zJCE6IEJlaGF2aW9yU3ViamVjdDxQcml6bURhdGVCdXR0b25bXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBAU2VsZigpXG4gICAgQEluamVjdChOZ0NvbnRyb2wpXG4gICAgY29udHJvbDogTmdDb250cm9sIHwgbnVsbCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUFJJWk1fVElNRV9URVhUUylcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpbWVUZXh0cyQ6IE9ic2VydmFibGU8UmVjb3JkPFByaXptVGltZU1vZGUsIHN0cmluZz4+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoUFJJWk1fSU5QVVRfVElNRV9PUFRJT05TKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogUHJpem1JbnB1dFRpbWVPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKGNvbnRyb2wsIGNoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMucmlnaHRCdXR0b25zJCA9IHRoaXMuZXh0cmFCdXR0b25JbmplY3Rvci5nZXQoUFJJWk1fREFURV9SSUdIVF9CVVRUT05TKTtcbiAgfVxuXG4gIGdldCBmaWx0ZXJlZCgpOiByZWFkb25seSBQcml6bVRpbWVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKHRoaXMuaXRlbXMsIHRoaXMubW9kZSwgdGhpcy5jb21wdXRlZFNlYXJjaCk7XG4gIH1cblxuICBnZXQgdGV4dE1hc2tPcHRpb25zKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlTWFzayh0aGlzLm1vZGUpO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUudG9TdHJpbmcodGhpcy5tb2RlKSA6IHRoaXMubmF0aXZlVmFsdWU7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRTZWFyY2goKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb21wdXRlZFZhbHVlLmxlbmd0aCAhPT0gdGhpcy5tb2RlLmxlbmd0aCA/IHRoaXMuY29tcHV0ZWRWYWx1ZSA6IGBgO1xuICB9XG5cbiAgZ2V0IGlubmVyUHNldWRvRm9jdXNlZCgpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMucHNldWRvRm9jdXNlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcGVuIHx8IHRoaXMuY29tcHV0ZWRGb2N1c2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBuYXRpdmVWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQgPyB0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQudmFsdWUgOiBgYDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmF0aXZlRm9jdXNhYmxlRWxlbWVudCgpOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudCA/ICh0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KSA6IG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudD8ubmF0aXZlRWxlbWVudFxuICAgICAgPyBwcml6bUlzTmF0aXZlRm9jdXNlZEluKHRoaXMuZm9jdXNhYmxlRWxlbWVudC5uYXRpdmVFbGVtZW50KVxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYWRqYWNlbnQtb3ZlcmxvYWQtc2lnbmF0dXJlc1xuICBzZXQgbmF0aXZlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBAcHJpem1QdXJlXG4gIHB1YmxpYyBnZXRGaWxsZXIkKG1vZGU6IFByaXptVGltZU1vZGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRpbWVUZXh0cyQucGlwZShtYXAodGV4dHMgPT4gdGV4dHNbbW9kZV0pKTtcbiAgfVxuXG4gIHB1YmxpYyBvblZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyB0aGlzLm9wZW4gPSAhIXRoaXMuaXRlbXMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuY29udHJvbCkge1xuICAgICAgdGhpcy5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5nZXRNYXRjaCh2YWx1ZSk7XG5cbiAgICBpZiAobWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZShtYXRjaCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCAhPT0gdGhpcy5tb2RlLmxlbmd0aCkge1xuICAgICAgaWYgKCF2YWx1ZSkgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lID0gUHJpem1UaW1lLmNvcnJlY3RUaW1lKFByaXptVGltZS5mcm9tU3RyaW5nKHZhbHVlKSk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnN0cmljdCA/IHRoaXMuZmluZE5lYXJlc3RUaW1lRnJvbUl0ZW1zKHRpbWUpIDogdGltZSk7XG4gIH1cblxuICBwdWJsaWMgb25Gb2N1c2VkKGZvY3VzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUZvY3VzZWQoZm9jdXNlZCk7XG5cbiAgICBpZiAoZm9jdXNlZCB8fCB0aGlzLnZhbHVlICE9PSBudWxsIHx8IHRoaXMubmF0aXZlVmFsdWUgPT09IGBgIHx8IHRoaXMubW9kZSA9PT0gYEhIOk1NYCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZFRpbWUgPSBQcml6bVRpbWUuZnJvbVN0cmluZyh0aGlzLm5hdGl2ZVZhbHVlKTtcblxuICAgIHRoaXMudXBkYXRlVmFsdWUocGFyc2VkVGltZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm5hdGl2ZVZhbHVlLmVuZHNXaXRoKGAuYCkgfHwgdGhpcy5uYXRpdmVWYWx1ZS5lbmRzV2l0aChgOmApKSB7XG4gICAgICAgIHRoaXMubmF0aXZlVmFsdWUgPSB0aGlzLm5hdGl2ZVZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkhvdmVyZWQoaG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlSG92ZXJlZChob3ZlcmVkKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFycm93VXAoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9jZXNzQXJyb3coZXZlbnQsIDEpO1xuICB9XG5cbiAgcHVibGljIG9uQXJyb3dEb3duKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvY2Vzc0Fycm93KGV2ZW50LCAtMSk7XG4gIH1cblxuICBwdWJsaWMgb25NZW51Q2xpY2soaXRlbTogUHJpem1UaW1lKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVWYWx1ZShpdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9wZW4ob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgd3JpdGVWYWx1ZSh2YWx1ZTogUHJpem1UaW1lIHwgbnVsbCk6IHZvaWQge1xuICAgIHN1cGVyLndyaXRlVmFsdWUodmFsdWUpO1xuICAgIHRoaXMubmF0aXZlVmFsdWUgPSB2YWx1ZSA/IHRoaXMuY29tcHV0ZWRWYWx1ZSA6IGBgO1xuICB9XG5cbiAgQHByaXptUHVyZVxuICBwcml2YXRlIGNhbGN1bGF0ZU1hc2sobW9kZTogUHJpem1UaW1lTW9kZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByaXptQ3JlYXRlVGltZU5neE1hc2sobW9kZSwgdGhpcy5vcHRpb25zLm1heFZhbHVlcyk7XG4gIH1cblxuICBnZXQgc3RyaW5nVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZT8udG9TdHJpbmcoKSA/PyAnJztcbiAgfVxuXG4gIEBwcml6bVB1cmVcbiAgcHJpdmF0ZSBmaWx0ZXIoaXRlbXM6IHJlYWRvbmx5IFByaXptVGltZVtdLCBtb2RlOiBQcml6bVRpbWVNb2RlLCBzZWFyY2g6IHN0cmluZyk6IHJlYWRvbmx5IFByaXptVGltZVtdIHtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b1N0cmluZyhtb2RlKS5pbmNsdWRlcyhzZWFyY2gpKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5lYXJlc3RUaW1lRnJvbUl0ZW1zKHZhbHVlOiBQcml6bVRpbWUpOiBQcml6bVRpbWUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PlxuICAgICAgTWF0aC5hYnMoY3VycmVudC50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkgLSB2YWx1ZS50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkpIDxcbiAgICAgIE1hdGguYWJzKHByZXZpb3VzLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKSAtIHZhbHVlLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKSlcbiAgICAgICAgPyBjdXJyZW50XG4gICAgICAgIDogcHJldmlvdXNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXRjaCh2YWx1ZTogc3RyaW5nKTogUHJpem1UaW1lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gUFJJWk1fU1RSSUNUX01BVENIRVIoaXRlbSwgdmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NBcnJvdyhldmVudDogRXZlbnQsIHNoaWZ0OiAtMSB8IDEpOiB2b2lkIHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQ7XG5cbiAgICAvLyBUT0RPOiBpZnJhbWUgd2FybmluZ1xuICAgIGlmICh0aGlzLnJlYWRPbmx5IHx8ICEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRhcmdldC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuXG4gICAgdGhpcy5zaGlmdFRpbWUodGhpcy5jYWxjdWxhdGVTaGlmdChzZWxlY3Rpb25TdGFydCwgc2hpZnQpKTtcblxuICAgIHRhcmdldC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uU3RhcnQpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVNoaWZ0KHNlbGVjdGlvblN0YXJ0OiBudW1iZXIsIHNoaWZ0OiBudW1iZXIpOiBQcml6bVRpbWVMaWtlIHtcbiAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPD0gMikge1xuICAgICAgcmV0dXJuIHsgaG91cnM6IHNoaWZ0IH07XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGlvblN0YXJ0IDw9IDUpIHtcbiAgICAgIHJldHVybiB7IG1pbnV0ZXM6IHNoaWZ0IH07XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGlvblN0YXJ0IDw9IDgpIHtcbiAgICAgIHJldHVybiB7IHNlY29uZHM6IHNoaWZ0IH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbXM6IHNoaWZ0IH07XG4gIH1cblxuICBwcml2YXRlIHNoaWZ0VGltZShzaGlmdDogUHJpem1UaW1lTGlrZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5jcmVhc2VkVGltZTogUHJpem1UaW1lID0gdGhpcy52YWx1ZS5zaGlmdChzaGlmdCk7XG5cbiAgICAvLyBNYW51YWwgdXBkYXRlIHNvIHdlIGNhbiBzZXQgY2FyZXQgcG9zaXRpb24gcHJvcGVybHlcbiAgICB0aGlzLm5hdGl2ZVZhbHVlID0gaW5jcmVhc2VkVGltZS50b1N0cmluZyh0aGlzLm1vZGUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWUoaW5jcmVhc2VkVGltZSk7XG4gIH1cblxuICBwcml2YXRlIGZvY3VzSW5wdXQocHJldmVudFNjcm9sbCA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgcHJpem1TZXROYXRpdmVGb2N1c2VkKHRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudCwgdHJ1ZSwgcHJldmVudFNjcm9sbCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNhZmVPcGVuTW9kYWwoKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50O1xuICAgIGlmICghdGhpcy5vcGVuICYmICF0aGlzLmRpc2FibGVkICYmIGlucHV0RWxlbWVudCAmJiBwcml6bUlzTmF0aXZlRm9jdXNlZChpbnB1dEVsZW1lbnQpKSB7XG4gICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iLCI8cHJpem0tZHJvcGRvd24taG9zdFxuICBjbGFzcz1cInotd3JhcHBlclwiXG4gIFtjYW5PcGVuXT1cImludGVyYWN0aXZlICYmICEhZmlsdGVyZWQubGVuZ3RoXCJcbiAgW2NvbnRlbnRdPVwiZHJvcGRvd25Db250ZW50XCJcbiAgW3ByaXptRHJvcGRvd25Ib3N0V2lkdGhdPVwiJzEwMCUnXCJcbiAgW2lzT3Blbl09XCJpbnRlcmFjdGl2ZSAmJiBvcGVuICYmICEhZmlsdGVyZWQubGVuZ3RoXCJcbiAgW2Nsb3NlQnlFc2NdPVwidHJ1ZVwiXG4gIChpc09wZW5DaGFuZ2UpPVwib25PcGVuKCRldmVudClcIlxuPlxuICA8cHJpem0taW5wdXQtbGF5b3V0XG4gICAgW2xhYmVsXT1cImxhYmVsXCJcbiAgICBbb3V0ZXJdPVwib3V0ZXJcIlxuICAgIFtmb3JjZUNsZWFyXT1cImZvcmNlQ2xlYXJcIlxuICAgIFtzaXplXT1cInNpemVcIlxuICAgIChjbGljayk9XCJzYWZlT3Blbk1vZGFsKClcIlxuICA+XG4gICAgPGlucHV0XG4gICAgICBjbGFzcz1cImlucHV0LXNlYXJjaFwiXG4gICAgICAjZm9jdXNhYmxlRWxlbWVudFJlZlxuICAgICAgW21hc2tdPVwidGV4dE1hc2tPcHRpb25zXCJcbiAgICAgIFtzaG93TWFza1R5cGVkXT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXNlZFwiXG4gICAgICBbZHJvcFNwZWNpYWxDaGFyYWN0ZXJzXT1cImZhbHNlXCJcbiAgICAgIFtyZXF1aXJlZF09XCJyZWFkT25seVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICBbbmdNb2RlbF09XCJjb21wdXRlZFZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50IHx8ICcnKVwiXG4gICAgICAoa2V5ZG93bi5hcnJvd1VwKT1cIm9uQXJyb3dVcCgkZXZlbnQpXCJcbiAgICAgIChrZXlkb3duLmFycm93RG93bik9XCJvbkFycm93RG93bigkZXZlbnQpXCJcbiAgICAgIHByaXptSW5wdXRcbiAgICAvPlxuICAgIDxuZy1jb250YWluZXIgcHJpem0taW5wdXQtcmlnaHQ+XG4gICAgICA8YnV0dG9uIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCIgKGNsaWNrKT1cIm9uT3Blbighb3BlbilcIiBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImRhdGUtY2xvY2tcIj48L2J1dHRvbj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiByaWdodEJ1dHRvbnMkIHwgYXN5bmNcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b24udGVtcGxhdGVcIj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3ByaXptLWlucHV0LWxheW91dD5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cblxuPG5nLXRlbXBsYXRlICNkcm9wZG93bkNvbnRlbnQ+XG4gIDxwcml6bS1kYXRhLWxpc3QgY2xhc3M9XCJibG9ja1wiIFtzdHlsZS4tLXByaXptLWRhdGEtbGlzdC1ib3JkZXJdPVwiMFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtcz8ubGVuZ3RoXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpbHRlcmVkOyBsZXQgaWR4ID0gaW5kZXhcIlxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwidmFsdWUgJiYgaXRlbS5pc1NhbWVUaW1lKHZhbHVlKVwiXG4gICAgICAgIChjbGljayk9XCJvbk1lbnVDbGljayhpdGVtKVwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgIHt7IGl0ZW0gfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvcHJpem0tZGF0YS1saXN0PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==