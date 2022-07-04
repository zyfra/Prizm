import { Directive } from '@angular/core';
import { AbstractControlDirective, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive()
export abstract class ZuiInputControl<T> {
  /** The value of the control. */
  value: T | null;

  readonly stateChanges: Subject<void> = new Subject<void>();

  readonly empty: boolean;

  /** Gets the AbstractControlDirective for this control. */
  readonly ngControl: NgControl | AbstractControlDirective | null;

  /** Whether the control is required. */
  readonly required: boolean;

  /** Whether the control is disabled. */
  readonly disabled: boolean;

  /** Whether the control is required. */
  readonly focused: boolean;

  /** Whether the control is validity. */
  readonly invalid: boolean;

  /** Whether the control is validity. */
  readonly touched: boolean;

  public abstract clear(): void;
}
