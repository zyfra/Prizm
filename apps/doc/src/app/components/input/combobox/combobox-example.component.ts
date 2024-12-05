import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PrizmDropdownHostClasses,
  PrizmDropdownHostStyles,
  PrizmHintOptions,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmOverlayOutsidePlacement,
  PrizmScrollbarVisibility,
  PrizmComboboxIconContext,
} from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';
import { prizmPure } from '@prizm-ui/core';

@Component({
  selector: 'prizm-combobox-example',
  templateUrl: './combobox-example.component.html',
  styleUrls: ['./combobox-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboboxExampleComponent {
  public dropdownStylesVariants: ReadonlyArray<PrizmDropdownHostStyles> = [
    null,
    {
      '--prizm-data-list-background': 'gray',
      '--prizm-combobox-item-background': 'gray',
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
  readonly selectKey = 'PrizmComboboxInputComponent';
  public readOnly = false;
  public border = true;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public dropdownWidth = '100%';

  readonly control = new UntypedFormControl();
  searchable = false;
  outer = false;
  label = 'Выберите участника';
  get sizeVariants(): ReadonlyArray<PrizmInputSize> {
    return this.outer ? ['s', 'm', 'l'] : ['m', 'l'];
  }
  size = this.sizeVariants[0];
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  forceClear = this.forceClearVariants[0];

  public hideClearButtonHint: boolean | null = null;
  public hideHintVariants: ReadonlyArray<boolean | null> = [null, false, true];

  emptyContent = 'Ничего не найдено';
  nullContent = 'Не выбрано';
  minDropdownHeight = 0;
  maxDropdownHeight = 342;
  placeholder = '';
  autoReposition = false;
  visibility: PrizmScrollbarVisibility = 'auto';
  readonly itemsVariants: ReadonlyArray<string[] | null> = [
    [
      'Андрей Сафанов Андрей Сафанов Андрей Сафанов Андрей Сафанов',
      'Сергей Марков',
      'Аня Петрова',
      'Катя Петрова',
      'Саша Дуров',
      'Влад Константинов',
      'Костя Щербаков',
      'Рустам Гусев',
      'Филип Уваров',
      'Влад Константинов 2',
      'Костя Щербаков 2',
      'Рустам Гусев 2',
      'Филип Уваров 2',
    ],
    null,
  ];
  readonly valVariants: ReadonlyArray<string | null> = [...(this.itemsVariants[0] ?? []), null];
  public items: string[] | null = this.itemsVariants[0];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/combobox-base-example.component.ts?raw'),
    HTML: import('./examples/base/combobox-base-example.component.html?raw'),
  };
  readonly exampleVirtualScroll: TuiDocExample = {
    TypeScript: import('./examples/virtual-scroll/combobox-virtual-scroll-example.component.ts?raw'),
    HTML: import('./examples/virtual-scroll/combobox-virtual-scroll-example.component.html?raw'),
  };
  readonly exampleAsync: TuiDocExample = {
    TypeScript: import('./examples/async/combobox-async-example.component.ts?raw'),
    HTML: import('./examples/async/combobox-async-example.component.html?raw'),
  };
  readonly exampleStringify: TuiDocExample = {
    TypeScript: import('./examples/stringify/combobox-stringify-example.component.ts?raw'),
    HTML: import('./examples/stringify/combobox-stringify-example.component.html?raw'),
  };
  readonly exampleFullWidth: TuiDocExample = {
    TypeScript: import('./examples/full-width/combobox-full-width-example.component.ts?raw'),
    HTML: import('./examples/full-width/combobox-full-width-example.component.html?raw'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('./examples/with-template/combobox-with-template-example.component.ts?raw'),
    HTML: import('./examples/with-template/combobox-with-template-example.component.html?raw'),
  };

  readonly exampleWithObject: TuiDocExample = {
    TypeScript: import('./examples/with-object/combobox-with-object-example.component.ts?raw'),
    HTML: import('./examples/with-object/combobox-with-object-example.component.html?raw'),
  };

  readonly exampleWithTransformer: TuiDocExample = {
    TypeScript: import('./examples/with-transformer/combobox-with-transformer-example.component.ts?raw'),
    HTML: import('./examples/with-transformer/combobox-with-transformer-example.component.html?raw'),
  };

  readonly exampleValidators: TuiDocExample = {
    TypeScript: import('./examples/validators/combobox-validators-example.component.ts?raw'),
    HTML: import('./examples/validators/combobox-validators-example.component.html?raw'),
  };
  readonly exampleWithBackendSearch: TuiDocExample = {
    TypeScript: import(
      './examples/with-backend-search/combobox-with-backend-search-example.component.ts?raw'
    ),
    HTML: import('./examples/with-backend-search/combobox-with-backend-search-example.component.html?raw'),
  };
  readonly exampleWithListItemTemplate: TuiDocExample = {
    TypeScript: import(
      './examples/with-list-item-template/combobox-with-list-item-template-example.component.ts?raw'
    ),
    HTML: import(
      './examples/with-list-item-template/combobox-with-list-item-template-example.component.html?raw'
    ),
  };

  public valueTemplate: PolymorphContent<any> = '';
  public listItemTemplate: PolymorphContent<any> = null;
  readonly dropdownScrollVariants: PrizmScrollbarVisibility[] = [`auto`, `hidden`, `visible`];
  dropdownScroll: PrizmScrollbarVisibility = 'auto';

  public icon: PolymorphContent<PrizmComboboxIconContext> | null = null;
  public testIdPostfix!: string;

  readonly iconVariants: ReadonlyArray<PolymorphContent<PrizmComboboxIconContext>> = [
    null as any,
    'magnifying-glass',
  ];

  @prizmPure
  public getValueTemplate(...temps: PolymorphContent[]): PolymorphContent<any>[] {
    return [null, ...temps];
  }

  public searchMatcher = (searchValue: string, item: unknown): boolean => {
    return !!item?.toString()?.toLowerCase().includes(searchValue?.toLowerCase());
  };

  public identityMatcher = (a: unknown, b: unknown): boolean => {
    return a === b;
  };

  public setValue(val: string): void {
    this.control.setValue(val);
  }
}
