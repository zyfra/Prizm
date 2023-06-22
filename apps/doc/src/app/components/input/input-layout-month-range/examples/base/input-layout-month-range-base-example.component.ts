import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay, PrizmMonth, PrizmMonthRange } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-month-range-base-example',
  templateUrl: './input-layout-month-range-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutMonthRangeBaseExampleComponent {
  public readonly control = new UntypedFormControl(
    new PrizmMonthRange(new PrizmMonth(2022, 1), new PrizmMonth(2022, 3))
  );
}
