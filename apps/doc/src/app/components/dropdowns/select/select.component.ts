import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PolymorphContent, PzmInputSize, pzmPure, PzmScrollbarVisibility } from '@digital-plant/zui-components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-select-example',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  readonly control = new FormControl();
  searchable = false;
  outer = false;
  label = 'Выберите участника';
  get sizeVariants(): ReadonlyArray<PzmInputSize> {
    return this.outer
      ? ['s', 'm', 'l']
      : ['m', 'l'];
  };
  size = this.sizeVariants[0];
  forceClearVariants: ReadonlyArray<boolean | null> = [
    null,
    false,
    true
  ];
  forceClear = this.forceClearVariants[0];
  emptyContent = 'Ничего не найдено';
  nullContent = 'Не выбрано';
  minDropdownHeight = 0;
  maxDropdownHeight = 342;
  placeholder = '';
  visibility: PzmScrollbarVisibility = 'auto';
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
    null
  ];
  readonly valVariants: ReadonlyArray<string | null> =  [
    ...this.itemsVariants[0],
    null
  ];
  public items: string[] | null = this.itemsVariants[0];


  public set disabled(state: boolean) {
    if (state)
      this.control.disable();
    else
      this.control.enable()
  }
  public get disabled(): boolean {
    return this.control.disabled;
  }

  public get val(): string {
    return this.control.value;
  }

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

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


  public valueTemplate: PolymorphContent<any> = ''
  @pzmPure
  public getValueTemplate (...temps: PolymorphContent[]): PolymorphContent<any>[] {
    return [
      null,
      ...temps
    ]
  }

  public searchMatcher = (searchValue: string, item: unknown): boolean => {
    return item?.toString().toLowerCase().includes(searchValue.toLowerCase());
  }

  public identityMatcher = (a: unknown, b: unknown): boolean => {
    return a === b;
  };

  // public stringify = (i: unknown): string => {
  //   return i?.toString?.() ?? '';
  // };

  public setValue(val: string): void {
    this.control.setValue(val)
  }

}
