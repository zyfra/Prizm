import { PrizmDocPage, PrizmDocPageGroup } from '@prizm-ui/doc';
import { SectionNameEnglishEnum, SectionNameEnum } from './model';

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
    title: `Темы`,
    keywords: 'темы, theme',
    route: 'guidelines/theme',
    order: 3,
  },
  {
    section: SectionNameEnum.guidelines,
    title: `Сетки`,
    keywords: 'сетка, grid',
    route: 'guidelines/grid',
    order: 4,
  },
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
    title: 'Sticky',
    keywords: 'sticky, prizm-sticky',
    route: '/components/sticky',
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
        title: 'Calendar Range',
        keywords: 'calendar-range, календарь, диапозон',
        route: '/components/calendar-range',
      },
    ],
  },
  {
    section: SectionNameEnum.components,
    title: 'Listing Item',
    keywords: 'list item, cell, dropdown cell, listing item, список, элемент списка',
    route: '/components/listing-item',
  },
  {
    section: SectionNameEnum.components,
    title: 'Inputs',
    subPages: [
      {
        title: 'InputMultiSelect',
        keywords: 'input-multi-select, multi-select, form',
        route: '/components/input-multi-select',
      },

      {
        title: 'InputTreeMultiSelect',
        keywords: 'input-tree-multi-select, tree-multi-select, form',
        route: '/components/input-tree-multi-select',
      },
      {
        title: 'InputLayoutDateTime',
        keywords: 'input-layout-date-time, date-time, form',
        route: '/components/input-layout-date-time',
      },
      {
        title: 'InputSelect',
        keywords: 'input-select, select, form',
        route: '/components/input-select',
      },
      {
        title: 'InputTreeSelect',
        keywords: 'input-tree-select, tree-select, form',
        route: '/components/input-tree-select',
      },
      {
        title: 'InputLayoutDateTimeRange',
        keywords: 'input-layout-date-time-range, date-time-range, form',
        route: '/components/input-layout-date-time-range',
      },
      {
        title: 'InputLayoutTime',
        keywords: 'input-layout-time, time, form',
        route: '/components/input-layout-time',
      },
      {
        title: 'InputLayoutDate',
        keywords: 'input-layout-date, date, input, form',
        route: '/components/input-layout-date',
      },
      {
        title: 'InputLayoutMonth',
        keywords: 'input-layout-month, date, form',
        route: '/components/input-layout-month',
      },
      {
        title: 'InputLayoutMonthRange',
        keywords: 'input-layout-month-range, date, form',
        route: '/components/input-layout-month-range',
      },
      {
        title: 'InputLayoutDateRange',
        keywords: 'input-layout-date-range, date-range, form',
        route: '/components/input-layout-date-range',
      },
      {
        title: 'InputLayoutDateRelative',
        keywords: 'input-layout-date-relative, date-relative, отностительный, дата, пикер, form',
        route: '/components/input-layout-date-relative',
      },
      {
        title: 'InputDateMulti',
        keywords: 'input-date-multi, date-multi, мулти, дата, пикер, form',
        route: '/components/input-date-multi',
      },
      {
        title: 'Input',
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
        title: 'InputCarousel',
        keywords: 'input-carousel, input',
        route: 'components/input-carousel',
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
    title: 'Counter',
    keywords: 'counter, каунтер, счетчик',
    route: '/components/counter',
  },
  {
    section: SectionNameEnum.components,
    title: 'Icons',
    subPages: [
      // {
      //   title: 'Icon',
      //   keywords: 'иконка, old-icon, deprecated',
      //   route: '/components/old-icon',
      //   status: 'deprecated',
      // },
      {
        title: 'Flags',
        keywords: 'иконка, флаги. flags',
        route: '/components/flag-icons',
      },
      {
        title: 'Svg Icons',
        keywords: 'иконка, icon, svg',
        route: '/components/icon',
        status: 'removed',
      },
      {
        title: 'Icons',
        keywords: 'icons, icon, svg, font',
        route: '/components/icons',
        status: 'new',
      },
    ],
  },
  {
    section: SectionNameEnum.components,
    title: 'Loader',
    keywords: 'loader, лоадер, загрузка',
    route: '/components/loader',
  },
  {
    section: SectionNameEnum.components,
    title: 'Spinner',
    keywords: 'loader, spinner, лоадер, спиннер, загрузка',
    route: '/components/spinner',
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
    title: 'Navigation Menu',
    keywords: 'navigation-menu, nav, navigation, menu, меню, навигация',
    route: '/components/navigation-menu',
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
    title: 'Zoom Control',
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
    title: 'Cron Human Readable',
    keywords: 'Cron,Human,Readable',
    route: '/components/cron-human-readable',
  },
  {
    section: SectionNameEnum.components,
    title: 'Error Page',
    keywords: 'error-page',
    route: '/components/error-page',
  },
  {
    section: SectionNameEnum.components,
    title: 'File Upload',
    keywords: 'file upload',
    route: '/components/file-upload',
  },
  {
    section: SectionNameEnum.components,
    title: 'Query Builder',
    status: 'preview',
    keywords: 'query, expression, QueryBuilder, запрос, выражение',
    route: '/components/query-builder',
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
    title: 'Nxmv',
    keywords: 'nxmv, move, version, версии, изменить',
    route: '/tools/nxmv',
  },
  {
    section: SectionNameEnum.tools,
    title: 'Ast Html',
    keywords: 'html, parser, парсер',
    route: '/tools/ast-html',
  },
  {
    section: SectionNameEnum.tools,
    title: 'Zone Events',
    keywords: 'zone, зона, events, события',
    route: '/tools/zone-events',
  },
  {
    section: SectionNameEnum.tools,
    title: 'Nx Plugin',
    keywords: 'plugin, generator, executor, плагин, генератор',
    route: '/tools/nx-plugin',
  },
  {
    section: SectionNameEnum.tools,
    title: 'AST',
    keywords: 'ast, helpers, prizm',
    route: '/tools/ast',
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
];

export const pagesEnglish: PrizmOrderedDocPage = [
  {
    section: SectionNameEnglishEnum.allAboutPrizm,
    title: `About Prizm Design System`,
    keywords: 'design system, design, system',
    route: 'about-prizm/design-system',
    order: 1,
  },
  {
    section: SectionNameEnglishEnum.allAboutPrizm,
    title: `License`,
    keywords: 'license',
    route: 'about-prizm/license',
    order: 2,
  },
  {
    section: SectionNameEnglishEnum.allAboutPrizm,
    title: `Repositories`,
    keywords: 'repositories',
    route: 'about-prizm/repositories',
    order: 3,
  },
  {
    section: SectionNameEnglishEnum.allAboutPrizm,
    title: 'Contact Prizm team',
    keywords: 'Help, help, contact',
    route: 'about-prizm/contacts',
    order: 4,
  },
  {
    section: SectionNameEnglishEnum.allAboutPrizm,
    title: 'Release Policy',
    keywords: 'release, policy',
    route: 'about-prizm/release-policy',
    order: 5,
  },
  {
    section: SectionNameEnglishEnum.allAboutPrizm,
    title: 'Service Level Agreement (SLA)',
    keywords: 'agreement, service, level, agreement, sla',
    route: 'about-prizm/service-level-agreement',
    order: 6,
  },
  {
    section: SectionNameEnglishEnum.allAboutPrizm,
    title: 'Roadmap and Tasks',
    keywords: 'roadmap, tasks',
    route: 'about-prizm/roadmap',
    order: 7,
  },
  {
    section: SectionNameEnglishEnum.allAboutPrizm,
    title: 'Changelog',
    keywords: 'changelog',
    route: 'about-prizm/changelog',
    order: 8,
  },
  //How to work
  {
    section: SectionNameEnglishEnum.howToWork,
    title: `Quick Start (for developers)`,
    keywords: 'intro, how to, start, guide, getting started, main',
    route: 'how-to-work/for-developers',
    order: 1,
  },
  {
    section: SectionNameEnglishEnum.howToWork,
    title: `Internationalization`,
    keywords: 'internationalization, language, multi, i18n',
    route: 'how-to-work/internationalization',
    order: 7,
  },
  {
    section: SectionNameEnglishEnum.howToWork,
    title: `How to Transition`,
    keywords: 'transition, how',
    route: 'how-to-work/transition',
    order: 2,
  },
  {
    section: SectionNameEnglishEnum.howToWork,
    title: `How to Add Component`,
    keywords: 'add, component, how',
    route: 'how-to-work/add-component',
    order: 3,
  },
  {
    section: SectionNameEnglishEnum.howToWork,
    title: `How to Set a Task`,
    keywords: 'set, task, how',
    route: 'how-to-work/set-task',
    order: 4,
  },
  {
    section: SectionNameEnglishEnum.howToWork,
    title: 'Contributing',
    keywords: 'contributing',
    route: 'how-to-work/contributing',
    order: 5,
  },
  {
    section: SectionNameEnglishEnum.howToWork,
    title: 'CodeStyle',
    keywords: 'code, codestyle',
    route: 'how-to-work/codestyle',
    order: 6,
  },
  //For ZIIoT
  {
    section: SectionNameEnglishEnum.forZIIoT,
    title: `Introduction`,
    keywords: 'introduction',
    route: 'forZIIoT/introduction',
    order: 1,
  },
  {
    section: SectionNameEnglishEnum.forZIIoT,
    title: `UI Library Requirements for ZIIoT`,
    keywords: 'requirements, libraries, ui, ziiot',
    route: 'forZIIoT/library-requirements',
    order: 2,
  },
  {
    section: SectionNameEnglishEnum.forZIIoT,
    title: `Migration`,
    keywords: 'migration',
    route: 'forZIIoT/migration',
    order: 3,
  },
  //Guidelines
  {
    section: SectionNameEnglishEnum.guidelines,
    title: `Typography`,
    keywords: 'typography',
    route: 'guidelines/typography',
    order: 1,
  },
  {
    section: SectionNameEnglishEnum.guidelines,
    title: `Colors`,
    keywords: 'colors',
    route: 'guidelines/colors',
    order: 2,
  },
  {
    section: SectionNameEnglishEnum.guidelines,
    title: `Themes`,
    keywords: 'themes',
    route: 'guidelines/theme',
    order: 3,
  },
  {
    section: SectionNameEnglishEnum.guidelines,
    title: `Grids`,
    keywords: 'grid',
    route: 'guidelines/grid',
    order: 4,
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Skeleton',
    keywords: 'skeleton, prizmSkeleton',
    route: '/components/skeleton',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Tree',
    keywords: 'tree, prizm-tree',
    route: '/components/tree',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Buttons',
    subPages: [
      {
        title: 'Button',
        keywords: 'button',
        route: '/components/button',
      },
      {
        title: 'Split Button',
        keywords: 'split-button, split, button',
        route: '/components/split-button',
      },
      {
        title: 'Icon Button',
        keywords: 'icon, icon-button, button',
        route: '/components/icon-button',
      },
    ],
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Dropdowns',
    subPages: [
      {
        title: 'DropdownHost',
        keywords: 'dropdown, prizm-dropdown-host, overlay',
        route: '/components/dropdowns/dropdown-host',
      },
    ],
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Shadow',
    keywords: 'shadow, prizm-shadow',
    route: '/components/shadow',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Sticky',
    keywords: 'sticky, prizm-sticky',
    route: '/components/sticky',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Card',
    keywords: 'card, prizm-card',
    route: '/components/card',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Widget',
    keywords: 'widget, prizm-widget',
    route: '/components/widget',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Calendars',
    subPages: [
      {
        title: 'Calendar',
        keywords: 'calendar',
        route: '/components/calendar',
      },
      {
        title: 'Calendar Month',
        keywords: 'calendar-month',
        route: '/components/calendar-month',
      },
      {
        title: 'Calendar Range',
        keywords: 'calendar-range',
        route: '/components/calendar-range',
      },
    ],
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Listing Item',
    status: 'preview',
    keywords: 'list item, cell, dropdown cell, listing item',
    route: '/components/listing-item',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Inputs',
    subPages: [
      {
        title: 'InputMultiSelect',
        keywords: 'input-multi-select, multi-select, form',
        route: '/components/input-multi-select',
      },
      {
        title: 'InputTreeMultiSelect',
        keywords: 'input-tree-multi-select, tree-multi-select, form',
        route: '/components/input-tree-multi-select',
      },
      {
        title: 'InputLayoutDateTime',
        keywords: 'input-layout-date-time, date-time, form',
        route: '/components/input-layout-date-time',
      },
      {
        title: 'InputSelect',
        keywords: 'input-select, select, form',
        route: '/components/input-select',
      },
      {
        title: 'InputTreeSelect',
        keywords: 'input-tree-select, tree-select, form',
        route: '/components/input-tree-select',
      },
      {
        title: 'InputLayoutDateTimeRange',
        keywords: 'input-layout-date-time-range, date-time-range, form',
        route: '/components/input-layout-date-time-range',
      },
      {
        title: 'InputLayoutTime',
        keywords: 'input-layout-time, time, form',
        route: '/components/input-layout-time',
      },
      {
        title: 'InputLayoutDate',
        keywords: 'input-layout-date, date, input, form',
        route: '/components/input-layout-date',
      },
      {
        title: 'InputLayoutMonth',
        keywords: 'input-layout-month, date, form',
        route: '/components/input-layout-month',
      },
      {
        title: 'InputLayoutMonthRange',
        keywords: 'input-layout-month-range, date, form',
        route: '/components/input-layout-month-range',
      },
      {
        title: 'InputLayoutDateRange',
        keywords: 'input-layout-date-range, date-range, form',
        route: '/components/input-layout-date-range',
      },
      {
        title: 'InputLayoutDateRelative',
        keywords: 'input-layout-date-relative, date-relative, отностительный, дата, пикер, form',
        route: '/components/input-layout-date-relative',
      },
      {
        title: 'InputDateMulti',
        keywords: 'input-date-multi, date-multi, мулти, дата, пикер, form',
        route: '/components/input-date-multi',
      },
      {
        title: 'Input',
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
        title: 'InputCarousel',
        keywords: 'input-carousel, input',
        route: 'components/input-carousel',
      },
    ],
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Hint',
    keywords: 'hint',
    route: '/components/hint',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Toast',
    keywords: 'toast',
    route: '/components/toast',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Dialogs',
    subPages: [
      {
        title: 'Dialog',
        keywords: 'dialog, window',
        route: '/components/dialogs/dialog',
      },
      {
        title: 'Sidebar',
        keywords: 'sidebar, window',
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
    section: SectionNameEnglishEnum.components,
    title: 'Tooltip',
    keywords: 'tooltip',
    route: '/components/tooltip',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Confirm Popup',
    keywords: 'confirm, popup, confirm-popup',
    route: '/components/confirm-popup',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Counter',
    keywords: 'counter',
    route: '/components/counter',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Icons',
    subPages: [
      // {
      //   title: 'Icon',
      //   keywords: 'icon, deprecated',
      //   route: '/components/old-icon',
      //   status: 'deprecated',
      // },
      {
        title: 'Flags',
        keywords: 'icon, flags',
        route: '/components/flag-icons',
      },
      {
        title: 'Svg Icons',
        keywords: 'icon, svg',
        route: '/components/icon',
        status: 'deprecated',
      },
      {
        title: 'Icons',
        keywords: 'icons, icon, svg, font',
        route: '/components/icons',
        status: 'new',
      },
    ],
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Loader',
    keywords: 'loader',
    route: '/components/loader',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Spinner',
    keywords: 'loader, spinner',
    route: '/components/spinner',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Indicators',
    keywords: 'indicator, danger, warning, success',
    route: '/components/indicators',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Checkbox',
    keywords: 'button, checkbox',
    route: '/components/checkbox',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Paginator',
    keywords: 'paginator, paging',
    route: '/components/paginator',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Scrollbar',
    keywords: 'scrollbar, scroll',
    route: '/components/scrollbar',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Toggle',
    keywords: 'toggle, switcher',
    route: '/components/toggle',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Progress',
    subPages: [
      {
        title: 'Progress Line',
        keywords: 'progress-line, line, bar',
        route: '/components/progress-line-bar',
      },
      {
        title: 'Progress Circle',
        keywords: 'progress-circle, circle, bar',
        route: '/components/progress-circle-bar',
      },
      {
        title: 'Progress Segmented',
        keywords: 'progress-segmented, segmented, bar',
        route: '/components/progress-line-segmented',
      },
    ],
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Radio Button',
    keywords: 'radio, button',
    route: '/components/radio-button',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Table',
    keywords: 'table',
    route: '/components/table',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Panel',
    keywords: 'panel, header',
    route: '/components/panel',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Tabs',
    keywords: 'tabs, nav, navigation',
    route: '/components/tabs',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Breadcrumbs',
    keywords: 'breadcrumbs, nav, navigation',
    route: '/components/breadcrumbs',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Accordion',
    keywords: 'accordion',
    route: '/components/accordion',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Side-menu',
    keywords: 'side-menu, menu',
    route: '/components/side-menu',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Navigation Menu',
    keywords: 'navigation-menu, nav, menu',
    route: '/components/navigation-menu',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Navigation',
    keywords: 'nav-menu, nav, menu',
    route: '/components/navigation',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Switcher',
    keywords: 'switcher, select-button',
    route: '/components/switcher',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Grids',
    keywords: 'grids',
    route: '/components/grids',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Zoom Control',
    keywords: 'zoom, zoom control',
    route: '/components/zoom-control',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Stepper',
    keywords: 'stepper',
    route: '/components/stepper',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Splitter',
    keywords: 'splitter',
    route: '/components/splitter',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Slider',
    keywords: 'slider',
    route: '/components/slider',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Cron',
    keywords: 'cron',
    route: '/components/cron',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Cron Human Readable',
    keywords: 'cron, human readable',
    route: '/components/cron-human-readable',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'Error Page',
    keywords: 'error page',
    route: '/components/error-page',
  },
  {
    section: SectionNameEnglishEnum.components,
    title: 'File Upload',
    keywords: 'file upload',
    route: '/components/file-upload',
  },
  {
    section: SectionNameEnum.components,
    title: 'Query Builder',
    status: 'preview',
    keywords: 'query, expression, QueryBuilder, запрос, выражение',
    route: '/components/query-builder',
  },

  {
    section: SectionNameEnglishEnum.tools,
    title: 'Overlay',
    keywords: 'overlay, modal',
    route: '/tools/overlay',
  },
  {
    section: SectionNameEnglishEnum.tools,
    title: 'AST HTML',
    keywords: 'html, parser',
    route: '/tools/ast-html',
  },

  {
    section: SectionNameEnum.tools,
    title: 'Nxmv',
    keywords: 'nxmv, move, version, версии, изменить',
    route: '/tools/nxmv',
  },
  {
    section: SectionNameEnglishEnum.tools,
    title: 'Zone Events',
    keywords: 'zone, events',
    route: '/tools/zone-events',
  },
  {
    section: SectionNameEnglishEnum.tools,
    title: 'Nx Plugin',
    keywords: 'plugin, generator, executor',
    route: '/tools/nx-plugin',
  },
  {
    section: SectionNameEnglishEnum.tools,
    title: 'AST',
    keywords: 'ast, helpers, prizm',
    route: '/tools/ast',
  },
  {
    section: SectionNameEnglishEnum.tools,
    title: 'To Observable',
    keywords: 'to-observable, pipe',
    route: '/tools/to-observable',
  },
  {
    section: SectionNameEnglishEnum.tools,
    title: 'Observable',
    keywords: 'observable, subject, decorator',
    route: '/tools/observable',
  },
  {
    section: SectionNameEnglishEnum.tools,
    title: 'Auto Emit',
    keywords: 'auto-emit, observable, subject, decorator',
    route: '/tools/auto-emit',
  },
  {
    section: SectionNameEnglishEnum.tools,
    title: 'Polymorph',
    keywords: 'polymorph, template',
    route: '/tools/polymorph',
  },
  {
    section: SectionNameEnglishEnum.tools,
    title: 'Theme Service',
    keywords: 'theme, service, colors, typography',
    route: '/tools/theme-service',
  },
  {
    section: SectionNameEnglishEnum.tools,
    title: 'Theme Module',
    keywords: 'theme, module, colors, typography',
    route: '/tools/theme',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Line',
    keywords: 'charts, line',
    route: '/charts/line',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Area',
    keywords: 'charts, area',
    route: '/charts/area',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Bar',
    keywords: 'charts, bar',
    route: '/charts/bar',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Gauge',
    keywords: 'charts, gauge',
    route: '/charts/gauge',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Scatter',
    keywords: 'charts, scatter',
    route: '/charts/scatter',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Treemap',
    keywords: 'charts, treemap',
    route: '/charts/treemap',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Radar',
    keywords: 'charts, radar',
    route: '/charts/radar',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Pie',
    keywords: 'charts, pie',
    route: '/charts/pie',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Radial Bar',
    keywords: 'charts, radial bar',
    route: '/charts/radial-bar',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Waterfall',
    keywords: 'charts, waterfall',
    route: '/charts/waterfall',
  },
  {
    section: SectionNameEnglishEnum.charts,
    title: 'Column',
    keywords: 'charts, column group',
    route: '/charts/column-group',
  },
];
