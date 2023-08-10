import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmMultiSelectIdentityMatcher,
  PrizmMultiSelectItemStringifyFunc,
  PrizmMultiSelectItemStringifyItem,
  PrizmMultiSelectSearchMatcher,
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
export class PrizmInputMultiSelectWithObjectExampleComponent {
  readonly items: (PrizmItem & any)[] = [
    { id: 1, name: 'Россия', parentId: '0' },
    { id: 2, name: 'США', parentId: '0' },
    { id: 3, name: 'ОАЭ', parentId: '0' },
    { id: 4, name: 'Москва', parentId: 1 },
  ];

  readonly selectAllItem = { id: -1, name: 'Выбрать все' };
  readonly valueControl = new UntypedFormControl([{ id: 3 }]);
  readonly valueTreeControl = new UntypedFormControl([{ id: 3 }]);
  readonly searchMatcher: PrizmMultiSelectSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {
    return item.name?.toLowerCase().includes(search.toLowerCase());
  };
  readonly identityMatcher: PrizmMultiSelectIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {
    return a?.id === b?.id;
  };
  readonly stringify: PrizmMultiSelectItemStringifyFunc<PrizmItem> = (
    item: PrizmMultiSelectItemStringifyItem<PrizmItem>
  ) => {
    return item.obj?.name;
  };
}
