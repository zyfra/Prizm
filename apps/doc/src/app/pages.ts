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
    title: 'Example Component',
    keywords: 'демо кнопка, example-component, example-button',
    route: 'example-component',
  },
  // Components
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
    title: 'DropdownHost',
    keywords: 'dropdown, zui-dropdown-host, overlay',
    route: '/components/dropdown-host',
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
    title: 'Inputs',
    subPages: [
      {
        title: 'Input',
        keywords: 'input, text, form',
        route: '/components/input',
      },
      {
        title: 'InputChips',
        keywords: 'input-chips, input, чипс',
        route: 'components/input-chips',
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
        title: 'Confirm Dialog',
        keywords: 'confirm-dialog',
        route: '/components/dialogs/confirm-dialog',
      }
    ]
  },
  {
    section: `Components`,
    title: 'Tooltip',
    keywords: 'tooltip, тултип',
    route: '/components/tooltip',
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
