import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { PrizmSelectStringify } from '@prizm-ui/components';
import { of } from 'rxjs';

@Component({
  selector: 'prizm-select-stringify-observable-example',
  templateUrl: './select-stringify-observable-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmSelectStringifyObservableExampleComponent {
  readonly items = [
    '',
    false,
    true,
    0,
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);

  readonly stringify$: PrizmSelectStringify<string | number | boolean> = (
    item: string | number | boolean
  ) => {
    switch (typeof item) {
      case 'string':
        return item || 'Пустая строка';
      case 'number':
        return item.toString();
      case 'boolean':
        return item ? 'TRUE' : 'FALSE';
    }

    return of(item as string);
  };

  public setDefaultValue(): void {
    this.control.setValue(this.items[4], { emitEvent: false });
  }

  public getType(val: any): string {
    return typeof val;
  }
}
