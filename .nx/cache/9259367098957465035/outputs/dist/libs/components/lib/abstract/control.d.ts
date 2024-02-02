import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, Provider, SimpleChanges, Type } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { AbstractPrizmInteractive } from './interactive';
import { PrizmControlValueTransformer } from '../types/control-value-transformer';
import * as i0 from "@angular/core";
/**
 * Basic ControlValueAccessor class to build form components upon
 */
export declare abstract class AbstractPrizmControl<T> extends AbstractPrizmInteractive implements OnDestroy, OnInit, OnChanges, ControlValueAccessor {
    private readonly ngControl;
    protected readonly changeDetectorRef: ChangeDetectorRef;
    protected readonly valueTransformer?: PrizmControlValueTransformer<T, unknown> | null | undefined;
    private previousInternalValue?;
    private readonly internalValue$$;
    readonly internalValue$: import("rxjs").Observable<T | null>;
    private onTouched;
    private onChange;
    protected readonly fallbackValue: T;
    protected readonly destroy$: Subject<void>;
    private readonly controlReadySource$;
    readonly controlReady$: import("rxjs").Observable<void>;
    readOnly: boolean;
    /**
     * @deprecated
     * later work only with form control value
     * */
    val: T;
    pseudoInvalid: boolean | null;
    /**
     * @deprecated
     * later work only with form control value
     * */
    readonly valChange: EventEmitter<T>;
    protected constructor(ngControl: NgControl | null, changeDetectorRef: ChangeDetectorRef, valueTransformer?: PrizmControlValueTransformer<T, unknown> | null | undefined);
    protected abstract getFallbackValue(): T;
    get computedInvalid(): boolean;
    get value(): T;
    get safeCurrentValue(): T;
    get invalid(): boolean;
    get valid(): boolean;
    get touched(): boolean;
    get disabled(): boolean;
    get interactive(): boolean;
    get control(): AbstractControl | null;
    get computedName(): string | null;
    protected get controlName(): string | null;
    private get rawValue();
    ngOnInit(): void;
    /**
     * @deprecated
     * later work only with form control value
     * */
    private updateInputValue;
    protected valueChanged(previousValue: T | null, currentValue: T | null): boolean;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    checkControlUpdate(): void;
    registerOnChange(onChange: (value: T | unknown) => void): void;
    registerOnTouched(onTouched: () => void): void;
    setDisabledState(): void;
    writeValue(value: T | null): void;
    protected updateFocused(focused: boolean): void;
    protected updateValue(value: T): void;
    protected valueIdenticalComparator(oldValue: T, newValue: T): boolean;
    private safeNgControlData;
    private controlMarkAsTouched;
    private controlSetValue;
    private refreshLocalValue;
    private fromControlValue;
    private toControlValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractPrizmControl<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AbstractPrizmControl<any>, never, never, { "readOnly": { "alias": "readOnly"; "required": false; }; "val": { "alias": "val"; "required": false; }; "pseudoInvalid": { "alias": "pseudoInvalid"; "required": false; }; }, { "valChange": "valChange"; }, never, never, false, never>;
}
export declare function prizmAsControl<T>(useExisting: Type<AbstractPrizmControl<T>>): Provider;
