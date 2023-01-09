import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import {
  PolymorphContent,
  PrizmInputSize,
  PrizmScrollbarVisibility,
  PrizmSelectIconContext,
} from '@prizm-ui/components';
import { FormControl } from '@angular/forms';
import { prizmPure } from '@prizm-ui/core';

@Component({
  selector: 'prizm-select-example',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  public readOnly = false;
  val1: any;
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
  public dropdownWidth = '200px';

  readonly control = new FormControl();
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
  readonly valVariants: ReadonlyArray<string | null> = [...this.itemsVariants[0], null];
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

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/select-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/select-base-example.component.html'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-template/select-with-template-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-template/select-with-template-example.component.html'),
  };

  readonly exampleWithObject: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-object/select-with-object-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-object/select-with-object-example.component.html'),
  };

  readonly exampleWithSearch: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-search/select-with-search-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-search/select-with-search-example.component.html'),
  };

  readonly exampleWithBackendSearch: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/with-backend-search/select-with-backend-search-example.component.ts'
    ),
    HTML: import(
      '!!raw-loader!./examples/with-backend-search/select-with-backend-search-example.component.html'
    ),
  };

  public valueTemplate: PolymorphContent<any> = '';

  public icon: PolymorphContent<PrizmSelectIconContext> = null;

  readonly iconVariants: ReadonlyArray<PolymorphContent<PrizmSelectIconContext>> = [null, 'sort-zoom-in'];

  @prizmPure
  public getValueTemplate(...temps: PolymorphContent[]): PolymorphContent<any>[] {
    return [null, ...temps];
  }

  public searchMatcher = (searchValue: string, item: unknown): boolean => {
    return item?.toString()?.toLowerCase().includes(searchValue.toLowerCase());
  };

  public identityMatcher = (a: unknown, b: unknown): boolean => {
    return a === b;
  };

  // public stringify = (i: unknown): string => {
  //   return i?.toString?.() ?? '';
  // };

  public setValue(val: string): void {
    this.control.setValue(val);
  }
}
