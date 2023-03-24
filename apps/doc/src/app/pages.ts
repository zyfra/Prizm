import { PrizmDocPage, PrizmDocPageGroup } from '@prizm-ui/doc';
import { SectionNameEnum } from './model';

type OrderedPage = { order?: number };
export type PrizmOrderedDocPage = ReadonlyArray<
  (PrizmDocPage & OrderedPage) | (PrizmDocPageGroup & OrderedPage)
>;

export const pages: PrizmOrderedDocPage = [
  //Window
  {
    section: SectionNameEnum.allAboutPrizm,
    title: `О дизайн-системе Prizm`,
    keywords: 'дизайн-система, дизайн, система, design system, design, system',
    route: 'about-prizm/design-system',
    order: 1,
  },
  {
    section: SectionNameEnum.allAboutPrizm,
    title: `Лицензия`,
    keywords: 'лицензия, licence',
    route: 'about-prizm/license',
    order: 2,
  },
  {
    section: SectionNameEnum.allAboutPrizm,
    title: `Репозитории`,
    keywords: 'репозитории, repositories',
    route: 'about-prizm/repositories',
    order: 3,
  },
  {
    section: SectionNameEnum.allAboutPrizm,
    title: 'Связь с командой Prizm',
    keywords: 'Помощь, help, связь, contact',
    route: 'about-prizm/contacts',
    order: 4,
  },
  {
    section: SectionNameEnum.allAboutPrizm,
    title: 'Релизная политика',
    keywords: 'релизная, политика, release, policy',
    route: 'about-prizm/release-policy',
    order: 5,
  },
  {
    section: SectionNameEnum.allAboutPrizm,
    title: 'Соглашение об уровне услуг (SLA)',
    keywords: 'соглашение, уровень, услуга, service, level, agreement, sla',
    route: 'about-prizm/service-level-agreement',
    order: 6,
  },
  {
    section: SectionNameEnum.allAboutPrizm,
    title: 'Дорожная карта и задачи',
    keywords: 'дорожная, карта, задачи, roadmap, tasks',
    route: 'about-prizm/roadmap',
    order: 7,
  },
  {
    section: SectionNameEnum.allAboutPrizm,
    title: 'Журнал изменений (changelog)',
    keywords: 'ченджлог, changelog',
    route: 'about-prizm/changelog',
    order: 8,
  },
  {
    section: SectionNameEnum.allAboutPrizm,
    title: 'Список технологий',
    keywords: 'список, технология, technology, list',
    route: 'about-prizm/technology-list',
    order: 9,
  },
  //How to work
  {
    section: SectionNameEnum.howToWork,
    title: `Быстрый старт (разработчикам)`,
    keywords: 'intro, how, to, start, guide, getting started, main, главная, начало, как, начать, инструкция',
    route: 'how-to-work/for-developers',
    order: 1,
  },
  {
    section: SectionNameEnum.howToWork,
    title: `Интернационализация`,
    keywords: 'интернационализация, internationalization, мультиязычность, language, языки, multi, i18n',
    route: 'how-to-work/internationalization',
    order: 7,
  },
  {
    section: SectionNameEnum.howToWork,
    title: `Как перейти`,
    keywords: 'переход, как, transition, how',
    route: 'how-to-work/transition',
    order: 2,
  },
  {
    section: SectionNameEnum.howToWork,
    title: `Как добавить компонент`,
    keywords: 'добавить, компонент, как, add, component, how',
    route: 'how-to-work/add-component',
    order: 3,
  },
  {
    section: SectionNameEnum.howToWork,
    title: `Как поставить задачу`,
    keywords: 'поставить, задача, как, set, task, how',
    route: 'how-to-work/set-task',
    order: 4,
  },
  {
    section: SectionNameEnum.howToWork,
    title: 'Contributing',
    keywords: 'contributing',
    route: 'how-to-work/contributing',
    order: 5,
  },
  {
    section: SectionNameEnum.howToWork,
    title: 'CodeStyle',
    keywords: 'code, codestyle',
    route: 'how-to-work/codestyle',
    order: 6,
  },
  //For ZIIoT
  {
    section: SectionNameEnum.forZIIoT,
    title: `Введение`,
    keywords: 'введение, introduction',
    route: 'forZIIoT/introduction',
    order: 1,
  },
  {
    section: SectionNameEnum.forZIIoT,
    title: `Требования к UI библиотекам для ZIIoT`,
    keywords: 'требования, библиотеки, requirements, ui, libraries, ziiot',
    route: 'forZIIoT/library-requirements',
    order: 2,
  },
  {
    section: SectionNameEnum.forZIIoT,
    title: `Миграция`,
    keywords: 'миграция, migration',
    route: 'forZIIoT/migration',
    order: 3,
  },
  //Guidelines
  {
    section: SectionNameEnum.guidelines,
    title: `Типографика`,
    keywords: 'типографика, typography',
    route: 'guidelines/typography',
    order: 1,
  },
  {
    section: SectionNameEnum.guidelines,
    title: `Цвета`,
    keywords: 'цвета, colors',
    route: 'guidelines/colors',
    order: 2,
  },
  {
    section: SectionNameEnum.guidelines,
    title: `Сетки`,
    keywords: 'сетка, grid',
    route: 'guidelines/grid',
    order: 3,
  },

  // Documentation
  // {
  //   section: SectionNameEnum.allAboutPrizm,
  //   title: `About`,
  //   keywords: 'about, intro, how to, guide, main, главная, начало, инструкция',
  //   route: 'about',
  //   order: 11,
  // },
  // Components
  {
    section: SectionNameEnum.components,
    title: 'Skeleton',
    keywords: 'skeleton, prizmSkeleton, скелетор',
    route: '/components/skeleton',
  },
  {
    section: SectionNameEnum.components,
    title: 'Tree',
    keywords: 'дерево, prizm-tree, tree',
    route: '/components/tree',
  },
  {
    section: SectionNameEnum.components,
    title: 'Buttons',
    subPages: [
      {
        title: 'Button',
        keywords: 'button, кнопка',
        route: '/components/button',
      },
      // {
      //   title: 'Tree Button',
      //   keywords: 'tree-button, tree, дерево, кнопка, button',
      //   route: '/components/tree-button',
      // },
      {
        title: 'Split Button',
        keywords: 'split-button, split, раздельная, кнопка, button',
        route: '/components/split-button',
      },
      {
        title: 'Icon Button',
        keywords: 'icon, icon-button, button, кнопка',
        route: '/components/icon-button',
      },
    ],
  },
  {
    section: SectionNameEnum.components,
    title: 'Dropdowns',
    subPages: [
      {
        title: 'DropdownHost',
        keywords: 'dropdown, prizm-dropdown-host, overlay',
        route: '/components/dropdowns/dropdown-host',
      },
      {
        title: 'Select',
        keywords: 'select, prizm-select, overlay',
        route: '/components/dropdowns/select',
      },
      {
        title: 'MultiSelect',
        keywords: 'multi-select, prizm-multi-select, overlay',
        route: '/components/dropdowns/multi-select',
      },
    ],
  },
  {
    section: SectionNameEnum.components,
    title: 'Shadow',
    keywords: 'shadow, prizm-shadow, тень',
    route: '/components/shadow',
  },
  {
    section: SectionNameEnum.components,
    title: 'Card',
    keywords: 'card, prizm-card, карточка',
    route: '/components/card',
  },
  {
    section: SectionNameEnum.components,
    title: 'Widget',
    keywords: 'widget, prizm-widget, виджет',
    route: '/components/widget',
  },
  {
    section: SectionNameEnum.components,
    title: 'Calendars',
    subPages: [
      {
        title: 'Calendar',
        keywords: 'calendar, календарь,',
        route: '/components/calendar',
      },
      {
        title: 'Calendar Month',
        keywords: 'calendar-month, календарь, месяцев',
        route: '/components/calendar-month',
      },
      {
        title: 'CalendarRange',
        keywords: 'calendar-range, календарь, диапозон',
        route: '/components/calendar-range',
      },
    ],
  },
  {
    section: SectionNameEnum.components,
    title: 'Inputs',
    subPages: [
      {
        title: 'InputDateTime',
        keywords: 'input-date-time, date-time, form',
        route: '/components/input-date-time',
      },
      {
        title: 'InputDateTimeRange',
        keywords: 'input-date-time-range, date-time-range, form',
        route: '/components/input-date-time-range',
      },
      {
        title: 'InputTime',
        keywords: 'input-time, time, form',
        route: '/components/input-time',
      },
      {
        title: 'InputDate',
        keywords: 'input-date, date, form',
        route: '/components/input-date',
      },
      {
        title: 'InputMonth',
        keywords: 'input-month, date, form',
        route: '/components/input-month',
      },
      {
        title: 'InputMonthRange',
        keywords: 'input-month-range, date, form',
        route: '/components/input-month-range',
      },
      {
        title: 'InputDateRange',
        keywords: 'input-date-range, date-range, form',
        route: '/components/input-date-range',
      },
      {
        title: 'InputDateRelative',
        keywords: 'input-date-relative, date-relative, отностительный, дата, пикер, form',
        route: '/components/input-date-relative',
      },
      {
        title: 'InputDateMulti',
        keywords: 'input-date-multi, date-multi, мулти, дата, пикер, form',
        route: '/components/input-date-multi',
      },
      {
        title: 'InputText',
        keywords: 'input, text, form',
        route: '/components/input',
      },
      {
        title: 'Textarea',
        keywords: 'input, text, form',
        route: '/components/textarea',
      },
      {
        title: 'InputChips',
        keywords: 'input-chips, input, чипс',
        route: 'components/input-chips',
      },
      {
        title: 'InputNumber',
        keywords: 'input-number, input, number',
        route: 'components/input-number',
      },
      {
        title: 'InputMask',
        keywords: 'input-mask, input, mask, phone',
        route: '/components/input-mask',
      },
      {
        title: 'InputPassword',
        keywords: 'input-password, input, password',
        route: 'components/input-password',
      },
      {
        title: 'Carousel',
        keywords: 'carousel',
        route: 'components/carousel',
      },
    ],
  },
  {
    section: SectionNameEnum.components,
    title: 'Hint',
    keywords: 'hint, хинт',
    route: '/components/hint',
  },
  {
    section: SectionNameEnum.components,
    title: 'Toast',
    keywords: 'toast, тост',
    route: '/components/toast',
  },
  {
    section: SectionNameEnum.components,
    title: 'Dialogs',
    subPages: [
      {
        title: 'Dialog',
        keywords: 'dialog, диалог, окно, модальное, window',
        route: '/components/dialogs/dialog',
      },
      {
        title: 'Sidebar',
        keywords: 'sidebar, сайдбар, окно, модальное, window',
        route: '/components/dialogs/sidebar',
      },
      {
        title: 'Confirm Dialog',
        keywords: 'confirm-dialog',
        route: '/components/dialogs/confirm-dialog',
      },
    ],
  },
  {
    section: SectionNameEnum.components,
    title: 'Tooltip',
    keywords: 'tooltip, тултип',
    route: '/components/tooltip',
  },
  {
    section: SectionNameEnum.components,
    title: 'Confirm Popup',
    keywords: 'confirm, popup, confirm-popup, попап, конферм, конферм-попап',
    route: '/components/confirm-popup',
  },
  {
    section: SectionNameEnum.components,
    title: 'Icons',
    subPages: [
      {
        title: 'Old Icon',
        keywords: 'иконка, old-icon, deprecated',
        route: '/components/old-icon',
      },
      {
        title: 'Icon Flags',
        keywords: 'иконка, флаги. flags',
        route: '/components/flag-icons',
      },
      {
        title: 'Icon',
        keywords: 'иконка, icon',
        route: '/components/icon',
      },
    ],
  },
  {
    section: SectionNameEnum.components,
    title: 'Loader',
    keywords: 'loader, spinner, лоадер, спиннер, загрузка',
    route: '/components/loader',
  },
  {
    section: SectionNameEnum.components,
    title: 'Indicators',
    keywords: 'indicator, индикатор, danger, warning, success',
    route: '/components/indicators',
  },
  {
    section: SectionNameEnum.components,
    title: 'Checkbox',
    keywords: 'кнопка, чекбокс',
    route: '/components/checkbox',
  },
  {
    section: SectionNameEnum.components,
    title: 'Paginator',
    keywords: 'paginator, paging, пагинатор, пэйджинг',
    route: '/components/paginator',
  },
  {
    section: SectionNameEnum.components,
    title: 'Scrollbar',
    keywords: 'scrollbar, скролбар, скрол, scroll',
    route: '/components/scrollbar',
  },
  {
    section: SectionNameEnum.components,
    title: 'Toggle',
    keywords: 'toggle, тоггл, переключатель, switcher',
    route: '/components/toggle',
  },
  {
    section: SectionNameEnum.components,
    title: 'Progress',
    subPages: [
      {
        title: 'Progress Line',
        keywords: 'progress-line, прогресс, линия, line, bar',
        route: '/components/progress-line-bar',
      },
      {
        title: 'Progress Circle',
        keywords: 'progress-circle, прогресс, круг, circle, bar',
        route: '/components/progress-circle-bar',
      },
      {
        title: 'Progress Segmented',
        keywords: 'progress-segmented, прогресс, сегментация, segmented, bar',
        route: '/components/progress-line-segmented',
      },
    ],
  },
  {
    section: SectionNameEnum.components,
    title: 'Radio Button',
    keywords: 'radio, button, кнопка, радио',
    route: '/components/radio-button',
  },
  {
    section: SectionNameEnum.components,
    title: 'Table',
    keywords: 'table, таблица',
    route: '/components/table',
  },
  {
    section: SectionNameEnum.components,
    title: 'Table old',
    keywords: 'table, таблица',
    route: '/components/table-old',
  },
  {
    section: SectionNameEnum.components,
    title: 'Panel',
    keywords: 'panel, панель, header, хэдер',
    route: '/components/panel',
  },
  {
    section: SectionNameEnum.components,
    title: 'Tabs',
    keywords: 'tabs, табы, nav, навигация',
    route: '/components/tabs',
  },
  {
    section: SectionNameEnum.components,
    title: 'Breadcrumbs',
    keywords: 'breadcrumbs, хлебные крошки, таб, nav, навигация',
    route: '/components/breadcrumbs',
  },
  {
    section: SectionNameEnum.components,
    title: 'Accordion',
    keywords: 'accordion, аккордеон',
    route: '/components/accordion',
  },
  {
    section: SectionNameEnum.components,
    title: 'Side-menu',
    keywords: 'side-menu, side, menu, меню, боковое меню',
    route: '/components/side-menu',
  },
  {
    section: SectionNameEnum.components,
    title: 'Navigation menu',
    keywords: 'nav-menu, nav, menu, меню, навигация',
    route: '/components/nav-menu',
  },
  {
    section: SectionNameEnum.components,
    title: 'Navigation',
    keywords: 'nav-menu, navigation, nav, menu, меню, навигация',
    route: '/components/navigation',
  },
  {
    section: SectionNameEnum.components,
    title: 'Switcher',
    keywords: 'switcher, select-button, переключатель',
    route: '/components/switcher',
  },
  {
    section: SectionNameEnum.components,
    title: 'Grids',
    keywords: 'grids, сетка, сетки',
    route: '/components/grids',
  },
  {
    section: SectionNameEnum.components,
    title: 'Zoom control',
    keywords: 'zoom, zoom control, зум',
    route: '/components/zoom-control',
  },
  {
    section: SectionNameEnum.components,
    title: 'Stepper',
    keywords: 'stepper',
    route: '/components/stepper',
  },

  {
    section: SectionNameEnum.components,
    title: 'Splitter',
    keywords: 'splitter',
    route: '/components/splitter',
  },
  {
    section: SectionNameEnum.components,
    title: 'Slider',
    keywords: 'slider',
    route: '/components/slider',
  },
  {
    section: SectionNameEnum.components,
    title: 'Cron',
    keywords: 'Cron',
    route: '/components/cron',
  },
  {
    section: SectionNameEnum.components,
    title: 'Error page',
    keywords: 'error-page',
    route: '/components/error-page',
  },
  {
    section: SectionNameEnum.components,
    title: 'File upload',
    keywords: 'file upload',
    route: '/components/file-upload',
  },
  // Tools
  {
    section: SectionNameEnum.tools,
    title: 'Overlay',
    keywords: 'overlay, оверлей, modal, модальное',
    route: '/tools/overlay',
  },
  {
    section: SectionNameEnum.tools,
    title: 'To Observable',
    keywords: 'to-observable, pipec',
    route: '/tools/to-observable',
  },
  {
    section: SectionNameEnum.tools,
    title: 'Observable',
    keywords: 'observable, subject, decorator, декоратор, слушатель',
    route: '/tools/observable',
  },
  {
    section: SectionNameEnum.tools,
    title: 'Auto Emit',
    keywords: 'auto-emit, observable, subject, decorator, декоратор, слушатель',
    route: '/tools/auto-emit',
  },
  {
    section: SectionNameEnum.tools,
    title: 'Polymorph',
    keywords: 'polymorh, полиморф, template, шаблон',
    route: '/tools/polymorph',
  },
  {
    section: SectionNameEnum.tools,
    title: 'Theme Service',
    keywords: 'theme, service, тема, цвета, типография, colors, typography',
    route: '/tools/theme-service',
  },
  {
    section: SectionNameEnum.tools,
    title: 'Theme Module',
    keywords: 'theme, module, тема, цвета, типография, colors, typography',
    route: '/tools/theme',
  },
  // TODO active after finish charts
  // Charts
  {
    section: SectionNameEnum.charts,
    title: 'Line',
    keywords: 'charts, line, графики',
    route: '/charts/line',
  },
  {
    section: SectionNameEnum.charts,
    title: 'Area',
    keywords: 'charts, area, графики',
    route: '/charts/area',
  },
  {
    section: SectionNameEnum.charts,
    title: 'Bar',
    keywords: 'charts, bar, графики',
    route: '/charts/bar',
  },
  {
    section: SectionNameEnum.charts,
    title: 'Gauge',
    keywords: 'charts, gauge, графики',
    route: '/charts/gauge',
  },
  {
    section: SectionNameEnum.charts,
    title: 'Scatter',
    keywords: 'charts, scatter, графики',
    route: '/charts/scatter',
  },
  {
    section: SectionNameEnum.charts,
    title: 'Treemap',
    keywords: 'charts, treemap, графики',
    route: '/charts/treemap',
  },
  {
    section: SectionNameEnum.charts,
    title: 'Radar',
    keywords: 'charts, radar, графики',
    route: '/charts/radar',
  },
  {
    section: SectionNameEnum.charts,
    title: 'Pie',
    keywords: 'charts, pie, графики',
    route: '/charts/pie',
  },
  {
    section: SectionNameEnum.charts,
    title: 'Radial Bar',
    keywords: 'charts, radial-bar, графики',
    route: '/charts/radial-bar',
  },
  {
    section: SectionNameEnum.charts,
    title: 'Waterfall',
    keywords: 'charts, waterfall, графики',
    route: '/charts/waterfall',
  },
  {
    section: SectionNameEnum.charts,
    title: 'Column',
    keywords: 'charts, column-group, графики',
    route: '/charts/column-group',
  },
  // Helpers
  // {
  //   section: `Helpers`,
  //   title: `Helpers`,
  //   subPages: [],
  // },
  // State
  // {
  //   section: `State`,
  //   title: `State`,
  //   subPages: [],
  // },
];
