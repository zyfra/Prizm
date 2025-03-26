import { Component } from '@angular/core';
import { PrizmMultiSelectIdentityMatcher, PrizmMultiSelectSearchMatcher } from '@prizm-ui/components';
import { BehaviorSubject, delay } from 'rxjs';
import { UntypedFormControl } from '@angular/forms';

type TreeSelectItem = {
  data: { value: string; id: string };
  children?: TreeSelectItem[];
};

@Component({
  selector: 'prizm-tree-select-base-example',
  templateUrl: './tree-select-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }

      .value {
        overflow: hidden;
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `,
  ],
})
export class PrizmTreeSelectBaseExampleComponent {
  protected items: TreeSelectItem[] = [
    {
      data: {
        value: 'One',
        id: 'One',
      },
    },
    {
      data: {
        value: 'Two',
        id: 'Two',
      },
      children: [
        {
          data: {
            value: 'first in two',
            id: 'first in two',
          },
          children: [
            {
              data: {
                value: 'first in first in two',
                id: 'first in first in two',
              },
            },
          ],
        },
        {
          data: {
            value: 'second in two',
            id: 'second in two',
          },
        },
      ],
    },
  ];
  private selectedItems$$ = new BehaviorSubject<TreeSelectItem[]>(this.items);
  protected items$ = this.selectedItems$$.pipe(delay(100));
  public value = this.items[0];
  readonly control = new UntypedFormControl([{ ...this.items[0] }]);

  public stringify(item: TreeSelectItem | null): string {
    return item?.data ? item.data.value : '';
  }
  public getChildren(item: TreeSelectItem): TreeSelectItem[] {
    return item.children ?? [];
  }

  public searchMatcher: PrizmMultiSelectSearchMatcher<TreeSelectItem> = (
    search: string,
    item: TreeSelectItem
  ) => {
    return item.data.value?.toLowerCase().includes(search.toLowerCase());
  };

  public readonly identityMatcher: PrizmMultiSelectIdentityMatcher<TreeSelectItem> = (
    a: TreeSelectItem,
    b: TreeSelectItem
  ): boolean => {
    console.log('#Mz identityMatcher', { a, b });
    return a?.data.id === b?.data.id;
  };

  public setDefaultValue(): void {
    this.control.setValue([{ ...this.items[1] }], { emitEvent: false });
  }
  public change(): void {
    this.control.setValue(null);
    // this.selectedItems$$.next(this.selectedItems$$.value === this.items ? this.items2 : this.items);
  }
}
