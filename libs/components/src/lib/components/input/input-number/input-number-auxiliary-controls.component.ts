import { Component, Input } from '@angular/core';
import { PrizmInputLayoutComponent } from '../common/input-layout/input-layout.component';
import { PrizmInputNumberDirective } from './input-number.directive';

@Component({
  selector: 'prizm-input-number-auxiliary-controls',
  template: `<div class="container">
    <button
      [size]="size"
      [interactive]="!inputNumber.disabled"
      [disabled]="inputNumber.disabled"
      (click)="increment()"
      prizmInputIconButton="chevrons-up"
    ></button>
    <button
      [size]="size"
      [interactive]="!inputNumber.disabled"
      [disabled]="inputNumber.disabled"
      (click)="decrement()"
      prizmInputIconButton="chevrons-down"
    ></button>
  </div> `,
  styleUrls: ['./input-number-auxiliary-controls.component.less'],
})
export class PrizmInputNumberDefaultControlsComponent {
  @Input() inputNumber!: PrizmInputNumberDirective;

  constructor(private readonly layout: PrizmInputLayoutComponent) {}

  get size(): number {
    const { outer, size } = this.layout;

    if (outer && size === 's') {
      return 12;
    }

    return 16;
  }

  public increment(): void {
    this.inputNumber.increment();
  }

  public decrement(): void {
    this.inputNumber.decrement();
  }
}
