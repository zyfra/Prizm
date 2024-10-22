import { Directive, DoCheck, ViewChild } from '@angular/core';
import { AbstractControlDirective, NgControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { PrizmInputLayoutBottomDirective } from '../input-layout/input-layout-bottom.directive';
import { PrizmInputLayoutInBodyDirective } from '../input-layout/input-layout-in-body.directive';
import { PrizmInputLayoutLeftDirective } from '../input-layout/input-layout-left.directive';
import { PrizmInputLayoutRightDirective } from '../input-layout/input-layout-right.directive';
import { PrizmInputLayoutSubtextDirective } from '../input-layout/input-layout-subtext.directive';
import { PrizmInputStatusTextDirective } from '../input-status-text/input-status-text.directive';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';

@Directive()
export abstract class PrizmInputControl<T> extends PrizmAbstractTestId implements DoCheck {
  // @ViewChild(PrizmInputStatusTextDirective, { static: true })
  statusText?: PrizmInputStatusTextDirective;

  @ViewChild(PrizmInputLayoutBottomDirective)
  public layoutBottom!: PrizmInputLayoutBottomDirective | null;

  @ViewChild(PrizmInputLayoutInBodyDirective)
  public layoutInBody!: PrizmInputLayoutInBodyDirective | null;

  @ViewChild(PrizmInputLayoutLeftDirective)
  public layoutLeft!: PrizmInputLayoutLeftDirective | null;

  @ViewChild(PrizmInputLayoutRightDirective)
  public layoutRight!: PrizmInputLayoutRightDirective | null;

  @ViewChild(PrizmInputLayoutSubtextDirective)
  public layoutSubtext: PrizmInputLayoutSubtextDirective | null = null;

  public defaultLabel!: string;
  protected readonly lastSyncedState: {
    touched: boolean | null;
    pristine: boolean | null;
  } = {
    touched: null,
    pristine: null,
  };
  /** The value of the control. */
  abstract value: T | null;

  readonly stateChanges: Subject<void> = new Subject<void>();

  abstract readonly empty: boolean | Observable<boolean>;

  /** Gets the AbstractControlDirective for this control. */
  abstract readonly ngControl: NgControl | AbstractControlDirective | null;

  /** Whether the control is required. */
  abstract readonly required: boolean | Observable<boolean>;

  /** Whether the control is disabled. */
  abstract readonly disabled: boolean | Observable<boolean>;

  /** Whether the control is required. */
  abstract readonly focused: boolean | Observable<boolean>;

  /** Whether the control is validity. */
  abstract readonly invalid: boolean | Observable<boolean>;

  /** Whether the control is validity. */
  abstract readonly touched: boolean | Observable<boolean>;

  abstract nativeElementType: string | undefined;

  public clickable = false;
  abstract hasClearButton: boolean;
  hidden = false;
  public abstract clear(ev: MouseEvent): void;

  ngDoCheck(): void {
    this.updateLayoutOnTouched();
  }

  private updateLayoutOnTouched(): void {
    if (
      this.ngControl &&
      (this.ngControl.pristine !== this.lastSyncedState.pristine ||
        this.ngControl.touched !== this.lastSyncedState.touched)
    ) {
      this.lastSyncedState.touched = this.ngControl.touched;
      this.lastSyncedState.pristine = this.ngControl.pristine;
      this.stateChanges.next();
    }
  }
}
