import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmComboboxSearchMatcher } from '@prizm-ui/components';

@Component({
  selector: 'prizm-combobox-full-width-example',
  templateUrl: './combobox-full-width-example.component.html',
  styles: [
    `
      :host {
        --prizm-input-layout-width: 100%;
      }

      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmComboboxFullWidthExampleComponent {
  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly control = new UntypedFormControl(this.items[1]);

  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }

  protected searchMatcher: PrizmComboboxSearchMatcher<string> = (search: string, item: string) => {
    return item.toLowerCase().includes(search.toLowerCase());
  };
}
