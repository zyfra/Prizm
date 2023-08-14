import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-base-example',
  templateUrl: './input-layout-date-time-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeBaseExampleComponent {
  public readonly value = new UntypedFormControl([new PrizmDay(2022, 2, 15), new PrizmTime(12, 30)]);

  public setDefaultValue(): void {
    this.value.setValue([new PrizmDay(2022, 1, 1), new PrizmTime(6, 0)]);
  }

  public clear(): void {
    this.value.setValue(null);
  }
}
