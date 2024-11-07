import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { prizmGetInputDateTimeRangeNativeTransformer } from '@prizm-ui/components';
import { tap } from 'rxjs';

@Component({
  selector: 'prizm-input-layout-date-time-range-native-example',
  templateUrl: './input-native-date-time-range-base-example.component.html',
  providers: [prizmGetInputDateTimeRangeNativeTransformer()],
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputNativeDateRangeBaseExampleComponent implements OnInit {
  readonly value = new UntypedFormControl([new Date(2018, 2, 10), new Date(2018, 3, 20)]);
  ngOnInit(): void {
    this.value.valueChanges.pipe(tap(v => console.log(v))).subscribe();
  }
}
