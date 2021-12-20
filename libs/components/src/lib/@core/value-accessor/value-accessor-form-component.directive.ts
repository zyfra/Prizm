import { AfterViewInit, Directive, Provider, Type, ViewChild } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AccessorImplClass } from './accessor-impl.class';

export function provideValueAccessor(type: Type<any>): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: type,
    multi: true,
  };
}

@Directive()
export abstract class ValueAccessorFormComponent
  extends AccessorImplClass
  implements ControlValueAccessor, AfterViewInit
{
  @ViewChild(DefaultValueAccessor) private valueAccessor: DefaultValueAccessor;

  ngAfterViewInit() {
    this.valueAccessor.writeValue(this.accessorValue);
    this.valueAccessor.registerOnChange(this.accessorOnChangeFn);
    this.valueAccessor.registerOnTouched(this.accessorOnTouchedFn);
    this.valueAccessor.setDisabledState(this.accessorIsDisabled);

    this.valueAccessor.onChange = this.accessorOnChangeFn;
    this.valueAccessor.onTouched = this.accessorOnTouchedFn;
  }

  override writeValue(obj: any): void {
    super.writeValue(obj);

    this.valueAccessor?.writeValue(obj);
  }

  override setDisabledState(isDisabled: boolean) {
    super.setDisabledState(isDisabled);
    this.valueAccessor?.setDisabledState(isDisabled);
  }
}
