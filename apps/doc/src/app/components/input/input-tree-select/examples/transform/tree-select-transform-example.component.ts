import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { BehaviorSubject, delay } from 'rxjs';

type TreeSelectItem = {
  value: string;
  children?: TreeSelectItem[];
};

@Component({
  selector: 'prizm-tree-select-transform-example',
  templateUrl: './tree-select-transform-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmTreeSelectTransformExampleComponent {
  protected items: TreeSelectItem[] = [
    {
      value: 'One',
    },
    {
      value: 'Two',
      children: [
        {
          value: 'first in two',
          children: [
            {
              value: 'first in first in two',
            },
          ],
        },
        {
          value: 'second in two',
        },
      ],
    },
  ];
  protected items2: TreeSelectItem[] = [
    {
      value: 'Three',
      children: [
        {
          value: 'first in first in Three',
        },
        {
          value: 'second in first in Three',
        },
      ],
    },
    {
      value: 'Very long text with a lot of characters and spaces and other stuff and things',
    },
  ];
  private selectedItems$$ = new BehaviorSubject<TreeSelectItem[]>(this.items);
  protected items$ = this.selectedItems$$.pipe(delay(100));
  public value = this.items[0];
  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);

  public stringify(item: TreeSelectItem | null): string | null {
    return item?.value ?? null;
  }
  public getChildren(item: TreeSelectItem): TreeSelectItem[] {
    return item.children ?? [];
  }
  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }
  public change(): void {
    this.control.setValue(null);
    this.selectedItems$$.next(this.selectedItems$$.value === this.items ? this.items2 : this.items);
  }
}
