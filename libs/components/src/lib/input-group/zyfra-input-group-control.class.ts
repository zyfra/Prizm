import { Directive } from '@angular/core';
import { AbstractControlDirective, NgControl } from '@angular/forms';

@Directive()
export abstract class ZyfraInputGroupControl<T> {
  /** The value of the control. */
  value: T | null;

  readonly empty: boolean;

  /** Gets the AbstractControlDirective for this control. */
  readonly ngControl: NgControl | AbstractControlDirective | null;

  /** Whether the control is required. */
  readonly required: boolean;

  /** Whether the control is disabled. */
  readonly disabled: boolean;
}
