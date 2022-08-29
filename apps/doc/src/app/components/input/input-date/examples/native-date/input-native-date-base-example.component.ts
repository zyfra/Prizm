import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { zuiGetInputDateNativeTransformer } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-native-date-base-example',
  templateUrl: './input-native-date-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `],
  providers: [
    zuiGetInputDateNativeTransformer()
  ]
})
export class ZuiInputNativeDateBaseExampleComponent {
  public readonly control = new FormControl(new Date());
}
