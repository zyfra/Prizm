import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmSelectIdentityMatcher, PzmSelectSearchMatcher, PzmSelectStringify } from '@digital-plant/zui-components';
import { tap } from 'rxjs/operators';

type PzmItem = {
  id: number;
  name: string;
}
@Component({
  selector: 'pzm-select-with-object-example',
  templateUrl: './select-with-object-example.component.html',
  styles: [`
    .item {
      display: flex;
      gap: .5rem;
    }
  `]
})
export class PzmSelectWithObjectExampleComponent {
  readonly items: PzmItem[] = [
    {id: 1, name: 'Россия'},
    {id: 2, name: 'США'},
    {id: 3, name: 'ОАЭ'},
  ];
  readonly valueControl = new FormControl({id: 3});

  readonly searchMatcher: PzmSelectSearchMatcher<PzmItem> = (search: string, item: PzmItem) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  readonly identityMatcher: PzmSelectIdentityMatcher<PzmItem> = (a: PzmItem, b: PzmItem) => {
    return a.id === b.id;
  }

  readonly stringify: PzmSelectStringify<PzmItem> = (item: PzmItem) => {
    return item.name;
  }

  public setDefaultValue(): void {
    this.valueControl.setValue(this.items[0]);
  }
}
