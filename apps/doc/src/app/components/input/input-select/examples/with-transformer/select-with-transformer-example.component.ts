import { Component, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmSelectIdentityMatcher,
  PrizmSelectSearchMatcher,
  PrizmSelectStringify,
  PrizmSelectValueTransformver,
} from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCheck } from '@prizm-ui/icons/full/source';

type PrizmItem = {
  id: number;
  name: string;
};
@Component({
  selector: 'prizm-select-with-transformer-example',
  templateUrl: './select-with-transformer-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmSelectWithTransformerExampleComponent {
  readonly items: PrizmItem[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ];
  readonly valueControl = new UntypedFormControl(3);

  readonly searchMatcher: PrizmSelectSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {
    return item?.name.toLowerCase().includes(search.toLowerCase());
  };

  readonly transformer: PrizmSelectValueTransformver<PrizmItem> = a => a?.id;
  readonly identityMatcher: PrizmSelectIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {
    return a === b;
  };

  readonly stringify: PrizmSelectStringify<PrizmItem> = (item: PrizmItem): any => {
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
