import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { Compare } from '@prizm-ui/helpers';
import { NgControl, UntypedFormControl } from '@angular/forms';
import { PolymorphContent } from '../../../directives';
import { PrizmSelectOptions, PrizmSelectValueContext } from './select.options';
import { PrizmFocusableElementAccessor, PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputSize, PrizmInputTextComponent } from '../../input';
import { AbstractPrizmControl } from '../../../abstract/control';
import { prizmIsTextOverflow$ } from '../../../util';
import { BehaviorSubject } from 'rxjs';
import { PrizmSelectIdentityMatcher, PrizmSelectSearchMatcher } from './select.model';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PrizmScrollbarVisibility } from '../../scrollbar';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use only PrizmSelectInputComponent
 * will be removed after ng 15 update
 * for auto update use our migrator https://prizm.site/forZIIoT/update-from-beta
 * */
export declare class PrizmSelectComponent<T> extends AbstractPrizmControl<T> implements PrizmFocusableElementAccessor {
    private readonly options;
    readonly focusableElement?: ElementRef<HTMLInputElement>;
    readonly dropdownHostElement?: PrizmDropdownHostComponent;
    set items(data: T[]);
    get items(): T[];
    dropdownScroll: PrizmScrollbarVisibility;
    searchable: boolean;
    forceClear: boolean | null;
    icon: PolymorphContent<import("./select.options").PrizmSelectIconContext>;
    label: string;
    minDropdownHeight: number;
    maxDropdownHeight: number;
    placeholder: string;
    dropdownWidth: string;
    size: PrizmInputSize;
    search: string | null;
    searchMatcher: PrizmSelectSearchMatcher<T>;
    emptyContent: PolymorphContent;
    nullContent: PolymorphContent;
    readonly prizmIsTextOverflow$: typeof prizmIsTextOverflow$;
    private readonly stop$;
    /**
     * need only clear function
     * */
    stringify: (i: T, content?: string) => any;
    identityMatcher: PrizmSelectIdentityMatcher<T>;
    valueTemplate: PolymorphContent<PrizmSelectValueContext<T>>;
    outer: boolean;
    readonly testId_ = "ui_select";
    readonly searchChange: EventEmitter<string | null>;
    inputTextElement: PrizmInputTextComponent | null;
    open: boolean;
    readonly direction: PrizmOverlayOutsidePlacement;
    readonly items$: BehaviorSubject<never[]>;
    readonly requiredInputControl: UntypedFormControl;
    readonly defaultIcon = "chevrons-dropdown";
    readonly filteredItems$: import("rxjs").Observable<never[]>;
    filteredItems: T[];
    private searchValue;
    readonly isNullish: typeof Compare.isNullish;
    constructor(options: PrizmSelectOptions<T>, control: NgControl | null, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private initControlValidatorsIfExist;
    private initControlStatusChangerIfExist;
    private initControlValueChangerIfExist;
    get nativeFocusableElement(): PrizmNativeFocusableElement | null;
    get focused(): boolean;
    onClear(): void;
    protected getFallbackValue(): T;
    select(item: T): void;
    safeOpenModal(): void;
    safeStopPropagation(value: string, $event: Event): void;
    isMostRelevant(idx: number, items: T[], wroteInputValue: string): boolean;
    private searchEmit;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSelectComponent<any>, [null, { optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmSelectComponent<any>, "prizm-select", ["prizmDropdownSelect"], { "items": { "alias": "items"; "required": false; }; "dropdownScroll": { "alias": "dropdownScroll"; "required": false; }; "searchable": { "alias": "searchable"; "required": false; }; "forceClear": { "alias": "forceClear"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "label": { "alias": "label"; "required": false; }; "minDropdownHeight": { "alias": "minDropdownHeight"; "required": false; }; "maxDropdownHeight": { "alias": "maxDropdownHeight"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "dropdownWidth": { "alias": "dropdownWidth"; "required": false; }; "size": { "alias": "size"; "required": false; }; "search": { "alias": "search"; "required": false; }; "searchMatcher": { "alias": "searchMatcher"; "required": false; }; "emptyContent": { "alias": "emptyContent"; "required": false; }; "nullContent": { "alias": "nullContent"; "required": false; }; "stringify": { "alias": "stringify"; "required": false; }; "identityMatcher": { "alias": "identityMatcher"; "required": false; }; "valueTemplate": { "alias": "valueTemplate"; "required": false; }; "outer": { "alias": "outer"; "required": false; }; }, { "searchChange": "searchChange"; }, never, never, true, never>;
}
