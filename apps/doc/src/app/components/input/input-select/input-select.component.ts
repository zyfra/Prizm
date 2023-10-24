import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PrizmDropdownHostClasses,
  PrizmDropdownHostStyles,
  PrizmInputPosition,
  PrizmInputSize,
  PrizmInputStatus,
  PrizmScrollbarVisibility,
  PrizmSelectIconContext,
} from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';
import { prizmPure } from '@prizm-ui/core';

@Component({
  selector: 'prizm-select-example',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSelectComponent {
  public dropdownStylesVariants: ReadonlyArray<PrizmDropdownHostStyles> = [
    null,
    {
      '--prizm-data-list-background': 'gray',
      '--prizm-select-item-background': 'gray',
      '--prizm-data-list-header-text': 'white',
    },
  ];
  public dropdownStyles: PrizmDropdownHostStyles;
  public dropdownClassesVariants: ReadonlyArray<PrizmDropdownHostStyles> = [
    null,
    {
      extraDropdownClass: true,
    },
  ];
  public dropdownClasses: PrizmDropdownHostClasses;

  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly selectKey = 'PrizmSelectInputComponent';
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
  emptyContent = 'Ничего не найдено';
  nullContent = 'Не выбрано';
  minDropdownHeight = 0;
  maxDropdownHeight = 342;
  placeholder = '';
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

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/select-base-example.component.ts?raw'),
    HTML: import('./examples/base/select-base-example.component.html?raw'),
  };
  readonly exampleAsync: TuiDocExample = {
    TypeScript: import('./examples/async/select-async-example.component.ts?raw'),
    HTML: import('./examples/async/select-async-example.component.html?raw'),
  };
  readonly exampleStringify: TuiDocExample = {
    TypeScript: import('./examples/stringify/select-stringify-example.component.ts?raw'),
    HTML: import('./examples/stringify/select-stringify-example.component.html?raw'),
  };
  readonly exampleStringifyObservable: TuiDocExample = {
    TypeScript: import(
      './examples/stringify-observable/select-stringify-observable-example.component.ts?raw'
    ),
    HTML: import('./examples/stringify-observable/select-stringify-observable-example.component.html?raw'),
  };
  readonly exampleFullWidth: TuiDocExample = {
    TypeScript: import('./examples/full-width/select-full-width-example.component.ts?raw'),
    HTML: import('./examples/full-width/select-full-width-example.component.html?raw'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('./examples/with-template/select-with-template-example.component.ts?raw'),
    HTML: import('./examples/with-template/select-with-template-example.component.html?raw'),
  };

  readonly exampleWithObject: TuiDocExample = {
    TypeScript: import('./examples/with-object/select-with-object-example.component.ts?raw'),
    HTML: import('./examples/with-object/select-with-object-example.component.html?raw'),
  };

  readonly exampleWithTransformer: TuiDocExample = {
    TypeScript: import('./examples/with-transformer/select-with-transformer-example.component.ts?raw'),
    HTML: import('./examples/with-transformer/select-with-transformer-example.component.html?raw'),
  };

  readonly exampleWithSearch: TuiDocExample = {
    TypeScript: import('./examples/with-search/select-with-search-example.component.ts?raw'),
    HTML: import('./examples/with-search/select-with-search-example.component.html?raw'),
  };

  readonly exampleValidators: TuiDocExample = {
    TypeScript: import('./examples/validators/select-validators-example.component.ts?raw'),
    HTML: import('./examples/validators/select-validators-example.component.html?raw'),
  };
  readonly exampleWithBackendSearch: TuiDocExample = {
    TypeScript: import('./examples/with-backend-search/select-with-backend-search-example.component.ts?raw'),
    HTML: import('./examples/with-backend-search/select-with-backend-search-example.component.html?raw'),
  };
  readonly exampleWithListItemTemplate: TuiDocExample = {
    TypeScript: import(
      './examples/with-list-item-template/select-with-list-item-template-example.component.ts?raw'
    ),
    HTML: import(
      './examples/with-list-item-template/select-with-list-item-template-example.component.html?raw'
    ),
  };

  public valueTemplate: PolymorphContent<any> = '';
  public listItemTemplate: PolymorphContent<any> = null;
  readonly dropdownScrollVariants: PrizmScrollbarVisibility[] = [`auto`, `hidden`, `visible`];
  dropdownScroll: PrizmScrollbarVisibility = 'auto';

  public icon: PolymorphContent<PrizmSelectIconContext> | null = null;
  public testIdPostfix!: string;

  readonly iconVariants: ReadonlyArray<PolymorphContent<PrizmSelectIconContext>> = [
    null as any,
    'sort-zoom-in',
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
