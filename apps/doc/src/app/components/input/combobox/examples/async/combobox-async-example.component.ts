import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import {
  PrizmComboboxIdentityMatcher,
  PrizmComboboxSearchMatcher,
  PrizmComboboxStringify,
} from '@prizm-ui/components';
import { delay, map, startWith } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsUserCheck } from '@prizm-ui/icons/full/source';
type PrizmItem = {
  id: number;
  name: string;
};
@Component({
  selector: 'prizm-combobox-async-example',
  templateUrl: './combobox-async-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmComboboxAsyncExampleComponent {
  readonly items: PrizmItem[] = [
    { id: 1, name: 'Россия' },
    { id: 2, name: 'США' },
    { id: 3, name: 'ОАЭ' },
  ];
  readonly valueControl = new UntypedFormControl({ id: 3 });
  public readonly search$ = new Subject<string | null>();

  readonly searchItems$ = this.search$.pipe(
    startWith(null),
    map(search => {
      if (!search) return this.items;
      return this.items.filter(item => this.searchMatcher(search, item));
    })
  );

  protected searchMatcher: PrizmComboboxSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  readonly identityMatcher: PrizmComboboxIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {
    return a?.id === b?.id;
  };

  readonly stringify: PrizmComboboxStringify<PrizmItem> = (item: PrizmItem) => {
    return item?.name;
  };

  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsUserCheck);
  }

  public setDefaultValue(): void {
    this.valueControl.setValue(this.items[0]);
  }
}
