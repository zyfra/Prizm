import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { PrizmSelectStringify } from '@prizm-ui/components';

@Component({
  selector: 'prizm-select-base-example',
  templateUrl: './select-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmSelectBaseExampleComponent {
  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly control = new UntypedFormControl(null, [Validators.required]);

  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }
}
