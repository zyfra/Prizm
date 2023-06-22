import { AbstractControl, NG_VALIDATORS, Validator, Validators } from '@angular/forms';
import { Directive } from '@angular/core';

const ValidationPattern = '(T|\\*)((\\+|\\-)(\\d+)(Y|M|d|h|m|s))?((\\+|\\-)(\\d+)(Y|M|d|h|m|s))?';

@Directive({
  selector:
    'prizm-input-layout-date-relative[ngModel], prizm-input-layout-date-relative[formControl], prizm-input-layout-date-relative[formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PrizmInputLayoutDateRelativeDirective,
      multi: true,
    },
  ],
})
export class PrizmInputLayoutDateRelativeDirective implements Validator {
  public validate(control: AbstractControl): { [key: string]: any } | null {
    return Validators.pattern(ValidationPattern)(control);
  }
}
