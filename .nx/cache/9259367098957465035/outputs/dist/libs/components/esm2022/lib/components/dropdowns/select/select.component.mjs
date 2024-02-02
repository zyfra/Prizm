import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Inject, Input, Optional, Output, Self, ViewChild, } from '@angular/core';
import { Compare, PrizmCallFuncModule, PrizmDestroyService, PrizmFormControlHelpers, PrizmLetModule, } from '@prizm-ui/helpers';
import { FormsModule, NgControl, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { PolymorphModule, PrizmAutoFocusModule, PrizmDropdownControllerModule, PrizmHintModule, PrizmLifecycleModule, } from '../../../directives';
import { PRIZM_SELECT_OPTIONS } from './select.options';
import { PrizmInputTextModule } from '../../input';
import { AbstractPrizmControl } from '../../../abstract/control';
import { prizmIsNativeFocused, prizmIsTextOverflow$ } from '../../../util';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, takeUntil, tap, } from 'rxjs/operators';
import { BehaviorSubject, concat, timer } from 'rxjs';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDropdownHostComponent, PrizmDropdownHostModule } from '../dropdown-host';
import { PrizmOverlayModule, PrizmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PrizmScrollbarModule } from '../../scrollbar';
import { PrizmChipsModule } from '../../chips';
import { CommonModule } from '@angular/common';
import { PrizmIconModule } from '../../icon';
import { PrizmDataListModule } from '../../data-list';
import * as i0 from "@angular/core";
import * as i1 from "../../../directives/polymorph/directives/outlet";
import * as i2 from "@angular/common";
import * as i3 from "../../input/common/input-layout/input-layout.component";
import * as i4 from "../../input/input-text/input-text.component";
import * as i5 from "@angular/forms";
import * as i6 from "@prizm-ui/helpers";
import * as i7 from "../../../directives/hint/hint.directive";
import * as i8 from "../../icon/icon.component";
import * as i9 from "../../../directives/dropdown-controller/dropdown-controller.directive";
import * as i10 from "../../../directives/lifecycle/lifecycle.directive";
import * as i11 from "../../data-list/data-list.component";
import * as i12 from "../dropdown-host/dropdown-host.component";
/**
 * @deprecated
 * use only PrizmSelectInputComponent
 * will be removed after ng 15 update
 * for auto update use our migrator https://prizm.site/forZIIoT/update-from-beta
 * */
