import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-multi-select-dropdown-template-example',
  templateUrl: './multi-select-dropdown-template-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmInputMultiSelectDropdownTemplateExampleComponent {
  readonly valueControl = new UntypedFormControl(['Москва']);
}
