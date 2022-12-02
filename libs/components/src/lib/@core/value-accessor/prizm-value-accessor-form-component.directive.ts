import { AfterViewInit, Directive, ViewChild } from '@angular/core';
import { DefaultValueAccessor } from '@angular/forms';
import { PrizmAccessorImplClass } from './prizm-accessor-impl.class';

@Directive()
export abstract class ValueAccessorFormComponent
  extends PrizmAccessorImplClass
  implements AfterViewInit
{
  @ViewChild(DefaultValueAccessor) private valueAccessor: DefaultValueAccessor;

  public ngAfterViewInit(): void {
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
