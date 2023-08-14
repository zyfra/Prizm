import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { prizmGetInputDateRangeNativeTransformer } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-range-native-example',
  templateUrl: './input-layout-native-date-range-base-example.component.html',
  providers: [prizmGetInputDateRangeNativeTransformer()],
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputNativeDateRangeBaseExampleComponent {
  readonly value = new UntypedFormControl([new Date(2018, 2, 10), new Date(2018, 3, 20)]);
}
