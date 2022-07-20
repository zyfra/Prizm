import { Directive, HostListener, Input } from '@angular/core';
import { ZuiInputNumberDirective } from './input-number.directive';

@Directive({
  selector: '[zuiInputNumberAuxiliaryControl]',
})
export class ZuiInputNumberAuxiliaryControlDirective {
  @Input('zuiInputNumberAuxiliaryControl') type!: 'increment' | 'decrement';
  @Input() inputNumber: ZuiInputNumberDirective;

  @HostListener('click') public action(): void {
    this.inputNumber[this.type]();
  }
}

