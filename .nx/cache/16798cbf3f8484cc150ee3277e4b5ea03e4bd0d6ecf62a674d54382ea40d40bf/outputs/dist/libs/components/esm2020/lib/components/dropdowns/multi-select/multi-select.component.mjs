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
}
PrizmMultiSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmMultiSelectComponent, deps: [{ token: PRIZM_MULTI_SELECT_OPTIONS }, { token: NgControl, optional: true, self: true }, { token: i0.ChangeDetectorRef }, { token: ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PrizmMultiSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmMultiSelectComponent, isStandalone: true, selector: "prizm-multi-select", inputs: { items: "items", dropdownScroll: "dropdownScroll", icon: "icon", selectAllItem: "selectAllItem", searchable: "searchable", forceClear: "forceClear", isChipsDeletable: "isChipsDeletable", label: "label", minDropdownHeight: "minDropdownHeight", dropdownWidth: "dropdownWidth", maxDropdownHeight: "maxDropdownHeight", placeholder: "placeholder", size: "size", searchMatcher: "searchMatcher", emptyContent: "emptyContent", stringify: "stringify", identityMatcher: "identityMatcher", valueTemplate: "valueTemplate", outer: "outer" }, providers: [
        PrizmDestroyService,
        {
            provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => PrizmMultiSelectComponent),
        },
    ], viewQueries: [{ propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }, { propertyName: "dropdownHostElement", first: true, predicate: ["dropdownHostRef"], descendants: true }], exportAs: ["prizmDropdownSelect"], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  #dropdownHostRef\n  *prizmLet=\"{ selectedItems: selectedItems$ | async, filteredItems: filteredItems$ | async } as $\"\n  [(isOpen)]=\"open\"\n  [content]=\"dropdown\"\n  [prizmDropdownHostWidth]=\"dropdownWidth\"\n  [prizmDropdownMinHeight]=\"minDropdownHeight\"\n  [prizmDropdownMaxHeight]=\"maxDropdownHeight\"\n>\n  <prizm-input-layout\n    [label]=\"label\"\n    [forceClear]=\"(forceClear || forceClear === null) && $.selectedItems.length > 0\"\n    [outer]=\"outer\"\n    [size]=\"size\"\n    [ngSwitch]=\"outer\"\n    (clear)=\"focusableElementRef.focus(); safeStopPropagation(focusableElementRef.value, $event)\"\n    (click)=\"safeOpenModal()\"\n  >\n    <input\n      #focusableElementRef\n      #inputText=\"prizmInput\"\n      [style.display]=\"outer ? 'none' : ''\"\n      [style.visibility]=\"outer ? 'none' : 'hidden'\"\n      [hidden]=\"true\"\n      [disabled]=\"disabled\"\n      [readonly]=\"true\"\n      [placeholder]=\"placeholder\"\n      [formControl]=\"requiredInputControl\"\n      (prizmOnInit)=\"inputTextElement = inputText\"\n      (onClear)=\"onClear()\"\n      prizmInput\n    />\n    <div class=\"in-body-chips-box\" *ngSwitchCase=\"true\" prizm-input-in-body>\n      <ng-container [ngTemplateOutlet]=\"chipsTemplate\"></ng-container>\n    </div>\n\n    <ng-container *ngSwitchCase=\"false\" prizm-input-bottom>\n      <ng-container [ngTemplateOutlet]=\"chipsTemplate\"></ng-container>\n    </ng-container>\n\n    <ng-template #chipsTemplate>\n      <ng-container *ngIf=\"selectedItemsChips$ | async as chips\">\n        <prizm-chips\n          #chipsComponent\n          *ngIf=\"chips.length\"\n          [class.inner]=\"!outer\"\n          [singleLine]=\"true\"\n          [deletable]=\"!disabled && isChipsDeletable\"\n          [chips]=\"chips\"\n          (removeChipEvent)=\"removeChip($event)\"\n        ></prizm-chips>\n      </ng-container>\n    </ng-template>\n\n    <ng-container prizm-input-right>\n      <ng-container\n        *polymorphOutlet=\"icon || defaultIcon as iconName; context: { opened: open, disabled: disabled }\"\n      >\n        <prizm-icon\n          *ngIf=\"!disabled\"\n          [class.opened]=\"open\"\n          [class.active]=\"focusableElementRef.focused\"\n          [class.icon-dropdown]=\"iconName === defaultIcon\"\n          [iconClass]=\"$any(iconName)\"\n          (click)=\"focusableElementRef.focus()\"\n        >\n        </prizm-icon>\n      </ng-container>\n    </ng-container>\n\n    <!--    <prizm-icon-->\n    <!--      *ngIf=\"!disabled\"-->\n    <!--      (click)=\"focusableElementRef.focus()\"-->\n    <!--      [class.active]=\"focusableElementRef.focused\"-->\n    <!--      [class.opened]=\"open\"-->\n    <!--      class=\"icon-dropdown\"-->\n    <!--      prizm-input-right-->\n    <!--      iconClass=\"chevrons-dropdown\"-->\n    <!--    ></prizm-icon>-->\n  </prizm-input-layout>\n\n  <ng-template #dropdown>\n    <prizm-data-list class=\"block\" [scroll]=\"dropdownScroll\" [style.--prizm-data-list-border]=\"0\">\n      <div class=\"list-search-item\" *ngIf=\"searchable\">\n        <prizm-input-layout size=\"m\" label=\"\u041F\u043E\u0438\u0441\u043A\">\n          <input class=\"input-search\" #input [formControl]=\"searchInputControl\" prizmInput prizmAutoFocus />\n          <button [interactive]=\"true\" prizmInputIconButton=\"sort-zoom-in\" prizm-input-right></button>\n        </prizm-input-layout>\n      </div>\n      <ng-container *ngIf=\"$.filteredItems?.length; else emptyTemplate\">\n        <div\n          class=\"item\"\n          #parent\n          *ngFor=\"let item of $.filteredItems; let idx = index\"\n          [class.selected]=\"item.checked\"\n          [class.most-relevant]=\"searchable && searchInputControl.value && idx === 0\"\n        >\n          <prizm-checkbox\n            [ngModel]=\"item.checked\"\n            [ngModelOptions]=\"{ standalone: true }\"\n            [checked]=\"item.checked\"\n            [host]=\"parent\"\n            [indeterminate]=\"!!item.indeterminate\"\n            (changed)=\"select(item)\"\n          >\n            <div\n              class=\"text\"\n              #elem\n              *prizmLet=\"item | prizmCallFunc : stringify : $any(emptyContent) as text\"\n              [prizmHint]=\"text\"\n              [prizmHintDirection]=\"direction\"\n              [prizmHintCanShow]=\"$any(elem | prizmCallFunc : prizmIsTextOverflow$ | async)\"\n            >\n              <ng-container\n                *polymorphOutlet=\"\n                  valueTemplate as content;\n                  context: {\n                    $implicit: {\n                      obj: item.obj,\n                      checked: item.checked,\n                      stringify: item | prizmCallFunc : stringify\n                    }\n                  } as context\n                \"\n              >\n                {{ text }}\n              </ng-container>\n            </div>\n          </prizm-checkbox>\n        </div>\n      </ng-container>\n      <ng-template #emptyTemplate>\n        <ng-container *polymorphOutlet=\"emptyContent as data\">\n          <div class=\"empty-template\">{{ emptyContent }}</div>\n        </ng-container>\n      </ng-template>\n    </prizm-data-list>\n  </ng-template>\n</prizm-dropdown-host>\n", styles: [":host{position:relative;z-index:0;display:inline-block}.item{display:flex;align-items:center;padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));cursor:pointer;font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);gap:var(--prizm-select-item-gap, 8px);color:var(--prizm-select-item-text, var(--prizm-text-contrast, #20222b))}.item .text{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item.selected,.item.most-relevant{background:var(--prizm-select-item-selected-background, var(--prizm-lite-b130-20))}.item.selected .text,.item.most-relevant .text{color:var(--prizm-text-contrast)}.item:not(.selected):not(.most-relevant):hover{background:var(--prizm-select-item-hover-background, var(--prizm-g2-g11));color:var(--prizm-text-contrast)}.block{background:var(--prizm-select-background, var(--prizm-bg-body));border-radius:2px;border:none;padding:var(--prizm-select-padding, 8px 0)}.input-chips[readonly]{cursor:pointer}.empty-template{padding:var(--prizm-select-item-padding, 8px 16px);background:var(--prizm-select-item-background, var(--prizm-bg-body));font-weight:var(--prizm-select-item-font-weight, 400);font-size:var(--prizm-select-item-font-size, 14px);color:var(--prizm-select-empty-text, var(--prizm-text-subscript, #20222b))}.icon-dropdown{color:#777b92;cursor:pointer;transition-property:transform;transition-property:all;transition-property:color,transform;transition-duration:var(--prizm-duration, .3s);transition-timing-function:ease-in-out}.icon-dropdown.active{color:#337eff}.icon-dropdown.opened{transform:rotate(180deg)}.list-search-item{padding:var(--prizm-select-item-padding, 8px 16px)}.list-search-item prizm-input-layout{width:100%}prizm-checkbox{max-width:calc(100% - 8px)}.in-body-chips-box{display:flex;align-items:center;height:100%}.hidden{display:none}prizm-chips.inner{margin-bottom:8px}\n"], dependencies: [{ kind: "ngmodule", type: PrizmOverlayModule }, { kind: "ngmodule", type: PolymorphModule }, { kind: "directive", type: i1.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "component", type: i3.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i4.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: i5.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmChipsModule }, { kind: "component", type: i6.PrizmChipsComponent, selector: "prizm-chips", inputs: ["size", "chips", "deletable", "singleLine", "hintCanShow", "hintDirection"], outputs: ["addChipEvent", "removeChipEvent", "clickChipEvent"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i7.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i7.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: PrizmLetModule }, { kind: "directive", type: i8.PrizmLetDirective, selector: "[prizmLet]", inputs: ["prizmLet"], exportAs: ["prizmLet"] }, { kind: "ngmodule", type: PrizmHintModule }, { kind: "directive", type: i9.PrizmHintDirective, selector: "[prizmHint]:not(ng-container)", inputs: ["prizmAutoReposition", "prizmHintDirection", "prizmHintId", "prizmHintTheme", "prizmHintShowDelay", "prizmHintHideDelay", "prizmHintHost", "prizmHintContext", "prizmHintCanShow", "prizmHint"], outputs: ["prizmHintShowed"], exportAs: ["prizmHint"] }, { kind: "ngmodule", type: PrizmIconModule }, { kind: "component", type: i10.PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "ngmodule", type: PrizmCallFuncModule }, { kind: "pipe", type: i8.PrizmCallFuncPipe, name: "prizmCallFunc" }, { kind: "ngmodule", type: PrizmAutoFocusModule }, { kind: "directive", type: i11.PrizmAutoFocusDirective, selector: "[prizmAutoFocus]", inputs: ["autoFocus"] }, { kind: "ngmodule", type: PrizmScrollbarModule }, { kind: "ngmodule", type: PrizmDropdownControllerModule }, { kind: "directive", type: i12.PrizmDropdownControllerDirective, selector: "[prizmDropdownMinHeight], [prizmDropdownMaxHeight], [prizmDropdownAlign], [prizmDropdownLimitWidth]", inputs: ["prizmDropdownMinHeight", "prizmDropdownAlign", "prizmDropdownLimitWidth", "prizmDropdownMaxHeight"] }, { kind: "ngmodule", type: PrizmDataListModule }, { kind: "component", type: i13.PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "ngmodule", type: PrizmCheckboxModule }, { kind: "component", type: i14.PrizmCheckboxComponent, selector: "prizm-checkbox", inputs: ["size", "indeterminate", "host", "disabled", "checked"], outputs: ["changed"] }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i15.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: PrizmDropdownHostModule }, { kind: "component", type: i16.PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmMultiSelectComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd25zL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bnMvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBRVYsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsY0FBYyxHQUNmLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRyxPQUFPLEVBRUwsZUFBZSxFQUNmLG9CQUFvQixFQUNwQiw2QkFBNkIsRUFDN0IsZUFBZSxFQUNmLG9CQUFvQixHQUNyQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSwwQkFBMEIsRUFBMkIsTUFBTSx3QkFBd0IsQ0FBQztBQU03RixPQUFPLEVBQTJDLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPdkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLGlCQUFpQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJEOzs7OztLQUtLO0FBb0NMLE1BQU0sT0FBTyx5QkFDWCxTQUFRLG9CQUF5QjtJQVNqQyxJQUFhLEtBQUssQ0FBQyxJQUFTO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLElBQVksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBZ0xELFlBQ3VELE9BQW1DLEVBSXhGLE9BQXlCLEVBQ1QsS0FBd0IsRUFDYixpQkFBb0M7UUFFL0QsS0FBSyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBUm1CLFlBQU8sR0FBUCxPQUFPLENBQTRCO1FBS3hFLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBbEwxQyxtQkFBYyxHQUE2QixNQUFNLENBQUM7UUFJbEQsU0FBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBSXpCLGtCQUFhLEdBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFJckQsZUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBSXJDLGVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUlyQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBSWpELFVBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUkzQixzQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBSW5ELGtCQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFJM0Msc0JBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUluRCxnQkFBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBSXZDLFNBQUksR0FBbUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFJekMsa0JBQWEsR0FBcUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFJN0UsaUJBQVksR0FBcUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFFM0QsK0JBQStCO1FBRy9CLGNBQVMsR0FBeUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFJekUsb0JBQWUsR0FBdUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFJbkYsa0JBQWEsR0FDWCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUk1QixVQUFLLEdBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFbEIsWUFBTyxHQUFHLGtCQUFrQixDQUFDO1FBRy9CLGdCQUFXLEdBQUcsbUJBQW1CLENBQUM7UUFDekMseUJBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsY0FBUyxHQUFpQyw0QkFBNEIsQ0FBQyxLQUFLLENBQUM7UUFFdEYsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNKLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyx5QkFBb0IsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDaEQsdUJBQWtCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQzlDLGlCQUFZLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxFQUFjLENBQUMsQ0FBQztRQUU3RCxtQkFBYyxHQUFxRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUk7UUFDakcsNkRBQTZEO1FBQzdELGFBQWE7UUFDYixTQUFTLENBQUMsR0FBRyxFQUFFLENBQ2IsYUFBYSxDQUFDO1lBQ1osSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pFLENBQUMsQ0FDSCxFQUNELFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBZ0IsRUFBRSxFQUFFO1lBQ3hELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDVixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztvQkFBRSxPQUFPLEtBQUssQ0FBQztnQkFDcEYsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMvRCxPQUFPLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1RSxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtnQkFDakIsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQU8sRUFBRSxFQUFFO29CQUN4QyxPQUFPO3dCQUNMLE9BQU8sRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUNoRixHQUFHLEVBQUUsSUFBSTtxQkFDNEIsQ0FBQztnQkFDMUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7Z0JBQ3pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztnQkFDMUMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2dCQUN6RCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztnQkFFbkUsT0FBTztvQkFDTCxHQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUM5RCxPQUFPLEVBQUUsT0FBTyxLQUFLLGFBQWE7d0JBQ2xDLGFBQWEsRUFBRSxhQUFhLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTt3QkFDN0QsR0FBRyxFQUFFLElBQUk7cUJBQ1YsQ0FBQyxDQUEwQztvQkFDNUMsR0FBRyxXQUFXO2lCQUNmLENBQUM7WUFDSixDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDNUQsQ0FBQyxDQUFDLEVBQ0YsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNoQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVPLG1CQUFjLEdBQW9CLElBQUksQ0FBQyxjQUFjO2FBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1QyxJQUFJLENBQ0gsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNiLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDakMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ25CLENBQUMsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQ3JGLElBQUksRUFBRSxDQUNSLENBQUM7WUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQ0YsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7UUFFSyxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWEsQ0FBQztRQUNoQyx3QkFBbUIsR0FBeUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzNFLEdBQUcsQ0FBQyxDQUFDLGFBQWtCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RCLE1BQU0sTUFBTSxHQUNWLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ3pCLE9BQU8sRUFBRSxJQUFJO29CQUNiLEdBQUcsRUFBRSxDQUFDO2lCQUNQLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRVgsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLEVBQ0YsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7UUFFSyxrQkFBYSxHQUF5QyxFQUFFLENBQUM7SUFhaEUsQ0FBQztJQUVRLFFBQVE7UUFDZixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWM7YUFDaEIsSUFBSSxDQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQVksRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlELHNDQUFzQztZQUN0QyxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25FLENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQ3BDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLCtCQUErQjtRQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksa0JBQWtCO1lBQzVDLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBNkIsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2lCQUNyRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDOUIsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLDhCQUE4QjtRQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksa0JBQWtCO1lBQzVDLHVCQUF1QixDQUFDLFVBQVUsQ0FDaEMsSUFBSSxDQUFDLE9BQTZCLEVBQ2xDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFDZCxJQUFJLEVBQ0osSUFBSSxDQUFDLG9CQUFvQixDQUMxQjtpQkFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDOUIsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLDRCQUE0QjtRQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksa0JBQWtCO1lBQzVDLHVCQUF1QixDQUFDLGlCQUFpQixDQUN2QyxJQUFJLENBQUMsT0FBNkIsRUFDbEMsS0FBSyxFQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FDMUI7aUJBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFJLHNCQUFzQjtRQUN4QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVFLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVTLGdCQUFnQjtRQUN4QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTyxlQUFlLENBQUMsSUFBd0M7UUFDOUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUF3QztRQUNwRCxNQUFNLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxNQUFXLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLE1BQU0sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUM5QzthQUFNO1lBQ0wsTUFBTSxHQUFHLFlBQVk7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFTSxhQUFhO1FBQ2xCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSTtZQUNQLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQ1YsSUFBSSxDQUFDLFdBQVc7Z0JBQ2hCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQywwREFBMEQ7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0REFBNEQ7SUFDckQsbUJBQW1CLENBQUMsS0FBYSxFQUFFLE1BQWE7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSztZQUFFLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFTSxVQUFVLENBQUMsR0FBVztRQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ1YsT0FBTyxFQUFFLElBQUk7WUFDYixHQUFHLEVBQUUsSUFBSTtTQUM0QixDQUFDLENBQUM7SUFDM0MsQ0FBQzs7c0hBclRVLHlCQUF5QixrQkFnTTFCLDBCQUEwQixhQUcxQixTQUFTLDBFQUdULGlCQUFpQjswR0F0TWhCLHlCQUF5QiwybEJBOUJ6QjtRQUNULG1CQUFtQjtRQUNuQjtZQUNFLE9BQU8sRUFBRSw2QkFBNkI7WUFDdEMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6RDtLQUNGLDhIQTRCeUMsVUFBVSxnTUN0R3RELHFyS0EySUEsbytERC9ESSxrQkFBa0IsOEJBQ2xCLGVBQWUseU1BQ2Ysb0JBQW9CLDZ5Q0FDcEIsZ0JBQWdCLGtRQUNoQixXQUFXLDhtQkFDWCxtQkFBbUIsaU5BQ25CLFlBQVksOEJBQ1osY0FBYyx1SkFDZCxlQUFlLDhYQUNmLGVBQWUsMElBQ2YsbUJBQW1CLG1HQUNuQixvQkFBb0IsNklBQ3BCLG9CQUFvQiw4QkFDcEIsNkJBQTZCLGlVQUM3QixtQkFBbUIsOEtBQ25CLG1CQUFtQiwyTUFDbkIsb0JBQW9CLCtUQUNwQix1QkFBdUI7QUFzQnpCO0lBQ0MsZ0JBQWdCLEVBQUU7O2lFQUMrQjtBQUVsRDtJQUNDLGdCQUFnQixFQUFFOzt1REFDTTtBQUV6QjtJQUNDLGdCQUFnQixFQUFFOztnRUFDa0M7QUFFckQ7SUFDQyxnQkFBZ0IsRUFBRTs7NkRBQ2tCO0FBRXJDO0lBQ0MsZ0JBQWdCLEVBQUU7OzZEQUNrQjtBQUVyQztJQUNDLGdCQUFnQixFQUFFOzttRUFDOEI7QUFFakQ7SUFDQyxnQkFBZ0IsRUFBRTs7d0RBQ1E7QUFFM0I7SUFDQyxnQkFBZ0IsRUFBRTs7b0VBQ2dDO0FBRW5EO0lBQ0MsZ0JBQWdCLEVBQUU7O2dFQUN3QjtBQUUzQztJQUNDLGdCQUFnQixFQUFFOztvRUFDZ0M7QUFFbkQ7SUFDQyxnQkFBZ0IsRUFBRTs7OERBQ29CO0FBRXZDO0lBQ0MsZ0JBQWdCLEVBQUU7O3VEQUNzQjtBQUV6QztJQUNDLGdCQUFnQixFQUFFOztnRUFDMEQ7QUFFN0U7SUFDQyxnQkFBZ0IsRUFBRTs7K0RBQ3dDO0FBRzNEO0lBQ0MsZ0JBQWdCLEVBQUU7OzREQUNzRDtBQUV6RTtJQUNDLGdCQUFnQixFQUFFOztrRUFDZ0U7QUFFbkY7SUFDQyxnQkFBZ0IsRUFBRTs7Z0VBRVM7QUFFNUI7SUFDQyxnQkFBZ0IsRUFBRTs7d0RBQ2lCOzJGQXpGekIseUJBQXlCO2tCQW5DckMsU0FBUzsrQkFDRSxvQkFBb0IsbUJBR2IsdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVCxtQkFBbUI7d0JBQ25COzRCQUNFLE9BQU8sRUFBRSw2QkFBNkI7NEJBQ3RDLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLDBCQUEwQixDQUFDO3lCQUN6RDtxQkFDRixXQUNRO3dCQUNQLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsNkJBQTZCO3dCQUM3QixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQix1QkFBdUI7cUJBQ3hCLGNBQ1csSUFBSSxZQUNOLHFCQUFxQjs7MEJBa001QixNQUFNOzJCQUFDLDBCQUEwQjs7MEJBQ2pDLFFBQVE7OzBCQUNSLElBQUk7OzBCQUNKLE1BQU07MkJBQUMsU0FBUzs7MEJBR2hCLE1BQU07MkJBQUMsaUJBQWlCOzRDQWpNWCxnQkFBZ0I7c0JBRC9CLFNBQVM7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUl0QyxtQkFBbUI7c0JBRGxDLFNBQVM7dUJBQUMsaUJBQWlCO2dCQUdmLEtBQUs7c0JBQWpCLEtBQUs7Z0JBU04sY0FBYztzQkFGYixLQUFLO2dCQU1OLElBQUk7c0JBRkgsS0FBSztnQkFNTixhQUFhO3NCQUZaLEtBQUs7Z0JBTU4sVUFBVTtzQkFGVCxLQUFLO2dCQU1OLFVBQVU7c0JBRlQsS0FBSztnQkFNTixnQkFBZ0I7c0JBRmYsS0FBSztnQkFNTixLQUFLO3NCQUZKLEtBQUs7Z0JBTU4saUJBQWlCO3NCQUZoQixLQUFLO2dCQU1OLGFBQWE7c0JBRlosS0FBSztnQkFNTixpQkFBaUI7c0JBRmhCLEtBQUs7Z0JBTU4sV0FBVztzQkFGVixLQUFLO2dCQU1OLElBQUk7c0JBRkgsS0FBSztnQkFNTixhQUFhO3NCQUZaLEtBQUs7Z0JBTU4sWUFBWTtzQkFGWCxLQUFLO2dCQU9OLFNBQVM7c0JBRlIsS0FBSztnQkFNTixlQUFlO3NCQUZkLEtBQUs7Z0JBTU4sYUFBYTtzQkFGWixLQUFLO2dCQU9OLEtBQUs7c0JBRkosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQcml6bUNhbGxGdW5jTW9kdWxlLFxuICBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICBQcml6bUZvcm1Db250cm9sSGVscGVycyxcbiAgUHJpem1MZXRNb2R1bGUsXG59IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBOZ0NvbnRyb2wsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIFBvbHltb3JwaENvbnRlbnQsXG4gIFBvbHltb3JwaE1vZHVsZSxcbiAgUHJpem1BdXRvRm9jdXNNb2R1bGUsXG4gIFByaXptRHJvcGRvd25Db250cm9sbGVyTW9kdWxlLFxuICBQcml6bUhpbnRNb2R1bGUsXG4gIFByaXptTGlmZWN5Y2xlTW9kdWxlLFxufSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFBSSVpNX01VTFRJX1NFTEVDVF9PUFRJT05TLCBQcml6bU11bHRpU2VsZWN0T3B0aW9ucyB9IGZyb20gJy4vbXVsdGktc2VsZWN0Lm9wdGlvbnMnO1xuaW1wb3J0IHtcbiAgUHJpem1Db250ZXh0V2l0aEltcGxpY2l0LFxuICBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3NvcixcbiAgUHJpem1OYXRpdmVGb2N1c2FibGVFbGVtZW50LFxufSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBQcml6bUlucHV0U2l6ZSwgUHJpem1JbnB1dFRleHRDb21wb25lbnQsIFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vLi4vaW5wdXQnO1xuaW1wb3J0IHsgQWJzdHJhY3RQcml6bUNvbnRyb2wgfSBmcm9tICcuLi8uLi8uLi9hYnN0cmFjdC9jb250cm9sJztcbmltcG9ydCB7IHByaXptSXNOYXRpdmVGb2N1c2VkLCBwcml6bUlzVGV4dE92ZXJmbG93JCB9IGZyb20gJy4uLy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBtYXAsIHNoYXJlUmVwbGF5LCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBSSVpNX0ZPQ1VTQUJMRV9JVEVNX0FDQ0VTU09SIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCwgUHJpem1Ecm9wZG93bkhvc3RNb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi1ob3N0JztcbmltcG9ydCB7XG4gIFByaXptTXVsdGlTZWxlY3RJZGVudGl0eU1hdGNoZXIsXG4gIFByaXptTXVsdGlTZWxlY3RJdGVtU3RyaW5naWZ5RnVuYyxcbiAgUHJpem1NdWx0aVNlbGVjdEl0ZW1XaXRoQ2hlY2tlZCxcbiAgUHJpem1NdWx0aVNlbGVjdFNlYXJjaE1hdGNoZXIsXG59IGZyb20gJy4vbXVsdGktc2VsZWN0Lm1vZGVsJztcbmltcG9ydCB7IFByaXptT3ZlcmxheU91dHNpZGVQbGFjZW1lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL292ZXJsYXkvbW9kZWxzJztcbmltcG9ydCB7IFByaXptU2Nyb2xsYmFyTW9kdWxlLCBQcml6bVNjcm9sbGJhclZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9zY3JvbGxiYXInO1xuaW1wb3J0IHsgUHJpem1PdmVybGF5TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcyc7XG5pbXBvcnQgeyBQcml6bUNoaXBzTW9kdWxlIH0gZnJvbSAnLi4vLi4vY2hpcHMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaXptSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2ljb24nO1xuaW1wb3J0IHsgUHJpem1EYXRhTGlzdE1vZHVsZSB9IGZyb20gJy4uLy4uL2RhdGEtbGlzdCc7XG5pbXBvcnQgeyBQcml6bUNoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vLi4vY2hlY2tib3gnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiB1c2Ugb25seSBQcml6bU11bHRpU2VsZWN0SW5wdXRDb21wb25lbnRcbiAqIHdpbGwgYmUgcmVtb3ZlZCBhZnRlciBuZyAxNSB1cGRhdGVcbiAqIGZvciBhdXRvIHVwZGF0ZSB1c2Ugb3VyIG1pZ3JhdG9yIGh0dHBzOi8vcHJpem0uc2l0ZS9mb3JaSUlvVC91cGRhdGUtZnJvbS1iZXRhXG4gKiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tbXVsdGktc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL211bHRpLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL211bHRpLXNlbGVjdC5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJpem1EZXN0cm95U2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUklaTV9GT0NVU0FCTEVfSVRFTV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFByaXptTXVsdGlTZWxlY3RDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBQcml6bU92ZXJsYXlNb2R1bGUsXG4gICAgUG9seW1vcnBoTW9kdWxlLFxuICAgIFByaXptSW5wdXRUZXh0TW9kdWxlLFxuICAgIFByaXptQ2hpcHNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1MZXRNb2R1bGUsXG4gICAgUHJpem1IaW50TW9kdWxlLFxuICAgIFByaXptSWNvbk1vZHVsZSxcbiAgICBQcml6bUNhbGxGdW5jTW9kdWxlLFxuICAgIFByaXptQXV0b0ZvY3VzTW9kdWxlLFxuICAgIFByaXptU2Nyb2xsYmFyTW9kdWxlLFxuICAgIFByaXptRHJvcGRvd25Db250cm9sbGVyTW9kdWxlLFxuICAgIFByaXptRGF0YUxpc3RNb2R1bGUsXG4gICAgUHJpem1DaGVja2JveE1vZHVsZSxcbiAgICBQcml6bUxpZmVjeWNsZU1vZHVsZSxcbiAgICBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgZXhwb3J0QXM6ICdwcml6bURyb3Bkb3duU2VsZWN0Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1NdWx0aVNlbGVjdENvbXBvbmVudDxUPlxuICBleHRlbmRzIEFic3RyYWN0UHJpem1Db250cm9sPFRbXT5cbiAgaW1wbGVtZW50cyBQcml6bUZvY3VzYWJsZUVsZW1lbnRBY2Nlc3Nvclxue1xuICBAVmlld0NoaWxkKCdmb2N1c2FibGVFbGVtZW50UmVmJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHB1YmxpYyByZWFkb25seSBmb2N1c2FibGVFbGVtZW50PzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25Ib3N0UmVmJylcbiAgcHVibGljIHJlYWRvbmx5IGRyb3Bkb3duSG9zdEVsZW1lbnQ/OiBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudDtcblxuICBASW5wdXQoKSBzZXQgaXRlbXMoZGF0YTogVFtdKSB7XG4gICAgdGhpcy5pdGVtcyQubmV4dCgoZGF0YSBhcyBhbnkpID8/IFtdKTtcbiAgfVxuICBnZXQgaXRlbXMoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcyQudmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRyb3Bkb3duU2Nyb2xsOiBQcml6bVNjcm9sbGJhclZpc2liaWxpdHkgPSAnYXV0byc7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBpY29uID0gdGhpcy5vcHRpb25zLmljb247XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzZWxlY3RBbGxJdGVtOiBUIHwgbnVsbCA9IHRoaXMub3B0aW9ucy5jaG9vc2VBbGxJdGVtO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2VhcmNoYWJsZSA9IHRoaXMub3B0aW9ucy5zZWFyY2hhYmxlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgZm9yY2VDbGVhciA9IHRoaXMub3B0aW9ucy5mb3JjZUNsZWFyO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgaXNDaGlwc0RlbGV0YWJsZSA9IHRoaXMub3B0aW9ucy5pc0NoaXBzRGVsZXRhYmxlO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgbGFiZWwgPSB0aGlzLm9wdGlvbnMubGFiZWw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBtaW5Ecm9wZG93bkhlaWdodCA9IHRoaXMub3B0aW9ucy5taW5Ecm9wZG93bkhlaWdodDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGRyb3Bkb3duV2lkdGggPSB0aGlzLm9wdGlvbnMuZHJvcGRvd25XaWR0aDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG1heERyb3Bkb3duSGVpZ2h0ID0gdGhpcy5vcHRpb25zLm1heERyb3Bkb3duSGVpZ2h0O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcGxhY2Vob2xkZXIgPSB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBzaXplOiBQcml6bUlucHV0U2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2VhcmNoTWF0Y2hlcjogUHJpem1NdWx0aVNlbGVjdFNlYXJjaE1hdGNoZXI8VD4gPSB0aGlzLm9wdGlvbnMuc2VhcmNoTWF0Y2hlcjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGVtcHR5Q29udGVudDogUG9seW1vcnBoQ29udGVudCA9IHRoaXMub3B0aW9ucy5lbXB0eUNvbnRlbnQ7XG5cbiAgLyoqIG5lZWQgb25seSBjbGVhciBmdW5jdGlvbiAqL1xuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHN0cmluZ2lmeTogUHJpem1NdWx0aVNlbGVjdEl0ZW1TdHJpbmdpZnlGdW5jPFQ+ID0gdGhpcy5vcHRpb25zLnN0cmluZ2lmeTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGlkZW50aXR5TWF0Y2hlcjogUHJpem1NdWx0aVNlbGVjdElkZW50aXR5TWF0Y2hlcjxUPiA9IHRoaXMub3B0aW9ucy5pZGVudGl0eU1hdGNoZXI7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICB2YWx1ZVRlbXBsYXRlOiBQb2x5bW9ycGhDb250ZW50PFByaXptQ29udGV4dFdpdGhJbXBsaWNpdDxQcml6bU11bHRpU2VsZWN0SXRlbVdpdGhDaGVja2VkPFQ+Pj4gPVxuICAgIHRoaXMub3B0aW9ucy52YWx1ZUNvbnRlbnQ7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdXRlcjogYm9vbGVhbiA9IHRoaXMub3B0aW9ucy5vdXRlcjtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpLW11aWx0aS1zZWxlY3QnO1xuXG4gIHB1YmxpYyBpbnB1dFRleHRFbGVtZW50ITogUHJpem1JbnB1dFRleHRDb21wb25lbnQgfCBudWxsO1xuICBwdWJsaWMgcmVhZG9ubHkgZGVmYXVsdEljb24gPSAnY2hldnJvbnMtZHJvcGRvd24nO1xuICByZWFkb25seSBwcml6bUlzVGV4dE92ZXJmbG93JCA9IHByaXptSXNUZXh0T3ZlcmZsb3ckO1xuICBwdWJsaWMgcmVhZG9ubHkgZGlyZWN0aW9uOiBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50ID0gUHJpem1PdmVybGF5T3V0c2lkZVBsYWNlbWVudC5SSUdIVDtcblxuICBwdWJsaWMgb3BlbiA9IGZhbHNlO1xuICBwdWJsaWMgcmVhZG9ubHkgaXRlbXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHB1YmxpYyByZWFkb25seSByZXF1aXJlZElucHV0Q29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHJlYWRvbmx5IHNlYXJjaElucHV0Q29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHJlYWRvbmx5IGNoaXBzQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woW10gYXMgc3RyaW5nW10pO1xuXG4gIHJlYWRvbmx5IGZpbHRlcmVkSXRlbXMkOiBPYnNlcnZhYmxlPFByaXptTXVsdGlTZWxlY3RJdGVtV2l0aENoZWNrZWQ8VD5bXT4gPSB0aGlzLmNvbnRyb2xSZWFkeSQucGlwZShcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKHN0YXJ0V2l0aCgnJykpLFxuICAgICAgICB0aGlzLmludGVybmFsVmFsdWUkLnBpcGUoZGVib3VuY2VUaW1lKDApLCBzdGFydFdpdGgodGhpcy52YWx1ZSkpLFxuICAgICAgXSlcbiAgICApLFxuICAgIHN3aXRjaE1hcCgoW3NlYXJjaFZhbHVlLCBzZWxlY3RlZEl0ZW1zXTogW3N0cmluZywgVFtdXSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMkLnBpcGUoXG4gICAgICAgIG1hcChpdGVtcyA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaGFibGUgfHwgIXNlYXJjaFZhbHVlPy50b1N0cmluZygpLnJlcGxhY2UoL1sgXSsvZywgJycpKSByZXR1cm4gaXRlbXM7XG4gICAgICAgICAgc2VhcmNoVmFsdWUgPSB0aGlzLnNlYXJjaFZhbHVlID0gc2VhcmNoVmFsdWUudG9TdHJpbmcoKS50cmltKCk7XG4gICAgICAgICAgcmV0dXJuIGl0ZW1zPy5maWx0ZXIoaXRlbSA9PiB0aGlzLnNlYXJjaE1hdGNoZXIoc2VhcmNoVmFsdWUsIGl0ZW0pKSA/PyBbXTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcCgoaXRlbXM6IFRbXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdEl0ZW1zID0gaXRlbXMubWFwKChpdGVtOiBUKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjaGVja2VkOiAhIXNlbGVjdGVkSXRlbXM/LmZpbmQoc2VsZWN0ZWQgPT4gdGhpcy5pZGVudGl0eU1hdGNoZXIoc2VsZWN0ZWQsIGl0ZW0pKSxcbiAgICAgICAgICAgICAgb2JqOiBpdGVtLFxuICAgICAgICAgICAgfSBhcyBQcml6bU11bHRpU2VsZWN0SXRlbVdpdGhDaGVja2VkPFQ+O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ291bnQgPSB0aGlzLnZhbHVlPy5sZW5ndGg7XG4gICAgICAgICAgY29uc3QgYWxsSXRlbSA9IHRoaXMuaXRlbXMkLnZhbHVlPy5sZW5ndGg7XG4gICAgICAgICAgY29uc3QgY3VycmVudGx5U2VhcmNoaW5nID0gdGhpcy5zZWFyY2hJbnB1dENvbnRyb2wudmFsdWU7XG4gICAgICAgICAgY29uc3QgYWRkU2VsZWN0QWxsSXRlbSA9IHRoaXMuc2VsZWN0QWxsSXRlbSAmJiAhY3VycmVudGx5U2VhcmNoaW5nO1xuXG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLigoYWRkU2VsZWN0QWxsSXRlbSA/IFt0aGlzLnNlbGVjdEFsbEl0ZW1dIDogW10pLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgICAgIGNoZWNrZWQ6IGFsbEl0ZW0gPT09IHNlbGVjdGVkQ291bnQsXG4gICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IHNlbGVjdGVkQ291bnQgJiYgYWxsSXRlbSAhPT0gdGhpcy52YWx1ZS5sZW5ndGgsXG4gICAgICAgICAgICAgIG9iajogaXRlbSxcbiAgICAgICAgICAgIH0pKSBhcyBQcml6bU11bHRpU2VsZWN0SXRlbVdpdGhDaGVja2VkPFQ+W10pLFxuICAgICAgICAgICAgLi4uc2VsZWN0SXRlbXMsXG4gICAgICAgICAgXTtcbiAgICAgICAgfSksXG4gICAgICAgIHRhcChpdGVtcyA9PiB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgdGhpcy5kcm9wZG93bkhvc3RFbGVtZW50Py5yZUNhbGN1bGF0ZVBvc2l0aW9ucygxMDAwIC8gNjApO1xuICAgICAgICB9KSxcbiAgICAgICAgZGVib3VuY2VUaW1lKDApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgcmVhZG9ubHkgc2VsZWN0ZWRJdGVtcyQ6IE9ic2VydmFibGU8VFtdPiA9IHRoaXMuaW50ZXJuYWxWYWx1ZSRcbiAgICAucGlwZShkZWJvdW5jZVRpbWUoMCksIHN0YXJ0V2l0aCh0aGlzLnZhbHVlKSlcbiAgICAucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSB0aGlzLnZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcyQucGlwZShcbiAgICAgICAgICBtYXAoaXRlbXMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgaXRlbXM/LmZpbHRlcihpdGVtID0+XG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkSXRlbXMgPz8gW10pLmZpbmQoc2VsZWN0ZWRJdGVtID0+IHRoaXMuaWRlbnRpdHlNYXRjaGVyKHNlbGVjdGVkSXRlbSwgaXRlbSkpXG4gICAgICAgICAgICAgICkgPz8gW11cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICApO1xuXG4gIHJlYWRvbmx5IGNoaXBzU2V0ID0gbmV3IE1hcDxzdHJpbmcsIFQ+KCk7XG4gIHJlYWRvbmx5IHNlbGVjdGVkSXRlbXNDaGlwcyQ6IE9ic2VydmFibGU8c3RyaW5nW10+ID0gdGhpcy5zZWxlY3RlZEl0ZW1zJC5waXBlKFxuICAgIG1hcCgoc2VsZWN0ZWRJdGVtczogVFtdKSA9PiB7XG4gICAgICB0aGlzLmNoaXBzU2V0LmNsZWFyKCk7XG4gICAgICBjb25zdCByZXN1bHQgPVxuICAgICAgICBzZWxlY3RlZEl0ZW1zPy5tYXAoaSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9iajogaSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuY2hpcHNTZXQuc2V0KHN0ciwgaSk7XG4gICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfSkgPz8gW107XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSksXG4gICAgc2hhcmVSZXBsYXkoMSlcbiAgKTtcblxuICBwdWJsaWMgZmlsdGVyZWRJdGVtczogUHJpem1NdWx0aVNlbGVjdEl0ZW1XaXRoQ2hlY2tlZDxUPltdID0gW107XG4gIHByaXZhdGUgc2VhcmNoVmFsdWUhOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQUklaTV9NVUxUSV9TRUxFQ1RfT1BUSU9OUykgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBQcml6bU11bHRpU2VsZWN0T3B0aW9uczxUPixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTZWxmKClcbiAgICBASW5qZWN0KE5nQ29udHJvbClcbiAgICBjb250cm9sOiBOZ0NvbnRyb2wgfCBudWxsLFxuICAgIHB1YmxpYyByZWFkb25seSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKGNvbnRyb2wsIGNoYW5nZURldGVjdG9yUmVmKTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5pbml0Q29udHJvbFN0YXR1c0NoYW5nZXJJZkV4aXN0KCk7XG4gICAgdGhpcy5pbml0Q29udHJvbFZhbHVlQ2hhbmdlcklmRXhpc3QoKTtcbiAgICB0aGlzLmluaXRDb250cm9sVmFsaWRhdG9yc0lmRXhpc3QoKTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKGl0ZW1zID0+IHtcbiAgICAgICAgICB0aGlzLmNoaXBzQ29udHJvbC5zZXRWYWx1ZShpdGVtcyBhcyBhbnksIHsgZW1pdEV2ZW50OiB0cnVlIH0pO1xuICAgICAgICAgIC8vIFRPRE8gcmVtb3ZlIGFmdGVyIGFkZCB1cGRhdGUgaW5wdXRzXG4gICAgICAgICAgaWYgKHRoaXMuaW5wdXRUZXh0RWxlbWVudCkgdGhpcy5pbnB1dFRleHRFbGVtZW50Lm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRhcCgoKSA9PiB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRDb250cm9sU3RhdHVzQ2hhbmdlcklmRXhpc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCBpbnN0YW5jZW9mIFVudHlwZWRGb3JtQ29udHJvbClcbiAgICAgIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNTdGF0ZXModGhpcy5jb250cm9sIGFzIFVudHlwZWRGb3JtQ29udHJvbCwgZmFsc2UsIHRoaXMucmVxdWlyZWRJbnB1dENvbnRyb2wpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q29udHJvbFZhbHVlQ2hhbmdlcklmRXhpc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29udHJvbCBpbnN0YW5jZW9mIFVudHlwZWRGb3JtQ29udHJvbClcbiAgICAgIFByaXptRm9ybUNvbnRyb2xIZWxwZXJzLnN5bmNWYWx1ZXMoXG4gICAgICAgIHRoaXMuY29udHJvbCBhcyBVbnR5cGVkRm9ybUNvbnRyb2wsXG4gICAgICAgIGkgPT4gaT8ubGVuZ3RoLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLnJlcXVpcmVkSW5wdXRDb250cm9sXG4gICAgICApXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q29udHJvbFZhbGlkYXRvcnNJZkV4aXN0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbnRyb2wgaW5zdGFuY2VvZiBVbnR5cGVkRm9ybUNvbnRyb2wpXG4gICAgICBQcml6bUZvcm1Db250cm9sSGVscGVycy5zeW5jQWxsVmFsaWRhdG9ycyhcbiAgICAgICAgdGhpcy5jb250cm9sIGFzIFVudHlwZWRGb3JtQ29udHJvbCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRoaXMucmVxdWlyZWRJbnB1dENvbnRyb2xcbiAgICAgIClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXQgbmF0aXZlRm9jdXNhYmxlRWxlbWVudCgpOiBQcml6bU5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50ID8gdGhpcy5mb2N1c2FibGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByaXptSXNOYXRpdmVGb2N1c2VkKHRoaXMubmF0aXZlRm9jdXNhYmxlRWxlbWVudCk7XG4gIH1cblxuICBwdWJsaWMgb25DbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2w/LnNldFZhbHVlKG51bGwpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEZhbGxiYWNrVmFsdWUoKTogVFtdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcml2YXRlIGlzU2VsZWN0QWxsSXRlbShpdGVtOiBQcml6bU11bHRpU2VsZWN0SXRlbVdpdGhDaGVja2VkPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5zZWxlY3RBbGxJdGVtICYmIHRoaXMuaWRlbnRpdHlNYXRjaGVyKHRoaXMuc2VsZWN0QWxsSXRlbSwgaXRlbS5vYmopKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3QoaXRlbTogUHJpem1NdWx0aVNlbGVjdEl0ZW1XaXRoQ2hlY2tlZDxUPik6IHZvaWQge1xuICAgIGNvbnN0IG5ld0l0ZW1TdGF0ZSA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgbGV0IHZhbHVlczogVFtdO1xuICAgIGlmICh0aGlzLmlzU2VsZWN0QWxsSXRlbShpdGVtKSkge1xuICAgICAgdmFsdWVzID0gbmV3SXRlbVN0YXRlID8gWy4uLnRoaXMuaXRlbXNdIDogW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlcyA9IG5ld0l0ZW1TdGF0ZVxuICAgICAgICA/IFsuLi4odGhpcy52YWx1ZSA/PyBbXSksIGl0ZW0ub2JqXVxuICAgICAgICA6IHRoaXMudmFsdWUuZmlsdGVyKGkgPT4gIXRoaXMuaWRlbnRpdHlNYXRjaGVyKGksIGl0ZW0ub2JqKSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZXMpO1xuICAgIHRoaXMuZHJvcGRvd25Ib3N0RWxlbWVudD8ucmVDYWxjdWxhdGVQb3NpdGlvbnMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzYWZlT3Blbk1vZGFsKCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IHRoaXMuZm9jdXNhYmxlRWxlbWVudD8ubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnNlYXJjaElucHV0Q29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgdGhpcy5vcGVuID1cbiAgICAgICF0aGlzLm9wZW4gJiZcbiAgICAgIHRoaXMuaW50ZXJhY3RpdmUgJiZcbiAgICAgICEhaW5wdXRFbGVtZW50OyAvKiYmICh0aGlzLm91dGVyIHx8IHByaXptSXNOYXRpdmVGb2N1c2VkKGlucHV0RWxlbWVudCkpOyovXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8vIFRPRE8gcmVtb3ZlIGFmdGVyIGZpbmlzaCBhY3RpdmV6b25lIHRvIGRyb3Bkb3duIGNvbXBvbmVudFxuICBwdWJsaWMgc2FmZVN0b3BQcm9wYWdhdGlvbih2YWx1ZTogc3RyaW5nLCAkZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICBpZiAoIXZhbHVlKSAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQ2hpcChzdHI6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNoaXBzU2V0LmdldChzdHIpO1xuICAgIHRoaXMuc2VsZWN0KHtcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICBvYmo6IGl0ZW0sXG4gICAgfSBhcyBQcml6bU11bHRpU2VsZWN0SXRlbVdpdGhDaGVja2VkPFQ+KTtcbiAgfVxufVxuIiwiPHByaXptLWRyb3Bkb3duLWhvc3RcbiAgI2Ryb3Bkb3duSG9zdFJlZlxuICAqcHJpem1MZXQ9XCJ7IHNlbGVjdGVkSXRlbXM6IHNlbGVjdGVkSXRlbXMkIHwgYXN5bmMsIGZpbHRlcmVkSXRlbXM6IGZpbHRlcmVkSXRlbXMkIHwgYXN5bmMgfSBhcyAkXCJcbiAgWyhpc09wZW4pXT1cIm9wZW5cIlxuICBbY29udGVudF09XCJkcm9wZG93blwiXG4gIFtwcml6bURyb3Bkb3duSG9zdFdpZHRoXT1cImRyb3Bkb3duV2lkdGhcIlxuICBbcHJpem1Ecm9wZG93bk1pbkhlaWdodF09XCJtaW5Ecm9wZG93bkhlaWdodFwiXG4gIFtwcml6bURyb3Bkb3duTWF4SGVpZ2h0XT1cIm1heERyb3Bkb3duSGVpZ2h0XCJcbj5cbiAgPHByaXptLWlucHV0LWxheW91dFxuICAgIFtsYWJlbF09XCJsYWJlbFwiXG4gICAgW2ZvcmNlQ2xlYXJdPVwiKGZvcmNlQ2xlYXIgfHwgZm9yY2VDbGVhciA9PT0gbnVsbCkgJiYgJC5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDBcIlxuICAgIFtvdXRlcl09XCJvdXRlclwiXG4gICAgW3NpemVdPVwic2l6ZVwiXG4gICAgW25nU3dpdGNoXT1cIm91dGVyXCJcbiAgICAoY2xlYXIpPVwiZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1cygpOyBzYWZlU3RvcFByb3BhZ2F0aW9uKGZvY3VzYWJsZUVsZW1lbnRSZWYudmFsdWUsICRldmVudClcIlxuICAgIChjbGljayk9XCJzYWZlT3Blbk1vZGFsKClcIlxuICA+XG4gICAgPGlucHV0XG4gICAgICAjZm9jdXNhYmxlRWxlbWVudFJlZlxuICAgICAgI2lucHV0VGV4dD1cInByaXptSW5wdXRcIlxuICAgICAgW3N0eWxlLmRpc3BsYXldPVwib3V0ZXIgPyAnbm9uZScgOiAnJ1wiXG4gICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJvdXRlciA/ICdub25lJyA6ICdoaWRkZW4nXCJcbiAgICAgIFtoaWRkZW5dPVwidHJ1ZVwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW3JlYWRvbmx5XT1cInRydWVcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJyZXF1aXJlZElucHV0Q29udHJvbFwiXG4gICAgICAocHJpem1PbkluaXQpPVwiaW5wdXRUZXh0RWxlbWVudCA9IGlucHV0VGV4dFwiXG4gICAgICAob25DbGVhcik9XCJvbkNsZWFyKClcIlxuICAgICAgcHJpem1JbnB1dFxuICAgIC8+XG4gICAgPGRpdiBjbGFzcz1cImluLWJvZHktY2hpcHMtYm94XCIgKm5nU3dpdGNoQ2FzZT1cInRydWVcIiBwcml6bS1pbnB1dC1pbi1ib2R5PlxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjaGlwc1RlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJmYWxzZVwiIHByaXptLWlucHV0LWJvdHRvbT5cbiAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2hpcHNUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLXRlbXBsYXRlICNjaGlwc1RlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkSXRlbXNDaGlwcyQgfCBhc3luYyBhcyBjaGlwc1wiPlxuICAgICAgICA8cHJpem0tY2hpcHNcbiAgICAgICAgICAjY2hpcHNDb21wb25lbnRcbiAgICAgICAgICAqbmdJZj1cImNoaXBzLmxlbmd0aFwiXG4gICAgICAgICAgW2NsYXNzLmlubmVyXT1cIiFvdXRlclwiXG4gICAgICAgICAgW3NpbmdsZUxpbmVdPVwidHJ1ZVwiXG4gICAgICAgICAgW2RlbGV0YWJsZV09XCIhZGlzYWJsZWQgJiYgaXNDaGlwc0RlbGV0YWJsZVwiXG4gICAgICAgICAgW2NoaXBzXT1cImNoaXBzXCJcbiAgICAgICAgICAocmVtb3ZlQ2hpcEV2ZW50KT1cInJlbW92ZUNoaXAoJGV2ZW50KVwiXG4gICAgICAgID48L3ByaXptLWNoaXBzPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy1jb250YWluZXIgcHJpem0taW5wdXQtcmlnaHQ+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpwb2x5bW9ycGhPdXRsZXQ9XCJpY29uIHx8IGRlZmF1bHRJY29uIGFzIGljb25OYW1lOyBjb250ZXh0OiB7IG9wZW5lZDogb3BlbiwgZGlzYWJsZWQ6IGRpc2FibGVkIH1cIlxuICAgICAgPlxuICAgICAgICA8cHJpem0taWNvblxuICAgICAgICAgICpuZ0lmPVwiIWRpc2FibGVkXCJcbiAgICAgICAgICBbY2xhc3Mub3BlbmVkXT1cIm9wZW5cIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiZm9jdXNhYmxlRWxlbWVudFJlZi5mb2N1c2VkXCJcbiAgICAgICAgICBbY2xhc3MuaWNvbi1kcm9wZG93bl09XCJpY29uTmFtZSA9PT0gZGVmYXVsdEljb25cIlxuICAgICAgICAgIFtpY29uQ2xhc3NdPVwiJGFueShpY29uTmFtZSlcIlxuICAgICAgICAgIChjbGljayk9XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzKClcIlxuICAgICAgICA+XG4gICAgICAgIDwvcHJpem0taWNvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSAgICA8cHJpem0taWNvbi0tPlxuICAgIDwhLS0gICAgICAqbmdJZj1cIiFkaXNhYmxlZFwiLS0+XG4gICAgPCEtLSAgICAgIChjbGljayk9XCJmb2N1c2FibGVFbGVtZW50UmVmLmZvY3VzKClcIi0tPlxuICAgIDwhLS0gICAgICBbY2xhc3MuYWN0aXZlXT1cImZvY3VzYWJsZUVsZW1lbnRSZWYuZm9jdXNlZFwiLS0+XG4gICAgPCEtLSAgICAgIFtjbGFzcy5vcGVuZWRdPVwib3BlblwiLS0+XG4gICAgPCEtLSAgICAgIGNsYXNzPVwiaWNvbi1kcm9wZG93blwiLS0+XG4gICAgPCEtLSAgICAgIHByaXptLWlucHV0LXJpZ2h0LS0+XG4gICAgPCEtLSAgICAgIGljb25DbGFzcz1cImNoZXZyb25zLWRyb3Bkb3duXCItLT5cbiAgICA8IS0tICAgID48L3ByaXptLWljb24+LS0+XG4gIDwvcHJpem0taW5wdXQtbGF5b3V0PlxuXG4gIDxuZy10ZW1wbGF0ZSAjZHJvcGRvd24+XG4gICAgPHByaXptLWRhdGEtbGlzdCBjbGFzcz1cImJsb2NrXCIgW3Njcm9sbF09XCJkcm9wZG93blNjcm9sbFwiIFtzdHlsZS4tLXByaXptLWRhdGEtbGlzdC1ib3JkZXJdPVwiMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxpc3Qtc2VhcmNoLWl0ZW1cIiAqbmdJZj1cInNlYXJjaGFibGVcIj5cbiAgICAgICAgPHByaXptLWlucHV0LWxheW91dCBzaXplPVwibVwiIGxhYmVsPVwi0J/QvtC40YHQulwiPlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0LXNlYXJjaFwiICNpbnB1dCBbZm9ybUNvbnRyb2xdPVwic2VhcmNoSW5wdXRDb250cm9sXCIgcHJpem1JbnB1dCBwcml6bUF1dG9Gb2N1cyAvPlxuICAgICAgICAgIDxidXR0b24gW2ludGVyYWN0aXZlXT1cInRydWVcIiBwcml6bUlucHV0SWNvbkJ1dHRvbj1cInNvcnQtem9vbS1pblwiIHByaXptLWlucHV0LXJpZ2h0PjwvYnV0dG9uPlxuICAgICAgICA8L3ByaXptLWlucHV0LWxheW91dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiQuZmlsdGVyZWRJdGVtcz8ubGVuZ3RoOyBlbHNlIGVtcHR5VGVtcGxhdGVcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICAgI3BhcmVudFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mICQuZmlsdGVyZWRJdGVtczsgbGV0IGlkeCA9IGluZGV4XCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbS5jaGVja2VkXCJcbiAgICAgICAgICBbY2xhc3MubW9zdC1yZWxldmFudF09XCJzZWFyY2hhYmxlICYmIHNlYXJjaElucHV0Q29udHJvbC52YWx1ZSAmJiBpZHggPT09IDBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHByaXptLWNoZWNrYm94XG4gICAgICAgICAgICBbbmdNb2RlbF09XCJpdGVtLmNoZWNrZWRcIlxuICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cIml0ZW0uY2hlY2tlZFwiXG4gICAgICAgICAgICBbaG9zdF09XCJwYXJlbnRcIlxuICAgICAgICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiISFpdGVtLmluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgKGNoYW5nZWQpPVwic2VsZWN0KGl0ZW0pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dFwiXG4gICAgICAgICAgICAgICNlbGVtXG4gICAgICAgICAgICAgICpwcml6bUxldD1cIml0ZW0gfCBwcml6bUNhbGxGdW5jIDogc3RyaW5naWZ5IDogJGFueShlbXB0eUNvbnRlbnQpIGFzIHRleHRcIlxuICAgICAgICAgICAgICBbcHJpem1IaW50XT1cInRleHRcIlxuICAgICAgICAgICAgICBbcHJpem1IaW50RGlyZWN0aW9uXT1cImRpcmVjdGlvblwiXG4gICAgICAgICAgICAgIFtwcml6bUhpbnRDYW5TaG93XT1cIiRhbnkoZWxlbSB8IHByaXptQ2FsbEZ1bmMgOiBwcml6bUlzVGV4dE92ZXJmbG93JCB8IGFzeW5jKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqcG9seW1vcnBoT3V0bGV0PVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZVRlbXBsYXRlIGFzIGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICRpbXBsaWNpdDoge1xuICAgICAgICAgICAgICAgICAgICAgIG9iajogaXRlbS5vYmosXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogaXRlbS5jaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeTogaXRlbSB8IHByaXptQ2FsbEZ1bmMgOiBzdHJpbmdpZnlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBhcyBjb250ZXh0XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IHRleHQgfX1cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3ByaXptLWNoZWNrYm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLXRlbXBsYXRlICNlbXB0eVRlbXBsYXRlPlxuICAgICAgICA8bmctY29udGFpbmVyICpwb2x5bW9ycGhPdXRsZXQ9XCJlbXB0eUNvbnRlbnQgYXMgZGF0YVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eS10ZW1wbGF0ZVwiPnt7IGVtcHR5Q29udGVudCB9fTwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9wcml6bS1kYXRhLWxpc3Q+XG4gIDwvbmctdGVtcGxhdGU+XG48L3ByaXptLWRyb3Bkb3duLWhvc3Q+XG4iXX0=