import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PrizmDropdownHostClasses,
  PrizmDropdownHostStyles,
  PrizmHintOptions,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmOverlayOutsidePlacement,
  PrizmScrollbarVisibility,
  PrizmInputTreeMultiSelectCheckboxPosition,
} from '@prizm-ui/components';
import { UntypedFormControl, Validators } from '@angular/forms';

type TreeSelectItem = {
  value: string;
  children?: TreeSelectItem[];
};
@Component({
  selector: 'prizm-multi-select-example',
  templateUrl: './input-tree-multi-select.component.html',
  styleUrls: ['./input-multi-tree-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTreeMultiSelectComponent {
  public dropdownStylesVariants: ReadonlyArray<PrizmDropdownHostStyles> = [
    null,
    {
      '--prizm-data-list-background': 'gray',
      '--prizm-select-item-background': 'gray',
      '--prizm-data-list-header-text': 'white',
    },
  ];
  public prizmHintCanShow = true;
  public prizmHintDirection: PrizmHintOptions['direction'] = 't';
  public readonly prizmHintDirectionVariants: ReadonlyArray<PrizmHintOptions['direction']> = Object.values(
    PrizmOverlayOutsidePlacement
  );
  public dropdownStyles: PrizmDropdownHostStyles;
  public dropdownClassesVariants: ReadonlyArray<PrizmDropdownHostStyles> = [
    null,
    {
      extraDropdownClass: true,
    },
  ];
  public dropdownClasses: PrizmDropdownHostClasses;

  isChipsDeletable = false;
  checkboxPositionVariants: PrizmInputTreeMultiSelectCheckboxPosition[] = ['after', 'before'];
  checkboxPosition = this.checkboxPositionVariants[0];

  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly checkboxDirective = 'PrizmInputTreeMultiSelectCheckboxDirective';
  readonly selectKey = 'PrizmInputTreeMultiSelectComponent';
  public readOnly = false;
  public border = true;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public dropdownWidth = '100%';

  searchable = false;
  outer = false;
  label = 'Выберите дерево';
  get sizeVariants(): ReadonlyArray<PrizmInputSize> {
    return this.outer ? ['s', 'm', 'l'] : ['m', 'l'];
  }
  size = this.sizeVariants[0];
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  forceClear = this.forceClearVariants[0];

  public hideClearButtonHint: boolean | null = null;
  public hideHintVariants: ReadonlyArray<boolean | null> = [null, false, true];

  emptyListTemplate = 'Ничего не найдено';
  searchLabel = 'Не выбрано';
  searchPlaceholder = '';
  prizmDropdownMinHeight = 0;
  prizmDropdownMaxHeight = 342;
  placeholder = '';
  autoReposition = false;
  visibility: PrizmScrollbarVisibility = 'auto';

  public set disabled(state: boolean) {
    if (state) this.control.disable();
    else this.control.enable();
  }
  public get disabled(): boolean {
    return this.control.disabled;
  }

  public get val(): string {
    return this.control.value;
  }
  public searchMatcher(search: string, item: TreeSelectItem): boolean {
    return item?.value?.toLowerCase().includes(search.toLowerCase());
  }
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleI18N: TuiDocExample = {
    TypeScript: import('./examples/i18n/tree-select-i18n-example.component.ts?raw'),
    HTML: import('./examples/i18n/tree-select-i18n-example.component.html?raw'),
  };
  readonly exampleProjection: TuiDocExample = {
    TypeScript: import('./examples/projection/tree-select-projection-example.component.ts?raw'),
    HTML: import('./examples/projection/tree-select-projection-example.component.html?raw'),
  };
  readonly exampleTransform: TuiDocExample = {
    TypeScript: import('./examples/transform/tree-select-transform-example.component.ts?raw'),
    HTML: import('./examples/transform/tree-select-transform-example.component.html?raw'),
  };
  readonly exampleSearch: TuiDocExample = {
    TypeScript: import('./examples/search/tree-select-search-example.component.ts?raw'),
    HTML: import('./examples/search/tree-select-search-example.component.html?raw'),
  };
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
  readonly control = new UntypedFormControl([this.items[1]], [Validators.required]);

  public stringify(item: TreeSelectItem | null): string {
    return item?.value ?? '';
  }
  public getChildren(item: TreeSelectItem): TreeSelectItem[] {
    return item.children ?? [];
  }
  public setDefaultValue(): void {
    this.control.setValue([this.items[0]], { emitEvent: false });
  }
}
