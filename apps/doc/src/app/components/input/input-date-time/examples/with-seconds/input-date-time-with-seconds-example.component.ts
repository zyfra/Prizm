import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-time-with-seconds-example',
  templateUrl: './input-date-time-with-seconds-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputDateTimeWithSecondsExampleComponent {
  public readonly value = new FormControl([new PrizmDay(2017, 2, 15), new PrizmTime(12, 30, 15)]);
}
