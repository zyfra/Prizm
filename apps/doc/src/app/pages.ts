import { TuiDocPages } from '@taiga-ui/addon-doc';

export const pages: TuiDocPages = [
  // Documentation
  {
    section: `Documentation`,
    title: `Getting started`,
    keywords: 'intro, how to, guide, main, главная, начало, инструкция',
    route: 'getting-started',
  },
  {
    section: `Documentation`,
    title: 'Generate example',
    keywords: 'создать пример, шаблон, generate, template, example',
    route: 'generate-example',
  },
  // Components
  {
    section: `Components`,
    title: 'Skeleton',
    keywords: 'skeleton, zuiSkeleton, скелетор',
    route: '/components/skeleton',
  },
  {
    section: `Components`,
    title: 'Tree',
    keywords: 'дерево, zui-tree, tree',
    route: '/components/tree',
  },
  {
    section: `Components`,
    title: 'Button',
    keywords: 'кнопка, zui-button, иконка',
    route: '/components/button',
  },
  {
    section: `Components`,
    title: 'Dropdowns',
    subPages: [
      {
        title: 'DropdownHost',
        keywords: 'dropdown, zui-dropdown-host, overlay',
        route: '/components/dropdowns/dropdown-host',
      },
      {
        title: 'Select',
        keywords: 'select, zui-select, overlay',
        route: '/components/dropdowns/select',
      },
      {
        title: 'MultiSelect',
        keywords: 'multi-select, zui-multi-select, overlay',
        route: '/components/dropdowns/multi-select',
      },
    ],
  },
  {
    section: `Components`,
    title: 'Shadow',
    keywords: 'shadow, zui-shadow, тень',
    route: '/components/shadow',
  },
  {
    section: `Components`,
    title: 'Card',
    keywords: 'card, zui-card, карточка',
    route: '/components/card',
  },
  {
    section: `Components`,
    title: 'Widget',
    keywords: 'widget, zui-widget, виджет',
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
    title: 'Icon',
    keywords: 'иконка, icon',
    route: '/components/icon',
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
  // Tools
  {
    section: `Tools`,
    title: 'Overlay',
    keywords: 'overlay, оверлей, modal, модальное',
    route: '/tools/overlay',
  },
  // Helpers
  {
    section: `Helpers`,
    title: `Helpers`,
    subPages: [],
  },
  // State
  {
    section: `State`,
    title: `State`,
    subPages: [],
  },
];
