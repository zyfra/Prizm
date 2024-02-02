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
}
PrizmInputTimeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputTimeComponent, deps: [{ token: NgControl, optional: true, self: true }, { token: i0.ChangeDetectorRef }, { token: ChangeDetectorRef }, { token: PRIZM_TIME_TEXTS }, { token: i0.Injector }, { token: PRIZM_INPUT_TIME_OPTIONS }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputTimeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputTimeComponent, selector: "prizm-input-time", inputs: { placeholder: "placeholder", forceClear: "forceClear", label: "label", size: "size", outer: "outer", disabledItemHandler: "disabledItemHandler", items: "items", itemSize: "itemSize", strict: "strict", mode: "mode", extraButtonInjector: "extraButtonInjector" }, providers: [
        ...prizmI18nInitWithKey(PRIZM_TIME_TEXTS, 'time'),
        {
            provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => PrizmInputTimeComponent),
        },
        PRIZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-wrapper\"\n  [canOpen]=\"interactive && !!filtered.length\"\n  [content]=\"dropdownContent\"\n  [prizmDropdownHostWidth]=\"'100%'\"\n  [isOpen]=\"interactive && open && !!filtered.length\"\n  [closeByEsc]=\"true\"\n  (isOpenChange)=\"onOpen($event)\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [outer]=\"outer\"\n    [forceClear]=\"forceClear\"\n    [size]=\"size\"\n    (click)=\"safeOpenModal()\"\n  >\n    <input\n      class=\"input-search\"\n      #focusableElementRef\n      [mask]=\"textMaskOptions\"\n      [showMaskTyped]=\"focusableElementRef.focused\"\n      [dropSpecialCharacters]=\"false\"\n      [required]=\"readOnly\"\n      [placeholder]=\"placeholder\"\n      [disabled]=\"disabled\"\n      [ngModelOptions]=\"{ standalone: true }\"\n      [ngModel]=\"computedValue\"\n      (ngModelChange)=\"onValueChange($event || '')\"\n      (keydown.arrowUp)=\"onArrowUp($event)\"\n      (keydown.arrowDown)=\"onArrowDown($event)\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <button [interactive]=\"true\" (click)=\"onOpen(!open)\" prizmInputIconButton=\"date-clock\"></button>\n      <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n</prizm-dropdown-host>\n\n<ng-template #dropdownContent>\n  <prizm-data-list class=\"block\" [style.--prizm-data-list-border]=\"0\">\n    <ng-container *ngIf=\"items?.length\">\n      <div\n        class=\"item\"\n        *ngFor=\"let item of filtered; let idx = index\"\n        [class.selected]=\"value && item.isSameTime(value)\"\n        (click)=\"onMenuClick(item)\"\n      >\n        <span class=\"text\">\n          {{ item }}\n        </span>\n      </div>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n", styles: [".item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item.selected{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20));color:var(--prizm-text-contrast)}.item:not(.selected):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}:host{display:inline-block}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "component", type: i3.PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "component", type: i4.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "component", type: i5.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i6.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i7.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "directive", type: i8.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i8.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputTimeComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LXRpbWUvaW5wdXQtdGltZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LXRpbWUvaW5wdXQtdGltZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBbUIsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBR3hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBeUIsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7O0FBZ0J6RCxNQUFNLE9BQU8sdUJBQ1gsU0FBUSw0QkFBdUM7SUFxRC9DLFlBSUUsT0FBeUIsRUFDUixHQUFzQixFQUNaLGlCQUFvQyxFQUU5QyxVQUFxRCxFQUNyRCxRQUFrQixFQUVsQixPQUE4QjtRQUUvQyxLQUFLLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFSakIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFHdEIsZUFBVSxHQUFWLFVBQVUsQ0FBMkM7UUFDckQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUVsQixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQXhEakQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFUixlQUFVLEdBQW1CLElBQUksQ0FBQztRQUkzQyxVQUFLLEdBQUcsZ0JBQWdCLENBQUM7UUFJekIsU0FBSSxHQUFtQixHQUFHLENBQUM7UUFJM0IsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUlkLHdCQUFtQixHQUFtQywwQkFBMEIsQ0FBQztRQUlqRixVQUFLLEdBQXlCLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBSWhHLGFBQVEsR0FBc0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFJcEUsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUlmLFNBQUksR0FBa0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFJeEQsd0JBQW1CLEdBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU1QixZQUFPLEdBQUcsZUFBZSxDQUFDO1FBRXJDLFNBQUksR0FBRyxLQUFLLENBQUM7SUFpQnBCLENBQUM7SUFFZSxRQUFRO1FBQ3RCLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN4RSxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsRixDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtZQUNoQyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUUsQ0FBQztJQUVELElBQVcsc0JBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBa0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xHLENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsYUFBYTtZQUN6QyxDQUFDLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztZQUM3RCxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ1osQ0FBQztJQUVELDJFQUEyRTtJQUMzRSxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUdNLFVBQVUsQ0FBQyxJQUFtQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUFhO1FBQ2hDLG1DQUFtQztRQUVuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV4QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxPQUFPO1NBQ1I7UUFFRCxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVNLFNBQVMsQ0FBQyxPQUFnQjtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVCLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3RGLE9BQU87U0FDUjtRQUVELE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFN0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxTQUFTLENBQUMsT0FBZ0I7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sU0FBUyxDQUFDLEtBQVk7UUFDM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQVk7UUFDN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxXQUFXLENBQUMsSUFBZTtRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBYTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRWUsVUFBVSxDQUFDLEtBQXVCO1FBQ2hELEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBR08sYUFBYSxDQUFDLElBQW1CO1FBQ3ZDLE9BQU8sc0JBQXNCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUdPLE1BQU0sQ0FBQyxLQUEyQixFQUFFLElBQW1CLEVBQUUsTUFBYztRQUM3RSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyx3QkFBd0IsQ0FBQyxLQUFnQjtRQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEdBQUcsS0FBSyxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUMxRSxDQUFDLENBQUMsT0FBTztZQUNULENBQUMsQ0FBQyxRQUFRLENBQ2IsQ0FBQztJQUNKLENBQUM7SUFFTyxRQUFRLENBQUMsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVPLEtBQUs7UUFDWCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQVksRUFBRSxLQUFhO1FBQzlDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFFekIsdUJBQXVCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUFZLGdCQUFnQixDQUFDLEVBQUU7WUFDMUQsT0FBTztTQUNSO1FBRUQsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTNELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDekQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxjQUFjLENBQUMsY0FBc0IsRUFBRSxLQUFhO1FBQzFELElBQUksY0FBYyxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFJLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMzQjtRQUVELE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUFvQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUVELE1BQU0sYUFBYSxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpELHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxhQUFhLEdBQUcsS0FBSztRQUN0QyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVNLGFBQWE7UUFDbEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksWUFBWSxJQUFJLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOztvSEF2U1UsdUJBQXVCLGtCQXlEeEIsU0FBUywwRUFHVCxpQkFBaUIsYUFDakIsZ0JBQWdCLHFDQUdoQix3QkFBd0I7d0dBaEV2Qix1QkFBdUIseVRBVHZCO1FBQ1QsR0FBRyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUM7UUFDakQ7WUFDRSxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkQ7UUFDRCx3Q0FBd0M7S0FDekMsOEhBTXlDLFVBQVUsb0RDeER0RCx3MERBd0RBO0FER0U7SUFDQyxnQkFBZ0IsRUFBRTs7NERBQ0Y7QUFJakI7SUFDQyxnQkFBZ0IsRUFBRTs7c0RBQ007QUFFekI7SUFDQyxnQkFBZ0IsRUFBRTs7cURBQ1E7QUFFM0I7SUFDQyxnQkFBZ0IsRUFBRTs7c0RBQ0w7QUFFZDtJQUNDLGdCQUFnQixFQUFFOztvRUFDOEQ7QUFFakY7SUFDQyxnQkFBZ0IsRUFBRTs7c0RBQzZFO0FBRWhHO0lBQ0MsZ0JBQWdCLEVBQUU7O3lEQUNpRDtBQUVwRTtJQUNDLGdCQUFnQixFQUFFOzt1REFDSjtBQUVmO0lBQ0MsZ0JBQWdCLEVBQUU7O3FEQUNxQztBQUV4RDtJQUNDLGdCQUFnQixFQUFFOzhCQUNFLFFBQVE7b0VBQWlCO0FBK0U5QztJQUFDLFNBQVM7OztvQ0FDOEIsVUFBVTt5REFFakQ7QUE4RUQ7SUFBQyxTQUFTOzs7OzREQUdUO0FBTUQ7SUFBQyxTQUFTOzs7O3FEQUdUOzJGQTNOVSx1QkFBdUI7a0JBZG5DLFNBQVM7K0JBQ0Usa0JBQWtCLG1CQUdYLHVCQUF1QixDQUFDLE1BQU0sYUFDcEM7d0JBQ1QsR0FBRyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUM7d0JBQ2pEOzRCQUNFLE9BQU8sRUFBRSw2QkFBNkI7NEJBQ3RDLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDO3lCQUN2RDt3QkFDRCx3Q0FBd0M7cUJBQ3pDOzswQkF5REUsUUFBUTs7MEJBQ1IsSUFBSTs7MEJBQ0osTUFBTTsyQkFBQyxTQUFTOzswQkFHaEIsTUFBTTsyQkFBQyxpQkFBaUI7OzBCQUN4QixNQUFNOzJCQUFDLGdCQUFnQjs7MEJBR3ZCLE1BQU07MkJBQUMsd0JBQXdCOzRDQTNEbEIsZ0JBQWdCO3NCQUQvQixTQUFTO3VCQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFLdEQsV0FBVztzQkFGVixLQUFLO2dCQUlHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBSU4sS0FBSztzQkFGSixLQUFLO2dCQU1OLElBQUk7c0JBRkgsS0FBSztnQkFNTixLQUFLO3NCQUZKLEtBQUs7Z0JBTU4sbUJBQW1CO3NCQUZsQixLQUFLO2dCQU1OLEtBQUs7c0JBRkosS0FBSztnQkFNTixRQUFRO3NCQUZQLEtBQUs7Z0JBTU4sTUFBTTtzQkFGTCxLQUFLO2dCQU1OLElBQUk7c0JBRkgsS0FBSztnQkFNTixtQkFBbUI7c0JBRmxCLEtBQUs7Z0JBa0ZDLFVBQVUsTUFpRlQsYUFBYSxNQVNiLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bVRpbWUgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9kYXRlLXRpbWUvdGltZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptTnVsbGFibGVDb250cm9sIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvbnVsbGFibGUtY29udHJvbCc7XG5pbXBvcnQgeyBQUklaTV9BTFdBWVNfRkFMU0VfSEFORExFUiB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9hbHdheXMtZmFsc2UtaGFuZGxlcic7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wLCBwcml6bVB1cmUgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQUklaTV9GSVhFRF9EUk9QRE9XTl9DT05UUk9MTEVSX1BST1ZJREVSIH0gZnJvbSAnLi4vLi4vLi4vcHJvdmlkZXJzL3NwZWNpZmljLWRyb3Bkb3duLWNvbnRyb2xsZXJzJztcbmltcG9ydCB7IFBSSVpNX0ZPQ1VTQUJMRV9JVEVNX0FDQ0VTU09SIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2ZvY3VzYWJsZS1pdGVtLWFjY2Vzc29yJztcbmltcG9ydCB7IFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZm9jdXNhYmxlLWVsZW1lbnQtYWNjZXNzb3InO1xuaW1wb3J0IHsgUHJpem1Cb29sZWFuSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2hhbmRsZXInO1xuaW1wb3J0IHsgUFJJWk1fSU5QVVRfVElNRV9PUFRJT05TLCBQcml6bUlucHV0VGltZU9wdGlvbnMgfSBmcm9tICcuL2lucHV0LXRpbWUtb3B0aW9ucyc7XG5pbXBvcnQgeyBQUklaTV9USU1FX1RFWFRTIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2kxOG4nO1xuaW1wb3J0IHsgUHJpem1UaW1lTW9kZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3RpbWUtbW9kZSc7XG5pbXBvcnQgeyBwcml6bUNyZWF0ZVRpbWVOZ3hNYXNrIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvbWFzay9jcmVhdGUtdGltZS1tYXNrJztcbmltcG9ydCB7IFBSSVpNX1NUUklDVF9NQVRDSEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL21hdGNoZXInO1xuaW1wb3J0IHsgUHJpem1UaW1lTGlrZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3RpbWUtbGlrZSc7XG5pbXBvcnQgeyBwcml6bVNldE5hdGl2ZUZvY3VzZWQgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NldC1uYXRpdmUtZm9jdXNlZCc7XG5pbXBvcnQgeyBQcml6bUlucHV0U2l6ZSB9IGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvcHJpem0taW5wdXQubW9kZWxzJztcbmltcG9ydCB7IHByaXptSXNOYXRpdmVGb2N1c2VkSW4gfSBmcm9tICcuLi8uLi8uLi91dGlsL2lzLW5hdGl2ZS1mb2N1c2VkLWluJztcbmltcG9ydCB7IFBSSVpNX0RBVEVfUklHSFRfQlVUVE9OUyB9IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWV4dHJhLWJ1dHRvbnMnO1xuaW1wb3J0IHsgUHJpem1EYXRlQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0ZS1idXR0b24nO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWQgfSBmcm9tICcuLi8uLi8uLi91dGlsJztcbmltcG9ydCB7IHByaXptSTE4bkluaXRXaXRoS2V5IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBwcml6bS1pbnB1dC10aW1lYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LXRpbWUuY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFtgLi9pbnB1dC10aW1lLmNvbXBvbmVudC5sZXNzYF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5wcml6bUkxOG5Jbml0V2l0aEtleShQUklaTV9USU1FX1RFWFRTLCAndGltZScpLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBSSVpNX0ZPQ1VTQUJMRV9JVEVNX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1JbnB1dFRpbWVDb21wb25lbnQpLFxuICAgIH0sXG4gICAgUFJJWk1fRklYRURfRFJPUERPV05fQ09OVFJPTExFUl9QUk9WSURFUixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dFRpbWVDb21wb25lbnRcbiAgZXh0ZW5kcyBBYnN0cmFjdFByaXptTnVsbGFibGVDb250cm9sPFByaXptVGltZT5cbiAgaW1wbGVtZW50cyBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3Nvclxue1xuICBAVmlld0NoaWxkKCdmb2N1c2FibGVFbGVtZW50UmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHB1YmxpYyByZWFkb25seSBmb2N1c2FibGVFbGVtZW50PzogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHBsYWNlaG9sZGVyID0gJyc7XG5cbiAgQElucHV0KCkgZm9yY2VDbGVhcjogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbGFiZWwgPSAn0JLRi9Cx0LXRgNC40YLQtSDQstGA0LXQvNGPJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNpemU6IFByaXptSW5wdXRTaXplID0gJ20nO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3V0ZXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRpc2FibGVkSXRlbUhhbmRsZXI6IFByaXptQm9vbGVhbkhhbmRsZXI8UHJpem1UaW1lPiA9IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaXRlbXM6IHJlYWRvbmx5IFByaXptVGltZVtdID0gbmV3IEFycmF5KDI0KS5maWxsKG51bGwpLm1hcCgoXywgaSkgPT4gbmV3IFByaXptVGltZShpLCAwLCAwLCAwKSk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpdGVtU2l6ZTogUHJpem1JbnB1dFRpbWVPcHRpb25zWydpdGVtU2l6ZSddID0gdGhpcy5vcHRpb25zLml0ZW1TaXplO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc3RyaWN0ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtb2RlOiBQcml6bUlucHV0VGltZU9wdGlvbnNbJ21vZGUnXSA9IHRoaXMub3B0aW9ucy5tb2RlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZXh0cmFCdXR0b25JbmplY3RvcjogSW5qZWN0b3IgPSB0aGlzLmluamVjdG9yO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfaW5wdXRfdGltZSc7XG5cbiAgcHVibGljIG9wZW4gPSBmYWxzZTtcbiAgcHVibGljIHJpZ2h0QnV0dG9ucyQhOiBCZWhhdmlvclN1YmplY3Q8UHJpem1EYXRlQnV0dG9uW10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIEBJbmplY3QoTmdDb250cm9sKVxuICAgIGNvbnRyb2w6IE5nQ29udHJvbCB8IG51bGwsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFBSSVpNX1RJTUVfVEVYVFMpXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aW1lVGV4dHMkOiBPYnNlcnZhYmxlPFJlY29yZDxQcml6bVRpbWVNb2RlLCBzdHJpbmc+PixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KFBSSVpNX0lOUFVUX1RJTUVfT1BUSU9OUylcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IFByaXptSW5wdXRUaW1lT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihjb250cm9sLCBjaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLnJpZ2h0QnV0dG9ucyQgPSB0aGlzLmV4dHJhQnV0dG9uSW5qZWN0b3IuZ2V0KFBSSVpNX0RBVEVfUklHSFRfQlVUVE9OUyk7XG4gIH1cblxuICBnZXQgZmlsdGVyZWQoKTogcmVhZG9ubHkgUHJpem1UaW1lW10ge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcih0aGlzLml0ZW1zLCB0aGlzLm1vZGUsIHRoaXMuY29tcHV0ZWRTZWFyY2gpO1xuICB9XG5cbiAgZ2V0IHRleHRNYXNrT3B0aW9ucygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZU1hc2sodGhpcy5tb2RlKTtcbiAgfVxuXG4gIGdldCBjb21wdXRlZFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLnRvU3RyaW5nKHRoaXMubW9kZSkgOiB0aGlzLm5hdGl2ZVZhbHVlO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkU2VhcmNoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29tcHV0ZWRWYWx1ZS5sZW5ndGggIT09IHRoaXMubW9kZS5sZW5ndGggPyB0aGlzLmNvbXB1dGVkVmFsdWUgOiBgYDtcbiAgfVxuXG4gIGdldCBpbm5lclBzZXVkb0ZvY3VzZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGlmICh0aGlzLnBzZXVkb0ZvY3VzZWQgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3BlbiB8fCB0aGlzLmNvbXB1dGVkRm9jdXNlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgbmF0aXZlVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50ID8gdGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50LnZhbHVlIDogYGA7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQoKTogSFRNTElucHV0RWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQgPyAodGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkgOiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnRcbiAgICAgID8gcHJpem1Jc05hdGl2ZUZvY3VzZWRJbih0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudClcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2FkamFjZW50LW92ZXJsb2FkLXNpZ25hdHVyZXNcbiAgc2V0IG5hdGl2ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgQHByaXptUHVyZVxuICBwdWJsaWMgZ2V0RmlsbGVyJChtb2RlOiBQcml6bVRpbWVNb2RlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50aW1lVGV4dHMkLnBpcGUobWFwKHRleHRzID0+IHRleHRzW21vZGVdKSk7XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gdGhpcy5vcGVuID0gISF0aGlzLml0ZW1zLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuZ2V0TWF0Y2godmFsdWUpO1xuXG4gICAgaWYgKG1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUobWF0Y2gpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5sZW5ndGggIT09IHRoaXMubW9kZS5sZW5ndGgpIHtcbiAgICAgIGlmICghdmFsdWUpIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGltZSA9IFByaXptVGltZS5jb3JyZWN0VGltZShQcml6bVRpbWUuZnJvbVN0cmluZyh2YWx1ZSkpO1xuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5zdHJpY3QgPyB0aGlzLmZpbmROZWFyZXN0VGltZUZyb21JdGVtcyh0aW1lKSA6IHRpbWUpO1xuICB9XG5cbiAgcHVibGljIG9uRm9jdXNlZChmb2N1c2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVGb2N1c2VkKGZvY3VzZWQpO1xuXG4gICAgaWYgKGZvY3VzZWQgfHwgdGhpcy52YWx1ZSAhPT0gbnVsbCB8fCB0aGlzLm5hdGl2ZVZhbHVlID09PSBgYCB8fCB0aGlzLm1vZGUgPT09IGBISDpNTWApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWRUaW1lID0gUHJpem1UaW1lLmZyb21TdHJpbmcodGhpcy5uYXRpdmVWYWx1ZSk7XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHBhcnNlZFRpbWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5uYXRpdmVWYWx1ZS5lbmRzV2l0aChgLmApIHx8IHRoaXMubmF0aXZlVmFsdWUuZW5kc1dpdGgoYDpgKSkge1xuICAgICAgICB0aGlzLm5hdGl2ZVZhbHVlID0gdGhpcy5uYXRpdmVWYWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25Ib3ZlcmVkKGhvdmVyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUhvdmVyZWQoaG92ZXJlZCk7XG4gIH1cblxuICBwdWJsaWMgb25BcnJvd1VwKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvY2Vzc0Fycm93KGV2ZW50LCAxKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFycm93RG93bihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb2Nlc3NBcnJvdyhldmVudCwgLTEpO1xuICB9XG5cbiAgcHVibGljIG9uTWVudUNsaWNrKGl0ZW06IFByaXptVGltZSk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlVmFsdWUoaXRlbSk7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IFByaXptVGltZSB8IG51bGwpOiB2b2lkIHtcbiAgICBzdXBlci53cml0ZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLm5hdGl2ZVZhbHVlID0gdmFsdWUgPyB0aGlzLmNvbXB1dGVkVmFsdWUgOiBgYDtcbiAgfVxuXG4gIEBwcml6bVB1cmVcbiAgcHJpdmF0ZSBjYWxjdWxhdGVNYXNrKG1vZGU6IFByaXptVGltZU1vZGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBwcml6bUNyZWF0ZVRpbWVOZ3hNYXNrKG1vZGUsIHRoaXMub3B0aW9ucy5tYXhWYWx1ZXMpO1xuICB9XG5cbiAgZ2V0IHN0cmluZ1ZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU/LnRvU3RyaW5nKCkgPz8gJyc7XG4gIH1cblxuICBAcHJpem1QdXJlXG4gIHByaXZhdGUgZmlsdGVyKGl0ZW1zOiByZWFkb25seSBQcml6bVRpbWVbXSwgbW9kZTogUHJpem1UaW1lTW9kZSwgc2VhcmNoOiBzdHJpbmcpOiByZWFkb25seSBQcml6bVRpbWVbXSB7XG4gICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udG9TdHJpbmcobW9kZSkuaW5jbHVkZXMoc2VhcmNoKSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmROZWFyZXN0VGltZUZyb21JdGVtcyh2YWx1ZTogUHJpem1UaW1lKTogUHJpem1UaW1lIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT5cbiAgICAgIE1hdGguYWJzKGN1cnJlbnQudG9BYnNvbHV0ZU1pbGxpc2Vjb25kcygpIC0gdmFsdWUudG9BYnNvbHV0ZU1pbGxpc2Vjb25kcygpKSA8XG4gICAgICBNYXRoLmFicyhwcmV2aW91cy50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkgLSB2YWx1ZS50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkpXG4gICAgICAgID8gY3VycmVudFxuICAgICAgICA6IHByZXZpb3VzXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWF0Y2godmFsdWU6IHN0cmluZyk6IFByaXptVGltZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmluZChpdGVtID0+IFBSSVpNX1NUUklDVF9NQVRDSEVSKGl0ZW0sIHZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQXJyb3coZXZlbnQ6IEV2ZW50LCBzaGlmdDogLTEgfCAxKTogdm9pZCB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuXG4gICAgLy8gVE9ETzogaWZyYW1lIHdhcm5pbmdcbiAgICBpZiAodGhpcy5yZWFkT25seSB8fCAhKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnQgPSB0YXJnZXQuc2VsZWN0aW9uU3RhcnQgfHwgMDtcblxuICAgIHRoaXMuc2hpZnRUaW1lKHRoaXMuY2FsY3VsYXRlU2hpZnQoc2VsZWN0aW9uU3RhcnQsIHNoaWZ0KSk7XG5cbiAgICB0YXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvblN0YXJ0KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVTaGlmdChzZWxlY3Rpb25TdGFydDogbnVtYmVyLCBzaGlmdDogbnVtYmVyKTogUHJpem1UaW1lTGlrZSB7XG4gICAgaWYgKHNlbGVjdGlvblN0YXJ0IDw9IDIpIHtcbiAgICAgIHJldHVybiB7IGhvdXJzOiBzaGlmdCB9O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3Rpb25TdGFydCA8PSA1KSB7XG4gICAgICByZXR1cm4geyBtaW51dGVzOiBzaGlmdCB9O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3Rpb25TdGFydCA8PSA4KSB7XG4gICAgICByZXR1cm4geyBzZWNvbmRzOiBzaGlmdCB9O1xuICAgIH1cblxuICAgIHJldHVybiB7IG1zOiBzaGlmdCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzaGlmdFRpbWUoc2hpZnQ6IFByaXptVGltZUxpa2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluY3JlYXNlZFRpbWU6IFByaXptVGltZSA9IHRoaXMudmFsdWUuc2hpZnQoc2hpZnQpO1xuXG4gICAgLy8gTWFudWFsIHVwZGF0ZSBzbyB3ZSBjYW4gc2V0IGNhcmV0IHBvc2l0aW9uIHByb3Blcmx5XG4gICAgdGhpcy5uYXRpdmVWYWx1ZSA9IGluY3JlYXNlZFRpbWUudG9TdHJpbmcodGhpcy5tb2RlKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKGluY3JlYXNlZFRpbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb2N1c0lucHV0KHByZXZlbnRTY3JvbGwgPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgIHByaXptU2V0TmF0aXZlRm9jdXNlZCh0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQsIHRydWUsIHByZXZlbnRTY3JvbGwpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzYWZlT3Blbk1vZGFsKCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuZm9jdXNhYmxlRWxlbWVudD8ubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIXRoaXMub3BlbiAmJiAhdGhpcy5kaXNhYmxlZCAmJiBpbnB1dEVsZW1lbnQgJiYgcHJpem1Jc05hdGl2ZUZvY3VzZWQoaW5wdXRFbGVtZW50KSkge1xuICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIiwiPHByaXptLWRyb3Bkb3duLWhvc3RcbiAgY2xhc3M9XCJ6LXdyYXBwZXJcIlxuICBbY2FuT3Blbl09XCJpbnRlcmFjdGl2ZSAmJiAhIWZpbHRlcmVkLmxlbmd0aFwiXG4gIFtjb250ZW50XT1cImRyb3Bkb3duQ29udGVudFwiXG4gIFtwcml6bURyb3Bkb3duSG9zdFdpZHRoXT1cIicxMDAlJ1wiXG4gIFtpc09wZW5dPVwiaW50ZXJhY3RpdmUgJiYgb3BlbiAmJiAhIWZpbHRlcmVkLmxlbmd0aFwiXG4gIFtjbG9zZUJ5RXNjXT1cInRydWVcIlxuICAoaXNPcGVuQ2hhbmdlKT1cIm9uT3BlbigkZXZlbnQpXCJcbj5cbiAgPHByaXptLWlucHV0LWxheW91dFxuICAgIFtsYWJlbF09XCJsYWJlbFwiXG4gICAgW291dGVyXT1cIm91dGVyXCJcbiAgICBbZm9yY2VDbGVhcl09XCJmb3JjZUNsZWFyXCJcbiAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAoY2xpY2spPVwic2FmZU9wZW5Nb2RhbCgpXCJcbiAgPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJpbnB1dC1zZWFyY2hcIlxuICAgICAgI2ZvY3VzYWJsZUVsZW1lbnRSZWZcbiAgICAgIFttYXNrXT1cInRleHRNYXNrT3B0aW9uc1wiXG4gICAgICBbc2hvd01hc2tUeXBlZF09XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzZWRcIlxuICAgICAgW2Ryb3BTcGVjaWFsQ2hhcmFjdGVyc109XCJmYWxzZVwiXG4gICAgICBbcmVxdWlyZWRdPVwicmVhZE9ubHlcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgW25nTW9kZWxdPVwiY29tcHV0ZWRWYWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudCB8fCAnJylcIlxuICAgICAgKGtleWRvd24uYXJyb3dVcCk9XCJvbkFycm93VXAoJGV2ZW50KVwiXG4gICAgICAoa2V5ZG93bi5hcnJvd0Rvd24pPVwib25BcnJvd0Rvd24oJGV2ZW50KVwiXG4gICAgICBwcml6bUlucHV0XG4gICAgLz5cbiAgICA8bmctY29udGFpbmVyIHByaXptLWlucHV0LXJpZ2h0PlxuICAgICAgPGJ1dHRvbiBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiIChjbGljayk9XCJvbk9wZW4oIW9wZW4pXCIgcHJpem1JbnB1dEljb25CdXR0b249XCJkYXRlLWNsb2NrXCI+PC9idXR0b24+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidXR0b24gb2YgcmlnaHRCdXR0b25zJCB8IGFzeW5jXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uLnRlbXBsYXRlXCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG48L3ByaXptLWRyb3Bkb3duLWhvc3Q+XG5cbjxuZy10ZW1wbGF0ZSAjZHJvcGRvd25Db250ZW50PlxuICA8cHJpem0tZGF0YS1saXN0IGNsYXNzPVwiYmxvY2tcIiBbc3R5bGUuLS1wcml6bS1kYXRhLWxpc3QtYm9yZGVyXT1cIjBcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbXM/Lmxlbmd0aFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cIml0ZW1cIlxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWx0ZXJlZDsgbGV0IGlkeCA9IGluZGV4XCJcbiAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cInZhbHVlICYmIGl0ZW0uaXNTYW1lVGltZSh2YWx1ZSlcIlxuICAgICAgICAoY2xpY2spPVwib25NZW51Q2xpY2soaXRlbSlcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICB7eyBpdGVtIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3ByaXptLWRhdGEtbGlzdD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=