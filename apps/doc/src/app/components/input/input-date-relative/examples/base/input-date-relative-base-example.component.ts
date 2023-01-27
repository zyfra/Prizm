import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-date-relative-base-example',
  templateUrl: './input-date-relative-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputDateRelativeBaseExampleComponent {
  public readonly valueControl = new FormControl();
}
