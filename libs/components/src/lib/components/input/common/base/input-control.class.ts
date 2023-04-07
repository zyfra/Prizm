import { Directive } from '@angular/core';
import { AbstractControlDirective, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive()
export abstract class PrizmInputControl<T> {
  /** The value of the control. */
  abstract value: T | null;

  readonly stateChanges: Subject<void> = new Subject<void>();

  abstract readonly empty: boolean;

  /** Gets the AbstractControlDirective for this control. */
  abstract readonly ngControl: NgControl | AbstractControlDirective | null;

  /** Whether the control is required. */
  abstract readonly required: boolean;

  /** Whether the control is disabled. */
  abstract readonly disabled: boolean;

  /** Whether the control is required. */
  abstract readonly focused: boolean;

  /** Whether the control is validity. */
  abstract readonly invalid: boolean;

  /** Whether the control is validity. */
  abstract readonly touched: boolean;

  abstract nativeElementType: string | undefined;

  abstract hasClearButton: boolean;
  hidden = false;
  public abstract clear(): void;
}
