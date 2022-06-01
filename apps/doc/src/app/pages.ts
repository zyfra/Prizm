import {TuiDocPages} from '@taiga-ui/addon-doc';

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
          title: 'Button',
          keywords: 'кнопка, zui-button, иконка',
          route: '/components/button',
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
  // Helpers
    {
        section: `Helpers`,
        title: `Helpers`,
        subPages: [
        ],
    },
    // State
    {
      section: `State`,
      title: `State`,
      subPages: [
      ],
    },
];
