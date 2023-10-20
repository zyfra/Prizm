import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import {
  PrizmSelectIdentityMatcher,
  PrizmSelectSearchMatcher,
  PrizmSelectStringify,
} from '@prizm-ui/components';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
type PrizmItem = {
  id: number;
  name: string;
};
@Component({
  selector: 'prizm-select-async-example',
  templateUrl: './select-async-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmSelectAsyncExampleComponent {
  readonly items: PrizmItem[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ];
  readonly items$: Observable<PrizmItem[]> = of([
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ]).pipe(delay(1000));
  readonly valueControl = new UntypedFormControl({ id: 3 });

  readonly searchMatcher: PrizmSelectSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  readonly identityMatcher: PrizmSelectIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {
    return a?.id === b?.id;
  };

  readonly stringify: PrizmSelectStringify<PrizmItem> = (item: PrizmItem) => {
    return item?.name;
  };

  public setDefaultValue(): void {
    this.valueControl.setValue(this.items[0]);
  }
}
