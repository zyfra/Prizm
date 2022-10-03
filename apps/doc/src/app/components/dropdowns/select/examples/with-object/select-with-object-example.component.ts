import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  ZuiMultiSelectIdentityMatcher,
  ZuiMultiSelectItemStringifyFunc,
  ZuiMultiSelectItemStringifyItem,
  ZuiMultiSelectSearchMatcher,
} from '@digital-plant/zui-components';

type ZuiItem = {
  id: number;
  name: string;
}
@Component({
  selector: 'zui-select-with-object-example',
  templateUrl: './select-with-object-example.component.html',
  styles: [`
    .item {
      display: flex;
      gap: .5rem;
    }
  `]
})
export class ZuiSelectWithObjectExampleComponent {
  readonly items: ZuiItem[] = [
    {id: 1, name: 'Россия'},
    {id: 2, name: 'США'},
    {id: 3, name: 'ОАЭ'},
  ];
  readonly valueControl = new FormControl([{id: 3}]);
  readonly searchMatcher: ZuiMultiSelectSearchMatcher<ZuiItem> = (search: string, item: ZuiItem) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };
  readonly identityMatcher: ZuiMultiSelectIdentityMatcher<ZuiItem> = (a: ZuiItem, b: ZuiItem) => {
    return a.id === b.id;
  }
  readonly stringify: ZuiMultiSelectItemStringifyFunc<ZuiItem> = (item: ZuiMultiSelectItemStringifyItem<ZuiItem>) => {
    return item.obj.name;
  }
}
