import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { PrizmToastService } from '@prizm-ui/components';
import { RawLoaderContent } from '@taiga-ui/addon-doc';
import { copyToClipboard } from '../../../../../../src/app/util';
import { Clipboard } from '@angular/cdk/clipboard';

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

  public readonly tokens: { name: string; description: string; variable: string; groupName?: string }[] = [
    {
      groupName: 'Text-Icon',
      name: 'Primary',
      description: 'Заголовок',
      variable: '--prizm-v3-text-icon-primary',
    },
    {
      name: 'Secondary',
      description: 'Параграф текста',
      variable: '--prizm-v3-text-icon-secondary',
    },
    {
      name: 'Tertiary',
      description: 'Описание',
      variable: '--prizm-v3-text-icon-tertiary',
    },
    {
      name: 'Disable',
      description: 'Цвет заблокированных текстовых блоков',
      variable: '--prizm-v3-text-icon-disable',
    },
    {
      name: 'Revers',
      description: 'Для контента в хинтах и тутипах',
      variable: '--prizm-v3-text-icon-revers',
    },
    {
      name: 'Link',
      description: 'Ссылка',
      variable: '--prizm-v3-text-icon-link',
    },
    {
      name: 'Link-Hover',
      description: 'Цвет наведения на ссылку',
      variable: '--prizm-v3-text-icon-link-hover',
    },
    {
      name: 'Link-Visited',
      description: 'Цвет посещенной ссылки',
      variable: '--prizm-v3-text-icon-link-visited',
    },
    {
      groupName: 'Background',
      name: 'Fill-Primary',
      description: 'Тело виджета',
      variable: '--prizm-v3-background-fill-primary',
    },
    {
      name: 'Fill-Secondary',
      description: 'Подложка виджета',
      variable: '--prizm-v3-background-fill-secondary',
    },
    {
      name: 'Fill-Revers',
      description: 'Тело хинта и тултипа',
      variable: '--prizm-v3-background-fill-revers',
    },
    {
      name: 'Stroke',
      description: 'Обводка виджета',
      variable: '--prizm-v3-background-stroke',
    },
    {
      name: 'Overlay',
      description: 'Заливка при появлении модального окна',
      variable: '--prizm-v3-background-fill-overlay',
    },
    {
      name: 'Focus',
      description: 'Обводка фокуса для навигации с клавиатуры',
      variable: '--prizm-v3-background-stroke-focus',
    },
    {
      name: 'Fill-Overlay',
      description: 'Цвет всех всплывающих окон',
      variable: '--prizm-v3-background-fill-overlay',
    },
    {
      name: 'Fill-Blanket',
      description: 'Подложка модальных окон',
      variable: '--prizm-v3-background-fill-blanket',
    },
    {
      name: 'Fill-Panel',
      description: 'Заливка панели без перекраски в темной теме',
      variable: '--prizm-v3-background-fill-panel',
    },
    {
      groupName: 'Status',
      name: 'Info-Primary-Default',
      description: 'Основной цвет для информационного статуса',
      variable: '--prizm-v3-status-info-primary-default',
    },
    {
      name: 'Info-Secondary-Default',
      description: 'Дополнительный цвет для информационного статуса',
      variable: '--prizm-v3-status-info-secondary-defaul',
    },
    {
      name: 'None-Primary-Default',
      description: 'Основной цвет отсутствия статуса',
      variable: '--prizm-v3-status-none-primary-default',
    },
    {
      name: 'None-Secondary-Default',
      description: 'Дополнительный цвет отсутствия статуса',
      variable: '--prizm-v3-status-none-secondary-default',
    },
    {
      name: 'Success-Primary-Default',
      description: 'Основной цвет для успешного статуса',
      variable: '--prizm-v3-status-success-primary-default',
    },
    {
      name: 'Success-Secondary-Default',
      description: 'Дополнительный цвет для успешного статуса',
      variable: '--prizm-v3-status-success-secondary-default',
    },
    {
      name: 'Attention-Primary-Default',
      description: '⚠️ Основной цвет для ??? статуса',
      variable: '--prizm-v3-status-attention-primary-default',
    },
    {
      name: 'Attention-Secondary-Default',
      description: '⚠️ Дополнительный цвет для ??? статуса',
      variable: '--prizm-v3-status-attention-secondary-default',
    },
    {
      name: 'Warning-Primary-Default',
      description: 'Основной цвет для предупредительного статуса',
      variable: '--prizm-v3-status-warning-primary-default',
    },
    {
      name: 'Warning-Secondary-Default',
      description: 'Дополнительный цвет для предупредительного статуса',
      variable: '--prizm-v3-status-warning-secondary-default',
    },
    {
      name: 'Alarm-Primary-Default',
      description: 'Основной цвет для тревожного статуса',
      variable: '-prizm-v3-status-alarm-primary-default',
    },
    {
      name: 'Alarm-Secondary-Default',
      description: 'Дополнительный цвет для тревожного статуса',
      variable: '--prizm-v3-status-alarm-secondary-default',
    },
    {
      groupName: 'Index',
      name: 'Plan',
      description: 'Плановые показатели',
      variable: '--prizm-v3-index-plan',
    },
    {
      name: 'Fact',
      description: 'Фактические показатели',
      variable: '--prizm-v3-index-fact',
    },
    {
      name: 'Success',
      description: '⚠️ Успешные показатели',
      variable: '',
    },
    {
      name: 'Danger',
      description: '⚠️ ??? показатели',
      variable: '',
    },
    {
      name: 'Warning',
      description: '⚠️ Предупредительные показатели',
      variable: '',
    },
    {
      name: 'Alarm',
      description: '⚠️ Тревожные статусы',
      variable: '',
    },
    {
      groupName: 'Table',
      name: 'Fill-Row-Zebra_Default',
      description: 'Зебра в таблице',
      variable: '--prizm-v3-table-fill-row-zebra_default',
    },
    {
      name: 'Fill-Header-Default',
      description: 'Шапка колонки таблицы',
      variable: '--prizm-v3-table-fill-header-default',
    },
    {
      name: 'Stroke-Cell-Default',
      description: 'Обводка ячеек таблицы',
      variable: '--prizm-v3-table-stroke-cell-default',
    },
    {
      name: 'Fill-Header-Hover',
      description: 'Шапка колонки таблицы при наведении',
      variable: '-prizm-v3-table-fill-header-hover',
    },
    {
      name: 'Fill-Row-Hover',
      description: 'Строка таблицы при наведении',
      variable: '--prizm-v3-table-fill-row-hover',
    },
    {
      name: 'Fill-Row-Active',
      description: 'Выбранная строка таблицы',
      variable: '--prizm-v3-table-fill-row-active',
    },
    {
      name: 'Fill-Cell-Disable',
      description: 'Заблокированная ячейка таблицы',
      variable: '--prizm-v3-table-fill-cell-disable',
    },
    {
      name: 'Stroke-Cell-Hover',
      description: 'Обводка ячейки таблицы при наведении',
      variable: '--prizm-v3-table-stroke-cell-hover',
    },
    {
      name: 'Stroke-Cell-Active',
      description: 'Обводка активной ячейки таблицы',
      variable: '--prizm-v3-table-stroke-cell-active',
    },
    {
      groupName: 'Status',
      name: 'Info-Primary-Hover',
      description: 'Основной цвет для информационного статуса при наведении',
      variable: '--prizm-v3-status-info-primary-hover',
    },
    {
      name: 'Info-Secondary-Hover',
      description: 'Дополнительный цвет для информационного статуса при наведении',
      variable: '--prizm-v3-status-info-secondary-hover',
    },
    {
      name: 'None-Primary-Hover',
      description: 'Основной цвет отсутствия статуса при наведении',
      variable: '--prizm-v3-status-none-primary-hover:',
    },
    {
      name: 'None-Secondary-Hover',
      description: 'Дополнительный цвет отсутствия статуса при наведении',
      variable: '--prizm-v3-status-none-secondary-hover:',
    },
    {
      name: 'Success-Primary-Hover',
      description: 'Основной цвет для успешного статуса при наведении',
      variable: '--prizm-v3-status-success-primary-hover',
    },
    {
      name: 'Success-Secondary-Hover',
      description: 'Дополнительный цвет для успешного статуса при наведении',
      variable: '--prizm-v3-status-success-secondary-hover',
    },
    {
      name: 'Attention-Primary-Hover',
      description: '⚠️ Основной цвет для ??? статуса при наведении',
      variable: '--prizm-v3-status-attention-primary-hover',
    },
    {
      name: 'Attention-Secondary-Hover',
      description: '⚠️ Дополнительный цвет для ??? статуса при наведении',
      variable: '--prizm-v3-status-attention-secondary-hover',
    },
    {
      name: 'Warning-Primary-Hover',
      description: 'Основной цвет для предупредительного статуса при наведении',
      variable: '--prizm-v3-status-warning-primary-hover',
    },
    {
      name: 'Warning-Secondary-Hover',
      description: 'Дополнительный цвет для предупредительного статуса при наведении',
      variable: '--prizm-v3-status-warning-secondary-hover',
    },
    {
      name: 'Alarm-Primary-Hover',
      description: 'Основной цвет для тревожного статуса при наведении',
      variable: '--prizm-v3-status-alarm-primary-hover',
    },
    {
      name: 'Alarm-Secondary-Hover',
      description: 'Дополнительный цвет для тревожного статуса при наведении',
      variable: '--prizm-v3-status-alarm-secondary-hover',
    },
    {
      groupName: 'Form',
      name: 'Fill-Default',
      description: 'Заливка для элементов форм',
      variable: '--prizm-v3-form-fill-default',
    },
    {
      name: 'Fill-Disable',
      description: 'Заливка для заблокированных элементов форм',
      variable: '--prizm-v3-form-fill-disable',
    },
    {
      name: 'Stroke-Default',
      description: 'Обводка для элементов форм',
      variable: '--prizm-v3-form-stroke-default',
    },
    {
      name: 'Stroke-Hover',
      description: 'Обводка для элементов форм при наведении',
      variable: '--prizm-v3-form-stroke-hover',
    },
    {
      name: 'Stroke-Disable',
      description: 'Обводка для заблокированных элементов форм',
      variable: '--prizm-v3-form-stroke-disable',
    },
    {
      name: 'Active',
      description: 'Заливка/Обводка для активных элементов форм',
      variable: '--prizm-v3-form-active',
    },
    {
      name: 'Active-Hover',
      description: 'Заливка/Обводка для активных элементов форм при наведении',
      variable: '--prizm-v3-form-active-hover',
    },
    {
      name: 'Active-Disable',
      description: '❓Заливка для заблокированных активных элементов форм',
      variable: '--prizm-v3-form-active-disable',
    },
    {
      groupName: 'Button',
      name: 'Primary-Solid-Default',
      description: 'Основная залитая/контурная кнопка',
      variable: '--prizm-v3-button-primary-solid-default',
    },
    {
      name: 'Primary-Solid-Hover',
      description: 'Основная залитая/контурная кнопка при наведении',
      variable: '-prizm-v3-button-primary-solid-hover',
    },
    {
      name: 'Primary-Solid-Active',
      description: 'Основная залитая/контурная кнопка при нажатии/активации',
      variable: '--prizm-v3-button-primary-solid-active',
    },
    {
      name: 'Primary-Ghost-Active',
      description: 'Основная прозрачная кнопка при нажатии/активации',
      variable: '--prizm-v3-button-primary-ghost-active',
    },
    {
      name: 'Secondary-Solid-Hover',
      description: 'Второстепенная залитая/контурная кнопка при наведении',
      variable: '--prizm-v3-button-secondary-solid-hover',
    },
    {
      name: 'Secondary-Solid-Active',
      description: 'Второстепенная залитая/контурная кнопка при нажатии/активации',
      variable: '--prizm-v3-button-secondary-solid-active',
    },
    {
      name: 'Secondary-Ghost-Active',
      description: 'Второстепенная прозрачная кнопка при нажатии/активации',
      variable: '--prizm-v3-button-secondary-ghost-active',
    },
    {
      name: 'Success-Solid-Default',
      description: 'Успешная залитая/контурная кнопка',
      variable: '--prizm-v3-button-success-solid-default',
    },
    {
      name: 'Success-Solid-Hover',
      description: 'Успешная залитая/контурная кнопка при наведении',
      variable: '--prizm-v3-button-success-solid-hover',
    },
    {
      name: 'Success-Solid-Active',
      description: 'Успешная залитая/контурная кнопка при нажатии/активации',
      variable: '--prizm-v3-button-success-solid-active',
    },
    {
      name: 'Success-Ghost-Active',
      description: 'Успешная прозрачная кнопка при нажатии/активации',
      variable: '--prizm-v3-button-success-ghost-active',
    },
    {
      name: 'Warning-Solid-Default',
      description: 'Предупредительная залитая/контурная кнопка',
      variable: '--prizm-v3-button-warning-solid-default',
    },
    {
      name: 'Warning-Solid-Hover',
      description: 'Предупредительная залитая/контурная кнопка при наведении',
      variable: '-prizm-v3-button-warning-solid-hover',
    },
    {
      name: 'Warning-Solid-Active',
      description: 'Предупредительная залитая/контурная кнопка при нажатии/активации',
      variable: '--prizm-v3-button-warning-solid-active',
    },
    {
      name: 'Warning-Ghost-Active',
      description: 'Предупредительная прозрачная кнопка при нажатии/активации',
      variable: '--prizm-v3-button-warning-ghost-active',
    },
    {
      name: 'Alarm-Solid-Default',
      description: 'Тревожная залитая/контурная кнопка',
      variable: '--prizm-v3-button-alarm-solid-default',
    },
    {
      name: 'Alarm-Solid-Hover',
      description: 'Тревожная залитая/контурная кнопка при наведении',
      variable: '--prizm-v3-button-alarm-solid-hover',
    },
    {
      name: 'Alarm-Solid-Active',
      description: 'Тревожная залитая/контурная кнопка при нажатии/активации',
      variable: '--prizm-v3-button-alarm-solid-active',
    },
    {
      name: 'Alarm-Ghost-Active',
      description: 'Тревожная прозрачная кнопка при нажатии/активации',
      variable: '--prizm-v3-button-alarm-ghost-active',
    },
    {
      name: 'Ghost-Hover',
      description: 'Прозрачная кнопка при наведении',
      variable: '--prizm-v3-button-ghost-hover',
    },
    {
      name: '	Disable❓',
      description: 'Заблокированная кнопка',
      variable: '--prizm-v3-button-disable',
    },
  ];

  constructor(
    @Inject(Clipboard) public readonly clipboard: Clipboard,
    private readonly toastService: PrizmToastService
  ) {}

  public copy(value: string): void {
    copyToClipboard(value, this.clipboard, this.toastService);
  }
}
