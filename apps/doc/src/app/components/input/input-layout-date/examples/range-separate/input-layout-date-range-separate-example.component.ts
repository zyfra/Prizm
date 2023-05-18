import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-separate-example',
  templateUrl: './input-date-range-separate-example.component.html',
  styles: [
    `
      .block {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputDateSeparateExampleComponent {
  public readonly fromControl = new UntypedFormControl(new PrizmDay(2022, 0, 15));
  public readonly toControl = new UntypedFormControl(new PrizmDay(2022, 2, 15));
}
