import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PrizmContextWithImplicit,
  PrizmInputSize,
  PrizmScrollbarVisibility,
  PrizmSelectIconContext,
} from '@prizm-ui/components';
import { FormControl } from '@angular/forms';
import { prizmPure } from '@prizm-ui/core';

@Component({
  selector: 'prizm-multi-select-example',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectComponent {
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
  readonly control = new FormControl();
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
    ],
    [],
    null,
  ];
  readonly valueControl = new FormControl();
  public items = this.itemsVariants[1];

  set disabled(state: boolean) {
    if (state) this.control.disable();
    else this.control.enable();
  }
  get disabled(): boolean {
    return this.control.disabled;
  }

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/multi-select-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/multi-select-base-example.component.html'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/with-template/multi-select-with-template-example.component.ts'
    ),
    HTML: import('!!raw-loader!./examples/with-template/multi-select-with-template-example.component.html'),
  };

  readonly exampleWithObject: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-object/multi-select-with-object-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-object/multi-select-with-object-example.component.html'),
  };

  readonly exampleWithSearch: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-search/multi-select-with-search-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-search/multi-select-with-search-example.component.html'),
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
    return item?.toString().toLowerCase().includes(searchValue.toLowerCase());
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
