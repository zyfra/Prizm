import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-tree-select-projection-example',
  templateUrl: './tree-select-projection-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmTreeSelectProjectionExampleComponent {
  readonly items = [
    {
      value: 'One',
    },
    {
      value: 'Two',
      children: [
        {
          value: 'first in two',
          children: [
            {
              value: 'first in first in two',
            },
          ],
        },
        {
          value: 'second in two',
        },
      ],
    },
    {
      value: 'Three',
      children: [
        {
          value: 'first in first in Three',
        },
        {
          value: 'second in first in Three',
        },
      ],
    },
    {
      value: 'Very long text with a lot of characters and spaces and other stuff and things',
    },
  ];
  public value = this.items[0];
  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);

  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }
}
