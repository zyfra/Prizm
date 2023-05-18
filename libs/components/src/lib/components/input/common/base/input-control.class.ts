import { Directive, ViewChild } from '@angular/core';
import { AbstractControlDirective, NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { PrizmInputLayoutBottomDirective } from '../input-layout/input-layout-bottom.directive';
import { PrizmInputLayoutInBodyDirective } from '../input-layout/input-layout-in-body.directive';
import { PrizmInputLayoutLeftDirective } from '../input-layout/input-layout-left.directive';
import { PrizmInputLayoutRightDirective } from '../input-layout/input-layout-right.directive';
import { PrizmInputLayoutSubtextDirective } from '../input-layout/input-layout-subtext.directive';
import { PrizmInputStatusTextDirective } from '../input-status-text/input-status-text.directive';

@Directive()
export abstract class PrizmInputControl<T> {
  // @ViewChild(PrizmInputStatusTextDirective, { static: true })
  statusText?: PrizmInputStatusTextDirective;

  @ViewChild(PrizmInputLayoutBottomDirective)
  public layoutBottom: PrizmInputLayoutBottomDirective | null;

  @ViewChild(PrizmInputLayoutInBodyDirective)
  public layoutInBody: PrizmInputLayoutInBodyDirective | null;

  @ViewChild(PrizmInputLayoutLeftDirective)
  public layoutLeft: PrizmInputLayoutLeftDirective | null;

  @ViewChild(PrizmInputLayoutRightDirective)
  public layoutRight: PrizmInputLayoutRightDirective | null;

  @ViewChild(PrizmInputLayoutSubtextDirective)
  public layoutSubtext: PrizmInputLayoutSubtextDirective | null = null;

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
  public abstract clear(ev: MouseEvent): void;
}
