import { Directive, Injector, Optional, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { PrizmAccessorImplClass } from './pzm-accessor-impl.class';

@Directive()
export abstract class PrizmWrappedFormComponent extends PrizmAccessorImplClass {
  public readonly formControl: FormControl;

  constructor(public readonly injector: Injector, @Optional() @Self() public readonly ngControl: NgControl) {
    super();

    if (ngControl != null) {
      ngControl.valueAccessor = this;
      this.formControl = ngControl.control as FormControl;
    }
  }

  public override setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable({ emitEvent: false });
    } else {
      this.formControl.enable({ emitEvent: false });
    }
    super.setDisabledState(this.accessorIsDisabled);
  }
}
