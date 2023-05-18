import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-with-seconds-example',
  templateUrl: './input-layout-date-time-with-seconds-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeWithSecondsExampleComponent {
  public readonly value = new UntypedFormControl([new PrizmDay(2017, 2, 15), new PrizmTime(12, 30, 15)]);
}
