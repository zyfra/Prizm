import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Column } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';

@Component({
  selector: 'prizm-charts-column-group',
  templateUrl: './prizm-charts-column-group.component.html',
  styleUrls: ['./prizm-charts-column-group.component.less'],
})
export class PrizmChartsColumnGroupComponent<T extends Record<string, unknown>> implements OnInit {
    @Input()
    @prizmDefaultProp()
    data: unknown[] = [
      {
        "product_type": "Офисные принадлежности",
        "sex": "мужчина",
        "order_amt": 8,
        "product_sub_type": "Ластик"
      },
      {
        "product_type": "Офисные принадлежности",
        "sex": "мужчина",
        "order_amt": 10,
        "product_sub_type": "Книжная полка"
      },
      {
        "product_type": "Офисные принадлежности",
        "sex": "мужчина",
        "order_amt": 20,
        "product_sub_type": "Чернильный камень"
      },
      {
        "product_type": "Офисные принадлежности",
        "sex": "Женский",
        "order_amt": 13,
        "product_sub_type": "Чернильный камень"
      },
      {
        "product_type": "Офисные принадлежности",
        "sex": "Женский",
        "order_amt": 21,
        "product_sub_type": "Ластик"
      },
      {
        "product_type": "Офисные принадлежности",
        "sex": "Женский",
        "order_amt": 21,
        "product_sub_type": "Книжная полка"
      },
      {
        "product_type": "Бытовая техника мебель",
        "sex": "мужчина",
        "order_amt": 13,
        "product_sub_type": "Стиральная машина"
      },
      {
        "product_type": "Бытовая техника мебель",
        "sex": "Женский",
        "order_amt": 2,
        "product_sub_type": "Стиральная машина"
      },
      {
        "product_type": "Бытовая техника мебель",
        "sex": "мужчина",
        "order_amt": 5,
        "product_sub_type": "Микроволновая печь"
      },
      {
        "product_type": "Бытовая техника мебель",
        "sex": "мужчина",
        "order_amt": 14,
        "product_sub_type": "Индукционная плита"
      },
      {
        "product_type": "Бытовая техника мебель",
        "sex": "Женский",
        "order_amt": 23,
        "product_sub_type": "Микроволновая печь"
      },
      {
        "product_type": "Бытовая техника мебель",
        "sex": "Женский",
        "order_amt": 23,
        "product_sub_type": "Индукционная плита"
      },
      {
        "product_type": "Электронный продукт",
        "sex": "мужчина",
        "order_amt": 33,
        "product_sub_type": "Компьютер"
      },
      {
        "product_type": "Электронный продукт",
        "sex": "Женский",
        "order_amt": 4,
        "product_sub_type": "Компьютер"
      },
      {
        "product_type": "Электронный продукт",
        "sex": "Женский",
        "order_amt": 23,
        "product_sub_type": "Переключатель"
      },
      {
        "product_type": "Электронный продукт",
        "sex": "мужчина",
        "order_amt": 20.9,
        "product_sub_type": "Переключатель"
      },
      {
        "product_type": "Электронный продукт",
        "sex": "мужчина",
        "order_amt": 5.9,
        "product_sub_type": "Мышь"
      },
      {
        "product_type": "Электронный продукт",
        "sex": "Женский",
        "order_amt": 5.9,
        "product_sub_type": "Мышь"
      }
    ];

    @Input()
    @prizmDefaultProp()
    theme: null | PrizmChartTheme = null;


    @ViewChild('container', {static: true, read: ElementRef}) container: ElementRef<HTMLElement>;

    ngOnInit(): void {
      prizmChartsSetDefaultThemes();

      const column = new Column(this.container.nativeElement, {
        data: this.data,
        xField: 'product_type',
        yField: 'order_amt',
        isGroup: true,
        isStack: true,
        seriesField: 'product_sub_type',
        groupField: 'sex',
      });

      column.render();
    }
}
