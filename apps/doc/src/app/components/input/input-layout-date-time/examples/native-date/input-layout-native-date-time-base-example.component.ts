import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { prizmGetInputDateTimeNativeTransformer } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-native-example',
  templateUrl: './input-layout-native-date-time-base-example.component.html',
  providers: [prizmGetInputDateTimeNativeTransformer()],
  styles: [
    `
      [prizmButton] {
        margin-right: 24px;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeNativeExampleComponent {
  public readonly value = new UntypedFormControl(new Date(2024, 0, 1, 13, 30, 0, 0));

  public readonly min = new Date(2023, 1, 1, 30, 0, 0);
  public readonly max = new Date(2025, 0, 1, 13, 30, 0, 0);

  public setDefaultValue(): void {
    this.value.setValue(new Date());
  }

  public clear(): void {
    this.value.setValue(null);
  }
}
