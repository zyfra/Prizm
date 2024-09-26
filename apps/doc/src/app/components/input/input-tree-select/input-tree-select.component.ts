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
  PrizmSelectIconContext,
} from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';
import { prizmPure } from '@prizm-ui/core';

@Component({
  selector: 'prizm-select-example',
  templateUrl: './input-tree-select.component.html',
  styleUrls: ['./input-tree-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTreeSelectComponent {
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

  public valueTemplate: PolymorphContent<any> = '';
  public listItemTemplate: PolymorphContent<any> = null;
  readonly dropdownScrollVariants: PrizmScrollbarVisibility[] = [`auto`, `hidden`, `visible`];
  dropdownScroll: PrizmScrollbarVisibility = 'auto';

  public icon: PolymorphContent<PrizmSelectIconContext> | null = null;
  public testIdPostfix!: string;

  readonly iconVariants: ReadonlyArray<PolymorphContent<PrizmSelectIconContext>> = [
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
