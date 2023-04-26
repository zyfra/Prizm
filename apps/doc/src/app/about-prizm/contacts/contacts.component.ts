import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from './../../../environments/environment';

export interface ITableProduct {
  name: string;
  description: string;
  priority: string | null;
  children?: ITableProduct[];
}

@Component({
  selector: 'prizm-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  public storybookBaseUrl = environment.storybookBaseUrl;

  public columns: string[] = ['code', 'name', 'description'];

  public labelTypes: ITableProduct[] = TABLE_LABEL_TYPES;
  public browserVersions: ITableProduct[] = TABLE_BROWSER_VERSIONS;
  public implementationTimeline: ITableProduct[] = TABLE_IMPLEMENTATION_TIMELINE;
}

const TABLE_LABEL_TYPES: ITableProduct[] = [
  {
    name: 'bug',
    description: 'Дефект',
    priority: null,
  },
  {
    name: 'design',
    description: 'Задача на дизайн',
    priority: null,
  },
  {
    name: 'docs',
    description: 'Доработка или добавление документации',
    priority: null,
  },
  {
    name: 'feature',
    description: 'Новый функционал',
    priority: null,
  },
  {
    name: 'improvement',
    description: 'Улучшение',
    priority: null,
  },
  {
    name: 'question',
    description: 'Вопрос',
    priority: null,
  },
  {
    name: 'research',
    description: 'Исследование или анализ',
    priority: null,
  },
  {
    name: 'test',
    description: 'Задачи на тестирование или покрытие тестами',
    priority: null,
  },
  {
    name: 'charts',
    description: 'Задача относится к библиотеке графиков',
    priority: null,
  },
  {
    name: 'widgets',
    description: 'Задача относится к библиотеке виджетов',
    priority: null,
  },
  {
    name: 'duplicate',
    description: 'Дублирующаяся задача',
    priority: null,
  },
];

const TABLE_BROWSER_VERSIONS: ITableProduct[] = [
  {
    name: 'Chrome',
    description: 'последняя и предыдущая стабильная версия',
    priority: null,
  },
  {
    name: 'Firefox',
    description: 'последняя и расширенная поддержка (ESR)',
    priority: null,
  },
  {
    name: 'Edge',
    description: '2 последние основные версии',
    priority: null,
  },
  {
    name: 'Safari',
    description: '2 последние основные версии',
    priority: null,
  },
  {
    name: 'iOS',
    description: '2 последние основные версии',
    priority: null,
  },
  {
    name: 'android',
    description: '2 последние основные версии',
    priority: null,
  },
];

const TABLE_IMPLEMENTATION_TIMELINE: ITableProduct[] = [
  {
    name: 'bug',
    description: '10 рабочих дней',
    priority: 'Высокий',
  },
  {
    name: 'feature',
    description: '30 рабочих дней',
    priority: 'Высокий',
  },
  {
    name: 'improvement',
    description: '30 рабочих дней',
    priority: 'Высокий',
  },
  {
    name: 'docs',
    description: '30 рабочих дней',
    priority: 'Высокий',
  },
  {
    name: 'design',
    description: '30 рабочих дней',
    priority: 'Высокий',
  },
  {
    name: 'question',
    description: '3 рабочих дня',
    priority: 'Высокий',
  },
  {
    name: 'bug',
    description: '20 рабочих дней',
    priority: 'Средний',
  },
  {
    name: 'feature',
    description: '60 рабочих дней',
    priority: 'Средний',
  },
  {
    name: 'improvement',
    description: '60 рабочих дней',
    priority: 'Средний',
  },
  {
    name: 'docs',
    description: '60 рабочих дней',
    priority: 'Средний',
  },
  {
    name: 'design',
    description: '60 рабочих дней',
    priority: 'Средний',
  },
  {
    name: 'question',
    description: '5 рабочих дней',
    priority: 'Средний',
  },
  {
    name: 'bug',
    description: '3 месяца',
    priority: 'Низкий',
  },
  {
    name: 'feature',
    description: 'неопределенное время (пересмотр приоритета 1 раз в квартал)',
    priority: 'Низкий',
  },
  {
    name: 'improvement',
    description: 'неопределенное время (пересмотр приоритета 1 раз в квартал)',
    priority: 'Низкий',
  },
  {
    name: 'docs',
    description: 'неопределенное время (пересмотр приоритета 1 раз в квартал)',
    priority: 'Низкий',
  },
  {
    name: 'design',
    description: 'неопределенное время (пересмотр приоритета 1 раз в квартал)',
    priority: 'Низкий',
  },
  {
    name: 'question',
    description: '5 рабочих дней',
    priority: 'Низкий',
  },
];
