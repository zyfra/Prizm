import { Directive, Inject } from '@angular/core';
import { PrizmTextfieldHost } from '../types/textfield-host';
import { AbstractPrizmControl } from './control';

@Directive()
export abstract class AbstractPrizmTextfieldHost<T extends AbstractPrizmControl<any>>
  implements PrizmTextfieldHost
{
  constructor(@Inject(AbstractPrizmControl) protected readonly host: T) {}

  get readOnly(): boolean {
    return this.host.readOnly;
  }

  get disabled(): boolean {
    return this.host.computedDisabled;
  }

  get invalid(): boolean {
    return this.host.computedInvalid;
  }

  get focusable(): boolean {
    return this.host.computedFocusable;
  }

  get value(): string {
    return this.host.value?.toString() || ``;
  }

  public abstract onValueChange(value: string): void;

  public process(_input: HTMLInputElement): void {
    console.log('prizm process', { _input });
  }
}
