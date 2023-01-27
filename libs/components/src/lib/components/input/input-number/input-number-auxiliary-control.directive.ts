import { Directive, HostListener, Input } from '@angular/core';
import { PrizmInputNumberDirective } from './input-number.directive';

@Directive({
  selector: '[prizmInputNumberAuxiliaryControl]',
})
export class PrizmInputNumberAuxiliaryControlDirective {
  @Input('prizmInputNumberAuxiliaryControl') type!: 'increment' | 'decrement';
  @Input() inputNumber: PrizmInputNumberDirective;

  @HostListener('click') public action(): void {
    this.inputNumber[this.type]();
  }
}
