import { Directive, Injector, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { AccessorImplClass } from './accessor-impl.class';

@Directive()
export abstract class WrappedFormComponent extends AccessorImplClass implements ControlValueAccessor {
  public readonly formControl: FormControl;

  constructor(public readonly injector: Injector, @Optional() @Self() public readonly ngControl: NgControl) {
    super();

    if (ngControl != null) {
      ngControl.valueAccessor = this;
      this.formControl = ngControl.control as FormControl;
    }
  }

  override setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable({ emitEvent: false });
    } else {
      this.formControl.enable({ emitEvent: false });
    }
    super.setDisabledState(this.accessorIsDisabled);
  }
}