export class PrizmSelectComponent extends AbstractPrizmControl {
    set items(data) {
        this.items$.next(data);
    }
    get items() {
        return this.items$.value;
    }
    constructor(options, control, changeDetectorRef) {
        super(control, changeDetectorRef);
        this.options = options;
        this.dropdownScroll = 'auto';
        this.searchable = this.options.searchable;
        this.forceClear = this.options.forceClear;
        this.icon = this.options.icon;
        this.label = this.options.label;
        this.minDropdownHeight = this.options.minDropdownHeight;
        this.maxDropdownHeight = this.options.maxDropdownHeight;
        this.placeholder = this.options.placeholder;
        this.dropdownWidth = this.options.dropdownWidth;
        this.size = this.options.size;
        this.search = this.options.search;
        this.searchMatcher = this.options.searchMatcher;
        this.emptyContent = this.options.emptyContent;
        this.nullContent = this.options.nullContent;
        this.prizmIsTextOverflow$ = prizmIsTextOverflow$;
        this.stop$ = new BehaviorSubject(false);
        /**
         * need only clear function
         * */
        this.stringify = this.options.stringify;
        this.identityMatcher = this.options.identityMatcher;
        this.valueTemplate = this.options.valueContent;
        this.outer = this.options.outer;
        this.testId_ = 'ui_select';
        this.searchChange = new EventEmitter();
        this.open = false;
        this.direction = PrizmOverlayOutsidePlacement.RIGHT;
        this.items$ = new BehaviorSubject([]);
        this.requiredInputControl = new UntypedFormControl();
        this.defaultIcon = 'chevrons-dropdown';
        this.filteredItems$ = this.requiredInputControl.valueChanges.pipe(tap(value => this.searchEmit(value)), startWith(''), switchMap(value => {
            return this.items$.pipe(map(items => {
                if (!this.searchable || !value?.toString().replace(/[ ]+/g, ''))
                    return items;
                const searchValue = (this.searchValue = value.toString().trim());
                return items?.filter(item => this.searchMatcher(searchValue, item)) ?? [];
            }), map(items => {
                if (this.nullContent && items?.length && items[0] !== null) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    items = [null, ...items];
                }
                return items;
            }), tap(items => {
                this.filteredItems = items;
                this.dropdownHostElement?.reCalculatePositions(1000 / 60);
            }), debounceTime(0)
            // tap(() => this.safeOpenModal())
            );
        }));
        this.filteredItems = [];
        this.isNullish = Compare.isNullish;
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        this.initControlStatusChangerIfExist();
        this.initControlValueChangerIfExist();
        this.initControlValidatorsIfExist();
    }
    initControlValidatorsIfExist() {
        if (this.control)
            PrizmFormControlHelpers.syncAllValidators(this.control, false, this.requiredInputControl)
                .pipe(takeUntil(this.destroy$))
                .subscribe();
    }
    initControlStatusChangerIfExist() {
        if (this.control)
            PrizmFormControlHelpers.syncValidators(this.control, false, this.requiredInputControl)
                .pipe(
            // debounceTime(0),
            // tap(() => this.changeDetectorRef.detectChanges()),
            takeUntil(this.destroy$))
                .subscribe();
    }
    initControlValueChangerIfExist() {
        let counter = 0;
        concat(timer(0).pipe(map(() => this.control?.value)), this.internalValue$.pipe(debounceTime(0)))
            .pipe(distinctUntilChanged(), tap(value => {
            if (value) {
                value = this.items$.value?.find(i => value && i && this.identityMatcher(value, i));
            }
            this.select(value);
            this.updateValue(value);
            if (counter === 0)
                this.control?.markAsPristine();
            counter++;
        }), takeUntil(this.destroy$))
            .subscribe();
    }
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return prizmIsNativeFocused(this.nativeFocusableElement);
    }
    onClear() {
        this.select(null);
    }
    getFallbackValue() {
        return null;
    }
    select(item) {
        if (!this.identityMatcher(item, this.value)) {
            this.updateValue(item);
        }
        this.requiredInputControl.setValue(item !== undefined && this.stringify(item));
        // TODO remove after add update inputs
        if (this.inputTextElement)
            this.inputTextElement.markAsTouched();
        this.open = false;
    }
    safeOpenModal() {
        const inputElement = this.focusableElement?.nativeElement;
        // if (this.stop$.value) return
        const open = !this.open && this.interactive && inputElement && prizmIsNativeFocused(inputElement);
        this.open = !!open;
        this.changeDetectorRef.markForCheck();
    }
    // TODO remove after finish activezone to dropdown component
    safeStopPropagation(value, $event) {
        this.open = false;
        this.changeDetectorRef.markForCheck();
        if (!value)
            $event.stopImmediatePropagation();
    }
    isMostRelevant(idx, items, wroteInputValue) {
        const itIsNotCurrentValue = wroteInputValue && !this.identityMatcher(wroteInputValue, this.value);
        const isCanSearch = this.searchable;
        const hasNullValue = items[0] === null;
        const result = isCanSearch && itIsNotCurrentValue && ((hasNullValue && idx === 1) || (!hasNullValue && idx === 0));
        return !!result;
    }
    searchEmit(value) {
        if (this.search === value)
            return;
        this.search = value;
        this.searchChange.emit(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSelectComponent, deps: [{ token: PRIZM_SELECT_OPTIONS }, { token: NgControl, optional: true, self: true }, { token: ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmSelectComponent, isStandalone: true, selector: "prizm-select", inputs: { items: "items", dropdownScroll: "dropdownScroll", searchable: "searchable", forceClear: "forceClear", icon: "icon", label: "label", minDropdownHeight: "minDropdownHeight", maxDropdownHeight: "maxDropdownHeight", placeholder: "placeholder", dropdownWidth: "dropdownWidth", size: "size", search: "search", searchMatcher: "searchMatcher", emptyContent: "emptyContent", nullContent: "nullContent", stringify: "stringify", identityMatcher: "identityMatcher", valueTemplate: "valueTemplate", outer: "outer" }, outputs: { searchChange: "searchChange" }, providers: [
            PrizmDestroyService,
            {
                provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
                useExisting: forwardRef(() => PrizmSelectComponent),
            },
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }, { propertyName: "dropdownHostElement", first: true, predicate: ["dropdownHostRef"], descendants: true }], exportAs: ["prizmDropdownSelect"], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  #dropdownHostRef\n  *prizmLet=\"filteredItems$ | async as items\"\n  [(isOpen)]=\"open\"\n  [content]=\"dropdown\"\n  [prizmDropdownHostWidth]=\"dropdownWidth\"\n  [prizmDropdownMinHeight]=\"minDropdownHeight\"\n  [prizmDropdownMaxHeight]=\"maxDropdownHeight\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [forceClear]=\"forceClear\"\n    [outer]=\"outer\"\n    [size]=\"size\"\n    (click)=\"safeOpenModal()\"\n    (clear)=\"safeStopPropagation(focusableElementRef.value, $event)\"\n  >\n    <input\n      class=\"input-search\"\n      #inputText=\"prizmInput\"\n      #focusableElementRef\n      [placeholder]=\"placeholder\"\n      [disabled]=\"this.disabled\"\n      [readonly]=\"!searchable || this.disabled\"\n      [formControl]=\"requiredInputControl\"\n      (prizmOnInit)=\"inputTextElement = inputText\"\n      (onClear)=\"onClear()\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <ng-container\n        *polymorphOutlet=\"icon || defaultIcon as iconName; context: { opened: open, disabled: disabled }\"\n      >\n        <prizm-icon\n          *ngIf=\"!disabled\"\n          [class.opened]=\"open\"\n          [class.active]=\"focusableElementRef.focused\"\n          [class.icon-dropdown]=\"iconName === defaultIcon\"\n          [iconClass]=\"$any(iconName)\"\n          (click)=\"focusableElementRef.focus()\"\n        >\n        </prizm-icon>\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n\n  <ng-template #dropdown>\n    <prizm-data-list class=\"block\" [scroll]=\"dropdownScroll\" [style.--prizm-data-list-border]=\"0\">\n      <ng-container *ngIf=\"items?.length; else emptyTemplate\">\n        <div\n          class=\"item\"\n          #hostHint\n          *ngFor=\"let item of filteredItems$ | async; let idx = index\"\n          [class.most-relevant]=\"isMostRelevant(idx, items, focusableElementRef.value)\"\n          [class.selected]=\"\n            item === value || (item && value && (item | prizmCallFunc : identityMatcher : value))\n          \"\n          (click)=\"select(item)\"\n        >\n          <ng-container *ngIf=\"!isNullish(item); else nullContentTemplate\">\n            <span\n              class=\"text\"\n              #elem\n              *prizmLet=\"item | prizmCallFunc : stringify : $any(nullContent) as text\"\n              [prizmHint]=\"text\"\n              [prizmHintHost]=\"hostHint\"\n              [prizmHintDirection]=\"direction\"\n              [prizmHintCanShow]=\"$any(elem | prizmCallFunc : prizmIsTextOverflow$ | async)\"\n            >\n              <ng-container\n                *polymorphOutlet=\"\n                  $any(valueTemplate) as content;\n                  context: {\n                    $implicit: item,\n                    stringify: text\n                  }\n                \"\n              >\n                {{ text }}\n              </ng-container>\n            </span>\n          </ng-container>\n\n          <ng-template #nullContentTemplate>\n            <ng-container *ngIf=\"nullContent\">\n              <ng-container *polymorphOutlet=\"nullContent as content\">\n                {{ content }}\n              </ng-container>\n            </ng-container>\n          </ng-template>\n        </div>\n      </ng-container>\n      <ng-template #emptyTemplate>\n        <div class=\"empty-template\">\n          <ng-container *polymorphOutlet=\"emptyContent as content\">\n            {{ content }}\n          </ng-container>\n        </div>\n      </ng-template>\n    </prizm-data-list>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{position:relative;z-index:0;display:inline-block}.item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.item:empty{display:none}.item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item.selected,.item.most-relevant{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20));color:var(--prizm-text-contrast)}.item:not(.selected):not(.most-relevant):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}.block{background:var(--prizm-select-background, var(--prizm-bg-body));border-radius:2px;border:none;padding:var(--prizm-select-padding, 8px 0)}.input-chips[readonly]{cursor:pointer}.empty-template{padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-empty-text, var(--prizm-text-subscript, #20222b))}.icon-dropdown{color:#777b92;cursor:pointer;transition-property:transform;transition-property:all;transition-property:color,transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out}.icon-dropdown.opened{transform:rotate(180deg)}.icon-dropdown.active{color:#337eff}prizm-icon{color:var(--prizm-text-subscript)}\n"], dependencies: [{ kind: "ngmodule", type: PrizmOverlayModule }, { kind: "ngmodule", type: PolymorphModule }, { kind: "directive", type: i1.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i4.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmChipsModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: PrizmLetModule }, { kind: "directive", type: i6.PrizmLetDirective, selector: "[prizmLet]", inputs: ["prizmLet"], exportAs: ["prizmLet"] }, { kind: "ngmodule", type: PrizmAutoFocusModule }, { kind: "ngmodule", type: PrizmHintModule }, { kind: "directive", type: i7.PrizmHintDirective, selector: "[prizmHint]:not(ng-container)", inputs: ["prizmAutoReposition", "prizmHintDirection", "prizmHintId", "prizmHintTheme", "prizmHintShowDelay", "prizmHintHideDelay", "prizmHintHost", "prizmHintContext", "prizmHintCanShow", "prizmHint"], outputs: ["prizmHintShowed"], exportAs: ["prizmHint"] }, { kind: "ngmodule", type: PrizmIconModule }, { kind: "component", type: i8.PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "ngmodule", type: PrizmCallFuncModule }, { kind: "pipe", type: i6.PrizmCallFuncPipe, name: "prizmCallFunc" }, { kind: "ngmodule", type: PrizmScrollbarModule }, { kind: "ngmodule", type: PrizmDropdownControllerModule }, { kind: "directive", type: i9.PrizmDropdownControllerDirective, selector: "[prizmDropdownMinHeight], [prizmDropdownMaxHeight], [prizmDropdownAlign], [prizmDropdownLimitWidth]", inputs: ["prizmDropdownMinHeight", "prizmDropdownAlign", "prizmDropdownLimitWidth", "prizmDropdownMaxHeight"] }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i10.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmDataListModule }, { kind: "component", type: i11.PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "ngmodule", type: PrizmDropdownHostModule }, { kind: "component", type: i12.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmSelectComponent.prototype, "dropdownScroll", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "searchable", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "forceClear", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "icon", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "label", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "minDropdownHeight", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "maxDropdownHeight", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "dropdownWidth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmSelectComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "search", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmSelectComponent.prototype, "searchMatcher", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "emptyContent", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "nullContent", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmSelectComponent.prototype, "stringify", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmSelectComponent.prototype, "identityMatcher", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmSelectComponent.prototype, "valueTemplate", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Boolean)
], PrizmSelectComponent.prototype, "outer", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-select', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        PrizmDestroyService,
                        {
                            provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
                            useExisting: forwardRef(() => PrizmSelectComponent),
                        },
                    ], standalone: true, imports: [
                        PrizmOverlayModule,
                        PolymorphModule,
                        PrizmInputTextModule,
                        PrizmChipsModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        PrizmLetModule,
                        PrizmAutoFocusModule,
                        PrizmHintModule,
                        PrizmIconModule,
                        PrizmCallFuncModule,
                        PrizmScrollbarModule,
                        PrizmDropdownControllerModule,
                        PrizmLifecycleModule,
                        PrizmDataListModule,
                        PrizmDropdownHostModule,
                    ], exportAs: 'prizmDropdownSelect', template: "<prizm-dropdown-host\n  #dropdownHostRef\n  *prizmLet=\"filteredItems$ | async as items\"\n  [(isOpen)]=\"open\"\n  [content]=\"dropdown\"\n  [prizmDropdownHostWidth]=\"dropdownWidth\"\n  [prizmDropdownMinHeight]=\"minDropdownHeight\"\n  [prizmDropdownMaxHeight]=\"maxDropdownHeight\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [forceClear]=\"forceClear\"\n    [outer]=\"outer\"\n    [size]=\"size\"\n    (click)=\"safeOpenModal()\"\n    (clear)=\"safeStopPropagation(focusableElementRef.value, $event)\"\n  >\n    <input\n      class=\"input-search\"\n      #inputText=\"prizmInput\"\n      #focusableElementRef\n      [placeholder]=\"placeholder\"\n      [disabled]=\"this.disabled\"\n      [readonly]=\"!searchable || this.disabled\"\n      [formControl]=\"requiredInputControl\"\n      (prizmOnInit)=\"inputTextElement = inputText\"\n      (onClear)=\"onClear()\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <ng-container\n        *polymorphOutlet=\"icon || defaultIcon as iconName; context: { opened: open, disabled: disabled }\"\n      >\n        <prizm-icon\n          *ngIf=\"!disabled\"\n          [class.opened]=\"open\"\n          [class.active]=\"focusableElementRef.focused\"\n          [class.icon-dropdown]=\"iconName === defaultIcon\"\n          [iconClass]=\"$any(iconName)\"\n          (click)=\"focusableElementRef.focus()\"\n        >\n        </prizm-icon>\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n\n  <ng-template #dropdown>\n    <prizm-data-list class=\"block\" [scroll]=\"dropdownScroll\" [style.--prizm-data-list-border]=\"0\">\n      <ng-container *ngIf=\"items?.length; else emptyTemplate\">\n        <div\n          class=\"item\"\n          #hostHint\n          *ngFor=\"let item of filteredItems$ | async; let idx = index\"\n          [class.most-relevant]=\"isMostRelevant(idx, items, focusableElementRef.value)\"\n          [class.selected]=\"\n            item === value || (item && value && (item | prizmCallFunc : identityMatcher : value))\n          \"\n          (click)=\"select(item)\"\n        >\n          <ng-container *ngIf=\"!isNullish(item); else nullContentTemplate\">\n            <span\n              class=\"text\"\n              #elem\n              *prizmLet=\"item | prizmCallFunc : stringify : $any(nullContent) as text\"\n              [prizmHint]=\"text\"\n              [prizmHintHost]=\"hostHint\"\n              [prizmHintDirection]=\"direction\"\n              [prizmHintCanShow]=\"$any(elem | prizmCallFunc : prizmIsTextOverflow$ | async)\"\n            >\n              <ng-container\n                *polymorphOutlet=\"\n                  $any(valueTemplate) as content;\n                  context: {\n                    $implicit: item,\n                    stringify: text\n                  }\n                \"\n              >\n                {{ text }}\n              </ng-container>\n            </span>\n          </ng-container>\n\n          <ng-template #nullContentTemplate>\n            <ng-container *ngIf=\"nullContent\">\n              <ng-container *polymorphOutlet=\"nullContent as content\">\n                {{ content }}\n              </ng-container>\n            </ng-container>\n          </ng-template>\n        </div>\n      </ng-container>\n      <ng-template #emptyTemplate>\n        <div class=\"empty-template\">\n          <ng-container *polymorphOutlet=\"emptyContent as content\">\n            {{ content }}\n          </ng-container>\n        </div>\n      </ng-template>\n    </prizm-data-list>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{position:relative;z-index:0;display:inline-block}.item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.item:empty{display:none}.item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item.selected,.item.most-relevant{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20));color:var(--prizm-text-contrast)}.item:not(.selected):not(.most-relevant):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}.block{background:var(--prizm-select-background, var(--prizm-bg-body));border-radius:2px;border:none;padding:var(--prizm-select-padding, 8px 0)}.input-chips[readonly]{cursor:pointer}.empty-template{padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-empty-text, var(--prizm-text-subscript, #20222b))}.icon-dropdown{color:#777b92;cursor:pointer;transition-property:transform;transition-property:all;transition-property:color,transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out}.icon-dropdown.opened{transform:rotate(180deg)}.icon-dropdown.active{color:#337eff}prizm-icon{color:var(--prizm-text-subscript)}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_SELECT_OPTIONS]
                }] }, { type: i5.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }, {
                    type: Inject,
                    args: [NgControl]
                }] }, { type: i0.ChangeDetectorRef, decorators: [{
                    type: Inject,
                    args: [ChangeDetectorRef]
                }] }]; }, propDecorators: { focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: ElementRef }]
            }], dropdownHostElement: [{
                type: ViewChild,
                args: ['dropdownHostRef']
            }], items: [{
                type: Input
            }], dropdownScroll: [{
                type: Input
            }], searchable: [{
                type: Input
            }], forceClear: [{
                type: Input
            }], icon: [{
                type: Input
            }], label: [{
                type: Input
            }], minDropdownHeight: [{
                type: Input
            }], maxDropdownHeight: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], dropdownWidth: [{
                type: Input
            }], size: [{
                type: Input
            }], search: [{
                type: Input
            }], searchMatcher: [{
                type: Input
            }], emptyContent: [{
                type: Input
            }], nullContent: [{
                type: Input
            }], stringify: [{
                type: Input
            }], identityMatcher: [{
                type: Input
            }], valueTemplate: [{
                type: Input
            }], outer: [{
                type: Input
            }], searchChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd25zL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bnMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsY0FBYyxHQUNmLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRyxPQUFPLEVBRUwsZUFBZSxFQUNmLG9CQUFvQixFQUNwQiw2QkFBNkIsRUFDN0IsZUFBZSxFQUNmLG9CQUFvQixHQUNyQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxvQkFBb0IsRUFBK0MsTUFBTSxrQkFBa0IsQ0FBQztBQUVyRyxPQUFPLEVBQTJDLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztB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TixNQUFNO3NCQUZMLEtBQUs7Z0JBTU4sYUFBYTtzQkFGWixLQUFLO2dCQU1OLFlBQVk7c0JBRlgsS0FBSztnQkFNTixXQUFXO3NCQUZWLEtBQUs7Z0JBYU4sU0FBUztzQkFGUixLQUFLO2dCQU1OLGVBQWU7c0JBRmQsS0FBSztnQkFNTixhQUFhO3NCQUZaLEtBQUs7Z0JBTU4sS0FBSztzQkFGSixLQUFLO2dCQU9VLFlBQVk7c0JBRDNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTZWxmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29tcGFyZSxcbiAgUHJpem1DYWxsRnVuY01vZHVsZSxcbiAgUHJpem1EZXN0cm95U2VydmljZSxcbiAgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMsXG4gIFByaXptTGV0TW9kdWxlLFxufSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTmdDb250cm9sLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBVbnR5cGVkRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBQb2x5bW9ycGhDb250ZW50LFxuICBQb2x5bW9ycGhNb2R1bGUsXG4gIFByaXptQXV0b0ZvY3VzTW9kdWxlLFxuICBQcml6bURyb3Bkb3duQ29udHJvbGxlck1vZHVsZSxcbiAgUHJpem1IaW50TW9kdWxlLFxuICBQcml6bUxpZmVjeWNsZU1vZHVsZSxcbn0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBQUklaTV9TRUxFQ1RfT1BUSU9OUywgUHJpem1TZWxlY3RPcHRpb25zLCBQcml6bVNlbGVjdFZhbHVlQ29udGV4dCB9IGZyb20gJy4vc2VsZWN0Lm9wdGlvbnMnO1xuaW1wb3J0IHsgUHJpem1Gb2N1c2FibGVFbGVtZW50QWNjZXNzb3IsIFByaXptTmF0aXZlRm9jdXNhYmxlRWxlbWVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFByaXptSW5wdXRTaXplLCBQcml6bUlucHV0VGV4dENvbXBvbmVudCwgUHJpem1JbnB1dFRleHRNb2R1bGUgfSBmcm9tICcuLi8uLi9pbnB1dCc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L2NvbnRyb2wnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWQsIHByaXptSXNUZXh0T3ZlcmZsb3ckIH0gZnJvbSAnLi4vLi4vLi4vdXRpbCc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN0YXJ0V2l0aCxcbiAgc3dpdGNoTWFwLFxuICB0YWtlVW50aWwsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb25jYXQsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bVNlbGVjdElkZW50aXR5TWF0Y2hlciwgUHJpem1TZWxlY3RTZWFyY2hNYXRjaGVyIH0gZnJvbSAnLi9zZWxlY3QubW9kZWwnO1xuaW1wb3J0IHsgUFJJWk1fRk9DVVNBQkxFX0lURU1fQUNDRVNTT1IgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50LCBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duLWhvc3QnO1xuaW1wb3J0IHsgUHJpem1PdmVybGF5TW9kdWxlLCBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9vdmVybGF5JztcbmltcG9ydCB7IFByaXptU2Nyb2xsYmFyTW9kdWxlLCBQcml6bVNjcm9sbGJhclZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9zY3JvbGxiYXInO1xuaW1wb3J0IHsgUHJpem1DaGlwc01vZHVsZSB9IGZyb20gJy4uLy4uL2NoaXBzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcml6bUljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9pY29uJztcbmltcG9ydCB7IFByaXptRGF0YUxpc3RNb2R1bGUgfSBmcm9tICcuLi8uLi9kYXRhLWxpc3QnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiB1c2Ugb25seSBQcml6bVNlbGVjdElucHV0Q29tcG9uZW50XG4gKiB3aWxsIGJlIHJlbW92ZWQgYWZ0ZXIgbmcgMTUgdXBkYXRlXG4gKiBmb3IgYXV0byB1cGRhdGUgdXNlIG91ciBtaWdyYXRvciBodHRwczovL3ByaXptLnNpdGUvZm9yWklJb1QvdXBkYXRlLWZyb20tYmV0YVxuICogKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fRk9DVVNBQkxFX0lURU1fQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQcml6bVNlbGVjdENvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIFByaXptT3ZlcmxheU1vZHVsZSxcbiAgICBQb2x5bW9ycGhNb2R1bGUsXG4gICAgUHJpem1JbnB1dFRleHRNb2R1bGUsXG4gICAgUHJpem1DaGlwc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUxldE1vZHVsZSxcbiAgICBQcml6bUF1dG9Gb2N1c01vZHVsZSxcbiAgICBQcml6bUhpbnRNb2R1bGUsXG4gICAgUHJpem1JY29uTW9kdWxlLFxuICAgIFByaXptQ2FsbEZ1bmNNb2R1bGUsXG4gICAgUHJpem1TY3JvbGxiYXJNb2R1bGUsXG4gICAgUHJpem1Ecm9wZG93bkNvbnRyb2xsZXJNb2R1bGUsXG4gICAgUHJpem1MaWZlY3ljbGVNb2R1bGUsXG4gICAgUHJpem1EYXRhTGlzdE1vZHVsZSxcbiAgICBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0QXM6ICdwcml6bURyb3Bkb3duU2VsZWN0Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1TZWxlY3RDb21wb25lbnQ8VD5cbiAgZXh0ZW5kcyBBYnN0cmFjdFByaXptQ29udHJvbDxUPlxuICBpbXBsZW1lbnRzIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yXG57XG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnRSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duSG9zdFJlZicpXG4gIHB1YmxpYyByZWFkb25seSBkcm9wZG93bkhvc3RFbGVtZW50PzogUHJpem1Ecm9wZG93bkhvc3RDb21wb25lbnQ7XG5cbiAgQElucHV0KCkgc2V0IGl0ZW1zKGRhdGE6IFRbXSkge1xuICAgIHRoaXMuaXRlbXMkLm5leHQoZGF0YSBhcyBhbnkpO1xuICB9XG4gIGdldCBpdGVtcygpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zJC52YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZHJvcGRvd25TY3JvbGw6IFByaXptU2Nyb2xsYmFyVmlzaWJpbGl0eSA9ICdhdXRvJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNlYXJjaGFibGUgPSB0aGlzLm9wdGlvbnMuc2VhcmNoYWJsZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGZvcmNlQ2xlYXIgPSB0aGlzLm9wdGlvbnMuZm9yY2VDbGVhcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGljb24gPSB0aGlzLm9wdGlvbnMuaWNvbjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGxhYmVsID0gdGhpcy5vcHRpb25zLmxhYmVsO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWluRHJvcGRvd25IZWlnaHQgPSB0aGlzLm9wdGlvbnMubWluRHJvcGRvd25IZWlnaHQ7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtYXhEcm9wZG93bkhlaWdodCA9IHRoaXMub3B0aW9ucy5tYXhEcm9wZG93bkhlaWdodDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHBsYWNlaG9sZGVyID0gdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZHJvcGRvd25XaWR0aCA9IHRoaXMub3B0aW9ucy5kcm9wZG93bldpZHRoO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2l6ZTogUHJpem1JbnB1dFNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNlYXJjaDogc3RyaW5nIHwgbnVsbCA9IHRoaXMub3B0aW9ucy5zZWFyY2g7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzZWFyY2hNYXRjaGVyOiBQcml6bVNlbGVjdFNlYXJjaE1hdGNoZXI8VD4gPSB0aGlzLm9wdGlvbnMuc2VhcmNoTWF0Y2hlcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGVtcHR5Q29udGVudDogUG9seW1vcnBoQ29udGVudCA9IHRoaXMub3B0aW9ucy5lbXB0eUNvbnRlbnQ7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBudWxsQ29udGVudDogUG9seW1vcnBoQ29udGVudCA9IHRoaXMub3B0aW9ucy5udWxsQ29udGVudDtcblxuICByZWFkb25seSBwcml6bUlzVGV4dE92ZXJmbG93JCA9IHByaXptSXNUZXh0T3ZlcmZsb3ckO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RvcCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICAvKipcbiAgICogbmVlZCBvbmx5IGNsZWFyIGZ1bmN0aW9uXG4gICAqICovXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc3RyaW5naWZ5OiAoaTogVCwgY29udGVudD86IHN0cmluZykgPT4gYW55ID0gdGhpcy5vcHRpb25zLnN0cmluZ2lmeSBhcyBhbnk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpZGVudGl0eU1hdGNoZXI6IFByaXptU2VsZWN0SWRlbnRpdHlNYXRjaGVyPFQ+ID0gdGhpcy5vcHRpb25zLmlkZW50aXR5TWF0Y2hlcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHZhbHVlVGVtcGxhdGU6IFBvbHltb3JwaENvbnRlbnQ8UHJpem1TZWxlY3RWYWx1ZUNvbnRleHQ8VD4+ID0gdGhpcy5vcHRpb25zLnZhbHVlQ29udGVudDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG91dGVyOiBib29sZWFuID0gdGhpcy5vcHRpb25zLm91dGVyO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfc2VsZWN0JztcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHJlYWRvbmx5IHNlYXJjaENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVsbD4oKTtcblxuICBwdWJsaWMgaW5wdXRUZXh0RWxlbWVudCE6IFByaXptSW5wdXRUZXh0Q29tcG9uZW50IHwgbnVsbDtcbiAgcHVibGljIG9wZW4gPSBmYWxzZTtcbiAgcHVibGljIHJlYWRvbmx5IGRpcmVjdGlvbjogUHJpem1PdmVybGF5T3V0c2lkZVBsYWNlbWVudCA9IFByaXptT3ZlcmxheU91dHNpZGVQbGFjZW1lbnQuUklHSFQ7XG4gIHB1YmxpYyByZWFkb25seSBpdGVtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgcHVibGljIHJlYWRvbmx5IHJlcXVpcmVkSW5wdXRDb250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgpO1xuICBwdWJsaWMgcmVhZG9ubHkgZGVmYXVsdEljb24gPSAnY2hldnJvbnMtZHJvcGRvd24nO1xuXG4gIHJlYWRvbmx5IGZpbHRlcmVkSXRlbXMkID0gdGhpcy5yZXF1aXJlZElucHV0Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICB0YXAodmFsdWUgPT4gdGhpcy5zZWFyY2hFbWl0KHZhbHVlKSksXG4gICAgc3RhcnRXaXRoKCcnKSxcbiAgICBzd2l0Y2hNYXAodmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMkLnBpcGUoXG4gICAgICAgIG1hcChpdGVtcyA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaGFibGUgfHwgIXZhbHVlPy50b1N0cmluZygpLnJlcGxhY2UoL1sgXSsvZywgJycpKSByZXR1cm4gaXRlbXM7XG4gICAgICAgICAgY29uc3Qgc2VhcmNoVmFsdWUgPSAodGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkudHJpbSgpKTtcbiAgICAgICAgICByZXR1cm4gaXRlbXM/LmZpbHRlcihpdGVtID0+IHRoaXMuc2VhcmNoTWF0Y2hlcihzZWFyY2hWYWx1ZSwgaXRlbSkpID8/IFtdO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKGl0ZW1zID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5udWxsQ29udGVudCAmJiBpdGVtcz8ubGVuZ3RoICYmIGl0ZW1zWzBdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpdGVtcyA9IFtudWxsLCAuLi5pdGVtc107XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgfSksXG4gICAgICAgIHRhcChpdGVtcyA9PiB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgdGhpcy5kcm9wZG93bkhvc3RFbGVtZW50Py5yZUNhbGN1bGF0ZVBvc2l0aW9ucygxMDAwIC8gNjApO1xuICAgICAgICB9KSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDApXG4gICAgICAgIC8vIHRhcCgoKSA9PiB0aGlzLnNhZmVPcGVuTW9kYWwoKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBwdWJsaWMgZmlsdGVyZWRJdGVtczogVFtdID0gW107XG4gIHByaXZhdGUgc2VhcmNoVmFsdWUhOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGlzTnVsbGlzaCA9IENvbXBhcmUuaXNOdWxsaXNoO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUFJJWk1fU0VMRUNUX09QVElPTlMpIHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogUHJpem1TZWxlY3RPcHRpb25zPFQ+LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIEBJbmplY3QoTmdDb250cm9sKVxuICAgIGNvbnRyb2w6IE5nQ29udHJvbCB8IG51bGwsXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKGNvbnRyb2wsIGNoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0Q29udHJvbFN0YXR1c0NoYW5nZXJJZkV4aXN0KCk7XG4gICAgdGhpcy5pbml0Q29udHJvbFZhbHVlQ2hhbmdlcklmRXhpc3QoKTtcbiAgICB0aGlzLmluaXRDb250cm9sVmFsaWRhdG9yc0lmRXhpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENvbnRyb2xWYWxpZGF0b3JzSWZFeGlzdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sKVxuICAgICAgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuc3luY0FsbFZhbGlkYXRvcnMoXG4gICAgICAgIHRoaXMuY29udHJvbCBhcyBVbnR5cGVkRm9ybUNvbnRyb2wsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB0aGlzLnJlcXVpcmVkSW5wdXRDb250cm9sXG4gICAgICApXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q29udHJvbFN0YXR1c0NoYW5nZXJJZkV4aXN0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2wpXG4gICAgICBQcml6bUZvcm1Db250cm9sSGVscGVycy5zeW5jVmFsaWRhdG9ycyhcbiAgICAgICAgdGhpcy5jb250cm9sIGFzIFVudHlwZWRGb3JtQ29udHJvbCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRoaXMucmVxdWlyZWRJbnB1dENvbnRyb2xcbiAgICAgIClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgLy8gZGVib3VuY2VUaW1lKDApLFxuICAgICAgICAgIC8vIHRhcCgoKSA9PiB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKSksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q29udHJvbFZhbHVlQ2hhbmdlcklmRXhpc3QoKTogdm9pZCB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGNvbmNhdCh0aW1lcigwKS5waXBlKG1hcCgoKSA9PiB0aGlzLmNvbnRyb2w/LnZhbHVlKSksIHRoaXMuaW50ZXJuYWxWYWx1ZSQucGlwZShkZWJvdW5jZVRpbWUoMCkpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRhcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuaXRlbXMkLnZhbHVlPy5maW5kKGkgPT4gdmFsdWUgJiYgaSAmJiB0aGlzLmlkZW50aXR5TWF0Y2hlcih2YWx1ZSwgaSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNlbGVjdCh2YWx1ZSk7XG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgaWYgKGNvdW50ZXIgPT09IDApIHRoaXMuY29udHJvbD8ubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IFByaXptTmF0aXZlRm9jdXNhYmxlRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQgPyB0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gIH1cblxuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJpem1Jc05hdGl2ZUZvY3VzZWQodGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0KG51bGwgYXMgYW55KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRGYWxsYmFja1ZhbHVlKCk6IFQge1xuICAgIHJldHVybiBudWxsIGFzIGFueTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3QoaXRlbTogVCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pZGVudGl0eU1hdGNoZXIoaXRlbSwgdGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoaXRlbSk7XG4gICAgfVxuICAgIHRoaXMucmVxdWlyZWRJbnB1dENvbnRyb2wuc2V0VmFsdWUoaXRlbSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc3RyaW5naWZ5KGl0ZW0pKTtcbiAgICAvLyBUT0RPIHJlbW92ZSBhZnRlciBhZGQgdXBkYXRlIGlucHV0c1xuICAgIGlmICh0aGlzLmlucHV0VGV4dEVsZW1lbnQpIHRoaXMuaW5wdXRUZXh0RWxlbWVudC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc2FmZU9wZW5Nb2RhbCgpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy8gaWYgKHRoaXMuc3RvcCQudmFsdWUpIHJldHVyblxuICAgIGNvbnN0IG9wZW4gPSAhdGhpcy5vcGVuICYmIHRoaXMuaW50ZXJhY3RpdmUgJiYgaW5wdXRFbGVtZW50ICYmIHByaXptSXNOYXRpdmVGb2N1c2VkKGlucHV0RWxlbWVudCk7XG4gICAgdGhpcy5vcGVuID0gISFvcGVuO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvLyBUT0RPIHJlbW92ZSBhZnRlciBmaW5pc2ggYWN0aXZlem9uZSB0byBkcm9wZG93biBjb21wb25lbnRcbiAgcHVibGljIHNhZmVTdG9wUHJvcGFnYXRpb24odmFsdWU6IHN0cmluZywgJGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgaWYgKCF2YWx1ZSkgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHVibGljIGlzTW9zdFJlbGV2YW50KGlkeDogbnVtYmVyLCBpdGVtczogVFtdLCB3cm90ZUlucHV0VmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGl0SXNOb3RDdXJyZW50VmFsdWUgPSB3cm90ZUlucHV0VmFsdWUgJiYgIXRoaXMuaWRlbnRpdHlNYXRjaGVyKHdyb3RlSW5wdXRWYWx1ZSBhcyBULCB0aGlzLnZhbHVlKTtcbiAgICBjb25zdCBpc0NhblNlYXJjaCA9IHRoaXMuc2VhcmNoYWJsZTtcbiAgICBjb25zdCBoYXNOdWxsVmFsdWUgPSBpdGVtc1swXSA9PT0gbnVsbDtcbiAgICBjb25zdCByZXN1bHQgPVxuICAgICAgaXNDYW5TZWFyY2ggJiYgaXRJc05vdEN1cnJlbnRWYWx1ZSAmJiAoKGhhc051bGxWYWx1ZSAmJiBpZHggPT09IDEpIHx8ICghaGFzTnVsbFZhbHVlICYmIGlkeCA9PT0gMCkpO1xuXG4gICAgcmV0dXJuICEhcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBzZWFyY2hFbWl0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWFyY2ggPT09IHZhbHVlKSByZXR1cm47XG4gICAgdGhpcy5zZWFyY2ggPSB2YWx1ZTtcbiAgICB0aGlzLnNlYXJjaENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIiwiPHByaXptLWRyb3Bkb3duLWhvc3RcbiAgI2Ryb3Bkb3duSG9zdFJlZlxuICAqcHJpem1MZXQ9XCJmaWx0ZXJlZEl0ZW1zJCB8IGFzeW5jIGFzIGl0ZW1zXCJcbiAgWyhpc09wZW4pXT1cIm9wZW5cIlxuICBbY29udGVudF09XCJkcm9wZG93blwiXG4gIFtwcml6bURyb3Bkb3duSG9zdFdpZHRoXT1cImRyb3Bkb3duV2lkdGhcIlxuICBbcHJpem1Ecm9wZG93bk1pbkhlaWdodF09XCJtaW5Ecm9wZG93bkhlaWdodFwiXG4gIFtwcml6bURyb3Bkb3duTWF4SGVpZ2h0XT1cIm1heERyb3Bkb3duSGVpZ2h0XCJcbj5cbiAgPHByaXptLWlucHV0LWxheW91dFxuICAgIFtsYWJlbF09XCJsYWJlbFwiXG4gICAgW2ZvcmNlQ2xlYXJdPVwiZm9yY2VDbGVhclwiXG4gICAgW291dGVyXT1cIm91dGVyXCJcbiAgICBbc2l6ZV09XCJzaXplXCJcbiAgICAoY2xpY2spPVwic2FmZU9wZW5Nb2RhbCgpXCJcbiAgICAoY2xlYXIpPVwic2FmZVN0b3BQcm9wYWdhdGlvbihmb2N1c2FibGVFbGVtZW50UmVmLnZhbHVlLCAkZXZlbnQpXCJcbiAgPlxuICAgIDxpbnB1dFxuICAgICAgY2xhc3M9XCJpbnB1dC1zZWFyY2hcIlxuICAgICAgI2lucHV0VGV4dD1cInByaXptSW5wdXRcIlxuICAgICAgI2ZvY3VzYWJsZUVsZW1lbnRSZWZcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBbZGlzYWJsZWRdPVwidGhpcy5kaXNhYmxlZFwiXG4gICAgICBbcmVhZG9ubHldPVwiIXNlYXJjaGFibGUgfHwgdGhpcy5kaXNhYmxlZFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwicmVxdWlyZWRJbnB1dENvbnRyb2xcIlxuICAgICAgKHByaXptT25Jbml0KT1cImlucHV0VGV4dEVsZW1lbnQgPSBpbnB1dFRleHRcIlxuICAgICAgKG9uQ2xlYXIpPVwib25DbGVhcigpXCJcbiAgICAgIHByaXptSW5wdXRcbiAgICAvPlxuICAgIDxuZy1jb250YWluZXIgcHJpem0taW5wdXQtcmlnaHQ+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpwb2x5bW9ycGhPdXRsZXQ9XCJpY29uIHx8IGRlZmF1bHRJY29uIGFzIGljb25OYW1lOyBjb250ZXh0OiB7IG9wZW5lZDogb3BlbiwgZGlzYWJsZWQ6IGRpc2FibGVkIH1cIlxuICAgICAgPlxuICAgICAgICA8cHJpem0taWNvblxuICAgICAgICAgICpuZ0lmPVwiIWRpc2FibGVkXCJcbiAgICAgICAgICBbY2xhc3Mub3BlbmVkXT1cIm9wZW5cIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1c2VkXCJcbiAgICAgICAgICBbY2xhc3MuaWNvbi1kcm9wZG93bl09XCJpY29uTmFtZSA9PT0gZGVmYXVsdEljb25cIlxuICAgICAgICAgIFtpY29uQ2xhc3NdPVwiJGFueShpY29uTmFtZSlcIlxuICAgICAgICAgIChjbGljayk9XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzKClcIlxuICAgICAgICA+XG4gICAgICAgIDwvcHJpem0taWNvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3ByaXptLWlucHV0LWxheW91dD5cblxuICA8bmctdGVtcGxhdGUgI2Ryb3Bkb3duPlxuICAgIDxwcml6bS1kYXRhLWxpc3QgY2xhc3M9XCJibG9ja1wiIFtzY3JvbGxdPVwiZHJvcGRvd25TY3JvbGxcIiBbc3R5bGUuLS1wcml6bS1kYXRhLWxpc3QtYm9yZGVyXT1cIjBcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtcz8ubGVuZ3RoOyBlbHNlIGVtcHR5VGVtcGxhdGVcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICAgI2hvc3RIaW50XG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmlsdGVyZWRJdGVtcyQgfCBhc3luYzsgbGV0IGlkeCA9IGluZGV4XCJcbiAgICAgICAgICBbY2xhc3MubW9zdC1yZWxldmFudF09XCJpc01vc3RSZWxldmFudChpZHgsIGl0ZW1zLCBmb2N1c2FibGVFbGVtZW50UmVmLnZhbHVlKVwiXG4gICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIlxuICAgICAgICAgICAgaXRlbSA9PT0gdmFsdWUgfHwgKGl0ZW0gJiYgdmFsdWUgJiYgKGl0ZW0gfCBwcml6bUNhbGxGdW5jIDogaWRlbnRpdHlNYXRjaGVyIDogdmFsdWUpKVxuICAgICAgICAgIFwiXG4gICAgICAgICAgKGNsaWNrKT1cInNlbGVjdChpdGVtKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTnVsbGlzaChpdGVtKTsgZWxzZSBudWxsQ29udGVudFRlbXBsYXRlXCI+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzcz1cInRleHRcIlxuICAgICAgICAgICAgICAjZWxlbVxuICAgICAgICAgICAgICAqcHJpem1MZXQ9XCJpdGVtIHwgcHJpem1DYWxsRnVuYyA6IHN0cmluZ2lmeSA6ICRhbnkobnVsbENvbnRlbnQpIGFzIHRleHRcIlxuICAgICAgICAgICAgICBbcHJpem1IaW50XT1cInRleHRcIlxuICAgICAgICAgICAgICBbcHJpem1IaW50SG9zdF09XCJob3N0SGludFwiXG4gICAgICAgICAgICAgIFtwcml6bUhpbnREaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICAgICAgICAgICAgW3ByaXptSGludENhblNob3ddPVwiJGFueShlbGVtIHwgcHJpem1DYWxsRnVuYyA6IHByaXptSXNUZXh0T3ZlcmZsb3ckIHwgYXN5bmMpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpwb2x5bW9ycGhPdXRsZXQ9XCJcbiAgICAgICAgICAgICAgICAgICRhbnkodmFsdWVUZW1wbGF0ZSkgYXMgY29udGVudDtcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgJGltcGxpY2l0OiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnk6IHRleHRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgdGV4dCB9fVxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbnVsbENvbnRlbnRUZW1wbGF0ZT5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJudWxsQ29udGVudFwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpwb2x5bW9ycGhPdXRsZXQ9XCJudWxsQ29udGVudCBhcyBjb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3sgY29udGVudCB9fVxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctdGVtcGxhdGUgI2VtcHR5VGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eS10ZW1wbGF0ZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKnBvbHltb3JwaE91dGxldD1cImVtcHR5Q29udGVudCBhcyBjb250ZW50XCI+XG4gICAgICAgICAgICB7eyBjb250ZW50IH19XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L3ByaXptLWRhdGEtbGlzdD5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cbiJdfQ==