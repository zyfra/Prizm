import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmSize } from '@prizm-ui/components';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmChartsColumnItem } from '@prizm-ui/charts';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './column.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {
  public sizeVariants: ReadonlyArray<PrizmSize> = ['s', 'm', 'xm', 'l', 'xl'];
  public size: PrizmSize = this.sizeVariants[0];
  public data: PrizmChartsColumnItem[] = [
    {
      product_type: 'Офисные принадлежности',
      sex: 'мужчина',
      order_amt: 8,
      product_sub_type: 'Ластик',
    },
    {
      product_type: 'Офисные принадлежности',
      sex: 'мужчина',
      order_amt: 10,
      product_sub_type: 'Книжная полка',
    },
    {
      product_type: 'Офисные принадлежности',
      sex: 'мужчина',
      order_amt: 20,
      product_sub_type: 'Чернильный камень',
    },
    {
      product_type: 'Офисные принадлежности',
      sex: 'Женский',
      order_amt: 13,
      product_sub_type: 'Чернильный камень',
    },
    {
      product_type: 'Офисные принадлежности',
      sex: 'Женский',
      order_amt: 21,
      product_sub_type: 'Ластик',
    },
    {
      product_type: 'Офисные принадлежности',
      sex: 'Женский',
      order_amt: 21,
      product_sub_type: 'Книжная полка',
    },
    {
      product_type: 'Бытовая техника мебель',
      sex: 'мужчина',
      order_amt: 13,
      product_sub_type: 'Стиральная машина',
    },
    {
      product_type: 'Бытовая техника мебель',
      sex: 'Женский',
      order_amt: 2,
      product_sub_type: 'Стиральная машина',
    },
    {
      product_type: 'Бытовая техника мебель',
      sex: 'мужчина',
      order_amt: 5,
      product_sub_type: 'Микроволновая печь',
    },
    {
      product_type: 'Бытовая техника мебель',
      sex: 'мужчина',
      order_amt: 14,
      product_sub_type: 'Индукционная плита',
    },
    {
      product_type: 'Бытовая техника мебель',
      sex: 'Женский',
      order_amt: 23,
      product_sub_type: 'Микроволновая печь',
    },
    {
      product_type: 'Бытовая техника мебель',
      sex: 'Женский',
      order_amt: 23,
      product_sub_type: 'Индукционная плита',
    },
    {
      product_type: 'Электронный продукт',
      sex: 'мужчина',
      order_amt: 33,
      product_sub_type: 'Компьютер',
    },
    {
      product_type: 'Электронный продукт',
      sex: 'Женский',
      order_amt: 4,
      product_sub_type: 'Компьютер',
    },
    {
      product_type: 'Электронный продукт',
      sex: 'Женский',
      order_amt: 23,
      product_sub_type: 'Переключатель',
    },
    {
      product_type: 'Электронный продукт',
      sex: 'мужчина',
      order_amt: 20.9,
      product_sub_type: 'Переключатель',
    },
    {
      product_type: 'Электронный продукт',
      sex: 'мужчина',
      order_amt: 5.9,
      product_sub_type: 'Мышь',
    },
    {
      product_type: 'Электронный продукт',
      sex: 'Женский',
      order_amt: 5.9,
      product_sub_type: 'Мышь',
    },
  ];
  public width: number | null = 600;
  public xField = 'product_type';
  public yField = 'order_amt';
  public groupField = 'sex';
  public seriesField = 'product_sub_type';
  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
  public height = 300;
  public options = {
    isGroup: true,
    isStack: true,
  };
  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/prizm-charts-column-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/prizm-charts-column-example.component.html'),
  };
  readonly exampleColumnGroup: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/group/prizm-charts-column-group-example.component.ts'),
    HTML: import('!!raw-loader!./examples/group/prizm-charts-column-group-example.component.html'),
  };
  readonly exampleColumnStack: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/stack/prizm-charts-column-stack-example.component.ts'),
    HTML: import('!!raw-loader!./examples/stack/prizm-charts-column-stack-example.component.html'),
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
