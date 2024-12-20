import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { PrizmComboboxSearchMatcher, PrizmComboboxStringify } from '@prizm-ui/components';
import { Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'prizm-combobox-missing-value-handler-example',
  templateUrl: './combobox-missing-value-handler-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmComboboxMissingValueHandlerExampleComponent {
  protected items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  public readonly search$ = new Subject<string | null>();

  public missingValueHandler = (value: string) => value.trim();
  readonly searchItems$ = this.search$.pipe(
    startWith(null),
    map(search => {
      if (!search) return this.items;
      return this.items.filter(item => this.searchMatcher(search, item));
    })
  );
  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);
  protected searchMatcher: PrizmComboboxSearchMatcher<string> = (search: string, item: string) => {
    return item.toLowerCase().includes(search.toLowerCase());
  };
  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }
}
