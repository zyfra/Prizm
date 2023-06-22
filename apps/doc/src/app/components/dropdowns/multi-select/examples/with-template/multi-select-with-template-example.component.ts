import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-multi-select-with-template-example',
  templateUrl: './multi-select-with-template-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmMultiSelectWithTemplateExampleComponent {
  readonly items = ['One', 'Two', 'Three'];
  readonly valueControl = new UntypedFormControl(['Two']);
}
