import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-year-base-example',
  templateUrl: './input-layout-year-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutYearBaseExampleComponent {
  public readonly control = new UntypedFormControl(new PrizmDay(2017, 0, 15));
}
