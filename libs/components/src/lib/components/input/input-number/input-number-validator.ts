import { AbstractControl, NG_VALIDATORS, Validator, Validators } from '@angular/forms';
import { Directive, ElementRef } from '@angular/core';

const ValidationPattern = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;

@Directive({
  selector: 'input[prizmInputNumber], input[type=number][prizmInput]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PrizmInputNumberValidatorDirective,
      multi: true,
    },
  ],
})
export class PrizmInputNumberValidatorDirective implements Validator {
  constructor(private elementRef: ElementRef) {}
  public validate(control: AbstractControl): { [key: string]: any } | null {
    return ValidationPattern.exec(this.elementRef.nativeElement.value)
      ? null
      : {
          pattern: this.elementRef.nativeElement.value,
        };
  }
}
