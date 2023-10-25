import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmDateTime,
  PrizmDay,
  prizmGetInputDateTimeBaseTransformer,
  PrizmTime,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-base-transformer-example',
  templateUrl: './input-layout-date-time-base-transformer-example.component.html',
  providers: [prizmGetInputDateTimeBaseTransformer()],
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeBaseTransformerExampleComponent {
  public readonly value = new UntypedFormControl(
    new PrizmDateTime(new PrizmDay(2022, 2, 15), new PrizmTime(12, 30))
  );

  public setDefaultValue(): void {
    this.value.setValue(PrizmDateTime.fromLocalNativeDate(new Date()));
  }

  public clear(): void {
    this.value.setValue(null);
  }
}
