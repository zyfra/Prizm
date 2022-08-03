import { Component, Input } from '@angular/core';
import { ZuiInputLayoutComponent } from '../common/input-layout/input-layout.component';
import { ZuiInputNumberDirective } from './input-number.directive';

@Component({
  selector: 'zui-input-number-auxiliary-controls',
  template: `<div class="container">
    <button zuiInputIconButton="chevrons-up" (click)="increment()" [size]="size"></button>
    <button zuiInputIconButton="chevrons-down" (click)="decrement()" [size]="size"></button>
  </div> `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
      }

      :host-context(.zui-input-form-outer[data-size='m']) {
        font-size: 15px;
      }

      :host-context(.zui-input-form-outer[data-size='s']) {
        font-size: 11px;
      }
    `,
  ],
})
export class ZuiInputNumberDefaultControlsComponent {
  @Input() inputNumber: ZuiInputNumberDirective;

  constructor(private readonly layout: ZuiInputLayoutComponent) {}

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

