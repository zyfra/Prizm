import { ChangeDetectorRef, ElementRef, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { PrizmInputControl } from './input-control.class';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputLayoutComponent } from '../input-layout';
import { Observable } from 'rxjs';
import { PrizmControlValueTransformer } from '../../../../types';
import * as i0 from "@angular/core";
export declare abstract class PrizmInputNgControl<T> extends PrizmInputControl<T> implements OnInit, ControlValueAccessor {
    protected readonly injector: Injector;
    readonly valueTransformer?: PrizmControlValueTransformer<T, unknown> | null | undefined;
    protected readonly elRef_: ElementRef<any>;
    readonly destroy$: PrizmDestroyService;
    ngControl: NgControl;
    readonly changeDetectorRef: ChangeDetectorRef;
    readonly layoutComponent?: PrizmInputLayoutComponent | null;
    private previousInternalValue$$;
    onChange: (val: T) => void;
    onTouch: (val: T) => void;
    onTouched: (...args: unknown[]) => void;
    protected readonly focusableElement?: ElementRef<HTMLInputElement> | any;
    get value(): T;
    fallbackValue: T | null;
    get safeCurrentValue(): T;
    get empty(): boolean | Observable<boolean>;
    get value$(): Observable<T>;
    isEmpty(value: T): boolean;
    get required(): boolean;
    get disabled(): boolean;
    /** Whether the control is validity. */
    get invalid(): boolean;
    /** Whether the control is validity. */
    get touched(): boolean;
    protected constructor(injector: Injector, valueTransformer?: PrizmControlValueTransformer<T, unknown> | null | undefined);
    ngOnInit(): void;
    protected initFocusListeners(): void;
    protected valueIdenticalComparator(oldValue: T, newValue: T): boolean;
    protected updateValue(value: T): void;
    clear(ev: MouseEvent): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(onChange: any): void;
    registerOnTouched(fn: any): void;
    writeValue(value: T): void;
    private refreshLocalValue;
    protected updateFocused(focused: boolean): void;
    protected controlMarkAsTouched(): void;
    private controlSetValue;
    checkControlUpdate(): void;
    private get rawValue();
    private fromControlValue;
    private toControlValue;
    markAsTouched(): void;
    markAsDirty(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputNgControl<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputNgControl<any>, never, never, {}, {}, never, never, false, never>;
}
