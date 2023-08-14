import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay, prizmGetInputDateTimeNativeTransformer, PrizmTime } from '@prizm-ui/components';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'prizm-input-date-time-native-example',
  templateUrl: './input-native-date-time-base-example.component.html',
  providers: [prizmGetInputDateTimeNativeTransformer()],
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputDateTimeNativeExampleComponent {
  public readonly value = new UntypedFormControl(new Date(2020, 0, 1, 13, 30, 0, 0));

  public setDefaultValue(): void {
    this.value.setValue(new Date());
  }

  public clear(): void {
    this.value.setValue(null);
  }
}
