import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-layout-date-relative-base-example',
  templateUrl: './input-layout-date-relative-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateRelativeBaseExampleComponent {
  public readonly valueControl = new UntypedFormControl();
}
