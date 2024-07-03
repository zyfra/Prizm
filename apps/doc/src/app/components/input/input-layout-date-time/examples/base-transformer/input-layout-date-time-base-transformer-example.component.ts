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
      [prizmButton] {
        margin-right: 24px;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeBaseTransformerExampleComponent {
  readonly defaultDate = new Date(2024, 2, 16);
  public readonly value = new UntypedFormControl(
    new PrizmDateTime(new PrizmDay(2022, 2, 15), new PrizmTime(12, 30))
  );

  public setDefaultValue(): void {
    this.value.setValue(PrizmDateTime.fromLocalNativeDate(this.defaultDate));
  }

  public clear(): void {
    this.value.setValue(null);
  }
}
