import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-combobox-validators-example',
  templateUrl: './combobox-validators-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmComboboxValidatorsExampleComponent {
  value: string | null = null;
  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);

  public setDefaultValue(): void {
    this.control.setValue(null);
  }

  public setRequiredValidator(): void {
    this.control.setValidators([Validators.required]);
  }

  public clearValidator(): void {
    this.control.setValidators([]);
  }
}
