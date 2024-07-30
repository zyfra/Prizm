import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDateStringType, prizmGetInputDateTransformer } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-provider-example',
  templateUrl: './input-date-provider-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }

      [prizmButton] {
        margin-right: 24px;
      }
    `,
  ],
  providers: [prizmGetInputDateTransformer()],
})
export class PrizmInputDateProviderExampleComponent {
  public readonly control = new UntypedFormControl(new Date());

  public readonly min = new Date(2023, 1, 1, 30, 0, 0);
  public readonly max = new Date(2025, 0, 1, 13, 30, 0, 0);

  public setDate(type: PrizmDateStringType): void {
    if (type === 'UTC') {
      this.control.setValue(new Date(2024, 1, 1, 30, 0, 0).toUTCString());
    } else {
      this.control.setValue(new Date(2024, 2, 2, 30, 0, 0).toISOString());
    }
  }
}
