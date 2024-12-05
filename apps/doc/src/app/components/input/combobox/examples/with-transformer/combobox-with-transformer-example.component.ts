import { Component, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmComboboxIdentityMatcher,
  PrizmComboboxSearchMatcher,
  PrizmComboboxStringify,
  PrizmComboboxValueTransformer,
} from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCheck } from '@prizm-ui/icons/full/source';

type PrizmItem = {
  id: number;
  name: string;
};
@Component({
  selector: 'prizm-combobox-with-transformer-example',
  templateUrl: './combobox-with-transformer-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmComboboxWithTransformerExampleComponent {
  readonly items: PrizmItem[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ];
  readonly valueControl = new UntypedFormControl(3);

  readonly searchMatcher: PrizmComboboxSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {
    return item?.name.toLowerCase().includes(search.toLowerCase());
  };

  readonly transformer: PrizmComboboxValueTransformer<PrizmItem> = a => a?.id;
  readonly identityMatcher: PrizmComboboxIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {
    return a === b;
  };

  readonly stringify: PrizmComboboxStringify<PrizmItem> = (item: PrizmItem): any => {
    return item?.name;
  };

  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCheck);
  }

  public setDefaultValue(): void {
    this.valueControl.setValue(this.items[0].id);
  }
}
