import { ControlValueAccessor } from '@angular/forms';
import { AbstractPrizmTestId } from '../../abstract/interactive';

export abstract class PrizmAccessorImplClass extends AbstractPrizmTestId implements ControlValueAccessor {
  public accessorValue: unknown;
  public accessorOnChangeFn: (_: unknown) => unknown;
  public accessorOnTouchedFn: VoidFunction;
  public accessorIsDisabled: boolean;

  public writeValue(obj: unknown): void {
    this.accessorValue = obj;
  }

  public registerOnChange(fn: (_: unknown) => unknown): void {
    this.accessorOnChangeFn = fn;
  }

  public registerOnTouched(fn: VoidFunction): void {
    this.accessorOnTouchedFn = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.accessorIsDisabled = isDisabled;
  }
}
