import { Directive, HostListener, Input } from '@angular/core';
import { PrizmInputNumberComponent } from './input-number.component';

@Directive({
  selector: '[prizmInputNumberAuxiliaryControl]',
  standalone: true,
})
export class PrizmInputNumberAuxiliaryControlDirective {
  @Input('prizmInputNumberAuxiliaryControl') type!: 'increment' | 'decrement';
  @Input() inputNumber!: PrizmInputNumberComponent;

  @HostListener('click') public action(): void {
    this.inputNumber[this.type]();
  }
}
