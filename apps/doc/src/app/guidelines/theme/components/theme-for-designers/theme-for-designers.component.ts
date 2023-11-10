import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent } from '@taiga-ui/addon-doc';

@Component({
  selector: 'prizm-theme-for-designers',
  templateUrl: './theme-for-designers.component.html',
  styleUrls: ['./theme-for-designers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeForDesignersComponent {
  public readonly hex: RawLoaderContent = import('./../examples/hex.md?raw');
  public readonly style: RawLoaderContent = import('./../examples/style.md?raw');
  public readonly token: RawLoaderContent = import('./../examples/token.md?raw');
  public readonly libs = [
    {
      name: '🎨 Prizm. Variable Palette',
      description: 'Палитра для привязки к токенам',
    },
    {
      name: '🎨 Prizm. Variable Colors',
      description: 'Токены',
    },
  ];

  public readonly tokens: { name: string; description: string; groupName?: string }[] = [
    {
      groupName: 'Text-Icon',
      name: 'Primary',
      description: 'Заголовок',
    },
    {
      name: 'Secondary',
      description: 'Параграф текста',
    },
    {
      name: 'Tertiary',
      description: 'Описание',
    },
    {
      name: 'Disable',
      description: 'Цвет заблокированных текстовых блоков',
    },
    {
      name: 'Revers',
      description: 'Для контента в хинтах и тутипах',
    },
    {
      name: 'Link',
      description: 'Ссылка',
    },
    {
      name: 'Link-Hover',
      description: 'Цвет наведения на ссылку',
    },
    {
      name: 'Link-Visited',
      description: 'Цвет посещенной ссылки',
    },
    {
      groupName: 'Background',
      name: 'Fill-Primary',
      description: 'Тело виджета',
    },
    {
      name: 'Fill-Secondary',
      description: 'Подложка виджета',
    },
    {
      name: 'Fill-Revers',
      description: 'Тело хинта и тултипа',
    },
    {
      name: 'Stroke',
      description: 'Обводка виджета',
    },
    {
      name: 'Overlay',
      description: 'Заливка при появлении модального окна',
    },
    {
      name: 'Focus',
      description: 'Обводка фокуса для навигации с клавиатуры',
    },
    {
      name: 'Fill-Overlay',
      description: 'Цвет всех всплывающих окон',
    },
    {
      name: 'Fill-Blanket',
      description: 'Подложка модальных окон',
    },
    {
      name: 'Fill-Panel',
      description: 'Заливка панели без перекраски в темной теме',
    },
    {
      groupName: 'Status',
      name: 'Info-Primary-Default',
      description: 'Основной цвет для информационного статуса',
    },
    {
      name: 'Info-Secondary-Default',
      description: 'Дополнительный цвет для информационного статуса',
    },
    {
      name: 'None-Primary-Default',
      description: 'Основной цвет отсутствия статуса',
    },
    {
      name: 'None-Secondary-Default',
      description: 'Дополнительный цвет отсутствия статуса',
    },
    {
      name: 'Success-Primary-Default',
      description: 'Основной цвет для успешного статуса',
    },
    {
      name: 'Success-Secondary-Default',
      description: 'Дополнительный цвет для успешного статуса',
    },
    {
      name: 'Attention-Primary-Default',
      description: '⚠️ Основной цвет для ??? статуса',
    },
    {
      name: 'Attention-Secondary-Default',
      description: '⚠️ Дополнительный цвет для ??? статуса',
    },
    {
      name: 'Warning-Primary-Default',
      description: 'Основной цвет для предупредительного статуса',
    },
    {
      name: 'Warning-Secondary-Default',
      description: 'Дополнительный цвет для предупредительного статуса',
    },
    {
      name: 'Alarm-Primary-Default',
      description: 'Основной цвет для тревожного статуса',
    },
    {
      name: 'Alarm-Secondary-Default',
      description: 'Дополнительный цвет для тревожного статуса',
    },
    {
      groupName: 'Index',
      name: 'Plan',
      description: 'Плановые показатели',
    },
    {
      name: 'Fact',
      description: 'Фактические показатели',
    },
    {
      name: 'Success',
      description: '⚠️ Успешные показатели',
    },
    {
      name: 'Danger',
      description: '⚠️ ??? показатели',
    },
    {
      name: 'Warning',
      description: '⚠️ Предупредительные показатели',
    },
    {
      name: 'Alarm',
      description: '⚠️ Тревожные статусы',
    },
    {
      groupName: 'Table',
      name: 'Fill-Row-Zebra_Default',
      description: 'Зебра в таблице',
    },
    {
      name: 'Fill-Header-Default',
      description: 'Шапка колонки таблицы',
    },
    {
      name: 'Stroke-Cell-Default',
      description: 'Обводка ячеек таблицы',
    },
    {
      name: 'Fill-Header-Hover',
      description: 'Шапка колонки таблицы при наведении',
    },
    {
      name: 'Fill-Row-Hover',
      description: 'Строка таблицы при наведении',
    },
    {
      name: 'Fill-Row-Active',
      description: 'Выбранная строка таблицы',
    },
    {
      name: 'Fill-Cell-Disable',
      description: 'Заблокированная ячейка таблицы',
    },
    {
      name: 'Stroke-Cell-Hover',
      description: 'Обводка ячейки таблицы при наведении',
    },
    {
      name: 'Stroke-Cell-Active',
      description: 'Обводка активной ячейки таблицы',
    },
    {
      groupName: 'Status',
      name: 'Info-Primary-Hover',
      description: 'Основной цвет для информационного статуса при наведении',
    },
    {
      name: 'Info-Secondary-Hover',
      description: 'Дополнительный цвет для информационного статуса при наведении',
    },
    {
      name: 'None-Primary-Hover',
      description: 'Основной цвет отсутствия статуса при наведении',
    },
    {
      name: 'None-Secondary-Hover',
      description: 'Дополнительный цвет отсутствия статуса при наведении',
    },
    {
      name: 'Success-Primary-Hover',
      description: 'Основной цвет для успешного статуса при наведении',
    },
    {
      name: 'Success-Secondary-Hover',
      description: 'Дополнительный цвет для успешного статуса при наведении',
    },
    {
      name: 'Attention-Primary-Hover',
      description: '⚠️ Основной цвет для ??? статуса при наведении',
    },
    {
      name: 'Attention-Secondary-Hover',
      description: '⚠️ Дополнительный цвет для ??? статуса при наведении',
    },
    {
      name: 'Warning-Primary-Hover',
      description: 'Основной цвет для предупредительного статуса при наведении',
    },
    {
      name: 'Warning-Secondary-Hover',
      description: 'Дополнительный цвет для предупредительного статуса при наведении',
    },
    {
      name: 'Alarm-Primary-Hover',
      description: 'Основной цвет для тревожного статуса при наведении',
    },
    {
      name: 'Alarm-Secondary-Hover',
      description: 'Дополнительный цвет для тревожного статуса при наведении',
    },
    {
      groupName: 'Form',
      name: 'Fill-Default',
      description: 'Заливка для элементов форм',
    },
    {
      name: 'Fill-Disable',
      description: 'Заливка для заблокированных элементов форм',
    },
    {
      name: 'Stroke-Default',
      description: 'Обводка для элементов форм',
    },
    {
      name: 'Stroke-Hover',
      description: 'Обводка для элементов форм при наведении',
    },
    {
      name: 'Stroke-Disable',
      description: 'Обводка для заблокированных элементов форм',
    },
    {
      name: 'Active',
      description: 'Заливка/Обводка для активных элементов форм',
    },
    {
      name: 'Active-Hover',
      description: 'Заливка/Обводка для активных элементов форм при наведении',
    },
    {
      name: 'Active-Disable',
      description: '❓Заливка для заблокированных активных элементов форм',
    },
    {
      groupName: 'Button',
      name: 'Primary-Solid-Default',
      description: 'Основная залитая/контурная кнопка',
    },
    {
      name: 'Primary-Solid-Hover',
      description: 'Основная залитая/контурная кнопка при наведении',
    },
    {
      name: 'Primary-Solid-Active',
      description: 'Основная залитая/контурная кнопка при нажатии/активации',
    },
    {
      name: 'Primary-Ghost-Active',
      description: 'Основная прозрачная кнопка при нажатии/активации',
    },
    {
      name: 'Secondary-Solid-Hover',
      description: 'Второстепенная залитая/контурная кнопка при наведении',
    },
    {
      name: 'Secondary-Solid-Active',
      description: 'Второстепенная залитая/контурная кнопка при нажатии/активации',
    },
    {
      name: 'Secondary-Ghost-Active',
      description: 'Второстепенная прозрачная кнопка при нажатии/активации',
    },
    {
      name: 'Success-Solid-Default',
      description: 'Успешная залитая/контурная кнопка',
    },
    {
      name: 'Success-Solid-Hover',
      description: 'Успешная залитая/контурная кнопка при наведении',
    },
    {
      name: 'Success-Solid-Active',
      description: 'Успешная залитая/контурная кнопка при нажатии/активации',
    },
    {
      name: 'Success-Ghost-Active',
      description: 'Успешная прозрачная кнопка при нажатии/активации',
    },
    {
      name: 'Warning-Solid-Default',
      description: 'Предупредительная залитая/контурная кнопка',
    },
    {
      name: 'Warning-Solid-Hover',
      description: 'Предупредительная залитая/контурная кнопка при наведении',
    },
    {
      name: 'Warning-Solid-Active',
      description: 'Предупредительная залитая/контурная кнопка при нажатии/активации',
    },
    {
      name: 'Warning-Ghost-Active',
      description: 'Предупредительная прозрачная кнопка при нажатии/активации',
    },
    {
      name: 'Alarm-Solid-Default',
      description: 'Тревожная залитая/контурная кнопка',
    },
    {
      name: 'Alarm-Solid-Hover',
      description: 'Тревожная залитая/контурная кнопка при наведении',
    },
    {
      name: 'Alarm-Solid-Active',
      description: 'Тревожная залитая/контурная кнопка при нажатии/активации',
    },
    {
      name: 'Alarm-Ghost-Active',
      description: 'Тревожная прозрачная кнопка при нажатии/активации',
    },
    {
      name: 'Ghost-Hover',
      description: 'Прозрачная кнопка при наведении',
    },
    {
      name: '	Disable❓',
      description: 'Заблокированная кнопка',
    },
  ];
}
