import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { pzmGetInputDateNativeTransformer } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-native-date-base-example',
  templateUrl: './input-native-date-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `],
  providers: [
    pzmGetInputDateNativeTransformer()
  ]
})
export class PzmInputNativeDateBaseExampleComponent {
  public readonly control = new FormControl(new Date());
}
