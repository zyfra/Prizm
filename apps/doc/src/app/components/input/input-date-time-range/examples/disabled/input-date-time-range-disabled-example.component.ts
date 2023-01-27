import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDay, PrizmDayRange } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-time-range-disabled-example',
  templateUrl: './input-date-time-range-disabled-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputDateTimeRangeDisabledExampleComponent implements OnInit {
  readonly value = new FormControl(new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 3, 20)));
  readonly min = new PrizmDay(2000, 2, 20);

  readonly max = new PrizmDay(2040, 2, 20);

  public ngOnInit(): void {
    this.value.disable();
  }
}
