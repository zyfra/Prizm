import { ChangeDetectorRef, Directive, Injector, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, NgModel } from '@angular/forms';
import { PrizmInputControl } from './input-control.class';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { PrizmInputLayoutComponent } from '../input-layout';
import { noop } from 'rxjs';
import { PrizmControlValueTransformer } from '../../../../types';
import { concat, noop, Observable, of } from 'rxjs';

@Directive()
export abstract class PrizmInputNgControl<T>
  extends PrizmInputControl<T>
  implements OnInit, ControlValueAccessor
{
  readonly destroy$!: PrizmDestroyService;
  ngControl!: NgControl;
  readonly changeDetectorRef!: ChangeDetectorRef;
  readonly layoutComponent!: PrizmInputLayoutComponent;

  onChange: (val: T) => void = noop;
  onTouch: (val: T) => void = noop;

  private val: T = null;
  set value(val: T) {
    this.val = val ?? this.getFallbackValue();
    this.onChange(val);
    this.onTouch(val);
  }
  get value() {
    return this.val;
  }

  public fallbackValue: T | null = null;

  get safeCurrentValue(): T {
    return this.rawValue ?? this.fallbackValue;
  }

  get empty() {
    return this.isEmpty(this.value);
  }

  get value$(): Observable<T> {
    return concat(of(this.value), this.ngControl.valueChanges);
  }

  public isEmpty(value: T): boolean {
    return !value;
  }

  protected getFallbackValue(): T {
    return null;
  }

  get required() {
    const validator = this.ngControl?.validator;
    if (!validator) {
      return false;
    }

    const validation = validator({} as AbstractControl);
    // eslint-disable-next-line no-prototype-builtins
    return validation && validation.hasOwnProperty('required');
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
    private readonly injector: Injector,
    readonly valueTransformer?: PrizmControlValueTransformer<T> | null
  ) {
    super();

    this.destroy$ = this.injector.get(PrizmDestroyService);
    this.changeDetectorRef = this.injector.get(ChangeDetectorRef);
    this.layoutComponent = this.injector.get(PrizmInputLayoutComponent);
  }

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl);

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
  public updateValue(value: T) {
    this.ngControl.control.markAsTouched();
    this.value = value;
  }

  public clear(ev: MouseEvent) {
    this.updateValue(null);
  }

  public registerOnChange(onChange: any): void {
    // this.onChange = fn;
    this.onChange = (componentValue: T): void => {
      onChange(this.toControlValue(componentValue));
    };
  }

  public registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  public writeValue(value: T): void {
    this.value = this.fromControlValue(value);
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
    return this.valueTransformer ? this.valueTransformer.fromControlValue(controlValue) : (controlValue as T);
  }

  private toControlValue(componentValue: T): unknown {
    return this.valueTransformer ? this.valueTransformer.toControlValue(componentValue) : componentValue;
  }
}
