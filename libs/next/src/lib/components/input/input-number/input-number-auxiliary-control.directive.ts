import { Directive, HostListener, Input } from '@angular/core';
import { PzmInputNumberDirective } from './input-number.directive';

@Directive({
  selector: '[pzmInputNumberAuxiliaryControl]',
})
export class PzmInputNumberAuxiliaryControlDirective {
  @Input('pzmInputNumberAuxiliaryControl') type!: 'increment' | 'decrement';
  @Input() inputNumber: PzmInputNumberDirective;

  @HostListener('click') public action(): void {
    this.inputNumber[this.type]();
  }
}

