import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-tree-select-base-example',
  templateUrl: './tree-select-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmTreeSelectBaseExampleComponent {
  readonly items = [
    {
      value: 'One',
    },
    {
      value: 'Two',
    },
    {
      value: 'Three',
    },
    {
      value: 'Very long text with a lot of characters and spaces and other stuff and things',
    },
  ];
  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);

  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }
}
