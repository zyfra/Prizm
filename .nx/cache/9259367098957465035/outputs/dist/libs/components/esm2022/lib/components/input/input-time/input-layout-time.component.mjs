import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Inject, Injector, Input, ViewChild, } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmTime } from '../../../@core/date-time/time';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { PRIZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { PRIZM_INPUT_TIME_OPTIONS } from './input-time-options';
import { PRIZM_TIME_TEXTS } from '../../../tokens/i18n';
import { prizmCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { PRIZM_STRICT_MATCHER } from '../../../constants/matcher';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '../common';
import { prizmI18nInitWithKey } from '../../../services';
import { CommonModule } from '@angular/common';
import { PrizmDropdownControllerModule, PrizmLifecycleModule, PrizmValueAccessorModule, } from '../../../directives';
import { PrizmMaskModule } from '../../../modules';
import { PrizmDataListComponent } from '../../data-list';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import { PrizmInputTextModule } from '../input-text';
import { PrizmButtonComponent } from '../../button';
import { PrizmListingItemComponent } from '../../listing-item';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../directives/lifecycle/lifecycle.directive";
import * as i3 from "ngx-mask";
import * as i4 from "../common/input-icon-button/input-icon-button.component";
import * as i5 from "../common/input-layout/input-layout-right.directive";
import * as i6 from "../input-text/input-text.component";
import * as i7 from "@angular/forms";
import * as i8 from "rxjs";
export class PrizmInputLayoutTimeComponent extends PrizmInputNgControl {
    constructor(timeTexts$, injector, options) {
        super(injector);
        this.timeTexts$ = timeTexts$;
        this.options = options;
        this.hasClearButton = true;
        this.nativeElementType = 'input-layout-time';
        this.placeholder = '';
        this.disabledItemHandler = PRIZM_ALWAYS_FALSE_HANDLER;
        this.items = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));
        this.itemSize = this.options.itemSize;
        this.strict = false;
        this.mode = this.options.mode;
        this.testId_ = 'ui_input_time';
        this.open = false;
        this.extraButtonInjector = injector;
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
        this.changeDetectorRef.markForCheck();
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
    get interactive() {
        return !this.disabled;
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
    processArrow(event, shift) {
        const { target } = event;
        // TODO: iframe warning
        if ( /*this.readOnly ||*/!(target instanceof HTMLInputElement)) {
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
    safeOpenModal() {
        if (!this.open && !this.disabled) {
            this.open = true;
            this.changeDetectorRef.markForCheck();
        }
        else {
            this.open = false;
        }
    }
    clear(ev) {
        ev.stopImmediatePropagation();
        if (this.nativeFocusableElement)
            this.nativeFocusableElement.value = '';
        this.updateValue(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutTimeComponent, deps: [{ token: PRIZM_TIME_TEXTS }, { token: i0.Injector }, { token: PRIZM_INPUT_TIME_OPTIONS }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputLayoutTimeComponent, isStandalone: true, selector: "prizm-input-layout-time", inputs: { placeholder: "placeholder", disabledItemHandler: "disabledItemHandler", items: "items", itemSize: "itemSize", strict: "strict", mode: "mode", extraButtonInjector: "extraButtonInjector" }, providers: [
            ...prizmI18nInitWithKey(PRIZM_TIME_TEXTS, 'time'),
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PrizmInputLayoutTimeComponent),
                multi: true,
            },
            PrizmDestroyService,
            { provide: PrizmInputControl, useExisting: PrizmInputLayoutTimeComponent },
            PRIZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER,
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-wrapper\"\n  [canOpen]=\"interactive && !!filtered.length\"\n  [content]=\"dropdownContent\"\n  [prizmDropdownHostWidth]=\"'100%'\"\n  [isOpen]=\"interactive && open && !!filtered.length\"\n  [closeByEsc]=\"true\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  (isOpenChange)=\"onOpen($event)\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [mask]=\"textMaskOptions\"\n    [showMaskTyped]=\"focusableElementRef.focused\"\n    [dropSpecialCharacters]=\"false\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"computedValue\"\n    (click)=\"safeOpenModal()\"\n    (ngModelChange)=\"onValueChange($event || '')\"\n    (keydown.arrowUp)=\"onArrowUp($event)\"\n    (keydown.arrowDown)=\"onArrowDown($event)\"\n    prizmInput\n  />\n</prizm-dropdown-host>\n\n<ng-template #dropdownContent>\n  <prizm-data-list class=\"block\" [style.--prizm-data-list-border]=\"0\" (prizmAfterViewInit)=\"markAsTouched()\">\n    <ng-container *ngIf=\"items?.length\">\n      <prizm-listing-item\n        *ngFor=\"let item of filtered; let idx = index\"\n        [selected]=\"value && item.isSameTime(value)\"\n        (click)=\"onMenuClick(item)\"\n        >{{ item }}\n      </prizm-listing-item>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"onOpen(!open)\"\n    prizmInputIconButton=\"date-clock\"\n  ></button>\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n", styles: [":host{display:block}.block{padding:8px 0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i2.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmMaskModule }, { kind: "directive", type: i3.NgxMaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "leadZero", "triggerOnMaskChange", "apm"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }, { kind: "component", type: PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "ngmodule", type: PrizmDropdownControllerModule }, { kind: "component", type: PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "component", type: i4.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i5.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: i6.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i7.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: PrizmValueAccessorModule }, { kind: "component", type: PrizmListingItemComponent, selector: "prizm-listing-item", inputs: ["disabled", "selected"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutTimeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmInputLayoutTimeComponent.prototype, "disabledItemHandler", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array)
], PrizmInputLayoutTimeComponent.prototype, "items", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutTimeComponent.prototype, "itemSize", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutTimeComponent.prototype, "strict", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutTimeComponent.prototype, "mode", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputLayoutTimeComponent.prototype, "extraButtonInjector", void 0);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Observable)
], PrizmInputLayoutTimeComponent.prototype, "getFiller$", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], PrizmInputLayoutTimeComponent.prototype, "calculateMask", null);
__decorate([
    prizmPure,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, String]),
    __metadata("design:returntype", Array)
], PrizmInputLayoutTimeComponent.prototype, "filter", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputLayoutTimeComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-layout-time`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        ...prizmI18nInitWithKey(PRIZM_TIME_TEXTS, 'time'),
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PrizmInputLayoutTimeComponent),
                            multi: true,
                        },
                        PrizmDestroyService,
                        { provide: PrizmInputControl, useExisting: PrizmInputLayoutTimeComponent },
                        PRIZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER,
                    ], standalone: true, imports: [
                        CommonModule,
                        PrizmLifecycleModule,
                        PrizmMaskModule,
                        PrizmDataListComponent,
                        PrizmDropdownControllerModule,
                        PrizmDropdownHostComponent,
                        PrizmInputTextModule,
                        PrizmButtonComponent,
                        FormsModule,
                        PrizmValueAccessorModule,
                        PrizmListingItemComponent,
                    ], template: "<prizm-dropdown-host\n  class=\"z-wrapper\"\n  [canOpen]=\"interactive && !!filtered.length\"\n  [content]=\"dropdownContent\"\n  [prizmDropdownHostWidth]=\"'100%'\"\n  [isOpen]=\"interactive && open && !!filtered.length\"\n  [closeByEsc]=\"true\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  (isOpenChange)=\"onOpen($event)\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [mask]=\"textMaskOptions\"\n    [showMaskTyped]=\"focusableElementRef.focused\"\n    [dropSpecialCharacters]=\"false\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"computedValue\"\n    (click)=\"safeOpenModal()\"\n    (ngModelChange)=\"onValueChange($event || '')\"\n    (keydown.arrowUp)=\"onArrowUp($event)\"\n    (keydown.arrowDown)=\"onArrowDown($event)\"\n    prizmInput\n  />\n</prizm-dropdown-host>\n\n<ng-template #dropdownContent>\n  <prizm-data-list class=\"block\" [style.--prizm-data-list-border]=\"0\" (prizmAfterViewInit)=\"markAsTouched()\">\n    <ng-container *ngIf=\"items?.length\">\n      <prizm-listing-item\n        *ngFor=\"let item of filtered; let idx = index\"\n        [selected]=\"value && item.isSameTime(value)\"\n        (click)=\"onMenuClick(item)\"\n        >{{ item }}\n      </prizm-listing-item>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"onOpen(!open)\"\n    prizmInputIconButton=\"date-clock\"\n  ></button>\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n", styles: [":host{display:block}.block{padding:8px 0}\n"] }]
        }], ctorParameters: function () { return [{ type: i8.Observable, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC10aW1lL2lucHV0LWxheW91dC10aW1lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtdGltZS9pbnB1dC1sYXlvdXQtdGltZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFFVixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBbUIsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRTVHLE9BQU8sRUFBRSx3QkFBd0IsRUFBeUIsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FB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Qjt3QkFDcEIsZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLDZCQUE2Qjt3QkFDN0IsMEJBQTBCO3dCQUMxQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsV0FBVzt3QkFDWCx3QkFBd0I7d0JBQ3hCLHlCQUF5QjtxQkFDMUI7OzBCQTJDRSxNQUFNOzJCQUFDLGdCQUFnQjs7MEJBR3ZCLE1BQU07MkJBQUMsd0JBQXdCOzRDQXZDVCxnQkFBZ0I7c0JBRHhDLFNBQVM7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUt0RCxXQUFXO3NCQUZWLEtBQUs7Z0JBTU4sbUJBQW1CO3NCQUZsQixLQUFLO2dCQU1OLEtBQUs7c0JBRkosS0FBSztnQkFNTixRQUFRO3NCQUZQLEtBQUs7Z0JBTU4sTUFBTTtzQkFGTCxLQUFLO2dCQU1OLElBQUk7c0JBRkgsS0FBSztnQkFNTixtQkFBbUI7c0JBRmxCLEtBQUs7Z0JBaUVDLFVBQVUsTUF5RFQsYUFBYSxNQWFiLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptVGltZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL2RhdGUtdGltZS90aW1lJztcbmltcG9ydCB7IFBSSVpNX0FMV0FZU19GQUxTRV9IQU5ETEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2Fsd2F5cy1mYWxzZS1oYW5kbGVyJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AsIHByaXptUHVyZSB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0ZJWEVEX0RST1BET1dOX0NPTlRST0xMRVJfUFJPVklERVIgfSBmcm9tICcuLi8uLi8uLi9wcm92aWRlcnMvc3BlY2lmaWMtZHJvcGRvd24tY29udHJvbGxlcnMnO1xuaW1wb3J0IHsgUHJpem1Cb29sZWFuSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2hhbmRsZXInO1xuaW1wb3J0IHsgUFJJWk1fSU5QVVRfVElNRV9PUFRJT05TLCBQcml6bUlucHV0VGltZU9wdGlvbnMgfSBmcm9tICcuL2lucHV0LXRpbWUtb3B0aW9ucyc7XG5pbXBvcnQgeyBQUklaTV9USU1FX1RFWFRTIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zL2kxOG4nO1xuaW1wb3J0IHsgUHJpem1UaW1lTW9kZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3RpbWUtbW9kZSc7XG5pbXBvcnQgeyBwcml6bUNyZWF0ZVRpbWVOZ3hNYXNrIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvbWFzay9jcmVhdGUtdGltZS1tYXNrJztcbmltcG9ydCB7IFBSSVpNX1NUUklDVF9NQVRDSEVSIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL21hdGNoZXInO1xuaW1wb3J0IHsgUHJpem1UaW1lTGlrZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3RpbWUtbGlrZSc7XG5pbXBvcnQgeyBwcml6bUlzTmF0aXZlRm9jdXNlZEluIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9pcy1uYXRpdmUtZm9jdXNlZC1pbic7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMvZGF0ZS1leHRyYS1idXR0b25zJztcbmltcG9ydCB7IFByaXptRGF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGUtYnV0dG9uJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUlucHV0Q29udHJvbCwgUHJpem1JbnB1dE5nQ29udHJvbCB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBwcml6bUkxOG5Jbml0V2l0aEtleSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBQcml6bURyb3Bkb3duQ29udHJvbGxlck1vZHVsZSxcbiAgUHJpem1MaWZlY3ljbGVNb2R1bGUsXG4gIFByaXptVmFsdWVBY2Nlc3Nvck1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBQcml6bU1hc2tNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzJztcbmltcG9ydCB7IFByaXptRGF0YUxpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kYXRhLWxpc3QnO1xuaW1wb3J0IHsgUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kcm9wZG93bnMvZHJvcGRvd24taG9zdCc7XG5pbXBvcnQgeyBQcml6bUlucHV0VGV4dE1vZHVsZSB9IGZyb20gJy4uL2lucHV0LXRleHQnO1xuaW1wb3J0IHsgUHJpem1CdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9idXR0b24nO1xuaW1wb3J0IHsgUHJpem1MaXN0aW5nSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xpc3RpbmctaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWlucHV0LWxheW91dC10aW1lYCxcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LWxheW91dC10aW1lLmNvbXBvbmVudC5odG1sYCxcbiAgc3R5bGVVcmxzOiBbYC4vaW5wdXQtbGF5b3V0LXRpbWUuY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLnByaXptSTE4bkluaXRXaXRoS2V5KFBSSVpNX1RJTUVfVEVYVFMsICd0aW1lJyksXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQcml6bUlucHV0TGF5b3V0VGltZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAgeyBwcm92aWRlOiBQcml6bUlucHV0Q29udHJvbCwgdXNlRXhpc3Rpbmc6IFByaXptSW5wdXRMYXlvdXRUaW1lQ29tcG9uZW50IH0sXG4gICAgUFJJWk1fRklYRURfRFJPUERPV05fQ09OVFJPTExFUl9QUk9WSURFUixcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUxpZmVjeWNsZU1vZHVsZSxcbiAgICBQcml6bU1hc2tNb2R1bGUsXG4gICAgUHJpem1EYXRhTGlzdENvbXBvbmVudCxcbiAgICBQcml6bURyb3Bkb3duQ29udHJvbGxlck1vZHVsZSxcbiAgICBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgICBQcml6bUJ1dHRvbkNvbXBvbmVudCxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBQcml6bVZhbHVlQWNjZXNzb3JNb2R1bGUsXG4gICAgUHJpem1MaXN0aW5nSXRlbUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dExheW91dFRpbWVDb21wb25lbnQgZXh0ZW5kcyBQcml6bUlucHV0TmdDb250cm9sPFByaXptVGltZSB8IG51bGw+IHtcbiAgcmVhZG9ubHkgaGFzQ2xlYXJCdXR0b24gPSB0cnVlO1xuICByZWFkb25seSBuYXRpdmVFbGVtZW50VHlwZSA9ICdpbnB1dC1sYXlvdXQtdGltZSc7XG5cbiAgQFZpZXdDaGlsZCgnZm9jdXNhYmxlRWxlbWVudFJlZicsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZm9jdXNhYmxlRWxlbWVudD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZGlzYWJsZWRJdGVtSGFuZGxlcjogUHJpem1Cb29sZWFuSGFuZGxlcjxQcml6bVRpbWU+ID0gUFJJWk1fQUxXQVlTX0ZBTFNFX0hBTkRMRVI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpdGVtczogcmVhZG9ubHkgUHJpem1UaW1lW10gPSBuZXcgQXJyYXkoMjQpLmZpbGwobnVsbCkubWFwKChfLCBpKSA9PiBuZXcgUHJpem1UaW1lKGksIDAsIDAsIDApKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGl0ZW1TaXplOiBQcml6bUlucHV0VGltZU9wdGlvbnNbJ2l0ZW1TaXplJ10gPSB0aGlzLm9wdGlvbnMuaXRlbVNpemU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzdHJpY3QgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1vZGU6IFByaXptSW5wdXRUaW1lT3B0aW9uc1snbW9kZSddID0gdGhpcy5vcHRpb25zLm1vZGU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBleHRyYUJ1dHRvbkluamVjdG9yOiBJbmplY3RvcjtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X3RpbWUnO1xuXG4gIHB1YmxpYyBvcGVuID0gZmFsc2U7XG4gIHB1YmxpYyByaWdodEJ1dHRvbnMkITogQmVoYXZpb3JTdWJqZWN0PFByaXptRGF0ZUJ1dHRvbltdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBSSVpNX1RJTUVfVEVYVFMpXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aW1lVGV4dHMkOiBPYnNlcnZhYmxlPFJlY29yZDxQcml6bVRpbWVNb2RlLCBzdHJpbmc+PixcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChQUklaTV9JTlBVVF9USU1FX09QVElPTlMpXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBQcml6bUlucHV0VGltZU9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IpO1xuICAgIHRoaXMuZXh0cmFCdXR0b25JbmplY3RvciA9IGluamVjdG9yO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5yaWdodEJ1dHRvbnMkID0gdGhpcy5leHRyYUJ1dHRvbkluamVjdG9yLmdldChQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMpO1xuICB9XG5cbiAgZ2V0IGZpbHRlcmVkKCk6IHJlYWRvbmx5IFByaXptVGltZVtdIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIodGhpcy5pdGVtcywgdGhpcy5tb2RlLCB0aGlzLmNvbXB1dGVkU2VhcmNoKTtcbiAgfVxuXG4gIGdldCB0ZXh0TWFza09wdGlvbnMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVNYXNrKHRoaXMubW9kZSk7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZhbHVlID8gdGhpcy52YWx1ZS50b1N0cmluZyh0aGlzLm1vZGUpIDogdGhpcy5uYXRpdmVWYWx1ZTtcbiAgfVxuXG4gIGdldCBjb21wdXRlZFNlYXJjaCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbXB1dGVkVmFsdWUubGVuZ3RoICE9PSB0aGlzLm1vZGUubGVuZ3RoID8gdGhpcy5jb21wdXRlZFZhbHVlIDogYGA7XG4gIH1cblxuICBnZXQgbmF0aXZlVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50ID8gdGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50LnZhbHVlIDogYGA7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQoKTogSFRNTElucHV0RWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQgPyAodGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkgOiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnRcbiAgICAgID8gcHJpem1Jc05hdGl2ZUZvY3VzZWRJbih0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudClcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2FkamFjZW50LW92ZXJsb2FkLXNpZ25hdHVyZXNcbiAgc2V0IG5hdGl2ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgQHByaXptUHVyZVxuICBwdWJsaWMgZ2V0RmlsbGVyJChtb2RlOiBQcml6bVRpbWVNb2RlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50aW1lVGV4dHMkLnBpcGUobWFwKHRleHRzID0+IHRleHRzW21vZGVdKSk7XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gdGhpcy5vcGVuID0gISF0aGlzLml0ZW1zLmxlbmd0aDtcblxuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5nZXRNYXRjaCh2YWx1ZSk7XG5cbiAgICBpZiAobWF0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZShtYXRjaCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLmxlbmd0aCAhPT0gdGhpcy5tb2RlLmxlbmd0aCkge1xuICAgICAgaWYgKCF2YWx1ZSkgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lID0gUHJpem1UaW1lLmNvcnJlY3RUaW1lKFByaXptVGltZS5mcm9tU3RyaW5nKHZhbHVlKSk7XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMuc3RyaWN0ID8gdGhpcy5maW5kTmVhcmVzdFRpbWVGcm9tSXRlbXModGltZSkgOiB0aW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkFycm93VXAoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9jZXNzQXJyb3coZXZlbnQsIDEpO1xuICB9XG5cbiAgcHVibGljIG9uQXJyb3dEb3duKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvY2Vzc0Fycm93KGV2ZW50LCAtMSk7XG4gIH1cblxuICBwdWJsaWMgb25NZW51Q2xpY2soaXRlbTogUHJpem1UaW1lKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVWYWx1ZShpdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9wZW4ob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBQcml6bVRpbWUgfCBudWxsKTogdm9pZCB7XG4gICAgc3VwZXIud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5uYXRpdmVWYWx1ZSA9IHZhbHVlID8gdGhpcy5jb21wdXRlZFZhbHVlIDogYGA7XG4gIH1cblxuICBAcHJpem1QdXJlXG4gIHByaXZhdGUgY2FsY3VsYXRlTWFzayhtb2RlOiBQcml6bVRpbWVNb2RlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJpem1DcmVhdGVUaW1lTmd4TWFzayhtb2RlLCB0aGlzLm9wdGlvbnMubWF4VmFsdWVzKTtcbiAgfVxuXG4gIGdldCBzdHJpbmdWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZhbHVlPy50b1N0cmluZygpID8/ICcnO1xuICB9XG5cbiAgZ2V0IGludGVyYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIEBwcml6bVB1cmVcbiAgcHJpdmF0ZSBmaWx0ZXIoaXRlbXM6IHJlYWRvbmx5IFByaXptVGltZVtdLCBtb2RlOiBQcml6bVRpbWVNb2RlLCBzZWFyY2g6IHN0cmluZyk6IHJlYWRvbmx5IFByaXptVGltZVtdIHtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b1N0cmluZyhtb2RlKS5pbmNsdWRlcyhzZWFyY2gpKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5lYXJlc3RUaW1lRnJvbUl0ZW1zKHZhbHVlOiBQcml6bVRpbWUpOiBQcml6bVRpbWUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PlxuICAgICAgTWF0aC5hYnMoY3VycmVudC50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkgLSB2YWx1ZS50b0Fic29sdXRlTWlsbGlzZWNvbmRzKCkpIDxcbiAgICAgIE1hdGguYWJzKHByZXZpb3VzLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKSAtIHZhbHVlLnRvQWJzb2x1dGVNaWxsaXNlY29uZHMoKSlcbiAgICAgICAgPyBjdXJyZW50XG4gICAgICAgIDogcHJldmlvdXNcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXRjaCh2YWx1ZTogc3RyaW5nKTogUHJpem1UaW1lIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gUFJJWk1fU1RSSUNUX01BVENIRVIoaXRlbSwgdmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0Fycm93KGV2ZW50OiBFdmVudCwgc2hpZnQ6IC0xIHwgMSk6IHZvaWQge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcblxuICAgIC8vIFRPRE86IGlmcmFtZSB3YXJuaW5nXG4gICAgaWYgKC8qdGhpcy5yZWFkT25seSB8fCovICEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRhcmdldC5zZWxlY3Rpb25TdGFydCB8fCAwO1xuXG4gICAgdGhpcy5zaGlmdFRpbWUodGhpcy5jYWxjdWxhdGVTaGlmdChzZWxlY3Rpb25TdGFydCwgc2hpZnQpKTtcblxuICAgIHRhcmdldC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uU3RhcnQpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVNoaWZ0KHNlbGVjdGlvblN0YXJ0OiBudW1iZXIsIHNoaWZ0OiBudW1iZXIpOiBQcml6bVRpbWVMaWtlIHtcbiAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPD0gMikge1xuICAgICAgcmV0dXJuIHsgaG91cnM6IHNoaWZ0IH07XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGlvblN0YXJ0IDw9IDUpIHtcbiAgICAgIHJldHVybiB7IG1pbnV0ZXM6IHNoaWZ0IH07XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGlvblN0YXJ0IDw9IDgpIHtcbiAgICAgIHJldHVybiB7IHNlY29uZHM6IHNoaWZ0IH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbXM6IHNoaWZ0IH07XG4gIH1cblxuICBwcml2YXRlIHNoaWZ0VGltZShzaGlmdDogUHJpem1UaW1lTGlrZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5jcmVhc2VkVGltZTogUHJpem1UaW1lID0gdGhpcy52YWx1ZS5zaGlmdChzaGlmdCk7XG5cbiAgICAvLyBNYW51YWwgdXBkYXRlIHNvIHdlIGNhbiBzZXQgY2FyZXQgcG9zaXRpb24gcHJvcGVybHlcbiAgICB0aGlzLm5hdGl2ZVZhbHVlID0gaW5jcmVhc2VkVGltZS50b1N0cmluZyh0aGlzLm1vZGUpO1xuICAgIHRoaXMudXBkYXRlVmFsdWUoaW5jcmVhc2VkVGltZSk7XG4gIH1cblxuICBwdWJsaWMgc2FmZU9wZW5Nb2RhbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3BlbiAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBjbGVhcihldjogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQpIHRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMudXBkYXRlVmFsdWUobnVsbCk7XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gIGNsYXNzPVwiei13cmFwcGVyXCJcbiAgW2Nhbk9wZW5dPVwiaW50ZXJhY3RpdmUgJiYgISFmaWx0ZXJlZC5sZW5ndGhcIlxuICBbY29udGVudF09XCJkcm9wZG93bkNvbnRlbnRcIlxuICBbcHJpem1Ecm9wZG93bkhvc3RXaWR0aF09XCInMTAwJSdcIlxuICBbaXNPcGVuXT1cImludGVyYWN0aXZlICYmIG9wZW4gJiYgISFmaWx0ZXJlZC5sZW5ndGhcIlxuICBbY2xvc2VCeUVzY109XCJ0cnVlXCJcbiAgW3ByaXptRHJvcGRvd25Ib3N0XT1cImxheW91dENvbXBvbmVudD8uZWw/Lm5hdGl2ZUVsZW1lbnRcIlxuICAoaXNPcGVuQ2hhbmdlKT1cIm9uT3BlbigkZXZlbnQpXCJcbj5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJpbnB1dC1zZWFyY2hcIlxuICAgICNmb2N1c2FibGVFbGVtZW50UmVmXG4gICAgW21hc2tdPVwidGV4dE1hc2tPcHRpb25zXCJcbiAgICBbc2hvd01hc2tUeXBlZF09XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzZWRcIlxuICAgIFtkcm9wU3BlY2lhbENoYXJhY3RlcnNdPVwiZmFsc2VcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgIFtuZ01vZGVsXT1cImNvbXB1dGVkVmFsdWVcIlxuICAgIChjbGljayk9XCJzYWZlT3Blbk1vZGFsKClcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50IHx8ICcnKVwiXG4gICAgKGtleWRvd24uYXJyb3dVcCk9XCJvbkFycm93VXAoJGV2ZW50KVwiXG4gICAgKGtleWRvd24uYXJyb3dEb3duKT1cIm9uQXJyb3dEb3duKCRldmVudClcIlxuICAgIHByaXptSW5wdXRcbiAgLz5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cblxuPG5nLXRlbXBsYXRlICNkcm9wZG93bkNvbnRlbnQ+XG4gIDxwcml6bS1kYXRhLWxpc3QgY2xhc3M9XCJibG9ja1wiIFtzdHlsZS4tLXByaXptLWRhdGEtbGlzdC1ib3JkZXJdPVwiMFwiIChwcml6bUFmdGVyVmlld0luaXQpPVwibWFya0FzVG91Y2hlZCgpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1zPy5sZW5ndGhcIj5cbiAgICAgIDxwcml6bS1saXN0aW5nLWl0ZW1cbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmlsdGVyZWQ7IGxldCBpZHggPSBpbmRleFwiXG4gICAgICAgIFtzZWxlY3RlZF09XCJ2YWx1ZSAmJiBpdGVtLmlzU2FtZVRpbWUodmFsdWUpXCJcbiAgICAgICAgKGNsaWNrKT1cIm9uTWVudUNsaWNrKGl0ZW0pXCJcbiAgICAgICAgPnt7IGl0ZW0gfX1cbiAgICAgIDwvcHJpem0tbGlzdGluZy1pdGVtPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3ByaXptLWRhdGEtbGlzdD5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy1jb250YWluZXIgKnByaXptSW5wdXRMYXlvdXRSaWdodD5cbiAgPGJ1dHRvblxuICAgIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIChjbGljayk9XCJvbk9wZW4oIW9wZW4pXCJcbiAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImRhdGUtY2xvY2tcIlxuICA+PC9idXR0b24+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiByaWdodEJ1dHRvbnMkIHwgYXN5bmNcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b24udGVtcGxhdGVcIj5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==