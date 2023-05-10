import { Directive, OnInit } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { PrizmInputControl } from './input-control.class';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil, tap } from 'rxjs/operators';

@Directive()
export abstract class PrizmInputNgControl<T> extends PrizmInputControl<T> implements OnInit {
  get value() {
    return this.ngControl.value;
  }

  get empty() {
    return this.isEmpty(this.value);
  }

  public isEmpty(value: T): boolean {
    return !value;
  }

  get required() {
    const validator = this.ngControl.validator;
    if (!validator) {
      return false;
    }

    const validation = validator({} as AbstractControl);
    // eslint-disable-next-line no-prototype-builtins
    return validation && validation.hasOwnProperty('required');
  }

  get disabled() {
    return this.ngControl.disabled;
  }

  /** Whether the control is validity. */
  get invalid() {
    return this.ngControl.invalid;
  }

  /** Whether the control is validity. */
  get touched() {
    return this.ngControl.touched;
  }

  ngOnInit(): void {
    this.ngControl?.statusChanges
      ?.pipe(
        tap(i => this.stateChanges.next()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  constructor(readonly destroy$: PrizmDestroyService, readonly ngControl: NgControl) {
    super();

    console.assert(
      !!this.ngControl,
      `NgControl not injected in ${this.constructor.name}!\n`,
      'Use [(ngModel)] or [formControl] or formControlName for correct work.'
    );
  }

  public updateValue(value: T) {
    this.ngControl.control.setValue(value);
  }

  public clear(ev: MouseEvent) {
    this.updateValue(null);
  }
}
