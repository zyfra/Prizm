import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { PRIZM_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE } from '@prizm-ui/i18n';
import { of } from 'rxjs';

type TreeSelectItem = {
  value: string;
  children?: TreeSelectItem[];
};

@Component({
  selector: 'prizm-tree-select-i18n-example',
  templateUrl: './tree-select-i18n-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
  providers: [
    /** INFO: you can change from dictionary as here
     * or also you can pass param
     * searchLabel OR emptyListTemplate
     * */
    {
      provide: PRIZM_LANGUAGE,
      useValue: of({
        ...PRIZM_RUSSIAN_LANGUAGE,
        search: 'поиск (из словаря)',
      }),
    },
  ],
})
export class PrizmTreeSelectI18nExampleComponent {
  readonly items: TreeSelectItem[] = [
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
  public value = this.items[0];
  readonly control = new UntypedFormControl(this.items[1], [Validators.required]);

  public stringify(item: TreeSelectItem | null): string {
    return item?.value ?? '';
  }
  public getChildren(item: TreeSelectItem): TreeSelectItem[] {
    return item.children ?? [];
  }
  public searchMatcher(search: string, item: TreeSelectItem): boolean {
    return item.value.toLowerCase().includes(search.toLowerCase());
  }
  public setDefaultValue(): void {
    this.control.setValue(this.items[0], { emitEvent: false });
  }
}