import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { PrizmDateTime, PrizmDateTimeRange, PrizmDay, PrizmDayRange, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-range-base-example',
  templateUrl: './input-layout-date-time-range-base-example.component.html',
  styles: [
    `
      :host {
        --prizm-input-layout-width: 23rem;
      }

      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeRangeBaseExampleComponent {
  readonly value = new FormControl(
    new PrizmDateTimeRange(new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 2, 10)))
  );
}
