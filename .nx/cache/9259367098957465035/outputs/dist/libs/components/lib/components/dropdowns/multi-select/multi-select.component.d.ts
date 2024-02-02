import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { NgControl, UntypedFormControl } from '@angular/forms';
import { PolymorphContent } from '../../../directives';
import { PrizmMultiSelectOptions } from './multi-select.options';
import { PrizmContextWithImplicit, PrizmFocusableElementAccessor, PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputSize, PrizmInputTextComponent } from '../../input';
import { AbstractPrizmControl } from '../../../abstract/control';
import { prizmIsTextOverflow$ } from '../../../util';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import { PrizmMultiSelectIdentityMatcher, PrizmMultiSelectItemStringifyFunc, PrizmMultiSelectItemWithChecked, PrizmMultiSelectSearchMatcher } from './multi-select.model';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay/models';
import { PrizmScrollbarVisibility } from '../../scrollbar';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use only PrizmMultiSelectInputComponent
 * will be removed after ng 15 update
 * for auto update use our migrator https://prizm.site/forZIIoT/update-from-beta
 * */
export declare class PrizmMultiSelectComponent<T> extends AbstractPrizmControl<T[]> implements PrizmFocusableElementAccessor {
    private readonly options;
    readonly cdRef: ChangeDetectorRef;
    readonly focusableElement?: ElementRef<HTMLElement>;
    readonly dropdownHostElement?: PrizmDropdownHostComponent;
    set items(data: T[]);
    get items(): T[];
    dropdownScroll: PrizmScrollbarVisibility;
    icon: PolymorphContent<import("./multi-select.options").PrizmMultiSelectIconContext>;
    selectAllItem: T | null;
    searchable: boolean;
    forceClear: boolean | null;
    isChipsDeletable: boolean;
    label: string;
    minDropdownHeight: number;
    dropdownWidth: string;
    maxDropdownHeight: number;
    placeholder: string;
    size: PrizmInputSize;
    searchMatcher: PrizmMultiSelectSearchMatcher<T>;
    emptyContent: PolymorphContent;
    /** need only clear function */
    stringify: PrizmMultiSelectItemStringifyFunc<T>;
    identityMatcher: PrizmMultiSelectIdentityMatcher<T>;
    valueTemplate: PolymorphContent<PrizmContextWithImplicit<PrizmMultiSelectItemWithChecked<T>>>;
    outer: boolean;
    readonly testId_ = "ui-muilti-select";
    inputTextElement: PrizmInputTextComponent | null;
    readonly defaultIcon = "chevrons-dropdown";
    readonly prizmIsTextOverflow$: typeof prizmIsTextOverflow$;
    readonly direction: PrizmOverlayOutsidePlacement;
    open: boolean;
    readonly items$: BehaviorSubject<never[]>;
    readonly requiredInputControl: UntypedFormControl;
    readonly searchInputControl: UntypedFormControl;
    readonly chipsControl: UntypedFormControl;
    readonly filteredItems$: Observable<PrizmMultiSelectItemWithChecked<T>[]>;
    readonly selectedItems$: Observable<T[]>;
    readonly chipsSet: Map<string, T>;
    readonly selectedItemsChips$: Observable<string[]>;
    filteredItems: PrizmMultiSelectItemWithChecked<T>[];
    private searchValue;
    constructor(options: PrizmMultiSelectOptions<T>, control: NgControl | null, cdRef: ChangeDetectorRef, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    private initControlStatusChangerIfExist;
    private initControlValueChangerIfExist;
    private initControlValidatorsIfExist;
    get nativeFocusableElement(): PrizmNativeFocusableElement | null;
    get focused(): boolean;
    onClear(): void;
    protected getFallbackValue(): T[];
    private isSelectAllItem;
    select(item: PrizmMultiSelectItemWithChecked<T>): void;
    safeOpenModal(): void;
    safeStopPropagation(value: string, $event: Event): void;
    removeChip(str: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmMultiSelectComponent<any>, [null, { optional: true; self: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmMultiSelectComponent<any>, "prizm-multi-select", ["prizmDropdownSelect"], { "items": { "alias": "items"; "required": false; }; "dropdownScroll": { "alias": "dropdownScroll"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "selectAllItem": { "alias": "selectAllItem"; "required": false; }; "searchable": { "alias": "searchable"; "required": false; }; "forceClear": { "alias": "forceClear"; "required": false; }; "isChipsDeletable": { "alias": "isChipsDeletable"; "required": false; }; "label": { "alias": "label"; "required": false; }; "minDropdownHeight": { "alias": "minDropdownHeight"; "required": false; }; "dropdownWidth": { "alias": "dropdownWidth"; "required": false; }; "maxDropdownHeight": { "alias": "maxDropdownHeight"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "size": { "alias": "size"; "required": false; }; "searchMatcher": { "alias": "searchMatcher"; "required": false; }; "emptyContent": { "alias": "emptyContent"; "required": false; }; "stringify": { "alias": "stringify"; "required": false; }; "identityMatcher": { "alias": "identityMatcher"; "required": false; }; "valueTemplate": { "alias": "valueTemplate"; "required": false; }; "outer": { "alias": "outer"; "required": false; }; }, {}, never, never, true, never>;
}
