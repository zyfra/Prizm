import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-base-example',
  templateUrl: './input-layout-date-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateBaseExampleComponent {
  public readonly control = new UntypedFormControl(new PrizmDay(2017, 0, 15));
  readonly min = new PrizmDay(2000, 2, 20);

  readonly max = new PrizmDay(2040, 2, 20);
}
