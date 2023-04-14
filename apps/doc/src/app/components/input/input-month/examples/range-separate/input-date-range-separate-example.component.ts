import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDay } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-month-separate-example',
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
export class PrizmInputMonthSeparateExampleComponent {
  public readonly fromControl = new FormControl(new PrizmDay(2022, 0, 15));
  public readonly toControl = new FormControl(new PrizmDay(2022, 2, 15));
}
