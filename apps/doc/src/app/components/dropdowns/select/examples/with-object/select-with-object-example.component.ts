import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmSelectIdentityMatcher,
  PrizmSelectSearchMatcher,
  PrizmSelectStringify,
} from '@prizm-ui/components';
import { tap } from 'rxjs/operators';

type PrizmItem = {
  id: number;
  name: string;
};
@Component({
  selector: 'prizm-select-with-object-example',
  templateUrl: './select-with-object-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmSelectWithObjectExampleComponent {
  readonly items: PrizmItem[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ];
  readonly valueControl = new UntypedFormControl({ id: 3 });

  readonly searchMatcher: PrizmSelectSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  readonly identityMatcher: PrizmSelectIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {
    return a.id === b.id;
  };

  readonly stringify: PrizmSelectStringify<PrizmItem> = (item: PrizmItem) => {
    return item.name;
  };

  public setDefaultValue(): void {
    this.valueControl.setValue(this.items[0]);
  }
}
