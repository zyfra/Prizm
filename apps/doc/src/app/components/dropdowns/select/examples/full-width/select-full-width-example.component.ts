import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-select-full-width-example',
  templateUrl: './select-full-width-example.component.html',
  styles: [
    `
      :host {
        --prizm-input-layout-width: 100%;
      }

      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmSelectFullWidthExampleComponent {
  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly control = new FormControl(this.items[1]);

  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }
}
