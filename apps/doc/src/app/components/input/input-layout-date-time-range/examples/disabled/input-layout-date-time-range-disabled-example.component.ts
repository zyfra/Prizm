import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDateTime, PrizmDay, PrizmDayRange } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-range-disabled-example',
  templateUrl: './input-layout-date-time-range-disabled-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeRangeDisabledExampleComponent implements OnInit {
  readonly value = new UntypedFormControl(
    new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 3, 20))
  );
  readonly min = new PrizmDateTime(new PrizmDay(2000, 2, 20));

  readonly max = new PrizmDateTime(new PrizmDay(2040, 2, 20));

  public ngOnInit(): void {
    this.value.disable();
  }
}
