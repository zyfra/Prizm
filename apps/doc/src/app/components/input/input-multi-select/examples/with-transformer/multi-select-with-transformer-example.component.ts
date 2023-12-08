import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmMultiSelectIdentityMatcher,
  PrizmMultiSelectItemStringifyFunc,
  PrizmMultiSelectItemStringifyItem,
  PrizmMultiSelectSearchMatcher,
  PrizmMultiSelectValueTransformer,
} from '@prizm-ui/components';

type PrizmItem = {
  id: number;
  name: string;
};
@Component({
  selector: 'prizm-input-multi-select-with-transformer-example',
  templateUrl: './multi-select-with-transformer-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmInputMultiSelectWithTransformerExampleComponent {
  readonly items: PrizmItem[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ];

  readonly valueControl = new UntypedFormControl([3]);

  readonly searchMatcher: PrizmMultiSelectSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {
    return item?.name.toLowerCase().includes(search.toLowerCase());
  };

  readonly transformer: PrizmMultiSelectValueTransformer<PrizmItem> = a => a?.id;

  readonly identityMatcher: PrizmMultiSelectIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {
    return a === b;
  };

  readonly stringify: PrizmMultiSelectItemStringifyFunc<PrizmItem> = (
    item: PrizmMultiSelectItemStringifyItem<PrizmItem>
  ) => {
    return item.obj?.name;
  };

  public setDefaultValue(): void {
    this.valueControl.setValue([this.items[0].id]);
  }
}
