import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { zuiGetInputDateTimeNativeTransformer } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-date-time-native-example',
  templateUrl: './input-native-date-time-base-example.component.html',
  providers: [
    zuiGetInputDateTimeNativeTransformer()
  ],
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiInputDateTimeNativeExampleComponent {
  public readonly value = new FormControl(
    new Date(2020, 0, 1, 13, 30, 0, 0)
  );
}
