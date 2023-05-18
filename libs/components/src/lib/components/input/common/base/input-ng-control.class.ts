import { ChangeDetectorRef, Directive, Injector, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { PrizmInputControl } from './input-control.class';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';
import { PrizmInputLayoutComponent } from '../input-layout';
import { noop } from 'rxjs';

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
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }
  get value() {
    return this.val;
  }

  get empty() {
    return this.isEmpty(this.value);
  }

  public isEmpty(value: T): boolean {
    return !value;
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

  protected constructor(private readonly injector: Injector) {
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
    this.value = value;
  }

  public clear(ev: MouseEvent) {
    this.updateValue(null);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  public writeValue(value: T): void {
    this.value = value;
  }
}
