import { ElementRef, Injector, OnDestroy, OnInit } from '@angular/core';
import { PrizmLanguageInputLayoutDateRelative } from '@prizm-ui/i18n';
import { BehaviorSubject, Observable } from 'rxjs';
import { RelativeDateDirectionId, RelativeDateMenuItem, RelativeDatePeriodId, RelativeDateTimeId } from './input-date-relative.models';
import { PrizmInputNgControl, PrizmInputStatusTextDirective } from '../common';
import { PrizmDateButton } from '../../../types';
import * as i0 from "@angular/core";
export declare class PrizmInputLayoutDateRelativeComponent extends PrizmInputNgControl<string | null> implements OnInit, OnDestroy {
    readonly dictionary$: Observable<PrizmLanguageInputLayoutDateRelative['inputLayoutDateRelative']>;
    readonly nativeElementType = "input-layout-date-relative";
    readonly hasClearButton = true;
    statusText: PrizmInputStatusTextDirective;
    readonly focusableElement?: ElementRef<HTMLInputElement>;
    placeholder: string;
    canOpen: boolean;
    extraButtonInjector: Injector;
    readonly testId_ = "ui_input_date_relative";
    isOpen: boolean;
    timeItems: RelativeDateMenuItem<RelativeDateTimeId>[];
    directionItems: RelativeDateMenuItem<RelativeDateDirectionId>[];
    periodItems: RelativeDateMenuItem<RelativeDatePeriodId>[];
    private activeTimeId;
    private activeDirectionId;
    private activePeriodId;
    private activeNumber;
    private activeWrongFormat;
    private readonly subscriptions;
    rightButtons$: BehaviorSubject<PrizmDateButton[]>;
    constructor(injector: Injector, dictionary$: Observable<PrizmLanguageInputLayoutDateRelative['inputLayoutDateRelative']>);
    ngOnInit(): void;
    valueChange(value: string): void;
    ngOnDestroy(): void;
    onMenuItemClick(event: MouseEvent, item: RelativeDateMenuItem): void;
    /**
     * Parses control input value
     */
    private parseInputValue;
    get nativeFocusableElement(): HTMLInputElement | null;
    get focused(): boolean;
    /**
     * Set control input as text
     */
    private actualizeInput;
    clear(ev: MouseEvent): void;
    /**
     * Actualize menu items, as radio group button
     */
    private actualizeMenu;
    onOpenChange(state: boolean): void;
    safeOpenModal(): void;
    private updateTouchedAndValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputLayoutDateRelativeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputLayoutDateRelativeComponent, "prizm-input-layout-date-relative", never, { "placeholder": "placeholder"; "canOpen": "canOpen"; "extraButtonInjector": "extraButtonInjector"; }, {}, never, never, true, never>;
}
