import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Inject, Input, Optional, Self, ViewChild, } from '@angular/core';
import { PrizmCallFuncModule, PrizmDestroyService, PrizmFormControlHelpers, PrizmLetModule, } from '@prizm-ui/helpers';
import { FormsModule, NgControl, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { PolymorphModule, PrizmAutoFocusModule, PrizmDropdownControllerModule, PrizmHintModule, PrizmLifecycleModule, } from '../../../directives';
import { PRIZM_MULTI_SELECT_OPTIONS } from './multi-select.options';
import { PrizmInputTextModule } from '../../input';
import { AbstractPrizmControl } from '../../../abstract/control';
import { prizmIsNativeFocused, prizmIsTextOverflow$ } from '../../../util';
import { debounceTime, map, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDropdownHostComponent, PrizmDropdownHostModule } from '../dropdown-host';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay/models';
import { PrizmScrollbarModule } from '../../scrollbar';
import { PrizmOverlayModule } from '../../../modules';
import { PrizmChipsModule } from '../../chips';
import { CommonModule } from '@angular/common';
import { PrizmIconModule } from '../../icon';
import { PrizmDataListModule } from '../../data-list';
import { PrizmCheckboxModule } from '../../checkbox';
import * as i0 from "@angular/core";
import * as i1 from "../../../directives/polymorph/directives/outlet";
import * as i2 from "@angular/common";
import * as i3 from "../../input/common/input-layout/input-layout.component";
import * as i4 from "../../input/common/input-icon-button/input-icon-button.component";
import * as i5 from "../../input/input-text/input-text.component";
import * as i6 from "../../chips/chips.component";
import * as i7 from "@angular/forms";
import * as i8 from "@prizm-ui/helpers";
import * as i9 from "../../../directives/hint/hint.directive";
import * as i10 from "../../icon/icon.component";
import * as i11 from "../../../directives/auto-focus/autofocus.directive";
import * as i12 from "../../../directives/dropdown-controller/dropdown-controller.directive";
import * as i13 from "../../data-list/data-list.component";
import * as i14 from "../../checkbox/checkbox.component";
import * as i15 from "../../../directives/lifecycle/lifecycle.directive";
import * as i16 from "../dropdown-host/dropdown-host.component";
/**
 * @deprecated
 * use only PrizmMultiSelectInputComponent
 * will be removed after ng 15 update
 * for auto update use our migrator https://prizm.site/forZIIoT/update-from-beta
 * */
export class PrizmMultiSelectComponent extends AbstractPrizmControl {
    set items(data) {
        this.items$.next(data ?? []);
    }
    get items() {
        return this.items$.value;
    }
    constructor(options, control, cdRef, changeDetectorRef) {
        super(control, changeDetectorRef);
        this.options = options;
        this.cdRef = cdRef;
        this.dropdownScroll = 'auto';
        this.icon = this.options.icon;
        this.selectAllItem = this.options.chooseAllItem;
        this.searchable = this.options.searchable;
        this.forceClear = this.options.forceClear;
        this.isChipsDeletable = this.options.isChipsDeletable;
        this.label = this.options.label;
        this.minDropdownHeight = this.options.minDropdownHeight;
        this.dropdownWidth = this.options.dropdownWidth;
        this.maxDropdownHeight = this.options.maxDropdownHeight;
        this.placeholder = this.options.placeholder;
        this.size = this.options.size;
        this.searchMatcher = this.options.searchMatcher;
        this.emptyContent = this.options.emptyContent;
        /** need only clear function */
        this.stringify = this.options.stringify;
        this.identityMatcher = this.options.identityMatcher;
        this.valueTemplate = this.options.valueContent;
        this.outer = this.options.outer;
        this.testId_ = 'ui-muilti-select';
        this.defaultIcon = 'chevrons-dropdown';
        this.prizmIsTextOverflow$ = prizmIsTextOverflow$;
        this.direction = PrizmOverlayOutsidePlacement.RIGHT;
        this.open = false;
        this.items$ = new BehaviorSubject([]);
        this.requiredInputControl = new UntypedFormControl();
        this.searchInputControl = new UntypedFormControl();
        this.chipsControl = new UntypedFormControl([]);
        this.filteredItems$ = this.controlReady$.pipe(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        switchMap(() => combineLatest([
            this.searchInputControl.valueChanges.pipe(startWith('')),
            this.internalValue$.pipe(debounceTime(0), startWith(this.value)),
        ])), switchMap(([searchValue, selectedItems]) => {
            return this.items$.pipe(map(items => {
                if (!this.searchable || !searchValue?.toString().replace(/[ ]+/g, ''))
                    return items;
                searchValue = this.searchValue = searchValue.toString().trim();
                return items?.filter(item => this.searchMatcher(searchValue, item)) ?? [];
            }), map((items) => {
                const selectItems = items.map((item) => {
                    return {
                        checked: !!selectedItems?.find(selected => this.identityMatcher(selected, item)),
                        obj: item,
                    };
                });
                const selectedCount = this.value?.length;
                const allItem = this.items$.value?.length;
                const currentlySearching = this.searchInputControl.value;
                const addSelectAllItem = this.selectAllItem && !currentlySearching;
                return [
                    ...(addSelectAllItem ? [this.selectAllItem] : []).map(item => ({
                        checked: allItem === selectedCount,
                        indeterminate: selectedCount && allItem !== this.value.length,
                        obj: item,
                    })),
                    ...selectItems,
                ];
            }), tap(items => {
                this.filteredItems = items;
                this.dropdownHostElement?.reCalculatePositions(1000 / 60);
            }), debounceTime(0));
        }));
        this.selectedItems$ = this.internalValue$
            .pipe(debounceTime(0), startWith(this.value))
            .pipe(switchMap(() => {
            const selectedItems = this.value;
            return this.items$.pipe(map(items => {
                return (items?.filter(item => (selectedItems ?? []).find(selectedItem => this.identityMatcher(selectedItem, item))) ?? []);
            }));
        }), shareReplay(1));
        this.chipsSet = new Map();
        this.selectedItemsChips$ = this.selectedItems$.pipe(map((selectedItems) => {
            this.chipsSet.clear();
            const result = selectedItems?.map(i => {
                const str = this.stringify({
                    checked: true,
                    obj: i,
                });
                this.chipsSet.set(str, i);
                return str;
            }) ?? [];
            return result;
        }), shareReplay(1));
        this.filteredItems = [];
    }
    ngOnInit() {
        super.ngOnInit();
        this.initControlStatusChangerIfExist();
        this.initControlValueChangerIfExist();
        this.initControlValidatorsIfExist();
        this.selectedItems$
            .pipe(tap(items => {
            this.chipsControl.setValue(items, { emitEvent: true });
            // TODO remove after add update inputs
            if (this.inputTextElement)
                this.inputTextElement.markAsTouched();
        }), tap(() => this.cdRef.markForCheck()), takeUntil(this.destroy$))
            .subscribe();
    }
    initControlStatusChangerIfExist() {
        if (this.control instanceof UntypedFormControl)
            PrizmFormControlHelpers.syncStates(this.control, false, this.requiredInputControl)
                .pipe(takeUntil(this.destroy$))
                .subscribe();
    }
    initControlValueChangerIfExist() {
        if (this.control instanceof UntypedFormControl)
            PrizmFormControlHelpers.syncValues(this.control, i => i?.length, null, this.requiredInputControl)
                .pipe(takeUntil(this.destroy$))
                .subscribe();
    }
    initControlValidatorsIfExist() {
        if (this.control instanceof UntypedFormControl)
            PrizmFormControlHelpers.syncAllValidators(this.control, false, this.requiredInputControl)
                .pipe(takeUntil(this.destroy$))
                .subscribe();
    }
    get nativeFocusableElement() {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }
    get focused() {
        return prizmIsNativeFocused(this.nativeFocusableElement);
    }
    onClear() {
        this.control?.setValue(null);
    }
    getFallbackValue() {
        return [];
    }
    isSelectAllItem(item) {
        return Boolean(this.selectAllItem && this.identityMatcher(this.selectAllItem, item.obj));
    }
    select(item) {
        const newItemState = !item.checked;
        let values;
        if (this.isSelectAllItem(item)) {
            values = newItemState ? [...this.items] : [];
        }
        else {
            values = newItemState
                ? [...(this.value ?? []), item.obj]
                : this.value.filter(i => !this.identityMatcher(i, item.obj));
        }
        this.updateValue(values);
        this.dropdownHostElement?.reCalculatePositions();
    }
    safeOpenModal() {
        const inputElement = this.focusableElement?.nativeElement;
        this.searchInputControl.setValue('');
        this.open =
            !this.open &&
                this.interactive &&
                !!inputElement; /*&& (this.outer || prizmIsNativeFocused(inputElement));*/
        this.changeDetectorRef.markForCheck();
    }
    // TODO remove after finish activezone to dropdown component
    safeStopPropagation(value, $event) {
        this.open = false;
        this.cdRef.markForCheck();
        if (!value)
            $event.stopImmediatePropagation();
    }
    removeChip(str) {
        const item = this.chipsSet.get(str);
        this.select({
            checked: true,
            obj: item,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmMultiSelectComponent, deps: [{ token: PRIZM_MULTI_SELECT_OPTIONS }, { token: NgControl, optional: true, self: true }, { token: i0.ChangeDetectorRef }, { token: ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmMultiSelectComponent, isStandalone: true, selector: "prizm-multi-select", inputs: { items: "items", dropdownScroll: "dropdownScroll", icon: "icon", selectAllItem: "selectAllItem", searchable: "searchable", forceClear: "forceClear", isChipsDeletable: "isChipsDeletable", label: "label", minDropdownHeight: "minDropdownHeight", dropdownWidth: "dropdownWidth", maxDropdownHeight: "maxDropdownHeight", placeholder: "placeholder", size: "size", searchMatcher: "searchMatcher", emptyContent: "emptyContent", stringify: "stringify", identityMatcher: "identityMatcher", valueTemplate: "valueTemplate", outer: "outer" }, providers: [
            PrizmDestroyService,
            {
                provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
                useExisting: forwardRef(() => PrizmMultiSelectComponent),
            },
        ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }, { propertyName: "dropdownHostElement", first: true, predicate: ["dropdownHostRef"], descendants: true }], exportAs: ["prizmDropdownSelect"], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  #dropdownHostRef\n  *prizmLet=\"{ selectedItems: selectedItems$ | async, filteredItems: filteredItems$ | async } as $\"\n  [(isOpen)]=\"open\"\n  [content]=\"dropdown\"\n  [prizmDropdownHostWidth]=\"dropdownWidth\"\n  [prizmDropdownMinHeight]=\"minDropdownHeight\"\n  [prizmDropdownMaxHeight]=\"maxDropdownHeight\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [forceClear]=\"(forceClear || forceClear === null) && $.selectedItems.length > 0\"\n    [outer]=\"outer\"\n    [size]=\"size\"\n    [ngSwitch]=\"outer\"\n    (clear)=\"focusableElementRef.focus(); safeStopPropagation(focusableElementRef.value, $event)\"\n    (click)=\"safeOpenModal()\"\n  >\n    <input\n      #focusableElementRef\n      #inputText=\"prizmInput\"\n      [style.display]=\"outer ? 'none' : ''\"\n      [style.visibility]=\"outer ? 'none' : 'hidden'\"\n      [hidden]=\"true\"\n      [disabled]=\"disabled\"\n      [readonly]=\"true\"\n      [placeholder]=\"placeholder\"\n      [formControl]=\"requiredInputControl\"\n      (prizmOnInit)=\"inputTextElement = inputText\"\n      (onClear)=\"onClear()\"\n      prizmInput\n    />\n    <div class=\"in-body-chips-box\" *ngSwitchCase=\"true\" prizm-input-in-body>\n      <ng-container [ngTemplateOutlet]=\"chipsTemplate\"></ng-container>\n    </div>\n\n    <ng-container *ngSwitchCase=\"false\" prizm-input-bottom>\n      <ng-container [ngTemplateOutlet]=\"chipsTemplate\"></ng-container>\n    </ng-container>\n\n    <ng-template #chipsTemplate>\n      <ng-container *ngIf=\"selectedItemsChips$ | async as chips\">\n        <prizm-chips\n          #chipsComponent\n          *ngIf=\"chips.length\"\n          [class.inner]=\"!outer\"\n          [singleLine]=\"true\"\n          [deletable]=\"!disabled && isChipsDeletable\"\n          [chips]=\"chips\"\n          (removeChipEvent)=\"removeChip($event)\"\n        ></prizm-chips>\n      </ng-container>\n    </ng-template>\n\n    <ng-container prizm-input-right>\n      <ng-container\n        *polymorphOutlet=\"icon || defaultIcon as iconName; context: { opened: open, disabled: disabled }\"\n      >\n        <prizm-icon\n          *ngIf=\"!disabled\"\n          [class.opened]=\"open\"\n          [class.active]=\"focusableElementRef.focused\"\n          [class.icon-dropdown]=\"iconName === defaultIcon\"\n          [iconClass]=\"$any(iconName)\"\n          (click)=\"focusableElementRef.focus()\"\n        >\n        </prizm-icon>\n      </ng-container>\n    </ng-container>\n\n    <!--    <prizm-icon-->\n    <!--      *ngIf=\"!disabled\"-->\n    <!--      (click)=\"focusableElementRef.focus()\"-->\n    <!--      [class.active]=\"focusableElementRef.focused\"-->\n    <!--      [class.opened]=\"open\"-->\n    <!--      class=\"icon-dropdown\"-->\n    <!--      prizm-input-right-->\n    <!--      iconClass=\"chevrons-dropdown\"-->\n    <!--    ></prizm-icon>-->\n  </prizm-input-layout>\n\n  <ng-template #dropdown>\n    <prizm-data-list class=\"block\" [scroll]=\"dropdownScroll\" [style.--prizm-data-list-border]=\"0\">\n      <div class=\"list-search-item\" *ngIf=\"searchable\">\n        <prizm-input-layout size=\"m\" label=\"\u041F\u043E\u0438\u0441\u043A\">\n          <input class=\"input-search\" #input [formControl]=\"searchInputControl\" prizmInput prizmAutoFocus />\n          <button [interactive]=\"true\" prizmInputIconButton=\"sort-zoom-in\" prizm-input-right></button>\n        </prizm-input-layout>\n      </div>\n      <ng-container *ngIf=\"$.filteredItems?.length; else emptyTemplate\">\n        <div\n          class=\"item\"\n          #parent\n          *ngFor=\"let item of $.filteredItems; let idx = index\"\n          [class.selected]=\"item.checked\"\n          [class.most-relevant]=\"searchable && searchInputControl.value && idx === 0\"\n        >\n          <prizm-checkbox\n            [ngModel]=\"item.checked\"\n            [ngModelOptions]=\"{ standalone: true }\"\n            [checked]=\"item.checked\"\n            [host]=\"parent\"\n            [indeterminate]=\"!!item.indeterminate\"\n            (changed)=\"select(item)\"\n          >\n            <div\n              class=\"text\"\n              #elem\n              *prizmLet=\"item | prizmCallFunc : stringify : $any(emptyContent) as text\"\n              [prizmHint]=\"text\"\n              [prizmHintDirection]=\"direction\"\n              [prizmHintCanShow]=\"$any(elem | prizmCallFunc : prizmIsTextOverflow$ | async)\"\n            >\n              <ng-container\n                *polymorphOutlet=\"\n                  valueTemplate as content;\n                  context: {\n                    $implicit: {\n                      obj: item.obj,\n                      checked: item.checked,\n                      stringify: item | prizmCallFunc : stringify\n                    }\n                  } as context\n                \"\n              >\n                {{ text }}\n              </ng-container>\n            </div>\n          </prizm-checkbox>\n        </div>\n      </ng-container>\n      <ng-template #emptyTemplate>\n        <ng-container *polymorphOutlet=\"emptyContent as data\">\n          <div class=\"empty-template\">{{ emptyContent }}</div>\n        </ng-container>\n      </ng-template>\n    </prizm-data-list>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{position:relative;z-index:0;display:inline-block}.item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);gap:var(--prizm-select-item-gap, 8px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item.selected,.item.most-relevant{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20))}.item.selected .text,.item.most-relevant .text{color:var(--prizm-text-contrast)}.item:not(.selected):not(.most-relevant):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}.block{background:var(--prizm-select-background, var(--prizm-bg-body));border-radius:2px;border:none;padding:var(--prizm-select-padding, 8px 0)}.input-chips[readonly]{cursor:pointer}.empty-template{padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-empty-text, var(--prizm-text-subscript, #20222b))}.icon-dropdown{color:#777b92;cursor:pointer;transition-property:transform;transition-property:all;transition-property:color,transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out}.icon-dropdown.active{color:#337eff}.icon-dropdown.opened{transform:rotate(180deg)}.list-search-item{padding:var(--prizm-select-item-padding, 8px 16px)}.list-search-item prizm-input-layout{width:100%}prizm-checkbox{max-width:calc(100% - 8px)}.in-body-chips-box{display:flex;align-items:center;height:100%}.hidden{display:none}prizm-chips.inner{margin-bottom:8px}\n"], dependencies: [{ kind: "ngmodule", type: PrizmOverlayModule }, { kind: "ngmodule", type: PolymorphModule }, { kind: "directive", type: i1.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "component", type: i3.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i4.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i5.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmChipsModule }, { kind: "component", type: i6.PrizmChipsComponent, selector: "prizm-chips", inputs: ["size", "chips", "deletable", "singleLine", "hintCanShow", "hintDirection"], outputs: ["addChipEvent", "removeChipEvent", "clickChipEvent"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i7.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i7.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: PrizmLetModule }, { kind: "directive", type: i8.PrizmLetDirective, selector: "[prizmLet]", inputs: ["prizmLet"], exportAs: ["prizmLet"] }, { kind: "ngmodule", type: PrizmHintModule }, { kind: "directive", type: i9.PrizmHintDirective, selector: "[prizmHint]:not(ng-container)", inputs: ["prizmAutoReposition", "prizmHintDirection", "prizmHintId", "prizmHintTheme", "prizmHintShowDelay", "prizmHintHideDelay", "prizmHintHost", "prizmHintContext", "prizmHintCanShow", "prizmHint"], outputs: ["prizmHintShowed"], exportAs: ["prizmHint"] }, { kind: "ngmodule", type: PrizmIconModule }, { kind: "component", type: i10.PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "ngmodule", type: PrizmCallFuncModule }, { kind: "pipe", type: i8.PrizmCallFuncPipe, name: "prizmCallFunc" }, { kind: "ngmodule", type: PrizmAutoFocusModule }, { kind: "directive", type: i11.PrizmAutoFocusDirective, selector: "[prizmAutoFocus]", inputs: ["autoFocus"] }, { kind: "ngmodule", type: PrizmScrollbarModule }, { kind: "ngmodule", type: PrizmDropdownControllerModule }, { kind: "directive", type: i12.PrizmDropdownControllerDirective, selector: "[prizmDropdownMinHeight], [prizmDropdownMaxHeight], [prizmDropdownAlign], [prizmDropdownLimitWidth]", inputs: ["prizmDropdownMinHeight", "prizmDropdownAlign", "prizmDropdownLimitWidth", "prizmDropdownMaxHeight"] }, { kind: "ngmodule", type: PrizmDataListModule }, { kind: "component", type: i13.PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "ngmodule", type: PrizmCheckboxModule }, { kind: "component", type: i14.PrizmCheckboxComponent, selector: "prizm-checkbox", inputs: ["size", "indeterminate", "host", "disabled", "checked"], outputs: ["changed"] }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i15.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmDropdownHostModule }, { kind: "component", type: i16.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmMultiSelectComponent.prototype, "dropdownScroll", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "icon", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "selectAllItem", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "searchable", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "forceClear", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "isChipsDeletable", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "label", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "minDropdownHeight", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "dropdownWidth", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "maxDropdownHeight", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmMultiSelectComponent.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmMultiSelectComponent.prototype, "searchMatcher", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "emptyContent", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmMultiSelectComponent.prototype, "stringify", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Function)
], PrizmMultiSelectComponent.prototype, "identityMatcher", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmMultiSelectComponent.prototype, "valueTemplate", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Boolean)
], PrizmMultiSelectComponent.prototype, "outer", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmMultiSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-multi-select', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        PrizmDestroyService,
                        {
                            provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
                            useExisting: forwardRef(() => PrizmMultiSelectComponent),
                        },
                    ], imports: [
                        PrizmOverlayModule,
                        PolymorphModule,
                        PrizmInputTextModule,
                        PrizmChipsModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        PrizmLetModule,
                        PrizmHintModule,
                        PrizmIconModule,
                        PrizmCallFuncModule,
                        PrizmAutoFocusModule,
                        PrizmScrollbarModule,
                        PrizmDropdownControllerModule,
                        PrizmDataListModule,
                        PrizmCheckboxModule,
                        PrizmLifecycleModule,
                        PrizmDropdownHostModule,
                    ], standalone: true, exportAs: 'prizmDropdownSelect', template: "<prizm-dropdown-host\n  #dropdownHostRef\n  *prizmLet=\"{ selectedItems: selectedItems$ | async, filteredItems: filteredItems$ | async } as $\"\n  [(isOpen)]=\"open\"\n  [content]=\"dropdown\"\n  [prizmDropdownHostWidth]=\"dropdownWidth\"\n  [prizmDropdownMinHeight]=\"minDropdownHeight\"\n  [prizmDropdownMaxHeight]=\"maxDropdownHeight\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [forceClear]=\"(forceClear || forceClear === null) && $.selectedItems.length > 0\"\n    [outer]=\"outer\"\n    [size]=\"size\"\n    [ngSwitch]=\"outer\"\n    (clear)=\"focusableElementRef.focus(); safeStopPropagation(focusableElementRef.value, $event)\"\n    (click)=\"safeOpenModal()\"\n  >\n    <input\n      #focusableElementRef\n      #inputText=\"prizmInput\"\n      [style.display]=\"outer ? 'none' : ''\"\n      [style.visibility]=\"outer ? 'none' : 'hidden'\"\n      [hidden]=\"true\"\n      [disabled]=\"disabled\"\n      [readonly]=\"true\"\n      [placeholder]=\"placeholder\"\n      [formControl]=\"requiredInputControl\"\n      (prizmOnInit)=\"inputTextElement = inputText\"\n      (onClear)=\"onClear()\"\n      prizmInput\n    />\n    <div class=\"in-body-chips-box\" *ngSwitchCase=\"true\" prizm-input-in-body>\n      <ng-container [ngTemplateOutlet]=\"chipsTemplate\"></ng-container>\n    </div>\n\n    <ng-container *ngSwitchCase=\"false\" prizm-input-bottom>\n      <ng-container [ngTemplateOutlet]=\"chipsTemplate\"></ng-container>\n    </ng-container>\n\n    <ng-template #chipsTemplate>\n      <ng-container *ngIf=\"selectedItemsChips$ | async as chips\">\n        <prizm-chips\n          #chipsComponent\n          *ngIf=\"chips.length\"\n          [class.inner]=\"!outer\"\n          [singleLine]=\"true\"\n          [deletable]=\"!disabled && isChipsDeletable\"\n          [chips]=\"chips\"\n          (removeChipEvent)=\"removeChip($event)\"\n        ></prizm-chips>\n      </ng-container>\n    </ng-template>\n\n    <ng-container prizm-input-right>\n      <ng-container\n        *polymorphOutlet=\"icon || defaultIcon as iconName; context: { opened: open, disabled: disabled }\"\n      >\n        <prizm-icon\n          *ngIf=\"!disabled\"\n          [class.opened]=\"open\"\n          [class.active]=\"focusableElementRef.focused\"\n          [class.icon-dropdown]=\"iconName === defaultIcon\"\n          [iconClass]=\"$any(iconName)\"\n          (click)=\"focusableElementRef.focus()\"\n        >\n        </prizm-icon>\n      </ng-container>\n    </ng-container>\n\n    <!--    <prizm-icon-->\n    <!--      *ngIf=\"!disabled\"-->\n    <!--      (click)=\"focusableElementRef.focus()\"-->\n    <!--      [class.active]=\"focusableElementRef.focused\"-->\n    <!--      [class.opened]=\"open\"-->\n    <!--      class=\"icon-dropdown\"-->\n    <!--      prizm-input-right-->\n    <!--      iconClass=\"chevrons-dropdown\"-->\n    <!--    ></prizm-icon>-->\n  </prizm-input-layout>\n\n  <ng-template #dropdown>\n    <prizm-data-list class=\"block\" [scroll]=\"dropdownScroll\" [style.--prizm-data-list-border]=\"0\">\n      <div class=\"list-search-item\" *ngIf=\"searchable\">\n        <prizm-input-layout size=\"m\" label=\"\u041F\u043E\u0438\u0441\u043A\">\n          <input class=\"input-search\" #input [formControl]=\"searchInputControl\" prizmInput prizmAutoFocus />\n          <button [interactive]=\"true\" prizmInputIconButton=\"sort-zoom-in\" prizm-input-right></button>\n        </prizm-input-layout>\n      </div>\n      <ng-container *ngIf=\"$.filteredItems?.length; else emptyTemplate\">\n        <div\n          class=\"item\"\n          #parent\n          *ngFor=\"let item of $.filteredItems; let idx = index\"\n          [class.selected]=\"item.checked\"\n          [class.most-relevant]=\"searchable && searchInputControl.value && idx === 0\"\n        >\n          <prizm-checkbox\n            [ngModel]=\"item.checked\"\n            [ngModelOptions]=\"{ standalone: true }\"\n            [checked]=\"item.checked\"\n            [host]=\"parent\"\n            [indeterminate]=\"!!item.indeterminate\"\n            (changed)=\"select(item)\"\n          >\n            <div\n              class=\"text\"\n              #elem\n              *prizmLet=\"item | prizmCallFunc : stringify : $any(emptyContent) as text\"\n              [prizmHint]=\"text\"\n              [prizmHintDirection]=\"direction\"\n              [prizmHintCanShow]=\"$any(elem | prizmCallFunc : prizmIsTextOverflow$ | async)\"\n            >\n              <ng-container\n                *polymorphOutlet=\"\n                  valueTemplate as content;\n                  context: {\n                    $implicit: {\n                      obj: item.obj,\n                      checked: item.checked,\n                      stringify: item | prizmCallFunc : stringify\n                    }\n                  } as context\n                \"\n              >\n                {{ text }}\n              </ng-container>\n            </div>\n          </prizm-checkbox>\n        </div>\n      </ng-container>\n      <ng-template #emptyTemplate>\n        <ng-container *polymorphOutlet=\"emptyContent as data\">\n          <div class=\"empty-template\">{{ emptyContent }}</div>\n        </ng-container>\n      </ng-template>\n    </prizm-data-list>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{position:relative;z-index:0;display:inline-block}.item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);gap:var(--prizm-select-item-gap, 8px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item.selected,.item.most-relevant{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20))}.item.selected .text,.item.most-relevant .text{color:var(--prizm-text-contrast)}.item:not(.selected):not(.most-relevant):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}.block{background:var(--prizm-select-background, var(--prizm-bg-body));border-radius:2px;border:none;padding:var(--prizm-select-padding, 8px 0)}.input-chips[readonly]{cursor:pointer}.empty-template{padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-empty-text, var(--prizm-text-subscript, #20222b))}.icon-dropdown{color:#777b92;cursor:pointer;transition-property:transform;transition-property:all;transition-property:color,transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out}.icon-dropdown.active{color:#337eff}.icon-dropdown.opened{transform:rotate(180deg)}.list-search-item{padding:var(--prizm-select-item-padding, 8px 16px)}.list-search-item prizm-input-layout{width:100%}prizm-checkbox{max-width:calc(100% - 8px)}.in-body-chips-box{display:flex;align-items:center;height:100%}.hidden{display:none}prizm-chips.inner{margin-bottom:8px}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PRIZM_MULTI_SELECT_OPTIONS]
                }] }, { type: i7.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }, {
                    type: Inject,
                    args: [NgControl]
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.ChangeDetectorRef, decorators: [{
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
            }], icon: [{
                type: Input
            }], selectAllItem: [{
                type: Input
            }], searchable: [{
                type: Input
            }], forceClear: [{
                type: Input
            }], isChipsDeletable: [{
                type: Input
            }], label: [{
                type: Input
            }], minDropdownHeight: [{
                type: Input
            }], dropdownWidth: [{
                type: Input
            }], maxDropdownHeight: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], size: [{
                type: Input
            }], searchMatcher: [{
                type: Input
            }], emptyContent: [{
                type: Input
            }], stringify: [{
                type: Input
            }], identityMatcher: [{
                type: Input
            }], valueTemplate: [{
                type: Input
            }], outer: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd25zL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bnMvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBRVYsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsY0FBYyxHQUNmLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRyxPQUFPLEVBRUwsZUFBZSxFQUNmLG9CQUFvQixFQUNwQiw2QkFBNkIsRUFDN0IsZUFBZSxFQUNmLG9CQUFvQixHQUNyQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSwwQkFBMEIsRUFBMkIsTUFBTSx3QkFBd0IsQ0FBQztBQU03RixPQUFPLEVBQTJDLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztB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LEtBQUs7Z0JBT04sU0FBUztzQkFGUixLQUFLO2dCQU1OLGVBQWU7c0JBRmQsS0FBSztnQkFNTixhQUFhO3NCQUZaLEtBQUs7Z0JBT04sS0FBSztzQkFGSixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByaXptQ2FsbEZ1bmNNb2R1bGUsXG4gIFByaXptRGVzdHJveVNlcnZpY2UsXG4gIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLFxuICBQcml6bUxldE1vZHVsZSxcbn0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIE5nQ29udHJvbCwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVW50eXBlZEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgUG9seW1vcnBoQ29udGVudCxcbiAgUG9seW1vcnBoTW9kdWxlLFxuICBQcml6bUF1dG9Gb2N1c01vZHVsZSxcbiAgUHJpem1Ecm9wZG93bkNvbnRyb2xsZXJNb2R1bGUsXG4gIFByaXptSGludE1vZHVsZSxcbiAgUHJpem1MaWZlY3ljbGVNb2R1bGUsXG59IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUFJJWk1fTVVMVElfU0VMRUNUX09QVElPTlMsIFByaXptTXVsdGlTZWxlY3RPcHRpb25zIH0gZnJvbSAnLi9tdWx0aS1zZWxlY3Qub3B0aW9ucyc7XG5pbXBvcnQge1xuICBQcml6bUNvbnRleHRXaXRoSW1wbGljaXQsXG4gIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yLFxuICBQcml6bU5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQsXG59IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFByaXptSW5wdXRTaXplLCBQcml6bUlucHV0VGV4dENvbXBvbmVudCwgUHJpem1JbnB1dFRleHRNb2R1bGUgfSBmcm9tICcuLi8uLi9pbnB1dCc7XG5pbXBvcnQgeyBBYnN0cmFjdFByaXptQ29udHJvbCB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L2NvbnRyb2wnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWQsIHByaXptSXNUZXh0T3ZlcmZsb3ckIH0gZnJvbSAnLi4vLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1hcCwgc2hhcmVSZXBsYXksIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUFJJWk1fRk9DVVNBQkxFX0lURU1fQUNDRVNTT1IgfSBmcm9tICcuLi8uLi8uLi90b2tlbnMnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IFByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50LCBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duLWhvc3QnO1xuaW1wb3J0IHtcbiAgUHJpem1NdWx0aVNlbGVjdElkZW50aXR5TWF0Y2hlcixcbiAgUHJpem1NdWx0aVNlbGVjdEl0ZW1TdHJpbmdpZnlGdW5jLFxuICBQcml6bU11bHRpU2VsZWN0SXRlbVdpdGhDaGVja2VkLFxuICBQcml6bU11bHRpU2VsZWN0U2VhcmNoTWF0Y2hlcixcbn0gZnJvbSAnLi9tdWx0aS1zZWxlY3QubW9kZWwnO1xuaW1wb3J0IHsgUHJpem1PdmVybGF5T3V0c2lkZVBsYWNlbWVudCB9IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvb3ZlcmxheS9tb2RlbHMnO1xuaW1wb3J0IHsgUHJpem1TY3JvbGxiYXJNb2R1bGUsIFByaXptU2Nyb2xsYmFyVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Njcm9sbGJhcic7XG5pbXBvcnQgeyBQcml6bU92ZXJsYXlNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzJztcbmltcG9ydCB7IFByaXptQ2hpcHNNb2R1bGUgfSBmcm9tICcuLi8uLi9jaGlwcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1JY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vaWNvbic7XG5pbXBvcnQgeyBQcml6bURhdGFMaXN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vZGF0YS1saXN0JztcbmltcG9ydCB7IFByaXptQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi8uLi9jaGVja2JveCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHVzZSBvbmx5IFByaXptTXVsdGlTZWxlY3RJbnB1dENvbXBvbmVudFxuICogd2lsbCBiZSByZW1vdmVkIGFmdGVyIG5nIDE1IHVwZGF0ZVxuICogZm9yIGF1dG8gdXBkYXRlIHVzZSBvdXIgbWlncmF0b3IgaHR0cHM6Ly9wcml6bS5zaXRlL2ZvclpJSW9UL3VwZGF0ZS1mcm9tLWJldGFcbiAqICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1tdWx0aS1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXVsdGktc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXVsdGktc2VsZWN0LmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBSSVpNX0ZPQ1VTQUJMRV9JVEVNX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1NdWx0aVNlbGVjdENvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFByaXptT3ZlcmxheU1vZHVsZSxcbiAgICBQb2x5bW9ycGhNb2R1bGUsXG4gICAgUHJpem1JbnB1dFRleHRNb2R1bGUsXG4gICAgUHJpem1DaGlwc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUxldE1vZHVsZSxcbiAgICBQcml6bUhpbnRNb2R1bGUsXG4gICAgUHJpem1JY29uTW9kdWxlLFxuICAgIFByaXptQ2FsbEZ1bmNNb2R1bGUsXG4gICAgUHJpem1BdXRvRm9jdXNNb2R1bGUsXG4gICAgUHJpem1TY3JvbGxiYXJNb2R1bGUsXG4gICAgUHJpem1Ecm9wZG93bkNvbnRyb2xsZXJNb2R1bGUsXG4gICAgUHJpem1EYXRhTGlzdE1vZHVsZSxcbiAgICBQcml6bUNoZWNrYm94TW9kdWxlLFxuICAgIFByaXptTGlmZWN5Y2xlTW9kdWxlLFxuICAgIFByaXptRHJvcGRvd25Ib3N0TW9kdWxlLFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBleHBvcnRBczogJ3ByaXptRHJvcGRvd25TZWxlY3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bU11bHRpU2VsZWN0Q29tcG9uZW50PFQ+XG4gIGV4dGVuZHMgQWJzdHJhY3RQcml6bUNvbnRyb2w8VFtdPlxuICBpbXBsZW1lbnRzIFByaXptRm9jdXNhYmxlRWxlbWVudEFjY2Vzc29yXG57XG4gIEBWaWV3Q2hpbGQoJ2ZvY3VzYWJsZUVsZW1lbnRSZWYnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgcHVibGljIHJlYWRvbmx5IGZvY3VzYWJsZUVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBAVmlld0NoaWxkKCdkcm9wZG93bkhvc3RSZWYnKVxuICBwdWJsaWMgcmVhZG9ubHkgZHJvcGRvd25Ib3N0RWxlbWVudD86IFByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50O1xuXG4gIEBJbnB1dCgpIHNldCBpdGVtcyhkYXRhOiBUW10pIHtcbiAgICB0aGlzLml0ZW1zJC5uZXh0KChkYXRhIGFzIGFueSkgPz8gW10pO1xuICB9XG4gIGdldCBpdGVtcygpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zJC52YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZHJvcGRvd25TY3JvbGw6IFByaXptU2Nyb2xsYmFyVmlzaWJpbGl0eSA9ICdhdXRvJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGljb24gPSB0aGlzLm9wdGlvbnMuaWNvbjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNlbGVjdEFsbEl0ZW06IFQgfCBudWxsID0gdGhpcy5vcHRpb25zLmNob29zZUFsbEl0ZW07XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzZWFyY2hhYmxlID0gdGhpcy5vcHRpb25zLnNlYXJjaGFibGU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBmb3JjZUNsZWFyID0gdGhpcy5vcHRpb25zLmZvcmNlQ2xlYXI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpc0NoaXBzRGVsZXRhYmxlID0gdGhpcy5vcHRpb25zLmlzQ2hpcHNEZWxldGFibGU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBsYWJlbCA9IHRoaXMub3B0aW9ucy5sYWJlbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1pbkRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5vcHRpb25zLm1pbkRyb3Bkb3duSGVpZ2h0O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZHJvcGRvd25XaWR0aCA9IHRoaXMub3B0aW9ucy5kcm9wZG93bldpZHRoO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbWF4RHJvcGRvd25IZWlnaHQgPSB0aGlzLm9wdGlvbnMubWF4RHJvcGRvd25IZWlnaHQ7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwbGFjZWhvbGRlciA9IHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNpemU6IFByaXptSW5wdXRTaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzZWFyY2hNYXRjaGVyOiBQcml6bU11bHRpU2VsZWN0U2VhcmNoTWF0Y2hlcjxUPiA9IHRoaXMub3B0aW9ucy5zZWFyY2hNYXRjaGVyO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZW1wdHlDb250ZW50OiBQb2x5bW9ycGhDb250ZW50ID0gdGhpcy5vcHRpb25zLmVtcHR5Q29udGVudDtcblxuICAvKiogbmVlZCBvbmx5IGNsZWFyIGZ1bmN0aW9uICovXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc3RyaW5naWZ5OiBQcml6bU11bHRpU2VsZWN0SXRlbVN0cmluZ2lmeUZ1bmM8VD4gPSB0aGlzLm9wdGlvbnMuc3RyaW5naWZ5O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaWRlbnRpdHlNYXRjaGVyOiBQcml6bU11bHRpU2VsZWN0SWRlbnRpdHlNYXRjaGVyPFQ+ID0gdGhpcy5vcHRpb25zLmlkZW50aXR5TWF0Y2hlcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHZhbHVlVGVtcGxhdGU6IFBvbHltb3JwaENvbnRlbnQ8UHJpem1Db250ZXh0V2l0aEltcGxpY2l0PFByaXptTXVsdGlTZWxlY3RJdGVtV2l0aENoZWNrZWQ8VD4+PiA9XG4gICAgdGhpcy5vcHRpb25zLnZhbHVlQ29udGVudDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG91dGVyOiBib29sZWFuID0gdGhpcy5vcHRpb25zLm91dGVyO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWktbXVpbHRpLXNlbGVjdCc7XG5cbiAgcHVibGljIGlucHV0VGV4dEVsZW1lbnQhOiBQcml6bUlucHV0VGV4dENvbXBvbmVudCB8IG51bGw7XG4gIHB1YmxpYyByZWFkb25seSBkZWZhdWx0SWNvbiA9ICdjaGV2cm9ucy1kcm9wZG93bic7XG4gIHJlYWRvbmx5IHByaXptSXNUZXh0T3ZlcmZsb3ckID0gcHJpem1Jc1RleHRPdmVyZmxvdyQ7XG4gIHB1YmxpYyByZWFkb25seSBkaXJlY3Rpb246IFByaXptT3ZlcmxheU91dHNpZGVQbGFjZW1lbnQgPSBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50LlJJR0hUO1xuXG4gIHB1YmxpYyBvcGVuID0gZmFsc2U7XG4gIHB1YmxpYyByZWFkb25seSBpdGVtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgcHVibGljIHJlYWRvbmx5IHJlcXVpcmVkSW5wdXRDb250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgpO1xuICBwdWJsaWMgcmVhZG9ubHkgc2VhcmNoSW5wdXRDb250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgpO1xuICBwdWJsaWMgcmVhZG9ubHkgY2hpcHNDb250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbChbXSBhcyBzdHJpbmdbXSk7XG5cbiAgcmVhZG9ubHkgZmlsdGVyZWRJdGVtcyQ6IE9ic2VydmFibGU8UHJpem1NdWx0aVNlbGVjdEl0ZW1XaXRoQ2hlY2tlZDxUPltdPiA9IHRoaXMuY29udHJvbFJlYWR5JC5waXBlKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dENvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKCcnKSksXG4gICAgICAgIHRoaXMuaW50ZXJuYWxWYWx1ZSQucGlwZShkZWJvdW5jZVRpbWUoMCksIHN0YXJ0V2l0aCh0aGlzLnZhbHVlKSksXG4gICAgICBdKVxuICAgICksXG4gICAgc3dpdGNoTWFwKChbc2VhcmNoVmFsdWUsIHNlbGVjdGVkSXRlbXNdOiBbc3RyaW5nLCBUW11dKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcyQucGlwZShcbiAgICAgICAgbWFwKGl0ZW1zID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuc2VhcmNoYWJsZSB8fCAhc2VhcmNoVmFsdWU/LnRvU3RyaW5nKCkucmVwbGFjZSgvWyBdKy9nLCAnJykpIHJldHVybiBpdGVtcztcbiAgICAgICAgICBzZWFyY2hWYWx1ZSA9IHRoaXMuc2VhcmNoVmFsdWUgPSBzZWFyY2hWYWx1ZS50b1N0cmluZygpLnRyaW0oKTtcbiAgICAgICAgICByZXR1cm4gaXRlbXM/LmZpbHRlcihpdGVtID0+IHRoaXMuc2VhcmNoTWF0Y2hlcihzZWFyY2hWYWx1ZSwgaXRlbSkpID8/IFtdO1xuICAgICAgICB9KSxcbiAgICAgICAgbWFwKChpdGVtczogVFtdKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0SXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW06IFQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNoZWNrZWQ6ICEhc2VsZWN0ZWRJdGVtcz8uZmluZChzZWxlY3RlZCA9PiB0aGlzLmlkZW50aXR5TWF0Y2hlcihzZWxlY3RlZCwgaXRlbSkpLFxuICAgICAgICAgICAgICBvYmo6IGl0ZW0sXG4gICAgICAgICAgICB9IGFzIFByaXptTXVsdGlTZWxlY3RJdGVtV2l0aENoZWNrZWQ8VD47XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IHRoaXMudmFsdWU/Lmxlbmd0aDtcbiAgICAgICAgICBjb25zdCBhbGxJdGVtID0gdGhpcy5pdGVtcyQudmFsdWU/Lmxlbmd0aDtcbiAgICAgICAgICBjb25zdCBjdXJyZW50bHlTZWFyY2hpbmcgPSB0aGlzLnNlYXJjaElucHV0Q29udHJvbC52YWx1ZTtcbiAgICAgICAgICBjb25zdCBhZGRTZWxlY3RBbGxJdGVtID0gdGhpcy5zZWxlY3RBbGxJdGVtICYmICFjdXJyZW50bHlTZWFyY2hpbmc7XG5cbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uKChhZGRTZWxlY3RBbGxJdGVtID8gW3RoaXMuc2VsZWN0QWxsSXRlbV0gOiBbXSkubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgY2hlY2tlZDogYWxsSXRlbSA9PT0gc2VsZWN0ZWRDb3VudCxcbiAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogc2VsZWN0ZWRDb3VudCAmJiBhbGxJdGVtICE9PSB0aGlzLnZhbHVlLmxlbmd0aCxcbiAgICAgICAgICAgICAgb2JqOiBpdGVtLFxuICAgICAgICAgICAgfSkpIGFzIFByaXptTXVsdGlTZWxlY3RJdGVtV2l0aENoZWNrZWQ8VD5bXSksXG4gICAgICAgICAgICAuLi5zZWxlY3RJdGVtcyxcbiAgICAgICAgICBdO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFwKGl0ZW1zID0+IHtcbiAgICAgICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBpdGVtcztcbiAgICAgICAgICB0aGlzLmRyb3Bkb3duSG9zdEVsZW1lbnQ/LnJlQ2FsY3VsYXRlUG9zaXRpb25zKDEwMDAgLyA2MCk7XG4gICAgICAgIH0pLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICByZWFkb25seSBzZWxlY3RlZEl0ZW1zJDogT2JzZXJ2YWJsZTxUW10+ID0gdGhpcy5pbnRlcm5hbFZhbHVlJFxuICAgIC5waXBlKGRlYm91bmNlVGltZSgwKSwgc3RhcnRXaXRoKHRoaXMudmFsdWUpKVxuICAgIC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMudmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zJC5waXBlKFxuICAgICAgICAgIG1hcChpdGVtcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBpdGVtcz8uZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgICAgICAgICAoc2VsZWN0ZWRJdGVtcyA/PyBbXSkuZmluZChzZWxlY3RlZEl0ZW0gPT4gdGhpcy5pZGVudGl0eU1hdGNoZXIoc2VsZWN0ZWRJdGVtLCBpdGVtKSlcbiAgICAgICAgICAgICAgKSA/PyBbXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBzaGFyZVJlcGxheSgxKVxuICAgICk7XG5cbiAgcmVhZG9ubHkgY2hpcHNTZXQgPSBuZXcgTWFwPHN0cmluZywgVD4oKTtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRJdGVtc0NoaXBzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT4gPSB0aGlzLnNlbGVjdGVkSXRlbXMkLnBpcGUoXG4gICAgbWFwKChzZWxlY3RlZEl0ZW1zOiBUW10pID0+IHtcbiAgICAgIHRoaXMuY2hpcHNTZXQuY2xlYXIoKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgIHNlbGVjdGVkSXRlbXM/Lm1hcChpID0+IHtcbiAgICAgICAgICBjb25zdCBzdHIgPSB0aGlzLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgb2JqOiBpLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5jaGlwc1NldC5zZXQoc3RyLCBpKTtcbiAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9KSA/PyBbXTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KSxcbiAgICBzaGFyZVJlcGxheSgxKVxuICApO1xuXG4gIHB1YmxpYyBmaWx0ZXJlZEl0ZW1zOiBQcml6bU11bHRpU2VsZWN0SXRlbVdpdGhDaGVja2VkPFQ+W10gPSBbXTtcbiAgcHJpdmF0ZSBzZWFyY2hWYWx1ZSE6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBSSVpNX01VTFRJX1NFTEVDVF9PUFRJT05TKSBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IFByaXptTXVsdGlTZWxlY3RPcHRpb25zPFQ+LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIEBJbmplY3QoTmdDb250cm9sKVxuICAgIGNvbnRyb2w6IE5nQ29udHJvbCB8IG51bGwsXG4gICAgcHVibGljIHJlYWRvbmx5IGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoY29udHJvbCwgY2hhbmdlRGV0ZWN0b3JSZWYpO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLmluaXRDb250cm9sU3RhdHVzQ2hhbmdlcklmRXhpc3QoKTtcbiAgICB0aGlzLmluaXRDb250cm9sVmFsdWVDaGFuZ2VySWZFeGlzdCgpO1xuICAgIHRoaXMuaW5pdENvbnRyb2xWYWxpZGF0b3JzSWZFeGlzdCgpO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoaXRlbXMgPT4ge1xuICAgICAgICAgIHRoaXMuY2hpcHNDb250cm9sLnNldFZhbHVlKGl0ZW1zIGFzIGFueSwgeyBlbWl0RXZlbnQ6IHRydWUgfSk7XG4gICAgICAgICAgLy8gVE9ETyByZW1vdmUgYWZ0ZXIgYWRkIHVwZGF0ZSBpbnB1dHNcbiAgICAgICAgICBpZiAodGhpcy5pbnB1dFRleHRFbGVtZW50KSB0aGlzLmlucHV0VGV4dEVsZW1lbnQubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFwKCgpID0+IHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENvbnRyb2xTdGF0dXNDaGFuZ2VySWZFeGlzdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sIGluc3RhbmNlb2YgVW50eXBlZEZvcm1Db250cm9sKVxuICAgICAgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuc3luY1N0YXRlcyh0aGlzLmNvbnRyb2wgYXMgVW50eXBlZEZvcm1Db250cm9sLCBmYWxzZSwgdGhpcy5yZXF1aXJlZElucHV0Q29udHJvbClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRDb250cm9sVmFsdWVDaGFuZ2VySWZFeGlzdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sIGluc3RhbmNlb2YgVW50eXBlZEZvcm1Db250cm9sKVxuICAgICAgUHJpem1Gb3JtQ29udHJvbEhlbHBlcnMuc3luY1ZhbHVlcyhcbiAgICAgICAgdGhpcy5jb250cm9sIGFzIFVudHlwZWRGb3JtQ29udHJvbCxcbiAgICAgICAgaSA9PiBpPy5sZW5ndGgsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMucmVxdWlyZWRJbnB1dENvbnRyb2xcbiAgICAgIClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRDb250cm9sVmFsaWRhdG9yc0lmRXhpc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCBpbnN0YW5jZW9mIFVudHlwZWRGb3JtQ29udHJvbClcbiAgICAgIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNBbGxWYWxpZGF0b3JzKFxuICAgICAgICB0aGlzLmNvbnRyb2wgYXMgVW50eXBlZEZvcm1Db250cm9sLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgdGhpcy5yZXF1aXJlZElucHV0Q29udHJvbFxuICAgICAgKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IFByaXptTmF0aXZlRm9jdXNhYmxlRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQgPyB0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gIH1cblxuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJpem1Jc05hdGl2ZUZvY3VzZWQodGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbD8uc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RmFsbGJhY2tWYWx1ZSgpOiBUW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTZWxlY3RBbGxJdGVtKGl0ZW06IFByaXptTXVsdGlTZWxlY3RJdGVtV2l0aENoZWNrZWQ8VD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnNlbGVjdEFsbEl0ZW0gJiYgdGhpcy5pZGVudGl0eU1hdGNoZXIodGhpcy5zZWxlY3RBbGxJdGVtLCBpdGVtLm9iaikpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdChpdGVtOiBQcml6bU11bHRpU2VsZWN0SXRlbVdpdGhDaGVja2VkPFQ+KTogdm9pZCB7XG4gICAgY29uc3QgbmV3SXRlbVN0YXRlID0gIWl0ZW0uY2hlY2tlZDtcbiAgICBsZXQgdmFsdWVzOiBUW107XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RBbGxJdGVtKGl0ZW0pKSB7XG4gICAgICB2YWx1ZXMgPSBuZXdJdGVtU3RhdGUgPyBbLi4udGhpcy5pdGVtc10gOiBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVzID0gbmV3SXRlbVN0YXRlXG4gICAgICAgID8gWy4uLih0aGlzLnZhbHVlID8/IFtdKSwgaXRlbS5vYmpdXG4gICAgICAgIDogdGhpcy52YWx1ZS5maWx0ZXIoaSA9PiAhdGhpcy5pZGVudGl0eU1hdGNoZXIoaSwgaXRlbS5vYmopKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlcyk7XG4gICAgdGhpcy5kcm9wZG93bkhvc3RFbGVtZW50Py5yZUNhbGN1bGF0ZVBvc2l0aW9ucygpO1xuICB9XG5cbiAgcHVibGljIHNhZmVPcGVuTW9kYWwoKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuc2VhcmNoSW5wdXRDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICB0aGlzLm9wZW4gPVxuICAgICAgIXRoaXMub3BlbiAmJlxuICAgICAgdGhpcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgISFpbnB1dEVsZW1lbnQ7IC8qJiYgKHRoaXMub3V0ZXIgfHwgcHJpem1Jc05hdGl2ZUZvY3VzZWQoaW5wdXRFbGVtZW50KSk7Ki9cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLy8gVE9ETyByZW1vdmUgYWZ0ZXIgZmluaXNoIGFjdGl2ZXpvbmUgdG8gZHJvcGRvd24gY29tcG9uZW50XG4gIHB1YmxpYyBzYWZlU3RvcFByb3BhZ2F0aW9uKHZhbHVlOiBzdHJpbmcsICRldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIGlmICghdmFsdWUpICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVDaGlwKHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuY2hpcHNTZXQuZ2V0KHN0cik7XG4gICAgdGhpcy5zZWxlY3Qoe1xuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgIG9iajogaXRlbSxcbiAgICB9IGFzIFByaXptTXVsdGlTZWxlY3RJdGVtV2l0aENoZWNrZWQ8VD4pO1xuICB9XG59XG4iLCI8cHJpem0tZHJvcGRvd24taG9zdFxuICAjZHJvcGRvd25Ib3N0UmVmXG4gICpwcml6bUxldD1cInsgc2VsZWN0ZWRJdGVtczogc2VsZWN0ZWRJdGVtcyQgfCBhc3luYywgZmlsdGVyZWRJdGVtczogZmlsdGVyZWRJdGVtcyQgfCBhc3luYyB9IGFzICRcIlxuICBbKGlzT3BlbildPVwib3BlblwiXG4gIFtjb250ZW50XT1cImRyb3Bkb3duXCJcbiAgW3ByaXptRHJvcGRvd25Ib3N0V2lkdGhdPVwiZHJvcGRvd25XaWR0aFwiXG4gIFtwcml6bURyb3Bkb3duTWluSGVpZ2h0XT1cIm1pbkRyb3Bkb3duSGVpZ2h0XCJcbiAgW3ByaXptRHJvcGRvd25NYXhIZWlnaHRdPVwibWF4RHJvcGRvd25IZWlnaHRcIlxuPlxuICA8cHJpem0taW5wdXQtbGF5b3V0XG4gICAgW2xhYmVsXT1cImxhYmVsXCJcbiAgICBbZm9yY2VDbGVhcl09XCIoZm9yY2VDbGVhciB8fCBmb3JjZUNsZWFyID09PSBudWxsKSAmJiAkLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMFwiXG4gICAgW291dGVyXT1cIm91dGVyXCJcbiAgICBbc2l6ZV09XCJzaXplXCJcbiAgICBbbmdTd2l0Y2hdPVwib3V0ZXJcIlxuICAgIChjbGVhcik9XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzKCk7IHNhZmVTdG9wUHJvcGFnYXRpb24oZm9jdXNhYmxlRWxlbWVudFJlZi52YWx1ZSwgJGV2ZW50KVwiXG4gICAgKGNsaWNrKT1cInNhZmVPcGVuTW9kYWwoKVwiXG4gID5cbiAgICA8aW5wdXRcbiAgICAgICNmb2N1c2FibGVFbGVtZW50UmVmXG4gICAgICAjaW5wdXRUZXh0PVwicHJpem1JbnB1dFwiXG4gICAgICBbc3R5bGUuZGlzcGxheV09XCJvdXRlciA/ICdub25lJyA6ICcnXCJcbiAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cIm91dGVyID8gJ25vbmUnIDogJ2hpZGRlbidcIlxuICAgICAgW2hpZGRlbl09XCJ0cnVlXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbcmVhZG9ubHldPVwidHJ1ZVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cInJlcXVpcmVkSW5wdXRDb250cm9sXCJcbiAgICAgIChwcml6bU9uSW5pdCk9XCJpbnB1dFRleHRFbGVtZW50ID0gaW5wdXRUZXh0XCJcbiAgICAgIChvbkNsZWFyKT1cIm9uQ2xlYXIoKVwiXG4gICAgICBwcml6bUlucHV0XG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzPVwiaW4tYm9keS1jaGlwcy1ib3hcIiAqbmdTd2l0Y2hDYXNlPVwidHJ1ZVwiIHByaXptLWlucHV0LWluLWJvZHk+XG4gICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNoaXBzVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImZhbHNlXCIgcHJpem0taW5wdXQtYm90dG9tPlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjaGlwc1RlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctdGVtcGxhdGUgI2NoaXBzVGVtcGxhdGU+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRJdGVtc0NoaXBzJCB8IGFzeW5jIGFzIGNoaXBzXCI+XG4gICAgICAgIDxwcml6bS1jaGlwc1xuICAgICAgICAgICNjaGlwc0NvbXBvbmVudFxuICAgICAgICAgICpuZ0lmPVwiY2hpcHMubGVuZ3RoXCJcbiAgICAgICAgICBbY2xhc3MuaW5uZXJdPVwiIW91dGVyXCJcbiAgICAgICAgICBbc2luZ2xlTGluZV09XCJ0cnVlXCJcbiAgICAgICAgICBbZGVsZXRhYmxlXT1cIiFkaXNhYmxlZCAmJiBpc0NoaXBzRGVsZXRhYmxlXCJcbiAgICAgICAgICBbY2hpcHNdPVwiY2hpcHNcIlxuICAgICAgICAgIChyZW1vdmVDaGlwRXZlbnQpPVwicmVtb3ZlQ2hpcCgkZXZlbnQpXCJcbiAgICAgICAgPjwvcHJpem0tY2hpcHM+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLWNvbnRhaW5lciBwcml6bS1pbnB1dC1yaWdodD5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKnBvbHltb3JwaE91dGxldD1cImljb24gfHwgZGVmYXVsdEljb24gYXMgaWNvbk5hbWU7IGNvbnRleHQ6IHsgb3BlbmVkOiBvcGVuLCBkaXNhYmxlZDogZGlzYWJsZWQgfVwiXG4gICAgICA+XG4gICAgICAgIDxwcml6bS1pY29uXG4gICAgICAgICAgKm5nSWY9XCIhZGlzYWJsZWRcIlxuICAgICAgICAgIFtjbGFzcy5vcGVuZWRdPVwib3BlblwiXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzZWRcIlxuICAgICAgICAgIFtjbGFzcy5pY29uLWRyb3Bkb3duXT1cImljb25OYW1lID09PSBkZWZhdWx0SWNvblwiXG4gICAgICAgICAgW2ljb25DbGFzc109XCIkYW55KGljb25OYW1lKVwiXG4gICAgICAgICAgKGNsaWNrKT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXMoKVwiXG4gICAgICAgID5cbiAgICAgICAgPC9wcml6bS1pY29uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tICAgIDxwcml6bS1pY29uLS0+XG4gICAgPCEtLSAgICAgICpuZ0lmPVwiIWRpc2FibGVkXCItLT5cbiAgICA8IS0tICAgICAgKGNsaWNrKT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXMoKVwiLS0+XG4gICAgPCEtLSAgICAgIFtjbGFzcy5hY3RpdmVdPVwiZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1c2VkXCItLT5cbiAgICA8IS0tICAgICAgW2NsYXNzLm9wZW5lZF09XCJvcGVuXCItLT5cbiAgICA8IS0tICAgICAgY2xhc3M9XCJpY29uLWRyb3Bkb3duXCItLT5cbiAgICA8IS0tICAgICAgcHJpem0taW5wdXQtcmlnaHQtLT5cbiAgICA8IS0tICAgICAgaWNvbkNsYXNzPVwiY2hldnJvbnMtZHJvcGRvd25cIi0tPlxuICAgIDwhLS0gICAgPjwvcHJpem0taWNvbj4tLT5cbiAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG5cbiAgPG5nLXRlbXBsYXRlICNkcm9wZG93bj5cbiAgICA8cHJpem0tZGF0YS1saXN0IGNsYXNzPVwiYmxvY2tcIiBbc2Nyb2xsXT1cImRyb3Bkb3duU2Nyb2xsXCIgW3N0eWxlLi0tcHJpem0tZGF0YS1saXN0LWJvcmRlcl09XCIwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdC1zZWFyY2gtaXRlbVwiICpuZ0lmPVwic2VhcmNoYWJsZVwiPlxuICAgICAgICA8cHJpem0taW5wdXQtbGF5b3V0IHNpemU9XCJtXCIgbGFiZWw9XCLQn9C+0LjRgdC6XCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtc2VhcmNoXCIgI2lucHV0IFtmb3JtQ29udHJvbF09XCJzZWFyY2hJbnB1dENvbnRyb2xcIiBwcml6bUlucHV0IHByaXptQXV0b0ZvY3VzIC8+XG4gICAgICAgICAgPGJ1dHRvbiBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiIHByaXptSW5wdXRJY29uQnV0dG9uPVwic29ydC16b29tLWluXCIgcHJpem0taW5wdXQtcmlnaHQ+PC9idXR0b24+XG4gICAgICAgIDwvcHJpem0taW5wdXQtbGF5b3V0PlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiJC5maWx0ZXJlZEl0ZW1zPy5sZW5ndGg7IGVsc2UgZW1wdHlUZW1wbGF0ZVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJpdGVtXCJcbiAgICAgICAgICAjcGFyZW50XG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgJC5maWx0ZXJlZEl0ZW1zOyBsZXQgaWR4ID0gaW5kZXhcIlxuICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtLmNoZWNrZWRcIlxuICAgICAgICAgIFtjbGFzcy5tb3N0LXJlbGV2YW50XT1cInNlYXJjaGFibGUgJiYgc2VhcmNoSW5wdXRDb250cm9sLnZhbHVlICYmIGlkeCA9PT0gMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cHJpem0tY2hlY2tib3hcbiAgICAgICAgICAgIFtuZ01vZGVsXT1cIml0ZW0uY2hlY2tlZFwiXG4gICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXRlbS5jaGVja2VkXCJcbiAgICAgICAgICAgIFtob3N0XT1cInBhcmVudFwiXG4gICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCIhIWl0ZW0uaW5kZXRlcm1pbmF0ZVwiXG4gICAgICAgICAgICAoY2hhbmdlZCk9XCJzZWxlY3QoaXRlbSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgI2VsZW1cbiAgICAgICAgICAgICAgKnByaXptTGV0PVwiaXRlbSB8IHByaXptQ2FsbEZ1bmMgOiBzdHJpbmdpZnkgOiAkYW55KGVtcHR5Q29udGVudCkgYXMgdGV4dFwiXG4gICAgICAgICAgICAgIFtwcml6bUhpbnRdPVwidGV4dFwiXG4gICAgICAgICAgICAgIFtwcml6bUhpbnREaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcbiAgICAgICAgICAgICAgW3ByaXptSGludENhblNob3ddPVwiJGFueShlbGVtIHwgcHJpem1DYWxsRnVuYyA6IHByaXptSXNUZXh0T3ZlcmZsb3ckIHwgYXN5bmMpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpwb2x5bW9ycGhPdXRsZXQ9XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlVGVtcGxhdGUgYXMgY29udGVudDtcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgJGltcGxpY2l0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgb2JqOiBpdGVtLm9iaixcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBpdGVtLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5OiBpdGVtIHwgcHJpem1DYWxsRnVuYyA6IHN0cmluZ2lmeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGFzIGNvbnRleHRcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgdGV4dCB9fVxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcHJpem0tY2hlY2tib3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctdGVtcGxhdGUgI2VtcHR5VGVtcGxhdGU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKnBvbHltb3JwaE91dGxldD1cImVtcHR5Q29udGVudCBhcyBkYXRhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5LXRlbXBsYXRlXCI+e3sgZW1wdHlDb250ZW50IH19PC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L3ByaXptLWRhdGEtbGlzdD5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cbiJdfQ==