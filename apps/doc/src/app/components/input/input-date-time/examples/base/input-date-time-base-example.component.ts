import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-time-base-example',
  templateUrl: './input-date-time-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputDateTimeBaseExampleComponent {
  public readonly value = new FormControl([new PrizmDay(2022, 2, 15), new PrizmTime(12, 30)]);

  public setDefaultValue(): void {
    this.value.setValue([new PrizmDay(2022, 1, 1), new PrizmTime(6, 0)]);
  }

  public clear(): void {
    this.value.setValue(null);
  }
}
