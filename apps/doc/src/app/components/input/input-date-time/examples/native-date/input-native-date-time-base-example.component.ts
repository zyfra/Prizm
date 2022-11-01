import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { pzmGetInputDateTimeNativeTransformer } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-date-time-native-example',
  templateUrl: './input-native-date-time-base-example.component.html',
  providers: [
    pzmGetInputDateTimeNativeTransformer()
  ],
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PzmInputDateTimeNativeExampleComponent {
  public readonly value = new FormControl(
    new Date(2020, 0, 1, 13, 30, 0, 0)
  );
}
