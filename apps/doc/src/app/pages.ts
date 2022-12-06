import { TuiDocPages } from '@taiga-ui/addon-doc';
import { TuiDocPage, TuiDocPageGroup } from '@taiga-ui/addon-doc/interfaces/page';

type OrderedPage = { order?: number };
export type TuiOrderedDocPage = ReadonlyArray<(TuiDocPage & OrderedPage) | (TuiDocPageGroup & OrderedPage)>;

export const pages: TuiOrderedDocPage = [
  // Documentation
  {
    section: `Documentation`,
    title: `About`,
    keywords: 'about, intro, how to, guide, main, главная, начало, инструкция',
    route: 'about',
    order: 1,
  },
  {
    section: `Documentation`,
    title: `Getting started`,
    keywords: 'intro, how to, guide, main, главная, начало, инструкция',
    route: 'getting-started',
    order: 2,
  },
  {
    section: `Documentation`,
    title: 'Changelog',
    keywords: 'ченджлог, changelog',
    route: 'changelog',
    order: 3,
  },
  // Components
  {
    section: `Components`,
    title: 'Skeleton',
    keywords: 'skeleton, prizmSkeleton, скелетор',
    route: '/components/skeleton',
  },
  {
    section: `Components`,
    title: 'Tree',
    keywords: 'дерево, prizm-tree, tree',
    route: '/components/tree',
  },
  {
    section: `Components`,
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
    section: `Components`,
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
    section: `Components`,
    title: 'Shadow',
    keywords: 'shadow, prizm-shadow, тень',
    route: '/components/shadow',
  },
  {
    section: `Components`,
    title: 'Card',
    keywords: 'card, prizm-card, карточка',
    route: '/components/card',
  },
  {
    section: `Components`,
    title: 'Widget',
    keywords: 'widget, prizm-widget, виджет',
    route: '/components/widget',
  },
  {
    section: `Components`,
    title: 'Calendars',
    subPages: [
      {
        title: 'Calendar',
        keywords: 'calendar, календарь,',
        route: '/components/calendar',
      },
      {
        title: 'CalendarRange',
        keywords: 'calendar-range, календарь, диапозон',
        route: '/components/calendar-range',
      },
    ],
  },
  {
    section: `Components`,
    title: 'Inputs',
    subPages: [
      {
        title: 'InputDateTime',
        keywords: 'input-date-time, date-time, form',
        route: '/components/input-date-time',
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
    section: `Components`,
    title: 'Hint',
    keywords: 'hint, хинт',
    route: '/components/hint',
  },
  {
    section: `Components`,
    title: 'Toast',
    keywords: 'toast, тост',
    route: '/components/toast',
  },
  {
    section: `Components`,
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
    section: `Components`,
    title: 'Tooltip',
    keywords: 'tooltip, тултип',
    route: '/components/tooltip',
  },
  {
    section: `Components`,
    title: 'Confirm Popup',
    keywords: 'confirm, popup, confirm-popup, попап, конферм, конферм-попап',
    route: '/components/confirm-popup',
  },
  {
    section: `Components`,
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
        route: '/components/icon-flags',
      },
      {
        title: 'Icon',
        keywords: 'иконка, icon',
        route: '/components/icon',
      },
    ]
  },
  {
    section: `Components`,
    title: 'Loader',
    keywords: 'loader, spinner, лоадер, спиннер, загрузка',
    route: '/components/loader',
  },
  {
    section: `Components`,
    title: 'Indicators',
    keywords: 'indicator, индикатор, danger, warning, success',
    route: '/components/indicators',
  },
  {
    section: `Components`,
    title: 'Checkbox',
    keywords: 'кнопка, чекбокс',
    route: '/components/checkbox',
  },
  {
    section: `Components`,
    title: 'Paginator',
    keywords: 'paginator, paging, пагинатор, пэйджинг',
    route: '/components/paginator',
  },
  {
    section: `Components`,
    title: 'Scrollbar',
    keywords: 'scrollbar, скролбар, скрол, scroll',
    route: '/components/scrollbar',
  },
  {
    section: `Components`,
    title: 'Toggle',
    keywords: 'toggle, тоггл, переключатель, switcher',
    route: '/components/toggle',
  },
  {
    section: `Components`,
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
    section: `Components`,
    title: 'Radio Button',
    keywords: 'radio, button, кнопка, радио',
    route: '/components/radio-button',
  },
  {
    section: `Components`,
    title: 'Table',
    keywords: 'table, таблица',
    route: '/components/table',
  },
  {
    section: `Components`,
    title: 'Table old',
    keywords: 'table, таблица',
    route: '/components/table-old',
  },
  {
    section: `Components`,
    title: 'Panel',
    keywords: 'panel, панель, header, хэдер',
    route: '/components/panel',
  },
  {
    section: `Components`,
    title: 'Tabs',
    keywords: 'tabs, табы, nav, навигация',
    route: '/components/tabs',
  },
  {
    section: `Components`,
    title: 'Breadcrumbs',
    keywords: 'breadcrumbs, хлебные крошки, таб, nav, навигация',
    route: '/components/breadcrumbs',
  },
  {
    section: `Components`,
    title: 'Accordion',
    keywords: 'accordion, аккордеон',
    route: '/components/accordion',
  },
  {
    section: `Components`,
    title: 'Side-menu',
    keywords: 'side-menu, side, menu, меню, боковое меню',
    route: '/components/side-menu',
  },
  {
    section: `Components`,
    title: 'Navigation menu',
    keywords: 'nav-menu, nav, menu, меню, навигация',
    route: '/components/nav-menu',
  },
  {
    section: `Components`,
    title: 'Switcher',
    keywords: 'switcher, select-button, переключатель',
    route: '/components/switcher',
  },
  {
    section: `Components`,
    title: 'Grids',
    keywords: 'grids, сетка, сетки',
    route: '/components/grids',
  },
  {
    section: `Components`,
    title: 'Zoom control',
    keywords: 'zoom, zoom control, зум',
    route: '/components/zoom-control',
  },
  {
    section: `Components`,
    title: 'Stepper',
    keywords: 'stepper',
    route: '/components/stepper',
  },
  // Tools
  {
    section: `Tools`,
    title: 'Overlay',
    keywords: 'overlay, оверлей, modal, модальное',
    route: '/tools/overlay',
  },
  // TODO active after finish charts
  // Charts
  // {
  //   section: `Charts`,
  //   title: 'Line',
  //   keywords: 'charts, line, графики',
  //   route: '/charts/line',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Area',
  //   keywords: 'charts, area, графики',
  //   route: '/charts/area',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Stack',
  //   keywords: 'charts, stack, графики',
  //   route: '/charts/stack',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Bar',
  //   keywords: 'charts, bar, графики',
  //   route: '/charts/bar',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Gauge',
  //   keywords: 'charts, gauge, графики',
  //   route: '/charts/gauge',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Scatter',
  //   keywords: 'charts, scatter, графики',
  //   route: '/charts/scatter',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Treemap',
  //   keywords: 'charts, treemap, графики',
  //   route: '/charts/treemap',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Radar',
  //   keywords: 'charts, radar, графики',
  //   route: '/charts/radar',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Pie',
  //   keywords: 'charts, pie, графики',
  //   route: '/charts/pie',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Radio Bar',
  //   keywords: 'charts, radio-bar, графики',
  //   route: '/charts/radio-bar',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Waterfall',
  //   keywords: 'charts, waterfall, графики',
  //   route: '/charts/waterfall',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Group Bar',
  //   keywords: 'charts, group-bar, графики',
  //   route: '/charts/group-bar',
  // },
  // {
  //   section: `Charts`,
  //   title: 'Column Group',
  //   keywords: 'charts, column-group, графики',
  //   route: '/charts/column-group',
  // },
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
