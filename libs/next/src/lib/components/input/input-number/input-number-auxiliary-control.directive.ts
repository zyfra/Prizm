import { Directive, HostListener, Input } from '@angular/core';
import { PrizmInputNumberDirective } from './input-number.directive';

@Directive({
  selector: '[pzmInputNumberAuxiliaryControl]',
})
export class PrizmInputNumberAuxiliaryControlDirective {
  @Input('pzmInputNumberAuxiliaryControl') type!: 'increment' | 'decrement';
  @Input() inputNumber: PrizmInputNumberDirective;

  @HostListener('click') public action(): void {
    this.inputNumber[this.type]();
  }
}

