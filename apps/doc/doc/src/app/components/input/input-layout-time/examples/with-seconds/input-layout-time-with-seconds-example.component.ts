import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-time-with-seconds-example',
  templateUrl: './input-layout-time-with-seconds-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutTimeWithSecondsExampleComponent {
  public readonly value = new UntypedFormControl(new PrizmTime(12, 30, 25));
}
