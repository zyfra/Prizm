import { Component, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmComboboxIdentityMatcher,
  PrizmComboboxSearchMatcher,
  PrizmComboboxStringify,
} from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCheck } from '@prizm-ui/icons/full/source';
import { tap } from 'rxjs/operators';

type PrizmItem = {
  id: number;
  name: string;
};
@Component({
  selector: 'prizm-combobox-with-object-example',
  templateUrl: './combobox-with-object-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmComboboxWithObjectExampleComponent {
  readonly items: PrizmItem[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ];
  readonly valueControl = new UntypedFormControl({ id: 3 });

  readonly searchMatcher: PrizmComboboxSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  readonly identityMatcher: PrizmComboboxIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {
    return a?.id === b?.id;
  };

  readonly stringify: PrizmComboboxStringify<PrizmItem> = (item: PrizmItem) => {
    return item?.name;
  };

  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCheck);
  }

  public setDefaultValue(): void {
    this.valueControl.setValue(this.items[0]);
  }
}
