import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmYear } from '@prizm-ui/components';

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
  public readonly control = new FormControl<PrizmYear | null>(new PrizmYear(2017));
}
