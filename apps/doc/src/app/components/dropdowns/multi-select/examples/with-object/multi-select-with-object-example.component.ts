import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  PzmMultiSelectIdentityMatcher,
  PzmMultiSelectItemStringifyFunc,
  PzmMultiSelectItemStringifyItem,
  PzmMultiSelectSearchMatcher,
} from '@digital-plant/zui-components';

type PzmItem = {
  id: number;
  name: string;
}
@Component({
  selector: 'pzm-multi-select-with-object-example',
  templateUrl: './multi-select-with-object-example.component.html',
  styles: [`
    .item {
      display: flex;
      gap: .5rem;
    }
  `]
})
export class PzmMultiSelectWithObjectExampleComponent {
  readonly items: PzmItem[] = [
    {id: 1, name: 'Россия'},
    {id: 2, name: 'США'},
    {id: 3, name: 'ОАЭ'},
  ];
  readonly selectAllItem = {id: -1, name: 'Выбрать все'};
  readonly valueControl = new FormControl([{id: 3}]);
  readonly searchMatcher: PzmMultiSelectSearchMatcher<PzmItem> = (search: string, item: PzmItem) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };
  readonly identityMatcher: PzmMultiSelectIdentityMatcher<PzmItem> = (a: PzmItem, b: PzmItem) => {
    return a.id === b.id;
  }
  readonly stringify: PzmMultiSelectItemStringifyFunc<PzmItem> = (item: PzmMultiSelectItemStringifyItem<PzmItem>) => {
    return item.obj.name;
  }
}
