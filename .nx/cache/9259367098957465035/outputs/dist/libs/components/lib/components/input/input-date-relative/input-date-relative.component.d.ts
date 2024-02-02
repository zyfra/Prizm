import { AfterViewInit, ChangeDetectorRef, ElementRef, Injector, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { PrizmInputSize } from '../common/models/prizm-input.models';
import { RelativeDateDirectionId, RelativeDateMenuItem, RelativeDatePeriodId, RelativeDateTimeId } from './input-date-relative.models';
import { PrizmDateButton } from '../../../types/date-button';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import * as i0 from "@angular/core";
export declare class PrizmInputDateRelativeComponent extends PrizmAbstractTestId implements AfterViewInit, OnInit, ControlValueAccessor, OnDestroy {
    readonly injector: Injector;
    private readonly cdr;
    readonly focusableElement?: ElementRef<HTMLInputElement>;
    label: string;
    placeholder: string;
    forceClear: boolean | null;
    set disabled(value: boolean);
    get disabled(): boolean;
    showClear: boolean;
    canOpen: boolean;
    outer: boolean;
    size: PrizmInputSize;
    extraButtonInjector: Injector;
    readonly testId_ = "ui_input_date_relative";
    isOpen: boolean;
    value: UntypedFormControl;
    timeItems: RelativeDateMenuItem<RelativeDateTimeId>[];
    directionItems: RelativeDateMenuItem<RelativeDateDirectionId>[];
    periodItems: RelativeDateMenuItem<RelativeDatePeriodId>[];
    private activeTimeId;
    private activeDirectionId;
    private activePeriodId;
    private activeNumber;
    onChangeFn: (_: unknown) => unknown;
    onTouched: VoidFunction;
    private readonly subscriptions;
    rightButtons$: BehaviorSubject<PrizmDateButton[]>;
    constructor(injector: Injector, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    writeValue(value: number): void;
    registerOnChange(fn: (_: unknown) => void): void;
    registerOnTouched(fn: VoidFunction): void;
    setDisabledState(isDisabled: boolean): void;
    clearValue(): void;
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
    onClear(): void;
    /**
     * Actualize menu items, as radio group button
     */
    private actualizeMenu;
    onOpenChange(state: boolean): void;
    safeOpenModal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputDateRelativeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputDateRelativeComponent, "prizm-input-date-relative", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "forceClear": { "alias": "forceClear"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showClear": { "alias": "showClear"; "required": false; }; "canOpen": { "alias": "canOpen"; "required": false; }; "outer": { "alias": "outer"; "required": false; }; "size": { "alias": "size"; "required": false; }; "extraButtonInjector": { "alias": "extraButtonInjector"; "required": false; }; }, {}, never, never, false, never>;
}
