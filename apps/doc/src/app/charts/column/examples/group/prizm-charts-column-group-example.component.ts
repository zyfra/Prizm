import { Component } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmChartsColumnItem } from '@prizm-ui/charts';

@Component({
  selector: 'prizm-charts-column-group-example',
  templateUrl: './prizm-charts-column-group-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `,
  ],
})
export class PrizmChartsColumnGroupExampleComponent {
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

  public options = {
    isGroup: true,
    isStack: true,
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
