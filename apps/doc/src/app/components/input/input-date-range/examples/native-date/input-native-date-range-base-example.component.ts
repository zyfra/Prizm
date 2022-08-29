import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiDay, zuiGetInputDateRangeNativeTransformer } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-date-range-native-example',
  templateUrl: './input-native-date-range-base-example.component.html',
  providers: [
    zuiGetInputDateRangeNativeTransformer()
  ],
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiInputNativeDateRangeBaseExampleComponent {
  readonly value = new FormControl(
    [
      new Date(2018, 2, 10),
      new Date(2018, 3, 20),
    ]
  );
}
