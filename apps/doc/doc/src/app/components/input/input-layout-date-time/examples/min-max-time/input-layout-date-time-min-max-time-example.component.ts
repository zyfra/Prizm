import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-min-max-time-example',
  templateUrl: './input-layout-date-time-min-max-time-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeMinMaxTimeExampleComponent {
  public readonly value = new UntypedFormControl([new PrizmDay(2022, 2, 15), new PrizmTime(12, 30)]);
  public min: [PrizmDay, PrizmTime] = [new PrizmDay(2022, 1, 1), new PrizmTime(9, 0)];
  public max: [PrizmDay, PrizmTime] = [new PrizmDay(2025, 10, 10), new PrizmTime(18, 30)];
  public setDefaultValue(): void {
    this.value.setValue([new PrizmDay(2022, 1, 1), new PrizmTime(6, 0)]);
  }

  public clear(): void {
    this.value.setValue(null);
  }
}
