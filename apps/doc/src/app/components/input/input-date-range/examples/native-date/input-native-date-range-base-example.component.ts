import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDay, prizmGetInputDateRangeNativeTransformer } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-range-native-example',
  templateUrl: './input-native-date-range-base-example.component.html',
  providers: [
    prizmGetInputDateRangeNativeTransformer()
  ],
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmInputNativeDateRangeBaseExampleComponent {
  readonly value = new FormControl(
    [
      new Date(2018, 2, 10),
      new Date(2018, 3, 20),
    ]
  );
}
