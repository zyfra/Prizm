import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-multi-select-validators-example',
  templateUrl: './multi-select-validators-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmMultiSelectValidatorsExampleComponent {
  readonly valueControl = new FormControl([], [Validators.required]);
  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  public setDefaultValue(): void {
    this.valueControl.setValue(null);
  }

  public setRequiredValidator(): void {
    this.valueControl.setValidators([Validators.required]);
  }

  public clearValidator(): void {
    this.valueControl.setValidators([]);
  }
}
