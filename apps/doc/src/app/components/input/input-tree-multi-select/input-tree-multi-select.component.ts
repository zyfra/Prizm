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
} from '@prizm-ui/components';
import { UntypedFormControl, Validators } from '@angular/forms';

type TreeSelectItem = string;

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

  readonly layoutKey = 'PrizmInputLayoutComponent';
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
    'One',
    'Twp',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];

  public value = this.items[0];
  readonly control = new UntypedFormControl([this.items[1]], [Validators.required]);

  public stringify(item: TreeSelectItem | null): string {
    return item ?? '';
  }
  public getChildren(item: TreeSelectItem): TreeSelectItem[] {
    return [];
  }
  public setDefaultValue(): void {
    this.control.setValue([this.items[0]], { emitEvent: false });
  }
}
