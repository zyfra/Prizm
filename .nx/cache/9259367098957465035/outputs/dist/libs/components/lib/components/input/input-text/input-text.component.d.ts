import { ChangeDetectorRef, DoCheck, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputLayoutComponent } from '../common';
import { NgxMaskDirective } from 'ngx-mask';
import * as i0 from "@angular/core";
export declare class PrizmInputTextComponent<VALUE extends string | number | null = string> extends PrizmInputControl<VALUE> implements DoCheck, OnInit, OnDestroy {
    readonly ngControl: NgControl;
    readonly elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
    private readonly destroy;
    private readonly cdr;
    get prizmHint(): VALUE;
    get disabled(): boolean;
    /**
     * @deprecated
     * Disabled input
     */
    set disabled(value: boolean);
    hidden: boolean;
    private _disabled;
    placeholder?: string;
    /**
     * @deprecated
     * Required input
     */
    get required(): boolean;
    set required(value: boolean);
    invalid: boolean;
    private _required;
    readonly testId_ = "ui_input_text";
    /**
     * Input value input
     */
    get value(): VALUE;
    /**
     * @deprecated
     * */
    set value(value: VALUE);
    private get _inputValue();
    enter: EventEmitter<any>;
    onClear: EventEmitter<MouseEvent>;
    valueChanged: EventEmitter<VALUE>;
    /**
     * Empty state
     */
    empty: boolean;
    readonly maybeMask: NgxMaskDirective;
    readonly parentLayout: PrizmInputLayoutComponent | null;
    /**
     * Focus state
     */
    focused: boolean;
    /**
     * Touched state
     */
    _touched: boolean;
    get touched(): boolean;
    hasClearButton: boolean;
    nativeElementType: string;
    private readonly inputHint;
    /**
     * Create instance
     */
    constructor(ngControl: NgControl, elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>, destroy: PrizmDestroyService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    private safeClearNgxMaskListener;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    private onInput;
    private onFocus;
    private onBlur;
    private onEnter;
    private initControlListener;
    private updateEmptyState;
    private updateErrorState;
    private updateValue;
    clear(event: MouseEvent): void;
    focus(): void;
    markControl(options: {
        touched?: boolean;
        dirty?: boolean;
    }): void;
    markAsTouched(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputTextComponent<any>, [{ optional: true; self: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputTextComponent<any>, "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", ["prizmInput"], { "disabled": { "alias": "disabled"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "required": { "alias": "required"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "enter": "enter"; "onClear": "onClear"; "valueChanged": "valueChanged"; }, never, never, true, never>;
}
