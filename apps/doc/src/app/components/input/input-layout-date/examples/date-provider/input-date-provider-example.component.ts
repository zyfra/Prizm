import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { prizmGetInputDateTransformer } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-provider-example',
  templateUrl: './input-date-provider-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
  providers: [prizmGetInputDateTransformer()],
})
export class PrizmInputDateProviderExampleComponent {
  public readonly control = new UntypedFormControl(new Date());

  public readonly min = new Date(2023, 1, 1, 30, 0, 0);
  public readonly max = new Date(2025, 0, 1, 13, 30, 0, 0);
}
