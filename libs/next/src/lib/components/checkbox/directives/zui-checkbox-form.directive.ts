import { Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ICheckbox } from '../interfaces/zui-checkbox.interfaces';

@Directive()
export abstract class ZuiCheckboxFormDirective implements ControlValueAccessor {
  public accessorIsDisabled = false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onChange: (value: unknown) => void = () => {};

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.accessorIsDisabled = isDisabled;
  }

  public writeValue(data: ICheckbox): void {
    // is not empty
  }

  public onTouched(event: FocusEvent): void {
    // is not empty
  }
}
