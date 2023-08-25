import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmTreeMultiSelectIdentityMatcher,
  PrizmTreeMultiSelectItemStringifyFunc,
  PrizmTreeMultiSelectItemStringifyItem,
  PrizmTreeMultiSelectSearchMatcher,
} from '@prizm-ui/components';

type PrizmItem = {
  id: number;
  name: string;
};
@Component({
  selector: 'prizm-multi-select-with-object-example',
  templateUrl: './multi-select-with-object-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmMultiSelectWithObjectExampleComponent {
  readonly items: PrizmItem[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ];
  readonly selectAllItem = { id: -1, name: 'Выбрать все' };
  readonly valueControl = new UntypedFormControl([{ id: 3 }]);
  readonly searchMatcher: PrizmTreeMultiSelectSearchMatcher<PrizmItem> = (
    search: string,
    item: PrizmItem
  ) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };
  readonly identityMatcher: PrizmTreeMultiSelectIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {
    return a.id === b.id;
  };
  readonly stringify: PrizmTreeMultiSelectItemStringifyFunc<PrizmItem> = (
    item: PrizmTreeMultiSelectItemStringifyItem<PrizmItem>
  ) => {
    return item.obj.name;
  };
}
