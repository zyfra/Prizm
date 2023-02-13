import {
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Provider,
  SimpleChanges,
  Type,
} from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgControl, NgModel } from '@angular/forms';
import { merge, ReplaySubject, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { AbstractPrizmInteractive } from './interactive';
import { PRIZM_EMPTY_FUNCTION, prizmAssert, prizmDefaultProp } from '@prizm-ui/core';
import { PrizmControlValueTransformer } from '../types/control-value-transformer';

/**
 * Basic ControlValueAccessor class to build form components upon
 */
@Directive()
export abstract class AbstractPrizmControl<T>
  extends AbstractPrizmInteractive
  implements OnDestroy, OnInit, OnChanges, ControlValueAccessor
{
  private previousInternalValue?: T | null;

  private onTouched = PRIZM_EMPTY_FUNCTION;

  private onChange = PRIZM_EMPTY_FUNCTION;

  protected readonly fallbackValue = this.getFallbackValue();

  protected readonly destroy$ = new Subject<void>();
  private readonly controlReadySource$ = new ReplaySubject<void>(1);
  public readonly controlReady$ = this.controlReadySource$.asObservable();

  @Input()
  @HostBinding('class._readonly')
  @prizmDefaultProp()
  readOnly = false;

  /**
   * @deprecated
   * later work only with form control value
   * */
  @Input()
  @prizmDefaultProp()
  val: T;

  @Input()
  @prizmDefaultProp()
  pseudoInvalid: boolean | null = null;

  /**
   * @deprecated
   * later work only with form control value
   * */
  @Output()
  readonly valChange = new EventEmitter<T>();

  protected constructor(
    private readonly ngControl: NgControl | null,
    protected readonly changeDetectorRef: ChangeDetectorRef,
    protected readonly valueTransformer?: PrizmControlValueTransformer<T> | null
  ) {
    super();

    if (this.ngControl === null) {
      prizmAssert.assert(
        false,
        `NgControl not injected in ${this.constructor.name}!\n`,
        'Use [(ngModel)] or [formControl] or formControlName for correct work.'
      );
      this.ngControl = new FormControl() as unknown as NgControl;
    } else {
      this.ngControl.valueAccessor = this;
    }
  }

  protected abstract getFallbackValue(): T;

  @HostBinding('class._invalid')
  get computedInvalid(): boolean {
    return (
      this.interactive && (this.pseudoInvalid != null ? this.pseudoInvalid : this.touched && this.invalid)
    );
  }

  get value(): T {
    return this.previousInternalValue ?? this.fallbackValue;
  }

  get safeCurrentValue(): T {
    return this.rawValue ?? this.fallbackValue;
  }

  get invalid(): boolean {
    return this.safeNgControlData<boolean>(({ invalid }) => invalid, false);
  }

  get valid(): boolean {
    return this.safeNgControlData<boolean>(({ valid }) => valid, false);
  }

  get touched(): boolean {
    return this.safeNgControlData<boolean>(({ touched }) => touched, false);
  }

  get disabled(): boolean {
    return this.safeNgControlData<boolean>(({ disabled }) => disabled, false);
  }

  get interactive(): boolean {
    return !this.readOnly && !this.computedDisabled;
  }

  get control(): AbstractControl | null {
    return this.safeNgControlData<AbstractControl | null>(({ control }) => control, null);
  }

  get computedName(): string | null {
    return this.controlName?.toString() ?? null;
  }

  protected get controlName(): string | null {
    return this.ngControl?.name?.toString() ?? null;
  }

  private get rawValue(): T | undefined {
    const { ngControl } = this;

    if (ngControl === null) {
      return undefined;
    }

    const controlValue =
      ngControl instanceof NgModel && this.previousInternalValue === undefined
        ? ngControl.viewModel
        : ngControl.value;

    return this.fromControlValue(controlValue);
  }

  ngOnInit(): void {
    if (!this.ngControl?.valueChanges || !this.ngControl?.statusChanges) {
      return;
    }
    this.controlReadySource$.next();

    merge(this.ngControl.valueChanges, this.ngControl.statusChanges)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.refreshLocalValue(this.safeCurrentValue));

    this.control?.valueChanges
      .pipe(
        map(() => this.control?.value),
        filter(currentValue => {
          return this.valueChanged(this.val, currentValue);
        }),
        tap(items => this.updateInputValue(items)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  /**
   * @deprecated
   * later work only with form control value
   * */
  private updateInputValue(value: T): void {
    if (!this.valueChanged(this.val, value)) return;
    this.valChange.next((this.val = value));
  }

  protected valueChanged(previousValue: T | null, currentValue: T | null): boolean {
    return previousValue !== currentValue;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.val) {
      this.updateValue(this.val);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public checkControlUpdate(): void {
    this.changeDetectorRef.markForCheck();
  }

  public registerOnChange(onChange: (value: T | unknown) => void): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.onChange = (componentValue: T): void => {
      onChange(this.toControlValue(componentValue));
    };
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(): void {
    this.checkControlUpdate();
  }

  public writeValue(value: T | null): void {
    const controlValue =
      this.ngControl instanceof NgModel && this.previousInternalValue === undefined
        ? this.ngControl.model
        : value;

    this.refreshLocalValue(this.fromControlValue(controlValue));
  }

  protected override updateFocused(focused: boolean): void {
    if (!focused) {
      this.controlMarkAsTouched();
    }

    super.updateFocused(focused);
  }

  protected updateValue(value: T): void {
    if (this.disabled || this.valueIdenticalComparator(this.value, value)) {
      return;
    }

    this.previousInternalValue = value;
    this.controlSetValue(value);
  }

  protected valueIdenticalComparator(oldValue: T, newValue: T): boolean {
    return oldValue === newValue;
  }

  private safeNgControlData<T>(
    extractor: (ngControl: NgControl) => T | null | undefined,
    defaultFieldValue: T
  ): T {
    return (this.ngControl && extractor(this.ngControl)) ?? defaultFieldValue;
  }

  private controlMarkAsTouched(): void {
    this.onTouched();
    this.checkControlUpdate();
  }

  private controlSetValue(value: T): void {
    this.onChange(value);
    this.updateInputValue(value);
    this.checkControlUpdate();
  }

  private refreshLocalValue(value: T | null): void {
    this.previousInternalValue = value;
    this.checkControlUpdate();
  }

  private fromControlValue(controlValue: unknown): T {
    return this.valueTransformer ? this.valueTransformer.fromControlValue(controlValue) : (controlValue as T);
  }

  private toControlValue(componentValue: T): unknown {
    return this.valueTransformer ? this.valueTransformer.toControlValue(componentValue) : componentValue;
  }
}

export function prizmAsControl<T>(useExisting: Type<AbstractPrizmControl<T>>): Provider {
  return {
    provide: AbstractPrizmControl,
    useExisting,
  };
}
