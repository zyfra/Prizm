import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface ITableProduct {
  code: number;
  tipe: string;
  decoding: string;
  children?: ITableProduct[];
}

@Component({
  selector: 'prizm-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public columns: string[] = ['code', 'tipe', 'decoding'];

  public products: ITableProduct[] = TABLE_COUNTS;
}

export const TABLE_COUNTS: ITableProduct[] = [
  {
    code: 1,
    tipe: 'bug',
    decoding: 'Дефект',
  },
  {
    code: 2,
    tipe: 'design',
    decoding: 'Задача на дизайн',
  },
  {
    code: 3,
    tipe: 'docs',
    decoding: 'Доработка или добавление документации',
  },
  {
    code: 4,
    tipe: 'feature',
    decoding: 'Новый функционал',
  },
  {
    code: 5,
    tipe: 'improvement',
    decoding: 'Улучшение',
  },
  {
    code: 6,
    tipe: 'question',
    decoding: 'Вопрос',
  },
  {
    code: 7,
    tipe: 'research',
    decoding: 'Исследование или анализ',
  },
  {
    code: 8,
    tipe: 'test',
    decoding: 'Задачи на тестирование или покрытие тестами',
  },
  {
    code: 9,
    tipe: 'charts',
    decoding: 'Задача относится к библиотеке графиков',
  },
  {
    code: 10,
    tipe: 'widgets',
    decoding: 'Задача относится к библиотеке виджетов',
  },
  {
    code: 11,
    tipe: 'duplicate',
    decoding: 'Дублирующаяся задача',
  },
];
