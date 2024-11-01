import { ChangeDetectorRef, Directive, ElementRef, inject, Injector, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, NgModel, Validators } from '@angular/forms';
import { PrizmInputControl } from './input-control.class';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { map, takeUntil, tap } from 'rxjs/operators';
import { PrizmInputLayoutComponent } from '../input-layout';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { PrizmControlValueTransformer } from '../../../../types';
import { PRIZM_EMPTY_FUNCTION } from '@prizm-ui/core';

@Directive()
export abstract class PrizmInputNgControl<T>
  extends PrizmInputControl<T>
  implements OnInit, ControlValueAccessor
{
  protected readonly elRef_ = inject(ElementRef<HTMLInputElement>);
  readonly destroy$!: PrizmDestroyService;
  ngControl!: NgControl;
  readonly changeDetectorRef!: ChangeDetectorRef;
  readonly layoutComponent?: PrizmInputLayoutComponent | null;
  private previousInternalValue$$ = new BehaviorSubject<T | null>(null);
  onChange: (val: T) => void = PRIZM_EMPTY_FUNCTION;
  onTouch: () => void = PRIZM_EMPTY_FUNCTION;
  protected readonly focusableElement?: ElementRef<HTMLInputElement> | any;

  get value(): T {
    return this.previousInternalValue$$.value ?? (this.fallbackValue as T);
  }

  public fallbackValue: T | null = null;

  get safeCurrentValue(): T {
    return this.rawValue ?? (this.fallbackValue as T);
  }

  get empty(): boolean | Observable<boolean> {
    return this.isEmpty(this.value);
  }

  get value$(): Observable<T> {
    return this.previousInternalValue$$.asObservable().pipe(map(i => i ?? this.fallbackValue)) as any;
  }

  public isEmpty(value: T): boolean {
    return !value && !this.focusableElement?.nativeElement?.value;
  }

  get required() {
    // for work Validators.required
    if (this.ngControl.control?.hasValidator(Validators.required)) return true;

    // for work [required] attributes
    const validator = this.ngControl?.validator;
    if (!validator) {
      return false;
    }

    const validation = validator({} as AbstractControl);
    // eslint-disable-next-line no-prototype-builtins
    return Boolean(validation && validation.hasOwnProperty('required'));
  }

  get disabled() {
    return !!this.ngControl?.disabled;
  }

  /** Whether the control is validity. */
  get invalid() {
    return !!this.ngControl?.invalid;
  }

  /** Whether the control is validity. */
  get touched() {
    return !!this.ngControl?.touched;
  }

  protected constructor(
    protected readonly injector: Injector,
    readonly valueTransformer?: PrizmControlValueTransformer<T> | null
  ) {
    super();

    this.destroy$ = this.injector.get(PrizmDestroyService);
    this.changeDetectorRef = this.injector.get(ChangeDetectorRef);
    this.layoutComponent = this.injector.get(PrizmInputLayoutComponent, null);
  }

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);

    this.initFocusListeners();

    console.assert(
      !!this.ngControl,
      `NgControl not injected in ${this.constructor.name}!\n`,
      'Use [(ngModel)] or [formControl] or formControlName for correct work.'
    );

    this.ngControl?.statusChanges
      ?.pipe(
        tap(i => this.stateChanges.next()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  protected initFocusListeners(): void {
    merge(fromEvent(this.elRef_.nativeElement, 'focusout'), fromEvent(this.elRef_.nativeElement, 'focusin'))
      .pipe(
        tap(() => this.stateChanges.next()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  protected valueIdenticalComparator(oldValue: T, newValue: T): boolean {
    return oldValue === newValue;
  }

  protected updateValue(value: T): void {
    if (this.disabled || this.valueIdenticalComparator(this.value, value)) {
      return;
    }
    this.previousInternalValue$$.next(value);
    this.controlSetValue(value);
  }

  public clear(ev: MouseEvent) {
    this.updateValue(null as any);
  }

  public setDisabledState(isDisabled: boolean) {
    this.checkControlUpdate();
    this.stateChanges.next();
  }

  public registerOnChange(onChange: (v: T) => void): void {
    this.onChange = (componentValue: T): void => {
      onChange(this.toControlValue(componentValue) as T);
    };
  }

  public registerOnTouched(fn: () => void) {
    this.onTouch = fn;
  }

  public writeValue(value: T): void {
    const controlValue =
      this.ngControl instanceof NgModel && this.previousInternalValue$$.value === undefined
        ? this.ngControl.model
        : value;

    this.refreshLocalValue(this.fromControlValue(controlValue));
    // sync on change
    this.stateChanges.next();
  }

  private refreshLocalValue(value: T | null): void {
    this.previousInternalValue$$.next(value);
    this.checkControlUpdate();
  }

  protected updateFocused(focused: boolean): void {
    if (!focused) {
      this.controlMarkAsTouched();
    }
  }

  protected controlMarkAsTouched(): void {
    this.onTouch();
    this.checkControlUpdate();
  }

  private controlSetValue(value: T): void {
    this.onChange(value);
    this.checkControlUpdate();
  }

  public checkControlUpdate(): void {
    this.changeDetectorRef.markForCheck();
  }

  private get rawValue(): T | undefined {
    const { ngControl } = this;

    if (ngControl === null) {
      return undefined;
    }

    const controlValue =
      ngControl instanceof NgModel /*&& this.previousInternalValue === undefined*/
        ? ngControl.viewModel
        : ngControl.value;

    return this.fromControlValue(controlValue);
  }

  private fromControlValue(controlValue: unknown): T {
    return this.valueTransformer
      ? this.valueTransformer?.fromControlValue(controlValue)
      : (controlValue as T);
  }

  private toControlValue(componentValue: T): unknown {
    return this.valueTransformer ? this.valueTransformer?.toControlValue(componentValue) : componentValue;
  }

  public markAsTouched(): void {
    this.onTouch();
  }
}
