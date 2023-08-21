import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import {
  PrizmHandler,
  PrizmMultiSelectIdentityMatcher,
  PrizmMultiSelectItemStringifyFunc,
  PrizmMultiSelectItemStringifyItem,
  PrizmMultiSelectSearchMatcher,
} from '@prizm-ui/components';
import { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';

type PrizmItem = {
  id: number;
  name: string;
  children?: PrizmItem[];
};
@Component({
  selector: 'prizm-multi-select-with-tree-example',
  templateUrl: './multi-select-with-tree-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmInputMultiSelectWithTreeExampleComponent {
  map = new Map<PrizmItem, boolean>();
  readonly items: PrizmItem[] = [
    {
      id: 1,
      name: 'Россия',
      children: [
        { id: 101, name: 'Москва' },
        { id: 102, name: 'Санкт-Петербург' },
      ],
    },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ];

  public onChecked(node: PrizmItem, value: boolean): void {
    flatten(node).forEach(item => this.map.set(item, value));

    this.map = new Map(this.map.entries());
  }
  readonly handler: PrizmHandler<PrizmItem, readonly PrizmItem[]> = item =>
    item.children || PRIZM_EMPTY_ARRAY;

  readonly selectAllItem = { id: -1, name: 'Выбрать все' };
  readonly valueControl = new FormControl([{ id: 3 }]);
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

  readonly getValue = (item: PrizmItem, map: Map<PrizmItem, boolean>): boolean | null => {
    const flat = flatten(item);
    const result = !!map.get(flat[0]);

    for (let i = 0; i < flat.length; i++) {
      if (result !== !!map.get(flat[i])) {
        return null;
      }
    }

    return result;
  };
}

function flatten(item: PrizmItem): readonly PrizmItem[] {
  return item.children ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], []) : [item];
}
