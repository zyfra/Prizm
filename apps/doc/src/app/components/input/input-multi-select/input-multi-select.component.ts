import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PrizmContextWithImplicit,
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
  selector: 'prizm-multi-select-example',
  templateUrl: './input-multi-select.component.html',
  styleUrls: ['./input-multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputInputMultiSelectComponent {
  dropdownStylesVariants: ReadonlyArray<PrizmDropdownHostStyles> = [
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
      blackBackground: true,
    },
  ];
  public dropdownClasses: PrizmDropdownHostStyles;
  readonly layoutKey = 'PrizmInputLayoutComponent';
  readonly selectKey = 'PrizmMultiSelectInputComponent';
  public border = false;
  public inputPosition: PrizmInputPosition = 'left';
  public inputPositionVariants: PrizmInputPosition[] = ['left', 'center'];

  public status: PrizmInputStatus = 'default';
  public statuses: PrizmInputStatus[] = ['default', 'success', 'warning', 'danger'];

  public readOnly = false;
  val1: any[];
  public pseudoInvalid = false;
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public focusable = true;
  public pseudoState = '';
  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  public icon: PolymorphContent<PrizmSelectIconContext> = null;

  readonly iconVariants: ReadonlyArray<PolymorphContent<PrizmSelectIconContext>> = [null, 'sort-zoom-in'];
  readonly control = new UntypedFormControl();
  searchable = false;
  outer = false;
  label = 'Выберите участника';
  emptyContent = 'Ничего не найдено';
  isChipsDeletable = true;
  forceClearVariants: ReadonlyArray<boolean | null> = [null, false, true];
  forceClear = this.forceClearVariants[0];
  get sizeVariants(): ReadonlyArray<PrizmInputSize> {
    return this.outer ? ['s', 'm', 'l'] : ['m', 'l'];
  }
  size = this.sizeVariants[0];
  minDropdownHeight = 0;
  dropdownWidth = '100%';
  maxDropdownHeight = 342;
  placeholder = '';
  visibility: PrizmScrollbarVisibility = 'auto';
  readonly itemsVariants: ReadonlyArray<string[] | null> = [
    ['One', 'Two', 'Three'],
    [
      'Андрей Сафанов',
      'Сергей Марков',
      'Аня Петрова',
      'Катя Петрова',
      'Саша Дуров',
      'Влад Константинов',
      'Костя Щербаков',
      'Рустам Гусев',
      'Филип Уваров',
      'Сергей Сафанов',
      'Саша Марков',
      'Катя Петрова',
      'Маша Ветрова',
      'Влад Дуров',
      'Саша Константинов',
      'Рустам Щербаков',
      'Костя Гусев',
      'Борис Уваров',
      'Супер длинный чипс с каким то содержимым',
    ],
    [],
    null,
  ];
  readonly dropdownScrollVariants: PrizmScrollbarVisibility[] = [`auto`, `hidden`, `visible`];
  dropdownScroll: PrizmScrollbarVisibility = 'auto';

  readonly valueControl = new UntypedFormControl();
  public items = this.itemsVariants[1];
  public testIdPostfix: string;

  set disabled(state: boolean) {
    if (state) this.control.disable();
    else this.control.enable();
  }
  get disabled(): boolean {
    return this.control.disabled;
  }

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/multi-select-base-example.component.ts?raw'),
    HTML: import('./examples/base/multi-select-base-example.component.html?raw'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('./examples/with-template/multi-select-with-template-example.component.ts?raw'),
    HTML: import('./examples/with-template/multi-select-with-template-example.component.html?raw'),
  };

  readonly exampleWithObject: TuiDocExample = {
    TypeScript: import('./examples/with-object/multi-select-with-object-example.component.ts?raw'),
    HTML: import('./examples/with-object/multi-select-with-object-example.component.html?raw'),
  };

  readonly exampleValidators: TuiDocExample = {
    TypeScript: import('./examples/validators/multi-select-validators-example.component.ts?raw'),
    HTML: import('./examples/validators/multi-select-validators-example.component.html?raw'),
  };

  readonly exampleWithSearch: TuiDocExample = {
    TypeScript: import('./examples/with-search/multi-select-with-search-example.component.ts?raw'),
    HTML: import('./examples/with-search/multi-select-with-search-example.component.html?raw'),
  };

  public valueTemplate: PolymorphContent<PrizmContextWithImplicit<any>> = '';
  @prizmPure
  public getValueTemplate(...temps: PolymorphContent[]): PolymorphContent<any>[] {
    return [null, ...temps];
  }

  public get val(): string {
    return this.control.value;
  }

  public searchMatcher = (searchValue: string, item: unknown): boolean => {
    return item?.toString()?.toLowerCase().includes(searchValue?.toLowerCase());
  };

  public identityMatcher = (a: unknown, b: unknown): boolean => {
    return a === b;
  };

  public stringify = (i: unknown): string => {
    return i?.toString?.() ?? '';
  };

  public setValue(val: string[]): void {
    this.control.setValue(val);
  }
}
