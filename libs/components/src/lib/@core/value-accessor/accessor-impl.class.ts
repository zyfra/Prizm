import { ControlValueAccessor } from '@angular/forms';

export abstract class AccessorImplClass implements ControlValueAccessor {
  public accessorValue: any;
  public accessorOnChangeFn: any;
  public accessorOnTouchedFn: any;
  public accessorIsDisabled: any;

  writeValue(obj: any): void {
    this.accessorValue = obj;
  }

  registerOnChange(fn: any): void {
    this.accessorOnChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.accessorOnTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.accessorIsDisabled = isDisabled;
  }
}
