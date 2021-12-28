import { AfterViewInit, Directive, Provider, Type, ViewChild } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AccessorImplClass } from './accessor-impl.class';

export function provideValueAccessor(type: Type<unknown>): Provider {
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

  ngAfterViewInit(): void {
    this.valueAccessor.writeValue(this.accessorValue);
    this.valueAccessor.registerOnChange(this.accessorOnChangeFn);
    this.valueAccessor.registerOnTouched(this.accessorOnTouchedFn);
    this.valueAccessor.setDisabledState(this.accessorIsDisabled);

    this.valueAccessor.onChange = this.accessorOnChangeFn;
    this.valueAccessor.onTouched = this.accessorOnTouchedFn;
  }

  public override writeValue(obj: unknown): void {
    super.writeValue(obj);

    this.valueAccessor?.writeValue(obj);
  }

  public override setDisabledState(isDisabled: boolean): void {
    super.setDisabledState(isDisabled);
    this.valueAccessor?.setDisabledState(isDisabled);
  }
}
