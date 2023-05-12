import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-multi-select-example',
  templateUrl: './input-multi-select-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputMultiSelectBaseExampleComponent implements OnInit {
  value = true;
  readonly valueControl = new UntypedFormControl([]);
  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly valueDisabled = new UntypedFormControl(false);

  ngOnInit(): void {
    this.valueDisabled.disable();
  }

  public setDefaultValue(): void {
    this.valueControl.setValue([], { emitEvent: false });
  }
}
