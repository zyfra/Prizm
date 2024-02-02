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
}
PrizmSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSelectComponent, deps: [{ token: PRIZM_SELECT_OPTIONS }, { token: NgControl, optional: true, self: true }, { token: ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PrizmSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmSelectComponent, isStandalone: true, selector: "prizm-select", inputs: { items: "items", dropdownScroll: "dropdownScroll", searchable: "searchable", forceClear: "forceClear", icon: "icon", label: "label", minDropdownHeight: "minDropdownHeight", maxDropdownHeight: "maxDropdownHeight", placeholder: "placeholder", dropdownWidth: "dropdownWidth", size: "size", search: "search", searchMatcher: "searchMatcher", emptyContent: "emptyContent", nullContent: "nullContent", stringify: "stringify", identityMatcher: "identityMatcher", valueTemplate: "valueTemplate", outer: "outer" }, outputs: { searchChange: "searchChange" }, providers: [
        PrizmDestroyService,
        {
            provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => PrizmSelectComponent),
        },
    ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }, { propertyName: "dropdownHostElement", first: true, predicate: ["dropdownHostRef"], descendants: true }], exportAs: ["prizmDropdownSelect"], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  #dropdownHostRef\n  *prizmLet=\"filteredItems$ | async as items\"\n  [(isOpen)]=\"open\"\n  [content]=\"dropdown\"\n  [prizmDropdownHostWidth]=\"dropdownWidth\"\n  [prizmDropdownMinHeight]=\"minDropdownHeight\"\n  [prizmDropdownMaxHeight]=\"maxDropdownHeight\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [forceClear]=\"forceClear\"\n    [outer]=\"outer\"\n    [size]=\"size\"\n    (click)=\"safeOpenModal()\"\n    (clear)=\"safeStopPropagation(focusableElementRef.value, $event)\"\n  >\n    <input\n      class=\"input-search\"\n      #inputText=\"prizmInput\"\n      #focusableElementRef\n      [placeholder]=\"placeholder\"\n      [disabled]=\"this.disabled\"\n      [readonly]=\"!searchable || this.disabled\"\n      [formControl]=\"requiredInputControl\"\n      (prizmOnInit)=\"inputTextElement = inputText\"\n      (onClear)=\"onClear()\"\n      prizmInput\n    />\n    <ng-container prizm-input-right>\n      <ng-container\n        *polymorphOutlet=\"icon || defaultIcon as iconName; context: { opened: open, disabled: disabled }\"\n      >\n        <prizm-icon\n          *ngIf=\"!disabled\"\n          [class.opened]=\"open\"\n          [class.active]=\"focusableElementRef.focused\"\n          [class.icon-dropdown]=\"iconName === defaultIcon\"\n          [iconClass]=\"$any(iconName)\"\n          (click)=\"focusableElementRef.focus()\"\n        >\n        </prizm-icon>\n      </ng-container>\n    </ng-container>\n  </prizm-input-layout>\n\n  <ng-template #dropdown>\n    <prizm-data-list class=\"block\" [scroll]=\"dropdownScroll\" [style.--prizm-data-list-border]=\"0\">\n      <ng-container *ngIf=\"items?.length; else emptyTemplate\">\n        <div\n          class=\"item\"\n          #hostHint\n          *ngFor=\"let item of filteredItems$ | async; let idx = index\"\n          [class.most-relevant]=\"isMostRelevant(idx, items, focusableElementRef.value)\"\n          [class.selected]=\"\n            item === value || (item && value && (item | prizmCallFunc : identityMatcher : value))\n          \"\n          (click)=\"select(item)\"\n        >\n          <ng-container *ngIf=\"!isNullish(item); else nullContentTemplate\">\n            <span\n              class=\"text\"\n              #elem\n              *prizmLet=\"item | prizmCallFunc : stringify : $any(nullContent) as text\"\n              [prizmHint]=\"text\"\n              [prizmHintHost]=\"hostHint\"\n              [prizmHintDirection]=\"direction\"\n              [prizmHintCanShow]=\"$any(elem | prizmCallFunc : prizmIsTextOverflow$ | async)\"\n            >\n              <ng-container\n                *polymorphOutlet=\"\n                  $any(valueTemplate) as content;\n                  context: {\n                    $implicit: item,\n                    stringify: text\n                  }\n                \"\n              >\n                {{ text }}\n              </ng-container>\n            </span>\n          </ng-container>\n\n          <ng-template #nullContentTemplate>\n            <ng-container *ngIf=\"nullContent\">\n              <ng-container *polymorphOutlet=\"nullContent as content\">\n                {{ content }}\n              </ng-container>\n            </ng-container>\n          </ng-template>\n        </div>\n      </ng-container>\n      <ng-template #emptyTemplate>\n        <div class=\"empty-template\">\n          <ng-container *polymorphOutlet=\"emptyContent as content\">\n            {{ content }}\n          </ng-container>\n        </div>\n      </ng-template>\n    </prizm-data-list>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{position:relative;z-index:0;display:inline-block}.item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.item:empty{display:none}.item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item.selected,.item.most-relevant{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20));color:var(--prizm-text-contrast)}.item:not(.selected):not(.most-relevant):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}.block{background:var(--prizm-select-background, var(--prizm-bg-body));border-radius:2px;border:none;padding:var(--prizm-select-padding, 8px 0)}.input-chips[readonly]{cursor:pointer}.empty-template{padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-empty-text, var(--prizm-text-subscript, #20222b))}.icon-dropdown{color:#777b92;cursor:pointer;transition-property:transform;transition-property:all;transition-property:color,transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out}.icon-dropdown.opened{transform:rotate(180deg)}.icon-dropdown.active{color:#337eff}prizm-icon{color:var(--prizm-text-subscript)}\n"], dependencies: [{ kind: "ngmodule", type: PrizmOverlayModule }, { kind: "ngmodule", type: PolymorphModule }, { kind: "directive", type: i1.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i4.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmChipsModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: PrizmLetModule }, { kind: "directive", type: i6.PrizmLetDirective, selector: "[prizmLet]", inputs: ["prizmLet"], exportAs: ["prizmLet"] }, { kind: "ngmodule", type: PrizmAutoFocusModule }, { kind: "ngmodule", type: PrizmHintModule }, { kind: "directive", type: i7.PrizmHintDirective, selector: "[prizmHint]:not(ng-container)", inputs: ["prizmAutoReposition", "prizmHintDirection", "prizmHintId", "prizmHintTheme", "prizmHintShowDelay", "prizmHintHideDelay", "prizmHintHost", "prizmHintContext", "prizmHintCanShow", "prizmHint"], outputs: ["prizmHintShowed"], exportAs: ["prizmHint"] }, { kind: "ngmodule", type: PrizmIconModule }, { kind: "component", type: i8.PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "ngmodule", type: PrizmCallFuncModule }, { kind: "pipe", type: i6.PrizmCallFuncPipe, name: "prizmCallFunc" }, { kind: "ngmodule", type: PrizmScrollbarModule }, { kind: "ngmodule", type: PrizmDropdownControllerModule }, { kind: "directive", type: i9.PrizmDropdownControllerDirective, selector: "[prizmDropdownMinHeight], [prizmDropdownMaxHeight], [prizmDropdownAlign], [prizmDropdownLimitWidth]", inputs: ["prizmDropdownMinHeight", "prizmDropdownAlign", "prizmDropdownLimitWidth", "prizmDropdownMaxHeight"] }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i10.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmDataListModule }, { kind: "component", type: i11.PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "ngmodule", type: PrizmDropdownHostModule }, { kind: "component", type: i12.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSelectComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd25zL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bnMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEVBQ0osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsY0FBYyxHQUNmLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRyxPQUFPLEVBRUwsZUFBZSxFQUNmLG9CQUFvQixFQUNwQiw2QkFBNkIsRUFDN0IsZUFBZSxFQUNmLG9CQUFvQixHQUNyQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxvQkFBb0IsRUFBK0MsTUFBTSxrQkFBa0IsQ0FBQztBQUVyRyxPQUFPLEVBQTJDLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztB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TUFBTTtzQkFGTCxLQUFLO2dCQU1OLGFBQWE7c0JBRlosS0FBSztnQkFNTixZQUFZO3NCQUZYLEtBQUs7Z0JBTU4sV0FBVztzQkFGVixLQUFLO2dCQWFOLFNBQVM7c0JBRlIsS0FBSztnQkFNTixlQUFlO3NCQUZkLEtBQUs7Z0JBTU4sYUFBYTtzQkFGWixLQUFLO2dCQU1OLEtBQUs7c0JBRkosS0FBSztnQkFPVSxZQUFZO3NCQUQzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2VsZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbXBhcmUsXG4gIFByaXptQ2FsbEZ1bmNNb2R1bGUsXG4gIFByaXptRGVzdHJveVNlcnZpY2UsXG4gIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLFxuICBQcml6bUxldE1vZHVsZSxcbn0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIE5nQ29udHJvbCwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVW50eXBlZEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgUG9seW1vcnBoQ29udGVudCxcbiAgUG9seW1vcnBoTW9kdWxlLFxuICBQcml6bUF1dG9Gb2N1c01vZHVsZSxcbiAgUHJpem1Ecm9wZG93bkNvbnRyb2xsZXJNb2R1bGUsXG4gIFByaXptSGludE1vZHVsZSxcbiAgUHJpem1MaWZlY3ljbGVNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUFJJWk1fU0VMRUNUX09QVElPTlMsIFByaXptU2VsZWN0T3B0aW9ucywgUHJpem1TZWxlY3RWYWx1ZUNvbnRleHQgfSBmcm9tICcuL3NlbGVjdC5vcHRpb25zJztcbmltcG9ydCB7IFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yLCBQcml6bU5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBQcml6bUlucHV0U2l6ZSwgUHJpem1JbnB1dFRleHRDb21wb25lbnQsIFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vLi4vaW5wdXQnO1xuaW1wb3J0IHsgQWJzdHJhY3RQcml6bUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9jb250cm9sJztcbmltcG9ydCB7IHByaXptSXNOYXRpdmVGb2N1c2VkLCBwcml6bUlzVGV4dE92ZXJmbG93JCB9IGZyb20gJy4uLy4uLy4uL3V0aWwnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgbWFwLFxuICBzdGFydFdpdGgsXG4gIHN3aXRjaE1hcCxcbiAgdGFrZVVudGlsLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29uY2F0LCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1TZWxlY3RJZGVudGl0eU1hdGNoZXIsIFByaXptU2VsZWN0U2VhcmNoTWF0Y2hlciB9IGZyb20gJy4vc2VsZWN0Lm1vZGVsJztcbmltcG9ydCB7IFBSSVpNX0ZPQ1VTQUJMRV9JVEVNX0FDQ0VTU09SIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCwgUHJpem1Ecm9wZG93bkhvc3RNb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi1ob3N0JztcbmltcG9ydCB7IFByaXptT3ZlcmxheU1vZHVsZSwgUHJpem1PdmVybGF5T3V0c2lkZVBsYWNlbWVudCB9IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvb3ZlcmxheSc7XG5pbXBvcnQgeyBQcml6bVNjcm9sbGJhck1vZHVsZSwgUHJpem1TY3JvbGxiYXJWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vc2Nyb2xsYmFyJztcbmltcG9ydCB7IFByaXptQ2hpcHNNb2R1bGUgfSBmcm9tICcuLi8uLi9jaGlwcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1JY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vaWNvbic7XG5pbXBvcnQgeyBQcml6bURhdGFMaXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vZGF0YS1saXN0JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIG9ubHkgUHJpem1TZWxlY3RJbnB1dENvbXBvbmVudFxuICogd2lsbCBiZSByZW1vdmVkIGFmdGVyIG5nIDE1IHVwZGF0ZVxuICogZm9yIGF1dG8gdXBkYXRlIHVzZSBvdXIgbWlncmF0b3IgaHR0cHM6Ly9wcml6bS5zaXRlL2ZvclpJSW9UL3VwZGF0ZS1mcm9tLWJldGFcbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBSSVpNX0ZPQ1VTQUJMRV9JVEVNX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1TZWxlY3RDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBQcml6bU92ZXJsYXlNb2R1bGUsXG4gICAgUG9seW1vcnBoTW9kdWxlLFxuICAgIFByaXptSW5wdXRUZXh0TW9kdWxlLFxuICAgIFByaXptQ2hpcHNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1MZXRNb2R1bGUsXG4gICAgUHJpem1BdXRvRm9jdXNNb2R1bGUsXG4gICAgUHJpem1IaW50TW9kdWxlLFxuICAgIFByaXptSWNvbk1vZHVsZSxcbiAgICBQcml6bUNhbGxGdW5jTW9kdWxlLFxuICAgIFByaXptU2Nyb2xsYmFyTW9kdWxlLFxuICAgIFByaXptRHJvcGRvd25Db250cm9sbGVyTW9kdWxlLFxuICAgIFByaXptTGlmZWN5Y2xlTW9kdWxlLFxuICAgIFByaXptRGF0YUxpc3RNb2R1bGUsXG4gICAgUHJpem1Ecm9wZG93bkhvc3RNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydEFzOiAncHJpem1Ecm9wZG93blNlbGVjdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU2VsZWN0Q29tcG9uZW50PFQ+XG4gIGV4dGVuZHMgQWJzdHJhY3RQcml6bUNvbnRyb2w8VD5cbiAgaW1wbGVtZW50cyBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3Nvclxue1xuICBAVmlld0NoaWxkKCdmb2N1c2FibGVFbGVtZW50UmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHB1YmxpYyByZWFkb25seSBmb2N1c2FibGVFbGVtZW50PzogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBAVmlld0NoaWxkKCdkcm9wZG93bkhvc3RSZWYnKVxuICBwdWJsaWMgcmVhZG9ubHkgZHJvcGRvd25Ib3N0RWxlbWVudD86IFByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIHNldCBpdGVtcyhkYXRhOiBUW10pIHtcbiAgICB0aGlzLml0ZW1zJC5uZXh0KGRhdGEgYXMgYW55KTtcbiAgfVxuICBnZXQgaXRlbXMoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcyQudmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRyb3Bkb3duU2Nyb2xsOiBQcml6bVNjcm9sbGJhclZpc2liaWxpdHkgPSAnYXV0byc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzZWFyY2hhYmxlID0gdGhpcy5vcHRpb25zLnNlYXJjaGFibGU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBmb3JjZUNsZWFyID0gdGhpcy5vcHRpb25zLmZvcmNlQ2xlYXI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpY29uID0gdGhpcy5vcHRpb25zLmljb247XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBsYWJlbCA9IHRoaXMub3B0aW9ucy5sYWJlbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbkRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5vcHRpb25zLm1pbkRyb3Bkb3duSGVpZ2h0O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4RHJvcGRvd25IZWlnaHQgPSB0aGlzLm9wdGlvbnMubWF4RHJvcGRvd25IZWlnaHQ7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwbGFjZWhvbGRlciA9IHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRyb3Bkb3duV2lkdGggPSB0aGlzLm9wdGlvbnMuZHJvcGRvd25XaWR0aDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNpemU6IFByaXptSW5wdXRTaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzZWFyY2g6IHN0cmluZyB8IG51bGwgPSB0aGlzLm9wdGlvbnMuc2VhcmNoO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2VhcmNoTWF0Y2hlcjogUHJpem1TZWxlY3RTZWFyY2hNYXRjaGVyPFQ+ID0gdGhpcy5vcHRpb25zLnNlYXJjaE1hdGNoZXI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBlbXB0eUNvbnRlbnQ6IFBvbHltb3JwaENvbnRlbnQgPSB0aGlzLm9wdGlvbnMuZW1wdHlDb250ZW50O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbnVsbENvbnRlbnQ6IFBvbHltb3JwaENvbnRlbnQgPSB0aGlzLm9wdGlvbnMubnVsbENvbnRlbnQ7XG5cbiAgcmVhZG9ubHkgcHJpem1Jc1RleHRPdmVyZmxvdyQgPSBwcml6bUlzVGV4dE92ZXJmbG93JDtcblxuICBwcml2YXRlIHJlYWRvbmx5IHN0b3AkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgLyoqXG4gICAqIG5lZWQgb25seSBjbGVhciBmdW5jdGlvblxuICAgKiAqL1xuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHN0cmluZ2lmeTogKGk6IFQsIGNvbnRlbnQ/OiBzdHJpbmcpID0+IGFueSA9IHRoaXMub3B0aW9ucy5zdHJpbmdpZnkgYXMgYW55O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaWRlbnRpdHlNYXRjaGVyOiBQcml6bVNlbGVjdElkZW50aXR5TWF0Y2hlcjxUPiA9IHRoaXMub3B0aW9ucy5pZGVudGl0eU1hdGNoZXI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICB2YWx1ZVRlbXBsYXRlOiBQb2x5bW9ycGhDb250ZW50PFByaXptU2VsZWN0VmFsdWVDb250ZXh0PFQ+PiA9IHRoaXMub3B0aW9ucy52YWx1ZUNvbnRlbnQ7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdXRlcjogYm9vbGVhbiA9IHRoaXMub3B0aW9ucy5vdXRlcjtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX3NlbGVjdCc7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByZWFkb25seSBzZWFyY2hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bGw+KCk7XG5cbiAgcHVibGljIGlucHV0VGV4dEVsZW1lbnQhOiBQcml6bUlucHV0VGV4dENvbXBvbmVudCB8IG51bGw7XG4gIHB1YmxpYyBvcGVuID0gZmFsc2U7XG4gIHB1YmxpYyByZWFkb25seSBkaXJlY3Rpb246IFByaXptT3ZlcmxheU91dHNpZGVQbGFjZW1lbnQgPSBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50LlJJR0hUO1xuICBwdWJsaWMgcmVhZG9ubHkgaXRlbXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHB1YmxpYyByZWFkb25seSByZXF1aXJlZElucHV0Q29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHJlYWRvbmx5IGRlZmF1bHRJY29uID0gJ2NoZXZyb25zLWRyb3Bkb3duJztcblxuICByZWFkb25seSBmaWx0ZXJlZEl0ZW1zJCA9IHRoaXMucmVxdWlyZWRJbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgdGFwKHZhbHVlID0+IHRoaXMuc2VhcmNoRW1pdCh2YWx1ZSkpLFxuICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgc3dpdGNoTWFwKHZhbHVlID0+IHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zJC5waXBlKFxuICAgICAgICBtYXAoaXRlbXMgPT4ge1xuICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hhYmxlIHx8ICF2YWx1ZT8udG9TdHJpbmcoKS5yZXBsYWNlKC9bIF0rL2csICcnKSkgcmV0dXJuIGl0ZW1zO1xuICAgICAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gKHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnRyaW0oKSk7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1zPy5maWx0ZXIoaXRlbSA9PiB0aGlzLnNlYXJjaE1hdGNoZXIoc2VhcmNoVmFsdWUsIGl0ZW0pKSA/PyBbXTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcChpdGVtcyA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMubnVsbENvbnRlbnQgJiYgaXRlbXM/Lmxlbmd0aCAmJiBpdGVtc1swXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaXRlbXMgPSBbbnVsbCwgLi4uaXRlbXNdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH0pLFxuICAgICAgICB0YXAoaXRlbXMgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGl0ZW1zO1xuICAgICAgICAgIHRoaXMuZHJvcGRvd25Ib3N0RWxlbWVudD8ucmVDYWxjdWxhdGVQb3NpdGlvbnMoMTAwMCAvIDYwKTtcbiAgICAgICAgfSksXG4gICAgICAgIGRlYm91bmNlVGltZSgwKVxuICAgICAgICAvLyB0YXAoKCkgPT4gdGhpcy5zYWZlT3Blbk1vZGFsKCkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgcHVibGljIGZpbHRlcmVkSXRlbXM6IFRbXSA9IFtdO1xuICBwcml2YXRlIHNlYXJjaFZhbHVlITogc3RyaW5nO1xuICByZWFkb25seSBpc051bGxpc2ggPSBDb21wYXJlLmlzTnVsbGlzaDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBSSVpNX1NFTEVDVF9PUFRJT05TKSBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IFByaXptU2VsZWN0T3B0aW9uczxUPixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTZWxmKClcbiAgICBASW5qZWN0KE5nQ29udHJvbClcbiAgICBjb250cm9sOiBOZ0NvbnRyb2wgfCBudWxsLFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcihjb250cm9sLCBjaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdENvbnRyb2xTdGF0dXNDaGFuZ2VySWZFeGlzdCgpO1xuICAgIHRoaXMuaW5pdENvbnRyb2xWYWx1ZUNoYW5nZXJJZkV4aXN0KCk7XG4gICAgdGhpcy5pbml0Q29udHJvbFZhbGlkYXRvcnNJZkV4aXN0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRDb250cm9sVmFsaWRhdG9yc0lmRXhpc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbClcbiAgICAgIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNBbGxWYWxpZGF0b3JzKFxuICAgICAgICB0aGlzLmNvbnRyb2wgYXMgVW50eXBlZEZvcm1Db250cm9sLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgdGhpcy5yZXF1aXJlZElucHV0Q29udHJvbFxuICAgICAgKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENvbnRyb2xTdGF0dXNDaGFuZ2VySWZFeGlzdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sKVxuICAgICAgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuc3luY1ZhbGlkYXRvcnMoXG4gICAgICAgIHRoaXMuY29udHJvbCBhcyBVbnR5cGVkRm9ybUNvbnRyb2wsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICB0aGlzLnJlcXVpcmVkSW5wdXRDb250cm9sXG4gICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIC8vIGRlYm91bmNlVGltZSgwKSxcbiAgICAgICAgICAvLyB0YXAoKCkgPT4gdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCkpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENvbnRyb2xWYWx1ZUNoYW5nZXJJZkV4aXN0KCk6IHZvaWQge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBjb25jYXQodGltZXIoMCkucGlwZShtYXAoKCkgPT4gdGhpcy5jb250cm9sPy52YWx1ZSkpLCB0aGlzLmludGVybmFsVmFsdWUkLnBpcGUoZGVib3VuY2VUaW1lKDApKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB0YXAodmFsdWUgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLml0ZW1zJC52YWx1ZT8uZmluZChpID0+IHZhbHVlICYmIGkgJiYgdGhpcy5pZGVudGl0eU1hdGNoZXIodmFsdWUsIGkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZWxlY3QodmFsdWUpO1xuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgIGlmIChjb3VudGVyID09PSAwKSB0aGlzLmNvbnRyb2w/Lm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXQgbmF0aXZlRm9jdXNhYmxlRWxlbWVudCgpOiBQcml6bU5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50ID8gdGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByaXptSXNOYXRpdmVGb2N1c2VkKHRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgb25DbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdChudWxsIGFzIGFueSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RmFsbGJhY2tWYWx1ZSgpOiBUIHtcbiAgICByZXR1cm4gbnVsbCBhcyBhbnk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0KGl0ZW06IFQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaWRlbnRpdHlNYXRjaGVyKGl0ZW0sIHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLnJlcXVpcmVkSW5wdXRDb250cm9sLnNldFZhbHVlKGl0ZW0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgLy8gVE9ETyByZW1vdmUgYWZ0ZXIgYWRkIHVwZGF0ZSBpbnB1dHNcbiAgICBpZiAodGhpcy5pbnB1dFRleHRFbGVtZW50KSB0aGlzLmlucHV0VGV4dEVsZW1lbnQubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHNhZmVPcGVuTW9kYWwoKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50O1xuICAgIC8vIGlmICh0aGlzLnN0b3AkLnZhbHVlKSByZXR1cm5cbiAgICBjb25zdCBvcGVuID0gIXRoaXMub3BlbiAmJiB0aGlzLmludGVyYWN0aXZlICYmIGlucHV0RWxlbWVudCAmJiBwcml6bUlzTmF0aXZlRm9jdXNlZChpbnB1dEVsZW1lbnQpO1xuICAgIHRoaXMub3BlbiA9ICEhb3BlbjtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gVE9ETyByZW1vdmUgYWZ0ZXIgZmluaXNoIGFjdGl2ZXpvbmUgdG8gZHJvcGRvd24gY29tcG9uZW50XG4gIHB1YmxpYyBzYWZlU3RvcFByb3BhZ2F0aW9uKHZhbHVlOiBzdHJpbmcsICRldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIGlmICghdmFsdWUpICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBpc01vc3RSZWxldmFudChpZHg6IG51bWJlciwgaXRlbXM6IFRbXSwgd3JvdGVJbnB1dFZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBpdElzTm90Q3VycmVudFZhbHVlID0gd3JvdGVJbnB1dFZhbHVlICYmICF0aGlzLmlkZW50aXR5TWF0Y2hlcih3cm90ZUlucHV0VmFsdWUgYXMgVCwgdGhpcy52YWx1ZSk7XG4gICAgY29uc3QgaXNDYW5TZWFyY2ggPSB0aGlzLnNlYXJjaGFibGU7XG4gICAgY29uc3QgaGFzTnVsbFZhbHVlID0gaXRlbXNbMF0gPT09IG51bGw7XG4gICAgY29uc3QgcmVzdWx0ID1cbiAgICAgIGlzQ2FuU2VhcmNoICYmIGl0SXNOb3RDdXJyZW50VmFsdWUgJiYgKChoYXNOdWxsVmFsdWUgJiYgaWR4ID09PSAxKSB8fCAoIWhhc051bGxWYWx1ZSAmJiBpZHggPT09IDApKTtcblxuICAgIHJldHVybiAhIXJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgc2VhcmNoRW1pdCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VhcmNoID09PSB2YWx1ZSkgcmV0dXJuO1xuICAgIHRoaXMuc2VhcmNoID0gdmFsdWU7XG4gICAgdGhpcy5zZWFyY2hDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiIsIjxwcml6bS1kcm9wZG93bi1ob3N0XG4gICNkcm9wZG93bkhvc3RSZWZcbiAgKnByaXptTGV0PVwiZmlsdGVyZWRJdGVtcyQgfCBhc3luYyBhcyBpdGVtc1wiXG4gIFsoaXNPcGVuKV09XCJvcGVuXCJcbiAgW2NvbnRlbnRdPVwiZHJvcGRvd25cIlxuICBbcHJpem1Ecm9wZG93bkhvc3RXaWR0aF09XCJkcm9wZG93bldpZHRoXCJcbiAgW3ByaXptRHJvcGRvd25NaW5IZWlnaHRdPVwibWluRHJvcGRvd25IZWlnaHRcIlxuICBbcHJpem1Ecm9wZG93bk1heEhlaWdodF09XCJtYXhEcm9wZG93bkhlaWdodFwiXG4+XG4gIDxwcml6bS1pbnB1dC1sYXlvdXRcbiAgICBbbGFiZWxdPVwibGFiZWxcIlxuICAgIFtmb3JjZUNsZWFyXT1cImZvcmNlQ2xlYXJcIlxuICAgIFtvdXRlcl09XCJvdXRlclwiXG4gICAgW3NpemVdPVwic2l6ZVwiXG4gICAgKGNsaWNrKT1cInNhZmVPcGVuTW9kYWwoKVwiXG4gICAgKGNsZWFyKT1cInNhZmVTdG9wUHJvcGFnYXRpb24oZm9jdXNhYmxlRWxlbWVudFJlZi52YWx1ZSwgJGV2ZW50KVwiXG4gID5cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzPVwiaW5wdXQtc2VhcmNoXCJcbiAgICAgICNpbnB1dFRleHQ9XCJwcml6bUlucHV0XCJcbiAgICAgICNmb2N1c2FibGVFbGVtZW50UmVmXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgW2Rpc2FibGVkXT1cInRoaXMuZGlzYWJsZWRcIlxuICAgICAgW3JlYWRvbmx5XT1cIiFzZWFyY2hhYmxlIHx8IHRoaXMuZGlzYWJsZWRcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cInJlcXVpcmVkSW5wdXRDb250cm9sXCJcbiAgICAgIChwcml6bU9uSW5pdCk9XCJpbnB1dFRleHRFbGVtZW50ID0gaW5wdXRUZXh0XCJcbiAgICAgIChvbkNsZWFyKT1cIm9uQ2xlYXIoKVwiXG4gICAgICBwcml6bUlucHV0XG4gICAgLz5cbiAgICA8bmctY29udGFpbmVyIHByaXptLWlucHV0LXJpZ2h0PlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAqcG9seW1vcnBoT3V0bGV0PVwiaWNvbiB8fCBkZWZhdWx0SWNvbiBhcyBpY29uTmFtZTsgY29udGV4dDogeyBvcGVuZWQ6IG9wZW4sIGRpc2FibGVkOiBkaXNhYmxlZCB9XCJcbiAgICAgID5cbiAgICAgICAgPHByaXptLWljb25cbiAgICAgICAgICAqbmdJZj1cIiFkaXNhYmxlZFwiXG4gICAgICAgICAgW2NsYXNzLm9wZW5lZF09XCJvcGVuXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXNlZFwiXG4gICAgICAgICAgW2NsYXNzLmljb24tZHJvcGRvd25dPVwiaWNvbk5hbWUgPT09IGRlZmF1bHRJY29uXCJcbiAgICAgICAgICBbaWNvbkNsYXNzXT1cIiRhbnkoaWNvbk5hbWUpXCJcbiAgICAgICAgICAoY2xpY2spPVwiZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1cygpXCJcbiAgICAgICAgPlxuICAgICAgICA8L3ByaXptLWljb24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG5cbiAgPG5nLXRlbXBsYXRlICNkcm9wZG93bj5cbiAgICA8cHJpem0tZGF0YS1saXN0IGNsYXNzPVwiYmxvY2tcIiBbc2Nyb2xsXT1cImRyb3Bkb3duU2Nyb2xsXCIgW3N0eWxlLi0tcHJpem0tZGF0YS1saXN0LWJvcmRlcl09XCIwXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbXM/Lmxlbmd0aDsgZWxzZSBlbXB0eVRlbXBsYXRlXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIml0ZW1cIlxuICAgICAgICAgICNob3N0SGludFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpbHRlcmVkSXRlbXMkIHwgYXN5bmM7IGxldCBpZHggPSBpbmRleFwiXG4gICAgICAgICAgW2NsYXNzLm1vc3QtcmVsZXZhbnRdPVwiaXNNb3N0UmVsZXZhbnQoaWR4LCBpdGVtcywgZm9jdXNhYmxlRWxlbWVudFJlZi52YWx1ZSlcIlxuICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJcbiAgICAgICAgICAgIGl0ZW0gPT09IHZhbHVlIHx8IChpdGVtICYmIHZhbHVlICYmIChpdGVtIHwgcHJpem1DYWxsRnVuYyA6IGlkZW50aXR5TWF0Y2hlciA6IHZhbHVlKSlcbiAgICAgICAgICBcIlxuICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoaXRlbSlcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc051bGxpc2goaXRlbSk7IGVsc2UgbnVsbENvbnRlbnRUZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgI2VsZW1cbiAgICAgICAgICAgICAgKnByaXptTGV0PVwiaXRlbSB8IHByaXptQ2FsbEZ1bmMgOiBzdHJpbmdpZnkgOiAkYW55KG51bGxDb250ZW50KSBhcyB0ZXh0XCJcbiAgICAgICAgICAgICAgW3ByaXptSGludF09XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgW3ByaXptSGludEhvc3RdPVwiaG9zdEhpbnRcIlxuICAgICAgICAgICAgICBbcHJpem1IaW50RGlyZWN0aW9uXT1cImRpcmVjdGlvblwiXG4gICAgICAgICAgICAgIFtwcml6bUhpbnRDYW5TaG93XT1cIiRhbnkoZWxlbSB8IHByaXptQ2FsbEZ1bmMgOiBwcml6bUlzVGV4dE92ZXJmbG93JCB8IGFzeW5jKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqcG9seW1vcnBoT3V0bGV0PVwiXG4gICAgICAgICAgICAgICAgICAkYW55KHZhbHVlVGVtcGxhdGUpIGFzIGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICRpbXBsaWNpdDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5OiB0ZXh0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IHRleHQgfX1cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI251bGxDb250ZW50VGVtcGxhdGU+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnVsbENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwibnVsbENvbnRlbnQgYXMgY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHt7IGNvbnRlbnQgfX1cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLXRlbXBsYXRlICNlbXB0eVRlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1wdHktdGVtcGxhdGVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpwb2x5bW9ycGhPdXRsZXQ9XCJlbXB0eUNvbnRlbnQgYXMgY29udGVudFwiPlxuICAgICAgICAgICAge3sgY29udGVudCB9fVxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9wcml6bS1kYXRhLWxpc3Q+XG4gIDwvbmctdGVtcGxhdGU+XG48L3ByaXptLWRyb3Bkb3duLWhvc3Q+XG4iXX0=